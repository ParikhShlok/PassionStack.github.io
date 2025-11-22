// ============================================
// PASSIONSTACK - INTERACTIVITY & ANIMATIONS
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initChatbotDemo();
    initWaitlistForm();
    initFeedbackButton();
    initSmoothScroll();
    initAnimations();
    initMobileMenu();
});

// ============================================
// CHATBOT DEMO FUNCTIONALITY
// ============================================
function initChatbotDemo() {
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const exampleButtons = document.querySelectorAll('.example-btn');

    if (!chatMessages || !chatInput || !sendButton) return;

    // Example responses for the demo
    const botResponses = [
        "That's great! I'm glad you're doing well. 😊",
        "Wonderful! What did you do today?",
        "Nice! I'd love to hear more about that.",
        "That sounds interesting! Tell me more.",
        "I'm here to help you practice! What would you like to talk about?",
        "Great job! Your English is improving. Keep it up! ✨"
    ];

    // Predefined corrections
    const corrections = {
        "i am good": "I'm doing well, thank you!",
        "my day was very nice": "My day was very nice!",
        "i study computer science": "I study computer science."
    };

    function addMessage(text, isUser = false, isCorrection = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = isUser ? '👤' : '🤖';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        
        const messageText = document.createElement('p');
        messageText.textContent = text;
        content.appendChild(messageText);
        
        if (isCorrection) {
            messageText.innerHTML = text + ' <span style="font-size: 0.75rem; opacity: 0.9;">✨ Corrected!</span>';
        }
        
        const time = document.createElement('span');
        time.className = 'message-time';
        time.textContent = 'Just now';
        content.appendChild(time);
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Add fade-in animation
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.style.transition = 'opacity 0.3s ease';
            messageDiv.style.opacity = '1';
        }, 10);
    }

    function sendMessage() {
        const userText = chatInput.value.trim();
        if (!userText) return;

        // Add user message
        addMessage(userText, true);

        // Clear input
        chatInput.value = '';

        // Check for corrections
        const lowerText = userText.toLowerCase();
        let corrected = false;
        let correctedText = '';

        for (const [key, value] of Object.entries(corrections)) {
            if (lowerText.includes(key)) {
                corrected = true;
                correctedText = value;
                break;
            }
        }

        // Add correction if needed
        if (corrected) {
            setTimeout(() => {
                addMessage(correctedText, true, true);
            }, 800);
        }

        // Add bot response
        setTimeout(() => {
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            addMessage(randomResponse, false);
        }, 1200);
    }

    // Send button click
    sendButton.addEventListener('click', sendMessage);

    // Enter key press
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Example button clicks
    exampleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.getAttribute('data-text');
            chatInput.value = text;
            chatInput.focus();
        });
    });
}

// ============================================
// WAITLIST FORM FUNCTIONALITY
// ============================================
function initWaitlistForm() {
    const waitlistForm = document.getElementById('waitlistForm');
    const successModal = document.getElementById('successModal');

    if (!waitlistForm || !successModal) return;

    waitlistForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(waitlistForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const userType = formData.get('userType');

        // Validate
        if (!name || !email || !userType) {
            alert('Please fill in all fields.');
            return;
        }

        // In a real app, you would send this to your backend
        // For now, we'll just show the success modal
        console.log('Form submitted:', { name, email, userType });

        // Show success modal
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Reset form
        waitlistForm.reset();
    });

    // Close modal when clicking outside
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            closeModal();
        }
    });

    // Close modal function
    function closeModal() {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Add close button functionality if needed
    const closeButtons = successModal.querySelectorAll('.btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent.includes('Back to Home') || this.textContent.includes('Try Demo')) {
                closeModal();
            }
        });
    });
}

// ============================================
// FEEDBACK BUTTON FUNCTIONALITY
// ============================================
function initFeedbackButton() {
    const feedbackBtn = document.getElementById('feedbackBtn');
    
    if (!feedbackBtn) return;

    // Add click handler - user will add their Google Form link
    feedbackBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // TODO: Replace with your actual Google Form URL
        // Update the URL below with your Google Form link
        const googleFormUrl = ('https://docs.google.com/forms/d/e/1FAIpQLSeSQoME5q-wlyxNQAWp5BXN9bG1Xj5lRPmz3xjHj187bTqtNA/viewform?usp=dialog');
        
        // Check if URL has been updated
        if (googleFormUrl.includes('YOUR_FORM_ID')) {
            alert('Please add your Google Form link in script.js (around line 211).\n\nReplace "YOUR_FORM_ID_HERE" with your actual Google Form ID.');
        } else {
            window.open(googleFormUrl, '_blank');
        }
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    // Handle anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.problem-card, .feature-card, .testimonial-card, .mockup-item, .solution-feature'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Add loading state to buttons
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.innerHTML = '<span>Loading...</span>';
    } else {
        button.disabled = false;
        button.textContent = button.dataset.originalText || button.textContent;
    }
}

// Format form data for submission
function formatFormData(form) {
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    return data;
}

// Show toast notification (optional enhancement)
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add CSS for toast animations (inject into head)
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(toastStyles);

