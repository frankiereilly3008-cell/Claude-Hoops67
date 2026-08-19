# CLAUDE.md

This file gives you (the coding assistant) context about me and this project. Please read it before helping me work.

## Who I am

I'm a **complete beginner**. I have **no experience with JavaScript, HTML, CSS, or any programming language**, and I've never coded with an AI assistant before. Please don't assume any prior knowledge at all. A friend is helping me get set up, but the goal is for me to learn this myself over time.

**Very important — how to talk to me:**
- Word everything at a low, beginner level. Explain like I've never seen code before, because I haven't.
- Compare new things to everyday stuff I already understand (e.g. "a variable is like a labelled box you put something in").
- **Pacing (updated):** I used to want every single line explained one at a time with a pause after each. Now that I've got the hang of the basics (from the click counter practice project), I just want a **rough, high-level understanding** of what code does and why — not a granular line-by-line walkthrough by default. If I ask about one specific line or concept, zoom in and explain just that in detail. Otherwise, keep explanations short and conceptual.
- **I don't want to manually type/write the code myself.** Write and edit the actual code for me — my job is to direct the project and understand what it does, not type it in myself. Don't ask me to type code snippets unless I specifically say I want to practice writing something.
- If you use a technical word, define it in plain English the first time.
- **Always cite file names and line numbers** when talking about a piece of code (e.g. "script.js, lines 141-158") so I can actually find it in my editor while you're explaining it.
- Feel free to ask me questions if you need more info to help me well.

## Learning Preferences

When explaining or generating code for me, default to explaining what each
chunk/block does in plain English (its purpose, inputs, and outputs) rather
than walking through every line. However, when a concept is new to me or is
foundational/important (e.g. a pattern I'll reuse often, or something core
to how the app works), break it down line by line so I actually understand
the mechanics, not just the result.

I'm a beginner learning JavaScript, HTML, Python, and Git while building
real projects, so lean toward teaching over just producing working code.

## Practice project (done)

Before diving into Claude Hoops itself, I did a smaller practice project first: a **click counter** — a button that, when clicked, increases a number shown on the page. This lives in `clicker.html`/`clicker.js` (the built-together version) and `practice.html`/`practice.js` (a blank version I rebuilt myself from scratch to test my understanding, with help debugging). Both are done and working — this phase is complete, kept around as reference, not something to keep building on.

## Current focus (the real project)

