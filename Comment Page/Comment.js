

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
  submitForm();
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

function submitForm() {
  const subject = "Feedback from " + email;
  const emailBody =
    `Satisfaction: ${satisfaction}%0D%0A` +
    `Rating Explanation: ${ratingExplanation}%0D%0A` +
    `Favorite Feature: ${favoriteFeature}%0D%0A` +
    `Recommendation: ${recommendation}%0D%0A`;

  const mailtoLink = `mailto:kaveeshbc@gmail.com,kaveesh.20223173@iit.ac.lk?subject=${subject}&body=${emailBody}`;
  
  // Open the mailto link in a new window
  window.open(mailtoLink, "_blank");
}
