 // Counter functionality
        const decreaseBtn = document.getElementById('decrease');
        const increaseBtn = document.getElementById('increase');
        const countDisplay = document.getElementById('count');
        let count = 0;
        
        decreaseBtn.addEventListener('click', () => {
            count--;
            countDisplay.textContent = count;
        });
        
        increaseBtn.addEventListener('click', () => {
            count++;
            countDisplay.textContent = count;
        });
        
             // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.textContent = 'Toggle Light Mode';
            } else {
                themeToggle.textContent = 'Toggle Dark Mode';
            }
        });
        

      //form validation
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); }// Prevent form submission for demonstration

    //fetch form values
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    //clear previous errors
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let isValid = true;

    //validate username
    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required.";
        isValid = false;
    } else if (username.length < 3) {
        document.getElementById("usernameError").innerText = "Username must be at least 3 characters.";
        isValid = false;
    }

    //validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    //validate password
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters, including letters and numbers.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully! And that marks the end of week 6.");
        document.getElementById("myForm").reset();
    }

