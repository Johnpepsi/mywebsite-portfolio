// Projects information
let projects = [
    {
        id: 1,
        title: "Expense Tracker App",
        subtitle: "Expense Tracker is now easier and more insightful than ever thanks to our carefully crafted application, which offers customers a smooth and easy experience while tracking their spending. Ensuring clean and maintainable code was a priority. I followed Swift's best practices, documented my code comprehensively, and implemented automated testing to identify and rectify issues promptly.",
        imgSrc: "./components/assets/wallet-icon.png",
        repoLink: "https://github.com/Johnpepsi/expenseTracker",
        techStack: ["SwiftUI", "XCode", "Core Data"]
    },

    {
        id: 2,
        title: "QR-Attendance System",
        subtitle: "The QR System Project Documentation provides a comprehensive resource for understanding, implementing, and maintaining the QR System. It includes an introductory overview, details on system architecture, installation instructions, user and administrator guides, developer documentation, security measures, deployment procedures, troubleshooting tips, and guidelines for maintenance and updates. Appendices offer additional references, while a change log tracks documentation revisions",
        imgSrc: "./components/assets/QR-projects.png",
        repoLink: "https://github.com/Johnpepsi/Attendance-System-QR",
        techStack: ["DOM, JavaScript, MongoDB, NPM, EJS, React"]
    },


    {
        id: 3,
        title: "War Card Game",
        subtitle: "I developed this game as a practice. This is a card game built in Swift, it can be a fun and rewarding experience for anyone interested in game development. With its powerful and easy-to-use features, Swift is an ideal programming language for creating card games that are fast, reliable, and visually appealing.",
        imgSrc: "./components/assets/war-card.png",
        repoLink: "https://github.com/Johnpepsi/WarCardUI",
        techStack: ["SwiftUI, XCode, Testing, Core Data"]
    },

    {
        id: 4,
        title: "Meme kit",
        subtitle: "To facilitate future development or collaboration, I prepared detailed documentation for the project, including data models, view controllers, and API endpoints. This Funny Moment Memes Project that I created for fun by using tools such as NPM and DOM. This Project sharpened my skills to work with Document Object Model. DOM allows JavaScript to interact with, and manipulate, the content, structure, and style of the web page",
        imgSrc: "./components/assets/Meme-kit.png",
        repoLink: "https://github.com/Johnpepsi/my-memeKit",
        techStack: ["DOM, JavaScript, HTML5, CSS3, NPM"]
    },

    {
        id: 5,
        title: "Simon Challenge Game",
        subtitle: "This project involves developing an interactive game that enhances memory and pattern recognition skills. Users will engage with a digital interface consisting of four colored buttons: green, red, yellow, and blue. The game will generate a sequence of tones and lights, requiring the user to repeat the sequence by pressing the buttons in the correct order.",
        imgSrc: "./components/assets/Simon-chal.png",
        repoLink: "https://github.com/Johnpepsi/Simon-challenge",
        techStack: ["DOM, JavaScript, NPM, Soundkit"]
    },

    {
        id: 6,
        title: "Pokemon API Project",
        subtitle: "I managed to implement an API for fetching the Data through JavaScript in this project. I utilized this API website https://pokeapi.co/ by calling out pokemons. I also created audio to make it more fun by adding Sound button so if someone were interested they can look-up pokemon with nostalgic sound. Tools that I used in this project were NPM, JavaScript Vanilla, APis.",
        imgSrc: "./components/assets/Pokemon-apiproject.png",
        repoLink: "https://github.com/Johnpepsi/pokemon-search-api",
        techStack: ["HTML5", "CSS3", "JavaScript (ES6), NPM, APIs"]
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
