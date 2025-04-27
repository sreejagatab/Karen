# Karen Phytoplankton Testimonials Setup Guide

This guide provides detailed instructions for setting up and managing customer testimonials on the Karen Phytoplankton website.

## Overview

Customer testimonials are crucial for building trust and credibility. For Karen Phytoplankton, testimonials should emphasize the "feel 25 years younger" value proposition and highlight real customer experiences with the product.

## Implementation Options

### Option 1: Using the Built-in Testimonials Section

The theme includes a pre-built testimonials section (`testimonials.liquid`) that can be added to any page:

1. Go to **Online Store > Themes > Customize**
2. Select the page where you want to add testimonials (homepage, dedicated page, etc.)
3. Click **Add section > Testimonials**
4. Configure the section settings:
   - Heading: "What Our Customers Say"
   - Show CTA Button: Yes/No
   - CTA Button Text: "Read More Reviews"
   - CTA Button Link: Link to reviews page or product page

5. Add testimonials by clicking **Add block > Testimonial** for each review:
   - Customer Image: Upload customer photo (optional)
   - Customer Name: Enter customer's name
   - Location: Enter customer's location
   - Rating: Select star rating (1-5)
   - Testimonial: Enter the customer's review

### Option 2: Using a Reviews App (Recommended)

For more robust testimonial management, use a dedicated reviews app:

#### Judge.me Product Reviews

1. Go to **Apps > App Store**
2. Search for "Judge.me Product Reviews"
3. Click **Add app**
4. Follow the installation process
5. Complete the onboarding wizard

#### Configuration in Judge.me:

1. Go to **Settings > General**:
   - Enable review collection
   - Set review moderation preferences
   - Configure email settings

