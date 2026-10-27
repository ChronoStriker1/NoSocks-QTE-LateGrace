# No Socks RPG QTE timing adjustment

This mod helps presses count when the shrinking ring meets its outline.
The original timing closes at the match, so input and display delay can
make an on-time press arrive too late.

## What changed

- `js/plugins.js` changes `TimedHitSuccessFrames` from **12** to **4** and
  enables the new add-on with `LateFrames` set to **6**.
- `js/plugins/NoSocks_QTE_LateGrace.js` keeps Timed Hit input open for
  6 extra frames without changing the ring animation.

Together, these accept input from 4 frames before the match through
6 frames after it. The narrower early window keeps the timing deliberate.
The settings were inspired by Paper Mario and adjusted through playtesting.

The change applies to Timed Hit attacks such as Spells From Hell and Punch.
Other QTE types are unchanged. The original VisuStella plugin is unchanged.
Increasing its existing setting alone only accepts earlier presses, which
is why the extra plugin is needed.

## Install

Follow [INSTALL.md](INSTALL.md). The zip contains the same two game files
and these notes. It contains no saves, game assets, or original VisuStella
plugin. You need the existing game or RPG Maker project.

## Verification

A headless check against the game's actual QTE plugin confirmed the
4-before to 6-after input window across the tested attack durations.
The final settings were also playtested. Earlier simulator tests used
8 late frames, so they do not verify the final settings by themselves.

The add-on was checked with `VisuMZ_2_QTE_TriggerSys` v1.01.
Retest after updating that plugin.
