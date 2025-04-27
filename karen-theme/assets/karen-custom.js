// Karen Phytoplankton Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Product Quantity Selector
  const quantityBtns = document.querySelectorAll('.quantity-btn');
  
  if (quantityBtns.length > 0) {
    quantityBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const action = this.getAttribute('data-action');
        const input = this.parentNode.querySelector('input');
        let value = parseInt(input.value);
        
        if (action === 'increase') {
          value++;
        } else if (action === 'decrease' && value > 1) {
          value--;
        }
        
        input.value = value;
      });
    });
  }
  
  // Product Image Gallery
  const thumbnails = document.querySelectorAll('.product-thumbnail');
  const featuredImage = document.querySelector('.product-featured-image');
  
  if (thumbnails.length > 0 && featuredImage) {
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const newSrc = this.getAttribute('data-full-size');
        featuredImage.src = newSrc;
        
        // Update active thumbnail
        thumbnails.forEach(thumb => {
          thumb.parentElement.classList.remove('border-green-800');
          thumb.parentElement.classList.add('border-amber-200');
        });
        this.parentElement.classList.remove('border-amber-200');
        this.parentElement.classList.add('border-green-800');
      });
    });
  }
  
  // Subscription Options
  const subscriptionOptions = document.querySelectorAll('.subscription-option');
  const subscriptionInput = document.getElementById('subscription-input');
  
  if (subscriptionOptions.length > 0 && subscriptionInput) {
    subscriptionOptions.forEach(option => {
      option.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        subscriptionInput.value = value;
        
        // Update selected state
        subscriptionOptions.forEach(opt => {
          opt.classList.remove('selected');
        });
        this.classList.add('selected');
      });
    });
  }
  
  // FAQ Accordion
  const faqToggles = document.querySelectorAll('.faq-toggle');
  
  if (faqToggles.length > 0) {
    faqToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('svg');
        
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
      });
    });
  }
  
  // Quiz Functionality
  const quizForm = document.getElementById('quiz-form');
  const quizResult = document.getElementById('quiz-result');
  
  if (quizForm && quizResult) {
    quizForm.addEventListener('submit', function(e) {
      e.preventDefault();
      quizResult.classList.remove('hidden');
      quizResult.scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // Product Sort
  const sortBySelect = document.getElementById('SortBy');
  
  if (sortBySelect) {
    // Set initial value based on current sort
    const urlParams = new URLSearchParams(window.location.search);
    const sortValue = urlParams.get('sort_by') || 'manual';
    sortBySelect.value = sortValue;
    
    // Handle sort change
    sortBySelect.addEventListener('change', function() {
      const url = new URL(window.location.href);
      url.searchParams.set('sort_by', this.value);
      window.location.href = url.href;
    });
  }
  
  // Sticky Header on Scroll
  const header = document.querySelector('header');
  let lastScrollTop = 0;
  
  if (header) {
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 100) {
        header.classList.add('sticky', 'top-0', 'z-50', 'shadow-md', 'transition-all');
      } else {
        header.classList.remove('sticky', 'top-0', 'z-50', 'shadow-md', 'transition-all');
      }
      
      lastScrollTop = scrollTop;
    });
  }
  
  // Newsletter Popup (after 5 seconds)
  const newsletterPopup = document.getElementById('newsletter-popup');
  const closePopupBtn = document.getElementById('close-popup');
  
  if (newsletterPopup && closePopupBtn) {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    
    if (!hasSeenPopup) {
      setTimeout(function() {
        newsletterPopup.classList.remove('hidden');
      }, 5000);
      
      closePopupBtn.addEventListener('click', function() {
        newsletterPopup.classList.add('hidden');
        localStorage.setItem('hasSeenPopup', 'true');
      });
    }
  }
});
