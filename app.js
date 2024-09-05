let Cardholder = document.querySelector(".Cardholder");
let name_info = document.querySelector(".name_info");
let date_info = document.querySelector(".date_info");
let cvc = document.querySelector(".cvc");
let name_input = document.getElementById("name_input");
let error_name = document.querySelector(".error_name");
let number_input = document.getElementById("number_input");
let error_number = document.querySelector(".error_number");
let MM_input = document.getElementById("MM_input");
let YY_input = document.getElementById("YY_input");
let error_MM_YY = document.querySelector(".error_MM_YY");
let cvc_input = document.getElementById("cvc_input");
let error_cvc = document.querySelector(".error_cvc");
let confirm_btn = document.querySelector(".confirm_btn");
let continue_btn = document.querySelector(".continue_btn");
let enter_info_container = document.querySelector(".enter_info_container");
let new_result_container = document.querySelector(".new_result_container");

const nameRegex = /^[A-Za-z\s]+$/;
let isValid = true;
const typeInInput = () => {
  if (name_input.value == "" || !nameRegex.test(name_input.value)) {
    error_name.innerHTML = "name is raquired";
    name_input.style.border = "1PX solid var (--Red)";
    isValid = false;
  } else {
    error_name.innerHTML = "";
    name_info.innerHTML = name_input.value;
    name_input.style.border = "1PX solid var (--Very_dark_violet)";
    isValid = true;
  }
  if (number_input.value === "" || number_input.value.length > 20) {
    error_number.innerHTML = "Number is required";
    isValid = false;
  } else {
    Cardholder.innerHTML = number_input.value;
    error_number.innerHTML = "";
    isValid = true;
  }
  if (
    MM_input.value == "" ||
    MM_input.value > 12 ||
    YY_input.value == "" ||
    YY_input.value < 24
  ) {
    error_MM_YY.innerHTML = "your MM or YY is required";
    isValid = false;
  } else {
    date_info.innerHTML = `${MM_input.value}/${YY_input.value}`;
    isValid = true;
    error_MM_YY.innerHTML = "";
  }
  if (cvc_input.value == "" || cvc_input.value.length > 3) {
    error_cvc.innerHTML = "cvc is required";
    isValid = false;
  } else {
    cvc.innerHTML = cvc_input.value;
    isValid = true;
    error_cvc.innerHTML = "";
  }
  confirm_btn.onclick=()=>{
    name_info.innerHTML = "";
    cvc.innerHTML = "";
    date_info.innerHTML = "00/00";
    Cardholder.innerHTML = "";
    name_input.value = "";
    number_input.value = "";
    MM_input.value = "";
    YY_input.value = "";
    cvc_input.value = "";

    enter_info_container.style.display = "none";
    new_result_container.style.display = "flex";
}
};



document.querySelector(".continue_btn").onclick = () => {
  enter_info_container.style.display = "flex";
  new_result_container.style.display = "none";
};
