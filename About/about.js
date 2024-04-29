function toggleMode() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
}

document.getElementById('toggle-btn').addEventListener('click', function() {
    toggleMode();
});

// Header
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}
