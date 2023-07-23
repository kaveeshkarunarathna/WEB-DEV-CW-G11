function validateForm() {
    let satisfaction = document.forms["feedbackForm"]["satisfaction"].value;
    let ratingExplanation = document.forms["feedbackForm"]["ratingExplanation"].value;
    let favoriteFeature = document.forms["feedbackForm"]["favoriteFeature"].value;
    let recommendation = document.forms["feedbackForm"]["recommendation"].value;
    let email = document.forms["feedbackForm"]["email"].value;
  
    clearErrors();
  
    if (!satisfaction) {
      document.getElementById("satisfactionError").innerHTML = "Please rate your satisfaction.";
      return false;
    }
  
    if (!ratingExplanation.trim()) {
      document.getElementById("ratingExplanationError").innerHTML = "Please provide an explanation for your rating.";
      return false;
    }
  
    if (favoriteFeature === "Select an option") {
      document.getElementById("favoriteFeatureError").innerHTML = "Please select your favorite feature.";
      return false;
    }
  
    if (!recommendation) {
      document.getElementById("recommendationError").innerHTML = "Please select if you would recommend our website.";
      return false;
    }
  
    if (!isValidEmail(email)) {
      document.getElementById("emailError").innerHTML = "Please provide a valid email address.";
      return false;
    }
  
    showThankYouMessage();
    return false;
  }
  
  function clearErrors() {
    var errorElements = document.getElementsByClassName("error-msg");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].innerHTML = "";
    }
  }
  
  function isValidEmail(email) {
    // Simple email validation regex (not fully comprehensive)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function showThankYouMessage() {
    document.getElementById("feedbackForm").style.display = "none";
    document.getElementById("thankYouMsg").style.display = "block";
  }


  