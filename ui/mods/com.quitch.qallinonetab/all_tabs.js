(function () {
  try {
    var appendHtml = function (htmlClass, file) {
      var path = "coui://ui/mods/com.quitch.qallinonetab/";
      $(htmlClass).append(loadHtml(path + file));
    };

    appendHtml("div.div_spectator_panel_buttons", "army_count_buttons.html");
    appendHtml("table.tbl_spectator_stats tr:first", "army_count_headers.html");
    appendHtml("table.tbl_spectator_stats tr:last", "army_count_values.html");
    appendHtml("div.div_spectator_panel_buttons", "army_metal_buttons.html");
    appendHtml("table.tbl_spectator_stats tr:first", "army_metal_headers.html");
    appendHtml("table.tbl_spectator_stats tr:last", "army_metal_values.html");

    model.showArmyCount = ko.computed(function () {
      return model.spectatorPanelMode() === "armyCount";
    });
    model.showArmyMetal = ko.computed(function () {
      return model.spectatorPanelMode() === "armyMetal";
    });

    model.spectatorPanelMode("armyCount");
    model.pinSpectatorPanel(true);
  } catch (e) {
    console.error("All-In-One Spectator Tab: " + (e.stack || e.message || e));
  }
})();
