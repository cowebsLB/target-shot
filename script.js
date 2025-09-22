// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add intersection observer for menu items animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Add hover effects to menu items
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            }, 150);
        });
    });
    
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
    
    // Add glow effect to logo on hover
    const logo = document.querySelector('.target-circle');
    logo.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.8)';
        this.style.transform = 'scale(1.1)';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
        this.style.transform = 'scale(1)';
    });
    
    // Add smooth transitions to all elements
    const style = document.createElement('style');
    style.textContent = `
        .header {
            transition: transform 0.3s ease;
        }
        .target-circle {
            transition: all 0.3s ease;
        }
        .menu-item {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Reset any active states
        const activeItems = document.querySelectorAll('.menu-item.active');
        activeItems.forEach(item => item.classList.remove('active'));
    }
});

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function(e) {
        if (e.target.classList.contains('menu-item')) {
            e.target.classList.add('active');
        }
    });
    
    document.addEventListener('touchend', function(e) {
        if (e.target.classList.contains('menu-item')) {
            setTimeout(() => {
                e.target.classList.remove('active');
            }, 150);
        }
    });
}

// PWA Installation
let deferredPrompt;
let installButton;

// Create install button
function createInstallButton() {
    if (installButton) return;
    
    installButton = document.createElement('button');
    installButton.innerHTML = '📱 Install App';
    installButton.className = 'fixed bottom-4 right-4 bg-target-orange text-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300 z-50';
    installButton.style.display = 'none';
    
    installButton.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);
            deferredPrompt = null;
            installButton.style.display = 'none';
        }
    });
    
    document.body.appendChild(installButton);
}

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    console.log('PWA install prompt available');
    e.preventDefault();
    deferredPrompt = e;
    createInstallButton();
    installButton.style.display = 'block';
});

// Listen for appinstalled event
window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    if (installButton) {
        installButton.style.display = 'none';
    }
});

// Check if app is already installed
if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('App is running in standalone mode');
}

// Listen for display mode changes
window.matchMedia('(display-mode: standalone)').addEventListener('change', (e) => {
    if (e.matches) {
        console.log('App is now running in standalone mode');
    } else {
        console.log('App is now running in browser mode');
    }
});

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New content is available, show update notification
                            showUpdateNotification();
                        }
                    });
                });
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Show update notification
function showUpdateNotification() {
    const updateNotification = document.createElement('div');
    updateNotification.innerHTML = `
        <div class="fixed top-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
            <h3 class="font-bold mb-2">Update Available</h3>
            <p class="text-sm mb-3">A new version of the app is available.</p>
            <button id="updateButton" class="bg-target-orange text-white px-3 py-1 rounded text-sm hover:bg-orange-600 transition-colors duration-300">
                Update Now
            </button>
            <button id="dismissButton" class="ml-2 text-gray-400 hover:text-white text-sm">
                Dismiss
            </button>
        </div>
    `;
    
    document.body.appendChild(updateNotification);
    
    document.getElementById('updateButton').addEventListener('click', () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistration().then(registration => {
                if (registration && registration.waiting) {
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                    window.location.reload();
                }
            });
        }
        updateNotification.remove();
    });
    
    document.getElementById('dismissButton').addEventListener('click', () => {
        updateNotification.remove();
    });
    
    // Auto-dismiss after 10 seconds
    setTimeout(() => {
        if (updateNotification.parentNode) {
            updateNotification.remove();
        }
    }, 10000);
}
