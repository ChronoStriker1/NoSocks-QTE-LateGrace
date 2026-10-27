# Install the timing adjustment

## In RPG Maker MZ

1. Copy `NoSocks_QTE_LateGrace.js` into your project's `js/plugins` folder.
2. Open **Plugin Manager**, then `VisuMZ_2_QTE_TriggerSys`.
   In its QTE settings, change `TimedHitSuccessFrames` to **4**.
3. Add `NoSocks_QTE_LateGrace` directly below that plugin and turn it **ON**.
4. Set its `LateFrames` to **6**. The default is 8, so change it.
5. Save, export, and restart the game. Test Spells From Hell and Punch.

Keep your project's other plugin settings. You do not need to edit the
original VisuStella plugin, attacks, or saves.

## In a copy of the same exported game

1. Close the game and back up its `js/plugins.js` file.
2. Copy this package's `js` folder into the game folder, merging folders
   and replacing `js/plugins.js` when asked.
3. Restart and test.

If your game has different plugin settings, use the RPG Maker steps above
instead of replacing its entire `plugins.js`.

## Undo

Disable `NoSocks_QTE_LateGrace` and set `TimedHitSuccessFrames` back to **12**.
Save, export if needed, and restart. For an exported copy, you can restore
your backed-up `plugins.js` instead.
