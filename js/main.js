/* ==========================================================================
   MIXD — SITE JAVASCRIPT
   ==========================================================================
   This file adds three small pieces of behaviour to every page:
     1. The hamburger menu on phones
     2. Sections fading in as you scroll
     3. The contact form showing a "thanks" message

   You do NOT need to edit this file to change any text or colours.
   Text lives in the .html files. Colours live in css/style.css.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------------
     1. MOBILE MENU
     On phones the nav links are hidden until the ☰ button is tapped.
     ------------------------------------------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.textContent = isOpen ? '✕' : '☰';   /* ✕ or ☰ */
    });
  }


  /* ------------------------------------------------------------------
     2. FADE-IN ON SCROLL
     Any element with class="reveal" fades up when it enters the screen.
     To make a new section animate, just add  class="reveal"  to it.
     ------------------------------------------------------------------ */
  var revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);   /* only animate once */
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    /* Very old browsers: just show everything straight away */
    revealItems.forEach(function (item) { item.classList.add('visible'); });
  }


  /* ------------------------------------------------------------------
     3. CONTACT FORM
     This is a school project, so there is no server to receive messages.
     The form shows a confirmation message instead of actually sending.

     TO MAKE IT REALLY SEND EMAIL: sign up at https://formspree.io (free),
     then in contact.html change the <form> tag to:
       <form action="https://formspree.io/f/YOUR-ID" method="POST">
     and delete this whole section 3.
     ------------------------------------------------------------------ */
  var form = document.querySelector('#contact-form');
  var note = document.querySelector('#form-note');

  if (form && note) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();          /* stop the page reloading */
      note.classList.add('show');
      form.reset();
      note.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }


  /* ------------------------------------------------------------------
     4. FOOTER YEAR
     Fills in the current year automatically so the footer never goes stale.
     ------------------------------------------------------------------ */
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

});
