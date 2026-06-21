/* ───── Khadiza AI — Main JS ───── */

/* ═══ Navbar Scroll Effect ═══ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ═══ Hamburger Menu ═══ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close menu when link clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity   = '';
    });
  });
});

/* ═══ Intersection Observer Animations ═══ */
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => animObserver.observe(el));

/* ═══ Counter Animation ═══ */
function animateCount(el, target, suffix) {
  let current = 0;
  const duration = 1600;
  const step     = target / (duration / 16);
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = Math.round(current);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('[data-count]');
      nums.forEach(num => {
        animateCount(num, parseInt(num.dataset.count), '');
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) counterObserver.observe(statsEl);

/* ═══ Chat Interaction ═══ */
const chatMessages  = document.getElementById('chat-messages');
const chatInput     = document.getElementById('chat-input');
const chatSendBtn   = document.getElementById('chat-send');
const quickReplies  = document.getElementById('quick-replies');

// AI responses database
const aiResponses = {
  default: [
    "That's a great question! Let me check that for you right away. 😊",
    "I'd love to help with that! Can you tell me a little more about what you're looking for?",
    "Excellent choice! I have just the thing for you. Let me pull up the details. 🛍️",
    "Thanks for asking! Based on what you've told me, I think I have the perfect recommendation.",
  ],
  product: [
    "Our best-selling product today is the ProSound Elite Headphones! 🎧 Premium noise-cancelling with 30-hour battery life. Only ৳8,500 (was ৳12,000). Want me to reserve a pair?",
    "I'd recommend our Evergreen Luxury Soy Candle — it's been our #1 bestseller for 3 months! 🕯️ Made from pure soy wax with a wooden wick. Just ৳2,200.",
    "If you're into lifestyle products, our চা বাগান Premium Organic Tea is absolutely incredible. Direct from Sylhet gardens. Only ৳950 for a full tin! 🍵",
  ],
  delivery: [
    "We offer free nationwide delivery on all orders over ৳1,000! 🚚 Dhaka deliveries take 1-2 days, and other divisions take 2-4 days. We ship via Pathao, Paperfly, and Steadfast.",
    "Great news! Free delivery is available nationwide. Same-day delivery is available in Dhaka for orders placed before 12 PM. Cash on Delivery is also accepted!",
  ],
  discount: [
    "You're in luck! 🏷️ We currently have up to 35% off on all products. Use code KHADIZA10 for an extra 10% off your first order!",
    "We have some amazing deals right now! Check out our sale items — headphones at 30% off, candles at 27% off, and the smart water bottle at 28% off. Limited time only! ⚡",
  ],
  bengali: [
    "আস্সালামু আলাইকুম! আমি খাদিজা, আপনার AI শপিং সহকারী। আমি কিভাবে আপনাকে সাহায্য করতে পারি? 😊",
    "নমস্কার! আজকের সেরা অফার হলো — ProSound হেডফোন মাত্র ৳৮,৫০০ তে। আগ্রহী হলে বলুন! 🎧",
  ],
  greeting: [
    "Hello there! 👋 Great to have you here. I'm Khadiza, your personal shopping assistant. What can I help you find today?",
    "Hi! Welcome to our store! 😊 I'm here to help you discover amazing products and get the best deals. What are you looking for?",
  ],
};

function getAIResponse(msg) {
  const lower = msg.toLowerCase();
  if (lower.match(/best|top|recommend|popular|produc/)) return pick(aiResponses.product);
  if (lower.match(/deliver|ship|days|fast|quick/))      return pick(aiResponses.delivery);
  if (lower.match(/discount|sale|offer|deal|code|coupon|cheap/)) return pick(aiResponses.discount);
  if (lower.match(/নমস্কার|আমাকে|আস্সালামু|বাংলা|hello.*বাং/i)) return pick(aiResponses.bengali);
  if (lower.match(/hello|hi|hey|good/))                 return pick(aiResponses.greeting);
  return pick(aiResponses.default);
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function getTime() {
  return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function createUserMsg(text) {
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.innerHTML = `<div class="msg-bubble"><p>${escHtml(text)}</p><span class="msg-time">${getTime()}</span></div>`;
  return div;
}

function createTypingIndicator() {
  const div = document.createElement('div');
  div.className = 'chat-msg ai typing-wrap';
  div.innerHTML = `
    <img src="stitch_khadiza_ai_social_commerce_representative/3d_rendered_character_portrait_of_a_young_bengali_woman_named_khadiza_matching_2/screen.png" alt="Khadiza" class="msg-avatar" />
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>`;
  return div;
}

function createAIMsg(text) {
  const div = document.createElement('div');
  div.className = 'chat-msg ai';
  div.innerHTML = `
    <img src="stitch_khadiza_ai_social_commerce_representative/3d_rendered_character_portrait_of_a_young_bengali_woman_named_khadiza_matching_2/screen.png" alt="Khadiza" class="msg-avatar" />
    <div class="msg-bubble"><p>${text}</p><span class="msg-time">${getTime()}</span></div>`;
  return div;
}

function escHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function scrollChat() {
  chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
}

function sendMessage(text) {
  if (!text.trim()) return;

  // Hide quick replies after first use
  quickReplies.style.display = 'none';

  // Add user message
  chatMessages.appendChild(createUserMsg(text));
  scrollChat();
  chatInput.value = '';

  // Add typing indicator
  const typing = createTypingIndicator();
  chatMessages.appendChild(typing);
  scrollChat();

  // Simulate AI response delay
  setTimeout(() => {
    chatMessages.removeChild(typing);
    const response = getAIResponse(text);
    chatMessages.appendChild(createAIMsg(response));
    scrollChat();
  }, 1200 + Math.random() * 800);
}

chatSendBtn.addEventListener('click', () => sendMessage(chatInput.value));
chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(chatInput.value); });

// Global function for quick replies
window.sendQuickReply = function(text) {
  chatInput.value = text;
  sendMessage(text);
};

/* ═══ Cart Toast Notification ═══ */
const toast = document.getElementById('cart-toast');
let toastTimer = null;

function showToast() {
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

document.querySelectorAll('.btn-add-cart').forEach(btn => {
  btn.addEventListener('click', function() {
    const origText = this.innerHTML;
    this.innerHTML = `<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Added!`;
    this.style.background = 'var(--primary)';
    this.style.color      = 'white';
    this.style.borderColor = 'var(--primary)';
    showToast();
    setTimeout(() => {
      this.innerHTML   = origText;
      this.style.background = '';
      this.style.color      = '';
      this.style.borderColor = '';
    }, 2000);
  });
});

/* ═══ Wishlist Toggle ═══ */
document.querySelectorAll('.product-wishlist').forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
    this.textContent = this.classList.contains('active') ? '♥' : '♡';
  });
});

