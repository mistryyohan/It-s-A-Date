document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('noButton');
    var yesButton = document.getElementById('yesButton');
    var h1Element = document.querySelector('.content-container h1');
    var imgElement = document.querySelector('.content-container img');
  
    noButton.addEventListener('mouseover', function() {
      moveButton();
    });
    
    noButton.addEventListener('click', function() {
      moveButton();
    });

    yesButton.addEventListener('click', function() {
      changeContent();
    });
  
    function moveButton() {
      var buttonRect = noButton.getBoundingClientRect();
      var maxX = window.innerWidth - buttonRect.width;
      var maxY = window.innerHeight - buttonRect.height;
  
      var newX = Math.random() * maxX;
      var newY = Math.random() * maxY;
  
      // Ensure the button stays within the visible area on smaller screens
      newX = Math.min(newX, maxX - 10);
      newY = Math.min(newY, maxY - 10);
  
      noButton.style.position = 'absolute';
      noButton.style.left = newX + 'px';
      noButton.style.top = newY + 'px';
    }
  

    function changeContent() {
      var currentDate = new Date();
      // Format the date as "dd month yyyy"
      var options = { day: 'numeric', month: 'long', year: 'numeric' };
      var formattedDate = currentDate.toLocaleDateString('en-US', options);
      var futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + 3);
      var formattedFutureDate = futureDate.toLocaleDateString('en-US', options);
      h1Element.textContent = "See you on "+formattedFutureDate;
      imgElement.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDd6bHZrcXA2NWI5cGc2dmR5OGRnajN5NzNuc3lvanU3MTU1YnZ4MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yNvmkSbnamOXEfnYxY/giphy.gif"; // Replace with the path to your new image
      imgElement.alt = "Description of the new image";
    }
  });
  