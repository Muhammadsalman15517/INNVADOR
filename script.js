//navbar
function toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle 'active' class to show/hide nav links
}



document.querySelectorAll('.dropdown li a').forEach(item => {
  item.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent the click from closing the dropdown
      // Here you can add any functionality you want when the link is clicked
  });
});

//phone
  function showInfo(info) {
    var infoText = {
        'info1': 'AASAANN is an app specially designed for Sabzi Mandi ARTI businesses, including traders and commission agents.',
        'info2': 'Ams is A cloud-based attendance management solution for the modern workplace.',
        'info3': 'Easy fee is A fee management system for schools, colleges, and universities.',
        'info4': 'EasyForms is a user-friendly tool that allows you to create and deploy forms quickly without any programming knowledge.',
        'info5': 'Hi360 is A cloud-based all-in-one HR solution.',
        'info6': 'iSchool is A Unlock a seamless learner journey from admission to alumni networking and beyond. Our complete education solution has you covered.',
        'info7': 'iSchool for Me is a complete and feature-rich mobile app for all educational institutes.',
        'info8': 'Iteam is The project management tool you need to plan and track work across every team.',
        'info9': 'Soul Whispers is a mobile app that leverages the power of AI to help you with unbiased diagnosis..'
    };
    document.getElementById('info-text').innerText = infoText[info];
}

//image

document.addEventListener('DOMContentLoaded', function () {
  const imageWrappers = document.querySelectorAll('.image-wrapper');
  const infoCard = document.getElementById('infoCard');
  const gap = 50; // Increase this value to increase the gap

  imageWrappers.forEach(wrapper => {
      wrapper.addEventListener('mouseover', function () {
          const info = wrapper.getAttribute('data-info');
          infoCard.innerText = info;
          const rect = wrapper.getBoundingClientRect();
          infoCard.style.top = `${rect.bottom + window.scrollY + gap}px`;
          infoCard.style.left = `${rect.left + window.scrollX}px`;
          infoCard.style.display = 'block';

          // Create or select the line element
          let line = document.querySelector('.line');
          if (!line) {
              line = document.createElement('div');
              line.classList.add('line');
              document.body.appendChild(line);
          }

          // Adjust line height to connect image and info card
          const lineHeight = infoCard.getBoundingClientRect().top - (rect.bottom + window.scrollY);
          line.style.height = `${lineHeight}px`;
          line.style.top = `${rect.bottom + window.scrollY}px`;
          line.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
          line.style.display = 'block';

          wrapper.addEventListener('mouseleave', function () {
              infoCard.style.display = 'none';
              line.style.display = 'none';
          });
      });
  });
});

//careers form
const form = document.getElementById("msform");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".previous");
const progressSteps = document.querySelectorAll(".progress-step");
const fieldsets = document.querySelectorAll("fieldset");
let currentStep = 0;

// Next button event
nextBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (currentStep === 0) {
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="pass"]').value;

            // Validate email and password
            if (!email || !password) {
                alert("Please fill in both your email and password.");
                return; // Stop the function if validation fails
            }
        }
        fieldsets[currentStep].classList.remove("active");
        progressSteps[currentStep].classList.remove("active");
        currentStep++;
        fieldsets[currentStep].classList.add("active");
        progressSteps[currentStep].classList.add("active");
    });
});

// Previous button event
prevBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        fieldsets[currentStep].classList.remove("active");
        progressSteps[currentStep].classList.remove("active");
        currentStep--;
        fieldsets[currentStep].classList.add("active");
        progressSteps[currentStep].classList.add("active");
    });
});

// Form submit event
form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    form.style.display = "none"; 
    alert("Form submitted successfully!");
});

// Specializations based on career
const specializations = {
    frontend: ["HTML - CSS - JS", "React JS", "Angular JS"],
    backend: ["Node.js", "Django", "Laravel"],
    fullstack: ["MERN Stack", "LAMP Stack"],
    mobiledev: ["iOS", "Android", "Flutter", "React Native", "Swift"],
    cms: ["WordPress", "Joomla", "Drupal"],
    sqa: ["Manual Testing", "Automation Testing", "Performance Testing"],
    uiux: ["UI Design", "UX Research", "Prototyping", "Wireframing"],
    bidder: ["Upwork", "Freelancer", "Fiverr"],
    digitalmarketing: ["SEO", "Social Media Marketing", "Content Marketing"],
    graphicdesign: ["Adobe Photoshop", "Illustrator", "CorelDRAW"],
    videoeditor: ["Filmora", "Premiere Pro", "Final Cut Pro"],
    animator: ["Maya", "Blender", "Cinema 4D"],
    datascience: ["Python", "R", "SQL", "Data Visualization"],
    ai: ["Machine Learning", "Deep Learning", "Neural Networks"],
    projectmanager: ["Agile", "Scrum", "Waterfall"],
    cybersecurity: ["Network Security", "Penetration Testing", "Incident Response"],
};

function updateSpecialization() {
    const career = document.getElementById("career").value;
    const specialization = document.getElementById("specialization");
    specialization.innerHTML = '<option value="">-Select-</option>';

    // Check if the career selected has specializations defined
    if (career && specializations[career]) {
        specializations[career].forEach(spec => {
            const option = document.createElement("option");
            option.value = spec.toLowerCase().replace(/\s+/g, '-');
            option.textContent = spec;
            specialization.appendChild(option);
        });

        // Automatically select the first specialization if available
        if (specialization.options.length > 1) { // Ensure there are more than just the default option
            specialization.selectedIndex = 1; // Select the first specialization
        }
    }
}