/* ═══ FAB Chat Button ═══ */
document.getElementById('fab-chat').addEventListener('click', () => {
  document.getElementById('chat').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => chatInput.focus(), 800);
});

/* ═══ Newsletter Submit ═══ */
const newsletterBtn = document.getElementById('newsletter-submit');
const newsletterEmail = document.getElementById('newsletter-email');

newsletterBtn.addEventListener('click', () => {
  const email = newsletterEmail.value.trim();
  if (!email || !email.includes('@')) {
    newsletterEmail.style.borderColor = '#ef4444';
    setTimeout(() => newsletterEmail.style.borderColor = '', 2000);
    return;
  }
  newsletterBtn.textContent = '✓ Subscribed!';
  newsletterBtn.style.background = '#22c55e';
  newsletterEmail.value = '';
  setTimeout(() => {
    newsletterBtn.textContent = 'Subscribe';
    newsletterBtn.style.background = '';
  }, 3000);
});

newsletterEmail.addEventListener('keydown', e => {
  if (e.key === 'Enter') newsletterBtn.click();
});

/* ═══ Smooth Active Nav Link ═══ */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

/* ═══ Active Nav Styling ═══ */
const style = document.createElement('style');
style.textContent = `.nav-link.active { color: var(--primary); background: rgba(55,85,52,0.1); }`;
document.head.appendChild(style);

/* ═══ Emoji button (demo) ═══ */
const emojis = ['😊', '🛍️', '🎧', '🕯️', '🍵', '💳', '🚚', '❤️', '⭐', '🎁'];
let emojiIdx = 0;
document.getElementById('emoji-btn').addEventListener('click', () => {
  const pos = chatInput.selectionStart;
  const val = chatInput.value;
  chatInput.value = val.slice(0, pos) + emojis[emojiIdx % emojis.length] + val.slice(pos);
  emojiIdx++;
  chatInput.focus();
  chatInput.selectionStart = chatInput.selectionEnd = pos + 2;
});

/* ═══ Parallax on Hero ═══ */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const blobs = document.querySelectorAll('.blob');
  blobs.forEach((blob, i) => {
    blob.style.transform = `translateY(${scrollY * (0.1 + i * 0.05)}px)`;
  });
});

/* ═══ Page Load Animation ═══ */
window.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });
});
