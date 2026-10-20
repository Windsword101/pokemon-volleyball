# Pokémon Volleyball（寶可夢排球）

**Make by wo.FAN.H**

A fan-made, non-profit practice project inspired by *Pikachu Volleyball*.
單一 HTML 檔的像素風排球遊戲：2D、屬性技能、撲球、三語（繁中 / English / 日本語）、手機橫向觸控、線上對戰。

## Play
Open `index.html` in a browser, or serve the folder (e.g. GitHub Pages: Settings → Pages → Deploy from branch → `main` / root).

| | P1 | P2 |
|---|---|---|
| Move | A / D | ← / → |
| Jump | W | ↑ |
| Hit | F | L |
| Skill (energy full) | G | ; |
| Dive | on the ground, direction + Hit | same |
| Pause | Esc / P | |

Rules: max 3 touches per side; first to N points (5/7/11/15, in Settings).

## Online play
`Online Play` → one player **Creates Room** and shares the 4-digit code; the other **Joins Room**.
WebRTC peer-to-peer via [PeerJS](https://peerjs.com/) (free public broker). The host (P1) runs the simulation; the guest sends inputs and renders snapshots.
Some strict firewalls / NATs can block direct connections (no TURN server is configured).

## Notes
- Everything is in `index.html` (sprites are embedded). `assets/` holds the original image files.
- Pokémon and their names/sprites belong to Nintendo / Game Freak / Creatures Inc. Sprites come from [PokeAPI/sprites](https://github.com/PokeAPI/sprites). This is an unofficial fan project for personal practice, **not for commercial use**.
- `assets/bgm_battle.mp3` plays once either side reaches 5 points (also user-supplied; same rights note applies).
- `assets/bgm.mp3` is a user-supplied arrangement of the *Pikachu Volleyball* theme; the music belongs to its original rights holders. Replace it with your own track if you plan to share this widely.
- Inspired by [gorisanson/pikachu-volleyball](https://github.com/gorisanson/pikachu-volleyball).
