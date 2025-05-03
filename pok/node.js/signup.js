document.addEventListener("DOMContentLoaded", function() {
    // Store registered numbers
    let registeredNumbers = JSON.parse(localStorage.getItem("registeredNumbers")) || [];

    const sendOtpBtn = document.getElementById("sendOtpBtn");
    const signupBtn = document.querySelector('button[type="submit"]'); // Sign Up button
    const loading = document.getElementById('loading');

    sendOtpBtn.addEventListener("click", function() {
        let mobile = document.getElementById("mobile").value;

        if (mobile.length !== 10 || isNaN(mobile)) {
            alert("Enter a valid 10-digit mobile number.");
            return;
        }

        // Check if the number is already registered
        if (registeredNumbers.includes(mobile)) {
            alert("This number is already registered! Redirecting to login page...");
            loading.style.display = 'flex';
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1000);
            return;
        }

        // Generate a random 6-digit OTP
        let otp = Math.floor(100000 + Math.random() * 900000);

        // Show OTP in alert (since no actual API is used)
        alert(`Your OTP is: ${otp}`);

        // Auto-fill OTP input field (optional)
        document.getElementById("otp").value = otp;
    });

    signupBtn.addEventListener("click", function(e) {
        e.preventDefault();

        let mobile = document.getElementById("mobile").value;
        let otp = document.getElementById("otp").value;

        if (mobile.length !== 10 || isNaN(mobile)) {
            alert("Enter a valid 10-digit mobile number.");
            return;
        }

        if (!otp) {
            alert("Enter OTP to continue.");
            return;
        }

        // Save new number to local storage
        registeredNumbers.push(mobile);
        localStorage.setItem("registeredNumbers", JSON.stringify(registeredNumbers));

        loading.style.display = 'flex';
        setTimeout(() => {
            alert("Signup successful! Redirecting to homepage...");
            window.location.href = "dashboard.html"; // Change this to your actual homepage URL
        }, 1000);
    });

    // Loader effect on navigation links (like Login link)
    const linksWithLoader = document.querySelectorAll('.link-with-loader');
    linksWithLoader.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loading.style.display = 'flex';
            const href = link.getAttribute('href');
            setTimeout(() => {
                window.location.href = href;
            }, 1000);
        });
    });
});