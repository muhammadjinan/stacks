# Stacks — Reading Tracker

A simple, glassy tracker for everyone juggling more than one book at a time. 
No accounts, no server — everything lives on your device.

## Features
* **Reading Shelf:** Track your active books, pages logged, daily pace, and yearly reading goals.
* **Lending & Borrowing:** Keep a record of books you've lent out to friends or borrowed from others.
* **Glossary & Flashcards:** Search for words using a built-in dictionary, save them, and memorize them using a Spaced Repetition System (SRS) with audio pronunciation and daily streak tracking.
* **Dynamic Theme:** The app automatically extracts an accent color from your uploaded background image to style the entire interface.

## Files (keep this folder structure)

```
index.html
styles.css
manifest.json
captions.json
sw.js
icons/
  icon-32.png
  icon-192.png
  icon-512.png
  icon-512-maskable.png
  apple-touch-icon.png
README.md
```

## 1. Put it on GitHub Pages

1. Create a new repo and upload all the files above, keeping `icons/` as a subfolder.
2. Repo → **Settings → Pages** → under "Build and deployment," choose **Deploy from a branch**, pick your default branch and `/ (root)`.
3. Wait a minute or two, then open the URL GitHub gives you.

## 2. Install it like a real app

- **Android / Chrome / Edge:** visit the site once. You'll see an "Install" prompt, or use the browser menu → **Install app** (or **Add to Home screen**). It then opens in its own window with its own icon — no address bar — and works fully offline after that first visit.
- **iPhone / iPad (Safari):** open the site → tap the **Share** icon → **Add to Home Screen**. iOS doesn't show an automatic install banner the way Android does, but the result is the same: a home-screen icon that launches standalone.
- **Desktop (Chrome/Edge):** an install icon appears in the address bar; clicking it adds Stacks as a desktop app.

## 3. Your data

- Books, loans, vocabulary flashcards, study streaks, your name/photo, and your background image are all saved in the browser's local storage on that one device — nothing is sent anywhere.
- Use **Export data** / **Import data** inside the app to move your library to another device, or as a manual backup. Exporting now and then is a good habit.
- **iPhone note:** Safari can clear a website's saved data after about a week of not opening it. Adding Stacks to the Home Screen (step 2) avoids this, so encourage people to do that.

## 4. Deploying updates later

Whenever you push changed files to the repo, open `sw.js` first and bump:

```js
var CACHE_NAME = 'stacks-cache-v4';
```

to `v5`, `v6`, etc. The app always fetches the latest files when online, so updates show up quickly either way — bumping just clears out the old offline copies. Your users' saved books and flashcards are never touched by an update.

## 5. Adding more captions

The line under the "Stacks" title is picked at random, each time the app opens, from `captions.json`. To add more, open that file and add an entry in the same shape:

```json
{ "text": "Your quote here.", "author": "Who said it" }
```

Leave `"author": ""` for a line that shouldn't show an attribution (like the app's own tagline, the first entry). No code changes needed — just edit the file and redeploy (remember step 4 above).

## 6. Navigation & Menus

- **Main Menu:** Tap the hamburger menu icon (≡) in the top left to access **Share Stacks**, **Lending & Borrowing**, and the **Glossary & Flashcards** practice view.
- **Action Button (FAB):** The floating `+` button in the bottom right corner expands into a speed-dial menu. Use it to quickly add a new book to your shelf or open the Dictionary to search for a new word. 
- **Sharing:** Tapping "Share Stacks" in the menu opens the normal share sheet (Messages, WhatsApp, email, etc.) via the browser's native share feature. On a desktop browser without that feature, it copies the page's link to the clipboard instead.

## About the design

The background photo, its picture, and the glass card style are yours to customize — tap the profile button in the header to set a name, a profile picture, and a background image. The app automatically pulls an accent color from whatever background you choose, so buttons, progress bars, flashcards, and the reading-goal ring all shift to match your photo.