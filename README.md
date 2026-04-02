# Chord Quiz

A Chrome packaged app that quizzes you on piano chords using a MIDI keyboard. Play a chord on your MIDI controller and the app recognizes it in real time, then tells you if you played the correct chord.

## Features

- **Real-time chord recognition** via the Web MIDI API
- **Inversion detection** — recognizes chords regardless of which voicing you play
- **Chord quiz mode** — prompts you to play diatonic chords across all 12 keys
- **Visual keyboard** — two-octave piano display highlights pressed keys in red
- Supports a wide range of chord types: triads, suspended, augmented, diminished, half-diminished, dominant 7th, major 7th, minor 7th, and extended chords up to 13ths

## How it works

Chord recognition is implemented as a trie search over semitone intervals. When you play notes, the app:

1. Collects all currently held MIDI note numbers
2. Computes the interval set relative to the lowest note
3. Walks the trie in `search.js` to find a matching chord name
4. If no match is found at root position, tries each inversion by rotating the interval set

## Installation

This is a Chrome packaged app (Manifest V2). To install:

1. Open Chrome and navigate to `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** and select this directory

## Usage

1. Connect a MIDI keyboard to your computer
2. Launch the app from Chrome's app launcher
3. Select your MIDI input device from the dropdown
4. Select a key (e.g. "C major / A minor") to start a quiz
5. The app will display a chord to play; play it on your keyboard to advance

## Files

| File | Description |
|------|-------------|
| `manifest.json` | Chrome app manifest |
| `background.js` | App launch handler |
| `window.html` | Main UI |
| `quiz.js` | MIDI handling, chord display, note-number mapping |
| `chord-quiz.js` | Quiz logic (diatonic chord prompts) |
| `search.js` | Chord trie and interval search |
| `scale.js` | Scale definitions |
| `tests.js` / `qunit.html` | QUnit unit tests |

## Running Tests

Open `qunit.html` in a browser (file:// is fine) to run the unit tests for the chord search logic.
