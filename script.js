const input = document.querySelector("input");
const cta = document.getElementById("cta1");


// change button color when user types
input.addEventListener("input", () => {
   cta.style.backgroundColor = "#117a94";
});


// click handler
cta.addEventListener("click", sendConfirmationEmail);



function sendConfirmationEmail() {

   const params = receiveEmailAddress();

   if (!params) return;

   // visual feedback
   cta.disabled = true;
   cta.textContent = "Sending...";
   cta.style.backgroundColor = "#228D9A";


   emailjs.send(
      "service_8ooojh2",     
      "template_i8jbv8i",    
      {
         user_email: params.email,
         user_name: params.name
      }
   )
   .then(() => {

      alert("Confirmation email sent!");

      // reset UI
      input.value = "";
      cta.disabled = false;
      cta.textContent = "Join waitlist";
      cta.style.backgroundColor = "#117a94";

   })
   .catch(error => {

      console.error("EmailJS error:", error);

      alert("Failed to send email");

      cta.disabled = false;
      cta.textContent = "Join waitlist";
   });

}



function receiveEmailAddress() {

   const email = input.value.trim();

   if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return null;
   }

   // deduce name from email
   const formattedName = email
      .split("@")[0]
      .replace(/[._-]/g, " ")
      .replace(/\b\w/g, char => char.toUpperCase());

   return {
      email: email,
      name: formattedName
   };
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












