

function validateForm() {
  const satisfaction = document.forms["feedbackForm"]["satisfaction"].value;
  const ratingExplanation = document.forms["feedbackForm"]["ratingExplanation"].value;
  const favoriteFeature = document.forms["feedbackForm"]["favoriteFeature"].value;
  const recommendation = document.forms["feedbackForm"]["recommendation"].value;
  const email = document.forms["feedbackForm"]["email"].value;
  clearErrors();

  if (!satisfaction) {
    document.getElementById("satisfactionError").innerHTML = "Please rate your satisfaction.";
    return false;
  }

  else if (!ratingExplanation.trim()) {
    document.getElementById("ratingExplanationError").innerHTML = "Please provide an explanation for your rating.";
    return false;
  }

  else if (favoriteFeature === "") {
    document.getElementById("favoriteFeatureError").innerHTML = "Please select your favorite feature.";
    return false;
  }

  else if (!recommendation) {
    document.getElementById("recommendationError").innerHTML = "Please select if you would recommend our website.";
    return false;
  }

  else if (!isValidEmail(email)) {
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
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showThankYouMessage() {
  document.getElementById("feedbackForm").style.display = "none";
  document.getElementById("thankYouMsg").style.display = "block";
}

function submitForm() {

  const satisfaction = document.forms["feedbackForm"]["satisfaction"].value;
  const ratingExplanation = document.forms["feedbackForm"]["ratingExplanation"].value;
  const favoriteFeature = document.forms["feedbackForm"]["favoriteFeature"].value;
  const recommendation = document.forms["feedbackForm"]["recommendation"].value;
  const email = document.forms["feedbackForm"]["email"].value;


  // Get the email and other form data (you may need to add other variables as needed)
  const subject = "Feedback from " + email;
  // ... other form data ...

  // Create the mailto link
  const emailBody =
    `Satisfaction: ${satisfaction}%0D%0A` +
    `Rating Explanation: ${ratingExplanation}%0D%0A` +
    `Favorite Feature: ${favoriteFeature}%0D%0A` +
    `Recommendation: ${recommendation}%0D%0A`;

  const mailtoLink = `mailto:kaveeshbc@gmail.com?subject=${subject}&body=${emailBody}`;
  
  // Open the mailto link in a new tab
  window.open(mailtoLink, '_blank');
}
