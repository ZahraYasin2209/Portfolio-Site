// Word Splitting and Animation
const words = document.querySelectorAll(".word");
words.forEach((word) => {
    const letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});


let currentWordIndex = 0;
const maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

const changeText = () => {
    const currentWord = words[currentWordIndex];
    const nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);


// Hire Me Now Button Functionality
document.getElementById("hireMeBtn").addEventListener("click", function(event) {
    // Prevent the default action of the link (scrolling to #contact)
    event.preventDefault();

    // Scroll to the contact section
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });

    // Open the email client after scrolling
    setTimeout(function() {
        window.location.href = "mailto:zahrayasin2209@gmail.com?subject=Hire%20Me";
    }, 500); // Adjust delay time as needed
});



function toggleReadMore() {
    const briefContent = document.getElementById("about-brief");
    const fullContent = document.getElementById("about-full");
    const btn = document.getElementById("read-more-btn");

    if (fullContent.style.display === "none") {
        fullContent.style.display = "block";
        briefContent.style.display = "none";
        btn.textContent = "Read Less";
    } else {
        fullContent.style.display = "none";
        briefContent.style.display = "block";
        btn.textContent = "Read More";
    }
};



function toggleService(service) {
    const briefContent = document.getElementById(`${service}-brief`);
    const fullContent = document.getElementById(`${service}-full`);
    const btn = briefContent.closest('.service-box').querySelector('.btn');

    if (fullContent.style.display === "none" || fullContent.style.display === "") {
        fullContent.style.display = "block";
        briefContent.style.display = "none";
        btn.textContent = "Read Less";
    } else {
        fullContent.style.display = "none";
        briefContent.style.display = "block";
        btn.textContent = "Read More";
    }
}



// Circle Skill
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    const dots = elem.getAttribute("data-dots");
    const marked = elem.getAttribute("data-percent");
    const percent = Math.floor(dots * marked / 100);
    let points = "";
    const rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");

    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});



// Mix it up with Portfolio Section
var mixer = mixitup(".portfolio-gallery");

// Active Menu
const menuLi = document.querySelectorAll("header ul li a");
const sections = document.querySelectorAll("section");

function activeMenu() {
    let len = sections.length;
    while (--len && window.scrollY + 97 < sections[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 50);
});

// Toggle icon navbar
const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}

// Parallax
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));



document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('input[name="Name"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const message = document.querySelector('textarea[name="Message"]').value;

    if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        event.preventDefault(); // Prevent the form from submitting
    }
});


// Toggle chat container visibility
function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = chatContainer.style.display === 'none' || chatContainer.style.display === '' ? 'flex' : 'none';
    
    // Toggle the faint effect on the entire body
    if (chatContainer.style.display === 'flex') {
        document.body.classList.add('faint');
        document.getElementById('user-input').focus();
    } else {
        document.body.classList.remove('faint');
    }
}


// Send user message and display chatbot response
function sendMessage() {
    const input = document.getElementById('user-input');
    const userMessage = input.value.trim();
    if (userMessage === '') return;

    // Display user message
    displayMessage('user', userMessage);
    input.value = '';

    // Generate chatbot response
    const botResponse = getBotResponse(userMessage);
    setTimeout(() => {
        displayMessage('bot', botResponse);
    }, 500);
}


// Display messages in the chat body
function displayMessage(sender, message) {
    const chatBody = document.getElementById('chat-body');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;

}


