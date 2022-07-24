var allInOneSpectatorTabLoaded;

if (!allInOneSpectatorTabLoaded) {
  allInOneSpectatorTabLoaded = true;

  function allInOneSpectatorTab() {
    try {
      // ALL - All-in-one army count
      $("div.div_spectator_panel_buttons").append(
        loadHtml("coui://ui/mods/com.quitch.qallinonetab/all_buttons.html")
      );

      $("table.tbl_spectator_stats tr:first").append(
        loadHtml("coui://ui/mods/com.quitch.qallinonetab/all_headers.html")
      );

      $("table.tbl_spectator_stats tr:last").append(
        loadHtml("coui://ui/mods/com.quitch.qallinonetab/all_values.html")
      );

      // ALL2 - All-in-one army metal
      $("div.div_spectator_panel_buttons").append(
        loadHtml("coui://ui/mods/com.quitch.qallinonetab/all2_buttons.html")
      );

      $("table.tbl_spectator_stats tr:first").append(
        loadHtml("coui://ui/mods/com.quitch.qallinonetab/all2_headers.html")
      );

      $("table.tbl_spectator_stats tr:last").append(
        loadHtml("coui://ui/mods/com.quitch.qallinonetab/all2_values.html")
      );

      // Setup tabs
      model.spectatorPanelMode("all");
      model.showAllData = ko.computed(function () {
        return model.spectatorPanelMode() === "all";
      });
      model.showAllData2 = ko.computed(function () {
        return model.spectatorPanelMode() === "all2";
      });

      model.pinSpectatorPanel(true);
    } catch (e) {
      console.error(e);
      console.error(JSON.stringify(e));
    }
  }
  allInOneSpectatorTab();
}
