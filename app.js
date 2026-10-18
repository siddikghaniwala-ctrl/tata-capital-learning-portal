/**
 * ==============================================================================
 * TATA CAPITAL LEARNING & DEVELOPMENT PORTAL - MAIN APPLICATION CONTROLLER
 * ==============================================================================
 * This script powers all interactive functionality:
 * 1. Reactive Demo Controls (Business, Role, Employee Type, Days Since Joining)
 * 2. 5-Milestone Stepper Roadmap with animated "YOU ARE HERE" marker
 * 3. Dual Employee Views (New Employee Onboarding vs. Existing Employee Upskilling)
 * 4. Multi-level Filters (Category, Digital Sub-tracks, Mode, Level, Search)
 * 5. Interactive Modals (Course Syllabus, Lightbox, Reminders, Compliance Simulator)
 * 6. Chart.js Dashboards (Doughnut status chart, Monthly bar chart, Team compliance)
 * 7. Print-Friendly Summary Generation
 * 
 * CODING STYLE FOR BEGINNERS:
 * - Clear functions with single responsibilities.
 * - Centralized state object (appState) that triggers UI re-renders on change.
 * - Robust comments explaining the 'why' and 'how'.
 * ==============================================================================
 */

// --- 1. GLOBAL APPLICATION STATE ---
const appState = {
  // Current simulated persona
  currentBusiness: "retail",
  currentRole: "employee",           // "employee" or "manager"
  currentEmployeeType: "new",        // "new" or "existing"
  daysSinceJoining: 45,

  // UI Navigation states
  activeTab: "learning-basket",      // Default active tab
  activeMilestone: 60,               // 30, 60, 90, 180, or 360
  basketViewType: "new",             // "new" or "existing" (mirrors or toggled)
  
  // Training filtering & search
  selectedCategory: "all",
  digitalSubCategory: "all",         // "all", "ai", "excel", "ppt"
  searchQuery: "",
  filterMode: "all",
  filterLevel: "all",
  filterTag: "all",
  filterSort: "relevance",

  // Know Your Trainings tab state
  selectedMonth: "November",
  activeElearningModuleId: null,
  isPlayingElearning: false,
  activeNewsletterPage: 1,
  multiFeedbackRatings: { content: 5, faculty: 5, exercises: 4, platform: 5 },
  kytViewMode: "list",               // "list" or "calendar"

  // User activity tracker (Stored in memory for the demo session)
  enrolledCourseIds: new Set(["TR-001", "TR-002", "TR-003"]),
  completedCourseIds: new Set(["TR-001", "TR-002"]),
  complianceProgress: {
    "comp-tcoc": 100,
    "comp-posh": 100,
    "comp-fpc": 65,
    "comp-kyc": 0,
    "comp-taap": 0,
    "comp-cyber": 40
  },

  // Manager filter state
  mgrFilterMilestone: "all",
  mgrFilterStatus: "all",
  mgrSearchQuery: "",

  // Charts references (to safely destroy and redraw)
  charts: {
    statusDoughnut: null,
    monthlyBar: null,
    teamCompliance: null,
    dashTeamCompliance: null
  }
};

// --- 2. INITIALIZATION ON DOCUMENT LOAD ---
document.addEventListener("DOMContentLoaded", () => {
  console.log("Tata Capital L&D Portal: Initializing Application...");
  
  // Bind Demo Control DOM events
  setupDemoControls();

  // Initialize About Tab content
  renderAboutTab();

  // Set initial milestone based on default 45 days
  appState.activeMilestone = getMilestoneFromDays(appState.daysSinceJoining);
  
  // Render Initial View
  syncPersonaUI();
  renderLearningBasket();
  renderElearningCards();
  renderComplianceModules();
  renderSherpaSection();
  renderSherpaEligibility();
  initKnowYourTrainings();
  renderEngagementSection();
  renderDashboard();

  // Setup Keyboard shortcuts (ESC closes modals)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  console.log("Tata Capital L&D Portal: Ready.");
});

// --- 3. DEMO CONTROLS & PERSONA SIMULATOR ---
function setupDemoControls() {
  const bizSelect = document.getElementById("demo-business-select");
  const roleSelect = document.getElementById("demo-role-select");
  const typeSelect = document.getElementById("demo-type-select");
  const daysInput = document.getElementById("demo-days-input");
  const resetBtn = document.getElementById("demo-reset-btn");

  // 1. Business dropdown listener
  bizSelect.addEventListener("change", (e) => {
    appState.currentBusiness = e.target.value;
    syncPersonaUI();
    renderLearningBasket();
    renderKnowYourTrainings();
    renderDashboard();
    showToast(`Switched Business: ${getBusinessName(appState.currentBusiness)}`);
  });

  // 2. Role dropdown listener (Employee, Manager, Reviewer, Business Head, COO & Head HR)
  roleSelect.addEventListener("change", (e) => {
    const val = e.target.value;
    appState.currentRole = val;
    const mgrTab = document.getElementById("manager-nav-tab");
    
    if (val === "manager") {
      mgrTab.style.display = "block";
      showToast("Role changed to Manager: 'Manager View' tab is now visible!");
      setDashboardViewMode("manager");
    } else if (val === "reviewer") {
      mgrTab.style.display = "none";
      switchTab("dashboard");
      setDashboardViewMode("reviewer");
      showToast("Role changed to Reviewer (Cluster/Area): Opened Reviewer Dashboard!");
    } else if (val === "biz_head") {
      mgrTab.style.display = "none";
      switchTab("dashboard");
      setDashboardViewMode("biz_head");
      showToast("Role changed to Business Head: Opened Two-Wheeler & Retail Vertical Dashboard!");
    } else if (val === "coo_hr") {
      mgrTab.style.display = "none";
      switchTab("dashboard");
      setDashboardViewMode("coo_hr");
      showToast("Role changed to COO & Head HR: Opened COO Dashboard / Head HR Dashboard (Retail & BU View)!");
    } else if (val === "md_chro") {
      mgrTab.style.display = "none";
      switchTab("dashboard");
      setDashboardViewMode("md_chro");
      showToast("Role changed to MD & CHRO: Opened Apex Board Talent & Governance Suite!");
    } else {
      mgrTab.style.display = "none";
      if (appState.activeTab === "manager") {
        switchTab("learning-basket");
      }
      setDashboardViewMode("employee");
      showToast("Role changed to Employee (Learner View).");
    }
    syncPersonaUI();
  });

  // 3. Employee Type listener (New vs Existing) - Synchronized with Tenure & Learning Journey
  typeSelect.addEventListener("change", (e) => {
    handleEmployeeTypeChange(e.target.value);
  });

  // 4. Days Since Joining input listener - Dynamic Milestone & Program Basket
  daysInput.addEventListener("input", (e) => {
    let days = parseInt(e.target.value, 10);
    if (isNaN(days) || days < 0) days = 0;
    appState.daysSinceJoining = days;
    
    // Automatically recalculate current milestone
    const newMilestone = getMilestoneFromDays(days);
    appState.activeMilestone = newMilestone;

    // Auto-align employee type if tenure exceeds vintage threshold
    if (days >= 180 && appState.currentEmployeeType === "new") {
      appState.currentEmployeeType = "existing";
      appState.basketViewType = "existing";
      const typeSelect = document.getElementById("demo-type-select");
      if (typeSelect) typeSelect.value = "existing";
    }

    // Reset filters to "all" to immediately show relevant programs for this stage
    appState.selectedCategory = "all";
    appState.digitalSubCategory = "all";
    updateCategoryChipActiveState("all");

    syncPersonaUI();
    renderLearningBasket();
    renderSherpaEligibility();
    initKnowYourTrainings();
    renderDashboard();
  });

  // Reset demo button
  resetBtn.addEventListener("click", () => {
    bizSelect.value = "retail";
    roleSelect.value = "employee";
    typeSelect.value = "new";
    daysInput.value = 45;

    appState.currentBusiness = "retail";
    appState.currentRole = "employee";
    appState.currentEmployeeType = "new";
    appState.basketViewType = "new";
    appState.daysSinceJoining = 45;
    appState.activeMilestone = 60;

    document.getElementById("manager-nav-tab").style.display = "none";
    syncPersonaUI();
    setLearningBasketView("new", false);
    renderLearningBasket();
    renderDashboard();
    showToast("Demo persona reset to defaults (Day 45, New Employee, Retail).");
  });
}

/**
 * Handles seamless switching between New Employee and Tenured Existing Employee:
 * - Existing Employee: automatically sets tenure to > 6 months (Day 210),
 *   moves the roadmap "YOU ARE HERE" marker to 360+ Days (or 180 Days),
 *   switches the curriculum to Upskilling/Leadership, and updates dashboard metrics.
 * - New Employee: sets tenure to Day 45 (60-day milestone),
 *   moves marker to 60 Days, and switches curriculum to Onboarding foundations.
 */
function handleEmployeeTypeChange(type) {
  appState.currentEmployeeType = type;
  appState.basketViewType = type;

  const typeSelect = document.getElementById("demo-type-select");
  if (typeSelect && typeSelect.value !== type) {
    typeSelect.value = type;
  }

  const daysInput = document.getElementById("demo-days-input");

  // Reset category filters to "all" so new stage displays relevant curriculum immediately
  appState.selectedCategory = "all";
  appState.digitalSubCategory = "all";
  appState.searchQuery = "";
  const searchInput = document.getElementById("training-search-input");
  if (searchInput) searchInput.value = "";
  updateCategoryChipActiveState("all");

  if (type === "existing") {
    // Tenured Existing Employee: > 6 months (Day 210 = 7 Months vintage)
    appState.daysSinceJoining = 210;
    if (daysInput) daysInput.value = 210;
    appState.activeMilestone = 360; // 360+ Days stage
    showToast("Switched to Tenured Existing Employee (Day 210, > 6 Months). Dynamic program basket updated with Upskilling & Leadership courses!");
  } else {
    // New Employee Onboarding: Day 45 (60-Day stage)
    appState.daysSinceJoining = 45;
    if (daysInput) daysInput.value = 45;
    appState.activeMilestone = 60; // 60 Days stage
    showToast("Switched to New Employee Onboarding (Day 45). Dynamic program basket updated with Onboarding & Working Knowledge courses!");
  }

  // Synchronize Learning Basket toggle buttons
  const btnNew = document.getElementById("view-toggle-new");
  const btnExisting = document.getElementById("view-toggle-existing");
  if (type === "new") {
    btnNew?.classList.add("active");
    btnExisting?.classList.remove("active");
  } else {
    btnExisting?.classList.add("active");
    btnNew?.classList.remove("active");
  }

  syncPersonaUI();
  renderLearningBasket();
  renderSherpaEligibility();
  initKnowYourTrainings();
  renderDashboard();
}

function updateCategoryChipActiveState(catKey) {
  const chips = document.querySelectorAll("#category-chips-container .cat-chip");
  chips.forEach(c => {
    if (c.getAttribute("data-cat") === catKey) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });
}

/**
 * Calculates which milestone corresponds to the given number of days:
 * <= 30 => 30
 * 31 to 60 => 60
 * 61 to 90 => 90
 * 91 to 180 => 180
 * > 180 => 360
 */
function getMilestoneFromDays(days) {
  if (days <= 30) return 30;
  if (days <= 60) return 60;
  if (days <= 90) return 90;
  if (days <= 180) return 180;
  return 360;
}

/**
 * Updates UI labels, badges, headers, and hero greeting based on active persona.
 */
