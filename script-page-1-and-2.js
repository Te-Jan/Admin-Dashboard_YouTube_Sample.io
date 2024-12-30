const userForm = document.getElementById("userForm");
      const conditionDetailsGroup = document.getElementById(
        "conditionDetailsGroup"
      );
      const submittedInfo = document.getElementById("submittedInfo");
      const submittedText = document.getElementById("submittedText");

      userForm.addEventListener("change", (e) => {
        const medicalCondition = document.querySelector(
          'input[name="medicalCondition"]:checked'
        );
        if (medicalCondition && medicalCondition.value === "Yes") {
          conditionDetailsGroup.style.display = "block";
        } else {
          conditionDetailsGroup.style.display = "none";
        }
      });

      userForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        // Clear all errors
        document
          .querySelectorAll(".error")
          .forEach((error) => (error.textContent = ""));

        // Validate fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const country = document.getElementById("country").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const medicalCondition = document.querySelector(
          'input[name="medicalCondition"]:checked'
        );
        const conditionDetails = document
          .getElementById("conditionDetails")
          .value.trim();

        if (!name) {
          isValid = false;
          document.getElementById("nameError").textContent =
            "Name is required.";
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          isValid = false;
          document.getElementById("emailError").textContent =
            "Please provide a valid email.";
        }

        if (!country) {
          isValid = false;
          document.getElementById("countryError").textContent =
            "Please select a country.";
        }

        if (!gender) {
          isValid = false;
          document.getElementById("genderError").textContent =
            "Please select your gender.";
        }

        if (!medicalCondition) {
          isValid = false;
          document.getElementById("medicalConditionError").textContent =
            "Please select an option.";
        } else if (medicalCondition.value === "Yes" && !conditionDetails) {
          isValid = false;
          document.getElementById("conditionDetailsError").textContent =
            "Please specify your medical condition.";
        }

        if (isValid) {
          // Display submitted information
          submittedInfo.style.display = "block";
          submittedText.innerHTML = `
          <strong>Name:</strong> ${name}<br>
          <strong>Email:</strong> ${email}<br>
          <strong>Country:</strong> ${country}<br>
          <strong>Gender:</strong> ${gender.value}<br>
          <strong>Medical Condition:</strong> ${
            medicalCondition.value === "Yes" ? conditionDetails : "None"
          }
        `;
          userForm.reset();
          conditionDetailsGroup.style.display = "none";
        }
      });

    // page linking section 
    function goToForm() {
        window.location.href = "responsiveGrid-2.html";
      }  

      function goBackToFirstPage() {
        window.location.href = 'index.html';
      }