function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();

    // General Discussion
    if (lowerMessage.includes('hello')) 
    {
        return `Hi again!😊 How can I help you today?`;
    }

    if (lowerMessage.includes('how are you')) 
    {
        return `I'm doing great, thanks for asking!😊 How can I assist you today?`;
    }

    // General Introduction
    if (lowerMessage.includes('introduce yourself'))
    {
        return `I'm Zahra Yasin, an enthusiastic Information Technology student of 6th semester at Punjab 
                University College of Information Technology (PUCIT) with a keen interest in Web Development & AI.
                I'm passionate about learning new technologies and applying them to solve real-world problems. 💻`;
    }


    if (lowerMessage.includes('what do you do')) 
    {
        return `I'm currently a 6th-semester IT student at Punjab University College of Information Technology 
                (PUCIT). I specialize in software development, web development, and have a keen interest in AI 
                and cybersecurity. 🚀`;
    }


    if (lowerMessage.includes('what is your professional background'))
    {
        return `As a 6th-semester IT student at PUCIT, I’ve worked on several projects involving web development 
                and AI. I've also completed projects that have given me hands-on experience in front-end 
                development and application deployment🛠️.`;
    }


    // Skills and Expertise
    if (lowerMessage.includes('what skills do you have')) 
    {
        return `I have expertise in front-end web development, particularly with the MERN stack.
                Additionally, I have skills in graphic and UI/UX designing, by ensuring that the applications
                I build are both functional and visually appealing. 
                <button class="chat-button" data-target="skills">View My Skills</button>`;
    }


    if (lowerMessage.includes('what programming languages do you know'))
    {
        return `I’m proficient in C++, JavaScript, and Java. I use these languages regularly in my projects 
                and coursework. Additionally, I'm familiar with basics of Python💻.`;
    }

    if (lowerMessage.includes('are you experienced in web development')) 
    {
        return `Yes, I have significant experience in web development, particularly with the MERN stack.
                I’ve built several web-based projects, including Mediconnect (a healthcare management system) 
                and a GitHub profile finder, an interactive web-based application.
                <button class="chat-button" onclick="document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });">View My Projects</button>`;
    }

    if (lowerMessage.includes('tell me more about your design skills')) 
    {
        return `While my primary focus is on development, I also have experience in UI/UX design. I ensure that 
                the applications I build are not only functional but also user-friendly and visually appealing🎨.`;
    }


    // Work Experience
    if (lowerMessage.includes('where have you worked')) 
    {
        return `I'm a fresh student with no as such work experience. But, I’ve worked on various front-end web 
                development projects, gaining hands-on experience in creating dynamic and responsive websites.
                <button class="chat-button" data-target="portfolio">View My Work</button>`;
    }


    if (lowerMessage.includes('past work experience')) 
    {
        return `I’ve worked as a Teaching Assistant at PUCIT for the course 'Communication & Presentation Skills'. 
                I also have experience with several MERN stack web projects, focusing on hands-on front-end 
                development🧑‍🏫. `;
    }


    // Projects
    if (lowerMessage.includes('what are some of your recent projects')) 
    {
        return `Some of my recent projects include Mediconnect (a healthcare management system), and a GitHub 
                Profile Finder, an interactive web app for exploring GitHub profiles. <br>
                <button class="chat-button" onclick="document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });">Check Out My Latest Projects</button>`;
    }

    if (lowerMessage.includes('some examples of your work')) 
    {
        return `Certainly! You can check out my projects on my GitHub profile 
                <a href="https://github.com/ZahraYasin2209" target="_blank" class="styled-link">here</a>.`;
    }
    

    if (lowerMessage.includes('tell me about the project mediconnect')) 
    {
        return `Mediconnect is a healthcare management system🏥. I developed it to streamline patient care and optimize
                administrative tasks in healthcare facilities. It includes features for managing patient data, 
                appointments, and communication between doctors and patients.
                <a href="https://github.com/ZahraYasin2209/Mediconnect" target="_blank" class="styled-link">
                    Explore Mediconnect
                </a>`;
    }


    // Education and Certifications
    if (lowerMessage.includes('where did you study')) 
    {
        return `I’m currently in my 6th semester at Punjab University College of Information Technology (PUCIT), 
                pursuing a degree in Information Technology🎓.`;
    }

    if (lowerMessage.includes('what was your major in college')) 
    {
        return `My major is Information Technology (IT), with a strong focus on software development and web 
                technologies💻.`;
    }


    // Services Offered
    if (lowerMessage.includes('services do you provide')) 
    {
        return `I offer web development services, including frontend development, web design, UI/UX design, and 
                graphic design. Additionally, I'm a problem solver who focuses on creating effective solutions🔧.`;
    }


    if (lowerMessage.includes('can you help me with web development')) 
    {
        return `Absolutely! I've expertise in front-end web development using the MERN stack and can help you 
                build responsive and dynamic websites.
                <button class="chat-button" onclick="document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });">See My Services</button>`;
    }


    if (lowerMessage.includes('do you offer graphic design services')) 
    {
        return `While my primary focus is on development, I have experience in graphic design and can assist 
                with creating user-friendly and visually appealing graphic designs🎨.`;
    }


    if (lowerMessage.includes('can you assist with ui/ux design')) 
    {
        return `Yes, I can help design intuitive and user-friendly interfaces that enhance the overall user 
        experience👩‍🎨.`;
    }


    // Availability and Contact Information
    if (lowerMessage.includes('are you available for freelance work')) 
    {
        return `Yes, I’m open to freelance opportunities where I can apply my skills in web development and AI. 💼`;
    }

    if (lowerMessage.includes('how can i contact you')) 
    {
        return `You can contact me via email 📧 at zahrayasin2209@gmail.com or through my LinkedIn profile 
                <a href="https://www.linkedin.com/in/zahra-yasin-18b3a6246/" target="_blank" class="styled-link">
                    here
                </a>`;
    }

    if (lowerMessage.includes('are you open to job offers')) 
    {
        return `Yes, I’m always open to exploring new opportunities that align with my skills and career goals🚀.`;
    }


    if (lowerMessage.includes('can i hire you for a project')) 
    {
        return `Definitely! Feel free to reach out to me with the details, and we can discuss how I can assist 
        with your project🤝.`;
    }


    // Personal Interests and Hobbies
    if (lowerMessage.includes('what are your hobbies')) 
    {
        return `I enjoy coding, exploring new technologies, and reading about the latest trends in AI. 
                In my spare time, I enjoy browsing social media, especially scrolling through reels📱.`;
    }


    if (lowerMessage.includes('free time')) 
    {
        return `In my free time, I like to work on personal coding projects, read tech blogs, and learn about new 
                programming languages and frameworks. I also enjoy browsing social media, particularly scrolling 
                through reels🎧.`;
    }


    if (lowerMessage.includes('are you interested in any technologies outside of work')) 
    {
        return `Yes, I’m particularly interested in virtual reality (VR) and augmented reality (AR) technologies, 
                and I’m exploring how they can be integrated into web development🕶️.`;
    }


    // Testimonials and Recommendations
    if (lowerMessage.includes('do you have any testimonials from clients')) 
    {
        return `While I’m still building my professional portfolio, I’ve received positive feedback from my 
                professors and peers for my work on academic projects😊.`;
    }


    if (lowerMessage.includes('what do others say about your work')) 
    {
        return `My peers and professors often commend me for my problem-solving skills, dedication to learning, 
                and ability to work collaboratively on projects👏.`;
    }

    // Default response for unknown queries
    return "Hmm, I didn’t quite catch that. 🤔 Could you please rephrase your question?";
}



