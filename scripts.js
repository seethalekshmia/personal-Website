// JavaScript for form submission handling (if needed in future)
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you, ${name}! We will contact you at ${email}.`);
});
