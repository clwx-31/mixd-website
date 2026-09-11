# MIXD — IB Business Management SL Project Website

A static website for **MIXD**, a fictional Waukesha apparel company offering
durable, versatile clothing that gives customers more control over how they mix
brands and express personal style. Built for an IB Business Management SL group project.

The site is plain HTML, CSS and JavaScript — no frameworks, no build step, no
installation. Every file can be edited directly in the browser on GitHub.com.

**Live site:** https://clwx-31.github.io/mixd-website/
**Repository:** https://github.com/clwx-31/mixd-website

> ## 👉 Group members: read [**EDITING-GUIDE.md**](EDITING-GUIDE.md) first
>
> That is the full step-by-step guide to editing this website in your browser —
> no installing anything, no coding knowledge needed, and nothing you can
> permanently break. It takes 5 minutes to read.

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
| About / Mission | `about.html` | Founders, mission, vision and core values |
| Products | `products.html` | Nine clothing categories, customer choice and warranty |
| Marketing Plan | `marketing.html` | Objectives, target market, 7Ps, SWOT, promotion, budget |
| Goodwill | `goodwill.html` | Nonprofit collaboration, purpose, activities and impact goals |
| Contact | `contact.html` | Contact details, message form, FAQs |

## File structure

```
mixd-website/
├── index.html        <- Home page (this filename must not change)
├── about.html        <- About / Mission
├── products.html     <- Products
├── marketing.html    <- Marketing Plan
├── goodwill.html     <- Goodwill nonprofit collaboration
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

**Full instructions: [EDITING-GUIDE.md](EDITING-GUIDE.md)** — read that one, it
covers everything below in detail.

The short version, once you have accepted your collaborator invite:

1. Go to https://github.com/clwx-31/mixd-website
2. Click the file you want to change (e.g. `about.html`)
3. Click the **pencil icon ✏️** at the top right
4. Change the words **between** the tags — never delete the `<` `>` brackets
5. Scroll down, write a short note like `Updated mission statement`
6. Keep **Commit directly to the `main` branch** selected, click **Commit changes**

Your change is live in about 30–60 seconds. Refresh the site to see it.

Words are in the `.html` files. Colours and fonts are in `css/style.css`.
Broke something? Nothing is ever lost — see the **Undo** section of the guide.

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
