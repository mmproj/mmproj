const questions = [
    { question: "친구랑 만나기로 했는데 갑자기 약속이 취소된다면?", options: ["무조건 혼자할 수 있는 취미생활이 최고지", "동호회 가입해서 많은 사람들이랑 같이 해야 재밌어"], answer: "" },
    { question: "슬픔을 나누면?", options: ["반이 된다. 슬픔은 공유해야지!", "둘이 된다. 왜냐면 슬픈 사람이 두 명이 되기 때문이지"], answer: "" },
    { question: "요리할 때 나의 스타일은?", options: ["레시피랑 계량대로 잘 따라 만드는 것이 가장 중요", "음식은 손맛!~ 감으로 하는겨~"], answer: "" },
    { question: "비행기 타기 전에 무슨 생각이 들까?", options: ["비행기가 추락하면 어떡하지.. 비상구 자리로 정할까", "기내식 뭐나오려나. 영화는 뭐 볼까"], answer: "" },
    { question: "문성혁과 조유빈이 처음 사귄 날짜는?", options: ["2019.01.23", "2020.03.21", "2020.01.23", "2019.03.21"], answer: "2019.01.23" },
    { question: "문성혁과 조유빈이 처음 만난 동아리는?", options: ["SG Wannabe", "SGBS", "SGCC", "SGSS"], answer: "SGCC" },
    { question: "문성혁과 조유빈이 처음 함께 수강한 수업은?", options: ["정치학개론", "기초심리학", "건축학개론", "데이터베이스입문"], answer: "데이터베이스입문" },
    { question: "문성혁과 조유빈이 처음 함께 간 식당은?", options: ["가츠벤또", "고이짱돈까스", "거북이의주방", "발리비스트로"], answer: "가츠벤또" },
    { question: "문성혁과 조유빈이 처음 함께 간 카페는?", options: ["알라딘커피", "술탄커피", "앳이즈", "어반눅스"], answer: "술탄커피" },
    { question: "문성혁과 조유빈이 처음 놀러 간 여행지는?", options: ["강릉", "부산", "오사카", "타이완"], answer: "강릉" },
    { question: "문성혁과 조유빈이 처음 함께 본 공연은?", options: ["마술쇼", "재즈바", "뮤지컬", "발레"], answer: "재즈바" },
    { question: "문성혁과 조유빈이 처음 함께 했던 프로젝트는?", options: ["0123proj", "0620proj", "0321proj", "0823proj"], answer: "0123proj" }
];

let currentQuestionIndex = 0;
const quizSection = document.getElementById("quiz-section");
const proposalSection = document.getElementById("proposal-section");
const finalMessage = document.getElementById("final-message");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const progressElement = document.getElementById("progress");
const countdownElement = document.getElementById("countdown");

function updateProgress() {
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = "";
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => handleAnswer(option);
            optionsElement.appendChild(button);
        });
        updateProgress();
    } else {
        // Start the countdown before showing the proposal section
        quizSection.style.display = "none";
        startCountdown();
    }
}

function handleAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.answer && selectedOption !== currentQuestion.answer) {
        alert("Wrong answer! Try again.");
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function startCountdown() {
    let countdownValue = 5;
    proposalSection.style.display = "none"; // Hide proposal section during countdown

    countdownElement.textContent = `마음의 준비 ${countdownValue}...`;

    const countdownInterval = setInterval(() => {
        countdownValue--;
        countdownElement.textContent = `마음의 준비 ${countdownValue}...`;

        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            proposalSection.style.display = "block"; // Show proposal section after countdown
            countdownElement.textContent = ""; // Clear countdown text
        }
    }, 1000);
}

loadQuestion();
