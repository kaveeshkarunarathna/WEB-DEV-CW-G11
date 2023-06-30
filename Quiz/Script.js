const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const nextBtn = document.querySelector('.next-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const remainingTime = document.querySelector('.countdown');

startBtn.onclick =() => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick =() => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick =() => {
    quizSection.classList.add('active');
    quizBox.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    remainingTime.classList.add('active');

    startCountdown();
    showQuestions(0);
    questionCounter(1);
    headerScore();
}

tryAgainBtn.onclick =() => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
}

goHomeBtn.onclick =() => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

nextBtn.onclick =() => {
    if (questionCount < questions.length -1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active')
    }
    else {
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');

//getting questions and options from array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag =`<div class="option"><span>${questions[index].Options[0]}</span></div>
                    <div class="option"><span>${questions[index].Options[1]}</span></div>
                    <div class="option"><span>${questions[index].Options[2]}</span></div>
                    <div class="option"><span>${questions[index].Options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for(let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }
    else {
        answer.classList.add('incorrect');

        // if answer incorrect, auto selected correct answer
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer){
                optionList.children[i].setAttribute('class', 'option correct');
            };
        }
    }

    // if user has selected , Disable all options
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active')
}
function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total')
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore}/ ${questions.length}`;
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100; 
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        //console.log(progressStartValue);
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#ff0077 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg);`;

        if (progressStartValue == progressEndValue){
            clearInterval(progress);
        }
    }, speed);

}

function startCountdown() {
  var countdown = 60;
  var timer = setInterval(function() {
    countdown--;  
    remainingTime.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}



