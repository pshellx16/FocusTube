# 🎯 FocusTube

> **A clean, open-source, distraction-free YouTube video & playlist player built for students, developers, and focused learners.**

Watch only the lecture, tutorial, or playlist you came for — **without** YouTube's homepage feed, sidebar suggestions, Shorts rabbit holes, comments, or AI/algorithmic recommendations.

---

## 💡 Why FocusTube Was Built

YouTube is full of features designed to steal your attention:
- 🌀 Algorithmic & AI/non-AI recommendation feeds
- 📱 Endless YouTube Shorts scrolling
- 💬 Distracting comments, sidebars, and autoplay traps

**FocusTube removes all of that.** It gives students, tech learners, developers, and everyday users one simple place to paste a link and learn in peace — while keeping the app **simple, lightweight, and 100% respectful of your privacy**.

---

## 🛡️ Privacy & Simplicity First

FocusTube is intentionally built so you never have to worry about your data:

- 🧱 **Pure HTML, CSS, and Vanilla JS** — No frontend or backend frameworks, no bloat.
- 💻 **100% Client-Side** — Runs completely in your browser with no backend server logic.
- 🚫 **Zero Device Storage** — No `localStorage`, no `sessionStorage`, no cookies, and no `IndexedDB`. Nothing is saved on your device.
- 🔒 **No External APIs or Tracking** — No accounts, no ads, no analytics, and no third-party data proxies. Uses only the official YouTube IFrame Player API and YouTube thumbnails (`i.ytimg.com`).

---

## ✨ Key Features

- 🧼 **Clean Start Screen** — Before you paste a link, only the FocusTube title and link box appear. No empty black box or extra buttons. Clearing the link hides everything again.
- 🚫 **YouTube Shorts Blocked** — Any YouTube Shorts link (`/shorts/...`) is blocked automatically to prevent short-form distraction. Normal short-length videos (`/watch?v=...` or `youtu.be/...`) still work normally.
- ⚡ **Paste & Auto-Play** — Paste a link into the box (or tap **Paste & Play**) and playback starts right away.
- 🔗 **Smart Link Support** — Works with standard YouTube links, `youtu.be` links, playlists, Live streams, timestamps (`?t=1m30s`, `&start=90`, `#t=45`), raw video/playlist IDs, and even shared messages containing a YouTube link.
- 🖥️ **Fits Your Screen Without Scrolling** — On laptops and desktops, the 16:9 player automatically fits your screen height so the video and all controls stay visible together.
- 📚 **Playlist Navigator & Thumbnail Tray**:
  - **◀ Prev / Next ▶** buttons and direct **Video #** jump box.
  - Collapsible **Show Videos** tray with thumbnails, video numbers, active video highlight, and smooth auto-scroll.
  - Titles and durations of videos you play appear temporarily in memory only — everything clears when you refresh or close the tab.
- 🔖 **Zero-Storage Resume Link (`Copy Link`)** — Copies a clean URL with your exact video, playlist number, and timestamp (`?list=...&index=5&t=612`) so you can bookmark your own progress without FocusTube storing anything.
- 🎬 **Focused View Modes**:
  - **Focus Mode** — Full-screen distraction-free view with a minimal exit bar (supports `Esc` and mobile Back button).
  - **Theater Mode** — Wider player view on desktop screens.
  - **Fullscreen** — Native fullscreen toggle (auto-hidden on browsers that do not support it, like iOS Safari).
- 📱 **Smooth on Mobile & Desktop** — Touch-friendly controls, safe-area notch support, and landscape phone support.
- ℹ️ **Non-Intrusive About & Support Modal** — Clean, distraction-free info dialog accessible from the header and footer with creator, contribution, and support links.

---

## 🚀 How to Use

### 1. Play a Video or Playlist
- Copy any YouTube video or playlist link.
- Paste it into the box (**auto-plays**), or tap **Paste & Play**, or press **Enter** / click **Play**.

### 2. Study With a Playlist
- Use **◀ Prev** and **Next ▶** to move between lectures.
- Type any lecture number in **Video #** and click **Go** (or press **Enter**) to jump directly.
- Click **Show Videos** to open the thumbnail tray and tap any lecture to play it.

### 3. Save Your Spot (Without Storage)
- Click **Copy Link** to copy a resume link with your current video, playlist index, and exact timestamp.
- Bookmark it in your browser or paste it into your notes app to resume later.

