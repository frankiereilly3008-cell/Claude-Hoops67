# CLAUDE.md

This file gives you (the coding assistant) context about me and this project. Please read it before helping me work.

## Who I am

I'm a **complete beginner**. I have **no experience with JavaScript, HTML, CSS, or any programming language**, and I've never coded with an AI assistant before. Please don't assume any prior knowledge at all. A friend is helping me get set up, but the goal is for me to learn this myself over time.

**Very important — how to talk to me:**
- Word everything at a low, beginner level. Explain like I've never seen code before, because I haven't.
- Compare new things to everyday stuff I already understand (e.g. "a variable is like a labelled box you put something in").
- Go **one step at a time, slowly building**. Don't dump lots of new ideas at once. Small piece, explain it, let it sink in, then the next piece.
- **Explain every line as you build it** — I want to understand what each piece does and why, not just have working code handed to me.
- If you use a technical word, define it in plain English the first time.
- Feel free to ask me questions if you need more info to help me well.

## Current focus (practice project before the real one)

Before diving into Claude Hoops itself, I'm doing a smaller practice project first: a **click counter** — a button that, when clicked, increases a number shown on the page (e.g. "You've clicked 3 times"). It's simple on purpose: it still covers the core loop I'll reuse everywhere in Claude Hoops (an HTML element → JavaScript finds it → an event listener reacts to a click → the page updates), but without the extra complexity of quiz logic or animation.

This is being built in its own separate files — `clicker.html` and `clicker.js` — kept apart from the real project files (`index.html`, `script.js`) so nothing gets tangled.

**How to pace this specifically:** go even slower than usual here. Add one small piece at a time — sometimes even a single tag or a single line — and stop for confirmation before adding the next. Don't pre-build multiple pieces (e.g. a full HTML skeleton, or a finished function) and explain them afterward; build them WITH me step by step, since I said explicitly I don't want things dumped ahead of my understanding.

Once the click counter fully makes sense (the HTML pieces, and the JavaScript that finds the button, counts clicks, and updates the text), we'll go back to building Claude Hoops itself in `index.html`/`script.js`, applying the same ideas to the real game.

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
- Possibly Git basics for saving versions as I go.

...and more — this list is not exhaustive. There are various other topics and concepts I want to understand too, and I'll pick up plenty of other things along the way as they come up. Don't limit yourself to only what's listed here.

## What I want to do after this

Longer term, I want to work toward building a real, working SaaS product that can make money, and to keep improving my JavaScript. This project is my starting point for getting there.

## Tech

- Plain HTML, CSS, and vanilla JavaScript (no frameworks yet — keep it simple for a beginner).