function displayMessage(sender, message) {
    const chatBody = document.getElementById('chat-body');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    
    // Use innerHTML to correctly parse HTML content
    messageElement.innerHTML = message;
    
    // Append the message element to the chat body
    chatBody.appendChild(messageElement);
    
    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Rebind event listeners for dynamically added buttons
    const chatButtons = messageElement.querySelectorAll('.chat-button');
    chatButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(`#${targetId}`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}


// Reset the chat
function resetChat() {
    const chatBody = document.getElementById('chat-body');
    chatBody.innerHTML = `
        <div class="message bot">
            Hello, I'm ZahraBot! 👋 <br><br>
            Welcome to my portfolio. I'm here to help with any questions about my work, projects, or skills. 
            How can I assist you today?
        </div>`;
}


document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const modeIcon = document.getElementById('mode-icon');
    if (document.body.classList.contains('light-mode')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
    const mode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('mode', mode);
});

// Check the user's saved mode preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    const modeIcon = document.getElementById('mode-icon');
    if (savedMode === 'light') {
        document.body.classList.add('light-mode');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }
});



const customCursor = document.querySelector('.custom-cursor');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    
    customCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    
    requestAnimationFrame(animateCursor);
}

// Start the animation
animateCursor();

// Hover effect for interactive elements
document.querySelectorAll('a, button, .btn').forEach(el => {
    el.addEventListener('mouseover', () => {
        customCursor.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hover');
    });
});



document.getElementById('star-btn').addEventListener('click', function() {
    this.classList.toggle('bx-star'); // Toggle between the star icon and a filled star icon
    this.classList.toggle('bx-star-fill'); // Ensure you have 'bx-star-fill' in your icon library
    this.style.color = this.classList.contains('bx-star-fill') ? 'gold' : 'var(--hover-color)';
    alert('Thank you for appreciating my work! 😊');

});
