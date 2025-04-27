# Karen Phytoplankton Quiz Setup Guide

This guide provides detailed instructions for setting up and customizing the interactive quiz section on the Karen Phytoplankton website.

## Overview

The quiz section is designed to educate visitors about marine phytoplankton through a series of questions, ultimately revealing that marine phytoplankton is the answer to all questions. This interactive element helps engage visitors and educate them about the product.

## Implementation Steps

### 1. Basic Quiz Setup (Using Theme Section)

The theme includes a pre-built quiz section (`quiz.liquid`) that can be added to any page. To use this:

1. Go to **Online Store > Themes > Customize**
2. Select the page where you want to add the quiz (typically the homepage)
3. Click **Add section > Quiz Section**
4. Configure the section settings:
   - Heading: "The Time Machine Discovery"
   - Subheading: "But first....some questions. See how many answers you know"
   - Answer Heading: "The answer is...."
   - Answer: "Marine Phytoplankton"
   - Answer Description: "A Canadian company discovered it for human nutrition, and perfected its growing."

5. Add questions by clicking **Add block > Question** for each question:
   - Question 1: "What is the Base Food on the planet?"
   - Question 2: "What is the smallest plant life on Earth?"
   - Question 3: "What is the most abundant plant life on Earth?"
   - Question 4: "What does NASA call The Most Important Plant Life?"
   - Question 5: "What food supports the ENTIRE OCEAN that includes whales?"
   - Question 6: "What provides Earth the majority of oxygen?"
   - Question 7: "What is the origin source of LIFE, FOOD, & NUTRITION?"

### 2. Enhanced Interactive Quiz (Custom Implementation)

For a more interactive quiz experience, you can implement a custom quiz using JavaScript:

1. Create a new section file `interactive-quiz.liquid` in the `sections` folder:

