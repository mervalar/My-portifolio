 // Active link highlighting
 const sections = document.querySelectorAll('section');
 const navLinks = document.querySelectorAll('#links ul li a');
 const projects =document.getElementById("projects");
 window.addEventListener('scroll', () => {
     sections.forEach((section, index) => {
         const rect = section.getBoundingClientRect();
         if (rect.top <= 100 && rect.bottom >= 100) {
             navLinks.forEach(link => link.classList.remove('active'));
             navLinks[index].classList.add('active');
         }
     });
 });
 // CV Modal handling
 const resume = document.getElementById('resume');
 const cv = document.getElementById('cv');

 resume.addEventListener('click', (e) => {
     e.preventDefault();
     cv.style.display = 'block';
 });

 console.log("Mouse move event detected:");

 // Smooth scrolling
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

// sclorring 
window.addEventListener("scroll", function () {
    let section = document.querySelector("#projects");
    let progressIndicator = document.querySelector(".progress-indicator");
    let sectionTop = section.offsetTop;
    let sectionHeight = section.offsetHeight;
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;

    let progress = ((scrollPosition - sectionTop + windowHeight) / (sectionHeight + windowHeight)) * 100;
    progressIndicator.style.height = Math.min(100, Math.max(0, progress)) + "%";
});

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('mousemove', (e) => {
        // Remove any existing shadows
        const existingShadows = document.querySelectorAll('.mouse-shadow');
        existingShadows.forEach(shadow => shadow.remove());

        // Create new shadow
        const shadow = document.createElement('div');
        shadow.classList.add('mouse-shadow');
        
        // Set position
        shadow.style.position = 'fixed';
        shadow.style.left = `${e.clientX}px`;
        shadow.style.top = `${e.clientY}px`;
        
        // Append to body
        document.body.appendChild(shadow);

        // Optional: Remove after a short time
        setTimeout(() => {
            shadow.remove();
        }, 300);

        // Logging for debugging
        console.log('Mouse move detected:', e.clientX, e.clientY);
    });
});

 // Initialize EmailJS with your User ID
 emailjs.init("rhEFZSPTRbqjTQMT5"); // Replace with your EmailJS User ID
    
 // Handle form submission
 document.getElementById("emailForm").addEventListener("submit", function(event) {
     event.preventDefault();  // Prevent form default submission

     // Send email using EmailJS
     emailjs.send("service_69nri2j", "template_eiazwgx", {
         email: document.getElementById("email").value,
         message: document.getElementById("message").value
     }).then(function(response) {
         alert("Email sent successfully!");
     }, function(error) {
     console.error("Failed to send email:", error);  // Log error to the console for debugging
     alert("Failed to send email. Please check the console for more details.");
 });
 });
 