/**
 * @author RimuruTempest
 * 2025 RimuruTempest
 * Github : https://github.com/RimuruTempest750
 */

document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pageContents = document.querySelectorAll('.page-content');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            
            navButtons.forEach(btn => btn.classList.remove('active'));
            pageContents.forEach(page => page.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(targetPage + '-page').classList.add('active');
        });
    });

    const projectButtons = document.querySelectorAll('.project-btn');
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href !== '#') {
                showNotification(`Opening ${this.textContent.trim()}...`, 'info');
                setTimeout(() => {
                    window.open(href, '_blank');
                }, 500);
            } else {
                e.preventDefault();
                const buttonText = this.textContent;
                const projectTitle = this.closest('.project-item').querySelector('h3').textContent;
                showNotification(`Opening ${projectTitle}...`, 'info');
            }
        });
    });

    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.textContent;
            showNotification(`Opening ${platform}...`, 'info');
        });
    });

    const githubBtn = document.querySelector('.github-btn');
    if (githubBtn) {
        githubBtn.addEventListener('click', function() {
            showNotification('Opening GitHub profile...', 'success');
        });
    }

    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #4ecdc4, #44a08d)' : 'linear-gradient(135deg, #ff6b6b, #ffa500)'};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-size: 0.9rem;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const skillItems = document.querySelectorAll('.skill-category ul li');
    
    skillItems.forEach(item => {
        item.addEventListener('click', function() {
            const skill = this.textContent;
            showNotification(`Selected skill: ${skill}`, 'info');
        });
    });

    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const contactType = this.querySelector('h3').textContent;
            const contactValue = this.querySelector('p')?.textContent || '';
            
            if (contactValue && !contactValue.includes('Social Media')) {
                navigator.clipboard.writeText(contactValue).then(() => {
                    showNotification(`${contactType} copied to clipboard!`, 'success');
                }).catch(() => {
                    showNotification(`${contactType}: ${contactValue}`, 'info');
                });
            }
        });
    });

    let isScrolling = false;
    const portfolioContainer = document.querySelector('.portfolio-container');
    
    if (portfolioContainer) {
        portfolioContainer.addEventListener('scroll', function() {
            if (!isScrolling) {
                isScrolling = true;
                this.style.scrollbarColor = 'rgba(255, 255, 255, 0.5) transparent';
                
                setTimeout(() => {
                    this.style.scrollbarColor = 'rgba(255, 255, 255, 0.3) transparent';
                    isScrolling = false;
                }, 500);
            }
        });
    }

    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        profilePic.addEventListener('click', function() {
            showNotification('Profile picture clicked ! 🎉', 'success');
        });
    }

    const title = document.querySelector('h1');
    if (title) {
        title.addEventListener('click', function() {
            showNotification('Welcome to RimuruTempest.info ! 🚀', 'success');
        });
    }

    const skillsTitle = document.querySelector('.skills-card h2');
    if (skillsTitle) {
        skillsTitle.addEventListener('click', function() {
            showNotification('🔥 Skills section activated !', 'success');
        });
    }

    const footerBtn = document.querySelector('.footer-btn');
    if (footerBtn) {
        footerBtn.addEventListener('click', function() {
            showNotification('Opening GitHub profile...', 'success');
        });
    }
});