```liquid
<section class="py-16 bg-green-50 border-t-4 border-b-4 border-green-800">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center text-green-800 mb-6 font-cursive">
      {{ section.settings.heading }}
    </h2>
    <p class="text-xl text-center mb-12">{{ section.settings.subheading }}</p>
    
    <form id="quiz-form" class="max-w-4xl mx-auto">
      <div class="grid md:grid-cols-2 gap-8">
        {% for block in section.blocks %}
          {% if block.type == 'question' %}
            <div class="bg-white p-6 rounded-lg shadow-md border-2 border-green-800 transform hover:scale-105 transition">
              <h3 class="text-xl font-bold text-green-800 mb-3">Question {{ forloop.index }}</h3>
              <p class="text-lg mb-4">{{ block.settings.question }}</p>
              <input type="text" class="quiz-input w-full p-3 border-2 border-amber-200 rounded-lg focus:border-green-800 focus:ring focus:ring-green-200 focus:ring-opacity-50" placeholder="Your answer...">
            </div>
          {% endif %}
        {% endfor %}
      </div>
      
      <div class="text-center mt-8">
        <button type="submit" class="px-8 py-3 bg-green-800 text-white rounded-full font-bold hover:bg-green-700 transform transition hover:scale-105">
          Check Answers
        </button>
      </div>
    </form>
    
    <div id="quiz-result" class="max-w-2xl mx-auto mt-12 bg-amber-200 p-8 rounded-lg border-2 border-green-800 text-center hidden">
      <h3 class="text-3xl font-bold text-green-800 mb-6">{{ section.settings.answer_heading }}</h3>
      <div class="inline-block bg-green-800 text-white text-3xl font-bold py-3 px-8 rounded-lg transform rotate-1">
        {{ section.settings.answer }}
      </div>
      <p class="mt-6 text-lg">
        {{ section.settings.answer_description }}
      </p>
      
      {% if section.settings.show_cta %}
        <div class="mt-8">
          <a href="{{ section.settings.cta_link }}" class="inline-block px-6 py-3 bg-amber-400 text-green-800 rounded-full font-bold hover:bg-amber-300 transform transition hover:scale-105">
            {{ section.settings.cta_text }}
          </a>
        </div>
      {% endif %}
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');
    const quizInputs = document.querySelectorAll('.quiz-input');
    
    if (quizForm && quizResult) {
      quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Check if at least half of the questions have been answered
        let answeredCount = 0;
        quizInputs.forEach(input => {
          if (input.value.trim() !== '') {
            answeredCount++;
          }
        });
        
        if (answeredCount >= quizInputs.length / 2) {
          // Show the result
          quizResult.classList.remove('hidden');
          quizResult.scrollIntoView({ behavior: 'smooth' });
          
          // Highlight correct answers
          quizInputs.forEach(input => {
            const answer = input.value.trim().toLowerCase();
            if (answer.includes('phytoplankton') || answer.includes('marine') || answer.includes('plankton')) {
              input.classList.add('border-green-500', 'bg-green-50');
            } else {
              input.classList.add('border-amber-500');
            }
          });
        } else {
          // Prompt user to answer more questions
          alert('Please try to answer at least ' + Math.ceil(quizInputs.length / 2) + ' questions before checking your answers.');
        }
      });
    }
  });
</script>

{% schema %}
{
  "name": "Interactive Quiz",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "The Time Machine Discovery"
    },
    {
      "type": "text",
      "id": "subheading",
      "label": "Subheading",
      "default": "But first....some questions. See how many answers you know"
    },
    {
      "type": "text",
      "id": "answer_heading",
      "label": "Answer Heading",
      "default": "The answer is...."
    },
    {
      "type": "text",
      "id": "answer",
      "label": "Answer",
      "default": "Marine Phytoplankton"
    },
    {
      "type": "textarea",
      "id": "answer_description",
      "label": "Answer Description",
      "default": "A Canadian company discovered it for human nutrition, and perfected its growing."
    },
    {
      "type": "checkbox",
      "id": "show_cta",
      "label": "Show CTA Button",
      "default": true
    },
    {
      "type": "text",
      "id": "cta_text",
      "label": "CTA Button Text",
      "default": "Learn More About Karen Phytoplankton"
    },
    {
      "type": "url",
      "id": "cta_link",
      "label": "CTA Button Link",
      "default": "/products/karen-phytoplankton"
    }
  ],
  "blocks": [
    {
      "type": "question",
      "name": "Question",
      "settings": [
        {
          "type": "text",
          "id": "question",
          "label": "Question",
          "default": "What is the Base Food on the planet?"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Interactive Quiz",
      "category": "Custom",
      "blocks": [
        {
          "type": "question"
        },
        {
          "type": "question"
        },
        {
          "type": "question"
        },
        {
          "type": "question"
        }
      ]
    }
  ]
}
{% endschema %}
```

2. Add this section to your homepage or any other page

### 3. Advanced Quiz with Progress Tracking

For an even more advanced quiz experience with progress tracking and animations:

1. Create a new JavaScript file `quiz.js` in the `assets` folder:

