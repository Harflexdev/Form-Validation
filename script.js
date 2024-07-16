
const form = document.getElementById("form");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const btn = document.getElementById("btn");
const error = document.getElementById("error");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const error4 = document.getElementById("error4");

form.addEventListener("submit", function (e){
   e.preventDefault();
   let valid = true;
//   if anything is not typed
if(input1.value == ""){
   error.innerHTML = "Please fill out"
   valid = false;
};
// after the text is being typed
input1.addEventListener("input", () => {
   if(input1.value !== ""){
      error.innerHTML = ""
   };
});
//   if anything is not typed
if(input2.value == ""){
   error2.innerHTML = "Please fill out"
   valid = false;
};
// after the text is being typed
input2.addEventListener("input", () => {
   if(input2.value !== ""){
      error2.innerHTML = ""
   };
});
//   if anything is not typed
if(input3.value == ""){
   error3.innerHTML = "Please fill out"
   valid = false;
};
// after the text is being typed
input3.addEventListener("input", () => {
   if(input3.value !== ""){
      error3.innerHTML = ""
   };
});
//   if anything is not typed
if(input4.value == ""){
   error4.innerHTML = "Please fill out"
   valid = false;
};
// after the text is being typed
input4.addEventListener("input", () => {
   if(input4.value !== ""){
      error4.innerHTML = ""
   };
});
// if all form is input
if (valid){
   const formData = new FormData(e.target);
   const data = {};

   formData.forEach((value, key) => {
      data[key] = value;
   });
   console.log("Details", data);
   
   // After processing, redirect to another page
   window.location.href = 'https://ismaila-afeez.vercel.app/';
};

});