# Pokémon Volleyball（寶可夢排球）

**Make by wo.FAN.H**

A fan-made, non-profit practice project inspired by *Pikachu Volleyball*.
單一 HTML 檔的像素風排球遊戲。

## Features
- 2D pixel volleyball, 1P vs CPU (4 levels: Easy / Normal / Hard / Master), local 2P, and online 1v1
- Playable Pokémon with their own skills (paralysis, soaked/slow, fast fireball, drifting ball, …) and **hidden characters** (secret codes)
- Dive (direction + Hit on the ground), smash, 3-touch limit, win-by-2 (deuce) option
- 3 languages: 繁體中文 / English / 日本語
- Mobile: auto-landscape layout, on-screen buttons, no pinch zoom; BGM that switches to a battle track when a side is 2 points from winning

## Play
Open `index.html` in a browser, or serve the folder (GitHub Pages: Settings → Pages → Deploy from branch → `main` / root).

| | P1 | P2 |
|---|---|---|
| Move | A / D | ← / → |
| Jump | W | ↑ |
| Hit | F | L |
| Skill (energy full) | G | ; |
| Dive | on the ground, direction + Hit | same |
| Pause | Esc / P | |

Rules: max 3 touches per side; first to N points (5/7/11/15, in Settings); optional win-by-2.

## Online play
`Online Play` → one player **Creates Room** and shares the 4-digit code (or the invite link `…/?room=1234`); the other **Joins Room** (in-game keypad) or opens the link.
WebRTC peer-to-peer via [PeerJS](https://peerjs.com/) (free public broker). The host (P1) runs the simulation; the guest sends inputs and renders snapshots, so the guest has about one round-trip of input delay.
Some strict firewalls / NATs can block direct connections (no TURN server is configured).

## Hidden characters (secret codes)
| Character | Keyboard (title screen) | Mobile / mouse |
|---|---|---|
| Onix | `↑ ↑ ↓ ↓ ← → ← → B A` | tap the game title 10 times |
| Mewtwo | type `MEW2`, or beat the CPU 7–0 | beat the CPU 7–0 |
| Mew | type `MEW` | tap the credit line at the bottom 5 times |

Unlocks are saved per device (browser).

## Notes
- Everything is in `index.html` (sprites are embedded). `assets/` holds the original image/audio files.
- Pokémon and their names/sprites belong to Nintendo / Game Freak / Creatures Inc. Sprites come from [PokeAPI/sprites](https://github.com/PokeAPI/sprites). This is an unofficial fan project for personal practice, **not for commercial use**.
- `assets/bgm.mp3` is a user-supplied arrangement of the *Pikachu Volleyball* theme, and `assets/bgm_battle.mp3` (plays when a side is 2 points from winning) is also user-supplied; the music belongs to its original rights holders. Replace them with your own tracks if you plan to share this widely.
- Inspired by [gorisanson/pikachu-volleyball](https://github.com/gorisanson/pikachu-volleyball).
