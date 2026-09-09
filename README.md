# MIXD — IB Business Management SL Project Website

A static website for **MIXD**, a fictional apparel label that releases limited-run
clothing built from unexpected brand collaborations. Built for an IB Business
Management SL group project.

The site is plain HTML, CSS and JavaScript — no frameworks, no build step, no
installation. Every file can be edited directly in the browser on GitHub.com.

**Live site:** https://clwx-31.github.io/mixd-website/
**Repository:** https://github.com/clwx-31/mixd-website

---

## For the teacher

Everything is public and needs **no login and no account**:

- **Live website:** https://clwx-31.github.io/mixd-website/
- **All project files:** https://github.com/clwx-31/mixd-website
- **Full commit history (who changed what, and when):**
  https://github.com/clwx-31/mixd-website/commits/main

Every edit any group member makes is recorded permanently in that commit history
with their name, the date, and exactly what they changed.

---

## What is on the site

| Page | File | What it covers |
|---|---|---|
| Home | `index.html` | Introduction, what MIXD does, key figures |
| About / Mission | `about.html` | Story, mission, vision, values, team, milestones |
| Products | `products.html` | Collaboration drops and the core range |
| Marketing Plan | `marketing.html` | Objectives, target market, 7Ps, SWOT, promotion, budget |
| Contact | `contact.html` | Contact details, message form, FAQs |

## File structure

```
mixd-website/
├── index.html        <- Home page (this filename must not change)
├── about.html        <- About / Mission
├── products.html     <- Products
├── marketing.html    <- Marketing Plan
├── contact.html      <- Contact
├── css/
│   └── style.css     <- ALL colours, fonts and spacing live here
├── js/
│   └── main.js       <- Menu button, fade-in effect, contact form
├── images/           <- Put any image files here
├── visuals/          <- Separate workspace for design/graphics work (see below)
└── README.md         <- This file
```

**Rule of thumb:** words are in the `.html` files, looks are in `css/style.css`.

Every file is commented in plain English. Anything between `<!--` and `-->` in an
HTML file is a note to you and does not appear on the website.


### The `visuals/` folder

Graphics work (logo, favicon, share image, diagrams, icons) happens in its own
`visuals/` folder so it never collides with edits to the pages themselves.
`visuals/AGENTS.md` is the brief — brand colours, constraints and the to-do list.
Finished assets land in `visuals/exports/` and are listed in `visuals/HANDOFF.md`
with the exact snippet to paste into a page.

Nothing in `visuals/` affects the live site until a snippet from `HANDOFF.md` is
pasted into one of the `.html` files.

---

## How to edit the site — zero setup, straight on GitHub.com

You do **not** need to install anything. You need a free GitHub account and to be
added as a collaborator (see below), then:

1. Go to https://github.com/clwx-31/mixd-website
2. Click the file you want to change (for example `about.html`)
3. Click the **pencil icon** (✏️) at the top right of the file
4. Change the text between the tags — for example turn
   `<h1>Our mission</h1>` into `<h1>What we stand for</h1>`
5. Scroll to the bottom, type a short note in **Commit changes** describing what
   you did (e.g. "Updated mission statement")
6. Make sure **Commit directly to the `main` branch** is selected
7. Click **Commit changes**

Your change is live on the website in about 30–60 seconds. Refresh the page.

### Safe editing tips

- Only change the words **between** the tags: `<p>change this bit</p>`
- Never delete the `<` `>` brackets — they hold the page together
- Every opening tag like `<p>` needs its closing tag `</p>`
- To change a colour, open `css/style.css` and edit the colour codes at the very
  top of the file (they look like `#7A4DFF`). They apply across the whole site.
- If a page looks broken after an edit, go to the **History** tab of that file,
  open the previous version, and copy the old text back in. Nothing is ever lost.

### Using AI to help you edit

If you are stuck on the HTML or CSS, open **claude.ai** or **chatgpt.com** in
another browser tab (both have free versions) and:

1. Copy the section of the file you are struggling with
2. Paste it in and describe what you want, e.g. *"Here is a chunk of my HTML.
   Add a fourth product card that matches the existing three, for a bucket hat
   at $30."*
3. Copy the code it gives back
4. Paste it into the GitHub editor in place of the old section, and commit

This works well for adding cards, rows in a table, or changing colours. Always
check the live site afterwards to make sure it still looks right.

---

## Adding group members as collaborators

Only the repository owner needs to do this, once per person:

1. Go to https://github.com/clwx-31/mixd-website/settings/access
2. Click **Add people**
3. Type the person's GitHub username or email, select them, and choose the
   **Write** role
4. Click **Add ... to this repository**
5. They will get an email invitation — they must click the link in it to accept

Once accepted, they can edit any file with the pencil icon as described above.

---

## Viewing the site on your own computer (optional)

You do not need to, but if you want to: download the repository
(**Code → Download ZIP**), unzip it, and double-click `index.html`. It opens in
your browser and works exactly the same.

---

## Notes

MIXD is a fictional company created for a school assignment. All brand partners,
figures, addresses and email addresses on the site are invented examples. The
contact form does not send real messages — it shows a confirmation instead
(instructions for making it send for real are inside `js/main.js`).
