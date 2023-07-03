 // Function to transition to the main web page after 4 seconds
 function transitionToMainPage() {
    setTimeout(function() {
      window.location.href = "/Main Page/mainPage.html";
    }, 4000); // 4 seconds delay
  }
  
  // Call the transition function when the page loads
  window.onload = function() {
    transitionToMainPage();
  };