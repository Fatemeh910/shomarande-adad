//  elements
const counterText = document.querySelector(".counter-text");
const counterButtons = document.querySelectorAll(".btn");
//initiol action
let count = 0;
counterText.textContent = count;

counterButtons.forEach((btn) => {
   btn.addEventListener("click", (e) => {
    const currentButton = e.target.dataset.btn;

    if (currentButton === "decrease") {
            count--;
        } else if (currentButton === "increase") {
            count++;
        } else {
           count = 0;
        }

        //update count text
        counterText.textContent = count;
        //set color
        if(count < 0){
            counterText.style.color = "rgb(245,0,0)";
        }
        if(count > 0){
            counterText.style.color = "rgb(0,170,0)";
        }
        if(count === 0){
            counterText.style.color = "#333";
        }
   });
});