/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Warlock, called "The Phoenix"
				This subclass was made by PyrrhicPlays (https://www.dndbeyond.com/subclasses/218506-the-phoenix)
	Code by:	Troyificus
	Date:		2020-06-26 (sheet v13)
*/

var iFileName = "Warlock - The Phoenix [created by PyrrhicPlays, coded by Troyificus].js";
RequiredSheetVersion(13);

AddSubClass("warlock", "the phoenix", {
	regExpSearch : /^(?=.*warlock)(?=.*phoenix).*$/i,
	subname : "the Phoenix",
	source : ["D&DB", 0],
	languageProfs : ["Ignan", 1],
	spellcastingExtra : ["control flames", "produce flame", "burning hands", "faerie fire", "continual flame", "scorching ray", "fireball","revivify","fire shield","death ward","immolation","reincarnate"],
	features : {
		"subclassfeature1" : {
			name : "The Phoenix's Flames",
			source : ["D&DB", 0],
			minlevel : 1,
			description : "\n   " + "Your pact with the Phoenix gives you the ability to speak, read and write Ignan",
		},
		"subclassfeature6" : {
			name : "Ashen Protection",
			source : ["D&DB", 0],
			minlevel : 6,
			description : "\n   " + "Your skin and armor gains a light ashen appearance that never really seems to go away despite all cleaning. The ash protects you from fire, giving you resistance to fire damage.",
			dmgres : ["Fire"]
		},
		"subclassfeature6.1" : {
			name : "Ashen Step",
			source : ["D&DB", 0],
			minlevel : 6,
			description : "\n   " + "Once per short rest, whenever you take damage, you may use your Reaction to halve the damage against you and disappear into a cloud of ash, teleporting up to 30 feet to an unoccupied space you can see.",
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Flame Within",
			source : ["D&DB", 0],
			minlevel : 10,
			description : "\n   " + "As an action your body becomes flame and blazing wings sprout from your back for 1 minute. For the duration you gain the following benefits:" + "\n   " + "-You are immune to fire damage and resistant to non-magical weapons." + "\n   " + "-Any creature that touches or hits you with a melee attack while within 5 feet of you takes 1d10 fire damage." + "\n   " + "-Your weapons and spells are wrapped in flames, and you add 1d6 fire damage to all damage rolls." + "\n   " + "-You have a fly speed of 30 feet." + "\n   " + "-You shed bright light for 30 feet and dim light for another 30 feet." + "\n   " + "-You can use Flame Within a number of times per day equal to your CON modifier (minimum of 1). Each use results in a point of exhaustion once the duration has completed as you are left drained." + "\n   " + "-Should the use of Flame Within result in your sixth exhaustion point, you die. If you have access to it and it has not been used in the past 72 hours, Rebirth is automatically triggered by death in this way.",
			action : ["action", ""]
		},
		"subclassfeature14" : {
			name : "Rebirth",
			source : ["D&DB", 0],
			minlevel : 14,
			description : "\n   " + "See Additional Notes page.",
			toNotesPage : [{
			name : "Rebirth",
			note : "\n   " + "Beginning at 14th level, immediately after failing your third death saving throw, you may choose to reduce your body to smoldering ash. The flames that consume your body have no effect on anything not on your person. Your magical items and surroundings are unaffected and remain where you fell. Any non-magical items, including clothes, on your person at the time of activation are destroyed in the Rebirth process. At the first dawn after 24 hours, you are reborn from the ashes." + "\n   " + "-You are reborn naked and ash covered with no attuned magical items." + "\n   " + "-All scars, diseases, ailments, and any other physical disfigurements are removed by Rebirth." + "\n   " + "-In this time, should your ashes be scattered, Rebirth fails. Should the ashes be recombined the 24 hour process begins anew." + "\n   " + "-You may not benefit from this ability again for three days after completing Rebirth successfully." + "\n   " + "-Should you not be able to be reborn within seven days of activation, Rebirth fails completely and you remain dead.",
			}],
		},
		
	}
});
