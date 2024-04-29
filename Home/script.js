function displayImage(number) {
    
     imagePaths = {
      1: "gallery1.jpg",
      2: "gallery2.jpg",
      3: "gallery3.jpg",
      4: "gallery4.jpg",
      5: "gallery5.JPG",
      6: "gallery6.jpg"
      
    };
  
    
     imageElement = document.getElementById("image");
  
    
     imagePath = imagePaths[number];
  
    
    if (imagePath) {
      imageElement.src = imagePath;
    }
      
    
  }
  function changeTheme(theme) {
    document.getElementById('content').className = theme;
  }