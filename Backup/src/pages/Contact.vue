<template>
  <div class="contact-page" :class="{ dark: isDark }">
    <div class="contact-card">
      <div class="contact-header">
        <h1>Contact Me</h1>
        <p>Have a question or want to collaborate? Drop me a message.</p>
      </div>

      <form id="contact-form" class="contact-fields">
        <input type="hidden" name="contact_number" value="697483" />

        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="from_name" name="from_name" v-model.trim="formData.from_name" placeholder="John Doe"
            required />
        </div>
        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="email" id="email" name="email" v-model.trim="formData.email" placeholder="john.doe@example.com"
            required />
        </div>
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" name="message" rows="4" v-model.trim="formData.message"
            placeholder="Type your message here..." required></textarea>
        </div>
        <div>
          <input type="submit" value="Send Message" class="submit-button" :class="{ disabled: !isValidInput }" />
        </div>
      </form>

      <div class="alternative-contact">
        <p>Prefer another way to reach me?</p>
        <a href="mailto:mapacherama@gmail.com">mapacherama@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import emailjs from '@emailjs/browser';

const isDark = ref(false);

const formData = ref({
  from_name: '',
  email: '',
  message: ''
});

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidInput = computed(() => {
  const { from_name, email, message } = formData.value;
  return from_name.length > 0 && email.length > 0 && message.length > 0 && isValidEmail(email);
});

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

onMounted(() => {
  
  emailjs.init(EMAILJS_PUBLIC_KEY);
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_man5hgm', 'template_xjkzfsn', form)
      .then(() => {
        alert('Message sent successfully!');
        formData.value = { from_name: '', email: '', message: '' };
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again.');
      });
  });
  const isDark = ref(false);

  const storedMode = localStorage.getItem('darkMode');
  if (storedMode !== null) {
    isDark.value = JSON.parse(storedMode);
  }
});

</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: background-color 0.3s, color 0.3s;
}

.contact-card {
  border-radius: 12px;
  padding: 25px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.contact-header h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.contact-header p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.contact-fields .form-group {
  margin-bottom: 15px;
  text-align: left;
}

.contact-fields label {
  font-size: 0.9rem;
  display: block;
  margin-bottom: 5px;
}

.contact-fields input,
.contact-fields textarea {
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
}

.submit-button {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button.disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.dark .contact-page {
  background-color: #121212;
  color: #ffffff;
}

.dark .contact-card {
  background-color: #1e1e1e;
  color: #ffffff;
}

.dark .contact-fields input,
.dark .contact-fields textarea {
  background: #333;
  color: #ffffff;
  border: 1px solid #555;
  width: calc(100% - 20px);
}

.dark .submit-button {
  background-color: #e53e3e;
  color: #ffffff;
}
</style>