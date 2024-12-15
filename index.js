/// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = this.email.value;
    const password = this.password.value;

    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate a successful login
    console.log('Logging in with:', { email, password });
    alert('Login successful!'); // Simulate success

    // Hide the login container and show the main content
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Reset the form fields
});