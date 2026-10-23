const levels = [
  {
    realm: "REALM 01 / ICT & OFFICE",
    title: "The Word Wizard",
    dragon: "WORD WIZARD",
    quote: "“Knowledge is the sharpest key.”",
    questions: [
      [
        "A team member's Excel formula shows #SPILL! after adding a dynamic array formula. What is causing this?",
        [
          "A non-empty cell is blocking the array output range.",
          "A formula contains a circular reference to itself.",
          "The formula exceeds the maximum allowable character limit.",
        ],
        0,
      ],
      [
        "You need to export a graphic containing continuous color gradients for a high-res print poster. Which vector format avoids quality loss and pixelation?",
        [".png", ".svg", ".gif"],
        1,
      ],
      [
        "When co-authoring a shared cloud document, two users edit the exact same paragraph simultaneously while offline. What happens upon reconnecting?",
        [
          "The cloud server automatically deletes both edits to prevent data loss.",
          "The application flags a conflict and asks the user to merge or choose edits.",
          "The larger file size edit permanently overwrites the smaller one.",
        ],
        1,
      ],
      [
        "In a large spreadsheet, a VLOOKUP query fails and returns #N/A even though the key clearly exists in column 1. What is the most likely cause?",
        [
          "Unseen leading/trailing spaces or mismatched data types (Text vs Number).",
          "The target search column contains duplicate records.",
          "Automatic calculation mode is disabled across the workbook.",
        ],
        0,
      ],
      [
        "Why is .webp preferred over .png or .jpg for modern interactive web applications?",
        [
          "It supports 3D vector rendering inside spreadsheet formulas.",
          "It provides superior lossless and lossy compression at significantly smaller file sizes.",
          "It encrypts image data automatically to protect intellectual property.",
        ],
        1,
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
        "Inside a Micro:bit forever loop, a student reads a sensor continuously without a pause block. What issue occurs?",
        [
          "The accelerometer hardware permanently locks up.",
          "Background event handlers get starved of CPU execution time, freezing input response.",
          "The Micro:bit screen automatically clears all LED displays.",
        ],
        1,
      ],
      [
        "You want to toggle an LED matrix display on and off using Button A. Which logic state management technique should you use?",
        [
          "A global boolean state variable flipped inside an on button A pressed event.",
          "A nested while loop that continuously checks button A is pressed.",
          "An array containing integer values from 0 to 255.",
        ],
        0,
      ],
      [
        "When reading raw values from the Micro:bit compass (magnetometer), the output readings jump randomly between 0 and 350 degrees. How do you debug this?",
        [
          "Re-flash the hex file with a higher baud rate setting.",
          "Execute a hardware calibration routine to account for ambient magnetic interference.",
          "Replace the if statement with a for loop.",
        ],
        1,
      ],
      [
        "What is the primary difference between an edge-triggered event, such as on pin P0 pressed, and a polled state, such as pin P0 is pressed?",
        [
          "Events execute asynchronously via interrupts; polled states must be actively checked in code.",
          "Events run faster than polled states by using external memory.",
          "Polled states consume zero battery power on the Micro:bit.",
        ],
        0,
      ],
      [
        "A loop increments a variable x by 1 until x == 10. Due to a sensor glitch, x jumps from 9 directly to 11. What bug occurs?",
        [
          "An infinite loop occurs because the exact termination condition x == 10 was missed.",
          "The variable automatically resets to zero.",
          "The Micro:bit triggers a hardware reset automatically.",
        ],
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
        "A poster design feels cluttered and hard to navigate despite using clean typography. What visual principle is missing?",
        [
          "Increasing font weight on every line of body text.",
          "Strategic application of negative space (whitespace) to group related elements.",
          "Adding saturated drop shadows behind every text box.",
        ],
        1,
      ],
      [
        "According to WCAG accessibility guidelines, what minimum contrast ratio is required for standard body text against its background?",
        ["1.5:1", "4.5:1", "10:1"],
        1,
      ],
      [
        "When designing a flyer for both printed posters and mobile screen views, which layout approach ensures visual hierarchy remains intact?",
        [
          "Using a strict typographic scale where heading sizes directly reflect content importance.",
          "Scaling all text elements to fill 100% of the canvas width.",
          "Using light grey text on white backgrounds for all subheadings.",
        ],
        0,
      ],
      [
        "In design composition, what is the core purpose of Focal Point Alignment?",
        [
          "Directing the viewer's eye to the primary Call-to-Action (CTA) first.",
          "Ensuring all graphical elements are perfectly centered on the page.",
          "Equalizing the brightness values of every image asset.",
        ],
        0,
      ],
      [
        "Why should you avoid using pure black (#000000) text on a pure white (#FFFFFF) background in digital interfaces?",
        [
          "It causes high contrast strain and harsh visual vibrations for screen readers/viewers.",
          "Web browsers cannot render pure black pixels accurately.",
          "It automatically increases PDF file export sizes.",
        ],
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
        "An AI model gives a confident, highly detailed technical answer that contains fabricated citation URLs. What is this called?",
        ["Model Drift", "Hallucination", "Data Poisoning"],
        1,
      ],
      [
        "When using Retrieval-Augmented Generation (RAG) tools like NotebookLM, how does the system minimize false information?",
        [
          "By generating answers grounded strictly in user-uploaded reference documents.",
          "By searching the entire live web in real time for every prompt.",
          "By disabling natural language responses and returning code only.",
        ],
        0,
      ],
      [
        "Which prompt structure technique yields the highest quality, most precise output from Large Language Models (LLMs)?",
        [
          "Role + Task Context + Constraints + Expected Output Format.",
          "Single-word keywords separated by commas.",
          "Repeatedly pasting the same query multiple times in one prompt.",
        ],
        0,
      ],
      [
        "Why is it unsafe to paste confidential personal data or proprietary code into standard free-tier public AI chatbots?",
        [
          "Data may be stored and used to re-train future base models, exposing private inputs.",
          "Public AI tools automatically publish user conversations on public web forums.",
          "Large language models lock user accounts when sensitive words are detected.",
        ],
        0,
      ],
      [
        "When evaluating an AI-generated summary of an academic study, what is the most critical verification step?",
        [
          "Checking the source document's methodology and original data against the claims.",
          "Asking the exact same AI model if its previous response was 100% true.",
          "Translating the generated text into another language to test accuracy.",
        ],
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
