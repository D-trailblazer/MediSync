const form = document.getElementById("waitlistForm");
const input = document.getElementById("emailInput");
const button = document.getElementById("cta1");
const message = document.getElementById("formMessage");


// MAIN SUBMIT HANDLER
form.addEventListener("submit", function(e){

   e.preventDefault();

   const email = input.value.trim();

   if (!validateEmail(email)) {
      showMessage("Enter a valid email", "error");
      return;
   }

   const name = extractName(email);

   sendConfirmationEmail(email, name);

});



/* EMAIL VALIDATION */

function validateEmail(email){

   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   return regex.test(email);

}



/* EXTRACT NAME FROM EMAIL */

function extractName(email){

   return email
      .split("@")[0]
      .replace(/[._-]/g, " ")
      .replace(/\b\w/g, c => c.toUpperCase());

}



/* SEND EMAIL USING EMAILJS */

function sendConfirmationEmail(email, name){

   button.disabled = true;
   button.innerText = "Sending...";
   button.style.opacity="0.7"


   emailjs.send(

      "service_8ooojh2",
      "template_i8jbv8i",

      {
         user_email: email,
         user_name: name
      }

   )

   .then(function(){

      showMessage("You're on the waitlist", "success");

      form.reset();
      formMessage.innerText=" "

      button.disabled = false;
      button.style.opacity="1"
      button.textContent = "Request Demo";

   })

   .catch(function(error){

      showMessage("Something went wrong. Try again.", "error");

      button.disabled = false;
      button.style.opcity="1";
      button.innerText = "Request Demo";

      console.error(error);

   });

}



/* SHOW STATUS MESSAGE */

function showMessage(text, type){

   message.innerText = text;

   message.style.marginTop = "10px";
   message.style.fontSize = "14px";

   if(type === "success")
      message.style.color = "#117a94";

   else
      message.style.color = "#333";

}



// Rotating text animation
const rotatingText = document.getElementById("rotatingText");

const texts = [
   "Goodbye paper records, hello digital ease.",
   "Prescriptions, allergies, and contacts — all in one secure place",
   "Share instantly with caregivers.",
   "One secure identity for all your health records..",
   "Private, encrypted, and fully secure."
];
let index = 0;

function showNextText() {

   // fade out
   rotatingText.classList.remove("show");

   setTimeout(() => {

      // change text
      index = (index + 1) % texts.length;
      rotatingText.textContent = texts[index];

      // fade in
      rotatingText.classList.add("show");

   }, 400);

}

// initial state
rotatingText.textContent = texts[0];
rotatingText.classList.add("show");

// rotate every 3 seconds
setInterval(showNextText, 4000);
// end












