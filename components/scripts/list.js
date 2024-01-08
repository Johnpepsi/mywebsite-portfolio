// Projects information
let projects = [
    {
        id: 1,
        title: "Contacts Application",
        subtitle: "I learned to use calling the Properties, using array in such a clean code, also by importing JSX file in the right path of components. This practice I worked on were implemented and built in https://codesandbox.io/p/sandbox/react-new. I learned utilizing such as the Properties, array in very clean code, also by importing JSX file in the right path of components.",
        imgSrc: "./components/assets/Contact-list.png",
        repoLink: "https://github.com/Johnpepsi/ContactsExercise-React.JS",
        techStack: ["JavaScript", "React.JS", "JSX"]
    },

    {
        id: 2,
        title: "Scanner QR GitHub",
        subtitle: "Here is my first QR-Image project where I implemented my URL link from GitHub. I used tools such as NPM module, JavaScript, Git bash scripting. By implementing the right command tools, I successfully made QR to prompt my personal website. I also had to use the qr-image npm package to turn the user entered URL into a QR Code image.",
        imgSrc: "./components/assets/Scan-QR project.png",
        repoLink: "https://github.com/Johnpepsi/Attendance-System-QR",
        techStack: ["DOM, JavaScript, MongoDB, NPM, EJS, React"]
    },


    {
        id: 3,
        title: "Portfolio Website",
        subtitle: "Here is my very own portfolio website which contains my personal and contact information. The website is hosted online cloud platform hosting service where I utilized vercel for my all personal stuff. I learned implementing code in such as a clean code and more organized folder for using React.JS.",
        imgSrc: "./Components/assets/portfolio.png",
        repoLink: "https://github.com/Johnpepsi/mywebsite-portfolio",
        techStack: ["HTML5", "CSS3", "JavaScript (ES6), NPM, DOM"]
    }

]

// Fetching all the elements
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");
const projectsDisplay = document.getElementById("projects-display");

// ========== Configuring about page tabs section ==========
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {

    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// ========== Rendering projects dynamically ==========
projectsDisplay.innerHTML = "";
projects.forEach((project) => {
    projectsDisplay.innerHTML += `<div class="col-lg-6 col-xl-4 my-4">
        <div class="card h-100 mx-3" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
            <img class="card-img-top mx-auto" src="${project.imgSrc}" alt="Project Image">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <h6 class="card-subtitle mb-2">${project.subtitle}</h6>
                <h6 class="card-subtitle tech-stack mb-2">Tech Stack: </h6><h6 class="card-subtitle tech-stack-content mb-2">${project.techStack.map(x => `<span>${x}</span>`).join(", ")}</h6>
                <p class="card-text text-muted"><a href="${project.repoLink}" target="_blank"><i class="uil uil-github"></i></a></p>
            </div>
        </div>
    </div>`;
})

// ========== FORM VALIDATION ==========
let error = false;

function validateForm() {
    clearMessages();

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        error = true;
    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid Email";
        emailInput.classList.add("error-border");
        error = true;
    }

    if (messageInput.value.length < 1) {
        errorNodes[2].innerText = "Please enter a message";
        messageInput.classList.add("error-border");
        error = true;
    }
}

// Clear error messages
function clearMessages() {
    error = false;
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    messageInput.classList.remove("error-border");
}

// Checks whether an entered email is valid
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

document.getElementById("contact-form").onsubmit = function(e) {
    validateForm();
    if (!error) {
        return true;
    } else {
        e.preventDefault();
    }
}

// ========== Configuring typing animation ===========
var typed = new Typed(".auto-type", {
    strings: ['i0s Mobile Developer', 'Full-Stack Web Developer'],
    typeSpeed: 60,
    backSpeed: 80,
    loop: true,
    showCursor: false
});
