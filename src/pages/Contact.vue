<template>
    <div class="contact-page">
      <!-- Contact Card -->
      <div class="contact-card">
        <!-- Header -->
        <div class="contact-header">
          <h1>Contact Us</h1>
          <p>Have a question or want to collaborate? Drop us a message.</p>
        </div>
  
        <!-- Contact Form -->
        <form id="contact-form" class="contact-fields">
          <input type="hidden" name="contact_number" value="697483" />
  
          <div class="form-group">
            <label for="name">Your Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              v-model.trim="formData.from_name"
              placeholder="John Doe"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model.trim="formData.email"
              placeholder="john.doe@example.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              v-model.trim="formData.message"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Send Message"
              class="submit-button"
              :class="{ disabled: !isValidInput }"
            />
          </div>
        </form>
  
        <!-- Alternative Contact -->
        <div class="alternative-contact">
          <p>Prefer another way to reach us?</p>
          <a href="mailto:mapacherama@gmail.com">mapacherama@gmail.com</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import emailjs from '@emailjs/browser';
  
  const formData = ref({
    from_name: '',
    email: '',
    message: ''
  });
  
  // Helper function to validate email addresses
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Computed property to check if the form is valid
  const isValidInput = computed(() => {
    const { from_name, email, message } = formData.value;
    return (
      from_name.length > 0 &&
      email.length > 0 &&
      message.length > 0 &&
      isValidEmail(email)
    );
  });
  
  // Initialize EmailJS with your public key from environment variables
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  onMounted(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  
    // Handle the form submission
    const form = document.getElementById('contact-form') as HTMLFormElement;
    form?.addEventListener('submit', function (event) {
      event.preventDefault();
      emailjs
        .sendForm('service_man5hgm', 'template_xjkzfsn', form)
        .then(() => {
          alert('Message sent successfully!');
          // Reset form data
          formData.value = { from_name: '', email: '', message: '' };
        })
        .catch((error) => {
          console.error('Error sending message:', error);
          alert('Failed to send message. Please try again.');
        });
    });
  });
  </script>
  
  <style scoped>
  /* Main Page */
  .contact-page {
    background-color: black;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: fadeIn 0.8s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  /* Contact Card */
  .contact-card {
    background-color: #333;
    color: #eee;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    padding: 20px;
    max-width: 400px;
    width: 100%;
    text-align: center;
  }
  
  /* Header */
  .contact-header h1 {
    font-size: 2rem;
    color: #e53e3e;
    margin-bottom: 10px;
  }
  
  .contact-header p {
    font-size: 1rem;
    color: #eee;
    margin-bottom: 20px;
  }
  
  /* Form Fields */
  .contact-fields .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  .contact-fields label {
    font-size: 0.9rem;
    color: #e53e3e;
    display: block;
    margin-bottom: 5px;
  }
  
  .contact-fields input,
  .contact-fields textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #e53e3e;
    border-radius: 8px;
    background-color: #444;
    color: #eee;
    outline: none;
    transition: border-color 0.3s;
  }
  
  .contact-fields input:focus,
  .contact-fields textarea:focus {
    border-color: #ff4a4a;
  }
  
  .contact-fields textarea {
    resize: none;
  }
  
  /* Submit Button */
  .submit-button {
    width: 100%;
    padding: 10px 15px;
    font-size: 1rem;
    color: white;
    background-color: #e53e3e;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #ff4a4a;
  }
  
  .submit-button.disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.7;
  }
  
  /* Alternative Contact */
  .alternative-contact {
    margin-top: 20px;
  }
  
  .alternative-contact p {
    font-size: 0.9rem;
    color: #eee;
  }
  
  .alternative-contact a {
    color: #ff4a4a;
    text-decoration: none;
    font-size: 0.9rem;
  }
  
  .alternative-contact a:hover {
    text-decoration: underline;
  }
  </style>
  