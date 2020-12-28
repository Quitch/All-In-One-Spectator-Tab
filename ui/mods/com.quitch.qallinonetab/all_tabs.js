var allInOneSpectatorTab;

if (!allInOneSpectatorTab) {
  allInOneSpectatorTab = true;

  try {
    // Setup tabs
    model.spectatorPanelMode("all");
    model.showAllData = ko.computed(function () {
      return model.spectatorPanelMode() === "all";
    });
    model.showAllData2 = ko.computed(function () {
      return model.spectatorPanelMode() === "all2";
    });

    // ALL - All-in-one army count
    $("div.div_spectator_panel_buttons").append(
      '<div class="div_spectator_panel_button" data-bind="click: function () { spectatorPanelMode(\'all\') }, css: { div_spectator_panel_button_active: showAllData } "><loc>ALL</loc></div>'
    );

    $("table.tbl_spectator_stats tr:first").append(
      loadHtml("coui://ui/mods/com.quitch.qallinonetab/all_headers.html")
    );

    $("table.tbl_spectator_stats tr:last").append(
      loadHtml("coui://ui/mods/com.quitch.qallinonetab/all_values.html")
    );

    // ALL2 - All-in-one army metal
    $("div.div_spectator_panel_buttons").append(
      '<div class="div_spectator_panel_button" data-bind="click: function () { spectatorPanelMode(\'all2\') }, css: { div_spectator_panel_button_active: showAllData2 } "><loc>ALL2</loc></div>'
    );

    $("table.tbl_spectator_stats tr:first").append(
      loadHtml("coui://ui/mods/com.quitch.qallinonetab/all2_headers.html")
    );

    $("table.tbl_spectator_stats tr:last").append(
      loadHtml("coui://ui/mods/com.quitch.qallinonetab/all2_values.html")
    );
  } catch (e) {
    console.error(e);
    console.error(JSON.stringify(e));
  }
}