### 4. Stay Focused & Reset
- Click **Focus Mode** to hide everything except the video (press **Esc**, **✕ Exit Focus**, or your phone's Back button to exit).
- Click **Clear** — or delete the link from the input box — to stop the video and return to the clean start screen.

### ✅ Supported Link Examples

```text
https://www.youtube.com/watch?v=VIDEO_ID
https://youtu.be/VIDEO_ID?t=1m30s
https://www.youtube.com/playlist?list=PLAYLIST_ID
https://www.youtube.com/watch?v=VIDEO_ID&list=PLAYLIST_ID&index=4
https://www.youtube.com/live/VIDEO_ID
VIDEO_ID
PLAYLIST_ID
```

*(Note: `/shorts/...` links are intentionally blocked.)*

---

## 🌐 How to Run or Host FocusTube

### ⚠️ Do NOT Open Directly via `file:///`
Opening `index.html` directly from your file explorer (`file:///...`) **will break key features**:
- ❌ YouTube often blocks playback with **Error 153** because `file:///` sends no valid `http://` or `https://` origin/referrer.
- ❌ Browser security blocks **Paste & Play** (Clipboard API) and URL/Back-button history sync on `file:///`.

### ✅ 3 Easy Ways That Work 100%

1. **Use the Public Live Link**
   - Open the hosted link directly in your browser (for example, GitHub Pages) — no installation needed.

2. **Run Locally on `localhost` or `127.0.0.1` (Any Port)**
   - **With Node.js (zero dependencies):**
     ```bash
     npm run dev
     ```
   - **With Python:**
     ```bash
     python3 -m http.server 3000
     ```
   - **With VS Code:** Install the **Live Server** extension and click **Go Live**.
   - Then open `http://localhost:3000` or `http://127.0.0.1:3000` (replace `3000` with your port number).

3. **Self-Host Anywhere for Free**
   - Upload `index.html` to **GitHub Pages**, **Netlify**, **Vercel**, **Cloudflare Pages**, or any static web server (Nginx, Apache, Caddy, etc.). No build step required.

---

## 📌 Honest Limitations

- 🚫 **Shorts Blocking (Zero-API)** — All `/shorts/...` links are blocked while regular short-length videos stay allowed. Without an external API, a Short manually rewritten as a normal `/watch?v=` link cannot be separated from a regular short video on the client side.
- 🔒 **Owner Embed Blocks** — If a YouTube creator disables embedding (Error 101 / 150), YouTube will not allow playback outside `youtube.com`.
- 📋 **Personal / Mix Playlists** — YouTube Mixes (`RD...`), Watch Later (`WL`), Liked Videos (`LL`), and Liked Music (`LM`) cannot be embedded. If your link has both a video and a Mix list, FocusTube plays the video alone.
- 🔢 **Very Large Playlists (200+ Videos)** — YouTube's embed player loads up to 200 items in the tray at once. You can still jump past video 200 using the **Video #** box.
- 🏷️ **No Upfront Titles/Durations in Tray** — Because FocusTube uses zero external APIs, unwatched videos show their thumbnail and video number first; titles and durations appear once played in the current session.

---

## 🤝 Support, Contribute & Creator Links

FocusTube is completely free, ad-free, and open-source. If it helps you stay focused while studying or building, here is how you can connect, contribute, or support the project:

- 🌐 **Creator Website (Pshell):** [https://pshellx16.github.io/Pshell/](https://pshellx16.github.io/Pshell/)
- 💻 **GitHub Profile:** [https://github.com/pshellx16](https://github.com/pshellx16)
- ⭐ **Contribute to FocusTube:** [https://github.com/pshellx16/FocusTube](https://github.com/pshellx16/FocusTube) — Star the repo, report bugs, suggest clean distraction-free improvements, or open a Pull Request.
- ❤️ **Support / Donations:** Want to support Pshell's free open-source work? Visit [Pshell's website](https://pshellx16.github.io/Pshell/) or connect on [GitHub](https://github.com/pshellx16).

---

## 👤 Creator & License

- **Created by:** [**Pshell**](https://pshellx16.github.io/Pshell/) ([@pshellx16](https://github.com/pshellx16))
- **Mission:** Built as a free, open-source, distraction-free YouTube player so students, developers, and learners worldwide can study without falling into algorithmic traps — with zero tracking and zero device storage.
- **License:** Open-source under the [MIT License](LICENSE).
