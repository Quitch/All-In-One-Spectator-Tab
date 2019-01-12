function allinonetab() {

  // Setup tabs
  model.spectatorPanelMode('all');
  model.showAllData = ko.computed(function () {
    return model.spectatorPanelMode() === 'all';
  });
  model.showAllData2 = ko.computed(function () {
    return model.spectatorPanelMode() === 'all2';
  });

  // ALL - All-in-one army count
  $('div.div_spectator_panel_buttons').append('<div class="div_spectator_panel_button" data-bind="click: function () { spectatorPanelMode(\'all\') }, css: { div_spectator_panel_button_active: showAllData } "><loc>ALL</loc></div>');

  $('table.tbl_spectator_stats tr:first').append(loadHtml('coui://ui/mods/com.quitch.qallinonetab/live_game_players1.html'));

  $('table.tbl_spectator_stats tr:last').append(loadHtml('coui://ui/mods/com.quitch.qallinonetab/live_game_players2.html'));


  // ALL2 - All-in-one army metal
  $('div.div_spectator_panel_buttons').append('<div class="div_spectator_panel_button" data-bind="click: function () { spectatorPanelMode(\'all2\') }, css: { div_spectator_panel_button_active: showAllData2 } "><loc>ALL2</loc></div>');

  $('table.tbl_spectator_stats tr:first').append(loadHtml('coui://ui/mods/com.quitch.qallinonetab/live_game_players3.html'));

  $('table.tbl_spectator_stats tr:last').append(loadHtml('coui://ui/mods/com.quitch.qallinonetab/live_game_players4.html'));
}

try {
  allinonetab();
}
catch (e) {
  console.error(e);
}