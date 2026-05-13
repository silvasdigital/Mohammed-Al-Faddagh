// ==================== IMPORTS ====================
import '../css/normalize.css';
import '../css/styles.css';
import heroImage from '../imgs/personal_photo_hero.png';
import personalPhoto from '../imgs/personal_photo_AI.png';

// ==================== INTERNATIONALIZATION (i18n) ====================
const translations = {
  en: {
    page_title: 'Mohammed Al-Fidagh | Portfolio',
    nav_logo: 'Mohammed Al-Fidagh',
    nav_home: 'Home',
    nav_work: 'Work',
    nav_about: 'About Me',
    nav_contact: 'Contact',
    lang_indicator: 'EN / AR',

    hero_title: 'Hi there, I am Mohammed Al-Fidagh.',
    hero_subtitle:
      'A multidisciplinary Digital Operations Coordinator, Web Developer, and preclinical medical student merging healthcare with high-performance digital design.',

    skills_title: 'I am good at',
    skill_1:
      'Business Management, Office Work, Document Handling & Operations.',
    skill_2: 'Web Development, HTML/CSS/JS, APIs & Tech Integrations.',
    skill_3: 'Graphic Design, Branding, Canva/Figma & Social Media.',
    skills_footer: 'And pretty much everything else.',

    cta_discover: 'Wanna discover my work?',
    btn_view_work: 'View Work',
    cta_or: 'Or',
    cta_contact_prompt: 'Interested in collaborating?',
    btn_contact_me: 'Contact Me',

    work_title: 'I managed and coordinated two creative businesses',
    work_1_title: 'Silvas Digital',
    work_1_desc:
      'Founded Silvas Digital. Engineered and maintained responsive, high-performance websites for real estate and retail clients using HTML, CSS, and JS. Designed SEO and branding strategies.',
    work_2_title: 'Mowl Store',
    work_2_desc:
      'Founded Mowl Store. Orchestrated the launch of a medical-niche e-commerce venture. Managed international supply chains, Shopify integrations, and marketing strategies.',

    projects_title: 'Web dev and design skills',
    project_1_title: 'Weather App Project',
    project_2_title: 'Library App Project',
    project_3_title: 'Tic-Tac-Toe Project',

    download_text: 'Wanna see my full CV and Design Portfolio?',
    btn_download: 'Download Assets',

    about_title: 'About Me',
    about_desc:
      'As a preclinical medical student maintaining a 3.8 GPA, I thrive at the intersection of medicine, technology, and design. Whether I am conducting award-winning medical research, building clean front-end architectures, or running digital operations, my focus is on structure, efficiency, and real-world results.',
    metric_1: 'Projects',
    metric_2: 'Clients',
    metric_3: 'Experience',

    contact_title: 'Contact',
    contact_phone: '+971 56 166 4529',
    contact_email: 'mohammedstum890@gmail.com',
    contact_whatsapp: 'WhatsApp',

    footer_text: 'Designed and Built by Mohammed Al-Fidagh. © 2026.',
  },
  ar: {
    page_title: 'محمد الفداغ | محفظة أعمالي',
    nav_logo: 'محمد الفداغ',
    nav_home: 'الرئيسية',
    nav_work: 'أعمالي',
    nav_about: 'حول',
    nav_contact: 'التواصل',
    lang_indicator: 'EN / AR',

    hero_title: 'مرحبا، أنا محمد الفداغ.',
    hero_subtitle:
      'منسق عمليات رقمية متعدد المجالات ومطور ويب وطالب طب ما قبل سريري، أجمع بين الرعاية الصحية والتصميم الرقمي عالي الأداء.',

    skills_title: 'أنا ماهر في',
    skill_1: 'إدارة الأعمال والعمل المكتبي ومعالجة المستندات والعمليات.',
    skill_2:
      'تطوير الويب و HTML/CSS/JS وواجهات برمجية التطبيقات والتكامل التقني.',
    skill_3:
      'التصميم الجرافيكي والعلامات التجارية و Canva/Figma ووسائل التواصل الاجتماعي.',
    skills_footer: 'وكل شيء آخر تقريباً.',

    cta_discover: 'هل تريد اكتشاف أعمالي؟',
    btn_view_work: 'عرض الأعمال',
    cta_or: 'أو',
    cta_contact_prompt: 'مهتم بالتعاون؟',
    btn_contact_me: 'تواصل معي',

    work_title: 'أدرت وتنسيق نشاطي تجاريين إبداعيين',
    work_1_title: 'سيلفاس ديجيتال',
    work_1_desc:
      'أسست سيلفاس ديجيتال. صممت وطورت مواقع ويب سريعة واستجابة للعملاء في العقارات والتجزئة باستخدام HTML و CSS و JS. صممت استراتيجيات تحسين محركات البحث والعلامات التجارية.',
    work_2_title: 'متجر مول',
    work_2_desc:
      'أسست متجر مول. نسقت إطلاق مشروع تجارة إلكترونية متخصص في المجال الطبي. أدرت سلاسل التوريد الدولية وتكاملات Shopify واستراتيجيات التسويق.',

    projects_title: 'مهارات تطوير الويب والتصميم',
    project_1_title: 'مشروع تطبيق الطقس',
    project_2_title: 'مشروع تطبيق المكتبة',
    project_3_title: 'مشروع لعبة Tic-Tac-Toe',

    download_text: 'هل تريد مشاهدة سيرتي الذاتية وملفات التصميم الخاصة بي؟',
    btn_download: 'تحميل الملفات',

    about_title: 'حول',
    about_desc:
      'كطالب طب ما قبل سريري يحافظ على معدل 3.8 GPA، أزدهر عند تقاطع الطب والتكنولوجيا والتصميم. سواء أجري أبحاث طبية حائزة على جوائز أو أبني هندسات أمامية نظيفة أو أدير العمليات الرقمية، فإن تركيزي على البنية والكفاءة والنتائج الواقعية.',
    metric_1: 'المشاريع',
    metric_2: 'العملاء',
    metric_3: 'الخبرة',

    contact_title: 'التواصل',
    contact_phone: '+971 56 166 4529',
    contact_email: 'mohammedstum890@gmail.com',
    contact_whatsapp: 'واتس أب',

    footer_text: 'صمم وبني بواسطة محمد الفداغ. © 2026.',
  },
};

