window.onload = function() {
    var welcomeShown = sessionStorage.getItem('vitalcareWelcomeShown');
    
    if (!welcomeShown) {
        alert("Welcome to VitalCare! We're here to help you with your health needs.");
        sessionStorage.setItem('vitalcareWelcomeShown', 'true');
    }
    
    console.log("VitalCare website loaded!");
};

var contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.onsubmit = function(e) {
        e.preventDefault(); 
        
        
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;
        
        if (name === "" || name.trim() === "") {
            alert("Error: Please enter your name!");
            document.getElementById('name').focus();
            return false;
        }
        
        if (email === "" || email.trim() === "") {
            alert("Error: Please enter your email address!");
            document.getElementById('email').focus();
            return false;
        }
        
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            alert("Error: Please enter a valid email address (must contain @ and .)!");
            document.getElementById('email').focus();
            return false;
        }
        
        if (message === "" || message.trim() === "") {
            alert("Error: Please enter your message!");
            document.getElementById('message').focus();
            return false;
        }
        
        alert("Thank you " + name + "! Your message has been sent successfully.\n\nWe will contact you at " + email + " soon.");
        
        contactForm.reset();
        
        return false;
    };
}

var serviceCards = document.querySelectorAll('.card');

for (var i = 0; i < serviceCards.length; i++) {
    serviceCards[i].onclick = function() {
        var cardTitle = this.querySelector('h3');
        if (cardTitle) {
            alert("You clicked on: " + cardTitle.textContent + "\n\nThis service is available! Contact us to learn more or book an appointment.");
        }
    };
}


var learnMoreButtons = document.querySelectorAll('a.btn-outline, a.btn-secondary');

for (var i = 0; i < learnMoreButtons.length; i++) {
    learnMoreButtons[i].onclick = function() {
        alert("Great choice! You're about to learn more about our services.\n\nWe're here to help you with all your healthcare needs!");
    };
}

var scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑ Top';
scrollButton.style.position = 'fixed';
scrollButton.style.bottom = '30px';
scrollButton.style.right = '30px';
scrollButton.style.width = '70px';
scrollButton.style.height = '45px';
scrollButton.style.backgroundColor = '#00695c';
scrollButton.style.color = 'white';
scrollButton.style.border = 'none';
scrollButton.style.borderRadius = '8px';
scrollButton.style.cursor = 'pointer';
scrollButton.style.display = 'none';
scrollButton.style.zIndex = '1000';
scrollButton.style.fontSize = '16px';
scrollButton.style.fontWeight = 'bold';
scrollButton.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';

scrollButton.onclick = function() {
    window.scrollTo(0, 0);
    alert("Scrolled to top of the page!");
};

document.body.appendChild(scrollButton);


window.onscroll = function() {
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};


var formInputs = document.querySelectorAll('input, textarea');

for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].onfocus = function() {
        this.style.borderColor = '#00695c';
        this.style.borderWidth = '2px';
        this.style.backgroundColor = '#ffffff';
    };
    
    formInputs[i].onblur = function() {
        this.style.borderColor = '#ccc';
        this.style.borderWidth = '1px';
        this.style.backgroundColor = '#f9f9f9';
    };
}


var allButtons = document.querySelectorAll('.btn');

for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].onmouseenter = function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'all 0.3s';
    };
    
    allButtons[i].onmouseleave = function() {
        this.style.transform = 'scale(1)';
    };
}


var images = document.querySelectorAll('img');

for (var i = 0; i < images.length; i++) {
    images[i].onerror = function() {
        console.log("Error: Image failed to load - " + this.src);
        this.style.backgroundColor = '#f0f0f0';
        this.alt = "Image not available";
        alert("Warning: One or more images failed to load. Please check your internet connection.");
    };
}


var currentYear = new Date().getFullYear();
var footerYear = document.querySelector('.footer-bottom p');

if (footerYear) {
    footerYear.innerHTML = "&copy; " + currentYear + " VitalCare. All rights reserved.";
}


var logo = document.querySelector('.logo');

if (logo) {
    logo.onclick = function() {
        alert("Welcome to VitalCare!\n\nYour trusted partner for a healthier life.");
    };
}


function showStatsAlert() {
    var statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        setTimeout(function() {
            alert("Did you know?\n\n" + 
                  "We have " + statNumbers[0].textContent + " Happy Patients!\n" +
                  "We have " + statNumbers[1].textContent + " Expert Doctors!\n" +
                  "We provide " + statNumbers[2].textContent + " Emergency Support!");
        }, 2000);
    }
}


setTimeout(showStatsAlert, 2000);


var doubleClickCount = 0;

document.ondblclick = function() {
    doubleClickCount++;
    if (doubleClickCount === 1) {
        alert("You double-clicked! If you need help, please contact us through our contact page.");
    }
};

function validateEmail(email) {
    try {
        if (email === "" || email === null) {
            return false;
        }
        if (email.indexOf('@') === -1) {
            return false;
        }
        if (email.indexOf('.') === -1) {
            return false;
        }
        return true;
    } catch (error) {
        alert("Error validating email: " + error);
        return false;
    }
}


console.log("VitalCare - Basic JavaScript loaded successfully!");
console.log("Current page: " + window.location.pathname);


var totalCards = document.querySelectorAll('.card').length;
var totalButtons = document.querySelectorAll('.btn').length;

console.log("Total service cards: " + totalCards);
console.log("Total buttons: " + totalButtons);


window.onbeforeunload = function() {
    // return "Are you sure you want to leave VitalCare?";
};


var clickCount = 0;

document.onclick = function() {
    clickCount++;
    if (clickCount === 20) {
        alert("You've been very active on our site! Thank you for exploring VitalCare.\n\nNeed help? Contact us anytime!");
        clickCount = 0; 
    }
};


var statsShown = false;

window.onscroll = function() {
    var statsSection = document.querySelector('.stats-section');
    
    if (statsSection && !statsShown) {
        var rect = statsSection.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            statsShown = true;
            setTimeout(function() {
                alert("Check out our amazing statistics!\n\nWe're proud to serve thousands of patients.");
            }, 500);
        }
    }
    
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};

console.log("All basic JavaScript features are now active!");
