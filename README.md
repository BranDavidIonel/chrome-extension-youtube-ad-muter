# 🎧 chrome-extension-youtube-ad-muter

This Chrome extension automatically mutes YouTube ads, displays a temporary overlay image while the ad plays, and tries to skip the ad as soon as the "Skip" button appears. Once the ad ends, the audio is restored and the overlay is removed.

---

## 🚀 Features

- 🔇 Mutes audio during YouTube ads
- 🖼️ Displays a full-screen overlay image while an ad is playing
- ⏭️ Automatically clicks the "Skip Ad" button when available
- 🔊 Unmutes audio and removes overlay after the ad ends
- 🔍 Shows helpful log messages in the browser console (for debugging)

---

## 🛠 How to Install (Manual)

> This is a local/unpacked extension — you can load it directly into Chrome for testing or personal use.

1. Clone or download this repository
2. Open Chrome and go to: `chrome://extensions/`
3. Enable **Developer mode** (top-right corner)
4. Click **"Load unpacked"**
5. Select the folder: `chrome-extension-youtube-ad-muter`
6. Done! ✅

Now open YouTube and check the console (`Ctrl + Shift + J`) to see logs when ads appear.

---

## 🧪 Notes

- This extension does **not block ads** — it mutes them and optionally skips them when possible.
- It does **not require permissions** other than access to YouTube (`https://www.youtube.com/*`)
- The overlay image is a simple placeholder. You can change it in `content.js`.

---

## 📁 Files

- `manifest.json` – Chrome extension config
- `content.js` – Script that runs on YouTube pages
- `README.md` – This file (documentation)

---

## 📷 Example Behavior

When a YouTube ad starts:
- Audio is muted
- Overlay image is shown
- Skip button is clicked if visible

When the ad ends:
- Audio is unmuted
- Overlay is removed

---

## 🤖 Author

Made with ❤️ by [Bran David-Ionel]

---
