document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenuContent = document.getElementById('mobileMenuContent');
    const navbarContainer = document.querySelector('.navbar-container');

    hamburgerMenu.addEventListener('click', function() {
        // Toggle 'active' class on hamburger icon for animation
        hamburgerMenu.classList.toggle('active');
        // Toggle 'menu-open' on container to control visibility of the mobile menu content
        navbarContainer.classList.toggle('menu-open');
    });

    // Close menu if a link is clicked (for better mobile UX)
    // Now querying links within the mobileMenuContent
    mobileMenuContent.querySelectorAll('.navbar-links-mobile a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarContainer.classList.contains('menu-open')) {
                hamburgerMenu.classList.remove('active');
                navbarContainer.classList.remove('menu-open');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dynamicHeadlineElement = document.getElementById('dynamicHeadline');
    const headlines = [
        "Fast & Secure Cryptocurrency Exchange",
        "Your Gateway to Digital Assets",
        "Trade Crypto with Confidence",
        "Empowering Your Financial Journey"
    ];
    let currentIndex = 0;

    function updateDynamicHeadline() {
        // Apply fade-out effect
        dynamicHeadlineElement.style.opacity = '0';
        setTimeout(() => {
            dynamicHeadlineElement.textContent = headlines[currentIndex];
            // Apply fade-in effect
            dynamicHeadlineElement.style.opacity = '1';
            currentIndex = (currentIndex + 1) % headlines.length;
        }, 1000); // Wait for 1 second for fade-out before changing text
    }

    // Initial headline display
    updateDynamicHeadline();

    // Change headline every 4 seconds (including the 1-second fade transition)
    setInterval(updateDynamicHeadline, 4000);
});

function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const prefix = element.dataset.prefix || '';
    const suffix = element.dataset.suffix || '';
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        element.textContent = prefix + Math.floor(current) + suffix;
    }, 16);
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        if (isElementInViewport(counter) && !counter.classList.contains('animated')) {
            counter.classList.add('animated');
            animateCounter(counter);
        }
    });
}

// Start animation when page loads if elements are in viewport
document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
});

// Also trigger on scroll for better UX
window.addEventListener('scroll', handleScroll);

// Add accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                answer.classList.remove('active');
            } else {
                item.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
});

 // Initialize Lucide icons after the DOM is loaded
 document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    // Dynamically set current year for copyright
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

class SubtleActivityNotification {
    constructor() {
        this.notification = document.getElementById('activityNotification')
        this.textElement = document.getElementById('notificationText')
        this.timeElement = document.getElementById('notificationTime')

        this.activities = [
            { message: '<span class="notification-name">Raphael T.</span> from Paris <span class="notification-action">withdrew $700 USD</span>', time: '5 minutes ago' },
            { message: '<span class="notification-name">Sarah M.</span> from New York <span class="notification-action">deposited $1,200 USD</span>', time: '3 minutes ago' },
            { message: '<span class="notification-name">Tyrone B.</span> from Chicago <span class="notification-action">placed a trade worth $3,000 USD</span>', time: '8 minutes ago' },
            { message: '<span class="notification-name">Ava J.</span> from Miami <span class="notification-action">withdrew $980 USD</span>', time: '10 minutes ago' },
            { message: '<span class="notification-name">Elijah D.</span> from Houston <span class="notification-action">withdrew $1,500 USD</span>', time: '14 minutes ago' },
            { message: '<span class="notification-name">Linda Q.</span> from Tokyo <span class="notification-action">withdrew $12,000 USD</span>', time: '6 minutes ago' },
            { message: '<span class="notification-name">Oscar B.</span> from Dubai <span class="notification-action">withdrew $15,000 USD</span>', time: '7 minutes ago' },
            { message: '<span class="notification-name">Chloe Z.</span> from Toronto <span class="notification-action">withdrew $8,500 USD</span>', time: '3 minutes ago' },
            { message: '<span class="notification-name">Marcus G.</span> <span class="notification-action">signed up</span>', time: 'just now' },
            { message: '<span class="notification-name">Jason N.</span> from Kuala Lumpur <span class="notification-action">withdrew $10,200 USD</span>', time: '7 minutes ago' },
            { message: '<span class="notification-name">Diana F.</span> from Rome <span class="notification-action">withdrew $11,900 USD</span>', time: '8 minutes ago' },
            { message: '<span class="notification-name">Emily T.</span> from Prague <span class="notification-action">withdrew $9,400 USD</span>', time: '2 minutes ago' },
            { message: '<span class="notification-name">Lucas R.</span> from Madrid <span class="notification-action">deposited $5,000 USD</span>', time: '9 minutes ago' },
            { message: '<span class="notification-name">Isabella W.</span> from Zurich <span class="notification-action">withdrew $2,300 USD</span>', time: '11 minutes ago' },
            { message: '<span class="notification-name">James L.</span> from San Francisco <span class="notification-action">placed a trade on BTC/USDT</span>', time: '13 minutes ago' },
            { message: '<span class="notification-name">Sophia K.</span> from Amsterdam <span class="notification-action">withdrew $4,800 USD</span>', time: '12 minutes ago' },
            { message: '<span class="notification-name">William H.</span> from Munich <span class="notification-action">withdrew $6,200 USD</span>', time: '15 minutes ago' },
            { message: '<span class="notification-name">Liam J.</span> from Oslo <span class="notification-action">signed up</span>', time: '16 minutes ago' },
            { message: '<span class="notification-name">Nora M.</span> from Sydney <span class="notification-action">withdrew $7,700 USD</span>', time: '17 minutes ago' },
            { message: '<span class="notification-name">Jacob S.</span> from Vancouver <span class="notification-action">withdrew $13,000 USD</span>', time: '18 minutes ago' }
        ]
        

        this.lastIndex = -1
        this.init()
    }

    init() {
        setTimeout(() => {
            this.showNextActivity()
        }, 1500)
    }

    showNextActivity() {
        let nextIndex
        do {
            nextIndex = Math.floor(Math.random() * this.activities.length)
        } while (nextIndex === this.lastIndex)

        this.lastIndex = nextIndex
        const activity = this.activities[nextIndex]

        this.textElement.innerHTML = activity.message
        this.timeElement.textContent = activity.time

        this.notification.classList.add('show')

        setTimeout(() => {
            this.notification.classList.remove('show')
            setTimeout(() => {
                this.showNextActivity()
            }, 500)
        }, 4000)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SubtleActivityNotification()
})

// Use a unique function name to avoid conflicts with other scripts on a page
let currentTestimonialSlide = 0;
const testimonialSlides = document.querySelectorAll('.bullionfx-testimonial-component .bfx-testimonial-slide');
const totalTestimonialSlides = testimonialSlides.length;

/**
 * Displays the testimonial slide at the given index.
 * @param {number} index - The index of the slide to show.
 */
function showTestimonialSlide(index) {
    testimonialSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

/**
 * Moves the testimonial carousel to the next or previous slide.
 * @param {number} direction - -1 for previous, 1 for next.
 */
function moveTestimonialSlide(direction) {
    currentTestimonialSlide = (currentTestimonialSlide + direction + totalTestimonialSlides) % totalTestimonialSlides;
    showTestimonialSlide(currentTestimonialSlide);
}

// Initialize the carousel on page load
document.addEventListener('DOMContentLoaded', () => {
    showTestimonialSlide(currentTestimonialSlide);
});
  