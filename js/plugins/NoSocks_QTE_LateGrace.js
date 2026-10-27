/*:
 * @target MZ
 * @plugindesc Lets a Timed Hit press count for a few frames after the ring meets its outline.
 * @author local mod
 * @base VisuMZ_2_QTE_TriggerSys
 * @orderAfter VisuMZ_2_QTE_TriggerSys
 *
 * @param LateFrames
 * @text Late grace frames
 * @type number
 * @min 0
 * @default 8
 * @desc Frames (60 = 1 sec) after the ring meets the outline in which a press still counts. 0 turns this off.
 *
 * @help
 * VisuMZ_2_QTE_TriggerSys counts a Timed Hit press only while the ring is still
 * shrinking. The QTE times out on the frame the ring reaches the outline, so a
 * press made on seeing the match arrives after the window has closed once
 * display, controller, and frame delays are added.
 *
 * This plugin keeps each Timed Hit QTE open for LateFrames more frames after
 * the ring animation ends and lets presses in those frames count. The ring
 * animation and the early edge of the window are unchanged. Other QTE types
 * are untouched.
 */
(() => {
  const late = Number(PluginManager.parameters("NoSocks_QTE_LateGrace").LateFrames ?? 8);
  if (!(late > 0)) return;
  const settings = VisuMZ.QTE_TriggerSys.Settings.QTE;

  // The ring sprite takes its length from _qteSettings.duration, so extending only the
  // countdown leaves the animation as it was and adds frames after the match.
  const setupQTE = SceneManager.setupQTE;
  SceneManager.setupQTE = function () {
    setupQTE.apply(this, arguments);
    if (this._qteType === "timedHit") {
      this._qteDuration += late;
      this._qteWholeDuration += late;
    }
  };

  // The plugin counts a press when TimedHitSuccessFrames + 1 >= frames left. Raising the
  // leeway by the same amount for this call keeps the window's early edge where it was.
  const updateTimedHitQTE = SceneManager.updateTimedHitQTE;
  SceneManager.updateTimedHitQTE = function () {
    const leeway = settings.TimedHitSuccessFrames;
    settings.TimedHitSuccessFrames = leeway + late;
    try {
      updateTimedHitQTE.call(this);
    } finally {
      settings.TimedHitSuccessFrames = leeway;
    }
  };
})();
