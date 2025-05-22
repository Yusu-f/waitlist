// Form submission handling for Google Forms
document.addEventListener('DOMContentLoaded', function() {
  // Get all waitlist forms
  const waitlistForms = document.querySelectorAll('.waitlist-form');
  
  // Add event listener to each form
  waitlistForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get the form's parent section
      const parentSection = form.closest('.waitlist-section') || form.closest('.everyday-waitlist');
      
      // Get the success message div
      const successDiv = parentSection.querySelector('[id$="-success"]') || parentSection.querySelector('#form-success');
      
      // Get the email input
      const emailInput = form.querySelector('input[type="email"]');
      
      // Get the form action URL
      const formAction = form.getAttribute('action');
      
      // Create a new form data object
      const formData = new FormData();
      formData.append(emailInput.getAttribute('name'), emailInput.value);
      
      // Submit the form data to Google Forms
      fetch(formAction, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      })
      .then(() => {
        // Reset the form
        form.reset();
        
        // Show the success message
        if (successDiv) {
          successDiv.style.display = 'block';
          
          // Hide the success message after 5 seconds
          setTimeout(() => {
            successDiv.style.display = 'none';
          }, 5000);
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
    });
  });
}); 