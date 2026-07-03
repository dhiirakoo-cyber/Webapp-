/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Amoo Academy Core Script - 100% Client-Side LocalStorage Database & Dynamic Rendering

// Initial Seed Data for Courses
const DEFAULT_COURSES = [
  {
    id: 'html-css',
    title: 'HTML & CSS responsive design',
    category: 'Programming',
    rating: 4.8,
    price: 200,
    reviews: 124,
    duration: '4 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
    description: 'Master the fundamentals of responsive web design. Build beautiful layouts from scratch using semantic HTML5 and modern layout models like Flexbox and Grid, styled beautifully with custom CSS.',
    curriculum: [
      'Welcome & Web Fundamentals',
      'HTML5 Semantic Tags & Best Practices',
      'CSS Foundations: Colors, Text, & Box Model',
      'Flexbox & Grid Layout Masterclass',
      'Responsive Web Design & Media Queries',
      'Capstone: Building your own Professional Portfolio'
    ],
    benefits: [
      'Develop mobile-first responsive web layouts',
      'Write search-engine-optimized semantic HTML',
      'Understand CSS specificity, variables, & transitions',
      'Host your first live static portfolio website on GitHub Pages'
    ]
  },
  {
    id: 'javascript',
    title: 'Modern JavaScript (ES6+)',
    category: 'Programming',
    rating: 4.9,
    price: 200,
    reviews: 189,
    duration: '6 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=800',
    description: 'Learn the core language of the modern web. From absolute variables, conditions, and loops up to advanced scopes, DOM manipulation, asynchronous fetching, and fully state-driven LocalStorage applications.',
    curriculum: [
      'JavaScript Syntax & Basic Operators',
      'Functions, Scope, & Array Methods (map, filter)',
      'DOM Selection & Interactive Event Handling',
      'Asynchronous JS: Promises & Fetching API Data',
      'Local Storage & In-Browser Databases',
      'Final Project: Building an Interactive CRM/Planner App'
    ],
    benefits: [
      'Create responsive, interactive user experiences',
      'Understand functional and synchronous/asynchronous logic',
      'Manage application states safely in browser local storage',
      'Prepare for libraries like React, Vue, or Next.js'
    ]
  },
  {
    id: 'graphic-design',
    title: 'Professional Graphic Design',
    category: 'Creative',
    rating: 4.7,
    price: 200,
    reviews: 96,
    duration: '4 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    description: 'Unlock your creative design potential. This course covers essential design principles, layout composition, professional typography pairings, color theories, and how to design premium vector graphics and visual assets.',
    curriculum: [
      'The 7 Core Principles of Graphic Design',
      'Color Theory & Creating Mood Palettes',
      'Typography: Pairing Fonts for Elegant Branding',
      'Vector Graphics & Drawing with Shapes',
      'Layout Composition & Hierarchy in Canvas',
      'Portfolio Showcase: Mock Brand Identity Kit'
    ],
    benefits: [
      'Master composition, symmetry, and negative space',
      'Create high-converting, professional social media graphics',
      'Build cohesive brand identities and corporate guidelines',
      'Establish a diverse digital design portfolio'
    ]
  },
  {
    id: 'video-editing',
    title: 'Cinematic Video Editing & Motion',
    category: 'Creative',
    rating: 4.8,
    price: 200,
    reviews: 82,
    duration: '5 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
    description: 'Learn how to tell compelling stories with video. Master precise timeline editing, narrative pacing, cinematic color grading, clean audio mix enhancement, and custom animated text transitions.',
    curriculum: [
      'Workspace Configuration & Media Import',
      'Trimming, Cuts, & Rhythm-based Editing',
      'Transitions, Overlays, & Text Animation',
      'Sound Design, Level Balancing, & Audio FX',
      'Color Correction & Grading for Moods',
      'Project: YouTube & TikTok Viral Video Formats'
    ],
    benefits: [
      'Perform sharp, narrative-driven editing cuts',
      'Fix audio issues and balance vocals with music',
      'Add keyframes for subtle zoom, slide, and panning effects',
      'Export high-definition formats optimized for social algorithms'
    ]
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media & Brand Growth',
    category: 'Marketing',
    rating: 4.6,
    price: 200,
    reviews: 145,
    duration: '4 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    description: 'Scale local brands and businesses using digital strategies. Create monthly content calendars, write high-converting copy, set up targeted local advertisements, and analyze campaigns on Facebook, Instagram, and Telegram.',
    curriculum: [
      'Digital Strategy & Defining Target Personas',
      'High-converting Ad Copywriting Techniques',
      'Telegram & Facebook Group Growth Hacks',
      'Setting up Targeted Social Media Ads',
      'Analyzing CTR, Reach, & Cost-Per-Click',
      'Final Project: Creating a 30-Day Marketing Plan'
    ],
    benefits: [
      'Formulate structured organic growth blueprints',
      'Run low-budget, high-return ad campaigns',
      'Write persuasive copy that converts prospects into clients',
      'Analyze metrics to continuously optimize marketing spend'
    ]
  },
  {
    id: 'contact-center-training',
    title: 'Contact Center Operations',
    category: 'Professional',
    rating: 4.8,
    price: 200,
    reviews: 110,
    duration: '3 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800',
    description: 'Launch your customer service career. Learn how to manage professional CRM platforms, master telecommunication etiquette, resolve complex complaints, and handle structured communication streams calmly and effectively.',
    curriculum: [
      'The Role of Contact Center Agents',
      'Professional Active Listening & Verbal Pacing',
      'CRM Navigation & Live Ticketing Simulation',
      'De-escalation & Managing Angry Callers',
      'Time Management & Call Logging Metrics',
      'Mock Scenarios: Live Simulated Support Desk'
    ],
    benefits: [
      'Master clear, active, empathetic communication techniques',
      'Understand how ticketing systems track and close requests',
      'Prepare for jobs in fast-growing local and offshore support centers',
      'Receive professional certification credentials'
    ]
  }
];

// Initial Seed Data for Users
const DEFAULT_USERS = [
  {
    email: 'dhiirakoo@gmail.com',
    username: 'amanuel',
    name: 'Amanuel (Admin)',
    phone: '0967145146',
    password: 'adminpassword123',
    role: 'admin'
  },
  {
    email: 'abel@gmail.com',
    username: 'abel',
    name: 'Abel Solomon',
    phone: '0911223344',
    password: 'password123',
    role: 'student'
  },
  {
    email: 'selam@gmail.com',
    username: 'selam',
    name: 'Selamawit Bekele',
    phone: '0912345678',
    password: 'password123',
    role: 'student'
  },
  {
    email: 'moha@gmail.com',
    username: 'mohamed',
    name: 'Mohammed Ibrahim',
    phone: '0930112233',
    password: 'password123',
    role: 'student'
  }
];

// Initial Seed Data for Enrollments
const DEFAULT_ENROLLMENTS = [
  {
    id: 'ENR-9081',
    studentName: 'Abel Solomon',
    studentEmail: 'abel@gmail.com',
    studentPhone: '0911223344',
    courseId: 'javascript',
    courseName: 'Modern JavaScript (ES6+)',
    price: 200,
    paymentMethod: 'telebirr',
    paymentDetails: 'TXN-TB-89472',
    status: 'approved',
    date: '2026-06-15'
  },
  {
    id: 'ENR-4720',
    studentName: 'Selamawit Bekele',
    studentEmail: 'selam@gmail.com',
    studentPhone: '0912345678',
    courseId: 'graphic-design',
    courseName: 'Professional Graphic Design',
    price: 200,
    paymentMethod: 'cbe',
    paymentDetails: 'CBE-FT-582910',
    status: 'approved',
    date: '2026-06-18'
  },
  {
    id: 'ENR-6312',
    studentName: 'Mohammed Ibrahim',
    studentEmail: 'moha@gmail.com',
    studentPhone: '0930112233',
    courseId: 'social-media-marketing',
    courseName: 'Social Media & Brand Growth',
    price: 200,
    paymentMethod: 'telebirr',
    paymentDetails: 'TXN-TB-51829',
    status: 'pending',
    date: '2026-06-22'
  },
  {
    id: 'ENR-1934',
    studentName: 'Kirubel Haile',
    studentEmail: 'kiru@gmail.com',
    studentPhone: '0944882233',
    courseId: 'html-css',
    courseName: 'HTML & CSS responsive design',
    price: 200,
    paymentMethod: 'chapa',
    paymentDetails: 'CH-Ref-901847',
    status: 'pending',
    date: '2026-06-24'
  }
];

// Initial Database Seeding function
function initializeDatabase() {
  if (!localStorage.getItem('courses')) {
    localStorage.setItem('courses', JSON.stringify(DEFAULT_COURSES));
  }
  if (!localStorage.getItem('students')) {
    localStorage.setItem('students', JSON.stringify(DEFAULT_USERS));
  }
  if (!localStorage.getItem('enrollments')) {
    localStorage.setItem('enrollments', JSON.stringify(DEFAULT_ENROLLMENTS));
  }
}

// Global initialization
initializeDatabase();

