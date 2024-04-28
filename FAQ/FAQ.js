document.addEventListener('DOMContentLoaded', function () {
    let questions = document.querySelectorAll(".question");
    
    questions.forEach((question) => {
        question.addEventListener("click", () => {
            let answer = question.nextElementSibling;
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});

var icon = document.getElementById("nightmode");

icon.onclick = function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")){
      icon.src = "../Header/day-mode.png";
    }else{
      icon.src = "../Header/night-mode.png";
    }
}