function syncPersonaUI() {
  const bizObj = TC_DATA.businesses.find(b => b.id === appState.currentBusiness) || TC_DATA.businesses[0];
  const userName = TC_DATA.userProfile.name;
  
  // Header user info
  const headerUserName = document.getElementById("header-user-name");
  if (headerUserName) headerUserName.textContent = userName;

  const userRoleText = document.getElementById("header-user-role");
  if (userRoleText) {
    const isNew = appState.currentEmployeeType === "new";
    const typeLabel = isNew ? "New Employee" : "Existing Employee";
    const roleSuffix = appState.currentRole === "manager" ? " • Manager" : "";
    userRoleText.textContent = `${typeLabel}${roleSuffix} • ${bizObj.shortName}`;
  }

  const journeyChip = document.getElementById("header-journey-chip");
  if (journeyChip) {
    journeyChip.innerHTML = `<i class="fa-solid fa-clock"></i> Day ${appState.daysSinceJoining}`;
  }

  // Hero section updates
  const heroGreeting = document.getElementById("hero-greeting-name");
  if (heroGreeting) heroGreeting.textContent = userName;

  const heroSubtitle = document.getElementById("hero-subtitle-text");
  if (heroSubtitle) {
    const isNew = appState.currentEmployeeType === "new";
    const stageDesc = isNew ? "Specialized lending onboarding & foundational curriculum" : "Specialized domain upskilling, leadership & Sherpa mentorship curriculum";
    heroSubtitle.innerHTML = `You are currently at <strong>Day ${appState.daysSinceJoining}</strong> (${appState.activeMilestone >= 360 ? '360+ Days' : appState.activeMilestone + ' Days'} stage). ${stageDesc} loaded for <strong>${bizObj.name}</strong>.`;
  }

  const heroStageStat = document.getElementById("hero-stage-stat");
  if (heroStageStat) {
    heroStageStat.textContent = appState.activeMilestone >= 360 ? "360+ Days" : `${appState.activeMilestone} Days`;
  }

  // Learning basket tag
  const lbBizTag = document.getElementById("current-biz-tag-lb");
  if (lbBizTag) lbBizTag.innerHTML = `<i class="fa-solid fa-building"></i> ${bizObj.name}`;

  // Print section labels
  const printUserName = document.getElementById("print-user-name");
  if (printUserName) printUserName.textContent = userName;

  const printUserBiz = document.getElementById("print-user-biz");
  if (printUserBiz) printUserBiz.textContent = bizObj.name;
  
  const printDate = document.getElementById("print-date");
  if (printDate) printDate.textContent = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Helper to look up business name
function getBusinessName(bizId) {
  const found = TC_DATA.businesses.find(b => b.id === bizId);
  return found ? found.name : bizId;
}

// Helper to programmatically change business (used in footer links)
function setDemoBusiness(bizId) {
  const select = document.getElementById("demo-business-select");
  if (select) {
    select.value = bizId;
    select.dispatchEvent(new Event("change"));
  }
}

// --- 4. TAB NAVIGATION CONTROLLER ---
function switchTab(tabId) {
  appState.activeTab = tabId;

  // Update nav buttons
  const navButtons = document.querySelectorAll(".nav-tab-btn");
  navButtons.forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Switch tab pane visibility
  const panes = document.querySelectorAll(".tab-pane");
  panes.forEach(pane => {
    pane.classList.remove("active");
  });

  const targetPane = document.getElementById(`${tabId}-tab`);
  if (targetPane) {
    targetPane.classList.add("active");
    // Scroll smoothly to top of main content
    window.scrollTo({ top: 380, behavior: 'smooth' });
  }

  // Trigger tab-specific renders or chart resizes if needed
  if (tabId === "dashboard") {
    renderDashboardCharts();
  } else if (tabId === "manager") {
    renderManagerTab();
  }
}

// Mobile Nav Menu Toggle
const mobileBtn = document.getElementById("mobile-nav-btn");
if (mobileBtn) {
  mobileBtn.addEventListener("click", () => {
    const navWrap = document.getElementById("main-nav-wrapper");
    if (navWrap.style.display === "block") {
      navWrap.style.display = "";
    } else {
      navWrap.style.display = "block";
    }
  });
}

// --- 5. TAB 1: ABOUT TATA CAPITAL CONTROLLER ---
function renderAboutTab() {
  const info = TC_DATA.companyInfo;

  // 1. Render Numbers Strip
  const numbersGrid = document.getElementById("about-numbers-grid");
  if (numbersGrid) {
    numbersGrid.innerHTML = info.stats.map(s => `
      <div class="number-card">
        <i class="${s.icon}"></i>
        <div class="number-value">${s.value}</div>
        <div class="number-label">${s.label}</div>
      </div>
    `).join("");
  }

  // 2. Render Values
  const valuesGrid = document.getElementById("about-values-grid");
  if (valuesGrid) {
    valuesGrid.innerHTML = info.values.map(v => `
      <div class="value-card">
        <div class="value-icon"><i class="${v.icon}"></i></div>
        <h4 class="value-title">${v.name}</h4>
        <p class="value-desc">${v.desc}</p>
      </div>
    `).join("");
  }

  // 3. Render 9 Businesses
  const bizGrid = document.getElementById("about-businesses-grid");
  if (bizGrid) {
    bizGrid.innerHTML = TC_DATA.businesses.map(b => `
      <div class="biz-card">
        <div class="biz-card-header">
          <div class="biz-card-icon"><i class="${b.icon}"></i></div>
          <h4 class="biz-card-title">${b.name}</h4>
        </div>
        <p class="biz-card-desc">${b.description}</p>
        <button class="btn btn-secondary" style="margin-top: 0.75rem; font-size: 0.75rem; padding: 0.3rem 0.6rem;" onclick="setDemoBusiness('${b.id}'); switchTab('learning-basket');">
          <i class="fa-solid fa-graduation-cap"></i> View ${b.shortName} Journey
        </button>
      </div>
    `).join("");
  }

  // 4. Render Corporate Functions
  const funcGrid = document.getElementById("about-functions-grid");
  if (funcGrid) {
    funcGrid.innerHTML = info.functions.map(f => `
      <div class="biz-card">
        <div class="biz-card-header">
          <div class="biz-card-icon" style="background: #eff6ff; color: #1e40af;"><i class="${f.icon}"></i></div>
          <h4 class="biz-card-title">${f.name}</h4>
        </div>
        <p class="biz-card-desc">${f.desc}</p>
      </div>
    `).join("");
  }

  // 5. Render Management Cards (Dignified Corporate Executive Monograms - No Photos)
  const mgmtGrid = document.getElementById("about-management-grid");
  if (mgmtGrid) {
    mgmtGrid.innerHTML = info.management.map(m => `
      <div class="mgmt-card">
        <div class="mgmt-monogram-wrap">
          <div class="mgmt-initials-badge">
            <span>${m.initials}</span>
          </div>
          <span class="mgmt-corp-tag"><i class="fa-solid fa-building-columns"></i> ${m.business || "Tata Capital"}</span>
        </div>
        <div class="mgmt-body">
          <h4 class="mgmt-name">${m.name}</h4>
          <div class="mgmt-designation">${m.designation}</div>
          <p class="mgmt-bio">${m.bio}</p>
        </div>
      </div>
    `).join("");
  }

  // 5B. Render Know Your L&D Team (All 9 Businesses & Central Leadership)
  renderLdTeamCards("all");

  // 6. Render Timeline
  const timelineWrap = document.getElementById("about-timeline-wrap");
  if (timelineWrap) {
    timelineWrap.innerHTML = info.timeline.map(t => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <span class="timeline-year">${t.year}</span>
        <h4 class="timeline-title">${t.title}</h4>
        <p class="timeline-desc">${t.desc}</p>
      </div>
    `).join("");
  }
}

/**
 * Renders L&D Team members filtered by business or central leadership
 */
function renderLdTeamCards(filterKey = "all") {
  const container = document.getElementById("about-ldteam-grid");
  if (!container || !TC_DATA.ldTeam) return;

  let members = [];
  
  if (filterKey === "all") {
    // Combine central leadership and all business partners
    members = [...TC_DATA.ldTeam.centralLeadership, ...TC_DATA.ldTeam.businessPartners];
  } else if (filterKey === "central") {
    members = [...TC_DATA.ldTeam.centralLeadership];
  } else {
    members = TC_DATA.ldTeam.businessPartners.filter(bp => bp.businessId === filterKey);
  }

  container.innerHTML = members.map(m => {
    const isCentral = !!m.unit;
    const bizLabel = isCentral ? "Central L&D Leadership" : m.businessName;
    const initials = m.initials || m.name.split(' ').map(n => n[0]).join('').substring(0, 2);

    return `
      <div class="ld-card">
        <div>
          <div class="ld-card-top">
            <div class="ld-avatar-badge" title="${m.name} (${bizLabel})">
              <span class="ld-avatar-initials">${initials}</span>
              <span class="ld-avatar-status" title="Active L&D Partner"></span>
            </div>
            <div class="ld-meta">
              <h4>${m.name}</h4>
              <div class="ld-designation">${m.designation}</div>
              <span class="ld-biz-tag">${bizLabel}</span>
            </div>
          </div>
          <div class="ld-focus">
            <strong>Key Focus Areas:</strong> ${m.focusAreas}
          </div>
        </div>

        <div class="ld-contact-row">
          <div>
            <i class="fa-solid fa-location-dot" style="color: var(--tc-sky); margin-right: 0.25rem;"></i>
            <span class="text-muted">${m.location || 'Mumbai Corporate Office'}</span>
          </div>
          <a href="mailto:${m.email}" class="ld-contact-link" onclick="showToast('Drafting email to ${m.name} (${m.email})...');" title="Email ${m.name}">
            <i class="fa-solid fa-envelope"></i> Connect
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function filterLdTeam(filterKey) {
  // Update active chip in L&D filter bar
  const chips = document.querySelectorAll("#ld-team-filter-bar .cat-chip");
  chips.forEach(c => {
    if (c.getAttribute("data-ldfilter") === filterKey) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });

  renderLdTeamCards(filterKey);
}

// --- 6. TAB 2: LEARNING BASKET CONTROLLER (THE CORE TAB) ---

/**
 * Toggles between "New Employee View" and "Existing Employee View"
 */
function setLearningBasketView(type, updateControls = true) {
  if (updateControls) {
    handleEmployeeTypeChange(type);
    return;
  }

  appState.basketViewType = type;
  const btnNew = document.getElementById("view-toggle-new");
  const btnExisting = document.getElementById("view-toggle-existing");

  if (type === "new") {
    btnNew?.classList.add("active");
    btnExisting?.classList.remove("active");
  } else {
    btnExisting?.classList.add("active");
    btnNew?.classList.remove("active");
  }

  renderLearningBasket();
}

/**
 * Clicking any milestone node in the horizontal stepper
 */
function selectMilestone(milestoneNumber) {
  appState.activeMilestone = milestoneNumber;
  renderLearningBasket();
  
  // Smooth scroll to the milestone detail box
  const detailBox = document.getElementById("milestone-detail-box");
  if (detailBox) {
    detailBox.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Main render function for Learning Basket:
 * Updates Roadmap Stepper + Renders blocks a, b, c, d, e in order
 */
function renderLearningBasket() {
  const milestoneNumber = appState.activeMilestone;
  const viewType = appState.basketViewType; // "new" or "existing"
  const currentActualMilestone = getMilestoneFromDays(appState.daysSinceJoining);

  // 1. UPDATE HORIZONTAL STEPPER ROADMAP UI
  const steps = document.querySelectorAll(".roadmap-step");
  const progressLine = document.getElementById("roadmap-progress-line");
  const milestoneOrder = [30, 60, 90, 180, 360];
  const currentIndex = milestoneOrder.indexOf(milestoneNumber);

  // Set line width based on current selected step
  const pctWidth = (currentIndex / (milestoneOrder.length - 1)) * 100;
  if (progressLine) progressLine.style.width = `${pctWidth}%`;

  steps.forEach(step => {
    const stepNum = parseInt(step.getAttribute("data-milestone"), 10);
    const stepNode = step.querySelector(".step-node");
    const statusChip = step.querySelector(".step-status-chip");

    // Remove existing "YOU ARE HERE" marker from all nodes first
    const existingMarker = step.querySelector(".you-are-here-badge");
    if (existingMarker) existingMarker.remove();

    // Reset classes
    step.classList.remove("active", "completed", "in-progress", "upcoming");

    // Add active class if this step is currently selected for viewing
    if (stepNum === milestoneNumber) {
      step.classList.add("active");
    }

    // Determine status relative to actual days since joining
    if (stepNum < currentActualMilestone) {
      step.classList.add("completed");
      if (statusChip) {
        statusChip.className = "step-status-chip badge-completed";
        statusChip.textContent = "Completed";
      }
    } else if (stepNum === currentActualMilestone) {
      step.classList.add("in-progress");
      if (statusChip) {
        statusChip.className = "step-status-chip badge-in-progress";
        statusChip.textContent = "In Progress";
      }
      
      // Inject animated "YOU ARE HERE" badge on actual milestone node!
      const marker = document.createElement("div");
      marker.className = "you-are-here-badge";
      marker.innerHTML = `<i class="fa-solid fa-location-dot"></i> YOU ARE HERE`;
      stepNode.appendChild(marker);
    } else {
      step.classList.add("upcoming");
      if (statusChip) {
        statusChip.className = "step-status-chip badge-upcoming";
        statusChip.textContent = "Upcoming";
      }
    }
  });

  // Fetch milestone data
  const milestoneData = TC_DATA.milestones.find(m => m.dayNumber === milestoneNumber) || TC_DATA.milestones[0];

  // -------------------------------------------------------------------------
  // BLOCK a) "WHY THIS STAGE MATTERS" EXPLANATION PANEL
  // -------------------------------------------------------------------------
  const whyTitle = document.getElementById("why-matters-stage-title");
  const whyText = document.getElementById("why-matters-body-text");
  
  if (whyTitle && whyText) {
    const stageTypeLabel = viewType === "new" ? "New Employee Onboarding" : "Upskilling & Role Growth";
    whyTitle.innerHTML = `<i class="fa-solid fa-compass"></i> Why the ${milestoneData.label} Stage Matters (${stageTypeLabel})`;
    whyText.textContent = milestoneData.whyItMatters[viewType] || milestoneData.whyItMatters.new;
  }

  // -------------------------------------------------------------------------
  // BLOCK b) "WHAT YOU WILL LEARN" OUTCOMES CHECKLIST
  // -------------------------------------------------------------------------
  const checklistList = document.getElementById("outcomes-checklist-items");
  if (checklistList) {
    const outcomes = milestoneData.whatYouWillLearn[viewType] || milestoneData.whatYouWillLearn.new;
    checklistList.innerHTML = outcomes.map(item => `
      <li class="outcome-item">
        <i class="fa-solid fa-circle-check"></i>
        <span>${item}</span>
      </li>
    `).join("");
  }

  // -------------------------------------------------------------------------
  // BLOCK c) "YOUR TRAININGS" (FILTERED BY BUSINESS, MILESTONE, CATEGORY, SEARCH)
  // -------------------------------------------------------------------------
  renderTrainingCards(milestoneNumber, viewType);

  // -------------------------------------------------------------------------
  // BLOCK d) "HOW IT HELPS YOU" BENEFIT POINTS
  // -------------------------------------------------------------------------
  const benefitsGrid = document.getElementById("benefits-grid-items");
  if (benefitsGrid) {
    benefitsGrid.innerHTML = milestoneData.howItHelpsYou.map(b => `
      <div class="benefit-card">
        <div class="benefit-icon"><i class="fa-solid fa-trophy"></i></div>
        <div class="benefit-info">
          <h5>${b.title}</h5>
          <p>${b.desc}</p>
        </div>
      </div>
    `).join("");
  }

  // -------------------------------------------------------------------------
  // BLOCK e) MILESTONE PROGRESS BAR (x of y completed)
  // -------------------------------------------------------------------------
  updateMilestoneProgress(milestoneNumber, viewType);
}

/**
 * Filter and render training cards for active milestone
 */
function renderTrainingCards(milestoneNumber, viewType) {
  const container = document.getElementById("training-cards-grid");
  const countLabel = document.getElementById("trainings-count-label");
  if (!container) return;

  // Filter master trainings repository
  let filtered = TC_DATA.trainings.filter(t => {
    // 1. Milestone match
    if (t.milestoneDays !== milestoneNumber) return false;

    // 2. Employee type match
    if (!t.employeeTypes.includes(viewType) && !t.employeeTypes.includes("all")) {
      return false;
    }

    // 3. Business vertical filter (match current business OR "all")
    if (!t.businessIds.includes("all") && !t.businessIds.includes(appState.currentBusiness)) {
      return false;
    }

    // 4. Category filter
    if (appState.selectedCategory !== "all") {
      if (t.category !== appState.selectedCategory) return false;
    }

    // 5. Digital sub-category filter (AI, Excel, PowerPoint)
    if (appState.selectedCategory === "digital" || t.category === "digital") {
      if (appState.digitalSubCategory !== "all") {
        if (t.digitalSubCategory !== appState.digitalSubCategory) return false;
      }
    }

    // 6. Delivery Mode filter
    if (appState.filterMode !== "all" && t.mode !== appState.filterMode) return false;

    // 7. Skill Level filter
    if (appState.filterLevel !== "all" && t.level !== appState.filterLevel) return false;

    // 8. Mandatory / Recommended tag filter
    if (appState.filterTag !== "all" && t.tag !== appState.filterTag) return false;

    // 9. Search query filter
    if (appState.searchQuery.trim() !== "") {
      const q = appState.searchQuery.toLowerCase();
      const matchTitle = t.title.toLowerCase().includes(q);
      const matchDesc = t.shortDescription.toLowerCase().includes(q);
      const matchTrainer = t.trainer.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchTrainer) return false;
    }

    return true;
  });

  // Apply sorting
  if (appState.filterSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (appState.filterSort === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (appState.filterSort === "duration") {
    filtered.sort((a, b) => parseInt(a.duration, 10) - parseInt(b.duration, 10));
  }

  // Update counter label
  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} courses tailored for ${getBusinessName(appState.currentBusiness)}`;
  }

  // Intelligent adaptive fallback: If filter combination yields 0, fall back gracefully to relevant courses
  let isFallback = false;
  if (filtered.length === 0 && appState.selectedCategory !== "all") {
    // Search across milestones for courses matching this category
    filtered = TC_DATA.trainings.filter(t => {
      if (t.category !== appState.selectedCategory) return false;
      if (!t.employeeTypes.includes(viewType) && !t.employeeTypes.includes("all")) return false;
      return true;
    });
    if (filtered.length > 0) isFallback = true;
  }

  if (filtered.length === 0) {
    // Second fallback: Show all core courses for this milestone
    filtered = TC_DATA.trainings.filter(t => {
      if (t.milestoneDays !== milestoneNumber) return false;
      if (!t.employeeTypes.includes(viewType) && !t.employeeTypes.includes("all")) return false;
      return true;
    });
    if (filtered.length > 0) isFallback = true;
  }

  if (filtered.length === 0) {
    // Ultimate fallback: Show top foundational courses
    filtered = TC_DATA.trainings.slice(0, 6);
    isFallback = true;
  }

  // Render cards
  container.innerHTML = filtered.map(t => {
    const isCompleted = appState.completedCourseIds.has(t.id);
    const isEnrolled = appState.enrolledCourseIds.has(t.id);
    const isFeatured = t.isFeatured && milestoneNumber === 30 && viewType === "new";

    // Mode icon helper
    let modeIcon = "fa-solid fa-desktop";
    if (t.mode === "Classroom") modeIcon = "fa-solid fa-person-chalkboard";
    if (t.mode === "Virtual") modeIcon = "fa-solid fa-headset";

    return `
      <div class="training-card ${isFeatured ? 'featured' : ''}" id="card-${t.id}">
        <div>
          <!-- Top Tag Bar -->
          <div class="card-top-tags">
            <span class="card-category-tag">${t.category.replace('_', ' ')}</span>
            <div class="d-flex items-center gap-1">
              ${isFeatured ? '<span class="badge" style="background: var(--tc-primary); color: #fff;"><i class="fa-solid fa-star"></i> Featured Orientation</span>' : ''}
              <span class="badge ${t.tag === 'Mandatory' ? 'badge-mandatory' : 'badge-recommended'}">${t.tag}</span>
            </div>
          </div>

          <!-- Course Title -->
          <h4 class="card-title">${t.title}</h4>
          <p class="card-desc">${t.shortDescription}</p>

          <!-- Meta Grid -->
          <div class="card-meta-list">
            <div class="card-meta-item">
              <i class="fa-solid fa-clock"></i> <span>${t.duration}</span>
            </div>
            <div class="card-meta-item">
              <i class="${modeIcon}"></i> <span>${t.mode}</span>
            </div>
            <div class="card-meta-item">
              <i class="fa-solid fa-layer-group"></i> <span>${t.level}</span>
            </div>
            <div class="card-meta-item">
              <i class="fa-solid fa-user-tie"></i> <span title="${t.trainer}">${t.trainer.split('/')[0]}</span>
            </div>
          </div>
        </div>

        <!-- Footer with Rating & Action -->
        <div class="card-footer">
          <div class="card-rating">
            <i class="fa-solid fa-star"></i>
            <span>${t.rating} / 5.0</span>
          </div>

          <div class="d-flex items-center gap-1">
            ${isCompleted ? `
              <span class="badge badge-completed"><i class="fa-solid fa-circle-check"></i> Completed</span>
            ` : isEnrolled ? `
              <button class="btn btn-secondary" style="font-size: 0.75rem; padding: 0.35rem 0.65rem;" onclick="openCourseModal('${t.id}')">
                <i class="fa-solid fa-play"></i> Resume
              </button>
            ` : `
              <button class="btn btn-primary" style="font-size: 0.75rem; padding: 0.35rem 0.65rem;" onclick="openCourseModal('${t.id}')">
                <i class="fa-solid fa-circle-info"></i> View Details
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Updates milestone progress bar and status footer (e.g. 4 of 6 completed)
 */
function updateMilestoneProgress(milestoneNumber, viewType) {
  // Count matching courses for this milestone
  const matchingCourses = TC_DATA.trainings.filter(t => 
    t.milestoneDays === milestoneNumber &&
    (t.employeeTypes.includes(viewType) || t.employeeTypes.includes("all")) &&
    (t.businessIds.includes("all") || t.businessIds.includes(appState.currentBusiness))
  );

  const total = matchingCourses.length || 1;
  const completed = matchingCourses.filter(t => appState.completedCourseIds.has(t.id)).length;
  const pct = Math.round((completed / total) * 100);

  const progressText = document.getElementById("milestone-progress-text");
  const progressSub = document.getElementById("milestone-progress-sub");
  const progressFill = document.getElementById("milestone-progress-bar-fill");

  if (progressText) {
    progressText.textContent = `Milestone Progress: ${completed} of ${total} Completed (${pct}%)`;
  }
  if (progressSub) {
    if (pct === 100) {
      progressSub.textContent = `All trainings completed for ${milestoneNumber}-Day milestone! Excellent commitment.`;
    } else {
      progressSub.textContent = `Complete remaining ${total - completed} courses to achieve ${milestoneNumber}-day certification.`;
    }
  }
  if (progressFill) {
    progressFill.style.width = `${pct}%`;
  }
}

/**
 * Demo action: "Mark Stage Complete"
 */
function markAllMilestoneComplete() {
  const milestoneNumber = appState.activeMilestone;
  const viewType = appState.basketViewType;

  const matchingCourses = TC_DATA.trainings.filter(t => 
    t.milestoneDays === milestoneNumber &&
    (t.employeeTypes.includes(viewType) || t.employeeTypes.includes("all")) &&
    (t.businessIds.includes("all") || t.businessIds.includes(appState.currentBusiness))
  );

  matchingCourses.forEach(c => {
    appState.completedCourseIds.add(c.id);
    appState.enrolledCourseIds.add(c.id);
  });

  renderLearningBasket();
  renderDashboard();
  showToast(`Congratulations! All courses for the ${milestoneNumber}-Day stage are marked completed.`);
}

// Category Chip Filter Handler
function filterByCategory(cat) {
  appState.selectedCategory = cat;

  // Toggle active class on chips
  document.querySelectorAll(".cat-chip").forEach(chip => {
    if (chip.getAttribute("data-cat") === cat) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });

  // Show/hide digital subtabs row if digital or all
  const digitalSubRow = document.getElementById("digital-subtabs-row");
  if (digitalSubRow) {
    if (cat === "digital" || cat === "all") {
      digitalSubRow.style.display = "flex";
    } else {
      digitalSubRow.style.display = "none";
    }
  }

  renderTrainingCards(appState.activeMilestone, appState.basketViewType);
}

// Digital Sub-tab Filter Handler
function filterDigitalSub(sub) {
  appState.digitalSubCategory = sub;
  document.querySelectorAll(".subtab-chip").forEach(chip => {
    if (chip.getAttribute("data-sub") === sub) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
  renderTrainingCards(appState.activeMilestone, appState.basketViewType);
}

// Live Search handler
function onSearchTraining(val) {
  appState.searchQuery = val;
  renderTrainingCards(appState.activeMilestone, appState.basketViewType);
}

// Dropdown filters handler
function applyTrainingFilters() {
  appState.filterMode = document.getElementById("filter-mode-select").value;
  appState.filterLevel = document.getElementById("filter-level-select").value;
  appState.filterTag = document.getElementById("filter-tag-select").value;
  appState.filterSort = document.getElementById("filter-sort-select").value;
  renderTrainingCards(appState.activeMilestone, appState.basketViewType);
}

function resetTrainingFilters() {
  appState.selectedCategory = "all";
  appState.digitalSubCategory = "all";
  appState.searchQuery = "";
  appState.filterMode = "all";
  appState.filterLevel = "all";
  appState.filterTag = "all";
  appState.filterSort = "relevance";

  document.getElementById("training-search-input").value = "";
  document.getElementById("filter-mode-select").value = "all";
  document.getElementById("filter-level-select").value = "all";
  document.getElementById("filter-tag-select").value = "all";
  document.getElementById("filter-sort-select").value = "relevance";

  filterByCategory("all");
}

// --- 7. TRAINING DETAILS MODAL CONTROLLER ---
let activeModalCourseId = null;

function openCourseModal(courseId) {
  activeModalCourseId = courseId;
  const course = TC_DATA.trainings.find(t => t.id === courseId);
  if (!course) return;

  const titleEl = document.getElementById("modal-course-title");
  const bodyEl = document.getElementById("modal-course-body");
  const actionBtn = document.getElementById("modal-course-action-btn");

  titleEl.textContent = course.title;

  const isCompleted = appState.completedCourseIds.has(course.id);
  const isEnrolled = appState.enrolledCourseIds.has(course.id);

  if (isCompleted) {
    actionBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Already Completed`;
    actionBtn.className = "btn btn-secondary";
  } else if (isEnrolled) {
    actionBtn.innerHTML = `<i class="fa-solid fa-check"></i> Mark as Completed`;
    actionBtn.className = "btn btn-primary";
  } else {
    actionBtn.innerHTML = `<i class="fa-solid fa-file-signature"></i> Enrol Now`;
    actionBtn.className = "btn btn-primary";
  }

  bodyEl.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <div class="d-flex items-center gap-1" style="margin-bottom: 0.5rem;">
        <span class="badge ${course.tag === 'Mandatory' ? 'badge-mandatory' : 'badge-recommended'}">${course.tag}</span>
        <span class="badge badge-tag"><i class="fa-solid fa-clock"></i> ${course.duration}</span>
        <span class="badge badge-tag"><i class="fa-solid fa-video"></i> ${course.mode}</span>
        <span class="badge badge-tag"><i class="fa-solid fa-star" style="color: #f59e0b;"></i> ${course.rating}/5.0</span>
      </div>
      <p style="font-size: 0.9rem; color: var(--text-body);">${course.shortDescription}</p>
    </div>

    <!-- Objectives -->
    <div style="margin-bottom: 1.25rem; background: var(--bg-surface-subtle); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
      <h5 style="color: var(--tc-primary); font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem;"><i class="fa-solid fa-bullseye"></i> Learning Objectives</h5>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
        ${course.objectives.map(obj => `<li><i class="fa-solid fa-check" style="color: var(--status-completed); margin-right: 0.35rem;"></i> ${obj}</li>`).join('')}
      </ul>
    </div>

    <!-- Syllabus Outline -->
    <div style="margin-bottom: 1.25rem;">
      <h5 style="color: var(--tc-primary); font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem;"><i class="fa-solid fa-book-open"></i> Syllabus & Agenda</h5>
      <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.8rem;">
        ${course.syllabus.map(s => `<div style="padding: 0.45rem 0.75rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-sm);"><i class="fa-solid fa-caret-right" style="color: var(--tc-sky); margin-right: 0.4rem;"></i> ${s}</div>`).join('')}
      </div>
    </div>

    <!-- Metadata Grid -->
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; font-size: 0.775rem; background: var(--bg-surface-alt); padding: 0.75rem; border-radius: var(--radius-sm);">
      <div><strong>Target Audience:</strong> ${course.whoShouldAttend}</div>
      <div><strong>Trainer / Owner:</strong> ${course.trainer}</div>
      <div><strong>Schedule / Cohort:</strong> ${course.schedule}</div>
      <div><strong>Prerequisites:</strong> ${course.prerequisites}</div>
    </div>
  `;

  openModal("training-detail-modal");
}

function handleCourseEnrollAction() {
  if (!activeModalCourseId) return;
  const course = TC_DATA.trainings.find(t => t.id === activeModalCourseId);
  if (!course) return;

  if (appState.completedCourseIds.has(course.id)) {
    closeModal("training-detail-modal");
    return;
  }

  if (appState.enrolledCourseIds.has(course.id)) {
    // Mark as completed
    appState.completedCourseIds.add(course.id);
    showToast(`Completed: ${course.title}! Certification updated.`);
  } else {
    // Enrol
    appState.enrolledCourseIds.add(course.id);
    showToast(`Successfully enrolled in ${course.title}!`);
  }

  closeModal("training-detail-modal");
  renderLearningBasket();
  renderDashboard();
}

// --- 8. TAB 3: NOMINATE YOURSELF - SHERPA CONTROLLER ---
function renderSherpaSection() {
  const info = TC_DATA.sherpaInfo;

  // 1. Stats Counters
  const statsGrid = document.getElementById("sherpa-stats-grid");
  if (statsGrid) {
    statsGrid.innerHTML = info.stats.map(s => `
      <div class="number-card">
        <i class="${s.icon}"></i>
        <div class="number-value">${s.value}</div>
        <div class="number-label">${s.label}</div>
      </div>
    `).join("");
  }

  // 2. Interactive 4-Step Process Graphic (Clickable cards opening detailed syllabus & expectations)
  const processGrid = document.getElementById("sherpa-process-grid");
  if (processGrid) {
    processGrid.innerHTML = info.processSteps.map(step => `
      <div class="step-card" onclick="openSherpaStepModal(${step.step})" title="Click to view details for Step ${step.step}">
        <div class="d-flex justify-between items-center" style="margin-bottom: 0.5rem;">
          <div class="step-num-badge">${step.step}</div>
          <span class="badge badge-tag" style="font-size: 0.65rem;">${step.timeline}</span>
        </div>
        <div class="step-card-icon"><i class="${step.icon}"></i></div>
        <h4 class="step-card-title">${step.title}</h4>
        <div class="step-card-subtitle">${step.subtitle}</div>
        <p class="step-card-desc">${step.desc}</p>
        <span class="step-card-click-hint"><i class="fa-solid fa-arrow-up-right-from-square"></i> Click to view full syllabus & criteria</span>
      </div>
    `).join("");
  }

  // 3. Past Events Photo Gallery (RnR, TTT, Classroom Delivery, Branch Mentoring)
  const galleryGrid = document.getElementById("sherpa-gallery-grid");
  if (galleryGrid) {
    galleryGrid.innerHTML = info.gallery.map(item => `
      <div class="gallery-card" onclick="openLightbox('${item.image}', '${item.title}', '${item.caption}')">
        <div class="gallery-img-wrap" style="position: relative;">
          <img src="${item.image}" alt="${item.title}" class="gallery-img" onerror="this.src='https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'">
          <div class="gallery-overlay-icon"><i class="fa-solid fa-expand"></i></div>
          <span class="badge" style="position: absolute; bottom: 8px; left: 8px; background: rgba(15, 23, 42, 0.85); color: #fff; font-size: 0.7rem;">
            ${item.category}
          </span>
        </div>
        <div class="gallery-info">
          <span class="badge badge-tag" style="margin-bottom: 0.35rem;">${item.date} • ${item.location}</span>
          <h5 class="gallery-title">${item.title}</h5>
          <p class="gallery-caption">${item.caption}</p>
        </div>
      </div>
    `).join("");
  }

  // 4. Testimonials (Highlighting the Internal Consultant Programme)
  const testGrid = document.getElementById("sherpa-testimonials-grid");
  if (testGrid) {
    testGrid.innerHTML = info.testimonials.map(t => `
      <div class="testimonial-card">
        <div>
          <div class="quote-mark">“</div>
          <p class="testimonial-quote">${t.quote}</p>
        </div>
        <div class="testimonial-author">
          <img src="${t.image}" alt="${t.name}" class="author-avatar" onerror="this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'">
          <div>
            <div class="author-name">${t.name}</div>
            <div class="author-role">${t.designation}</div>
            <span class="badge badge-tag" style="font-size: 0.65rem; margin-top: 0.2rem;">Internal Consultant</span>
          </div>
        </div>
      </div>
    `).join("");
  }

  // Render flashing eligibility banner and nomination form
  renderSherpaEligibility();
}

// Sherpa Form Submission
function handleSherpaSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("sherpa-name").value;
  const biz = document.getElementById("sherpa-business").value;
  const expertise = document.getElementById("sherpa-expertise").value;

  // Show friendly notification
  showToast(`Nomination Submitted! Thank you, ${name}. Your request for the Sherpa Boot Camp (${biz}) has been forwarded to the L&D Council.`);
  
  // Reset form fields
  document.getElementById("sherpa-expertise").value = "";
  document.getElementById("sherpa-topics").value = "";
  document.getElementById("sherpa-approval").checked = false;
}

// --- 9. TAB 4: KNOW YOUR TRAININGS CONTROLLER ---
function initKnowYourTrainings() {
  const monthSelect = document.getElementById("kyt-month-select");
  if (!monthSelect) return;

  // Populate month dropdown with November 2026 priority
  monthSelect.innerHTML = TC_DATA.months.map(m => `
    <option value="${m}" ${m === appState.selectedMonth ? 'selected' : ''}>${m} ${m === 'November' ? '2026 (Priority Cohort: Days 1 - 17)' : m === 'December' ? '2026' : (['January', 'February', 'March'].includes(m) ? '2027' : '2026')}</option>
  `).join("");

  monthSelect.onchange = (e) => {
    renderMonthlyTrainings(e.target.value);
  };

  // Render Orientation / Tenured Spotlight based on employee persona
  const orientBox = document.getElementById("kyt-orientation-box");
  if (orientBox) {
    if (appState.currentEmployeeType === "existing") {
      orientBox.innerHTML = `
        <div class="d-flex items-center justify-between" style="flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="badge" style="background: #065f46; color: #fff;"><i class="fa-solid fa-crown"></i> Tenured Capability & Leadership Track</span>
            <h3 style="color: var(--tc-primary); font-size: 1.15rem; margin-top: 0.35rem;">Senior Practitioner & Sherpa Consultant Roadmap</h3>
            <p class="text-muted" style="font-size: 0.8rem;">Advanced underwriting, internal consulting, and high-impact cross-functional tracks (Tenure: <strong>${appState.daysSinceJoining} Days</strong>).</p>
          </div>
          <span class="badge badge-completed" style="font-size: 0.8rem; background: #059669; color: #fff;">Sherpa SME Eligible</span>
        </div>
        <div class="orientation-days-grid" style="margin-top: 1rem;">
          <div class="orientation-day-item">
            <div class="d-flex justify-between items-center">
              <span class="badge badge-tag">Day 180</span>
              <span class="badge badge-completed">Completed</span>
            </div>
            <div class="font-bold" style="font-size: 0.85rem; color: var(--text-main); margin-top: 0.35rem;">
              <i class="fa-solid fa-shield-halved" style="color: var(--tc-sky); margin-right: 0.35rem;"></i>Advanced Risk & Underwriting Discretion
            </div>
            <div class="text-muted" style="font-size: 0.725rem;">Facilitator: Chief Risk Officer</div>
          </div>
          <div class="orientation-day-item">
            <div class="d-flex justify-between items-center">
              <span class="badge badge-tag">Day 210</span>
              <span class="badge badge-in-progress">In Progress</span>
            </div>
            <div class="font-bold" style="font-size: 0.85rem; color: var(--text-main); margin-top: 0.35rem;">
              <i class="fa-solid fa-graduation-cap" style="color: var(--tc-sky); margin-right: 0.35rem;"></i>Sherpa TTT & Internal Consultant Certification
            </div>
            <div class="text-muted" style="font-size: 0.725rem;">Facilitator: Master Sherpa Faculty</div>
          </div>
          <div class="orientation-day-item">
            <div class="d-flex justify-between items-center">
              <span class="badge badge-tag">Day 270</span>
              <span class="badge badge-upcoming">Upcoming</span>
            </div>
            <div class="font-bold" style="font-size: 0.85rem; color: var(--text-main); margin-top: 0.35rem;">
              <i class="fa-solid fa-chart-line" style="color: var(--tc-sky); margin-right: 0.35rem;"></i>Strategic Cluster P&L & Regional Ops
            </div>
            <div class="text-muted" style="font-size: 0.725rem;">Facilitator: Business Head Retail</div>
          </div>
          <div class="orientation-day-item">
            <div class="d-flex justify-between items-center">
              <span class="badge badge-tag">Day 360</span>
              <span class="badge badge-upcoming">Upcoming</span>
            </div>
            <div class="font-bold" style="font-size: 0.85rem; color: var(--text-main); margin-top: 0.35rem;">
              <i class="fa-solid fa-award" style="color: var(--tc-sky); margin-right: 0.35rem;"></i>Executive Leadership & Succession Bench
            </div>
            <div class="text-muted" style="font-size: 0.725rem;">Facilitator: MD & CHRO Council</div>
          </div>
        </div>
      `;
    } else {
      orientBox.innerHTML = `
        <div class="d-flex items-center justify-between" style="flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="badge badge-completed"><i class="fa-solid fa-sparkles"></i> 5-Day Induction Track</span>
            <h3 style="color: var(--tc-primary); font-size: 1.15rem; margin-top: 0.35rem;">New Employee Orientation Programme (NEOP) Checklist</h3>
            <p class="text-muted" style="font-size: 0.8rem;">Every new joiner must complete this 5-day structured foundation track.</p>
          </div>
          <span class="badge badge-in-progress" style="font-size: 0.8rem;">Day 4 in Progress</span>
        </div>
        <div class="orientation-days-grid" id="kyt-orientation-grid" style="margin-top: 1rem;">
          ${TC_DATA.orientationSchedule.map(item => `
            <div class="orientation-day-item">
              <div class="d-flex justify-between items-center">
                <span class="badge badge-tag" style="font-weight: 700;">${item.day}</span>
                <span class="badge ${item.status === 'Completed' ? 'badge-completed' : item.status === 'In Progress' ? 'badge-in-progress' : 'badge-upcoming'}">${item.status}</span>
              </div>
              <div class="font-bold" style="font-size: 0.85rem; color: var(--text-main); margin-top: 0.35rem;">
                <i class="${item.icon}" style="color: var(--tc-sky); margin-right: 0.35rem;"></i>${item.topic}
              </div>
              <div class="text-muted" style="font-size: 0.725rem;">Facilitator: ${item.faculty}</div>
            </div>
          `).join("")}
        </div>
      `;
    }
  }

  renderMonthlyTrainings(appState.selectedMonth);
}

function setKytViewMode(mode) {
  appState.kytViewMode = mode;
  document.getElementById("view-mode-list-btn")?.classList.toggle("active", mode === "list");
  document.getElementById("view-mode-cal-btn")?.classList.toggle("active", mode === "calendar");
  renderMonthlyTrainings(appState.selectedMonth);
}

function renderMonthlyTrainings(month) {
  appState.selectedMonth = month;
  const wrap = document.getElementById("kyt-schedule-content-wrap");
  const bannerTitle = document.getElementById("kyt-notice-title");
  const bannerDesc = document.getElementById("kyt-notice-desc");
  if (!wrap) return;

  const isExisting = appState.currentEmployeeType === "existing";
  const stageName = isExisting ? "Tenured Upskilling & Sherpa Track" : "New Joiner Onboarding Track";

  // Update nomination notice banner per user requirement
  if (bannerTitle) {
    bannerTitle.textContent = `Nominated Training Schedule for ${month} 2026`;
  }
  if (bannerDesc) {
    bannerDesc.innerHTML = `These are the training programs in the month of <strong>${month} 2026</strong> where you are nominated based on your business (<strong>${getBusinessName(appState.currentBusiness)}</strong>) and active Learning Basket (<strong>${stageName}</strong>). <strong>You need to attend this program.</strong>`;
  }

  let schedules = [...(TC_DATA.monthlySchedules[month] || TC_DATA.monthlySchedules.November || [])];

  // Tailor schedules per employee journey stage
  if (isExisting) {
    // For tenured employee: Prioritize Sherpa, Advanced Underwriting, GenAI, and Strategic modules
    schedules.sort((a, b) => {
      const aScore = (a.courseTitle.includes("Sherpa") || a.courseTitle.includes("Generative AI") || a.courseTitle.includes("Strategic") || a.courseTitle.includes("Banking Analysis")) ? 1 : 0;
      const bScore = (b.courseTitle.includes("Sherpa") || b.courseTitle.includes("Generative AI") || b.courseTitle.includes("Strategic") || b.courseTitle.includes("Banking Analysis")) ? 1 : 0;
      return bScore - aScore;
    });
  } else {
    // For new employee: Prioritize NEOP, TCOC, FPC, and KYC Induction modules
    schedules.sort((a, b) => {
      const aScore = (a.courseTitle.includes("NEOP") || a.courseTitle.includes("Orientation") || a.courseTitle.includes("TCOC") || a.courseTitle.includes("Fair Practices") || a.courseTitle.includes("KYC")) ? 1 : 0;
      const bScore = (b.courseTitle.includes("NEOP") || b.courseTitle.includes("Orientation") || b.courseTitle.includes("TCOC") || b.courseTitle.includes("Fair Practices") || b.courseTitle.includes("KYC")) ? 1 : 0;
      return bScore - aScore;
    });
  }

  if (appState.kytViewMode === "list") {
    // 1. Table List View with Explicit Nomination Badge & Attendance Actions
    wrap.innerHTML = `
      <div class="schedule-table-wrap">
        <table class="corporate-table">
          <thead>
            <tr>
              <th>Date & Timing</th>
              <th>Nominated Training Title</th>
              <th>Mode & Venue</th>
              <th>Facilitator / Sherpa</th>
              <th>Nomination Status</th>
              <th>Attendance Action</th>
            </tr>
          </thead>
          <tbody>
            ${schedules.length === 0 ? `
              <tr><td colspan="6" style="text-align: center; padding: 2rem;">No trainings assigned for ${month}.</td></tr>
            ` : schedules.map(item => {
              const title = item.title || item.courseTitle;
              const mode = item.mode || "Classroom";
              const venue = item.venue || "Peninsula Corporate Park, Mumbai";
              const trainer = item.trainer || "Senior Faculty";
              const preread = item.preread || "Standard Lending Policy Pre-Read";

              return `
                <tr id="kyt-row-${item.id}">
                  <td>
                    <strong style="color: var(--tc-primary);">${item.date}</strong><br>
                    <span class="text-muted" style="font-size: 0.75rem;"><i class="fa-solid fa-clock"></i> ${item.time}</span>
                  </td>
                  <td>
                    <strong style="color: var(--text-main); font-size: 0.9rem;">${title}</strong>
                    <div class="text-muted" style="font-size: 0.725rem; margin-top: 0.2rem;">
                      <span class="badge badge-tag">${item.category || 'Core Lending'}</span>
                      <span style="margin-left: 0.35rem;"><i class="fa-solid fa-book-bookmark"></i> Pre-read: ${preread}</span>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-tag">${mode}</span><br>
                    <span class="text-muted" style="font-size: 0.725rem;">${venue}</span>
                  </td>
                  <td><i class="fa-solid fa-user-tie" style="color: var(--tc-sky); margin-right: 0.25rem;"></i>${trainer}</td>
                  <td>
                    <span class="badge badge-mandatory" style="font-weight: 700;">
                      <i class="fa-solid fa-bell"></i> Nominated (Mandatory)
                    </span>
                  </td>
                  <td>
                    <div class="d-flex gap-1" style="flex-wrap: wrap;">
                      <button class="btn btn-primary" style="font-size: 0.725rem; padding: 0.25rem 0.55rem;" onclick="confirmTrainingAttendance('${item.id}', '${title}', '${item.date}')">
                        <i class="fa-solid fa-circle-check"></i> Confirm
                      </button>
                      <button class="btn btn-secondary" style="font-size: 0.725rem; padding: 0.25rem 0.55rem;" onclick="showToast('Added ${title} (${item.date}) to Outlook/Google Calendar!');">
                        <i class="fa-solid fa-calendar-plus"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  } else {
    // 2. Calendar Grid View
    wrap.innerHTML = `
      <div class="calendar-view-grid">
        <div class="calendar-header-day">Mon</div>
        <div class="calendar-header-day">Tue</div>
        <div class="calendar-header-day">Wed</div>
        <div class="calendar-header-day">Thu</div>
        <div class="calendar-header-day">Fri</div>
        <div class="calendar-header-day">Sat</div>
        <div class="calendar-header-day">Sun</div>
        
        <!-- Render Days -->
        ${Array.from({ length: 28 }, (_, i) => {
          const dayNum = i + 1;
          const matchingEvents = schedules.filter(s => s.date.includes(dayNum.toString()));
          const hasEvent = matchingEvents.length > 0;

          return `
            <div class="calendar-cell ${hasEvent ? 'has-event' : ''}">
              <div class="cell-date-num">${dayNum}</div>
              ${matchingEvents.map(e => `
                <div class="cell-event-chip" title="${e.courseTitle}">
                  ${e.courseTitle}
                </div>
              `).join("")}
            </div>
          `;
        }).join("")}
      </div>
    `;
  }
}

function confirmTrainingAttendance(id, title, date) {
  const row = document.getElementById(`kyt-row-${id}`);
  if (row) {
    const statusCell = row.querySelector("td:nth-child(5)");
    const actionCell = row.querySelector("td:nth-child(6)");
    if (statusCell) {
      statusCell.innerHTML = `<span class="badge badge-completed"><i class="fa-solid fa-calendar-check"></i> Confirmed & Calendar Synced</span>`;
    }
    if (actionCell) {
      actionCell.innerHTML = `<span style="font-size: 0.75rem; color: var(--status-completed); font-weight: 600;"><i class="fa-solid fa-check"></i> Registered</span>`;
    }
  }
  showToast(`Attendance Confirmed: You are registered for ${title} on ${date}. Calendar invite dispatched to your inbox.`);
}

// --- 10. TAB 5: COMPLIANCE MODULES CONTROLLER ---
function renderComplianceModules() {
  const container = document.getElementById("compliance-cards-grid");
  if (!container) return;

  const modules = TC_DATA.complianceModules;

  // Calculate overall compliance rate
  const total = modules.length;
  let completedCount = 0;
  modules.forEach(m => {
    const progress = appState.complianceProgress[m.id] !== undefined ? appState.complianceProgress[m.id] : m.progressPercent;
    if (progress === 100) completedCount++;
  });
  const overallPct = Math.round((completedCount / total) * 100);

  // Update gauge circle in UI
  const gaugeInner = document.querySelector(".compliance-gauge-circle .gauge-inner");
  const gaugeCircle = document.getElementById("compliance-gauge-circle");
  if (gaugeInner) gaugeInner.textContent = `${overallPct}%`;
  if (gaugeCircle) {
    gaugeCircle.style.background = `conic-gradient(var(--status-completed) 0% ${overallPct}%, var(--border-color) ${overallPct}% 100%)`;
  }

  // Update hero & nav compliance badges
  const heroStat = document.getElementById("hero-compliance-stat");
  if (heroStat) heroStat.textContent = `${overallPct}%`;
  const navBadge = document.getElementById("nav-compliance-badge");
  if (navBadge) navBadge.textContent = `${total - completedCount} Due`;

  // Render cards
  container.innerHTML = modules.map(m => {
    const progress = appState.complianceProgress[m.id] !== undefined ? appState.complianceProgress[m.id] : m.progressPercent;
    const isDone = progress === 100;
    const isOverdue = m.status === "overdue" || (progress < 100 && m.id === "comp-cyber");

    return `
      <div class="compliance-card ${isOverdue ? 'overdue' : ''}">
        <div>
          <div class="d-flex justify-between items-center" style="margin-bottom: 0.5rem;">
            <span class="comp-code-badge">${m.code}</span>
            <span class="badge ${isDone ? 'badge-completed' : isOverdue ? 'badge-overdue' : 'badge-in-progress'}">
              ${isDone ? 'Compliant' : isOverdue ? 'Action Required' : 'In Progress'}
            </span>
          </div>

          <h4 style="font-size: 1rem; color: var(--tc-primary); margin-bottom: 0.35rem;">${m.title}</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.45; margin-bottom: 1rem;">${m.description}</p>

          <!-- Progress Bar -->
          <div style="margin-bottom: 0.85rem;">
            <div class="d-flex justify-between" style="font-size: 0.75rem; margin-bottom: 0.25rem;">
              <span>Progress: <strong>${progress}%</strong></span>
              <span>Due: <strong>${m.dueDate}</strong></span>
            </div>
            <div class="progress-bar-outer" style="height: 6px;">
              <div class="progress-bar-inner" style="width: ${progress}%; background: ${isDone ? 'var(--status-completed)' : isOverdue ? 'var(--status-overdue)' : 'var(--tc-sky)'};"></div>
            </div>
          </div>

          <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 1rem;">
            <div><i class="fa-solid fa-landmark"></i> Oversight: ${m.regulator}</div>
            <div><i class="fa-solid fa-clock"></i> Duration: ${m.duration} (${m.frequency})</div>
          </div>
        </div>

        <div style="border-top: 1px solid var(--border-color); padding-top: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.75rem; color: var(--status-completed); font-weight: 700;">
            ${isDone ? '<i class="fa-solid fa-certificate"></i> Certified' : ''}
          </span>
          <button class="btn ${isDone ? 'btn-secondary' : 'btn-primary'}" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" onclick="openComplianceSim('${m.id}')">
            ${isDone ? '<i class="fa-solid fa-rotate-right"></i> Review' : progress > 0 ? '<i class="fa-solid fa-play"></i> Resume' : '<i class="fa-solid fa-play"></i> Start'}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function openComplianceSim(moduleId) {
  const mod = TC_DATA.complianceModules.find(m => m.id === moduleId);
  if (!mod) return;

  // Simulate progress
  appState.complianceProgress[mod.id] = 100;
  showToast(`Completed module: ${mod.title}! Mandatory compliance score updated.`);
  renderComplianceModules();
  renderDashboard();
}

function simulateCompleteAllCompliance() {
  TC_DATA.complianceModules.forEach(m => {
    appState.complianceProgress[m.id] = 100;
  });
  showToast("All 6 mandatory compliance modules completed! 100% compliant.");
  renderComplianceModules();
  renderDashboard();
}

// --- 11. TAB 6: ENGAGEMENT CONTROLLER ---
function renderEngagementSection() {
  // 1. Gallery Albums
  const galGrid = document.getElementById("engagement-gallery-grid");
  if (galGrid) {
    galGrid.innerHTML = TC_DATA.engagement.galleryAlbums.map(album => `
      <div class="gallery-card" onclick="openLightbox('${album.cover}', '${album.title}', '${album.description}')">
        <div class="gallery-img-wrap">
          <img src="${album.cover}" alt="${album.title}" class="gallery-img">
          <div class="gallery-overlay-icon"><i class="fa-solid fa-expand"></i></div>
        </div>
        <div class="gallery-info">
          <span class="badge badge-tag" style="margin-bottom: 0.35rem;">${album.category} • ${album.count} Photos</span>
          <h5 class="gallery-title">${album.title}</h5>
          <p class="gallery-caption">${album.description}</p>
        </div>
      </div>
    `).join("");
  }

  // 2. Newsletters
  const nlGrid = document.getElementById("engagement-newsletters-grid");
  if (nlGrid) {
    nlGrid.innerHTML = TC_DATA.engagement.newsletters.map(nl => `
      <div class="newsletter-card">
        <div class="nl-cover-wrap">
          <img src="${nl.coverImage}" alt="${nl.title}" class="nl-cover-img">
        </div>
        <div class="nl-body">
          <div class="d-flex justify-between items-center" style="margin-bottom: 0.35rem;">
            <span class="badge badge-tag">${nl.date}</span>
            <span class="badge badge-recommended">${nl.tag}</span>
          </div>
          <h4 class="nl-title">${nl.title}</h4>
          <p class="nl-summary">${nl.summary}</p>
          <div class="nl-topic-chips">
            ${nl.topics.map(t => `<span class="nl-chip">#${t}</span>`).join('')}
          </div>
          <div style="border-top: 1px solid var(--border-color); padding-top: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
            <span class="text-muted" style="font-size: 0.75rem;"><i class="fa-solid fa-clock"></i> ${nl.readTime}</span>
            <button class="btn btn-secondary" style="font-size: 0.75rem; padding: 0.3rem 0.65rem;" onclick="showToast('Opening ${nl.title} PDF viewer...')">
              <i class="fa-solid fa-book-open"></i> Read Issue
            </button>
          </div>
        </div>
      </div>
    `).join("");
  }

  // 3. Star Rating Setup
  setupStarRating();
}

function showEngagementSub(subId) {
  document.querySelectorAll(".eng-sub-pane").forEach(p => p.style.display = "none");
  const target = document.getElementById(`eng-sub-${subId}`);
  if (target) target.style.display = "block";
}

function setupStarRating() {
  const starBox = document.getElementById("feedback-star-box");
  const caption = document.getElementById("star-rating-caption");
  if (!starBox) return;

  const stars = starBox.querySelectorAll("i");
  stars.forEach(star => {
    star.addEventListener("click", () => {
      const rating = parseInt(star.getAttribute("data-rating"), 10);
      appState.currentFeedbackRating = rating;

      stars.forEach(s => {
        const r = parseInt(s.getAttribute("data-rating"), 10);
        if (r <= rating) {
          s.className = "fa-solid fa-star selected";
        } else {
          s.className = "fa-regular fa-star";
        }
      });

      const captions = [
        "1 Star: Needs Significant Improvement",
        "2 Stars: Below Expectations",
        "3 Stars: Good & Satisfactory",
        "4 Stars: Very Good Experience",
        "5 Stars: Outstanding & World-Class"
      ];
      if (caption) caption.textContent = `${rating} Stars: ${captions[rating - 1]}`;
    });
  });
}

function handleFeedbackSubmit(e) {
  e.preventDefault();
  const category = document.getElementById("fb-category").value;
  showToast(`Feedback Submitted! Thank you for rating ${appState.currentFeedbackRating}/5 stars on ${category}.`);
  document.getElementById("fb-comments").value = "";
}

// --- 12. TAB 7: DASHBOARD (EMPLOYEE & MANAGER DUAL VIEW) & PRINT CONTROLLER ---

function renderDashboard() {
  const isExisting = appState.currentEmployeeType === "existing" || appState.daysSinceJoining > 180;

  // Update KPI counters dynamically
  const assigned = isExisting ? 28 : 14;
  const completed = isExisting ? 25 : appState.completedCourseIds.size;
  const inProgress = isExisting ? 3 : Math.max(1, appState.enrolledCourseIds.size - completed);
  const complianceRate = isExisting ? "95%" : (document.querySelector(".compliance-gauge-circle .gauge-inner")?.textContent || "78%");

  const assignedEl = document.getElementById("kpi-assigned-count");
  const completedEl = document.getElementById("kpi-completed-count");
  const pendingEl = document.getElementById("kpi-pending-count");
  const compPctEl = document.getElementById("kpi-compliance-pct");

  if (assignedEl) assignedEl.textContent = assigned;
  if (completedEl) completedEl.textContent = completed;
  if (pendingEl) pendingEl.textContent = inProgress;
  if (compPctEl) compPctEl.textContent = complianceRate;

  // Dynamically update the Journey Milestone Progress Mini-Bars
  const miniBarsContainer = document.getElementById("dashboard-milestone-mini-bars");
  if (miniBarsContainer) {
    if (isExisting) {
      miniBarsContainer.innerHTML = `
        <div class="mini-bar-item">
          <div class="d-flex justify-between" style="font-size: 0.75rem; margin-bottom: 0.25rem;">
            <strong>30 Days (Settle In)</strong>
            <span class="font-bold" style="color: var(--status-completed);">100% Completed</span>
          </div>
          <div class="progress-bar-outer" style="height: 6px;"><div class="progress-bar-inner" style="width: 100%;"></div></div>
        </div>
        <div class="mini-bar-item">
          <div class="d-flex justify-between" style="font-size: 0.75rem; margin-bottom: 0.25rem;">
            <strong>60 Days (Working Knowledge)</strong>
            <span class="font-bold" style="color: var(--status-completed);">100% Completed</span>
          </div>
          <div class="progress-bar-outer" style="height: 6px;"><div class="progress-bar-inner" style="width: 100%;"></div></div>
        </div>
        <div class="mini-bar-item">
          <div class="d-flex justify-between" style="font-size: 0.75rem; margin-bottom: 0.25rem;">
            <strong>90 Days (Become Productive)</strong>
            <span class="font-bold" style="color: var(--status-completed);">100% Completed</span>
          </div>
          <div class="progress-bar-outer" style="height: 6px;"><div class="progress-bar-inner" style="width: 100%;"></div></div>
        </div>
        <div class="mini-bar-item">
          <div class="d-flex justify-between" style="font-size: 0.75rem; margin-bottom: 0.25rem;">
            <strong>180 Days (Strengthen & Specialise)</strong>
            <span class="font-bold" style="color: var(--status-completed);">100% Completed</span>
          </div>
          <div class="progress-bar-outer" style="height: 6px;"><div class="progress-bar-inner" style="width: 100%;"></div></div>
        </div>
        <div class="mini-bar-item">
          <div class="d-flex justify-between" style="font-size: 0.75rem; margin-bottom: 0.25rem;">
            <strong>360+ Days (Grow & Lead) <span class="badge badge-in-progress" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">Current Stage</span></strong>
            <span class="font-bold" style="color: var(--status-in-progress);">70% In Progress</span>
          </div>
          <div class="progress-bar-outer" style="height: 6px;"><div class="progress-bar-inner" style="width: 70%;"></div></div>
        </div>
      `;
    } else {
      miniBarsContainer.innerHTML = `
        <div class="mini-bar-item">
          <div class="d-flex justify-between" style="font-size: 0.75rem; margin-bottom: 0.25rem;">
            <strong>30 Days (Settle In)</strong>
            <span class="font-bold" style="color: var(--status-completed);">100% Completed</span>
          </div>
          <div class="progress-bar-outer" style="height: 6px;"><div class="progress-bar-inner" style="width: 100%;"></div></div>
        </div>
        <div class="mini-bar-item">
          <div class="d-flex justify-between" style="font-size: 0.75rem; margin-bottom: 0.25rem;">
            <strong>60 Days (Working Knowledge) <span class="badge badge-in-progress" style="font-size: 0.65rem; padding: 0.1rem 0.35rem;">Current Stage</span></strong>
            <span class="font-bold" style="color: var(--status-in-progress);">65% In Progress</span>
          </div>
          <div class="progress-bar-outer" style="height: 6px;"><div class="progress-bar-inner" style="width: 65%;"></div></div>
        </div>
        <div class="mini-bar-item">
          <div class="d-flex justify-between" style="font-size: 0.75rem; margin-bottom: 0.25rem;">
            <strong>90 Days (Become Productive)</strong>
            <span class="font-bold text-muted">20% Scheduled</span>
          </div>
          <div class="progress-bar-outer" style="height: 6px;"><div class="progress-bar-inner" style="width: 20%;"></div></div>
        </div>
        <div class="mini-bar-item">
          <div class="d-flex justify-between" style="font-size: 0.75rem; margin-bottom: 0.25rem;">
            <strong>180 Days (Strengthen & Specialise)</strong>
            <span class="font-bold text-muted">0% Upcoming</span>
          </div>
          <div class="progress-bar-outer" style="height: 6px;"><div class="progress-bar-inner" style="width: 0%;"></div></div>
        </div>
        <div class="mini-bar-item">
          <div class="d-flex justify-between" style="font-size: 0.75rem; margin-bottom: 0.25rem;">
            <strong>360+ Days (Grow & Lead)</strong>
            <span class="font-bold text-muted">0% Upcoming</span>
          </div>
          <div class="progress-bar-outer" style="height: 6px;"><div class="progress-bar-inner" style="width: 0%;"></div></div>
        </div>
      `;
    }
  }

  // Render Recent Completed Trainings Table
  const recentTbody = document.getElementById("dashboard-recent-trainings-tbody");
  if (recentTbody) {
    const recentCourses = isExisting ? TC_DATA.trainings.slice(2, 7) : TC_DATA.trainings.slice(0, 5);
    recentTbody.innerHTML = recentCourses.map((c, i) => `
      <tr>
        <td><strong>${c.title}</strong></td>
        <td><span class="badge badge-tag">${c.category}</span></td>
        <td>${10 + i * 2} Sep 2024</td>
        <td><strong style="color: var(--status-completed);">9${2 + i}%</strong></td>
        <td>
          <button class="btn btn-secondary" style="font-size: 0.725rem; padding: 0.25rem 0.5rem;" onclick="showToast('Downloading verified e-Certificate for ${c.title}...')">
            <i class="fa-solid fa-download"></i> Certificate
          </button>
        </td>
      </tr>
    `).join("");
  }

  // Draw Charts
  renderDashboardCharts();
}

function renderDashboardCharts() {
  const isExisting = appState.currentEmployeeType === "existing" || appState.daysSinceJoining > 180;

  // 1. Doughnut Chart: Training Status Split
  const ctxDoughnut = document.getElementById("statusDoughnutChart");
  if (ctxDoughnut) {
    if (appState.charts.statusDoughnut) {
      appState.charts.statusDoughnut.destroy();
    }

    const doughnutData = isExisting ? [25, 3, 6, 0] : [11, 3, 5, 1];

    appState.charts.statusDoughnut = new Chart(ctxDoughnut, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress", "Upcoming", "Overdue"],
        datasets: [{
          data: doughnutData,
          backgroundColor: ["#10B981", "#F59E0B", "#3B82F6", "#EF4444"],
          borderWidth: 2,
          borderColor: "#ffffff"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { font: { family: "Inter", size: 12 }, boxWidth: 12 }
          }
        },
        cutout: "68%"
      }
    });
  }

  // 2. Bar Chart: Monthly Learning Velocity (Hours)
  const ctxBar = document.getElementById("monthlyBarChart");
  if (ctxBar) {
    if (appState.charts.monthlyBar) {
      appState.charts.monthlyBar.destroy();
    }

    const monthlyData = isExisting 
      ? [22, 18, 20, 16, 24, 19, 14, 0, 0, 0, 0, 0]
      : [16, 12, 10, 8, 14, 11, 6, 0, 0, 0, 0, 0];

    appState.charts.monthlyBar = new Chart(ctxBar, {
      type: "bar",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
        datasets: [{
          label: "Training Hours Completed",
          data: monthlyData,
          backgroundColor: "#00A3E0",
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { font: { family: "Inter", size: 11 } }
          },
          x: {
            ticks: { font: { family: "Inter", size: 11 } }
          }
        }
      }
    });
  }
}

function renderDashManagerView() {
  const mData = TC_DATA.managerData;
  if (!mData) return;

  const mgrTeamSize = document.getElementById("dash-mgr-team-size");
  const mgrCompRate = document.getElementById("dash-mgr-completion-rate");
  const mgrOverdue = document.getElementById("dash-mgr-overdue-count");
  const mgrSherpas = document.getElementById("dash-mgr-sherpas-count");

  if (mgrTeamSize) mgrTeamSize.textContent = mData.teamStats.teamSize;
  if (mgrCompRate) mgrCompRate.textContent = mData.teamStats.overallCompletionRate;
  if (mgrOverdue) mgrOverdue.textContent = mData.teamStats.overdueLearners;
  if (mgrSherpas) mgrSherpas.textContent = mData.teamStats.activeSherpasInTeam;

  const distGrid = document.getElementById("dash-mgr-stepper-dist-grid");
  if (distGrid) {
    distGrid.innerHTML = mData.milestoneDistribution.map(d => `
      <div class="dist-node-card ${d.behindCount > 0 ? 'needs-attention' : ''}">
        <div class="dist-count">${d.count}</div>
        <div class="dist-milestone">${d.milestone}</div>
        <div class="dist-sub">${d.behindCount > 0 ? `${d.behindCount} Overdue` : 'All On Track'}</div>
      </div>
    `).join("");
  }

  renderDashTeamMembersTable();

  const ctxTeam = document.getElementById("dashTeamComplianceBarChart");
  if (ctxTeam) {
    if (appState.charts.dashTeamCompliance) {
      appState.charts.dashTeamCompliance.destroy();
    }

    appState.charts.dashTeamCompliance = new Chart(ctxTeam, {
      type: "bar",
      data: {
        labels: ["TCOC", "POSH", "Fair Practices Code", "KYC / AML", "TAAP", "InfoSec / DPDP"],
        datasets: [{
          label: "Team Compliance %",
          data: [100, 100, 83, 75, 91, 66],
          backgroundColor: ["#10B981", "#10B981", "#F59E0B", "#F59E0B", "#10B981", "#EF4444"],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: { callback: v => v + "%", font: { family: "Inter", size: 11 } }
          },
          x: {
            ticks: { font: { family: "Inter", size: 11 } }
          }
        }
      }
    });
  }
}

function renderDashTeamMembersTable() {
  const tbody = document.getElementById("dash-mgr-team-table-tbody");
  if (!tbody || !TC_DATA.managerData) return;

  const searchInput = document.getElementById("dash-mgr-search-input");
  const milestoneSelect = document.getElementById("dash-mgr-filter-milestone");
  const statusSelect = document.getElementById("dash-mgr-filter-status");

  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const milestone = milestoneSelect ? milestoneSelect.value : "all";
  const status = statusSelect ? statusSelect.value : "all";

  let list = TC_DATA.managerData.teamMembers.filter(member => {
    const matchName = member.name.toLowerCase().includes(query) || member.designation.toLowerCase().includes(query);
    const matchMilestone = milestone === "all" || member.currentMilestone === milestone;
    let matchStatus = true;
    if (status === "overdue") matchStatus = member.complianceStatus === "Overdue";
    if (status === "compliant") matchStatus = member.complianceStatus === "100% Compliant";
    if (status === "sherpa") matchStatus = member.isSherpa;
    return matchName && matchMilestone && matchStatus;
  });

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 2rem; color: var(--text-muted);">No team members found matching your search.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(m => {
    const statusBadgeClass = m.complianceStatus === "100% Compliant" ? "badge-completed" : "badge-overdue";
    return `
      <tr>
        <td>
          <div style="font-weight: 600; color: var(--tc-primary);">${m.name} ${m.isSherpa ? '<span class="badge" style="background:#f59e0b; color:#fff; font-size:0.65rem; margin-left:0.3rem;"><i class="fa-solid fa-person-chalkboard"></i> Sherpa</span>' : ''}</div>
          <div style="font-size: 0.725rem; color: var(--text-muted);">${m.designation} (${m.id})</div>
        </td>
        <td>${m.business}</td>
        <td><strong>${m.currentMilestone}</strong></td>
        <td>${m.coursesCompleted}</td>
        <td><span class="badge ${statusBadgeClass}">${m.complianceStatus}</span></td>
        <td>
          <button class="btn btn-secondary" style="font-size: 0.725rem; padding: 0.25rem 0.5rem;" onclick="openSendReminderModal('${m.name}')">
            <i class="fa-solid fa-bell"></i> Remind
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function onFilterTeamMembersDash() {
  renderDashTeamMembersTable();
}

function printEmployeeSummary() {
  window.print();
}

// --- 13. TAB 8: MANAGER VIEW CONTROLLER ---
function renderManagerTab() {
  const mData = TC_DATA.managerData;

  // 1. KPI cards
  const mgrTeamSize = document.getElementById("mgr-team-size");
  const mgrCompRate = document.getElementById("mgr-completion-rate");
  const mgrOverdue = document.getElementById("mgr-overdue-count");
  const mgrSherpas = document.getElementById("mgr-sherpas-count");

  if (mgrTeamSize) mgrTeamSize.textContent = mData.teamStats.teamSize;
  if (mgrCompRate) mgrCompRate.textContent = mData.teamStats.overallCompletionRate;
  if (mgrOverdue) mgrOverdue.textContent = mData.teamStats.overdueLearners;
  if (mgrSherpas) mgrSherpas.textContent = mData.teamStats.activeSherpasInTeam;

  // 2. Stepper Distribution Grid
  const distGrid = document.getElementById("mgr-stepper-distribution-grid");
  if (distGrid) {
    distGrid.innerHTML = mData.milestoneDistribution.map(d => `
      <div class="dist-node-card ${d.behindCount > 0 ? 'needs-attention' : ''}">
        <div class="dist-count">${d.count}</div>
        <div class="dist-milestone">${d.milestone}</div>
        <div class="dist-sub">${d.behindCount > 0 ? `${d.behindCount} Overdue` : 'All On Track'}</div>
      </div>
    `).join("");
  }

  // 3. Render Team Table
  renderTeamMembersTable();

  // 4. Render Team Compliance Bar Chart
  const ctxTeam = document.getElementById("teamComplianceBarChart");
  if (ctxTeam) {
    if (appState.charts.teamCompliance) {
      appState.charts.teamCompliance.destroy();
    }

    appState.charts.teamCompliance = new Chart(ctxTeam, {
      type: "bar",
      data: {
        labels: ["TCOC", "POSH", "Fair Practices Code", "KYC / AML", "TAAP", "InfoSec / DPDP"],
        datasets: [{
          label: "Team Compliance %",
          data: [100, 100, 83, 75, 91, 66],
          backgroundColor: ["#10B981", "#10B981", "#F59E0B", "#F59E0B", "#10B981", "#EF4444"],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: { callback: v => `${v}%` }
          }
        }
      }
    });
  }
}

function renderTeamMembersTable() {
  const tbody = document.getElementById("mgr-team-table-tbody");
  if (!tbody) return;

  let members = TC_DATA.managerData.teamMembers;

  // Filters
  if (appState.mgrFilterMilestone !== "all") {
    members = members.filter(m => m.currentMilestone === appState.mgrFilterMilestone);
  }
  if (appState.mgrFilterStatus === "overdue") {
    members = members.filter(m => m.isOverdue);
  } else if (appState.mgrFilterStatus === "compliant") {
    members = members.filter(m => !m.isOverdue);
  } else if (appState.mgrFilterStatus === "sherpa") {
    members = members.filter(m => m.isSherpa);
  }

  if (appState.mgrSearchQuery.trim() !== "") {
    const q = appState.mgrSearchQuery.toLowerCase();
    members = members.filter(m => m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q));
  }

  tbody.innerHTML = members.map(m => `
    <tr>
      <td>
        <div class="d-flex items-center gap-1">
          <img src="${m.avatar}" alt="${m.name}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
          <div>
            <strong>${m.name}</strong><br>
            <span class="text-muted" style="font-size: 0.725rem;">${m.role} (${m.type})</span>
          </div>
        </div>
      </td>
      <td>${m.business}</td>
      <td>
        <span class="badge badge-tag">${m.currentMilestone} (Day ${m.daysSinceJoining})</span>
      </td>
      <td>
        <strong>${m.completedCount} / ${m.assignedCount}</strong>
        <span class="text-muted" style="font-size: 0.75rem;">(${Math.round(m.completedCount / m.assignedCount * 100)}%)</span>
      </td>
      <td>
        <span class="badge ${m.isOverdue ? 'badge-overdue' : 'badge-completed'}">${m.complianceStatus}</span>
      </td>
      <td>
        <button class="btn btn-secondary" style="font-size: 0.725rem; padding: 0.25rem 0.5rem;" onclick="showToast('Sent reminder to ${m.name} for ${m.complianceStatus}')">
          <i class="fa-solid fa-bell"></i> Nudge
        </button>
      </td>
    </tr>
  `).join("");
}

function onFilterTeamMembers() {
  appState.mgrFilterMilestone = document.getElementById("mgr-filter-milestone").value;
  appState.mgrFilterStatus = document.getElementById("mgr-filter-status").value;
  appState.mgrSearchQuery = document.getElementById("mgr-search-input").value;
  renderTeamMembersTable();
}

function openSendReminderModal() {
  openModal("reminder-modal");
}

function sendTeamReminders() {
  closeModal("reminder-modal");
  showToast("Learning reminders successfully sent to 2 overdue team members via Email & Teams!");
}

// --- 14. MODALS & LIGHTBOX UTILITIES ---
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => {
    m.classList.remove("active");
  });
  document.body.style.overflow = "";
}

function closeModalOnBackdrop(e, modalId) {
  if (e.target.id === modalId) {
    closeModal(modalId);
  }
}

function openLightbox(imgSrc, title, caption) {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const capEl = document.getElementById("lightbox-caption");

  if (img) img.src = imgSrc;
  if (titleEl) titleEl.textContent = title;
  if (capEl) capEl.textContent = caption;

  openModal("lightbox-modal");
}

function closeLightbox() {
  closeModal("lightbox-modal");
}

// --- 15. TOAST NOTIFICATION SYSTEM ---
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="fa-solid fa-circle-info" style="color: var(--tc-sky);"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Auto-dismiss after 3.5 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 300);
  }, 3500);
}


// ==============================================================================
// 16. E-LEARNING ACADEMY CONTROLLER & INTERACTIVE PLAYER
// ==============================================================================
function renderElearningCards(filterCategory = "all") {
  const container = document.getElementById("elearning-cards-grid");
  if (!container || !TC_DATA.eLearning) return;

  const allModules = Array.isArray(TC_DATA.eLearning.modules) ? TC_DATA.eLearning.modules : (Array.isArray(TC_DATA.eLearning) ? TC_DATA.eLearning : []);
  let modules = allModules;
  if (filterCategory !== "all") {
    modules = modules.filter(m => m.category === filterCategory);
  }

  container.innerHTML = modules.map(m => {
    const isEnrolled = appState.enrolledCourseIds.has(m.id);
    const isCompleted = appState.completedCourseIds.has(m.id);
    const tag = m.badge || m.tag || "Self-Paced";
    const categoryLabel = m.categoryLabel || (m.category === 'micro' ? 'Microlearning' : m.category === 'masterclass' ? 'Masterclass' : m.category === 'digital_ai' ? 'AI & Digital' : 'Simulator');
    const icon = m.icon || (m.category === 'micro' ? 'fa-solid fa-bolt' : m.category === 'masterclass' ? 'fa-solid fa-chalkboard-user' : m.category === 'digital_ai' ? 'fa-solid fa-robot' : 'fa-solid fa-gamepad');
    const faculty = m.faculty || "Tata Capital L&D Faculty";
    const shortDesc = m.desc || m.shortDescription || "";

    return `
      <div class="elearning-card" data-el-id="${m.id}">
        <div class="el-thumbnail" style="background: linear-gradient(135deg, ${m.gradientStart || '#0284c7'}, ${m.gradientEnd || '#0f172a'});">
          <i class="${icon} el-thumbnail-icon"></i>
          <span class="el-badge-top badge ${tag === 'Mandatory' ? 'badge-mandatory' : 'badge-recommended'}">${tag}</span>
          <span class="el-duration-badge"><i class="fa-solid fa-clock"></i> ${m.duration}</span>
        </div>
        <div class="el-body">
          <span class="badge badge-tag" style="width: fit-content; margin-bottom: 0.35rem; font-size: 0.7rem;">${categoryLabel}</span>
          <h4 class="el-title">${m.title}</h4>
          <p class="el-desc">${shortDesc}</p>
          <div class="el-meta-row">
            <div><i class="fa-solid fa-user-tie" style="color: var(--tc-sky); margin-right: 0.25rem;"></i>${faculty}</div>
            <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;" onclick="openElearningPlayer('${m.id}')">
              ${isCompleted ? '<i class="fa-solid fa-rotate-right"></i> Review' : '<i class="fa-solid fa-play"></i> Launch Module'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function filterElearning(category) {
  const chips = document.querySelectorAll("#elearning-chips-container .cat-chip");
  chips.forEach(c => {
    if (c.getAttribute("data-elcat") === category) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });
  renderElearningCards(category);
}

function openElearningPlayer(moduleId) {
  const allModules = Array.isArray(TC_DATA.eLearning.modules) ? TC_DATA.eLearning.modules : (Array.isArray(TC_DATA.eLearning) ? TC_DATA.eLearning : []);
  const mod = allModules.find(m => m.id === moduleId) || allModules[0];
  if (!mod) return;
  appState.activeElearningModuleId = mod.id;

  const modal = document.getElementById("elearning-player-modal");
  const titleEl = document.getElementById("elplayer-title");
  const facultyEl = document.getElementById("elplayer-faculty");
  const descEl = document.getElementById("elplayer-description");
  const durEl = document.getElementById("elplayer-duration");
  const badgeEl = document.getElementById("elplayer-badge");
  const objEl = document.getElementById("elplayer-objective");

  if (titleEl) titleEl.textContent = mod.title;
  if (facultyEl) facultyEl.textContent = mod.faculty || "Tata Capital L&D Faculty";
  if (descEl) descEl.textContent = mod.desc || mod.shortDescription || "";
  if (durEl) durEl.innerHTML = `<i class="fa-solid fa-clock"></i> ${mod.duration}`;
  const catLabel = mod.categoryLabel || (mod.category === 'micro' ? 'Microlearning' : mod.category === 'masterclass' ? 'Masterclass' : mod.category === 'digital_ai' ? 'AI & Digital' : 'Simulator');
  if (badgeEl) badgeEl.textContent = catLabel;
  if (objEl && (mod.learningObjective || (mod.lessonContent && mod.lessonContent.keyTakeaways))) {
    objEl.textContent = mod.learningObjective || mod.lessonContent.keyTakeaways[0];
  }

  // Reset tab to overview
  switchElPlayerTab("overview");

  openModal("elearning-player-modal");
}

function closeElearningPlayer() {
  appState.isPlayingElearning = false;
  closeModal("elearning-player-modal");
}

function toggleElearningPlay() {
  appState.isPlayingElearning = !appState.isPlayingElearning;
  const overlayIcon = document.getElementById("elplayer-play-icon");
  const bottomIcon = document.getElementById("elplayer-bottom-play-btn");

  if (appState.isPlayingElearning) {
    if (overlayIcon) overlayIcon.className = "fa-solid fa-pause";
    if (bottomIcon) bottomIcon.className = "fa-solid fa-pause";
    showToast("Module playing: Streaming interactive lecture...");
  } else {
    if (overlayIcon) overlayIcon.className = "fa-solid fa-play";
    if (bottomIcon) bottomIcon.className = "fa-solid fa-play";
    showToast("Module paused.");
  }
}

function toggleElearningFullscreen() {
  const screen = document.getElementById("elplayer-screen");
  if (screen) {
    if (!document.fullscreenElement) {
      screen.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }
}

function switchElPlayerTab(tabName) {
  document.querySelectorAll(".elplayer-pane").forEach(p => p.style.display = "none");
  document.querySelectorAll(".elplayer-tabs-bar .tab-pill").forEach(p => p.classList.remove("active"));

  const targetPane = document.getElementById(`elplayer-pane-${tabName}`);
  const targetBtn = document.getElementById(`tab-elplayer-${tabName}`);

  if (targetPane) targetPane.style.display = "block";
  if (targetBtn) targetBtn.classList.add("active");
}

function completeActiveElearningModule() {
  if (!appState.activeElearningModuleId) return;
  const modId = appState.activeElearningModuleId;
  appState.enrolledCourseIds.add(modId);
  appState.completedCourseIds.add(modId);

  const allModules = Array.isArray(TC_DATA.eLearning.modules) ? TC_DATA.eLearning.modules : (Array.isArray(TC_DATA.eLearning) ? TC_DATA.eLearning : []);
  const mod = allModules.find(m => m.id === modId);
  showToast(`Congratulations! Completed ${mod ? mod.title : 'Module'}. Added to your verified LMS credentials!`);

  closeElearningPlayer();
  renderElearningCards();
  renderDashboard();
}

// ==============================================================================
// 17. SHERPA VINTAGE ELIGIBILITY CONTROLLER (LOCKED FOR NEW, OPEN FOR VINTAGE)
// ==============================================================================
function renderSherpaEligibility() {
  const container = document.getElementById("sherpa-eligibility-container");
  const flashBox = document.getElementById("sherpa-flashing-eligible-box");
  if (!container) return;

  const isVintage = appState.daysSinceJoining >= 180 && appState.currentEmployeeType === "existing";

  if (!isVintage) {
    // Clear flashing banner if not eligible
    if (flashBox) flashBox.innerHTML = "";

    // LOCKED STATE: New Employee (< 180 Days)
    const progressPct = Math.min(100, Math.round((appState.daysSinceJoining / 180) * 100));
    container.innerHTML = `
      <div class="sherpa-locked-card">
        <div class="sherpa-locked-icon">
          <i class="fa-solid fa-lock"></i>
        </div>
        <span class="badge" style="background: #fee2e2; color: #dc2626; margin-bottom: 0.5rem; font-weight: 700;">
          <i class="fa-solid fa-shield-halved"></i> Vintage Employee Prerequisite (180+ Days Tenure)
        </span>
        <h3 style="color: var(--tc-primary); font-size: 1.35rem; margin-top: 0.35rem; margin-bottom: 0.5rem;">
          Sherpa SME Nomination Reserved for Tenured Employees
        </h3>
        <p style="color: var(--text-body); font-size: 0.875rem; line-height: 1.5; max-width: 580px; margin: 0 auto 1.25rem;">
          Tata Capital Project Sherpa identifies experienced Subject Matter Experts with at least <strong>180 days (6 months) tenure</strong> in the organization to mentor and train future champions as Internal Consultants. You are currently at <strong>Day ${appState.daysSinceJoining}</strong> (${appState.currentEmployeeType === 'new' ? 'New Employee Onboarding' : 'Tenure in progress'}).
        </p>

        <!-- Eligibility Tenure Progress Bar -->
        <div style="max-width: 420px; margin: 0 auto 1.5rem; background: var(--bg-surface-alt); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
          <div class="d-flex justify-between items-center" style="font-size: 0.8rem; margin-bottom: 0.35rem;">
            <span>Tenure Eligibility Progress:</span>
            <strong>${appState.daysSinceJoining} / 180 Days (${progressPct}%)</strong>
          </div>
          <div class="progress-bar-outer" style="height: 8px;">
            <div class="progress-bar-inner" style="width: ${progressPct}%; background: ${progressPct >= 100 ? 'var(--status-completed)' : 'var(--tc-sky)'};"></div>
          </div>
        </div>

        <button class="btn btn-warm" style="padding: 0.65rem 1.5rem; font-size: 0.875rem;" onclick="handleEmployeeTypeChange('existing'); showToast('Simulated Tenured Employee (210 Days)! Sherpa SME nomination is now unlocked.');">
          <i class="fa-solid fa-unlock-keyhole"></i> Simulate Existing Employee (210 Days) to Unlock Nomination Form
        </button>
      </div>
    `;
  } else {
    // UNLOCKED STATE: Flashing prominent button + verified banner
    if (flashBox) {
      flashBox.innerHTML = `
        <div class="sherpa-flash-eligible-banner">
          <div>
            <span class="badge" style="background: #b45309; color: #fff; margin-bottom: 0.35rem;">
              <i class="fa-solid fa-bolt-lightning"></i> ACTION REQUIRED: VERIFIED & ELIGIBLE
            </span>
            <h4 style="color: #92400e; font-size: 1.2rem; margin: 0.2rem 0 0.35rem; font-weight: 800;">
              ⚡ You Are Eligible to Nominate Yourself as a Sherpa SME!
            </h4>
            <p style="color: #78350f; font-size: 0.85rem; margin: 0; max-width: 620px;">
              Congratulations, <strong>Siddik Ghaniwala</strong>! Since you have completed <strong>210 days</strong> (> 6 months vintage) at Tata Capital, you fulfill all prerequisites to join our faculty as an accredited Internal Domain Consultant.
            </p>
          </div>
          <button class="btn btn-flash-pulse" onclick="scrollToSherpaForm()">
            <i class="fa-solid fa-pen-nib"></i> Nominate Yourself Now (210 Days Eligible)
          </button>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="sherpa-unlocked-banner" style="max-width: 800px; margin: 2rem auto 1.5rem;">
        <i class="fa-solid fa-circle-check" style="font-size: 1.75rem; color: #059669;"></i>
        <div>
          <h4 style="margin: 0; font-size: 0.95rem; color: #065f46;">Sherpa Nomination Status: Verified & Eligible</h4>
          <p style="margin: 0.2rem 0 0; font-size: 0.8rem; color: #047857;">
            Welcome, <strong>Siddik Ghaniwala</strong>! With your verified tenure of <strong>${appState.daysSinceJoining} days (> 6 months)</strong>, you meet all criteria to nominate yourself as an accredited Tata Capital Sherpa SME.
          </p>
        </div>
      </div>

      <div class="section-header" id="nominate-form-section" style="text-align: center;">
        <h3 class="section-title" style="justify-content: center;"><i class="fa-solid fa-pen-to-square"></i> Nominate Yourself as a Sherpa SME</h3>
        <p class="section-subtitle">Complete your nomination below. Your profile will be submitted to the L&D Council and Business Head for the upcoming Train-The-Trainer Boot Camp.</p>
      </div>

      <div class="nomination-form-card" style="max-width: 800px; margin: 0 auto;">
        <form id="sherpa-nomination-form" onsubmit="handleSherpaSubmit(event)">
          <div class="form-grid">
            <div class="form-group">
              <label for="sherpa-name"><i class="fa-solid fa-user"></i> Full Name *</label>
              <input type="text" id="sherpa-name" class="form-control" value="Siddik Ghaniwala" required>
            </div>

            <div class="form-group">
              <label for="sherpa-empid"><i class="fa-solid fa-id-card"></i> Employee ID *</label>
              <input type="text" id="sherpa-empid" class="form-control" value="TC-84920" required>
            </div>

            <div class="form-group">
              <label for="sherpa-business"><i class="fa-solid fa-building"></i> Business Vertical *</label>
              <select id="sherpa-business" class="form-control" required>
                <option value="Retail Finance (Consumer Finance)" selected>Retail Finance (Consumer Finance)</option>
                <option value="Housing Finance">Housing Finance</option>
                <option value="Motor Finance">Motor Finance</option>
                <option value="Microfinance">Microfinance</option>
                <option value="Corporate & SME Finance">Corporate & SME Finance</option>
                <option value="Wealth">Wealth</option>
                <option value="DSMG">DSMG</option>
                <option value="Cleantech">Cleantech</option>
                <option value="Corporate Functions">Corporate Functions</option>
              </select>
            </div>

            <div class="form-group">
              <label for="sherpa-tenure"><i class="fa-solid fa-business-time"></i> Years in Tata Capital *</label>
              <select id="sherpa-tenure" class="form-control" required>
                <option value="Under 1 Year">6 Months to 1 Year (Verified 210 Days Vintage)</option>
                <option value="1 to 3 Years" selected>1 to 3 Years</option>
                <option value="3 to 5 Years">3 to 5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
            </div>

            <div class="form-group full-width">
              <label for="sherpa-expertise"><i class="fa-solid fa-bullseye"></i> Primary Area of Expertise *</label>
              <input type="text" id="sherpa-expertise" class="form-control" value="Retail Credit Underwriting & Risk Assessment" required>
            </div>

            <div class="form-group full-width">
              <label for="sherpa-topics"><i class="fa-solid fa-chalkboard"></i> Workshops You Want to Facilitate *</label>
              <textarea id="sherpa-topics" class="form-control" rows="3" required>1. Practical Unsecured Underwriting & Ratio Scrub\n2. CIBIL Score Card Interpretation & Default Signals</textarea>
            </div>

            <div class="form-group full-width">
              <label class="checkbox-label">
                <input type="checkbox" id="sherpa-approval" checked required>
                <span><strong>Manager Endorsement:</strong> I confirm that my reporting manager has endorsed my nomination for the 2-day Sherpa Train-The-Trainer Boot Camp.</span>
              </label>
            </div>
          </div>

          <div style="margin-top: 1.5rem; text-align: right;">
            <button type="submit" class="btn btn-primary" style="padding: 0.75rem 2rem;">
              <i class="fa-solid fa-paper-plane"></i> Submit Sherpa Nomination
            </button>
          </div>
        </form>
      </div>
    `;
  }
}

function scrollToSherpaForm() {
  const el = document.getElementById("nominate-form-section") || document.getElementById("sherpa-eligibility-container");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function openSherpaStepModal(stepNum) {
  const step = TC_DATA.sherpaInfo.processSteps.find(s => s.step === stepNum) || TC_DATA.sherpaInfo.processSteps[0];
  const badgeEl = document.getElementById("sherpa-modal-step-badge");
  const titleEl = document.getElementById("sherpa-modal-step-title");
  const bodyEl = document.getElementById("sherpa-modal-step-body");

  if (badgeEl) badgeEl.textContent = `Step ${step.step}: ${step.timeline}`;
  if (titleEl) titleEl.textContent = step.title;

  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="text-align: center; margin-bottom: 1.25rem;">
        <div style="width: 60px; height: 60px; border-radius: 50%; background: #eff6ff; color: var(--tc-sky); font-size: 1.75rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem;">
          <i class="${step.icon}"></i>
        </div>
        <h4 style="color: var(--tc-primary); font-size: 1.15rem; margin-bottom: 0.25rem;">${step.subtitle}</h4>
        <p style="font-size: 0.85rem; color: var(--text-body); max-width: 500px; margin: 0 auto;">${step.desc}</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.85rem;">
        <div style="background: var(--bg-surface-alt); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--tc-sky);">
          <strong style="font-size: 0.825rem; color: var(--tc-primary);"><i class="fa-solid fa-shield-halved"></i> Entry Prerequisite:</strong>
          <p style="font-size: 0.8rem; margin: 0.25rem 0 0; color: var(--text-body);">${step.details.prerequisite}</p>
        </div>

        <div style="background: var(--bg-surface-alt); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--status-completed);">
          <strong style="font-size: 0.825rem; color: #065f46;"><i class="fa-solid fa-file-invoice"></i> Key Deliverables & Curriculum:</strong>
          <p style="font-size: 0.8rem; margin: 0.25rem 0 0; color: var(--text-body);">${step.details.deliverables}</p>
        </div>

        <div style="background: var(--bg-surface-alt); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--tc-warm);">
          <strong style="font-size: 0.825rem; color: #b45309;"><i class="fa-solid fa-award"></i> Evaluation & Certification Rubric:</strong>
          <p style="font-size: 0.8rem; margin: 0.25rem 0 0; color: var(--text-body);">${step.details.evaluation}</p>
        </div>
      </div>
    `;
  }

  openModal("sherpa-step-modal");
}

// ==============================================================================
// 18. 5-TIER EXECUTIVE & ROLE DASHBOARDS CONTROLLER
// ==============================================================================
function setDashboardViewMode(mode) {
  const empContainer = document.getElementById("employee-dashboard-container");
  const mgrContainer = document.getElementById("manager-dashboard-container");
  const revContainer = document.getElementById("reviewer-dashboard-container");
  const bizContainer = document.getElementById("bizhead-dashboard-container");
  const cooContainer = document.getElementById("coohr-dashboard-container");

  const btnEmp = document.getElementById("btn-dashmode-employee");
  const btnMgr = document.getElementById("btn-dashmode-manager");
  const btnRev = document.getElementById("btn-dashmode-reviewer");
  const btnBiz = document.getElementById("btn-dashmode-bizhead");
  const btnCoo = document.getElementById("btn-dashmode-coohr");
  const hintText = document.getElementById("dash-mode-hint-text");

  // Hide all containers
  if (empContainer) empContainer.style.display = "none";
  if (mgrContainer) mgrContainer.style.display = "none";
  if (revContainer) revContainer.style.display = "none";
  if (bizContainer) bizContainer.style.display = "none";
  if (cooContainer) cooContainer.style.display = "none";

  // Remove active class from all pills
  btnEmp?.classList.remove("active");
  btnMgr?.classList.remove("active");
  btnRev?.classList.remove("active");
  btnBiz?.classList.remove("active");
  btnCoo?.classList.remove("active");

  const mdContainer = document.getElementById("mdchro-dashboard-container");
  const btnMd = document.getElementById("btn-dashmode-mdchro");
  if (mdContainer) mdContainer.style.display = "none";
  btnMd?.classList.remove("active");

  if (mode === "manager") {
    if (mgrContainer) mgrContainer.style.display = "block";
    btnMgr?.classList.add("active");
    if (hintText) hintText.innerHTML = `<i class="fa-solid fa-users-gear"></i> Viewing Manager & Team 360° analytics, overdue remediation, and direct report progression.`;
    renderDashManagerView();
  } else if (mode === "reviewer") {
    if (revContainer) revContainer.style.display = "block";
    btnRev?.classList.add("active");
    if (hintText) hintText.innerHTML = `<i class="fa-solid fa-clipboard-check"></i> Viewing Reviewer Dashboard: Area audit health, cluster milestones, and pending accreditation sign-offs.`;
    renderDashReviewerView();
  } else if (mode === "biz_head") {
    if (bizContainer) bizContainer.style.display = "block";
    btnBiz?.classList.add("active");
    if (hintText) hintText.innerHTML = `<i class="fa-solid fa-motorcycle"></i> Viewing Business Head Dashboard (Sample Two-Wheeler / Retail): Vertical underwriter certification index, branch readiness, and training ROI.`;
    renderDashBizHeadView();
  } else if (mode === "coo_hr") {
    if (cooContainer) cooContainer.style.display = "block";
    btnCoo?.classList.add("active");
    if (hintText) hintText.innerHTML = `<i class="fa-solid fa-briefcase"></i> Viewing COO Dashboard / Head HR Dashboard: Retail & Business Unit operations learning health, compliance metrics, and cluster capability matrix.`;
    renderDashCooHrView();
  } else if (mode === "md_chro") {
    if (mdContainer) mdContainer.style.display = "block";
    btnMd?.classList.add("active");
    if (hintText) hintText.innerHTML = `<i class="fa-solid fa-chess-king"></i> Viewing Managing Director & CHRO Apex Executive Suite: Board human capital governance and talent retention correlation.`;
    renderDashMdChroView();
  } else {
    if (empContainer) empContainer.style.display = "block";
    btnEmp?.classList.add("active");
    if (hintText) hintText.innerHTML = `<i class="fa-solid fa-circle-info"></i> Viewing individual capability scorecard and personal milestone completion.`;
    renderDashboard();
  }
}

function renderDashReviewerView() {
  const data = TC_DATA.reviewerData;
  if (!data) return;

  const bEl = document.getElementById("rev-total-branches");
  const lEl = document.getElementById("rev-total-learners");
  const cEl = document.getElementById("rev-avg-compliance");
  const aEl = document.getElementById("rev-pending-approvals");

  if (bEl) bEl.textContent = data.totalBranches;
  if (lEl) lEl.textContent = data.totalLearners;
  if (cEl) cEl.textContent = data.avgCompliance;
  if (aEl) aEl.textContent = data.pendingApprovals;

  // Render clusters
  const clustersGrid = document.getElementById("reviewer-clusters-grid");
  if (clustersGrid && data.clusters) {
    clustersGrid.innerHTML = data.clusters.map(cl => `
      <div class="cluster-card">
        <div class="cluster-header">
          <strong style="color: var(--tc-primary); font-size: 0.95rem;"><i class="fa-solid fa-location-dot" style="color: var(--tc-sky); margin-right: 0.35rem;"></i>${cl.clusterName}</strong>
          <span class="badge ${parseInt(cl.compliance) >= 90 ? 'badge-completed' : 'badge-in-progress'}">${cl.compliance}</span>
        </div>
        <div class="cluster-stat-row">
          <span class="text-muted">Branches:</span>
          <strong>${cl.branchCount} Branches</strong>
        </div>
        <div class="cluster-stat-row">
          <span class="text-muted">Learners:</span>
          <strong>${cl.learners} Staff</strong>
        </div>
        <div class="cluster-stat-row">
          <span class="text-muted">Overdue Remediation:</span>
          <strong style="color: ${cl.overdueCount > 0 ? 'var(--status-overdue)' : 'var(--status-completed)'};">${cl.overdueCount} Pending</strong>
        </div>
        <div class="cluster-stat-row">
          <span class="text-muted">Sherpa Mentors:</span>
          <strong>${cl.sherpas} Accredited</strong>
        </div>
      </div>
    `).join("");
  }

  // Render pending approvals table
  const tbody = document.getElementById("reviewer-approvals-tbody");
  if (tbody && data.pendingCertApprovals) {
    tbody.innerHTML = data.pendingCertApprovals.map(req => `
      <tr id="rev-req-row-${req.learnerId}">
        <td>
          <strong>${req.learnerName}</strong>
          <div class="text-muted" style="font-size: 0.725rem;">${req.learnerId} • ${req.role}</div>
        </td>
        <td>${req.branch}</td>
        <td><strong style="color: var(--tc-primary);">${req.course}</strong></td>
        <td><span class="badge badge-completed">${req.score}</span></td>
        <td>${req.date}</td>
        <td>
          <button class="btn btn-primary" style="font-size: 0.725rem; padding: 0.25rem 0.6rem;" onclick="approveReviewerSignOff('${req.learnerId}')">
            <i class="fa-solid fa-stamp"></i> Sign-Off
          </button>
        </td>
      </tr>
    `).join("");
  }
}

function approveReviewerSignOff(learnerId) {
  const row = document.getElementById(`rev-req-row-${learnerId}`);
  if (row) {
    const actionCell = row.querySelector("td:last-child");
    if (actionCell) {
      actionCell.innerHTML = `<span class="badge badge-completed"><i class="fa-solid fa-circle-check"></i> Approved & Signed</span>`;
    }
  }
  showToast(`Accreditation Approved: Signed off for ${learnerId}. Certification pushed to HRMS.`);
}

function approveAllPendingAccreditations() {
  document.querySelectorAll("#reviewer-approvals-tbody tr").forEach(row => {
    const actionCell = row.querySelector("td:last-child");
    if (actionCell) {
      actionCell.innerHTML = `<span class="badge badge-completed"><i class="fa-solid fa-circle-check"></i> Approved & Signed</span>`;
    }
  });
  const aEl = document.getElementById("rev-pending-approvals");
  if (aEl) aEl.textContent = "0";
  showToast("All 14 pending accreditations signed off and certified!");
}

function renderDashBizHeadView() {
  const data = TC_DATA.bizHeadData;
  if (!data) return;

  const hEl = document.getElementById("bizhead-headcount");
  const cEl = document.getElementById("bizhead-certified-pct");
  const tEl = document.getElementById("bizhead-training-hours");
  const sEl = document.getElementById("bizhead-sherpa-clinics");

  if (hEl) hEl.textContent = data.activeHeadcount.toLocaleString();
  if (cEl) cEl.textContent = data.certifiedUnderwriters;
  if (tEl) tEl.textContent = data.totalTrainingHours;
  if (sEl) sEl.textContent = data.sherpaLedWorkshops;

  // Render zonal bars
  const zonalWrap = document.getElementById("bizhead-zonal-bars");
  if (zonalWrap && data.zonalAccreditation) {
    zonalWrap.innerHTML = data.zonalAccreditation.map(z => `
      <div style="margin-bottom: 0.85rem;">
        <div class="d-flex justify-between items-center" style="font-size: 0.8rem; margin-bottom: 0.25rem;">
          <strong>${z.zone}</strong>
          <span style="font-weight: 700; color: var(--tc-primary);">${z.accreditedPct} (${z.certifiedCount}/${z.totalUnderwriters})</span>
        </div>
        <div class="progress-bar-outer" style="height: 6px;">
          <div class="progress-bar-inner" style="width: ${z.accreditedPct}; background: ${parseInt(z.accreditedPct) >= 93 ? 'var(--status-completed)' : 'var(--tc-sky)'};"></div>
        </div>
      </div>
    `).join("");
  }

  // Render critical programs
  const progWrap = document.getElementById("bizhead-critical-programs");
  if (progWrap && data.criticalPrograms) {
    progWrap.innerHTML = data.criticalPrograms.map(p => `
      <div style="padding: 0.75rem; background: var(--bg-surface-alt); border-radius: var(--radius-sm); border-left: 3px solid var(--tc-sky);">
        <div class="d-flex justify-between items-center" style="margin-bottom: 0.2rem;">
          <strong style="font-size: 0.825rem; color: var(--tc-primary);">${p.name}</strong>
          <span class="badge badge-tag" style="font-size: 0.7rem;">${p.completion}</span>
        </div>
        <p style="margin: 0; font-size: 0.75rem; color: var(--text-body);">
          <strong style="color: var(--status-completed);">Business ROI:</strong> ${p.impact}
        </p>
      </div>
    `).join("");
  }
}

function renderDashCooHrView() {
  const data = TC_DATA.cooHrData;
  if (!data) return;

  const hEl = document.getElementById("coo-headcount");
  const cEl = document.getElementById("coo-compliance-index");
  const aEl = document.getElementById("coo-audit-readiness");
  const sEl = document.getElementById("coo-sherpas-count");

  const headcountVal = data.totalHeadcount || data.totalBuEmployees || 1840;
  if (hEl) hEl.textContent = headcountVal.toLocaleString();
  if (cEl) cEl.textContent = data.enterpriseCompliance || data.buStatutoryComplianceRate || "94.8%";
  if (aEl) aEl.textContent = data.mandatoryRiskMitigation || "100%";
  if (sEl) sEl.textContent = data.sherpaPipeline || `${data.certifiedSherpasActive || 42} Active`;

  // Render BU table
  const tbody = document.getElementById("coo-bu-performance-tbody");
  if (tbody && data.businessWisePerformance) {
    tbody.innerHTML = data.businessWisePerformance.map(b => `
      <tr>
        <td><strong><i class="fa-solid fa-building" style="color: var(--tc-sky); margin-right: 0.35rem;"></i>${b.business}</strong></td>
        <td>${b.headcount}</td>
        <td><strong style="color: var(--status-completed);">${b.compliance}</strong></td>
        <td>${b.certifiedPct}</td>
        <td>${b.sherpas} Mentors</td>
        <td><span class="badge badge-completed">${b.status}</span></td>
      </tr>
    `).join("");
  }

  // Render Strategic Pillars
  const pillarsWrap = document.getElementById("coo-pillars-grid");
  if (pillarsWrap && data.strategicPriorities) {
    pillarsWrap.innerHTML = data.strategicPriorities.map(p => `
      <div class="benefit-card">
        <div class="benefit-icon" style="background: #eff6ff; color: var(--tc-sky);"><i class="fa-solid fa-chess-knight"></i></div>
        <div class="benefit-info">
          <h5>${p.pillar}</h5>
          <p>${p.desc}</p>
        </div>
      </div>
    `).join("");
  }
}


// ==============================================================================
// 21. 7-PAGE CORPORATE NEWSLETTER (MAGAZINE PDF READER) CONTROLLER
// ==============================================================================
const newsletterPages = [
  {
    pageNum: 1,
    title: "The Learning Curve - Cover & Table of Contents",
    subtitle: "Edition 14 • Q3 FY26 • Official L&D Quarterly Magazine",
    html: `
      <div class="magazine-page-sheet" style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: #ffffff;">
        <div class="d-flex justify-between items-center" style="border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.75rem;">
          <span style="font-weight: 800; letter-spacing: 2px; color: #38bdf8;">TATA CAPITAL L&D</span>
          <span style="font-size: 0.8rem; color: #cbd5e1;">Edition 14 • Q3 FY26</span>
        </div>
        <div style="padding: 3rem 1rem; text-align: center;">
          <div class="badge" style="background: var(--tc-warm); color: #fff; margin-bottom: 1rem; font-size: 0.85rem; padding: 0.35rem 1rem;">
            QUARTERLY SPECIAL REPORT
          </div>
          <h1 style="font-size: 2.25rem; font-family: 'Poppins', sans-serif; font-weight: 800; line-height: 1.25; margin-bottom: 1rem; color: #ffffff;">
            THE LEARNING CURVE
          </h1>
          <h3 style="font-size: 1.2rem; color: #93c5fd; font-weight: 400; max-width: 600px; margin: 0 auto 2rem;">
            Building an Agile, Digitally-Empowered, Zero-Defect Lending Workforce Across India
          </h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; max-width: 620px; margin: 0 auto; text-align: left; background: rgba(255,255,255,0.08); padding: 1.5rem; border-radius: var(--radius-md);">
            <div><strong>Page 2:</strong> Foreword from MD & CHRO</div>
            <div><strong>Page 3:</strong> Project Sherpa SME Spotlight</div>
            <div><strong>Page 4:</strong> 360° Milestone Roadmap Analytics</div>
            <div><strong>Page 5:</strong> 100% Clean RBI Governance</div>
            <div><strong>Page 6:</strong> AI & Digital Credit Simulators</div>
            <div><strong>Page 7:</strong> Q3 Hall of Fame & RnR Winners</div>
          </div>
        </div>
      </div>
    `
  },
  {
    pageNum: 2,
    title: "Executive Foreword from MD & CHRO",
    subtitle: "Strategic Human Capital Priorities for Sustainable Lending Scale",
    html: `
      <div class="magazine-page-sheet">
        <div class="magazine-page-header">
          <div>
            <h3 style="color: var(--tc-primary); margin: 0;">Executive Foreword</h3>
            <span class="text-muted" style="font-size: 0.8rem;">Leadership Perspective • Tata Capital Limited</span>
          </div>
          <span class="badge badge-tag">Page 2 of 7</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
          <div>
            <h4 style="color: var(--tc-primary); font-size: 1rem; margin-bottom: 0.5rem;">"Capability Precedes Scale"</h4>
            <p style="font-size: 0.85rem; line-height: 1.6; color: var(--text-body);">
              "As Tata Capital continues its robust growth trajectory across retail consumer finance, affordable housing, motor loans, and SME lending, our defining institutional differentiator remains the caliber, integrity, and competence of our workforce. In FY26, we have transitioned from episodic classroom sessions to a continuous 360-degree capability engine."
            </p>
            <div style="margin-top: 1.5rem; font-weight: 700; color: var(--tc-primary); font-size: 0.85rem;">
              — Rajiv Sabharwal<br><span class="text-muted" style="font-weight: 400; font-size: 0.75rem;">Managing Director & CEO</span>
            </div>
          </div>
          <div>
            <h4 style="color: var(--tc-primary); font-size: 1rem; margin-bottom: 0.5rem;">"The Sherpa Multiplier"</h4>
            <p style="font-size: 0.85rem; line-height: 1.6; color: var(--text-body);">
              "The democratization of learning through Project Sherpa has turned 148 senior practitioners into accredited institutional faculty and internal consultants. When senior credit underwriters train frontline joiners, institutional knowledge is preserved and underwriting defects are stopped at the source."
            </p>
            <div style="margin-top: 1.5rem; font-weight: 700; color: var(--tc-primary); font-size: 0.85rem;">
              — Avijit Bhattacharya<br><span class="text-muted" style="font-weight: 400; font-size: 0.75rem;">Chief Human Resources Officer</span>
            </div>
          </div>
        </div>
        <div class="magazine-page-footer">
          <span>The Learning Curve • Edition 14</span>
          <span>Internal Training Publication</span>
        </div>
      </div>
    `
  },
  {
    pageNum: 3,
    title: "Project Sherpa Spotlight: Leaders Developing Leaders",
    subtitle: "84 Active SME Champions • 2,450+ Hours Delivered",
    html: `
      <div class="magazine-page-sheet">
        <div class="magazine-page-header">
          <div>
            <h3 style="color: var(--tc-primary); margin: 0;">Project Sherpa Spotlight</h3>
            <span class="text-muted" style="font-size: 0.8rem;">Internal Consultant & SME Faculty Feature</span>
          </div>
          <span class="badge badge-tag">Page 3 of 7</span>
        </div>
        <p style="font-size: 0.85rem; line-height: 1.6; color: var(--text-body); margin-bottom: 1.5rem;">
          In Q3 FY26, Project Sherpa achieved a record Net Promoter Score of <strong>4.88 / 5.0</strong>. Sherpas are not external consultants; they are full-time credit underwriters, risk heads, and branch managers who teach colleagues part-time.
        </p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
          <div style="background: var(--bg-surface-alt); padding: 1rem; border-radius: var(--radius-sm); border-top: 3px solid var(--tc-sky);">
            <strong style="color: var(--tc-primary); font-size: 0.85rem;">Devendra Kulkarni</strong>
            <div class="text-muted" style="font-size: 0.725rem;">Cluster Credit Head • Housing</div>
            <p style="font-size: 0.775rem; margin-top: 0.5rem; color: var(--text-body);">Trained 180+ credit officers on balance sheet scrubbing proxies.</p>
          </div>
          <div style="background: var(--bg-surface-alt); padding: 1rem; border-radius: var(--radius-sm); border-top: 3px solid var(--status-completed);">
            <strong style="color: var(--tc-primary); font-size: 0.85rem;">Pooja Singhania</strong>
            <div class="text-muted" style="font-size: 0.725rem;">Senior RM • Corporate & SME</div>
            <p style="font-size: 0.775rem; margin-top: 0.5rem; color: var(--text-body);">Consulted with regional hubs on spotting early credit default signals.</p>
          </div>
          <div style="background: var(--bg-surface-alt); padding: 1rem; border-radius: var(--radius-sm); border-top: 3px solid var(--tc-warm);">
            <strong style="color: var(--tc-primary); font-size: 0.85rem;">Siddheshwar Rao</strong>
            <div class="text-muted" style="font-size: 0.725rem;">Regional Ops • Two-Wheeler</div>
            <p style="font-size: 0.775rem; margin-top: 0.5rem; color: var(--text-body);">Accelerated digital onboarding adoption across 28 branches.</p>
          </div>
        </div>
        <div class="magazine-page-footer">
          <span>The Learning Curve • Edition 14</span>
          <span>Page 3</span>
        </div>
      </div>
    `
  },
  {
    pageNum: 4,
    title: "360° Milestone Roadmap: From Onboarding to Mastery",
    subtitle: "5 Distinct Stages of Tenure-Linked Capability Growth",
    html: `
      <div class="magazine-page-sheet">
        <div class="magazine-page-header">
          <div>
            <h3 style="color: var(--tc-primary); margin: 0;">360° Capability Framework</h3>
            <span class="text-muted" style="font-size: 0.8rem;">Stage-by-Stage Lending Competency Benchmarks</span>
          </div>
          <span class="badge badge-tag">Page 4 of 7</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          <div style="padding: 0.75rem 1rem; background: var(--bg-surface-alt); border-radius: var(--radius-sm); border-left: 3px solid var(--status-completed);">
            <strong>30 Days (Settle In):</strong> Focus on Tata Code of Conduct, NEOP orientation, basic lending products, and core CRM navigation.
          </div>
          <div style="padding: 0.75rem 1rem; background: var(--bg-surface-alt); border-radius: var(--radius-sm); border-left: 3px solid var(--status-in-progress);">
            <strong>60 Days (Working Knowledge):</strong> Hands-on file underwriting, CIBIL scrubbing, FinnOne LOS processing, and customer discussion.
          </div>
          <div style="padding: 0.75rem 1rem; background: var(--bg-surface-alt); border-radius: var(--radius-sm); border-left: 3px solid var(--tc-sky);">
            <strong>90 Days (Become Productive):</strong> Target achievement, cross-sell techniques, loan documentation, and regulatory disclosure rigor.
          </div>
          <div style="padding: 0.75rem 1rem; background: var(--bg-surface-alt); border-radius: var(--radius-sm); border-left: 3px solid #8b5cf6;">
            <strong>180 Days (Specialise & Lead):</strong> Early warning models, SARFAESI recovery, advanced Excel financial modeling, and first-time people leadership.
          </div>
          <div style="padding: 0.75rem 1rem; background: var(--bg-surface-alt); border-radius: var(--radius-sm); border-left: 3px solid var(--tc-warm);">
            <strong>360+ Days (Scale & Innovate):</strong> Strategic branch P&L management, ALM treasury governance, AI lending strategy, and Project Sherpa mentorship.
          </div>
        </div>
        <div class="magazine-page-footer">
          <span>The Learning Curve • Edition 14</span>
          <span>Page 4</span>
        </div>
      </div>
    `
  },
  {
    pageNum: 5,
    title: "Compliance & Regulatory Rigor: 100% Audit Readiness",
    subtitle: "Zero-Defect Culture across TCOC, POSH, RBI FPC & DPDP Act",
    html: `
      <div class="magazine-page-sheet">
        <div class="magazine-page-header">
          <div>
            <h3 style="color: var(--tc-primary); margin: 0;">Regulatory Compliance Excellence</h3>
            <span class="text-muted" style="font-size: 0.8rem;">Statutory Governance & Risk Shield</span>
          </div>
          <span class="badge badge-tag">Page 5 of 7</span>
        </div>
        <p style="font-size: 0.85rem; line-height: 1.6; color: var(--text-body);">
          In compliance, 99% is not enough. Tata Capital maintains a strict 100% completion requirement for all statutory and ethical certifications. In Q3, our automated audit engine recorded zero deficiencies during external regulatory assessments.
        </p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
          <div style="padding: 1rem; background: #ecfdf5; border-radius: var(--radius-sm); border: 1px solid #a7f3d0;">
            <strong style="color: #065f46;"><i class="fa-solid fa-scale-balanced"></i> Fair Practices Code (FPC)</strong>
            <p style="font-size: 0.8rem; margin: 0.25rem 0 0; color: #047857;">Key Fact Statement (KFS) zero-variance disclosures mandated across all branch disbursements.</p>
          </div>
          <div style="padding: 1rem; background: #eff6ff; border-radius: var(--radius-sm); border: 1px solid #bfdbfe;">
            <strong style="color: #1e40af;"><i class="fa-solid fa-shield-halved"></i> DPDP Act 2023</strong>
            <p style="font-size: 0.8rem; margin: 0.25rem 0 0; color: #1e3a8a;">Clean-desk protocols and end-to-end encryption for borrower financial data.</p>
          </div>
        </div>
        <div class="magazine-page-footer">
          <span>The Learning Curve • Edition 14</span>
          <span>Page 5</span>
        </div>
      </div>
    `
  },
  {
    pageNum: 6,
    title: "Digital Innovation: AI Underwriting Simulators & Tools",
    subtitle: "24x7 Self-Learning Academy & Interactive Credit Sandboxes",
    html: `
      <div class="magazine-page-sheet">
        <div class="magazine-page-header">
          <div>
            <h3 style="color: var(--tc-primary); margin: 0;">Digital Learning Architecture</h3>
            <span class="text-muted" style="font-size: 0.8rem;">Next-Gen EdTech in Financial Services</span>
          </div>
          <span class="badge badge-tag">Page 6 of 7</span>
        </div>
        <p style="font-size: 0.85rem; line-height: 1.6; color: var(--text-body);">
          The newly launched <strong>Self-Paced Learning Academy</strong> enables staff to upskill anytime with 5-15 minute microlearning modules, video masterclasses, and credit calculation sandboxes.
        </p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1.5rem;">
          <div style="padding: 1rem; background: var(--bg-surface-alt); border-radius: var(--radius-sm); text-align: center;">
            <i class="fa-solid fa-robot" style="font-size: 2rem; color: var(--tc-sky); margin-bottom: 0.5rem;"></i>
            <h5 style="margin: 0; font-size: 0.85rem;">GenAI Prompting</h5>
            <p style="font-size: 0.725rem; color: var(--text-muted); margin-top: 0.25rem;">Draft credit memos in minutes.</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-surface-alt); border-radius: var(--radius-sm); text-align: center;">
            <i class="fa-solid fa-calculator" style="font-size: 2rem; color: #10b981; margin-bottom: 0.5rem;"></i>
            <h5 style="margin: 0; font-size: 0.85rem;">FOIR Simulators</h5>
            <p style="font-size: 0.725rem; color: var(--text-muted); margin-top: 0.25rem;">Dynamic debt obligation modeling.</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-surface-alt); border-radius: var(--radius-sm); text-align: center;">
            <i class="fa-solid fa-file-powerpoint" style="font-size: 2rem; color: #ef4444; margin-bottom: 0.5rem;"></i>
            <h5 style="margin: 0; font-size: 0.85rem;">Executive Slides</h5>
            <p style="font-size: 0.725rem; color: var(--text-muted); margin-top: 0.25rem;">Storytelling for committee briefs.</p>
          </div>
        </div>
        <div class="magazine-page-footer">
          <span>The Learning Curve • Edition 14</span>
          <span>Page 6</span>
        </div>
      </div>
    `
  },
  {
    pageNum: 7,
    title: "Q3 Hall of Fame & RnR Champions",
    subtitle: "Celebrating Top Learners, Certified Underwriters & Star Sherpas",
    html: `
      <div class="magazine-page-sheet">
        <div class="magazine-page-header">
          <div>
            <h3 style="color: var(--tc-primary); margin: 0;">Hall of Fame & RnR Champions</h3>
            <span class="text-muted" style="font-size: 0.8rem;">Quarterly Felicitation & Excellence Awards</span>
          </div>
          <span class="badge badge-tag">Page 7 of 7</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <div style="background: var(--bg-surface-alt); padding: 1.25rem; border-radius: var(--radius-md); border-top: 3px solid var(--tc-warm);">
            <div class="d-flex items-center gap-2" style="margin-bottom: 0.75rem;">
              <i class="fa-solid fa-trophy" style="color: var(--tc-warm); font-size: 1.5rem;"></i>
              <strong style="color: var(--tc-primary); font-size: 0.95rem;">Top Sherpa Facilitator Q3</strong>
            </div>
            <h5 style="margin: 0; font-size: 0.9rem;">Devendra Kulkarni</h5>
            <div class="text-muted" style="font-size: 0.75rem;">Cluster Credit Head • Housing Finance</div>
            <p style="font-size: 0.8rem; margin-top: 0.5rem; color: var(--text-body);">
              Conducted 14 regional workshops with an unblemished 4.96/5.0 feedback score.
            </p>
          </div>

          <div style="background: var(--bg-surface-alt); padding: 1.25rem; border-radius: var(--radius-md); border-top: 3px solid var(--status-completed);">
            <div class="d-flex items-center gap-2" style="margin-bottom: 0.75rem;">
              <i class="fa-solid fa-medal" style="color: #059669; font-size: 1.5rem;"></i>
              <strong style="color: var(--tc-primary); font-size: 0.95rem;">Top Certified Learner Q3</strong>
            </div>
            <h5 style="margin: 0; font-size: 0.9rem;">Siddik Ghaniwala</h5>
            <div class="text-muted" style="font-size: 0.75rem;">Senior Credit Specialist • Retail Finance</div>
            <p style="font-size: 0.8rem; margin-top: 0.5rem; color: var(--text-body);">
              Completed 25 advanced certifications with 98% average assessment score and verified 210-day tenure.
            </p>
          </div>
        </div>
        <div style="margin-top: 1.5rem; text-align: center; font-size: 0.8rem; color: var(--text-muted);">
          Nominate your peers for Q4 RnR awards on the portal. All winners receive leadership appraisal credits.
        </div>
        <div class="magazine-page-footer">
          <span>The Learning Curve • Edition 14 (End of Publication)</span>
          <span>© Tata Capital L&D</span>
        </div>
      </div>
    `
  }
];

function openNewsletterReader() {
  appState.activeNewsletterPage = 1;
  renderNewsletterPageContent(1);
  openModal("newsletter-reader-modal");
}

function closeNewsletterReader() {
  closeModal("newsletter-reader-modal");
}

function renderNewsletterPageContent(pageNum) {
  const page = newsletterPages.find(p => p.pageNum === pageNum) || newsletterPages[0];
  const container = document.getElementById("nl-reader-page-content");
  const indicator = document.getElementById("nl-page-indicator");

  if (indicator) indicator.textContent = `Page ${page.pageNum} of 7`;
  if (container) container.innerHTML = page.html;

  // Update active pill
  document.querySelectorAll("#nl-page-pills .page-num-pill").forEach((pill, idx) => {
    pill.classList.toggle("active", idx + 1 === pageNum);
  });
}

function nextNewsletterPage() {
  if (appState.activeNewsletterPage < 7) {
    appState.activeNewsletterPage++;
    renderNewsletterPageContent(appState.activeNewsletterPage);
  } else {
    showToast("You are on the final page of The Learning Curve.");
  }
}

function prevNewsletterPage() {
  if (appState.activeNewsletterPage > 1) {
    appState.activeNewsletterPage--;
    renderNewsletterPageContent(appState.activeNewsletterPage);
  }
}

function gotoNewsletterPage(num) {
  appState.activeNewsletterPage = num;
  renderNewsletterPageContent(num);
}

// Multi-criteria rating setter
function setMultiRating(dimension, rating) {
  appState.multiFeedbackRatings[dimension] = rating;
  const box = document.getElementById(`fb-stars-${dimension}`);
  if (box) {
    const stars = box.querySelectorAll("i");
    stars.forEach((s, idx) => {
      s.className = (idx < rating) ? "fa-solid fa-star selected" : "fa-regular fa-star";
    });
  }
}

// Updated handleFeedbackSubmit
function handleFeedbackSubmit(e) {
  e.preventDefault();
  const program = document.getElementById("fb-program-select")?.value || "Lending Program";
  const faculty = document.getElementById("fb-faculty-name")?.value || "Sherpa";
  const isAnonymous = document.getElementById("fb-anonymous-check")?.checked;
  const refId = `TC-FB-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  showToast(`Feedback Submitted! Reference ID: ${refId}. Thank you for evaluating ${program} (${faculty}). L&D credits updated!`);

  const comments = document.getElementById("fb-comments");
  if (comments) comments.value = "";
}

// MD & CHRO Dashboard Renderer
function renderDashMdChroView() {
  const data = TC_DATA.mdChroData;
  if (!data) return;

  const hEl = document.getElementById("md-total-headcount");
  const rEl = document.getElementById("md-retention-lift");
  const sEl = document.getElementById("md-succession-pipeline");
  const aEl = document.getElementById("md-rbi-audit");

  if (hEl) hEl.textContent = data.headcountCovered.toLocaleString();
  if (rEl) rEl.textContent = data.retentionCorrelation;
  if (sEl) sEl.textContent = data.successionPipeline;
  if (aEl) aEl.textContent = data.rbiAuditStatus.split(" ")[0];

  const tbody = document.getElementById("md-vertical-scorecard-tbody");
  if (tbody && data.verticalScorecard) {
    tbody.innerHTML = data.verticalScorecard.map(v => `
      <tr>
        <td><strong><i class="fa-solid fa-building" style="color: var(--tc-sky); margin-right: 0.35rem;"></i>${v.vertical}</strong></td>
        <td>${v.headcount}</td>
        <td><strong style="color: var(--status-completed);">${v.certifiedPct}</strong></td>
        <td>${v.sherpas} Accredited</td>
        <td><span class="badge badge-completed">${v.retentionLift}</span></td>
        <td><span class="badge badge-completed"><i class="fa-solid fa-shield-check"></i> ${v.auditStatus}</span></td>
      </tr>
    `).join("");
  }
}

// Global window function exposures for reliable inline HTML event dispatching
window.openSherpaStepModal = openSherpaStepModal;
window.scrollToSherpaForm = scrollToSherpaForm;
window.switchTab = switchTab;
window.setDashboardViewMode = setDashboardViewMode;
window.selectMilestone = selectMilestone;
window.setLearningBasketView = setLearningBasketView;
window.filterByCategory = filterByCategory;
window.filterDigitalSub = filterDigitalSub;
window.renderMonthlyTrainings = renderMonthlyTrainings;
window.setKytViewMode = setKytViewMode;
window.confirmTrainingAttendance = confirmTrainingAttendance;
window.openElearningPlayer = openElearningPlayer;
window.closeElearningPlayer = closeElearningPlayer;
window.toggleElearningPlay = toggleElearningPlay;
window.toggleElearningFullscreen = toggleElearningFullscreen;
window.switchElPlayerTab = switchElPlayerTab;
window.completeActiveElearningModule = completeActiveElearningModule;
window.filterElearning = filterElearning;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.openNewsletterReader = openNewsletterReader;
window.closeNewsletterReader = closeNewsletterReader;
window.nextNewsletterPage = nextNewsletterPage;
window.prevNewsletterPage = prevNewsletterPage;
window.gotoNewsletterPage = gotoNewsletterPage;
window.setMultiRating = setMultiRating;
window.handleFeedbackSubmit = handleFeedbackSubmit;
window.openCourseModal = openCourseModal;
window.closeModal = closeModal;
window.openModal = openModal;
window.closeModalOnBackdrop = closeModalOnBackdrop;
window.setDemoBusiness = setDemoBusiness;
window.handleEmployeeTypeChange = handleEmployeeTypeChange;