// ==================== STATE MANAGEMENT ====================
let currentLanguage = localStorage.getItem('language') || 'en';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  setLanguage(currentLanguage);
  setupHeroImage();
  setupPersonalPhoto();
  setupEventListeners();
  applyAccessibilityFeatures();
}

function setupHeroImage() {
  const heroImg = document.querySelector('.hero-image');
  if (heroImg) {
    heroImg.src = heroImage;
  }
}

function setupPersonalPhoto() {
  const aboutImg = document.querySelector('.about-image img');
  if (aboutImg) {
    aboutImg.src = personalPhoto;
  }
}

// ==================== LANGUAGE TOGGLE ====================
function setLanguage(lang) {
  if (!translations[lang]) {
    console.warn(`Language ${lang} not found, defaulting to English`);
    lang = 'en';
  }

  currentLanguage = lang;
  localStorage.setItem('language', lang);

  // Update document attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update page title
  document.title = translations[lang].page_title;

  // Update all i18n elements
  updateAllTranslations(lang);
}

function updateAllTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

function toggleLanguage() {
  const newLang = currentLanguage === 'en' ? 'ar' : 'en';
  setLanguage(newLang);

  // Trigger smooth transition
  document.body.style.opacity = '0.9';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
  // --- NEW: Mobile Menu Toggle Logic ---
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.navbar-menu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('nav-active');
      mobileBtn.classList.toggle('toggle-active');
    });
  }

  // Close mobile menu when a link is clicked
  const allNavLinks = document.querySelectorAll('.nav-link, .language-toggle');
  allNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('nav-active')) {
        navMenu.classList.remove('nav-active');
        mobileBtn.classList.remove('toggle-active');
      }
    });
  });
  // --------------------------------------

  // Language toggle button
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Smooth scroll for CTA buttons
  const ctaButtons = document.querySelectorAll('a[href^="#"]');
  ctaButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const href = button.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Download button handler
  const downloadBtn = document.querySelector('.btn-large');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      handleDownloadAssets();
    });
  }

  // Add scroll-based navbar styling
  window.addEventListener('scroll', updateNavbarOnScroll);

  // Add animation on scroll
  observeElementsForAnimation();
}

// ==================== UTILITY FUNCTIONS ====================
function updateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 20px rgba(59, 130, 246, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
}

function handleDownloadAssets() {
  // Placeholder for download functionality
  // In production, this would trigger a file download
  console.log('Download assets initiated');

  // Create a notification (optional)
  showNotification(
    'Download initiated! Check your downloads folder.',
    'success',
  );
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        font-size: 0.9rem;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
function observeElementsForAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all skill cards, project cards, and work items
  const elementsToObserve = document.querySelectorAll(
    '.skill-card, .project-card, .work-item, .contact-item, .metric-box',
  );

  elementsToObserve.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });
}

// ==================== ACCESSIBILITY FEATURES ====================
function applyAccessibilityFeatures() {
  // Add keyboard navigation support
  const buttons = document.querySelectorAll('button, a');
  buttons.forEach((button) => {
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });

  // Add focus visible styles
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });
}

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
    
    body.keyboard-nav button:focus,
    body.keyboard-nav a:focus {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
    }
    
    .navbar {
        transition: box-shadow 0.3s ease;
    }
`;
document.head.appendChild(style);

// ==================== EXPORT FOR TESTING ====================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    setLanguage,
    toggleLanguage,
    translations,
    currentLanguage,
  };
}
