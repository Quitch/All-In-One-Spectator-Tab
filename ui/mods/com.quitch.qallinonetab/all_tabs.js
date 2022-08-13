var allInOneSpectatorTabLoaded;

if (!allInOneSpectatorTabLoaded) {
  allInOneSpectatorTabLoaded = true;

  function allInOneSpectatorTab() {
    try {
      var appendHtml = function (htmlClass, file) {
        var path = "coui://ui/mods/com.quitch.qallinonetab/";
        $(htmlClass).append(loadHtml(path + file));
      };

      appendHtml("div.div_spectator_panel_buttons", "all_buttons.html");
      appendHtml("table.tbl_spectator_stats tr:first", "all_headers.html");
      appendHtml("table.tbl_spectator_stats tr:last", "all_values.html");
      appendHtml("div.div_spectator_panel_buttons", "all2_buttons.html");
      appendHtml("table.tbl_spectator_stats tr:first", "all2_headers.html");
      appendHtml("table.tbl_spectator_stats tr:last", "all2_values.html");

      model.showAllData = ko.computed(function () {
        return model.spectatorPanelMode() === "all";
      });
      model.showAllData2 = ko.computed(function () {
        return model.spectatorPanelMode() === "all2";
      });

      model.spectatorPanelMode("all");
      model.pinSpectatorPanel(true);
    } catch (e) {
      console.error(e);
      console.error(JSON.stringify(e));
    }
  }
  allInOneSpectatorTab();
}