// ----------------------------------------------------
// SUPABASE REAL-TIME CLOUD INTEGRATION & AUTOMATIC SYNC
// ----------------------------------------------------
window.amooDb = {
  isActive: false,
  isSyncing: false,
  status: 'offline', // 'offline' | 'error' | 'connected' | 'missing_tables'
  client: null,
  config: {
    url: '',
    key: ''
  },

  async init() {
    console.log('[Amoo Db] Initializing dual-persistence database engine...');
    
    // Hardcoded public Supabase URL and publishable anon key fallbacks
    const DEFAULT_URL = 'https://sjdkozfltmx7bk4ph2ul.supabase.co';
    const DEFAULT_KEY = 'sb_publishable_Z-8LuYQrGv1BmC7c3oNyCg_zojgZvdS';

    const hasSavedConfig = !!localStorage.getItem('SUPABASE_URL');

    // 1. Load config from global window variables or client-side localStorage fallback (for GitHub Pages)
    this.config.url = window.SUPABASE_URL || localStorage.getItem('SUPABASE_URL') || DEFAULT_URL;
    this.config.key = window.SUPABASE_KEY || localStorage.getItem('SUPABASE_KEY') || DEFAULT_KEY;

    // 2. Validate config
    const isPlaceholderUrl = !this.config.url || this.config.url.includes('YOUR_SUPABASE_URL_AS_ITTI_GALCHI');
    
    if (isPlaceholderUrl) {
      this.status = 'offline';
      this.isActive = false;
      console.log('[Amoo Db] No custom Supabase URL found. Running in Local Storage Mode.');
      this.updateAdminUI();
      return;
    }

    // 3. Initialize client
    if (typeof window.supabase === 'undefined') {
      console.warn('[Amoo Db] Supabase CDN library is missing. Running in Local Storage Mode.');
      this.status = 'offline';
      this.isActive = false;
      this.updateAdminUI();
      return;
    }

    try {
      this.client = window.supabase.createClient(this.config.url, this.config.key);
      this.isActive = true;
      this.status = 'connected';
      console.log('[Amoo Db] Supabase Client initialized successfully!');
      
      // 4. Test connection and synchronize/seed tables
      await this.syncAndSeed(hasSavedConfig);
    } catch (e) {
      console.warn('[Amoo Db] Failed to connect to Supabase. Falling back to Local Storage Mode.', e);
      if (hasSavedConfig) {
        this.status = 'error';
      } else {
        this.status = 'offline';
        this.isActive = false;
      }
    }

    this.updateAdminUI();
  },

  async syncAndSeed(hasSavedConfig = false) {
    if (!this.isActive || !this.client) return;

    this.isSyncing = true;
    try {
      // Test fetching courses, students, enrollments
      const { data: dbCourses, error: errC } = await this.client.from('courses').select('*');
      const { data: dbUsers, error: errU } = await this.client.from('students').select('*');
      const { data: dbEnroll, error: errE } = await this.client.from('enrollments').select('*');
      
      if (errC || errU || errE) {
        const errorMsg = (errC?.message || errU?.message || errE?.message || '');
        console.warn('[Amoo Db] Could not fetch some tables from Supabase:', errorMsg);
        
        if (hasSavedConfig) {
          if (errorMsg.includes('relation') || errorMsg.includes('does not exist')) {
            this.status = 'missing_tables';
          } else {
            this.status = 'error';
          }
        } else {
          // If using the default credentials, fallback to offline state silently
          this.status = 'offline';
          this.isActive = false;
        }
        this.isSyncing = false;
        this.updateAdminUI();
        return;
      }

      this.status = 'connected';
      console.log('[Amoo Db] Database tables found and accessible.');

      // Check if Supabase is completely empty (needs seeding)
      if (dbCourses && dbCourses.length === 0) {
        console.log('[Amoo Db] Supabase is empty. Seeding DEFAULT_COURSES to cloud...');
        for (const course of DEFAULT_COURSES) {
          await this.client.from('courses').upsert(course);
        }
        
        console.log('[Amoo Db] Seeding DEFAULT_USERS to cloud...');
        for (const user of DEFAULT_USERS) {
          await this.client.from('students').upsert(user);
        }

        console.log('[Amoo Db] Seeding DEFAULT_ENROLLMENTS to cloud...');
        for (const enrollment of DEFAULT_ENROLLMENTS) {
          await this.client.from('enrollments').upsert(enrollment);
        }
        console.log('[Amoo Db] Seeding completed successfully!');
        
        this.isSyncing = false;
        // Reload page to reflect newly seeded courses
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        // Pull latest from Supabase and update local storage so UI is synchronized
        if (dbCourses && dbCourses.length > 0) {
          localStorage.setItem('courses', JSON.stringify(dbCourses));
        }

        if (dbUsers && dbUsers.length > 0) {
          localStorage.setItem('students', JSON.stringify(dbUsers));
        }

        if (dbEnroll && dbEnroll.length > 0) {
          localStorage.setItem('enrollments', JSON.stringify(dbEnroll));
        }
        console.log('[Amoo Db] Local storage successfully synchronized from cloud!');
        this.isSyncing = false;
        window.dispatchEvent(new CustomEvent('amoo-db-synced'));
      }
    } catch (e) {
      console.warn('[Amoo Db] Error during sync/seed operation:', e);
      if (hasSavedConfig) {
        this.status = 'error';
      } else {
        this.status = 'offline';
        this.isActive = false;
      }
      this.isSyncing = false;
    }
  },

  async save(key, data) {
    if (!this.isActive || !this.client || this.status !== 'connected') return;

    try {
      let table = '';
      let pk = '';
      if (key === 'courses') { table = 'courses'; pk = 'id'; }
      else if (key === 'students') { table = 'students'; pk = 'email'; }
      else if (key === 'enrollments') { table = 'enrollments'; pk = 'id'; }
      else return;

      // 1. Handle deletions on cloud (if any items were removed locally)
      const { data: dbItems, error: fetchErr } = await this.client.from(table).select(pk);
      if (!fetchErr && dbItems) {
        const localKeys = data.map(item => item[pk]);
        const toDelete = dbItems.filter(dbItem => !localKeys.includes(dbItem[pk]));
        
        for (const itemToDelete of toDelete) {
          await this.client.from(table).delete().eq(pk, itemToDelete[pk]);
          console.log(`[Amoo Db] Deleted missing item from Supabase ${table}:`, itemToDelete[pk]);
        }
      }

      // 2. Upsert current local items to cloud
      for (const item of data) {
        const cleanedItem = { ...item };
        // Parse JSON fields to ensure they are valid for jsonb columns in Postgres
        if (cleanedItem.curriculum && typeof cleanedItem.curriculum === 'string') {
          try { cleanedItem.curriculum = JSON.parse(cleanedItem.curriculum); } catch(e){}
        }
        if (cleanedItem.benefits && typeof cleanedItem.benefits === 'string') {
          try { cleanedItem.benefits = JSON.parse(cleanedItem.benefits); } catch(e){}
        }
        
        const { error } = await this.client.from(table).upsert(cleanedItem);
        if (error) {
          console.error(`[Amoo Db] Error upserting ${table}:`, error);
        }
      }
      console.log(`[Amoo Db] Successfully synchronized ${table} to cloud.`);
    } catch (e) {
      console.error('[Amoo Db] Error during auto-sync to cloud', e);
    }
  },

  updateAdminUI() {
    const badge = document.getElementById('supabase-status-badge');
    const urlDisp = document.getElementById('supabase-url-display');
    const keyDisp = document.getElementById('supabase-key-display');
    const warningContainer = document.getElementById('db-warning-container');

    if (urlDisp) {
      urlDisp.textContent = this.config.url || 'Not configured';
    }
    if (keyDisp) {
      keyDisp.textContent = this.config.key 
        ? (this.config.key.length > 20 ? this.config.key.substr(0, 8) + '...' + this.config.key.substr(-8) : this.config.key)
        : 'Not configured';
    }

    if (warningContainer) {
      if (this.status === 'missing_tables') {
        warningContainer.className = 'block';
        warningContainer.innerHTML = `
          <div class="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-900 dark:text-red-200 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div class="p-3 rounded-xl bg-red-500 text-white flex items-center justify-center shrink-0">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-base">Supabase Connection Succeeded, But Database Tables Are Missing!</h4>
              <p class="text-xs text-red-700 dark:text-red-300 mt-1">
                Please copy the setup script below, paste it into your <strong>Supabase SQL Editor</strong>, and click <strong>Run</strong>. Once the tables are created, refresh this page and the system will automatically seed your tables with courses, users, and transactions!
              </p>
            </div>
            <button onclick="document.getElementById('sql-schema-drawer').classList.remove('hidden'); document.getElementById('sql-schema-drawer').scrollIntoView({behavior: 'smooth'})" class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 uppercase tracking-wider">
              View Setup SQL
            </button>
          </div>
        `;
      } else {
        warningContainer.className = 'hidden';
        warningContainer.innerHTML = '';
      }
    }

    if (!badge) return;

    if (this.status === 'offline') {
      badge.className = 'px-3 py-1 rounded-full text-xs font-bold font-mono bg-yellow-500/10 text-yellow-600 dark:text-yellow-400';
      badge.textContent = 'Local Only (Offline)';
    } else if (this.status === 'connected') {
      badge.className = 'px-3 py-1 rounded-full text-xs font-bold font-mono bg-green-500/10 text-green-600 dark:text-green-400';
      badge.textContent = '● Connected & Synced';
    } else if (this.status === 'missing_tables') {
      badge.className = 'px-3 py-1 rounded-full text-xs font-bold font-mono bg-red-500/10 text-red-600 dark:text-red-400 animate-pulse';
      badge.textContent = '● Missing Tables';
    } else {
      badge.className = 'px-3 py-1 rounded-full text-xs font-bold font-mono bg-red-500/10 text-red-600 dark:text-red-400';
      badge.textContent = '● Connection Error';
    }
  }
};

// ----------------------------------------------------
// AUTOMATIC STORAGE INTERCEPTOR HOOK
// ----------------------------------------------------
const originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
  originalSetItem.apply(this, arguments);
  if (window.amooDb && window.amooDb.isActive && !window.amooDb.isSyncing && ['courses', 'students', 'enrollments'].includes(key)) {
    try {
      const parsedValue = JSON.parse(value);
      window.amooDb.save(key, parsedValue);
    } catch(e) {
      console.error('[Amoo Db] Auto-sync hook error', e);
    }
  }
};

// Launch Db Sync
window.addEventListener('DOMContentLoaded', () => {
  window.amooDb.init();
});

// Session User Retrieval Helpers
function getLoggedUser() {
  const userJson = localStorage.getItem('amoo_logged_user');
  return userJson ? JSON.parse(userJson) : null;
}

function isLoggedIn() {
  return getLoggedUser() !== null;
}

function isAdmin() {
  const user = getLoggedUser();
  return user && user.role === 'admin';
}

function getUserEnrollment(courseId) {
  const user = getLoggedUser();
  if (!user) return null;
  const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
  return enrollments.find(e => {
    const emailMatch = e.studentEmail && e.studentEmail.toLowerCase() === user.email.toLowerCase();
    const courseMatch = e.courseId && e.courseId.toLowerCase() === courseId.toLowerCase();
    return emailMatch && courseMatch;
  });
}

function logoutUser() {
  localStorage.removeItem('amoo_logged_user');
  showToast('Logged out successfully', 'success');
  setTimeout(() => {
    window.location.href = './index.html';
  }, 1000);
}

