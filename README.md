# All-In-One Spectator Tab

![alt text](https://i.imgur.com/k5fM6FD.png "All In One Spectator Tab")

Adds a tab to the spectator player panel called ALL and makes it the default tab. This tab displays:

  - Metal income
  - Energy income
  - Efficiency
  - Army count
  - Fabber count
  - Factory count

This mod thus solves the problem of needing to shout at WPMarshall to change back to the economy tab once-and-for-all.

## Installation

You should download and install this mod via the Planetary Annihilation TITANS in-game Community Mod Manager. You will need to [enable Community Mods](https://steamcommunity.com/sharedfiles/filedetails/?id=1417396826).

## FAQ

**You achieved this by cleanly appending your content to the existing files?**

Christ, no. I'm shadowing both HTML and JS files for live_game_players. I tried to do it properly, I really did (don't hurt me mikey!) but I don't know a damn thing about JS and couldn't get it working. You can find my content by searching for "ALL IN ONE TAB" in the files.

At least the CSS is done cleanly. You're welcome.

**Why didn't you include total unit count?**

Because I wanted to avoid having the ALL tab be any wider than the other tabs. I considered total unit count to be the most useless stat and so it was dropped.

**Why does your mod wrap the text when the numbers get big?**

I've tried to ensure this is very unlikely to happen, but because the columns are narrower it *could* happen. Things will get more cramped though. You can switch to the other tabs still if things get ugly.

**Do you support translations?**

No. When you include translations in a Planetary Annihilation client mod, it breaks all other translations in the game. Until this is fixed this mod can't ship with translations.