```javascript
class KarenQuiz {
  constructor() {
    this.quizForm = document.getElementById('quiz-form');
    this.quizResult = document.getElementById('quiz-result');
    this.quizInputs = document.querySelectorAll('.quiz-input');
    this.progressBar = document.getElementById('quiz-progress');
    this.currentProgress = 0;
    this.questionCount = this.quizInputs.length;
    this.correctAnswer = 'marine phytoplankton';
    
    this.init();
  }
  
  init() {
    if (!this.quizForm || !this.quizResult) return;
    
    // Initialize progress bar
    this.updateProgress();
    
    // Add input event listeners
    this.quizInputs.forEach(input => {
      input.addEventListener('input', () => this.handleInput());
    });
    
    // Add form submit event
    this.quizForm.addEventListener('submit', (e) => this.handleSubmit(e));
  }
  
  handleInput() {
    // Count filled inputs
    let filledCount = 0;
    this.quizInputs.forEach(input => {
      if (input.value.trim() !== '') {
        filledCount++;
      }
    });
    
    // Update progress
    this.currentProgress = (filledCount / this.questionCount) * 100;
    this.updateProgress();
    
    // Auto-reveal answer if all questions are answered
    if (filledCount === this.questionCount) {
      setTimeout(() => {
        this.revealAnswer();
      }, 500);
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.revealAnswer();
  }
  
  revealAnswer() {
    // Show the result
    this.quizResult.classList.remove('hidden');
    this.quizResult.scrollIntoView({ behavior: 'smooth' });
    
    // Add animation class
    this.quizResult.classList.add('animate-reveal');
    
    // Check answers
    this.quizInputs.forEach(input => {
      const answer = input.value.trim().toLowerCase();
      if (answer.includes('phytoplankton') || answer.includes('marine') || answer.includes('plankton')) {
        input.classList.add('border-green-500', 'bg-green-50');
        input.parentElement.classList.add('correct-answer');
      } else {
        input.classList.add('border-amber-500');
      }
      
      // Disable inputs
      input.disabled = true;
    });
  }
  
  updateProgress() {
    if (this.progressBar) {
      this.progressBar.style.width = `${this.currentProgress}%`;
      
      // Update color based on progress
      if (this.currentProgress < 30) {
        this.progressBar.classList.remove('bg-amber-400', 'bg-green-500');
        this.progressBar.classList.add('bg-amber-200');
      } else if (this.currentProgress < 70) {
        this.progressBar.classList.remove('bg-amber-200', 'bg-green-500');
        this.progressBar.classList.add('bg-amber-400');
      } else {
        this.progressBar.classList.remove('bg-amber-200', 'bg-amber-400');
        this.progressBar.classList.add('bg-green-500');
      }
    }
  }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  new KarenQuiz();
});
```

2. Add the following CSS to your `karen-custom.css` file:

```css
/* Quiz Styles */
.quiz-progress-container {
  height: 8px;
  background-color: #f5e6c4;
  border-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;
}

.quiz-progress-bar {
  height: 100%;
  width: 0;
  transition: width 0.5s ease;
}

.quiz-input {
  transition: all 0.3s ease;
}

.quiz-input:focus {
  transform: scale(1.02);
}

.correct-answer {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1) rotate(1deg);
  }
  50% {
    transform: scale(1.03) rotate(1deg);
  }
  100% {
    transform: scale(1) rotate(1deg);
  }
}

.animate-reveal {
  animation: reveal 0.8s ease-out;
}

@keyframes reveal {
  0% {
    opacity: 0;
    transform: translateY(20px) rotate(1deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(1deg);
  }
}
```

3. Update your `interactive-quiz.liquid` section to include the progress bar and link to the new JavaScript file:

```liquid
<!-- Add this after the subheading -->
<div class="quiz-progress-container max-w-4xl mx-auto mb-8">
  <div id="quiz-progress" class="quiz-progress-bar bg-amber-200"></div>
</div>

<!-- Add this at the end of the file -->
{{ 'quiz.js' | asset_url | script_tag }}
```

## Customization Options

### Quiz Questions

You can customize the quiz questions in the theme editor:

1. Go to **Online Store > Themes > Customize**
2. Select the page with the quiz section
3. Click on the quiz section
4. Add, remove, or edit questions using the block controls

### Visual Styling

To customize the visual appearance:

1. Edit the `karen-custom.css` file to modify:
   - Colors
   - Animations
   - Spacing
   - Typography

2. Update the section template to change the layout or structure

### Functionality

To modify the quiz behavior:

1. Edit the JavaScript file to change:
   - Answer validation logic
   - Progress tracking
   - Animations and transitions
   - Result display

## Best Practices

1. **Keep questions simple**: Use clear, straightforward questions that lead to the same answer
2. **Limit the number of questions**: 5-7 questions is ideal to maintain engagement
3. **Provide hints**: Consider adding hint text to guide users toward the correct answer
4. **Make it educational**: Ensure the quiz teaches visitors about phytoplankton
5. **Connect to products**: Link the quiz results to product pages to drive conversions

## Troubleshooting

### Common Issues

1. **Quiz not showing**: Ensure the section is added to the page and published
2. **JavaScript errors**: Check browser console for errors and verify script paths
3. **Styling issues**: Inspect elements to identify CSS conflicts
4. **Mobile display problems**: Test on various devices and adjust responsive styling

### Support

If you encounter issues with the quiz implementation, contact:
- Email: support@karenphytoplankton.com
- Phone: 1-800-KAREN-PH
