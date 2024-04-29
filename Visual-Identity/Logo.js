// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded');
    
    var downloadButton = document.getElementById('downloadButton');
    
    if (downloadButton) {
        console.log('Download button found');
        
        downloadButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default action of the link
            
            console.log('Download button clicked');
            
            // Redirect to the Google Drive link
            window.open('https://drive.google.com/drive/folders/14YjSQPcxBO7fmEJ-Byo9OyRO8yRmf-lf?usp=sharing', '_blank');
        });
    } else {
        console.log('Download button not found');
    }
});

// Header
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

