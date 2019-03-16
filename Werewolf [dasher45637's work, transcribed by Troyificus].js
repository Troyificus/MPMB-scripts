/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called "Werewolf".
				This is taken from the D&D Beyond website (https://www.dndbeyond.com/characters/races/10435-werewolf)
	Code by: Troyificus
	Date: 2019-03-16 (sheet v13)
*/

var iFileName = "Werewolf [dasher45637's work, transcribed by Troyificus].js";
RequiredSheetVersion(13);

SourceList["WH:D&DB"] = {
	name : "Werewolf Homebrew: D&D Beyond",
	abbreviation : "WH:D&DB",
	group : "D&D Beyond",
	url : "https://www.dndbeyond.com/characters/races/10435-werewolf/",
	date : "2019/03/16"
};


RaceList["werewolf"] = {
	regExpSearch : /^(?=.*werewolf).*$/i,
	name : "Werewolf",
	sortname : "Werewolf",
	source : ["WH:D&DB"],
	plural : "Werewolves",
	size : 3,
	speed : {walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", 1],
	weapons : ["Bite", "Claws"],
	addarmor : "Tough Hide (Str)",
	vision : [["Darkvision", 60]],
	savetxt : { text : ["Vulnerable to silvered weapons", "Half damage from any attacks that aren't silvered and/or magical"] },
	dmgres : ["Non-Silvered", "Non-Magical"],
	skills : ["Survival", "Nature", "Intimidation", "Perception"],
	abilitySave : 1,
	abilitySaveAlt : 3,
	age : "Werewolves reach adulthood in their late teens and live less than a century.",
	improvements : "Werewolf: +1 Strength, +1 Constitution, +1 Charisma;",
	scores : [1,0,1,0,0,1],
	eval : "AddACMisc('Prof', 'Tough Hide (Str)', 'Without armour or shield, my AC is 10 + Strength modifier + Proficiency bonus')",
	removeeval : "AddACMisc(0, 'Tough Hide (Str)', 'Without armour or shield, my AC is 10 + Strength modifier + Proficiency bonus')",
	features : {
		"changing form" : {
			name : "Changing Form",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : ["action", " (start/end)"]
					},
		"trip attack" : {
			name : "Trip Attack",
			minlevel : 1,
			action : ["bonus action", " (after bite attack)"]
			},
		"regeneration" : {
			name : "Regeneration",
			minlevel : 1,
			action : ["action", " (instead of attack)"]
					}
			},
	trait : "Werewolf (+1 Strength, +1 Constitution, +1 Charisma).\nAll Werewolf traits can be found on the Notes page.",
	toNotesPage : [{
			name : "Werewolf Traits",
			note : "\nChanging Form:\n   You can take 1 action to change into your Hybrid or Wolf Form. While in Hybrid Form you can wield weapons as normal. While in wolf form you cannot wear armour or wield weapons. You are able to wear certain equipment at the DM's discretion, such as circlets and robes. You can choose to have equipment you are wearing to either merge into your form or be dropped to the ground. You gain no benefit from equipment that is merged into your form.\nFull Moon Rage:\n   At the start of a night with a Full Moon you must make a DC13 Wisdom save or lose control of yourself. During this time the DM has Control over what your character does, however every hour you may reroll your saving throw to take back control. Once you make the correct saving throw you retain control for the rest of the night.\nRegeneration:\n   You take half damage from any attacks that aren't silvered and/or magical. At the start of your turn if you haven't been attacked you gain 1d4+ your constitution modifier of health back. You can only gain this benefit if you have at least 1 hit point.\nTracking:\n   You can detect opponents within 15 feet by sense of smell. If the opponent is upwind, the range increases to 40 feet; if downwind, it drops to 5 feet. Strong scents can be detected at twice the ranges noted above. Overpowering scents can be detected at triple normal range. When a creature detects a scent, the exact location of the source is not revealed—only its presence somewhere within range. (All Forms).\nTrip Attack:\n   While in Wolf or Hybrid form you can attempt to trip the opponent as a bonus action after a bite attack. The opponent must make a Strength Save equal to 10 + your Strength modifier + your Proficiency Bonus.\nWolf Empathy:\n   You can communicate with wolves and dire wolves. (All forms).\nTough Hide:\n   While you are not wearing any Armour or shields your AC becomes 10+ Strength Modifier+ Proficiency Bonus (All Forms).",
	}],
};

// Tough Hide
ArmourList["tough hide"] = {
	regExpSearch : /^(?=.*tough)(?=.*hide).*$/i,
	name : "Tough Hide (Str)",
	minlevel : 1,
	description : "/n   " + "Without armour or shield, my AC is 10 + Strength modifier + Proficiency bonus",
	Tooltip : "Without armour or shield, my AC is 10 + Strength modifier + Proficiency bonus",
	source : ["WH:D&DB"],
	type : "",
	dex : -10,
	ac : 10,
	stealthdis : false,
	strReq : 0,
	addMod : true
	
};

// Natural Weapons
WeaponsList["claws"] = {
	regExpSearch : /^(?=.*claws).*$/i,
	name : "Claws",
	source : ["WH:D&DB"],
	ability : 1,
	damage : [1, 6, "slashing"],
	range : "Melee",
	description : "Can only be used in wolf or hybrid form",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["bite"] = {
	regExpSearch : /^(?=.*bite).*$/i,
	name : "Bite",
	source : ["WH:D&DB"],
	ability : 1,
	damage : [1, 4, "piercing"],
	range : "Melee",
	description : "Can only be used in wolf or hybrid form",
	abilitytodamage : true,
	monkweapon : true
};
