
window.onload = function() {
    var welcomeShown = sessionStorage.getItem('vitalcareWelcomeShown');
    if (!welcomeShown) {
        alert("Welcome to VitalCare! We're here to help you with your health needs.");
        sessionStorage.setItem('vitalcareWelcomeShown', 'true');
    }
};

var allLinks = document.querySelectorAll('a');

for (var i = 0; i < allLinks.length; i++) {
    if (allLinks[i].textContent.trim() === "Book Now") {
        allLinks[i].onclick = function() {
            alert("Thank you for your interest! You will be redirected to our contact page to book your appointment.");
        };
    }
}


var contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.onsubmit = function(e) {
        e.preventDefault();
        
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
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
            alert("Error: Please enter a valid email address!");
            document.getElementById('email').focus();
            return false;
        }
        
        if (message === "" || message.trim() === "") {
            alert("Error: Please enter your message!");
            document.getElementById('message').focus();
            return false;
        }
        
        alert("Thank you " + name + "! Your message has been sent successfully.");
        contactForm.reset();
        return false;
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

scrollButton.onclick = function() {
    window.scrollTo(0, 0);
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
    };
    
    formInputs[i].onblur = function() {
        this.style.borderColor = '#ccc';
        this.style.borderWidth = '1px';
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
var currentYear = new Date().getFullYear();
var footerYear = document.querySelector('.footer-bottom p');

if (footerYear) {
    footerYear.innerHTML = "&copy; " + currentYear + " VitalCare. All rights reserved.";
}

