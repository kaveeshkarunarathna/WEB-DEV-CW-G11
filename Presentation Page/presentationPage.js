const remainingTime = document.querySelector('.countdown');

remainingTime.classList.add('active');
startCountdown();

function startCountdown() {
  let countdown = 4;
  remainingTime.textContent = countdown;
  let timer = setInterval(function() {
    countdown--;
    remainingTime.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(timer);
      navigateToMainPage();
    }
  }, 1000);
}

// function navigateToMainPage() {
//   window.location.href = "/main Page/mainPage.html";
// }


//function transitionToMainPage() {
//  setTimeout(function() {
//    window.location.href = "/Main Page/mainPage.html";
//  }, 4000); 
//}
  
  
  // window.onload = function() {
  //   transitionToMainPage();
  // };