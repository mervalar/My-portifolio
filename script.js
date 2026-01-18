// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#top-links ul li a');
const projects = document.getElementById("projects");

window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// CV Modal handling
const resume = document.getElementById('resume');
const cv = document.getElementById('cv');

resume?.addEventListener('click', (e) => {
    e.preventDefault();
    cv.style.display = 'block';
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scrolling progress
window.addEventListener("scroll", function () {
    let section = document.querySelector("#projects");
    let progressIndicator = document.querySelector(".progress-indicator");
    if (section && progressIndicator) {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight;

        let progress = ((scrollPosition - sectionTop + windowHeight) / (sectionHeight + windowHeight)) * 100;
        progressIndicator.style.height = Math.min(100, Math.max(0, progress)) + "%";
    }
});

// Splash Screen
const splashMessages = [
    "Crafting digital magic...",
    "Brewing code...",
    "Assembling pixels...",
    "Loading awesome...",
    "Almost there...",
    "Preparing greatness..."
];

function initSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    const typingText = document.querySelector('.typing-text');
    
    if (!splashScreen || !typingText) return;
    
    // Select random message
    const message = splashMessages[Math.floor(Math.random() * splashMessages.length)];
    let index = 0;
    
    // Typewriter effect
    function typeWriter() {
        if (index < message.length) {
            typingText.textContent += message.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing after a short delay
    setTimeout(() => {
        typeWriter();
    }, 500);
    
    // Remove splash screen after animation
    setTimeout(() => {
        splashScreen.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 3000);
}

// Mouse shadow effect
document.addEventListener('DOMContentLoaded', () => {
    // Initialize splash screen
    initSplashScreen();
    document.body.style.overflow = 'hidden';
    
    // Mouse shadow effect
    document.addEventListener('mousemove', (e) => {
        // Remove any existing shadows
        const existingShadows = document.querySelectorAll('.mouse-shadow');
        existingShadows.forEach(shadow => shadow.remove());

        // Create new shadow
        const shadow = document.createElement('div');
        shadow.classList.add('mouse-shadow');
        
        // Set position
        shadow.style.position = 'fixed';
        shadow.style.left = `${e.clientX}px`;
        shadow.style.top = `${e.clientY}px`;
        
        // Append to body
        document.body.appendChild(shadow);

        // Optional: Remove after a short time
        setTimeout(() => {
            shadow.remove();
        }, 300);
    });

    // Mode toggle (light/dark)
    const savedMode = localStorage.getItem('portfolio-mode');
    if (savedMode === 'light') {
        document.body.classList.add('light-mode');
    }
    
    // Load saved language
    const savedLang = localStorage.getItem('portfolio-language') || 'en';
    switchLanguage(savedLang);
    
    // Animate projects count
    animateProjectsCount();
    
    // Initialize scroll animations
    initScrollAnimations();

    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init("rhEFZSPTRbqjTQMT5");
        
        // Handle email form submission
        const emailForm = document.getElementById("emailForm");
        if (emailForm) {
            emailForm.addEventListener("submit", function(event) {
                event.preventDefault();  // Prevent form default submission

                // Send email using EmailJS
                emailjs.send("service_69nri2j", "template_eiazwgx", {
                    email: document.getElementById("email").value,
                    message: document.getElementById("message").value
                }).then(function(response) {
                    alert("Email sent successfully!");
                }, function(error) {
                    console.error("Failed to send email:", error);
                    alert("Failed to send email. Please check the console for more details.");
                });
            });
        }
    }
});

// Toggle light/dark mode
function toggleMode() {
    document.body.classList.toggle('light-mode');
    const currentMode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('portfolio-mode', currentMode);
}

// Language translations
const translations = {
    en: {
        // Navigation
        'nav.projects': 'Projects',
        'nav.services': 'Services',
        'nav.aboutMe': 'About Me',
        'nav.contact': 'Contact',
        'nav.mode': 'Mode',
        'nav.cv': 'CV',
        
        // Hero Section
        'hero.label': 'FULL-STACK DEVELOPER',
        'hero.title': 'Modern Web Solutions for Growing Businesses.',
        'hero.message': 'My mission is to design and develop web solutions that you and your audience love.',
        'hero.button': 'Collaborate with us',
        
        // Projects Section
        'projects.title': 'My Recent Projects',
        'project1.title': 'My Twitter',
        'project1.description': 'During a group project inspired by Twitter, I strengthened my skills in <b class="text-success">full-stack development</b>, <b class="text-success">state management</b>, <b class="text-success">problem solving</b>, and <b class="text-success">teamwork</b>.',
        'project2.title': 'My Meetic',
        'project2.description': 'While developing a dating application, I acquired skills in <b class="text-success">MVC architecture</b>, <b class="text-success">object-oriented programming</b>, <b class="text-success">dynamic animations and interactions</b>, as well as <b class="text-success">autonomy and time management</b>.',
        'project3.title': 'My Mini Boot',
        'project3.description': 'While designing a CSS framework, I learned to <b class="text-success">create a design system</b>, structure a project with <b class="text-success">autonomy and rigor</b>, and optimize code for better <b class="text-success">performance and speed</b>.',
        'project4.title': 'My Cinema',
        'project4.description': 'While developing an administration interface for a cinema, I managed the <b class="text-success">database</b>, <b class="text-success">management of films, rooms and subscriptions</b>, as well as the <b class="text-success">administration interface</b>.',
        'project5.title': 'DevQuiz',
        'project5.description': 'While developing an interactive JavaScript quiz, I manipulated <b class="text-success">JSON files</b>, managed the <b class="text-success">dynamic display</b> of questions and answers, and optimized <b class="text-success">event handling</b>.',
        'project6.title': 'Racing JS',
        'project6.description': 'I learned to manage <b class="text-success">data storage and retrieval</b> with LocalStorage, to <b class="text-success">display dynamic data via APIs</b>, and to <b class="text-success">update the DOM in real time</b>.',
        
        // About Section
        'about.title': 'A little bit about me',
        'about.description': 'Hi, I\'m <b>Merveille ARIKUNGOMA</b>, a dedicated <b>Full-Stack Developer</b> with a passion for transforming ideas into powerful digital solutions. With experience across multiple industries and successful projects, I specialize in creating <b>modern, scalable web applications that drive business growth</b>.',
        'about.stat1': 'Years of Experience',
        'about.stat2': 'Projects Completed',
        'about.stat3': 'Technologies Mastered',
        
        // Services Section
        'services.title': 'What I can help with',
        'service1.name': 'Web Development',
        'service1.description': 'Building responsive and modern web applications using the latest technologies and best practices.',
        'service2.name': 'Full-Stack Development',
        'service2.description': 'End-to-end development from frontend to backend, ensuring seamless integration and functionality.',
        'service3.name': 'UI/UX Design',
        'service3.description': 'Creating intuitive and beautiful user interfaces that provide exceptional user experiences.',
        
        // Clients Section
        'clients.title': 'Clients I worked with',
        
        // Contact Section
        'contact.title': 'Contact Us',
        'contact.email.label': 'Email address',
        'contact.email.placeholder': 'name@example.com',
        'contact.message.label': 'Message',
        'contact.message.placeholder': 'Leave a message here',
        'contact.button': 'Send a message',
        
        // Footer
        'footer.backToTop': 'Back to Top',
        'footer.portfolio': 'PORTFOLIO',
        'footer.projects': 'PROJECTS',
        'footer.home': 'Home',
        'footer.myWork': 'My work',
        'footer.aboutMe': 'About Me',
        'footer.contact': 'Contact'
    },
    fr: {
        // Navigation
        'nav.projects': 'Projets',
        'nav.services': 'Services',
        'nav.aboutMe': 'À propos de moi',
        'nav.contact': 'Contact',
        'nav.mode': 'Mode',
        'nav.cv': 'CV',
        
        // Hero Section
        'hero.label': 'DÉVELOPPEUSE FULL-STACK',
        'hero.title': 'Solutions Web Modernes pour Entreprises en Croissance.',
        'hero.message': 'Ma mission est de concevoir et développer des solutions web que vous et votre audience adorez.',
        'hero.button': 'Collaborer avec nous',
        
        // Projects Section
        'projects.title': 'Mes Projets Récents',
        'project1.title': 'Mon Twitter',
        'project1.description': 'Lors d\'un projet de groupe inspiré de Twitter, j\'ai renforcé mes compétences en <b class="text-success">développement full-stack</b>, <b class="text-success">gestion des états</b>, <b class="text-success">résolution de problèmes</b> et <b class="text-success">travail en équipe</b>.',
        'project2.title': 'Mon Meetic',
        'project2.description': 'En développant une application de rencontre, j\'ai acquis des compétences en <b class="text-success">architecture MVC</b>, <b class="text-success">programmation orientée objet</b>, <b class="text-success">animations et interactions dynamiques</b>, ainsi qu\'en <b class="text-success">autonomie et gestion du temps</b>.',
        'project3.title': 'Mon Mini Boot',
        'project3.description': 'En concevant un framework CSS, j\'ai appris à <b class="text-success">créer un design system</b>, à structurer un projet avec <b class="text-success">autonomie et rigueur</b>, et à optimiser le code pour plus de <b class="text-success">performance et rapidité</b>.',
        'project4.title': 'Mon Cinéma',
        'project4.description': 'En développant une interface d\'administration pour un cinéma, j\'ai géré la <b class="text-success">base de données</b>, la <b class="text-success">gestion des films, salles et abonnements</b>, ainsi que l\'<b class="text-success">interface d\'administration</b>.',
        'project5.title': 'DevQuiz',
        'project5.description': 'En développant un quiz interactif en JavaScript, j\'ai manipulé des <b class="text-success">fichiers JSON</b>, géré l\'<b class="text-success">affichage dynamique</b> des questions et des réponses, et optimisé la <b class="text-success">gestion des événements</b>.',
        'project6.title': 'Racing JS',
        'project6.description': 'J\'ai appris à gérer le <b class="text-success">stockage et la récupération des données</b> avec LocalStorage, à <b class="text-success">afficher des données dynamiques via des API</b> et à <b class="text-success">mettre à jour le DOM en temps réel</b>.',
        
        // About Section
        'about.title': 'Un peu à propos de moi',
        'about.description': 'Salut, je suis <b>Merveille ARIKUNGOMA</b>, une <b>Développeuse Full-Stack</b> dévouée avec une passion pour transformer les idées en solutions numériques puissantes. Avec de l\'expérience dans plusieurs industries et des projets réussis, je me spécialise dans la création de <b>applications web modernes et évolutives qui stimulent la croissance des entreprises</b>.',
        'about.stat1': 'Années d\'Expérience',
        'about.stat2': 'Projets Terminés',
        'about.stat3': 'Technologies Maîtrisées',
        
        // Services Section
        'services.title': 'Ce avec quoi je peux aider',
        'service1.name': 'Développement Web',
        'service1.description': 'Création d\'applications web réactives et modernes en utilisant les dernières technologies et les meilleures pratiques.',
        'service2.name': 'Développement Full-Stack',
        'service2.description': 'Développement de bout en bout du frontend au backend, garantissant une intégration et une fonctionnalité transparentes.',
        'service3.name': 'Design UI/UX',
        'service3.description': 'Création d\'interfaces utilisateur intuitives et magnifiques qui offrent des expériences utilisateur exceptionnelles.',
        
        // Clients Section
        'clients.title': 'Clients avec qui j\'ai travaillé',
        
        // Contact Section
        'contact.title': 'Nous contacter',
        'contact.email.label': 'Adresse e-mail',
        'contact.email.placeholder': 'nom@exemple.com',
        'contact.message.label': 'Message',
        'contact.message.placeholder': 'Laissez un message ici',
        'contact.button': 'Envoyer un message',
        
        // Footer
        'footer.backToTop': 'Retour en haut',
        'footer.portfolio': 'PORTFOLIO',
        'footer.projects': 'PROJETS',
        'footer.home': 'Accueil',
        'footer.myWork': 'Mon travail',
        'footer.aboutMe': 'À propos de moi',
        'footer.contact': 'Contact'
    }
};

// Language switcher
function switchLanguage(lang) {
    // Save language preference
    localStorage.setItem('portfolio-language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if the translation contains HTML tags (like <b>)
            const translation = translations[lang][key];
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update placeholders for input fields with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update document language
    document.documentElement.lang = lang;
}

// Animate Projects Count
function animateProjectsCount() {
    const projectsCountElement = document.getElementById('projects-count');
    if (!projectsCountElement) return;
    
    // Check if already animated
    if (projectsCountElement.dataset.animated === 'true') return;
    
    const aboutSection = document.getElementById('about-section');
    if (!aboutSection) return;
    
    // Use Intersection Observer to trigger when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && projectsCountElement.dataset.animated !== 'true') {
                projectsCountElement.dataset.animated = 'true';
                
                const targetCount = 10;
                const duration = 1000; // 1 second for fast counting
                const steps = 50;
                const increment = targetCount / steps;
                const stepDuration = duration / steps;
                
                let currentCount = 0;
                const timer = setInterval(() => {
                    currentCount += increment;
                    if (currentCount >= targetCount) {
                        currentCount = targetCount;
                        clearInterval(timer);
                    }
                    projectsCountElement.textContent = Math.floor(currentCount) + '+';
                }, stepDuration);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(aboutSection);
}

// Scroll Animation Observer
function initScrollAnimations() {
    // Select all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in, .slide-in-left, .slide-in-right');
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'animate' class when element is in view
                entry.target.classList.add('animate');
                // Optional: Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element enters viewport
    });
    
    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}