// ----------------------------------------------------
// UI TOAST ENGINE
// ----------------------------------------------------
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-5 right-5 flex flex-col gap-3 max-w-sm w-full p-4 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.id = 'toast-' + Math.random().toString(36).substr(2, 9);
  toast.className = 'toast-in flex items-center gap-3 p-4 rounded-xl shadow-lg border text-sm pointer-events-auto transition-all duration-300 ';

  // Style according to type
  if (type === 'success') {
    toast.className += 'bg-green-50 border-green-200 text-green-800 dark:bg-slate-800 dark:border-green-900/50 dark:text-green-300';
    toast.innerHTML = `
      <span class="p-1 rounded-full bg-green-500 text-white flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </span>
      <span class="font-medium flex-1">${message}</span>
    `;
  } else if (type === 'error') {
    toast.className += 'bg-red-50 border-red-200 text-red-800 dark:bg-slate-800 dark:border-red-900/50 dark:text-red-400';
    toast.innerHTML = `
      <span class="p-1 rounded-full bg-red-500 text-white flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </span>
      <span class="font-medium flex-1">${message}</span>
    `;
  } else {
    toast.className += 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-slate-800 dark:border-blue-900/50 dark:text-blue-300';
    toast.innerHTML = `
      <span class="p-1 rounded-full bg-blue-500 text-white flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      </span>
      <span class="font-medium flex-1">${message}</span>
    `;
  }

  container.appendChild(toast);

  // Remove toast after duration
  setTimeout(() => {
    toast.classList.replace('toast-in', 'toast-out');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// ----------------------------------------------------
// DYNAMIC NAVIGATION AND FOOTER RENDERING
// ----------------------------------------------------
function renderNavbar() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const currentPath = window.location.pathname;
  const isPage = (name) => currentPath.endsWith(name);
  const user = getLoggedUser();

  const isDarkMode = localStorage.getItem('theme') === 'dark';

  header.className = 'sticky top-0 z-50 w-full glass-header border-b border-gray-200 dark:border-slate-800/80 transition-colors duration-300';

  const urlParams = new URLSearchParams(window.location.search);
  const currentTab = urlParams.get('tab') || 'dashboard';

  let menuItems = [];
  if (user) {
    menuItems = [
      { label: 'Dashboard', href: './index.html?tab=dashboard', active: isPage('index.html') && currentTab === 'dashboard', en: 'Dashboard', ao: 'Dabaal' },
      { label: 'My Library', href: './index.html?tab=library', active: isPage('index.html') && currentTab === 'library', en: 'My Library', ao: 'Kutaa Deebii' },
      { label: 'Browse Courses', href: './courses.html', active: isPage('courses.html'), en: 'Browse Courses', ao: 'Koorsiiwwan' },
      { label: 'Transactions', href: './index.html?tab=transactions', active: isPage('index.html') && currentTab === 'transactions', en: 'Transactions', ao: 'Kaffaltiiwwan' }
    ];
  } else {
    menuItems = [
      { label: 'Home', href: './index.html', active: isPage('index.html') || currentPath === '/' || currentPath.endsWith('/'), en: 'Home', ao: 'Dhaabbata' },
      { label: 'Courses', href: './courses.html', active: isPage('courses.html') || isPage('course-details.html'), en: 'Courses', ao: 'Koorsiiwwan' },
      { label: 'Interactive Demo', href: './demo.html', active: isPage('demo.html'), en: 'Interactive Demo', ao: 'Dimoo' }
    ];
  }

  if (user && user.role === 'admin') {
    menuItems.push({ label: 'Admin Panel', href: './admin.html', active: isPage('admin.html'), en: 'Admin Panel', ao: 'Garee Bulchiinsaa' });
  }

  // Draw Desktop items
  const menuHtml = menuItems.map(item => {
    const text = (window.amooLang && window.amooLang.currentLang === 'ao') ? item.ao : item.en;
    return `
      <a id="nav-${item.label.toLowerCase().replace(/\s+/g, '-')}" href="${item.href}" data-en="${item.en}" data-ao="${item.ao}" class="text-sm font-semibold transition-colors duration-200 ${
        item.active 
          ? 'text-green-600 dark:text-green-400 font-bold border-b-2 border-green-500 py-1' 
          : 'text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400'
      }">
        ${text}
      </a>
    `;
  }).join('');

  // Mobile drawer links
  const mobileMenuHtml = menuItems.map(item => {
    const text = (window.amooLang && window.amooLang.currentLang === 'ao') ? item.ao : item.en;
    return `
      <a href="${item.href}" data-en="${item.en}" data-ao="${item.ao}" class="px-4 py-3 rounded-lg text-base font-semibold border-l-4 transition-all duration-150 ${
        item.active 
          ? 'bg-green-50 text-green-700 border-green-500 dark:bg-slate-800 dark:text-green-400' 
          : 'text-gray-600 hover:bg-gray-50 border-transparent dark:text-gray-300 dark:hover:bg-slate-800'
      }">
        ${text}
      </a>
    `;
  }).join('');

  // Auth Button configuration
  let authHtml = '';
  let mobileAuthHtml = '';

  const isAo = (window.amooLang && window.amooLang.currentLang === 'ao');

  if (user) {
    authHtml = `
      <div class="flex items-center gap-4">
        <div class="hidden xl:flex flex-col items-end">
          <span class="text-xs font-semibold text-gray-500 dark:text-gray-400" data-en="Welcome," data-ao="Baga Garaa Galtan,">${isAo ? 'Baga Garaa Galtan,' : 'Welcome,'}</span>
          <span class="text-sm font-bold text-gray-800 dark:text-gray-100">${user.name}</span>
        </div>
        <div class="h-10 w-10 rounded-full bg-gradient-to-tr from-green-500 to-green-700 text-white font-bold flex items-center justify-center text-sm border-2 border-green-100 shadow-md">
          ${user.name.split(' ').map(n => n[0]).join('').substr(0,2).toUpperCase()}
        </div>
        <button id="logout-btn" data-en="Sign Out" data-ao="Bahi" class="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-sm transition-colors duration-150">
          ${isAo ? 'Bahi' : 'Sign Out'}
        </button>
      </div>
    `;

    mobileAuthHtml = `
      <div class="flex flex-col gap-3 p-4 border-t border-gray-100 dark:border-slate-800">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-full bg-green-500 text-white font-bold flex items-center justify-center text-sm">
            ${user.name.split(' ').map(n => n[0]).join('').substr(0,2).toUpperCase()}
          </div>
          <div>
            <div class="text-sm font-bold text-gray-800 dark:text-gray-100">${user.name}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">${user.email}</div>
          </div>
        </div>
        <button id="mobile-logout-btn" data-en="Sign Out" data-ao="Bahi" class="w-full py-2.5 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors text-center text-sm">
          ${isAo ? 'Bahi' : 'Sign Out'}
        </button>
      </div>
    `;
  } else {
    authHtml = `
      <div class="flex items-center gap-3">
        <a id="nav-login-btn" href="./login.html" data-en="Sign In" data-ao="Seeni" class="amoo-nav-btn-signin">
          ${isAo ? 'Seeni' : 'Sign In'}
        </a>
        <a id="nav-register-btn" href="./register.html" data-en="Join Free" data-ao="Miseensomi" class="amoo-nav-btn-joinfree">
          ${isAo ? 'Miseensomi' : 'Join Free'}
        </a>
      </div>
    `;

    mobileAuthHtml = `
      <div class="flex flex-col gap-2.5 p-4 border-t border-gray-100 dark:border-slate-800/80">
        <a href="./login.html" data-en="Sign In" data-ao="Seeni" class="w-full py-2.5 text-center font-bold text-green-600 hover:text-white hover:bg-green-600 dark:text-green-400 dark:hover:bg-green-500 rounded-xl text-sm border-2 border-green-500/30 dark:border-green-400/20 transition-all">
          ${isAo ? 'Seeni' : 'Sign In'}
        </a>
        <a href="./register.html" data-en="Join Free" data-ao="Miseensomi" class="w-full py-2.5 text-center font-bold bg-green-600 text-white rounded-xl hover:bg-green-700 text-sm shadow-md transition-all">
          ${isAo ? 'Miseensomi' : 'Join Free'}
        </a>
      </div>
    `;
  }

  header.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo & Brand -->
        <a id="nav-brand" href="./index.html" class="flex items-center gap-3 group focus:outline-none">
          <div class="h-10 w-10 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-105 transition-transform duration-200">
            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">AMOO</span>
            <span class="text-xs font-bold tracking-widest text-green-600 dark:text-green-400 -mt-1 uppercase">ACADEMY</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-8">
          ${menuHtml}
        </nav>

        <!-- Right Side: Controls & Auth -->
        <div class="flex items-center gap-2 sm:gap-4 md:gap-5">
          <!-- Desktop Toggles (Hidden on mobile) -->
          <div class="hidden md:flex items-center gap-4">
            <!-- Bento Language Toggle Button -->
            <div class="flex items-center p-0.5 bg-gray-100/80 dark:bg-slate-800/80 border border-gray-200/50 dark:border-slate-700/50 rounded-xl shadow-inner">
              <button id="lang-toggle-en" onclick="try { window.amooLang.setLanguage('en') } catch(e) {}" class="px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-widest rounded-lg transition-all duration-200 ${!window.amooLang || window.amooLang.currentLang === 'en' ? 'bg-white dark:bg-slate-700 text-green-600 dark:text-green-400 shadow-sm border border-gray-200/30 dark:border-slate-600/30' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}">
                EN
              </button>
              <button id="lang-toggle-ao" onclick="try { window.amooLang.setLanguage('ao') } catch(e) {}" class="px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-widest rounded-lg transition-all duration-200 ${window.amooLang && window.amooLang.currentLang === 'ao' ? 'bg-white dark:bg-slate-700 text-green-600 dark:text-green-400 shadow-sm border border-gray-200/30 dark:border-slate-600/30' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}">
                AO
              </button>
            </div>

            <!-- Dark Mode Toggle Button -->
            <button id="theme-toggle" aria-label="Toggle dark mode" class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-gray-300 transition-colors focus:outline-none">
              ${isDarkMode 
                ? `<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>` 
                : `<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`
              }
            </button>
          </div>

          <!-- CTA/Auth Section (Always visible, responsive size) -->
          <div class="flex items-center gap-2 sm:gap-3">
            ${authHtml}
          </div>

          <!-- Mobile Extra Toggles & Hamburger (Only visible on mobile) -->
          <div class="flex items-center gap-2 md:hidden">
            <!-- Mobile Bento Language Toggle -->
            <div class="flex items-center p-0.5 bg-gray-100/80 dark:bg-slate-800/80 border border-gray-200/50 dark:border-slate-700/50 rounded-xl shadow-inner">
              <button id="mob-lang-toggle-en" onclick="try { window.amooLang.setLanguage('en') } catch(e) {}" class="px-2 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-lg transition-all duration-200 ${!window.amooLang || window.amooLang.currentLang === 'en' ? 'bg-white dark:bg-slate-700 text-green-600 dark:text-green-400 shadow-sm border border-gray-200/30 dark:border-slate-600/30' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}">
                EN
              </button>
              <button id="mob-lang-toggle-ao" onclick="try { window.amooLang.setLanguage('ao') } catch(e) {}" class="px-2 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-lg transition-all duration-200 ${window.amooLang && window.amooLang.currentLang === 'ao' ? 'bg-white dark:bg-slate-700 text-green-600 dark:text-green-400 shadow-sm border border-gray-200/30 dark:border-slate-600/30' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}">
                AO
              </button>
            </div>

            <button id="mobile-theme-toggle" class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-gray-300 transition-colors">
              ${isDarkMode 
                ? `<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>` 
                : `<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`
              }
            </button>
            
            <button id="mobile-menu-toggle" class="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 focus:outline-none">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Content -->
    <div id="mobile-drawer" class="hidden md:hidden absolute left-0 w-full bg-white dark:bg-slate-900 shadow-2xl border-b border-gray-200 dark:border-slate-800 flex flex-col pt-2 pb-4 px-4 z-40 transition-all duration-200 ease-out">
      <nav class="flex flex-col gap-1 mb-4">
        ${mobileMenuHtml}
      </nav>
      ${mobileAuthHtml}
    </div>
  `;

  // Attach Event Listeners
  const themeBtn = document.getElementById('theme-toggle');
  const mobThemeBtn = document.getElementById('mobile-theme-toggle');
  const drawerBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');

  const toggleTheme = () => {
    const isDarkNow = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
    renderNavbar(); // Re-render to update icon
  };

  if (themeBtn) themeBtn.onclick = toggleTheme;
  if (mobThemeBtn) mobThemeBtn.onclick = toggleTheme;

  if (drawerBtn && drawer) {
    drawerBtn.onclick = () => {
      drawer.classList.toggle('hidden');
    };
  }

  // Bind Sign Out clicks
  const outBtn = document.getElementById('logout-btn');
  const mobOutBtn = document.getElementById('mobile-logout-btn');
  if (outBtn) outBtn.onclick = logoutUser;
  if (mobOutBtn) mobOutBtn.onclick = logoutUser;
}

function renderFooter() {
  const footer = document.getElementById('main-footer');
  if (!footer) return;

  footer.className = 'w-full bg-slate-950 text-gray-400 border-t border-slate-900 transition-colors duration-300';
  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        
        <!-- Info & Branding -->
        <div class="md:col-span-1.5 flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-lg font-extrabold tracking-tight text-white leading-tight">AMOO ACADEMY</span>
              <span class="text-[10px] font-bold tracking-widest text-green-500 uppercase -mt-0.5">HARAR, ETHIOPIA</span>
            </div>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed max-w-sm mt-2">
            Amoo Academy delivers world-class, premium digital professional skill training in Ethiopia. Learn modern skills with local accessibility and dedicated support.
          </p>
          <div class="flex gap-4 mt-2">
            <!-- Ethiopian Ribbon Accent -->
            <div class="h-1.5 w-16 bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 rounded-full"></div>
          </div>
        </div>

        <!-- Location & Contact -->
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-green-500 pl-3">Academy Info</h3>
          <ul class="flex flex-col gap-3 text-sm">
            <li class="flex items-center gap-3">
              <svg class="h-5 w-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Harar, Ethiopia</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="h-5 w-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <a href="tel:0967145146" class="hover:text-white transition-colors">0967145146</a>
            </li>
            <li class="flex items-center gap-3">
              <svg class="h-5 w-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href="mailto:dhiirakoo@gmail.com" class="hover:text-white transition-colors break-all">dhiirakoo@gmail.com</a>
            </li>
            <li class="flex items-center gap-3">
              <svg class="h-5 w-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <span>Director: Amanuel</span>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-green-500 pl-3">Explore</h3>
          <ul class="flex flex-col gap-2 text-sm">
            <li><a href="./index.html" class="hover:text-white hover:underline transition-colors">Home Landing</a></li>
            <li><a href="./courses.html" class="hover:text-white hover:underline transition-colors">Skill Courses</a></li>
            <li><a href="./demo.html" class="hover:text-white hover:underline transition-colors">Interactive Demo</a></li>
            <li><a href="./login.html" class="hover:text-white hover:underline transition-colors">Student Login</a></li>
            <li><a href="./register.html" class="hover:text-white hover:underline transition-colors">Register Free</a></li>
          </ul>
        </div>

        <!-- Local Details -->
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-green-500 pl-3">Pricing Promise</h3>
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col gap-2">
            <span class="text-xs font-bold text-green-500 tracking-wider">GLOBAL PRICE COMMITMENT</span>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-white">200</span>
              <span class="text-sm font-bold text-yellow-500">ETB</span>
              <span class="text-xs text-gray-500">/ Course</span>
            </div>
            <p class="text-xs text-gray-500 leading-normal">
              No hidden fees, no subscription traps. Complete access to video lectures, interactive playgrounds, and certificate programs.
            </p>
          </div>
        </div>

      </div>

      <!-- Copyright Section -->
      <div class="mt-12 md:mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© 2026 Amoo Academy. All rights reserved. Located in Harar, Ethiopia.</p>
        <div class="flex gap-4">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" class="hover:text-white transition-colors">Contact Amanuel</a>
        </div>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// BILINGUAL LANGUAGE ENGINE (ENGLISH & AFAAN OROMOO)
// ----------------------------------------------------
window.amooLang = {
  currentLang: 'en',

  init() {
    try {
      this.currentLang = localStorage.getItem('amoo_lang') || 'en';
      if (!['en', 'ao'].includes(this.currentLang)) {
        this.currentLang = 'en';
      }
      this.applyLanguage();
    } catch (e) {
      console.error('[Amoo Lang] Initialization failed:', e);
    }
  },

  setLanguage(lang) {
    try {
      if (!['en', 'ao'].includes(lang)) return;
      this.currentLang = lang;
      localStorage.setItem('amoo_lang', lang);
      this.applyLanguage();
      // Re-render components that might have dynamic text or state
      if (typeof renderNavbar === 'function') {
        renderNavbar();
      }
    } catch (e) {
      console.error('[Amoo Lang] Failed to set language:', e);
    }
  },

  applyLanguage() {
    try {
      // 1. Scan and update all elements with data-en/data-ao attributes
      const elements = document.querySelectorAll('[data-en], [data-ao]');
      elements.forEach(el => {
        try {
          const enText = el.getAttribute('data-en');
          const aoText = el.getAttribute('data-ao');
          
          if (this.currentLang === 'ao') {
            // Use Afaan Oromoo if available; fallback to English if completely missing
            if (aoText !== null && aoText !== undefined && aoText.trim() !== '') {
              el.textContent = aoText;
            } else if (enText !== null) {
              el.textContent = enText;
            }
          } else {
            // Default to English
            if (enText !== null) {
              el.textContent = enText;
            }
          }
        } catch (elError) {
          console.warn('[Amoo Lang] Failed to translate specific element:', el, elError);
        }
      });

      // 2. Scan and update placeholder attributes
      const inputs = document.querySelectorAll('[data-placeholder-en], [data-placeholder-ao]');
      inputs.forEach(input => {
        try {
          const enPlaceholder = input.getAttribute('data-placeholder-en');
          const aoPlaceholder = input.getAttribute('data-placeholder-ao');
          
          if (this.currentLang === 'ao') {
            if (aoPlaceholder !== null && aoPlaceholder !== undefined && aoPlaceholder.trim() !== '') {
              input.placeholder = aoPlaceholder;
            } else if (enPlaceholder !== null) {
              input.placeholder = enPlaceholder;
            }
          } else {
            if (enPlaceholder !== null) {
              input.placeholder = enPlaceholder;
            }
          }
        } catch (inputError) {
          console.warn('[Amoo Lang] Failed to translate specific placeholder:', input, inputError);
        }
      });
    } catch (e) {
      console.error('[Amoo Lang] Critical failure during language translation scan:', e);
    }
  }
};

// Global page load tasks
window.addEventListener('DOMContentLoaded', () => {
  // Read and apply stored theme
  const currentTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Render headers and footers
  renderNavbar();
  renderFooter();

  // Initialize bilingual engine
  try {
    window.amooLang.init();
  } catch(e) {
    console.error('[Amoo Lang] Startup error:', e);
  }

  // Check and inject demo state simulator
  try {
    injectSimulationWidget();
  } catch(e) {
    console.error('[Amoo Sim] Startup error:', e);
  }

  // Check and run dashboard if on index.html
  try {
    if (typeof checkDashboardState === 'function') {
      checkDashboardState();
    }
  } catch(e) {
    console.error('[Amoo Dash] Startup error:', e);
  }
});

// ====================================================
// AMOO ACADEMY STUDENT WORKSPACE & SIMULATION ENGINE
// ====================================================

function checkDashboardState() {
  const visitorView = document.getElementById('visitor-view');
  const dashboardView = document.getElementById('dashboard-view');
  if (!visitorView || !dashboardView) return;

  if (isLoggedIn()) {
    visitorView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
    renderDashboard();
  } else {
    visitorView.classList.remove('hidden');
    dashboardView.classList.add('hidden');
  }
}

function renderDashboard() {
  const container = document.getElementById('dashboard-view');
  if (!container) return;

  const user = getLoggedUser();
  if (!user) return;

  // Read query tab
  const urlParams = new URLSearchParams(window.location.search);
  const currentTab = urlParams.get('tab') || 'dashboard';

  // Calculate statistics
  const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
  const userEnrollments = enrollments.filter(e => e.studentEmail && e.studentEmail.toLowerCase() === user.email.toLowerCase());
  const enrolledCount = userEnrollments.length;
  const completedCount = userEnrollments.filter(e => e.progress >= 100).length;
  const certificateCount = completedCount; // Certificate earned for each completed course

  const isAo = (window.amooLang && window.amooLang.currentLang === 'ao');

  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
      
      <!-- Welcome Header Card -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-gray-150 dark:border-slate-800 shadow-sm mb-8 relative overflow-hidden transition-colors duration-200">
        <!-- Background subtle graphics -->
        <div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-green-500/5 blur-2xl"></div>
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <span class="text-xs font-extrabold text-green-600 dark:text-green-400 uppercase tracking-widest block mb-1" data-en="Student Workspace" data-ao="Bakka Hojii Barataa">Student Workspace</span>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white font-display">
              ${isAo ? 'Baga Nagaan Deebite' : 'Welcome back'}, <span class="text-green-600 dark:text-green-400">${user.name}</span>! 👋
            </h1>
            <p class="text-gray-500 dark:text-gray-400 text-sm mt-1" data-en="Track your professional progress, manage active courses, and view certificates of excellence." data-ao="Guddina ogummaa keessanii hordofaa, koorsiiwwan jiran bulchaa, waraqaa ragaa keessan ilaalaa.">
              Track your professional progress, manage active courses, and view certificates of excellence.
            </p>
          </div>
          
          <!-- Interactive Stats Grid -->
          <div class="grid grid-cols-3 gap-4 bg-gray-50 dark:bg-slate-900 p-4 rounded-2xl border border-gray-100 dark:border-slate-800/80">
            <div class="text-center px-2">
              <span class="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white block font-display">${enrolledCount}</span>
              <span class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block mt-0.5" data-en="Enrolled" data-ao="Galmaa'an">Enrolled</span>
            </div>
            <div class="text-center px-2 border-x border-gray-200 dark:border-slate-800">
              <span class="text-xl sm:text-2xl font-extrabold text-green-600 dark:text-green-400 block font-display">${completedCount}</span>
              <span class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block mt-0.5" data-en="Completed" data-ao="Xumuraman">Completed</span>
            </div>
            <div class="text-center px-2">
              <span class="text-xl sm:text-2xl font-extrabold text-yellow-500 block font-display">${certificateCount}</span>
              <span class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block mt-0.5" data-en="Certificates" data-ao="Ragaalee">Certificates</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Inner Tab-navigation for Dashboard (Syncs with page tabs) -->
      <div class="flex border-b border-gray-200 dark:border-slate-800 gap-4 sm:gap-6 mb-8 overflow-x-auto pb-px scrollbar-none">
        <a href="./index.html?tab=dashboard" class="pb-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap focus:outline-none flex items-center gap-1.5 ${currentTab === 'dashboard' ? 'border-green-500 text-green-600 dark:text-green-400' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'}" data-en="🏠 Overview" data-ao="🏠 Ilaalcha">
          🏠 ${isAo ? 'Ilaalcha' : 'Overview'}
        </a>
        <a href="./index.html?tab=library" class="pb-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap focus:outline-none flex items-center gap-1.5 ${currentTab === 'library' ? 'border-green-500 text-green-600 dark:text-green-400' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'}" data-en="📚 My Library" data-ao="📚 Kuusaa Kooti">
          📚 ${isAo ? 'Kuusaa Kooti' : 'My Library'}
        </a>
        <a href="./index.html?tab=courses" class="pb-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap focus:outline-none flex items-center gap-1.5 ${currentTab === 'courses' ? 'border-green-500 text-green-600 dark:text-green-400' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'}" data-en="🌐 Browse Courses" data-ao="🌐 Koorsiiwwan">
          🌐 ${isAo ? 'Koorsii Barbaadi' : 'Browse Courses'}
        </a>
        <a href="./index.html?tab=transactions" class="pb-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap focus:outline-none flex items-center gap-1.5 ${currentTab === 'transactions' ? 'border-green-500 text-green-600 dark:text-green-400' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'}" data-en="💳 Transactions" data-ao="💳 Kaffaltii">
          💳 ${isAo ? 'Kaffaltiiwwan' : 'Transactions'}
        </a>
      </div>

      <!-- Active Tab Panel Content -->
      <div id="tab-panel">
         <!-- Dynamic tab content injected here -->
      </div>

    </div>
  `;

  // Render the specific active tab panel content
  const tabPanel = document.getElementById('tab-panel');
  if (!tabPanel) return;

  if (currentTab === 'dashboard') {
    renderOverviewPanel(tabPanel, user, userEnrollments, isAo);
  } else if (currentTab === 'library') {
    renderLibraryPanel(tabPanel, userEnrollments, isAo);
  } else if (currentTab === 'courses') {
    renderCoursesPanel(tabPanel, userEnrollments, isAo);
  } else if (currentTab === 'transactions') {
    renderTransactionsPanel(tabPanel, user, isAo);
  }

  // Auto apply languages if any static translation exists
  if (window.amooLang && typeof window.amooLang.applyLanguage === 'function') {
    window.amooLang.applyLanguage();
  }
}

function renderOverviewPanel(container, user, userEnrollments, isAo) {
  let activeCoursesHtml = '';
  
  const activeEnrollments = userEnrollments.filter(e => e.progress < 100);
  const completedEnrollments = userEnrollments.filter(e => e.progress >= 100);

  if (activeEnrollments.length > 0) {
    activeCoursesHtml = activeEnrollments.map(e => {
      return `
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-150 dark:border-slate-800 shadow-sm flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 rounded-md">In Progress</span>
            <span class="text-xs font-bold text-gray-400 font-mono">${e.progress}% Completed</span>
          </div>
          <h3 class="text-base font-bold text-gray-900 dark:text-white leading-tight font-display">${e.courseTitle}</h3>
          
          <!-- Progress bar -->
          <div class="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
            <div class="bg-green-500 h-2.5 rounded-full transition-all duration-300" style="width: ${e.progress}%"></div>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button onclick="simulateLearning('${e.courseId}', 25)" class="px-3 py-1.5 bg-green-50 hover:bg-green-100 dark:bg-green-500/10 dark:text-green-400 text-xs font-bold rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all">
              📚 Study (+25% Progress)
            </button>
            <button onclick="openPurchaseModal('${e.courseId}')" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer">
              Continue Learning →
            </button>
          </div>
        </div>
      `;
    }).join('');
  } else {
    activeCoursesHtml = `
      <div class="p-6 rounded-2xl border border-dashed border-gray-200 dark:border-slate-800 text-center flex flex-col items-center justify-center gap-4 py-12 bg-white dark:bg-slate-800/20">
        <div class="h-12 w-12 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-400">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        </div>
        <div>
          <h4 class="text-sm font-bold text-gray-800 dark:text-gray-200">No active classes</h4>
          <p class="text-xs text-gray-500 mt-1 max-w-xs">Explore our premium 200 ETB courses to start building your professional skills today.</p>
        </div>
        <a href="./index.html?tab=courses" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl transition-all shadow-md">
          Browse Courses
        </a>
      </div>
    `;
  }

  let completedCoursesHtml = '';
  if (completedEnrollments.length > 0) {
    completedCoursesHtml = completedEnrollments.map(e => {
      return `
        <div class="p-4 rounded-xl bg-green-500/5 dark:bg-green-500/5 border border-green-500/10 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🎓</span>
            <div class="min-w-0">
              <h4 class="text-xs font-bold text-gray-900 dark:text-white truncate max-w-[150px] sm:max-w-xs">${e.courseTitle}</h4>
              <p class="text-[10px] text-green-600 dark:text-green-400 font-semibold mt-0.5">Certificate Unlocked</p>
            </div>
          </div>
          <button onclick="viewCertificate('${e.courseId}')" class="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-[11px] font-bold rounded-lg shadow-sm transition-all whitespace-nowrap">
            View Certificate
          </button>
        </div>
      `;
    }).join('');
  } else {
    completedCoursesHtml = `
      <p class="text-xs text-gray-400 dark:text-gray-500 italic py-2">Complete any course to 100% to earn your Amoo Academy certificate of achievement.</p>
    `;
  }

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Left 8 Columns: Active Course Trackers -->
      <div class="lg:col-span-8 flex flex-col gap-6">
        <div>
          <h2 class="text-lg font-bold text-gray-900 dark:text-white font-display flex items-center gap-2">
            🔥 ${isAo ? 'Koorsiiwwan Kee' : 'Your Active Courses'}
          </h2>
          <p class="text-xs text-gray-400 mt-0.5">${isAo ? 'Koorsiiwwan ammatti barachaa jirtan.' : 'Courses you are currently pursuing.'}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${activeCoursesHtml}
        </div>
      </div>

      <!-- Right 4 Columns: Achievements & Quick Actions -->
      <div class="lg:col-span-4 flex flex-col gap-6">
        
        <!-- Certificates Panel -->
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-150 dark:border-slate-800 shadow-xs flex flex-col gap-4">
          <h3 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider border-l-2 border-yellow-500 pl-3">🏆 Achievements</h3>
          <div class="flex flex-col gap-3">
            ${completedCoursesHtml}
          </div>
        </div>

        <!-- Quick Support & Instructions -->
        <div class="p-6 rounded-2xl bg-slate-950 text-white border border-slate-900 shadow-md flex flex-col gap-4">
          <h3 class="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-green-500 pl-3">📞 Local Support</h3>
          <p class="text-xs text-gray-400 leading-normal">
            Need localized support? Feel free to contact head director Amanuel Ketema directly for inquiries, certificate printed copies, or CBE payment confirmation.
          </p>
          <div class="flex flex-col gap-2.5 text-xs text-gray-300">
            <div class="flex items-center gap-2">
              <span class="text-green-400 font-bold">Phone:</span>
              <a href="tel:0967145146" class="hover:text-green-400 underline">0967145146</a>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-green-400 font-bold">Office:</span>
              <span>Near Harar Gate, Harar</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}

function renderLibraryPanel(container, userEnrollments, isAo) {
  if (userEnrollments.length === 0) {
    container.innerHTML = `
      <div class="p-12 rounded-3xl border border-dashed border-gray-200 dark:border-slate-800 text-center flex flex-col items-center justify-center gap-4 py-20 bg-white dark:bg-slate-800/20">
        <div class="h-16 w-16 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-400 mb-2">
          <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        </div>
        <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200">Your library is empty</h3>
        <p class="text-sm text-gray-500 max-w-sm">Enroll in our expert digital professional courses for a flat, accessible fee of only 200 ETB. Lifetime access to lectures, quizzes, and digital certifications.</p>
        <a href="./index.html?tab=courses" class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-md mt-2">
          Browse & Enroll Now
        </a>
      </div>
    `;
    return;
  }

  // Get full course info associated with enrollments
  const courses = JSON.parse(localStorage.getItem('courses') || '[]');

  const cardsHtml = userEnrollments.map(e => {
    const originalCourse = courses.find(c => c.id === e.courseId) || {};
    const imgUrl = originalCourse.image || 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800';
    const category = originalCourse.category || 'Skill';
    const level = originalCourse.level || 'Beginner';
    const duration = originalCourse.duration || '4 weeks';

    const isDone = e.progress >= 100;

    return `
      <div class="premium-glow-hover rounded-2xl bg-white dark:bg-slate-800 border border-gray-150 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-full">
        <div class="relative h-44 overflow-hidden">
          <img src="${imgUrl}" alt="${e.courseTitle}" class="w-full h-full object-cover">
          <div class="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/95 backdrop-blur-md text-xs font-bold text-green-700 dark:text-green-400 border border-green-500/20">
            ${category}
          </div>
          <div class="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-xs font-bold text-white">
            ${level}
          </div>
        </div>
        
        <div class="p-6 flex flex-col flex-grow gap-4">
          <div class="text-xs font-semibold text-gray-400 font-mono flex justify-between">
            <span>Duration: ${duration}</span>
            <span class="${isDone ? 'text-green-600 dark:text-green-400 font-extrabold' : 'text-gray-500'}">${e.progress}% Completed</span>
          </div>
          
          <h3 class="text-base font-bold text-gray-900 dark:text-white leading-snug font-display line-clamp-2">
            ${e.courseTitle}
          </h3>

          <!-- Progress Slider bar -->
          <div class="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
            <div class="bg-green-500 h-2.5 rounded-full transition-all duration-300" style="width: ${e.progress}%"></div>
          </div>

          <div class="mt-auto pt-4 border-t border-gray-50 dark:border-slate-700/50 flex flex-col gap-2.5">
            <div class="grid grid-cols-2 gap-2">
              <button onclick="simulateLearning('${e.courseId}', 25)" class="py-2 bg-gray-50 hover:bg-gray-100 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-200 text-xs font-bold rounded-lg border border-gray-200 dark:border-slate-600 transition-all">
                📖 Study (+25%)
              </button>
              <a href="./course-details.html?id=${e.courseId}" class="py-2.5 bg-green-600 hover:bg-green-700 text-white text-center text-xs font-bold rounded-lg shadow-sm transition-colors flex items-center justify-center">
                Start Learning
              </a>
            </div>
            
            ${isDone 
              ? `<button onclick="viewCertificate('${e.courseId}')" class="w-full py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold rounded-lg shadow-sm hover:brightness-105 transition-all flex items-center justify-center gap-1.5 border border-yellow-400/20">
                   🏆 View Certificate
                 </button>` 
              : `<button disabled class="w-full py-2 bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-600 text-xs font-bold rounded-lg border border-transparent cursor-not-allowed text-center">
                   🔒 Certificate (Requires 100%)
                 </button>`
            }
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="flex flex-col gap-6">
      <div>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white font-display">📚 ${isAo ? 'Kutaa Kuusaa Kee' : 'Your Enrolled Programs'}</h2>
        <p class="text-xs text-gray-400 mt-0.5">${isAo ? 'Koorsiiwwan kaffaltii 200 ETB kaffaltanii irratti dabalataa barachaa jirtan.' : 'All professional digital courses currently in your localized study desk.'}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${cardsHtml}
      </div>
    </div>
  `;
}

function renderCoursesPanel(container, userEnrollments, isAo) {
  const courses = JSON.parse(localStorage.getItem('courses') || '[]');

  // Setup dynamic category filters
  const categories = ['All', 'Programming', 'Creative', 'Marketing', 'Professional'];
  
  // Create tab elements
  const filterHtml = categories.map((cat, idx) => {
    return `
      <button onclick="filterDashboardCourses('${cat}')" id="filter-dash-${cat.toLowerCase()}" class="dash-filter-btn px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
        idx === 0 
          ? 'bg-green-600 text-white border-green-600 shadow-sm' 
          : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-slate-800 hover:border-green-500'
      }">
        ${cat}
      </button>
    `;
  }).join('');

  container.innerHTML = `
    <div class="flex flex-col gap-6">
      
      <!-- Filter and Search Bar -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-white font-display">🌐 ${isAo ? 'Koorsiiwwan Academy' : 'Browse Professional Programs'}</h2>
          <p class="text-xs text-gray-400 mt-0.5">${isAo ? 'Dandeettiiwwan haaraa kaffaltii salphaa 200 ETB qofaan baradhaa.' : 'Launch high-paying professional work. Enroll for a flat 200 ETB flat fee.'}</p>
        </div>
        
        <!-- Search bar inside tab -->
        <div class="p-1 px-3 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center gap-2 max-w-sm w-full">
          <span class="text-gray-400">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
          <input type="text" id="dash-courses-search" oninput="searchDashboardCourses(this.value)" placeholder="Search programs..." class="w-full bg-transparent border-none py-1.5 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-0">
        </div>
      </div>

      <!-- Categories row -->
      <div class="flex flex-wrap gap-2.5">
        ${filterHtml}
      </div>

      <!-- Catalog Cards Grid -->
      <div id="dash-catalog-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Catalog cards injected dynamically -->
      </div>

    </div>
  `;

  // Draw initial catalog
  window.currentDashCategory = 'All';
  window.currentDashSearch = '';
  drawCatalogGrid(userEnrollments);
}

function drawCatalogGrid(userEnrollments) {
  const grid = document.getElementById('dash-catalog-grid');
  if (!grid) return;

  const courses = JSON.parse(localStorage.getItem('courses') || '[]');
  const cat = window.currentDashCategory || 'All';
  const query = (window.currentDashSearch || '').toLowerCase();

  const filtered = courses.filter(c => {
    const matchCat = (cat === 'All' || c.category.toLowerCase() === cat.toLowerCase());
    const matchSearch = (c.title.toLowerCase().includes(query) || c.description.toLowerCase().includes(query));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full p-12 text-center text-gray-400 dark:text-gray-500 italic">No courses found matching criteria.</div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(c => {
    const isEnrolled = userEnrollments.some(e => e.courseId === c.id);
    let actionButton = '';

    if (isEnrolled) {
      actionButton = `
        <a href="./index.html?tab=library" class="w-full py-2.5 text-center bg-gray-50 hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-green-600 dark:text-green-400 text-xs font-bold rounded-lg border border-green-500/20 transition-all flex items-center justify-center gap-1.5">
          ✓ In Library
        </a>
      `;
    } else {
      actionButton = `
        <button onclick="openPurchaseModal('${c.id}')" class="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
          🛒 Enroll (200 ETB)
        </button>
      `;
    }

    return `
      <div class="premium-glow-hover rounded-2xl bg-white dark:bg-slate-800 border border-gray-150 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-full">
        <div class="relative h-44 overflow-hidden">
          <img src="${c.image}" alt="${c.title}" class="w-full h-full object-cover">
          <div class="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/95 backdrop-blur-md text-xs font-bold text-green-700 dark:text-green-400 border border-green-500/20">
            ${c.category}
          </div>
          <div class="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-green-600 text-white text-sm font-extrabold shadow-lg">
            ${c.price} ETB
          </div>
        </div>
        
        <div class="p-6 flex flex-col flex-grow gap-3">
          <div class="flex items-center justify-between text-xs font-bold text-gray-500 dark:text-gray-400 font-mono">
            <span>${c.duration}</span>
            <span class="text-yellow-500">★ ${c.rating}</span>
          </div>
          
          <h3 class="text-base font-bold text-gray-900 dark:text-white leading-snug line-clamp-1 font-display">
            ${c.title}
          </h3>
          
          <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
            ${c.description}
          </p>
          
          <div class="mt-auto pt-4 border-t border-gray-50 dark:border-slate-700/50 flex flex-col gap-2">
            ${actionButton}
            <a href="./course-details.html?id=${c.id}" class="w-full py-1.5 text-center text-xs font-bold text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 hover:underline transition-all">
              Details and Curriculum
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderTransactionsPanel(container, user, isAo) {
  const transactions = JSON.parse(localStorage.getItem('amoo_transactions') || '[]');
  const userTxns = transactions.filter(t => t.email && t.email.toLowerCase() === user.email.toLowerCase());

  let transactionsListHtml = '';
  if (userTxns.length > 0) {
    transactionsListHtml = `
      <div class="overflow-x-auto rounded-2xl border border-gray-150 dark:border-slate-800 bg-white dark:bg-slate-900">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-slate-800 text-sm">
          <thead class="bg-gray-50 dark:bg-slate-800 text-gray-500 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-4 text-left font-bold uppercase tracking-wider text-xs">ID</th>
              <th scope="col" class="px-6 py-4 text-left font-bold uppercase tracking-wider text-xs">Program</th>
              <th scope="col" class="px-6 py-4 text-center font-bold uppercase tracking-wider text-xs">Amount</th>
              <th scope="col" class="px-6 py-4 text-center font-bold uppercase tracking-wider text-xs">Method</th>
              <th scope="col" class="px-6 py-4 text-center font-bold uppercase tracking-wider text-xs">Status</th>
              <th scope="col" class="px-6 py-4 text-right font-bold uppercase tracking-wider text-xs">Date</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-150 dark:divide-slate-800 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
            ${userTxns.map(t => {
              return `
                <tr class="hover:bg-gray-50/50 dark:hover:bg-slate-800/40 transition-colors">
                  <td class="px-6 py-4 font-mono font-bold text-xs text-green-600 dark:text-green-400">${t.id}</td>
                  <td class="px-6 py-4 font-bold max-w-xs truncate">${t.courseTitle}</td>
                  <td class="px-6 py-4 text-center font-extrabold text-gray-900 dark:text-white">${t.amount} ETB</td>
                  <td class="px-6 py-4 text-center text-xs font-semibold text-gray-500">${t.paymentMethod || 'CBE Birr'}</td>
                  <td class="px-6 py-4 text-center">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      t.status === 'Completed' 
                        ? 'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400' 
                        : 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400'
                    }">${t.status}</span>
                  </td>
                  <td class="px-6 py-4 text-right text-xs text-gray-400 dark:text-gray-500 font-mono">${t.date}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  } else {
    transactionsListHtml = `
      <div class="p-8 text-center text-gray-400 dark:text-gray-500 italic border border-dashed border-gray-150 dark:border-slate-800 rounded-2xl py-12 bg-white dark:bg-slate-800/20">
        No payment history available. Enrolled courses will display receipts here.
      </div>
    `;
  }

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Left 8 Columns: Transaction History -->
      <div class="lg:col-span-8 flex flex-col gap-6">
        <div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-white font-display">💳 ${isAo ? 'Seenaa Kaffaltii kee' : 'Transaction History'}</h2>
          <p class="text-xs text-gray-400 mt-0.5">${isAo ? 'Ragaalee kaffaltii koorsiiwwanii hundi asitti mul’atu.' : 'Invoice receipts and CBE bank confirmations of course enrollments.'}</p>
        </div>
        ${transactionsListHtml}
      </div>

      <!-- Right 4 Columns: Ethiopian Payment Guide -->
      <div class="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-150 dark:border-slate-800 shadow-sm flex flex-col gap-4">
        <h3 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider border-l-2 border-green-500 pl-3">Payment Guide</h3>
        <p class="text-xs text-gray-505 leading-relaxed">
          Course access is instant when checking out using standard automated pathways. For offline bank transfers, please allow Amanuel up to 2 hours to verify details.
        </p>
        
        <div class="flex flex-col gap-3 pt-2 text-xs">
          <div class="p-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 flex flex-col gap-1">
            <span class="font-bold text-gray-800 dark:text-gray-200">🏦 Commercial Bank of Ethiopia (CBE)</span>
            <span class="font-mono text-[11px] text-gray-400">Account: 100028391283</span>
            <span class="text-green-600 font-bold mt-1">Beneficiary: Amanuel Ketema</span>
          </div>
          
          <div class="p-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 flex flex-col gap-1">
            <span class="font-bold text-gray-800 dark:text-gray-200">📱 Telebirr / Chapa Gateway</span>
            <span class="text-gray-400 leading-normal">Support automatic checkouts with Telebirr transfer or debit cards via our secure integrations.</span>
          </div>
        </div>
      </div>

    </div>
  `;
}

// SIMULATE STUDENT LEARNING PROGRESS
window.simulateLearning = function(courseId, increment) {
  const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
  const user = getLoggedUser();
  if (!user) return;

  const enroll = enrollments.find(e => e.studentEmail.toLowerCase() === user.email.toLowerCase() && e.courseId === courseId);
  if (enroll) {
    enroll.progress = Math.min(100, (enroll.progress || 0) + increment);
    localStorage.setItem('enrollments', JSON.stringify(enrollments));
    
    showToast(`Study completed! Course progress updated to ${enroll.progress}%`, 'success');
    
    if (enroll.progress >= 100) {
      showToast(`🏆 Congratulations! You have unlocked your Certificate of Excellence!`, 'success');
    }
    
    // Re-render
    renderDashboard();
    renderNavbar();
  }
};

// SIMULATE DASHBOARD COURSE ENROLLMENT
window.enrollFromDashboard = function(courseId) {
  const user = getLoggedUser();
  if (!user) {
    showToast('Please login to enroll', 'error');
    return;
  }

  const courses = JSON.parse(localStorage.getItem('courses') || '[]');
  const course = courses.find(c => c.id === courseId);
  if (!course) return;

  // Add enrollment
  const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
  const exists = enrollments.some(e => e.studentEmail.toLowerCase() === user.email.toLowerCase() && e.courseId === courseId);
  
  if (exists) {
    showToast('You are already enrolled in this program', 'error');
    return;
  }

  const newEnroll = {
    id: 'enroll-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    studentName: user.name,
    studentEmail: user.email,
    courseId: course.id,
    courseTitle: course.title,
    price: course.price,
    progress: 0,
    date: new Date().toISOString()
  };
  enrollments.push(newEnroll);
  localStorage.setItem('enrollments', JSON.stringify(enrollments));

  // Add transaction
  const transactions = JSON.parse(localStorage.getItem('amoo_transactions') || '[]');
  const newTxn = {
    id: 'TXN-' + Math.floor(100000 + Math.random() * 900000) + '-CBE',
    name: user.name,
    email: user.email,
    courseId: course.id,
    courseTitle: course.title,
    amount: course.price,
    paymentMethod: 'CBE Birr',
    status: 'Completed',
    date: new Date().toISOString().split('T')[0]
  };
  transactions.push(newTxn);
  localStorage.setItem('amoo_transactions', JSON.stringify(transactions));

  showToast(`Successfully enrolled in ${course.title}! 200 ETB receipt generated.`, 'success');

  // Trigger re-render of dashboard
  setTimeout(() => {
    // Switch to library tab so they see their new course
    const url = new URL(window.location.href);
    url.searchParams.set('tab', 'library');
    window.history.pushState({}, '', url);
    renderDashboard();
    renderNavbar();
  }, 1000);
};

// FILTER & SEARCH HANDLERS FOR THE BROWSE COURSES TAB
window.filterDashboardCourses = function(category) {
  window.currentDashCategory = category;
  
  // Update button highlights
  const btns = document.querySelectorAll('.dash-filter-btn');
  btns.forEach(b => {
    b.className = 'dash-filter-btn px-4 py-2 rounded-xl text-xs font-bold border transition-all bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-slate-800 hover:border-green-500';
  });

  const activeBtn = document.getElementById(`filter-dash-${category.toLowerCase()}`);
  if (activeBtn) {
    activeBtn.className = 'dash-filter-btn px-4 py-2 rounded-xl text-xs font-bold border transition-all bg-green-600 text-white border-green-600 shadow-sm';
  }

  const user = getLoggedUser() || {};
  const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
  const userEnrollments = enrollments.filter(e => e.studentEmail && e.studentEmail.toLowerCase() === (user.email || '').toLowerCase());
  
  drawCatalogGrid(userEnrollments);
};

window.searchDashboardCourses = function(query) {
  window.currentDashSearch = query;
  const user = getLoggedUser() || {};
  const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
  const userEnrollments = enrollments.filter(e => e.studentEmail && e.studentEmail.toLowerCase() === (user.email || '').toLowerCase());
  
  drawCatalogGrid(userEnrollments);
};

// VIEW CERTIFICATE MODAL SYSTEM
window.viewCertificate = function(courseId) {
  const user = getLoggedUser();
  if (!user) return;

  const courses = JSON.parse(localStorage.getItem('courses') || '[]');
  const course = courses.find(c => c.id === courseId) || { title: 'Digital Skill Mastery' };

  let modal = document.getElementById('certificate-modal');
  if (modal) modal.remove();

  modal = document.createElement('div');
  modal.id = 'certificate-modal';
  modal.className = 'fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in';

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  modal.innerHTML = `
    <div class="relative max-w-3xl w-full p-1 bg-gradient-to-tr from-green-500 via-yellow-400 to-red-500 rounded-3xl shadow-2xl transform transition-all duration-300">
      <div class="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[22px] flex flex-col items-center justify-center text-center relative overflow-hidden">
        
        <!-- Subtle watermark pattern -->
        <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none flex items-center justify-center">
          <svg class="h-96 w-96 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        </div>

        <!-- Header Ribbon -->
        <div class="flex items-center gap-2 mb-6 relative">
          <div class="h-10 w-10 rounded-xl bg-green-500 flex items-center justify-center shadow-lg">
            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <span class="text-xs font-bold tracking-widest text-green-600 dark:text-green-400 uppercase">Amoo Academy Ethiopia</span>
        </div>

        <!-- Certificate title -->
        <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white uppercase tracking-wider font-display mb-1">Certificate of Excellence</h2>
        <span class="text-[10px] text-gray-400 uppercase tracking-widest font-bold">This award is proudly presented to</span>

        <!-- Student Name -->
        <h1 class="text-3xl sm:text-4xl font-extrabold text-green-600 dark:text-green-400 my-6 font-display italic tracking-wide">${user.name}</h1>

        <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
          for successfully pursuing, completing, and mastering all requisite course lecture modules, local practical exercises, and capstone project benchmarks for the program
        </p>

        <!-- Course Name -->
        <h3 class="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white my-4 font-display underline decoration-yellow-400 decoration-2 underline-offset-4">${course.title}</h3>

        <p class="text-[11px] text-gray-400 dark:text-gray-500">
          Graduated with Distinction • Verified on ${today} at Harar, Ethiopia
        </p>

        <!-- Signature section -->
        <div class="flex items-center justify-between w-full max-w-md mt-10 border-t border-gray-150 dark:border-slate-800 pt-6">
          <div class="flex flex-col items-center">
            <span class="font-mono text-xs italic font-bold text-gray-700 dark:text-gray-300">Amanuel K.</span>
            <span class="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Head Instructor</span>
          </div>
          <div class="h-14 w-14 rounded-full border-2 border-yellow-500 bg-yellow-500/10 flex items-center justify-center font-mono font-bold text-yellow-600 text-[10px] select-none">
            VERIFIED
          </div>
          <div class="flex flex-col items-center">
            <span class="font-mono text-xs font-bold text-gray-700 dark:text-gray-300">Amoo Academy</span>
            <span class="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Harar Gate office</span>
          </div>
        </div>

        <!-- Close button -->
        <button onclick="document.getElementById('certificate-modal').remove()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-950 dark:hover:text-white focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

      </div>
    </div>
  `;

  document.body.appendChild(modal);
};

// SEED DATA FOR DEMO USER
function seedDemoDataForUser(email) {
  // 1. Seed enrollment if empty
  const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
  const hasEnrollHtml = enrollments.some(e => e.studentEmail && e.studentEmail.toLowerCase() === email.toLowerCase() && e.courseId === 'html-css');
  const hasEnrollJs = enrollments.some(e => e.studentEmail && e.studentEmail.toLowerCase() === email.toLowerCase() && e.courseId === 'javascript');
  
  let updated = false;
  if (!hasEnrollHtml) {
    enrollments.push({
      id: 'enroll-demo-1',
      studentName: 'Yohannes Tekle',
      studentEmail: email,
      courseId: 'html-css',
      courseTitle: 'HTML & CSS responsive design',
      price: 200,
      progress: 100, // Completed! Ready for certificate
      date: '2026-06-15T14:30:00.000Z'
    });
    updated = true;
  }
  if (!hasEnrollJs) {
    enrollments.push({
      id: 'enroll-demo-2',
      studentName: 'Yohannes Tekle',
      studentEmail: email,
      courseId: 'javascript',
      courseTitle: 'Modern JavaScript (ES6+)',
      price: 200,
      progress: 40, // Ongoing
      date: '2026-07-01T10:15:00.000Z'
    });
    updated = true;
  }
  if (updated) {
    localStorage.setItem('enrollments', JSON.stringify(enrollments));
  }

  // 2. Seed transactions if empty
  const transactions = JSON.parse(localStorage.getItem('amoo_transactions') || '[]');
  const hasTxnHtml = transactions.some(t => t.email && t.email.toLowerCase() === email.toLowerCase() && t.courseId === 'html-css');
  const hasTxnJs = transactions.some(t => t.email && t.email.toLowerCase() === email.toLowerCase() && t.courseId === 'javascript');
  
  let txnUpdated = false;
  if (!hasTxnHtml) {
    transactions.push({
      id: 'TXN-839210-CBE',
      name: 'Yohannes Tekle',
      email: email,
      courseId: 'html-css',
      courseTitle: 'HTML & CSS responsive design',
      amount: 200,
      paymentMethod: 'CBE Birr',
      status: 'Completed',
      date: '2026-06-15'
    });
    txnUpdated = true;
  }
  if (!hasTxnJs) {
    transactions.push({
      id: 'TXN-482019-TEL',
      name: 'Yohannes Tekle',
      email: email,
      courseId: 'javascript',
      courseTitle: 'Modern JavaScript (ES6+)',
      amount: 200,
      paymentMethod: 'Telebirr',
      status: 'Completed',
      date: '2026-07-01'
    });
    txnUpdated = true;
  }
  if (txnUpdated) {
    localStorage.setItem('amoo_transactions', JSON.stringify(transactions));
  }
}

// INJECT SIMULATOR WIDGET AT BOTTOM-LEFT
function injectSimulationWidget() {
  let widget = document.getElementById('simulation-widget');
  if (widget) widget.remove();

  widget = document.createElement('div');
  widget.id = 'simulation-widget';
  widget.className = 'fixed bottom-5 left-5 z-50 flex items-center gap-2.5 p-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl border border-gray-250/60 dark:border-slate-800 transition-all hover:scale-[1.02]';

  const user = getLoggedUser();
  const isLogged = user !== null;

  widget.innerHTML = `
    <div class="flex items-center gap-2 select-none">
      <div class="h-2.5 w-2.5 rounded-full ${isLogged ? 'bg-green-500 animate-pulse' : 'bg-amber-400'}"></div>
      <span class="text-[10px] font-extrabold tracking-wider text-gray-500 dark:text-gray-400 uppercase">Simulator</span>
    </div>
    <div class="h-4 w-px bg-gray-200 dark:bg-slate-800"></div>
    <button id="toggle-sim-login" class="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 hover:bg-green-500 hover:text-white dark:hover:bg-green-500 transition-all cursor-pointer focus:outline-none">
      ${isLogged ? 'Sign Out' : 'Sign In as Yohannes'}
    </button>
  `;

  document.body.appendChild(widget);

  const toggleBtn = document.getElementById('toggle-sim-login');
  if (toggleBtn) {
    toggleBtn.onclick = () => {
      if (isLogged) {
        localStorage.removeItem('amoo_logged_user');
        showToast('Demo Student logged out', 'success');
      } else {
        const demoUser = {
          name: "Yohannes Tekle",
          email: "yohannes.tekle@amoo.edu",
          role: "student"
        };
        localStorage.setItem('amoo_logged_user', JSON.stringify(demoUser));
        
        // Seed default enrollments & transactions for Yohannes if missing
        seedDemoDataForUser(demoUser.email);
        
        showToast('Logged in as Yohannes Tekle (Demo Student)', 'success');
      }
      
      // Refresh navbar and state
      renderNavbar();
      if (typeof checkDashboardState === 'function') {
        checkDashboardState();
      }
      injectSimulationWidget(); // Re-render widget to update button text
      
      // Brief timeout before reloading page if not on index.html to reflect authentication change
      if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/' && !window.location.pathname.endsWith('/')) {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    };
  }
}

// ====================================================
// COMPLETE PURCHASE MODAL SYSTEM (AMOO ACADEMY)
// ====================================================

/**
 * Opens a highly polished, responsive purchase modal for any selected course.
 * Shows direct transfer channels (Telebirr, CBE Account) with copy actions
 * and allows uploading verified screenshots (max 5MB, PNG/JPG).
 */
window.openPurchaseModal = function(courseId) {
  // 1. Resolve course details from database cache or default seeds
  let courses = [];
  try {
    courses = JSON.parse(localStorage.getItem('courses') || '[]');
  } catch(e) {
    console.error('Failed to load courses for purchase modal', e);
  }
  
  if (!Array.isArray(courses) || courses.length === 0) {
    courses = typeof DEFAULT_COURSES !== 'undefined' ? DEFAULT_COURSES : [];
  }

  const course = courses.find(c => c.id === courseId) || courses[0];
  if (!course) {
    showToast('Course program not found.', 'error');
    return;
  }

  // 2. Remove any pre-existing instance of the modal
  let modal = document.getElementById('purchase-modal');
  if (modal) modal.remove();

  // 3. Create fresh backdrop wrapper
  modal = document.createElement('div');
  modal.id = 'purchase-modal';
  modal.className = 'fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in';

  const user = getLoggedUser();
  const showAuthFields = !user;

  // 4. Inject professional, responsive card layout
  modal.innerHTML = `
    <div class="relative max-w-lg w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-gray-150 dark:border-slate-800 p-6 sm:p-8 overflow-y-auto max-h-[90vh] custom-scroll transform transition-all duration-300">
      <!-- Background graphical glow -->
      <div class="absolute right-0 top-0 h-32 w-32 rounded-full bg-green-500/5 blur-2xl pointer-events-none"></div>

      <!-- Close and Title Header -->
      <div class="flex items-center justify-between border-b border-gray-150 dark:border-slate-800 pb-4 mb-5 relative z-10">
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20 shrink-0">
            <svg class="h-5.5 w-5.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V9a5 5 0 00-10 0v1a3 3 0 003 3h2.7m12.4 0h2.7a3 3 0 003-3v-1a5 5 0 00-10 0v2a13.91 13.91 0 001.354 5.34l.054.09m-3.44-2.04C13.991 17.799 15 14.517 15 11" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white font-display leading-tight">Complete Course Purchase</h3>
            <span class="text-[10px] text-green-600 dark:text-green-400 font-bold tracking-widest uppercase font-mono">Amoo Academy verified enrollment</span>
          </div>
        </div>
        <button onclick="closePurchaseModal()" class="p-1 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-950 dark:hover:bg-slate-800 dark:hover:text-white transition-all focus:outline-none cursor-pointer">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <!-- Course Order Card -->
      <div class="flex items-center gap-4 bg-gray-50/50 dark:bg-slate-900/60 p-4 rounded-2xl border border-gray-100 dark:border-slate-800/80 mb-5">
        <img src="${course.image}" alt="${course.title}" class="h-14 w-14 object-cover rounded-xl border border-gray-200/50 dark:border-slate-700 shrink-0">
        <div class="min-w-0 flex-grow">
          <span class="text-[9px] font-extrabold text-green-600 dark:text-green-400 uppercase tracking-widest font-mono">${course.category}</span>
          <h4 class="text-sm font-bold text-gray-900 dark:text-white truncate leading-snug mt-0.5">${course.title}</h4>
          <div class="flex items-baseline gap-1 mt-1">
            <span class="text-base font-extrabold text-gray-900 dark:text-white font-display">${course.price}</span>
            <span class="text-xs font-bold text-green-600 dark:text-green-400">ETB</span>
            <span class="text-[10px] text-gray-400 font-semibold ml-2">• Flat Rate • Lifetime Access</span>
          </div>
        </div>
      </div>

      <!-- Bank & Telebirr Transfer Coordinates -->
      <div class="flex flex-col gap-3 mb-5">
        <span class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Send exactly ${course.price} ETB payment:</span>
        
        <!-- Telebirr coordinates -->
        <div class="p-3.5 rounded-2xl bg-green-500/5 dark:bg-green-500/5 border border-green-500/10 flex items-center justify-between gap-4">
          <div class="min-w-0">
            <span class="text-[9px] font-extrabold text-green-700 dark:text-green-400 uppercase tracking-widest block">📱 Telebirr Mobile Wallet</span>
            <span class="font-mono text-sm font-extrabold text-gray-950 dark:text-white block mt-1 tracking-wider">0967145146</span>
            <span class="text-[10px] text-gray-500 dark:text-gray-400 block mt-0.5 truncate">Amanuel Ketema</span>
          </div>
          <button onclick="navigator.clipboard.writeText('0967145146'); showToast('Telebirr wallet copied!', 'success')" class="px-3 py-1.5 bg-green-600/10 hover:bg-green-600 hover:text-white text-green-600 dark:text-green-400 rounded-xl text-xs font-bold transition-all shrink-0 border border-green-500/10 cursor-pointer">
            Copy
          </button>
        </div>

        <!-- CBE coordinates -->
        <div class="p-3.5 rounded-2xl bg-blue-500/5 dark:bg-blue-500/5 border border-blue-500/10 flex items-center justify-between gap-4">
          <div class="min-w-0">
            <span class="text-[9px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">🏦 Commercial Bank of Ethiopia (CBE)</span>
            <span class="font-mono text-sm font-extrabold text-gray-950 dark:text-white block mt-1 tracking-wider">1000755124701</span>
            <span class="text-[10px] text-gray-500 dark:text-gray-400 block mt-0.5 truncate">Amanuel Dassale</span>
          </div>
          <button onclick="navigator.clipboard.writeText('1000755124701'); showToast('CBE account copied!', 'success')" class="px-3 py-1.5 bg-blue-600/10 hover:bg-blue-600 hover:text-white text-blue-600 dark:text-blue-400 rounded-xl text-xs font-bold transition-all shrink-0 border border-blue-500/10 cursor-pointer">
            Copy
          </button>
        </div>
      </div>

      <!-- Visitor Information form (if not authenticated) -->
      ${showAuthFields ? `
        <div class="flex flex-col gap-3 mb-5 p-4 rounded-2xl border border-gray-150 dark:border-slate-800 bg-gray-50/40 dark:bg-slate-900/40">
          <span class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">Student Credentials</span>
          <div class="grid grid-cols-2 gap-3">
            <div class="flex flex-col gap-1.5">
              <label class="text-[9px] font-bold text-gray-500 uppercase">Your Name</label>
              <input type="text" id="purchase-student-name" required placeholder="Abel Solomon" class="px-3.5 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500">
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-[9px] font-bold text-gray-500 uppercase">Your Email</label>
              <input type="email" id="purchase-student-email" required placeholder="abel@gmail.com" class="px-3.5 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500">
            </div>
          </div>
          <p class="text-[9px] text-gray-400">Fill in your contact information so Amanuel can link this receipt to your study account.</p>
        </div>
      ` : ''}

      <!-- Screen Upload Section -->
      <div class="flex flex-col gap-1.5 mb-6">
        <label class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Upload screenshot receipt proof (PNG/JPG, max 5MB)</label>
        
        <div id="screenshot-dropzone" onclick="document.getElementById('purchase-screenshot').click()" class="border-2 border-dashed border-gray-200 dark:border-slate-800 hover:border-green-500 dark:hover:border-green-400 rounded-2xl p-5 flex flex-col items-center justify-center text-center cursor-pointer bg-gray-50/50 dark:bg-slate-900/40 transition-colors">
          <input type="file" id="purchase-screenshot" accept="image/png, image/jpeg" class="hidden">
          
          <div id="dropzone-prompt" class="flex flex-col items-center gap-2">
            <div class="h-9 w-9 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <svg class="h-5.5 w-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <span class="text-xs font-bold text-gray-700 dark:text-gray-300">Click or Drag transfer screenshot here</span>
            <span class="text-[9px] text-gray-400 font-semibold uppercase tracking-wider font-mono">PNG, JPG up to 5MB</span>
          </div>

          <div id="dropzone-success" class="hidden flex flex-col items-center gap-2">
            <div class="h-10 w-10 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
              <svg class="h-5.5 w-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <span id="uploaded-filename" class="text-xs font-extrabold text-green-600 dark:text-green-400 truncate max-w-xs px-2">payment_screenshot.png</span>
            <span class="text-[9px] text-gray-400 font-semibold uppercase font-mono bg-green-100/40 dark:bg-green-500/10 px-2 py-0.5 rounded">Ready to verify</span>
          </div>
        </div>
      </div>

      <!-- Submission Controls -->
      <button onclick="submitPurchasePayment('${course.id}')" class="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-extrabold rounded-2xl shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all text-xs uppercase tracking-wider transform hover:-translate-y-0.5 cursor-pointer">
        Submit Payment
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  // 5. Setup Interactive Dropzone States
  const fileInput = document.getElementById('purchase-screenshot');
  const dropzone = document.getElementById('screenshot-dropzone');
  const prompt = document.getElementById('dropzone-prompt');
  const success = document.getElementById('dropzone-success');
  const filenameEl = document.getElementById('uploaded-filename');

  if (fileInput && dropzone) {
    fileInput.onchange = () => {
      const file = fileInput.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          showToast('File size exceeds the 5MB maximum limit', 'error');
          fileInput.value = '';
          return;
        }
        if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
          showToast('Only PNG and JPG screenshots are supported', 'error');
          fileInput.value = '';
          return;
        }
        
        // File is valid
        filenameEl.textContent = file.name;
        prompt.classList.add('hidden');
        success.classList.remove('hidden');
        showToast('Receipt screenshot attached!', 'success');
      }
    };

    dropzone.ondragover = (e) => {
      e.preventDefault();
      dropzone.classList.add('border-green-500', 'bg-green-50/10');
    };
    dropzone.ondragleave = (e) => {
      e.preventDefault();
      dropzone.classList.remove('border-green-500', 'bg-green-50/10');
    };
    dropzone.ondrop = (e) => {
      e.preventDefault();
      dropzone.classList.remove('border-green-500', 'bg-green-50/10');
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        fileInput.files = files;
        fileInput.onchange();
      }
    };
  }
};

window.closePurchaseModal = function() {
  const modal = document.getElementById('purchase-modal');
  if (modal) modal.remove();
};

window.submitPurchasePayment = function(courseId) {
  const fileInput = document.getElementById('purchase-screenshot');
  const user = getLoggedUser();

  let name = "";
  let email = "";

  // 1. Validate student identification details
  if (!user) {
    const nameInput = document.getElementById('purchase-student-name');
    const emailInput = document.getElementById('purchase-student-email');
    if (!nameInput || !nameInput.value.trim() || !emailInput || !emailInput.value.trim()) {
      showToast('Please specify your Name and Email to link enrollment', 'error');
      return;
    }
    name = nameInput.value.trim();
    email = emailInput.value.trim();
  } else {
    name = user.name;
    email = user.email;
  }

  // 2. Validate receipt image attachment
  if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
    showToast('Please upload a transfer receipt screenshot to complete purchase', 'error');
    return;
  }

  // 3. Resolve targeted course details
  let courses = [];
  try {
    courses = JSON.parse(localStorage.getItem('courses') || '[]');
  } catch(e) {}
  
  if (!courses.length && typeof DEFAULT_COURSES !== 'undefined') {
    courses = DEFAULT_COURSES;
  }

  const course = courses.find(c => c.id === courseId) || courses[0];
  if (!course) return;

  // 4. Validate registration duplicate
  const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
  const exists = enrollments.some(e => e.studentEmail.toLowerCase() === email.toLowerCase() && e.courseId === courseId);

  if (exists) {
    showToast('You are already enrolled or have a pending verification for this program.', 'info');
    closePurchaseModal();
    return;
  }

  // 5. Save enrollment transaction
  const enrId = 'ENR-' + Math.floor(1000 + Math.random() * 9000);
  const newEnrollment = {
    id: enrId,
    studentName: name,
    studentEmail: email,
    studentPhone: user ? (user.phone || '0911223344') : '0911223344',
    courseId: course.id,
    courseTitle: course.title,
    courseName: course.title,
    price: 200,
    progress: 0,
    paymentMethod: 'Screenshot Upload',
    paymentDetails: 'screenshot_attached',
    status: 'pending',
    payment_status: 'Pending',
    date: new Date().toISOString().split('T')[0]
  };

  enrollments.push(newEnrollment);
  localStorage.setItem('enrollments', JSON.stringify(enrollments));

  // 6. Record transaction entry
  const transactions = JSON.parse(localStorage.getItem('amoo_transactions') || '[]');
  const newTxn = {
    id: 'TXN-' + Math.floor(100000 + Math.random() * 900000) + '-CBE',
    name: name,
    email: email,
    courseId: course.id,
    courseTitle: course.title,
    amount: course.price,
    paymentMethod: 'Mobile Bank Screenshot',
    status: 'Pending',
    date: new Date().toISOString().split('T')[0]
  };
  transactions.push(newTxn);
  localStorage.setItem('amoo_transactions', JSON.stringify(transactions));

  // 7. Success cleanup and notification
  closePurchaseModal();
  showToast('Payment submitted for verification successfully! Amanuel will activate access shortly.', 'success');

  // Trigger sync event to refresh catalog or tables
  const customEvent = new Event('amoo-db-synced');
  window.dispatchEvent(customEvent);

  // If student is logged in, immediately update active workspace dashboard
  if (isLoggedIn() && typeof renderDashboard === 'function') {
    renderDashboard();
  }
};

// Global Link Interceptor for enrollments across all pages (courses.html, course-details.html)
window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href) {
      const href = link.getAttribute('href');
      if (href && href.includes('enroll.html')) {
        e.preventDefault();
        const url = new URL(link.href, window.location.href);
        const courseId = url.searchParams.get('course') || 'html-css';
        window.openPurchaseModal(courseId);
      }
    }
  });
});

