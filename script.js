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
    
    // 1. Load config from global window variables or client-side localStorage fallback (for GitHub Pages)
    this.config.url = window.SUPABASE_URL || localStorage.getItem('SUPABASE_URL') || '';
    this.config.key = window.SUPABASE_KEY || localStorage.getItem('SUPABASE_KEY') || '';

    // 2. Validate config
    const isPlaceholderUrl = !this.config.url || this.config.url.includes('YOUR_SUPABASE_URL_AS_ITTI_GALCHI');
    
    if (isPlaceholderUrl) {
      this.status = 'offline';
      console.log('[Amoo Db] No custom Supabase URL found. Running in Local Storage Mode.');
      this.updateAdminUI();
      return;
    }

    // 3. Initialize client
    if (typeof window.supabase === 'undefined') {
      console.error('[Amoo Db] Supabase CDN library is missing from HTML head.');
      this.status = 'error';
      this.updateAdminUI();
      return;
    }

    try {
      this.client = window.supabase.createClient(this.config.url, this.config.key);
      this.isActive = true;
      this.status = 'connected';
      console.log('[Amoo Db] Supabase Client initialized successfully!');
      
      // 4. Test connection and synchronize/seed tables
      await this.syncAndSeed();
    } catch (e) {
      console.error('[Amoo Db] Failed to connect to Supabase', e);
      this.status = 'error';
    }

    this.updateAdminUI();
  },

  async syncAndSeed() {
    if (!this.isActive || !this.client) return;

    this.isSyncing = true;
    try {
      // Test fetching courses, students, enrollments
      const { data: dbCourses, error: errC } = await this.client.from('courses').select('*');
      const { data: dbUsers, error: errU } = await this.client.from('students').select('*');
      const { data: dbEnroll, error: errE } = await this.client.from('enrollments').select('*');
      
      if (errC || errU || errE) {
        const errorMsg = (errC?.message || errU?.message || errE?.message || '');
        console.warn('[Amoo Db] Could not fetch some tables from Supabase. Tables might be missing:', errorMsg);
        if (errorMsg.includes('relation') || errorMsg.includes('does not exist')) {
          this.status = 'missing_tables';
          this.isSyncing = false;
          this.updateAdminUI();
          return;
        }
        this.status = 'error';
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
      console.error('[Amoo Db] Error during sync/seed operation', e);
      this.status = 'error';
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

  const menuItems = [
    { label: 'Home', href: './index.html', active: isPage('index.html') || currentPath === '/' || currentPath.endsWith('/'), en: 'Home', ao: 'Dhaabbata' },
    { label: 'Courses', href: './courses.html', active: isPage('courses.html') || isPage('course-details.html'), en: 'Courses', ao: 'Koorsiiwwan' },
    { label: 'Interactive Demo', href: './demo.html', active: isPage('demo.html'), en: 'Interactive Demo', ao: 'Dimoo' }
  ];

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
        <a id="nav-login-btn" href="./login.html" data-en="Sign In" data-ao="Seeni" class="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors">
          ${isAo ? 'Seeni' : 'Sign In'}
        </a>
        <a id="nav-register-btn" href="./register.html" data-en="Join Free" data-ao="Miseensomi" class="px-5 py-2 text-sm font-semibold bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm hover:shadow transition-all duration-150 transform hover:-translate-y-0.5">
          ${isAo ? 'Miseensomi' : 'Join Free'}
        </a>
      </div>
    `;

    mobileAuthHtml = `
      <div class="flex flex-col gap-2 p-4 border-t border-gray-100 dark:border-slate-800">
        <a href="./login.html" data-en="Sign In" data-ao="Seeni" class="w-full py-2.5 text-center font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg text-sm border border-gray-200 dark:border-slate-700">
          ${isAo ? 'Seeni' : 'Sign In'}
        </a>
        <a href="./register.html" data-en="Join Free" data-ao="Miseensomi" class="w-full py-2.5 text-center font-semibold bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm shadow-sm">
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

        <!-- Right Side: Dark Mode & Auth -->
        <div class="hidden md:flex items-center gap-5">
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
          
          <!-- CTA/Auth Section -->
          ${authHtml}
        </div>

        <!-- Mobile Controls Toggle -->
        <div class="flex items-center gap-3 md:hidden">
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
});
