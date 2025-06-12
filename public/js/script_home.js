const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");

function addHoverEffect(btn) {
    btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "rgb(0,0,15)";
        btn.style.color = "white";
        btn.style.transform = "scale(1.1)";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "white";
        btn.style.color = "rgb(21, 70, 74)";
        btn.style.transform = "scale(1)";
    });
}

addHoverEffect(signupBtn);
addHoverEffect(loginBtn);

/* image hover effect */
const images = document.querySelectorAll(".benefit-box img");

images.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.classList.add("hover-effect");
    });
    img.addEventListener("mouseout", () => {
        img.classList.remove("hover-effect");
    });
}); 