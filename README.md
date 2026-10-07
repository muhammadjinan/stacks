# Stacks — Reading Tracker

A simple, glassy tracker for everyone juggling more than one book at a time.
No accounts, no server — everything lives on your device.

## Files (keep this folder structure)

```
index.html
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

- Books, your name/photo, and your background image are all saved in the browser's local storage on that one device — nothing is sent anywhere.
- Use **Export data** / **Import data** inside the app to move your library to another device, or as a manual backup. Exporting now and then is a good habit.
- **iPhone note:** Safari can clear a website's saved data after about a week of not opening it. Adding Stacks to the Home Screen (step 2) avoids this, so encourage people to do that.

## 4. Deploying updates later

Whenever you push changed files to the repo, open `sw.js` first and bump:

```js
var CACHE_NAME = 'stacks-cache-v3';
```

to `v4`, `v5`, etc. The app always fetches the latest files when online, so updates show up quickly either way — bumping just clears out the old offline copies. Your users' saved books are never touched by an update.

## 5. Adding more captions

The line under the "Stacks" title is picked at random, each time the app opens, from `captions.json`. To add more, open that file and add an entry in the same shape:

```json
{ "text": "Your quote here.", "author": "Who said it" }
```

Leave `"author": ""` for a line that shouldn't show an attribution (like the app's own tagline, the first entry). No code changes needed — just edit the file and redeploy (remember step 4 above).

## 6. Sharing

Tapping the "Stacks" title opens a Share popup. On phones, this opens the normal share sheet (Messages, WhatsApp, email, etc.) via the browser's native share feature. On a desktop browser without that feature, it copies the page's link to the clipboard instead.

## About the design

The background photo, its picture, and the glass card style are yours to customize — tap the profile button in the header to set a name, a profile picture, and a background image. The app automatically pulls an accent color from whatever background you choose, so buttons, progress bars, and the reading-goal ring all shift to match your photo.
