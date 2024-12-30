document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const submittedInfo = document.getElementById('submittedInfo');
    const submittedText = document.getElementById('submittedText');
    const conditionDetailsGroup = document.getElementById('conditionDetailsGroup');
    const conditionDetails = document.getElementById('conditionDetails');
    const medicalConditionRadios = document.getElementsByName('medicalCondition');
  
    // Show/hide condition details based on medical condition radio buttons
    medicalConditionRadios.forEach((radio) => {
      radio.addEventListener('change', () => {
        if (radio.value === 'Yes' && radio.checked) {
          conditionDetailsGroup.style.display = 'block';
        } else {
          conditionDetailsGroup.style.display = 'none';
        }
      });
    });
  
    // Form submission event listener
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission
  
      // Clear previous errors
      document.querySelectorAll('.error').forEach((error) => (error.textContent = ''));
  
      // Validate form
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const country = document.getElementById('country').value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const medicalCondition = document.querySelector('input[name="medicalCondition"]:checked');
      const conditionText = conditionDetails.value.trim();
  
      let isValid = true;
  
      if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
      }
  
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required.';
        isValid = false;
      }
  
      if (!country) {
        document.getElementById('countryError').textContent = 'Country is required.';
        isValid = false;
      }
  
      if (!gender) {
        document.getElementById('genderError').textContent = 'Gender is required.';
        isValid = false;
      }
  
      if (!medicalCondition) {
        document.getElementById('medicalConditionError').textContent = 'Please select an option.';
        isValid = false;
      } else if (medicalCondition.value === 'Yes' && !conditionText) {
        document.getElementById('conditionDetailsError').textContent = 'Please specify the condition.';
        isValid = false;
      }
  
      if (!isValid) return;
  
      // Display submitted information
      submittedInfo.style.display = 'block';
      submittedText.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Country:</strong> ${country}<br>
        <strong>Gender:</strong> ${gender.value}<br>
        <strong>Medical Condition:</strong> ${
          medicalCondition.value === 'Yes' ? conditionText : 'None'
        }
      `;
  
      // Clear the form (Optional)
      form.reset();
      conditionDetailsGroup.style.display = 'none';
    });
  });
  
    // page linking section 
    function goToForm() {
        window.location.href = "responsiveGrid-2.html";
      }  

      function goBackToFirstPage() {
        window.location.href = 'index.html';
      }

