# How to edit the MIXD website

**Read this once. It takes 5 minutes and you will not break anything.**

You do not need to install anything. You do not need to know how to code. Every
change happens in your browser on GitHub.com, and every mistake can be undone.

---

## Step 0 — Get access (one time only)

1. Make a free GitHub account at https://github.com/signup if you do not have one
2. Send your **GitHub username** to whoever owns the repo
3. You will get an email invitation — **click the link in it to accept**

You are in. You will not need to do this again.

---

## Step 1 — The golden rules

Read these four lines before you touch anything:

1. **Only change words. Never delete the `<` and `>` brackets.**
2. Every opening tag has a closing tag: `<p>hello</p>`. If you delete one, delete both.
3. Anything between `<!--` and `-->` is a **note to you**. It does not appear on the website.
4. **You cannot permanently break anything.** Every version is saved forever. See "Undo" at the bottom.

---

## Step 2 — Make your first edit

1. Go to https://github.com/clwx-31/mixd-website
2. Click the file you want to change — for example **`about.html`**
3. Click the **pencil icon ✏️** near the top right
4. Find the text you want to change and type over it
5. Scroll to the bottom to the **Commit changes** box
6. Write a short note saying what you did — e.g. `Updated the mission statement`
7. Leave **"Commit directly to the `main` branch"** selected
8. Click the green **Commit changes** button

**Wait 30–60 seconds, then refresh https://clwx-31.github.io/mixd-website/ — your
change is live on the real website.**

If nothing changed, wait another minute and hard-refresh (`Cmd+Shift+R` on Mac,
`Ctrl+F5` on Windows).

---

## Which file do I open?

| I want to change… | Open this file |
|---|---|
| The front page | `index.html` |
| Mission, vision, values, team, story | `about.html` |
| Products, prices, product descriptions | `products.html` |
| Objectives, target market, 7Ps, SWOT, budget | `marketing.html` |
| Contact details, FAQs | `contact.html` |
| **Colours and fonts (whole site at once)** | `css/style.css` |

Rule of thumb: **words live in the `.html` files, looks live in `css/style.css`.**

---

## Common jobs, step by step

### Change some text

Find it and type over it. Only touch what is between the tags:

```html
<h2>Our mission</h2>          ->   <h2>What we stand for</h2>
<p>Some old sentence.</p>     ->   <p>Your new sentence.</p>
```

### Add a bullet point

Find a list. Copy one whole `<li>...</li>` line, paste it underneath, change the words:

```html
<ul>
  <li>Collaboration model gives us access to partner audiences</li>
  <li>Scarcity drives fast sell-through</li>
  <li>YOUR NEW POINT HERE</li>
</ul>
```

### Add a row to a table

Find the table. Copy one whole `<tr>` block — **from `<tr>` to `</tr>`** — paste it
below, change the words in each `<td>`:

```html
<tr>
  <td><strong>2027 Q1</strong></td>
  <td>What happened</td>
  <td>Why it mattered</td>
</tr>
```

Keep the same number of `<td>` cells as the other rows or the table goes crooked.

### Add a product

Open `products.html`, find a block that starts with `<!-- ---------- Product 3 ---------- -->`.
Copy **everything** from `<article class="product">` down to its `</article>`,
paste it after the last product, then change the name, the description and the price.

The picture is the `<svg>` part. To change its two colours, find the two
`stop-color="#XXXXXX"` values and swap in different colour codes. **Also change the
`id="mix3"` and `url(#mix3)` to a number no other product is using** (e.g. `mix7`) —
if two products share an id, both pictures go wrong.

### Add a question to the FAQ

Open `contact.html`, copy one whole `<details>...</details>` block, change the
question in `<summary>` and the answer in `<p>`.

### Change the colours of the whole site

Open `css/style.css`. The first ~25 lines are the colours. Change a hex code and
everything using it updates at once:

```css
--brand-violet:      #8B5CF6;
--brand-violet-deep: #5B21B6;
--brand-violet-soft: #C4B5FD;
```

Pick new codes at https://coolors.co or just search "colour picker". Change one at
a time and check the live site so you know which change did what.

### Add a photo

1. Go to the `images/` folder on GitHub
2. **Add file → Upload files**, drag your photo in, click **Commit changes**
3. In the page where you want it, add:

```html
<img src="images/yourphoto.jpg" alt="Short description of the photo">
```

Use lowercase filenames with no spaces — `team-photo.jpg`, not `Team Photo.JPG`.

---

## Getting AI to write the code for you

This is the fastest way if you are stuck. Open **claude.ai** or **chatgpt.com** in
another tab (free versions work fine):

1. Copy the chunk of the file you are struggling with
2. Paste it in and say what you want. Be specific, and tell it the constraints:

> Here is a chunk of HTML from my school project website. Add a fourth product
> card that matches the existing three exactly — a bucket hat, $30, partner brand
> "Peak & Pine Outdoors". Keep the same classes and structure. Give the SVG a
> unique id. Reply with just the code.

3. Copy what it gives back
4. Paste it into the GitHub editor in place of the old chunk
5. Commit, wait a minute, check the live site

**Always check the live site afterwards.** AI sometimes changes things you did not
ask it to change.

---

## Undo — you cannot break this permanently

**If the page looks wrong or broken:**

1. Go to the file on GitHub
2. Click **History** (top right of the file view)
3. Click the version from *before* your change
4. Click the **⋯** menu → **View file** → copy all the text
5. Go back to the current file, click the pencil ✏️, delete everything, paste the
   old text back, commit

**If the whole site is broken and you are panicking:** message the repo owner. Every
single version of every file is saved forever. Nothing is ever actually lost.

---

## Etiquette so we do not overwrite each other

- **Tell the group chat which file you are working on** before you start
- Two people editing the *same file* at the same time will cause a conflict —
  two people editing *different files* is completely fine
- Write a real commit message (`Added SWOT threats`) not `update` — it is how the
  teacher sees who did what
- Keep the graphics work in the `visuals/` folder separate; do not edit page files
  and graphics in the same commit

---

## Quick links

- **Live site:** https://clwx-31.github.io/mixd-website/
- **All files:** https://github.com/clwx-31/mixd-website
- **Who changed what:** https://github.com/clwx-31/mixd-website/commits/main
