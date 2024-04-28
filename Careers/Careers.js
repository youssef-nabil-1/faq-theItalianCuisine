const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
    })
},
   { threshold: 0.5
   });

for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];

    observer.observe(elements);
} 

var icon = document.getElementById("nightmode");

icon.onclick = function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")){
      icon.src = "../Header/day-mode.png";
    }else{
      icon.src = "../Header/night-mode.png";
    }
}