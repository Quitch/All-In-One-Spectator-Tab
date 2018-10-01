function allinonetab() {
    model.showAllData = ko.computed(function () {
        return model.spectatorPanelMode() == 'all';
    });

    model.spectatorPanelMode('all');

    $('div.div_spectator_panel_buttons').append('<div class="div_spectator_panel_button" data-bind="click: function () { spectatorPanelMode(\'all\') }, css: { div_spectator_panel_button_active: showAllData } "><loc>ALL</loc></div>');

    $('table.tbl_spectator_stats tr:first').append(loadHtml('coui://ui/mods/com.quitch.qallinonetab/live_game_players1.html'));

    $('table.tbl_spectator_stats tr:last').append(loadHtml('coui://ui/mods/com.quitch.qallinonetab/live_game_players2.html'));
}

try {
    allinonetab();
}
catch (e) {
    console.error(e);
}