Now building Claude Hoops itself in `index.html`/`script.js`/`style.css`. Progress so far:
- 20-question quiz bank, shuffled into random order each page load, with shuffled answer order per question too (so the correct answer isn't always in the same spot).
- Score tracking with a visible scoreboard.
- Every 5 correct answers in a row unlocks a shot: a meter bar slides back and forth, click "Shoot!" to lock it in.
- Shots are randomized between 1-pointer (free throw, easy/slow), 2-pointer (normal), and 3-pointer (hardest — narrow target, fastest meter speed), each worth different points.
- Ball animates toward the hoop based on shot accuracy (Perfect / Good / Airball).
- Full dark-gold "luxury" visual theme (`style.css`) — styled quiz buttons, scoreboard, shot buttons, plus a hand-built hoop (backboard + rim + net) and a shaded basketball (seams via CSS pseudo-elements), all done without images.
- Still possibly worth adding: a "Play Again" / restart option once the quiz ends, sound effects, difficulty tuning, mobile-friendliness.

## Tools set up

- Git is installed and this folder is a git repo, pushed to GitHub at `https://github.com/frankiereilly3008-cell/Claude-Hoops67.git`.
- **I run `git commit` and `git push` myself** (a friend is teaching me git separately) — Claude can help with setup steps (init, staging, remotes, explaining commands) but shouldn't run the actual commit/push unless I explicitly ask.

## What the project is

A browser-based quiz game about JavaScript concepts. Answering a question correctly unlocks a mini basketball shooting game as a reward: a meter bar moves back and forth beneath a hoop, split into color zones (grey on the edges, orange in the middle, green in the dead center). I click to "lock in" a shot — the closer to green, the better the shot goes in. The ball then animates into the hoop based on accuracy.

## My goal by the end

To **understand core concepts** used in software development, and get a rough, beginner-level grasp of how it all fits together. I care more about understanding the concepts and the "why" than about writing perfect code.

## What I'm aiming to learn (with simple examples)

This is the fuller picture, but **these are NOT the only topics and concepts I want to understand** — there are various others too, and I'm open to learning anything relevant that comes up. Treat this list as a starting point, not a limit. Teach these gradually as they come up while building — not all at once.

**HTML — the structure (like the skeleton of a page)**
- What HTML is and how tags work — e.g. `<button>Click me</button>` makes a button.
- Building page structure with containers and text — like rooms in a house.
- IDs and classes — name tags on elements so code can find them, e.g. `id="scoreboard"`.

**CSS — the styling (like paint and furniture on the skeleton)**
- Colors, sizes, spacing — e.g. making the meter zones grey, orange, and green.
- Positioning — placing the hoop, ball, and meter where I want them.
- Animations — the ball arcing into the hoop, the bar sliding back and forth.

**JavaScript — the logic (the brain that makes things happen)**
- Variables — labelled boxes that hold info, e.g. `let score = 0`.
- Data types — numbers, text ("strings"), true/false ("booleans").
- Functions — reusable recipes, e.g. a `takeShot()` recipe I can run whenever.
- Conditionals (`if/else`) — decisions, e.g. "IF the click was on green, it's a perfect shot."
- Loops — repeating something, e.g. going through each quiz question in turn.
- Arrays — a list, e.g. all my questions in one place: `["Q1", "Q2", "Q3"]`.
- Objects — a bundle of related info, e.g. `{ question: "...", answer: "...", difficulty: "hard" }`.
- Operators — comparing and combining, e.g. `5 > 3` or `score + 1`.

**The DOM — how JS talks to the page (like a remote control for the HTML)**
- What the DOM is — a live map of the page that JS can change.
- Finding elements — e.g. `document.querySelector(".meter")` grabs the meter.
- Changing text and styles on the fly — e.g. updating the score when I answer right.
- Showing and hiding things — swapping between the quiz screen and the shot screen.

**Events — making it interactive (reacting to what I do)**
- Click events — answering a question, taking a shot.
- Event listeners — telling the code "when this button is clicked, run this."
- Reading when/where a click happened — key to timing the moving meter.

**Timing & animation — things that move on their own**
- `setInterval` / `requestAnimationFrame` — repeat code on a timer to slide the bar.
- Controlling speed and stopping/starting the motion.

**Game logic & state — keeping track of what's going on**
- "State" — the game's memory: which question I'm on, my score, what screen I'm on.
- Turning a click position into a score — the math behind grey/orange/green.
- Managing the flow — question, then answer, then shot, then next question.

**Programming habits — the invisible skills**
- Reading code and understanding what each line does.
- Debugging — finding and fixing things when they break.
- Breaking a big problem into small steps.
- Using the browser console to test things and read errors.
- Working well with an AI assistant — asking good questions, checking the output.

**Tools & workflow**
- How a browser runs my code.
- Basic file structure — how the HTML, CSS, and JS files link together.
- Git basics for saving versions as I go (set up now — see "Tools set up" above).

...and more — this list is not exhaustive. There are various other topics and concepts I want to understand too, and I'll pick up plenty of other things along the way as they come up. Don't limit yourself to only what's listed here.

## What I want to do after this

Longer term, I want to work toward building a real, working SaaS product that can make money, and to keep improving my JavaScript. This project is my starting point for getting there.

## Tech

- Plain HTML, CSS, and vanilla JavaScript (no frameworks yet — keep it simple for a beginner).
