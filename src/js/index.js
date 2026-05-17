// ==================== IMPORTS ====================
import '../css/normalize.css';
import '../css/styles.css';
import VanillaTilt from 'vanilla-tilt';
import heroImage from '../imgs/personal_photo_hero.png';
import personalPhoto from '../imgs/personal_photo_AI.png';
import silvasDigitalImage from '../imgs/silvasdigital_work.png';
import mowlStoreImage from '../imgs/mowlstore_work.png';
import medicalStudyImage from '../imgs/medical_study_work.png';
import realEstateImage from '../imgs/real_estate_work.png';
import socialMediaImage from '../imgs/post_work.png';

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

    hero_title: 'Hi, I am Mohammed Al-Fidagh.',
    hero_subtitle:
      'I build websites, run paid media, design brands, automate workflows, and coordinate operations, with 5+ years of hands-on execution across every layer of the digital stack. Not a jack of all trades. A specialist in all of them.',

    skills_title: 'What I bring to the table',
    skill_1:
      'Operations & Coordination, 5+ years managing business workflows, documentation, cross functional teams and end to end project delivery with zero drop-offs.',
    skill_2:
      'Development & AI, Front end architecture in HTML, CSS and JS, API integrations, workflow automation, and daily deployment of AI tools including Claude, Copilot, and the full suite of generative AI platforms.',
    skill_3:
      'Marketing, Design & Media, Meta Ads, Google Ads, Shopify, Figma, Adobe Suite, Canva, from paid campaign strategy to brand identity and social content, built and executed in-house.',
    skills_footer: 'And pretty much everything else!',

    cta_discover: 'Wanna see what I have built?',
    btn_view_work: 'View Work',
    cta_or: 'Or',
    cta_contact_prompt: 'Need someone who can handle it all?',
    btn_contact_me: "Let's Talk",

    work_title: 'Ventures I founded and ran end to end',
    work_1_title: 'Silvas Digital',
    work_1_desc:
      'Founded and operated Silvas Digital, a full-service digital agency delivering across web development, SEO, branding, and digital strategy. Served 20+ clients across healthcare, real estate, personal brands, and retail. Handled every layer: code, design, coordination, and client delivery.',
    work_2_title: 'Mowl Store',
    work_2_desc:
      'Founded Mowl Store, a medical-niche e-commerce brand built and scaled from scratch. Managed international supply chains, engineered the full Shopify stack, executed paid media campaigns on Meta and Google, and handled all marketing strategy and creative production in-house.',

    projects_title: 'Things I have built and designed',
    project_1_title: 'Medical Study Website',
    project_2_title: 'Real Estate Website',
    project_3_title: 'Social Media Posts',

    download_text: 'Want the full picture? CV and design portfolio available.',
    btn_download: 'Download Assets',

    about_title: 'About Me',
    about_desc:
      'Over 5 years of execution across web development, paid media, graphic design, AI automation, business coordination, and social media, I do not dabble. I go deep in every domain I operate in. I have built websites from scratch, managed Meta and Google ad campaigns, designed full brand identities in Figma and Adobe, automated business operations using AI tools, and coordinated complex projects across multiple industries. My background in medicine sharpened my precision and analytical thinking. Everything else was built through real work, real clients, and real results.',
    metric_1: 'Projects',
    metric_2: 'Clients',
    metric_3: 'Across Industries',

    contact_title: 'Contact',
    contact_phone: '+971 50 383 2005',
    contact_email: 'mohammedstum890@gmail.com',
    contact_whatsapp: 'WhatsApp',

    footer_text: 'Designed and Built by Mohammed Al-Fidagh. © 2026.',
  },
  ar: {
    page_title: 'محمد الفداغ | سيرة ذاتية',
    nav_logo: 'محمد الفداغ',
    nav_home: 'الرئيسية',
    nav_work: 'أعمالي',
    nav_about: 'حول',
    nav_contact: 'التواصل',
    lang_indicator: 'EN / AR',

    hero_title: 'يا هلا! أنا محمد الفداغ.',
    hero_subtitle:
      'أنا مطور مواقع إلكترونية، أدير الإعلانات المدفوعة، وأصمم العلامات التجارية، وأؤتمت سير العمل، وأنسق العمليات، بخبرة تتجاوز 5 سنوات من التنفيذ الفعلي عبر كل طبقات المنظومة الرقمية. باختصار، أنا متخصص في جميع المجالات التقنية والإدارية والتنسيقية.',

    skills_title: 'ما أقدمه على الطاولة',
    skill_1:
      'تنسيق العمليات الإدارية، أكثر من 5 سنوات في إدارة سير العمل. عملت في تسليم المشاريع من الألف إلى الياء دون أي ثغرات.',
    skill_2:
      'التطوير واحتراف الذكاء الاصطناعي، بناء واجهات أمامية بـ HTML وCSS وJS، تكاملات API، أتمتة سير العمل، والاستخدام اليومي لأدوات الذكاء الاصطناعي كـ Claude وCopilot وكامل منصات الذكاء الاصطناعي التوليدي.',
    skill_3:
      'التسويق والتصميم والإعلام، Meta Ads وGoogle Ads وShopify وFigma وAdobe Suite وCanva، من استراتيجية الحملات المدفوعة إلى الهوية البصرية والمحتوى ، كل ما تحتاجه المشاريع للنمو  .',
    skills_footer: 'وكل شيء آخر تقريباً!',

    cta_discover: 'تريد ترى عملي؟',
    btn_view_work: 'عرض الأعمال',
    cta_or: 'أو',
    cta_contact_prompt: 'تريد نتعاون؟',
    btn_contact_me: 'فلنتحدث',

    work_title: 'مشاريع أسستها وأدرتها من الألف إلى الياء',
    work_1_title: 'Silvas Digital',
    work_1_desc:
      'أسست وأدرت Silvas Digital، وكالة رقمية متكاملة تقدم خدمات تطوير الويب وتحسين محركات البحث والعلامات التجارية والاستراتيجية الرقمية. خدمت أكثر من 20 عميلاً في قطاعات الرعاية الصحية والعقارات والعلامات الشخصية والتجزئة. تولّيت كل شيء من: البرمجة، التصميم، التنسيق، وتسليم العمل.',
    work_2_title: 'Mowl Store',
    work_2_desc:
      'أسست Mowl Store، علامة تجارية للتجارة الإلكترونية في المجال الطبي، بُنيت وطُوِّرت من الصفر. أدرت سلاسل التوريد الدولية، ونسقت وطورت الحل الكامل على Shopify، ونفذت حملات إعلانية مدفوعة على Meta وGoogle، وتوليت كل الاستراتيجيات التسويقية والإنتاج الإبداعي داخلياً.',

    projects_title: 'أشياء بنيتها وصممتها',
    project_1_title: 'موقع لدراسة طبية',
    project_2_title: 'موقع لشركة عقارات',
    project_3_title: 'منشورات للسوشال ميديا',

    download_text: 'تريد معلومات أكثر؟ السيرة الذاتية وغيرها؟',
    btn_download: 'تحميل الملفات',

    about_title: 'من أنا؟',
    about_desc:
      'لدي اكثر من 5 سنوات خبرة في التنفيذ الفعلي في تطوير الويب، الإعلانات المدفوعة، التصميم الجرافيكي، أتمتة الذكاء الاصطناعي، تنسيق الأعمال، ووسائل التواصل الاجتماعي، لا أتعامل مع أي مجال بشكل سطحي، بل أغوص فيه بعمق. بنيت مواقع من الصفر، أدرت حملات إعلانية على Meta و Google， صممت هويات بصرية متكاملة في Figma و Canva و Adobe， أتمتت عمليات المشاريع باستخدام أدوات الذكاء الاصطناعي، ونسقت مشاريع معقدة عبر أدوات تقنية متعددة. خلفيتي الطبية صقلت دقتي وتفكيري التحليلي. جميع مشاريعي بُنيَت من خلال عمل حقيقي من القلب، عملاء حقيقيين، ونتائج ملموسة.',
    metric_1: 'عدد المشاريع',
    metric_2: 'عدد العملاء',
    metric_3: 'خبرة عبر صناعات متعددة',

    contact_title: 'التواصل',
    contact_phone: '971503832005+',
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
  setupWorkImages();
  setupProjectImages();
  setupEventListeners();
  setupScrollAnimations();
  setupTiltEffects();
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

function setupWorkImages() {
  const workImages = document.querySelectorAll('.work-item-image');
  if (workImages.length >= 2) {
    workImages[0].src = silvasDigitalImage;
    workImages[1].src = mowlStoreImage;
  }
}

function setupProjectImages() {
  const projectImages = document.querySelectorAll('.project-image img');
  if (projectImages.length >= 3) {
    projectImages[0].src = medicalStudyImage;
    projectImages[1].src = realEstateImage;
    projectImages[2].src = socialMediaImage;
  }
}

function setupScrollAnimations() {
  const progressBar = document.querySelector('.scroll-progress');
  const revealTargets = [
    '.hero-title',
    '.hero-subtitle',
    '.hero-image-wrapper',
    '.about-image',
    '.about-text',
    '.section-title',
    '.skill-card',
    '.work-item',
    '.project-card',
    '.metric-box',
    '.contact-item',
    '.mid-cta',
    '.download-cta',
  ];

  const elements = Array.from(
    document.querySelectorAll(revealTargets.join(',')),
  );

  elements.forEach((element, index) => {
    element.classList.add('scroll-reveal');
    element.style.transitionDelay = `${Math.min(index * 50, 300)}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -120px 0px',
    },
  );

  elements.forEach((element) => revealObserver.observe(element));

  const updateProgress = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
    }
  };

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateProgress);
  });
  updateProgress();
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
  updateLanguageButton(lang);
}

function setupTiltEffects() {
  const tiltItems = document.querySelectorAll(
    '.skill-card, .project-card, .metric-box, .work-image',
  );

  if (tiltItems.length > 0) {
    VanillaTilt.init(tiltItems, {
      max: 18,
      speed: 650,
      glare: true,
      'max-glare': 0.14,
      scale: 1.025,
      perspective: 1200,
      transition: true,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
    });
  }
}

function updateLanguageButton(lang) {
  const langToggle = document.getElementById('langToggle');
  if (!langToggle) return;

  const nextLanguage = lang === 'en' ? 'Arabic' : 'English';
  langToggle.setAttribute('aria-label', `Switch to ${nextLanguage}`);
  langToggle.setAttribute('title', `Switch to ${nextLanguage}`);
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
