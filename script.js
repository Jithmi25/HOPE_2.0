const levels = [
  {
    realm: "REALM 01 / ICT & OFFICE",
    title: "The Word Wizard",
    dragon: "WORD WIZARD",
    quote: "“Knowledge is the sharpest key.”",
    questions: [
      [
        "What keyboard shortcut pastes copied text?",
        ["Ctrl + C", "Ctrl + V", "Ctrl + Z"],
        1,
      ],
      [
        "Which app is mainly used for presentations?",
        ["Excel", "PowerPoint", "Notepad"],
        1,
      ],
      [
        "What does a spreadsheet organize?",
        ["Numbers and data", "Music tracks", "Video clips"],
        0,
      ],
      ["Which key starts a new line?", ["Shift", "Enter", "Alt"], 1],
      [
        "What does PDF stand for?",
        ["Portable Document Format", "Public Data File", "Print Design Folder"],
        0,
      ],
    ],
  },
  {
    realm: "REALM 02 / MICRO:BIT & CODING",
    title: "The Logic Flame",
    dragon: "LOGIC FLAME",
    quote: "“Every problem hides a pattern.”",
    questions: [
      [
        "What sensor on the Micro:bit detects physical movement?",
        ["Thermometer", "Accelerometer", "Speaker"],
        1,
      ],
      ["Which symbol means “equal to” in a comparison?", ["==", "!=", "=>"], 0],
      [
        "What does a loop do?",
        ["Repeats instructions", "Deletes code", "Draws a picture"],
        0,
      ],
      [
        "What does LED stand for?",
        [
          "Light Emitting Diode",
          "Logic Engine Display",
          "Light Editing Device",
        ],
        0,
      ],
      [
        "Which button pair can trigger a third action on Micro:bit?",
        ["A + B together", "Button A twice", "The reset button"],
        0,
      ],
    ],
  },
  {
    realm: "REALM 03 / CANVA & DESIGN",
    title: "The Canvas Drake",
    dragon: "CANVAS DRAKE",
    quote: "“Make the message impossible to miss.”",
    questions: [
      [
        "What is the primary purpose of font contrast in posters?",
        ["Readability", "File size", "Printing cost"],
        0,
      ],
      [
        "Which layout principle creates visual order?",
        ["Hierarchy", "Randomness", "Noise"],
        0,
      ],
      [
        "What should a strong poster have?",
        ["One clear message", "Ten tiny headlines", "No whitespace"],
        0,
      ],
      [
        "Which format is best for a logo with a transparent background?",
        ["PNG", "TXT", "MP3"],
        0,
      ],
      [
        "What does alignment help create?",
        ["A clean structure", "A louder sound", "A larger file"],
        0,
      ],
    ],
  },
  {
    realm: "REALM 04 / AI & FUTURE TECH",
    title: "The Neural Dragon",
    dragon: "NEURAL DRAGON",
    quote: "“The future belongs to the curious.”",
    questions: [
      [
        "What Google tool generates quick audio/text summaries from documents?",
        ["Word", "NotebookLM", "Excel"],
        1,
      ],
      [
        "What is AI designed to do?",
        ["Learn from patterns", "Replace electricity", "Print paper"],
        0,
      ],
      [
        "Which instruction guides an AI response?",
        ["A prompt", "A pixel", "A folder"],
        0,
      ],
      [
        "What should you do before trusting AI output?",
        ["Check the facts", "Share it instantly", "Delete the source"],
        0,
      ],
      [
        "What is a responsible use of technology?",
        ["Protecting private data", "Copying every answer", "Ignoring sources"],
        0,
      ],
    ],
  },
];

let levelIndex = 0;
let questionIndex = 0;
let correct = 0;
let locked = false;
let storyTimer;
const $ = (id) => document.getElementById(id);
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((screen) => screen.classList.add("hidden"));
  $(id).classList.remove("hidden");
}
function renderLevel() {
  const level = levels[levelIndex];
  const question = level.questions[questionIndex];
  locked = false;
  $("realm-kicker").textContent = level.realm;
  $("realm-title").textContent = level.title;
  $("dragon-name").textContent = level.dragon;
  $("dragon-quote").textContent = level.quote;
  $("dragon-number").textContent = String(levelIndex + 1).padStart(2, "0");
  $("question-number").textContent =
    `QUESTION ${String(questionIndex + 1).padStart(2, "0")} / 05`;
  $("question-score").textContent = `${correct} correct`;
  $("question-text").textContent = question[0];
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("next-button").classList.add("hidden");
  $("progress-bar").style.width =
    `${((levelIndex * 5 + questionIndex) / 20) * 100 + 5}%`;
  $("key-count").textContent = `${levelIndex} / 4`;
  $("answers").innerHTML = question[1]
    .map(
      (answer, index) =>
        `<button class="answer" data-index="${index}"><span class="answer-label">${String.fromCharCode(65 + index)}</span><span>${answer}</span></button>`,
    )
    .join("");
  document
    .querySelectorAll(".answer")
    .forEach((button) =>
      button.addEventListener("click", () =>
        chooseAnswer(Number(button.dataset.index)),
      ),
    );
}
function chooseAnswer(answerIndex) {
  if (locked) return;
  locked = true;
  const question = levels[levelIndex].questions[questionIndex];
  const buttons = document.querySelectorAll(".answer");
  buttons.forEach((button) => {
    button.disabled = true;
    if (Number(button.dataset.index) === question[2])
      button.classList.add("correct");
  });
  if (answerIndex === question[2]) {
    correct++;
    $("feedback").textContent = "Correct. The dragon feels the gate unlock.";
    $("feedback").className = "feedback good";
  } else {
    buttons[answerIndex].classList.add("wrong");
    $("feedback").textContent =
      `Not quite. The answer was ${String.fromCharCode(65 + question[2])}.`;
    $("feedback").className = "feedback bad";
  }
  $("question-score").textContent = `${correct} correct`;
  $("next-button").classList.remove("hidden");
}
function nextQuestion() {
  if (!locked) return;
  questionIndex++;
  if (questionIndex === 5) {
    if (correct === 5) {
      levelIndex++;
      if (levelIndex === 4) {
        showScreen("win-screen");
        return;
      }
      questionIndex = 0;
      correct = 0;
    } else {
      $("feedback").textContent =
        `The dragon holds the key. You need 5 / 5 to pass this realm. Try again.`;
      $("feedback").className = "feedback bad";
      questionIndex = 0;
      correct = 0;
    }
  }
  renderLevel();
}
function startGame() {
  levelIndex = 0;
  questionIndex = 0;
  correct = 0;
  clearTimeout(storyTimer);
  showScreen("story-screen");
  storyTimer = setTimeout(beginQuiz, 7200);
}
function beginQuiz() {
  clearTimeout(storyTimer);
  showScreen("game-screen");
  renderLevel();
}
$("start-button").addEventListener("click", startGame);
$("skip-story").addEventListener("click", beginQuiz);
$("next-button").addEventListener("click", nextQuestion);
$("play-again-button").addEventListener("click", startGame);
document.addEventListener("keydown", (event) => {
  const index = { a: 0, b: 1, c: 2 }[event.key.toLowerCase()];
  if (index !== undefined && !locked) chooseAnswer(index);
  if (event.key === "Enter" && locked) nextQuestion();
});
