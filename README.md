# HOPE 2.0 Dragon Quest

HOPE 2.0 is an interactive digital-skills game for booth or classroom use. The Girl travels through four technology realms, but each realm is guarded by a Dragon. Players answer five multiple-choice questions correctly to defeat each Dragon and collect its key.

Complete all four realms to unlock:

> Get Ready for HOPE 3.0!

## Story Flow

1. The animated introduction shows the Girl searching for HOPE.
2. A Dragon blocks the path to the HOPE gate.
3. The player answers the realm quiz.
4. A perfect score unlocks the next Dragon.
5. Completing all four realms reveals the victory message.

## Realms

| Level | Realm                | Dragon        |
| ----- | -------------------- | ------------- |
| 1     | ICT and Office       | Word Wizard   |
| 2     | Micro:bit and Coding | Logic Flame   |
| 3     | Canva and Design     | Canvas Drake  |
| 4     | AI and Future Tech   | Neural Dragon |

Each level has five questions and requires 5/5 correct answers to pass. A wrong answer makes the player retry that level.

## Run Locally

No build tools or dependencies are required.

1. Open `index.html` in a modern web browser.
2. Select **Begin the quest**.
3. Watch the story intro or choose **Skip intro**.
4. Answer the quiz questions.

For a local development server, run one of these commands from the project folder:

```powershell
# Python
py -m http.server 8000
```

Then open <http://localhost:8000>.

## Controls

- Click an answer button to choose an option.
- Press `A`, `B`, or `C` to select an answer from the keyboard.
- Press `Enter` to continue after answering.
- Select **Skip intro** to move directly to the first question.
- Select **Play again** after winning to restart.

## Micro:bit Booth Mapping

The browser version currently uses click and keyboard controls. For a physical Micro:bit booth setup, map the inputs like this:

- Button A: Select option A
- Button B: Select option B
- Button A + B: Select option C
- Shake: Restart or play again

The Micro:bit input layer can be connected later through a serial, Bluetooth, or web bridge without changing the quiz content.

## Project Files

- `index.html`: Game screens and accessible content
- `styles.css`: Responsive layout, visual design, and story animation
- `script.js`: Story transition, quiz questions, scoring, level progression, and victory state

## Validation

The main game script can be syntax-checked with:

```powershell
node --check .\script.js
```
