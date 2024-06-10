const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
});

document.querySelectorAll('.nav-link, .dropdown-item').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const contentId = event.target.getAttribute('data-content');
    document.querySelectorAll('#content section').forEach(section => {
      section.classList.add('d-none');
    });
    document.getElementById(contentId).classList.remove('d-none');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const clientsLogos = document.querySelector('.clients-logos');
  let scrollSpeed = 1;
  let scrollInterval;

  function startScrolling() {
    scrollInterval = setInterval(function() {
      clientsLogos.scrollLeft += scrollSpeed;
      if (clientsLogos.scrollLeft >= clientsLogos.scrollWidth - clientsLogos.clientWidth) {
        clientsLogos.scrollLeft = 0;
      }
    }, 20);
  }

  function stopScrolling() {
    clearInterval(scrollInterval);
  }

  clientsLogos.addEventListener('mouseenter', stopScrolling);
  clientsLogos.addEventListener('mouseleave', startScrolling);

  startScrolling();
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn-group .btn');
  const serviceContents = document.querySelectorAll('.service-content');

  function showService(contentId) {
    serviceContents.forEach(content => {
      if (content.id === contentId) {
        content.classList.remove('d-none');
      } else {
        content.classList.add('d-none');
      }
    });
  }

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const contentId = this.getAttribute('data-content');
      showService(contentId);
    });
  });

  // Show default service content (Web Development)
  showService('service1');
});

// Typing effect code
const items = [
  'Innovate.',
  'Integrate.',
  'Elevate.',
  'Experience the Future of Tech',
  'with Tavishi.tech'
];
const app = document.getElementById('app');
let count = 0;
let index = 0;

let typingEffect = () => {
  let text = items[index];
  if (count < text.length) {
    setTimeout(() => {
      app.innerHTML += text[count];
      count++;
      typingEffect();
    }, Math.floor(Math.random() * 100));
  } else {
    count = 0;
    index = (index + 1 < items.length) ? index + 1 : 0;
    setTimeout(() => {
      app.innerHTML = '';
      typingEffect();
    }, 1500);
  }
};

typingEffect();
// Get Qoute
document.getElementById('quote-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  var formData = new FormData(this);
  // Send the data using fetch API
  fetch('https://script.google.com/macros/s/AKfycbxeh69rPidX1Scmm-Smk9kqnETFOFbLIXkH54txb4T3pGyjNFJXYRFa7kgl05eHSY52/exec', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      // Display the success message
      document.getElementById('success-message').classList.remove('d-none'); 
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
function openForm(jobTitle, companyName) {
  document.getElementById("jobTitle").value = jobTitle;
  document.getElementById("companyName").value = companyName;
  document.getElementById("myForm").style.display = "block";
  window.location.hash = "#myForm";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  window.location.hash = "";
}

document.querySelectorAll('.apply-btn').forEach(button => {
  button.addEventListener('click', function() {
      const jobTitle = this.closest('.card').querySelector('.jobTitle').textContent;
      const companyName = this.closest('.card').querySelector('.companyName').textContent;
      openForm(jobTitle, companyName);
  });
});
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  var formData = new FormData(this);
 

  fetch('https://script.google.com/macros/s/AKfycbynpb5b57YNs9SeuJ7nZMcNcAAA4wzCXwW-BF8cx4D4FeqbvwRiec3o2QdpsE40eZdw/exec', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      // Display the success message
      document.getElementById('success-message').classList.remove('d-none'); 
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
