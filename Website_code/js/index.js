// category
let catBtns = document.querySelectorAll('.catBtn');
let catPs = document.querySelectorAll('.catP');
let catImgs = document.querySelectorAll('.cat img');

catBtns.forEach(function(catBtn) {
    catBtn.addEventListener('click', function() {
        // Toggle 'active' class for the clicked button
        catBtn.classList.toggle('active');

        // Get the index of the clicked button
        let index = Array.from(catBtns).indexOf(catBtn);

        // Toggle 'active' class for the corresponding paragraph
        catPs[index].classList.toggle('active');
        catImgs[index].classList.toggle('active');
    });
});

function toggleSearchBox() {
    var searchBox = document.getElementById("searchBox");
    searchBox.classList.toggle("hidden");
}

function search() {
    alert("Searching...");
}


// timer
const countDate = new Date('jan 1, 2024 00:00:00').getTime();

function newYear() {
    const now = new Date().getTime();
    gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / (day));
    const h = Math.floor((gap % (day)) / (hour));
    const m = Math.floor((gap % (hour)) / (minute));
    const s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function() {
    newYear();
})


// login & sign up sections

var LoginForm = document.getElementById("LoginForm");
var SignForm = document.getElementById("SignForm");
var Indicator = document.getElementById("Indicator");

// switching between sign up and login
function signup() {
    SignForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(245px)";
}
function login() {
    SignForm.style.transform = "translateX(440px)";
    LoginForm.style.transform = "translateX(440px)";
    Indicator.style.transform = "translateX(50px)";
}

// validating sign up and login info
function validateSignupForm() {
    var username = document.getElementById("signupUsername").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;

    if (username === "" || email === "" || password === "") {
        alert("All fields are required");
        return false;
    }
    if (password.length <= 6) {
        alert("Password must be longer than 6 characters");
        return false;
    }
    if (password.length >= 20) {
        alert("Password must be lesser than 20 characters");
        return false;
    }
    alert("Sign Up successfully!");
    login(); // if sign up successfully, head to log in section
    return false;
}

function validateLoginForm() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    if (username === "" || password === "") {
        alert("Username and password are required");
        return false;
    }
    if (password.length <= 6) {
        alert("Password must be longer than 6 characters");
        return false;
    }
    if (password.length >= 20) {
        alert("Password must be lesser than 20 characters");
        return false;
    }
    alert("Log in Successfully!"); // if log in successful, head to landing page
    return true;
}

function showSuccess() {
    var notification = document.getElementById('subscription-success');
    notification.style.display = 'block';
    
    // Hide the notification after 5 seconds 
    setTimeout(function() {
      notification.style.display = 'none';
    }, 5000);
  }

// contact page feedback function
function feedback() {
    var email = document.getElementById("contact_email").value;
    if (email === "") {
        alert("Email are required");
        return false;
    }
    showSuccess(); // if submitted feedback, show notification
    return false;
}

// cart page subscribe function
function subscribe() {
    var email = document.getElementById("subemail").value;
    if (email === "") {
        alert("Email are required");
        return false;
    }
    showSuccess(); // if subscribe successful, show success notification
    return false;
}

// checkout page 
function validateForm() {
    var zip = document.getElementById("zipCode").value;
    var cvv = document.getElementById("cvv").value;
    var phone = document.getElementById("phone").value;
    var card = document.getElementById("cardNumber").value;
    
    if (phone.length < 10 || phone.length > 11) {
        alert("Phone number characters must be between 10 and 11");
        return false;
    }
    if (zip.length !== 5) {
        alert("ZIP Code must be 5 characters long");
        return false;
    }
    if (card.length !== 16) {
        alert("Card number must be 16 characters long");
        return false;
    }
    if (cvv.length !== 3) {
        alert("CVV must be 3 characters long");
        return false;
    }
    
    var userConfirmation = confirm("Are you sure the info is correctly entered?");

    if (userConfirmation) {
      alert("Checkout Successfully!!");
      return true;
    } else {
      // Handle the case where the user clicked "Cancel"
      return false;
    }    
}

// date created, date modified, date collected 
document.addEventListener('DOMContentLoaded', function () {
    const dataDetailsElement = document.getElementById('dataDetails');
    const dateValueClass = 'date-value';
  
    // Data with creation, update, and collection dates
    const dataRecords = [
      { created_at: '2023-12-18T12:30:00Z', updated_at: '2023-12-11T17:05:00Z', collected_at: '2023-12-11T09:00:00Z' },
    ];
  
    // Format date function
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    };
  
    // Display the current version of data details
    const currentDataRecord = dataRecords[dataRecords.length - 1];
    if (currentDataRecord) {
        const dataItem = document.createElement('div');
        dataItem.classList.add(dateValueClass);

        dataItem.innerHTML = `Created: ${formatDate(currentDataRecord.created_at)} &nbsp;&nbsp;
                            Modified: ${formatDate(currentDataRecord.updated_at)} &nbsp;&nbsp;
                            Data Collected: ${formatDate(currentDataRecord.collected_at)}`;

        dataDetailsElement.appendChild(dataItem);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show/hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Add click event to scroll smoothly to the top
    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});