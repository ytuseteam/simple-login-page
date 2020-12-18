const emailHelperInfo = "We'll never share your email with anyone else.";
const emailHelperRequired = "Email is required.";
const emailHelperInvalid = "Invalid email format.";

const passHelperInfo = "&nbsp;";
const passHelperRequired = "Password is required.";
const passHelperSize = "Password must be between 6-20 characters";
const passHelperFormat =
  "Password must contain small, capital letters, numbers and special characters";

const emailInput = document.getElementById("exampleInputEmail1");
const passwordInput = document.getElementById("exampleInputPassword1");

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordReg = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;

const validateEmail = () => {
  const emailText = emailInput.value.trim();
  if (!emailText) {
    emailInput.classList.add("is-invalid");
    emailInput.nextElementSibling.classList.remove("text-muted");
    emailInput.nextElementSibling.classList.add("invalid-feedback");
    emailInput.nextElementSibling.innerHTML = emailHelperRequired;
    return false;
  } else if (!emailRegex.test(emailText)) {
    emailInput.classList.add("is-invalid");
    emailInput.nextElementSibling.classList.remove("text-muted");
    emailInput.nextElementSibling.classList.add("invalid-feedback");
    emailInput.nextElementSibling.innerHTML = emailHelperInvalid;
    return false;
  }

  return true;
};

const validatePassword = () => {
  const passwordText = passwordInput.value.trim();
  if (!passwordText) {
    passwordInput.classList.add("is-invalid");
    passwordInput.nextElementSibling.classList.remove("text-muted");
    passwordInput.nextElementSibling.classList.add("invalid-feedback");
    passwordInput.nextElementSibling.innerHTML = passHelperRequired;
    return false;
  } else if (passwordText.length < 6 || passwordText.length > 20) {
    passwordInput.classList.add("is-invalid");
    passwordInput.nextElementSibling.classList.remove("text-muted");
    passwordInput.nextElementSibling.classList.add("invalid-feedback");
    passwordInput.nextElementSibling.innerHTML = passHelperSize;
    return false;
  } else if (!passwordReg.test(passwordText)) {
    passwordInput.classList.add("is-invalid");
    passwordInput.nextElementSibling.classList.remove("text-muted");
    passwordInput.nextElementSibling.classList.add("invalid-feedback");
    passwordInput.nextElementSibling.innerHTML = passHelperFormat;
    return false;
  }

  return true;
};

const goLogin = (event) => {
  event.preventDefault();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  if (isEmailValid && isPasswordValid) {
    window.location.href = "/welcome.html";
  }
};

emailInput.addEventListener("focus", (event) => {
  event.target.classList.remove("is-invalid");
  event.target.nextElementSibling.classList.add("text-muted");
  event.target.nextElementSibling.classList.remove("invalid-feedback");
  event.target.nextElementSibling.innerHTML = emailHelperInfo;
});

const clearPasswordError = (e) => {
  e.target.classList.remove("is-invalid");
  e.target.nextElementSibling.classList.add("text-muted");
  e.target.nextElementSibling.classList.remove("invalid-feedback");
  e.target.nextElementSibling.innerHTML = passHelperInfo;
};