2. Go to **Settings > Display**:
   - Customize review widget appearance
   - Match colors to your theme (green and amber)
   - Set star color to amber (#e9c37a)
   - Configure review display format

3. Go to **Widgets**:
   - Enable "Review Widget" for product pages
   - Enable "All Reviews Page"
   - Enable "Review Carousel" for homepage

4. Go to **Customization**:
   - Customize widget text and labels
   - Set up custom questions (optional)
   - Configure photo/video reviews (optional)

### Option 3: Custom Testimonials Page

Create a dedicated testimonials page with a custom template:

1. Create a new template file `page.testimonials.liquid` in the `templates` folder:

```liquid
<div class="bg-amber-50 py-12">
  <div class="container mx-auto px-4">
    <h1 class="text-5xl font-bold text-center text-green-800 mb-8 font-cursive">{{ page.title }}</h1>
    
    <div class="max-w-4xl mx-auto">
      <div class="bg-white p-8 rounded-lg border-2 border-green-800 shadow-lg mb-12">
        <div class="prose max-w-none">
          {{ page.content }}
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        {% for block in section.blocks %}
          {% if block.type == 'testimonial' %}
            <div class="bg-amber-50 p-6 rounded-lg border-2 border-green-800 shadow-md transform {% cycle 'rotate-1', '-rotate-1' %}">
              <div class="flex items-start mb-4">
                {% if block.settings.image != blank %}
                  <img src="{{ block.settings.image | img_url: '100x100', crop: 'center' }}" alt="{{ block.settings.name }}" class="w-16 h-16 rounded-full mr-4 border-2 border-amber-300">
                {% else %}
                  <div class="w-16 h-16 rounded-full mr-4 bg-amber-200 flex items-center justify-center border-2 border-amber-300">
                    <span class="text-green-800 text-xl font-bold">{{ block.settings.name | slice: 0 }}</span>
                  </div>
                {% endif %}
                <div>
                  <h3 class="text-lg font-bold text-green-800">{{ block.settings.name }}</h3>
                  <p class="text-sm text-green-700">{{ block.settings.location }}</p>
                </div>
              </div>
              <div class="mb-3">
                {% assign rating = block.settings.rating | times: 1 %}
                {% for i in (1..5) %}
                  <span class="text-amber-400 text-xl">
                    {% if i <= rating %}★{% else %}☆{% endif %}
                  </span>
                {% endfor %}
              </div>
              <p class="text-lg italic">{{ block.settings.quote }}</p>
            </div>
          {% endif %}
        {% endfor %}
      </div>
      
      {% if section.settings.show_form %}
        <div class="mt-16 bg-white p-8 rounded-lg border-2 border-green-800 shadow-lg">
          <h2 class="text-3xl font-bold text-green-800 mb-6 font-cursive text-center">Share Your Experience</h2>
          
          <form id="testimonial-form" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-lg font-bold text-green-800 mb-2">Your Name</label>
                <input type="text" id="name" name="name" class="w-full p-3 border-2 border-amber-200 rounded-lg focus:border-green-800 focus:ring focus:ring-green-200 focus:ring-opacity-50" required>
              </div>
              
              <div>
                <label for="location" class="block text-lg font-bold text-green-800 mb-2">Location</label>
                <input type="text" id="location" name="location" class="w-full p-3 border-2 border-amber-200 rounded-lg focus:border-green-800 focus:ring focus:ring-green-200 focus:ring-opacity-50" placeholder="City, State/Province">
              </div>
            </div>
            
            <div>
              <label for="rating" class="block text-lg font-bold text-green-800 mb-2">Your Rating</label>
              <div class="flex space-x-2">
                {% for i in (1..5) %}
                  <button type="button" class="rating-star text-3xl text-amber-200 hover:text-amber-400" data-value="{{ i }}">★</button>
                {% endfor %}
              </div>
              <input type="hidden" id="rating" name="rating" value="5">
            </div>
            
            <div>
              <label for="testimonial" class="block text-lg font-bold text-green-800 mb-2">Your Experience</label>
              <textarea id="testimonial" name="testimonial" rows="6" class="w-full p-3 border-2 border-amber-200 rounded-lg focus:border-green-800 focus:ring focus:ring-green-200 focus:ring-opacity-50" required></textarea>
            </div>
            
            <div>
              <label for="photo" class="block text-lg font-bold text-green-800 mb-2">Your Photo (Optional)</label>
              <input type="file" id="photo" name="photo" class="w-full p-3 border-2 border-amber-200 rounded-lg focus:border-green-800 focus:ring focus:ring-green-200 focus:ring-opacity-50">
            </div>
            
            <div class="text-center">
              <button type="submit" class="px-8 py-3 bg-green-800 text-white rounded-full font-bold hover:bg-green-700 transform transition hover:scale-105">
                Submit Your Testimonial
              </button>
            </div>
          </form>
        </div>
      {% endif %}
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Rating star functionality
    const ratingStars = document.querySelectorAll('.rating-star');
    const ratingInput = document.getElementById('rating');
    
    if (ratingStars.length > 0 && ratingInput) {
      ratingStars.forEach(star => {
        star.addEventListener('click', function() {
          const value = this.getAttribute('data-value');
          ratingInput.value = value;
          
          // Update star appearance
          ratingStars.forEach((s, index) => {
            if (index < value) {
              s.classList.remove('text-amber-200');
              s.classList.add('text-amber-400');
            } else {
              s.classList.remove('text-amber-400');
              s.classList.add('text-amber-200');
            }
          });
        });
      });
    }
    
    // Form submission (would need backend integration)
    const testimonialForm = document.getElementById('testimonial-form');
    
    if (testimonialForm) {
      testimonialForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real implementation, you would send this data to your backend
        // For now, just show a success message
        alert('Thank you for sharing your experience! Your testimonial will be reviewed and published soon.');
        testimonialForm.reset();
        
        // Reset rating stars
        ratingStars.forEach(star => {
          star.classList.remove('text-amber-400');
          star.classList.add('text-amber-200');
        });
      });
    }
  });
</script>

{% schema %}
{
  "name": "Testimonials Page",
  "settings": [
    {
      "type": "checkbox",
      "id": "show_form",
      "label": "Show Testimonial Form",
      "default": true
    }
  ],
  "blocks": [
    {
      "type": "testimonial",
      "name": "Testimonial",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Customer Image"
        },
        {
          "type": "text",
          "id": "name",
          "label": "Customer Name",
          "default": "Jane Smith"
        },
        {
          "type": "text",
          "id": "location",
          "label": "Location",
          "default": "Vancouver, BC"
        },
        {
          "type": "range",
          "id": "rating",
          "min": 1,
          "max": 5,
          "step": 1,
          "label": "Rating",
          "default": 5
        },
        {
          "type": "textarea",
          "id": "quote",
          "label": "Testimonial",
          "default": "I feel 25 years younger since I started taking Karen Phytoplankton! My energy levels are through the roof and I sleep better than I have in decades."
        }
      ]
    }
  ]
}
{% endschema %}
```

2. Create a new page in Shopify:
   - Go to **Online Store > Pages > Add page**
   - Title: "Customer Testimonials"
   - Template: Select "page.testimonials"
   - Add introductory content
   - Click **Save**

## Collecting Testimonials

### 1. Automated Collection with Judge.me

If using Judge.me or a similar app:

1. Configure **Review Request Emails**:
   - Go to **Settings > Emails** in Judge.me
   - Enable automatic review request emails
   - Set timing (e.g., 14 days after purchase)
   - Customize email template with Karen branding
   - Include incentive if desired (discount on next purchase)

2. Configure **Review Form**:
   - Customize review form fields
   - Add custom questions specific to Karen Phytoplankton:
     - "How has Karen Phytoplankton improved your energy levels?"
     - "What benefits have you noticed since starting Karen Phytoplankton?"
     - "Would you say you feel younger since taking Karen Phytoplankton?"

3. Set up **Photo/Video Reviews**:
   - Enable photo/video uploads
   - Encourage customers to share their transformation

### 2. Manual Collection

For manual testimonial collection:

1. **Email Campaigns**:
   - Send targeted emails to past customers
   - Offer incentives for leaving reviews (discount code, free shipping)
   - Provide direct link to review form

2. **Social Media**:
   - Monitor social media mentions
   - Reach out to customers who post positive comments
   - Ask permission to use their comments as testimonials

3. **Customer Service**:
   - Train customer service team to request testimonials
   - Follow up with customers who report positive experiences
   - Make it easy to submit (provide link or form)

## Displaying Testimonials

### 1. Homepage Carousel

Add a testimonial carousel to your homepage:

1. Go to **Online Store > Themes > Customize**
2. Select the homepage
3. Add the Testimonials section
4. Configure as a carousel:
   - Enable autoplay
   - Set transition speed
   - Show 1-2 testimonials at a time

### 2. Product Pages

Add testimonials to product pages:

1. If using Judge.me:
   - Go to **Widgets > Review Widget**
   - Enable for product pages
   - Customize appearance

2. If using custom implementation:
   - Edit the product template to include relevant testimonials
   - Filter testimonials specific to that product

### 3. Dedicated Testimonials Page

Create a comprehensive testimonials page:

1. Use the custom template created earlier
2. Organize testimonials by:
   - Rating (highest first)
   - Recency
   - Product type
   - Benefit type (energy, sleep, etc.)

3. Include filtering options for visitors

## Best Practices

### 1. Authenticity

Maintain authenticity in testimonials:

1. Use real customer photos when available
2. Include full names and locations (with permission)
3. Never fabricate testimonials
4. Include a mix of ratings (not just 5-star)
5. Include specific details that demonstrate authenticity

### 2. Compliance

Ensure testimonial usage complies with regulations:

1. Get explicit permission to use customer testimonials
2. Include disclaimers where appropriate:
   - "Results may vary"
   - "Individual experiences may differ"
3. Ensure testimonials don't make medical claims
4. Keep documentation of permission granted

### 3. Curation

Curate testimonials effectively:

1. Highlight testimonials that mention key benefits:
   - "Feeling younger"
   - Increased energy
   - Better sleep
   - Improved health

2. Feature diverse customers:
   - Different age groups
   - Different backgrounds
   - Different health concerns

3. Rotate testimonials regularly to keep content fresh

### 4. Responding to Testimonials

Engage with customer testimonials:

1. Thank customers for positive reviews
2. Address concerns in negative reviews
3. Follow up on specific questions
4. Show that you value customer feedback

## Testimonial Examples

Here are sample testimonials to use as inspiration:

1. **Energy Testimonial**:
   "I'm 67 years old but since taking Karen Phytoplankton for the past 3 months, I feel like I'm in my 40s again! My energy levels have skyrocketed and I'm back to gardening and hiking like I used to. This truly is a time machine in a bottle!" - Margaret T., Victoria, BC

2. **Sleep Testimonial**:
   "After decades of sleep issues, I was skeptical that anything would help. But within two weeks of taking Karen Phytoplankton, I was sleeping through the night for the first time in years. I wake up feeling refreshed and 25 years younger!" - Robert J., Calgary, AB

3. **Overall Health Testimonial**:
   "Karen Phytoplankton has changed my life! My digestion has improved, my skin looks better, and friends keep asking what my secret is. I tell them all about this amazing supplement. At 58, I feel better than I did at 35!" - Susan M., Toronto, ON

4. **Specific Benefit Testimonial**:
   "I started taking Karen Phytoplankton for my joint discomfort. Not only has that improved dramatically, but I've noticed so many other benefits too - better focus, more energy, and improved mood. It's like turning back the clock!" - David K., Edmonton, AB

## Support Resources

For assistance with testimonial setup and management:

1. **Judge.me Support** (if using):
   - Help Center: [help.judge.me](https://help.judge.me)
   - Support Email: support@judge.me

2. **Shopify Support**:
   - Help Center: [help.shopify.com](https://help.shopify.com)
   - Support: 24/7 chat and email support

3. **Karen Phytoplankton Support**:
   - Email: support@karenphytoplankton.com
   - Phone: 1-800-KAREN-PH
