let input =document.querySelector("input");
let cta = document.getElementById("cta1")
input.oninput=()=>{
   setInterval(()=>{
      cta.style.backgroundColor = "red"
   },
   2000)
   // cta.style.backgroundColor="red"
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












