/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Cleric, called "Seething Life Domain"
				This subclass is made by Troyificus, using features from Wolfboy702's Plague Domain and humpswares' Plaguebearer Warlock
	Code by:	Troyificus
	Date:		2024-02-01 (sheet 13)

*/

var iFileName = "Cleric - Seething Life Domain.js";
RequiredSheetVersion(13);

SourceList["T:SL"] = {
	name : "Troyificus: Seething Life Domain",
	abbreviation : "T:SL",
	group : "homebrew",
	url : "https://homebrewery.naturalcrit.com/share/Kzi4oGQlle08",
	date : "2024/02/01"
};

AddSubClass("cleric", "seething life domain", {
	regExpSearch : /^(?=.*(cleric|plague|clergy|acolyte))(?=.*disease).*$/i,
	subname : "Seething Life Domain",
	source : ["T:SL", 0],
	spellcastingExtra : ["detect poison and disease", "ray of sickness", "lesser restoration", "ray of enfeeblement", "feign death", "stinking cloud", "aura of purity", "blight", "cloudkill", "contagion"],
	features : {

		"subclassfeature1" : {
			name : "Contagious Inoculation",
			source : ["T:SL", 0],
			minlevel : 1,
			description : "\n   " + " At 1st level, you can use your bonus action to touch a willing creature and remove one disease or neutralize one poison affecting it. You can use this feature a number of times equal to your Wisdom Modifier, and regain expended uses of it when you finish a long rest. ",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature1a" : {
			name : "Blessing of Affliction",
			source : ["T:SL", 0],
			minlevel : 1,
			description : "\n   " + "When you choose this domain at 1st level, your deity grants you the power to protect yourself while inflicting disease upon others" + "\n   " + "You know the Infestation and Poison Spray cantrips, which count as cleric cantrips for you and do not count against the number of cleric cantrips you know. ",
			spellcastingBonus : [{
				name : "Blessing of Affliction",
				spells : ["infestation"],
				selection : ["infestation"]
			}, {
				name : "Blessing of Affliction",
				spells : ["poison spray"],
				selection : ["poison spray"]
			}]
		},

         "subclassfeature2" : {
			name : "Channel Divinity: Disease",
			source : ["T:SL", 0],
			minlevel : 2,
			description : "\n   " + "Starting at 2nd level, you nuture one of the pathogens that pervades your corporeal and can incite it to burst forth." +
				"\n   " + "You may change which diseases you carry when you finish a long rest." +
				"\n   " + "When a Disease requires a saving throw, you use your Constituion modifier when setting the saving throw DC for a Disease flare up." +
				"\n   " + " \u2022 Disease save DC = 8 + your proficiency bonus + your Constitution modifier" +
				"\n   " + "Creatures are affected by a Disease until the flare up ends, or they succeed on the saving throw, whichever comes first. If a creature succeeds on a saving throw against a Disease flare up, it is immune to the effects of that flare up for the next 24 hours.",

		},

		"subclassfeature2a" : {
			name : "Disease",
			source : ["T:SL", 0],
			minlevel : 2,
			description : "\n   " + "Choose a Disease using the \"Choose Feature\" button above",
				choices : ["Cysts", "Flesh Rot", "Gutterruns", "Pale Fever", "The Seize", "Vampyric Font"],
						"cysts" : {
					name : "Cysts",
					description : "\n   " + "Flare up: As a bonus action, you can cause the boils and growths covering your body to burst, sending forth the viruses onto surrounding allies." + "\n   " + "Each creature of your choice within 15 feet of you regains hit points equal to your Constitution modifier + half of your Cleric level rounded down (minimum of 1)." + "\n   " + "Additionally; any constucts you choose with 15ft radius take Acid damage equal to Constitution modifier + half of your Cleric level rounded down (minimum of 1).",
					dependentChoices : "cysts",
					action : ["bonus action", ""],
		},
						"flesh rot" : {
					name : "Flesh Rot",
					description : "\n   " + "Flare up: As a bonus action, flesh-eating bacteria eat their way across your skin to your weapons. On the next successful attack, your weapon deals additional necrotic damage equal to your Constitution modifier (minimum of 1).",
					dependentChoices : "flesh rot",
					action : ["bonus action", ""],				
		},
					"gutterruns" : {
					name : "Gutterruns",
					description : "\n   " + "Flare up: As a bonus action you vomit onto your weapons." + "\n   " + "For the next minute your weapon attacks are poisoned, dealing an additional 1d4 poison damage (increasing to 2d4 at 10th level)." + "\n   " + "When hit by your poisoned weapon(s), a target must succeed on a Constitution saving throw against your disease save DC or become poisoned." + "\n   " + "Affected creatures may repeat the saving throw at the end of each of their turns. On a success, the creature is no longer poisoned.",
					dependentChoices : "gutterruns",
					action : ["bonus action", ""],		
		},
					"pale fever" : {
					name : "Pale Fever",
					description : "\n   " + "Flare up: As a bonus action, your sweat and saliva coat your weapons and hands, carrying with them Pale Fever’s immune-compromising pathogens." + "\n   " + "For the next minute, your next spell attack and all weapon attacks treat all immunities to poison damage as if they were resistances, and all resistances to these damage types are ignored. At 8th level this also applies to necrotic damage.",
					dependentChoices : "pale fever",
					action : ["bonus action", ""],			
		},
					"the seize" : {
					name : "The Seize",
					description : "\n   " + "Flare up: As a bonus action, you concentrate as pathogens deposit sequestered calcium from your bones onto your weapons surface." + "\n   " + "When you next hit a creature with a weapon attack it must make a Constitution saving throw versus your Disease save DC." + "\n   " + "If it fails it has all its speeds reduced by 10 feet as the affliciton enters your enemies joints. This effect does not stack." + "\n   " + "Affected creatures may make a Constitution saving throw versus your disease save DC at the end of each of their turns. On a success, the creature’s speeds are restored.",
					dependentChoices : "the seize",
					action : ["bonus action", ""],					
		},
					"tube worms" : {
					name : "Tube Worms",
					description : "\n   " + "Flare up: As a bonus action, the eggs lying dormant under your finger nails hatch and virulent, microscopic worms shuffle their way along your weapons." + "\n   " + "For the next minute, any creature hit by one of your weapon attacks must succeed on a Constituion saving throw versus your disease save DC or become afflicted with ‘tube worms’ until the flare up subsides." + "\n   " + "Whilst afflicted, targets have disadvantage on Strength checks and saving throws, and any healing they receive is halved. Does not affect constructs.",
					dependentChoices : "tube worms",
					action : ["bonus action", ""],			
		},
					"vampyric font" : {
					name : "Vampyric Font",
					description : "\n   " + "Flare up: As a bonus action, blood pours from your nose, mouth, and eyes, covering your weapons." + "\n   " + "For the next minute, any creature that can bleed and that is hit by your weapon attacks begins bleeding." + "\n   " + "At the start of a ‘bleeding’ creature’s turn, it takes damage equal to your Constitution modifier (minimum of 1)." + "\n   " + "This effect does not stack. Affected creatures may attempt a Constitution saving throw against your disease save DC at the end of each of its turns, stopping the bleeding on a success.",
					dependentChoices : "vampyric font",
					action : ["bonus action", ""],
					
		},
},

		"subclassfeature6" : {
			name : "Symbiosis",
			source : ["T:SL", 0],
			minlevel : 6,
			description : "\n   " + "Beginning at 6th level, your symbiotic pathogens are so well-adapted to your internal biosphere that they outcompete any invading pathogens, rendering you immune to diseases not granted to you by your patron." + "\n   " + "In addition, the pathogens that inhabit your body adapt to prolong their host’s existence, providing some passive benefits. You gain access to the ‘host’ ability of the disease you carry.",
				choices : ["Cysts", "Flesh Rot", "Gutterruns", "Pale Fever", "The Seize", "Vampyric Font"],
				choicesNotInMenu : true,
						"cysts" : {
					name : "Cysts",
					description : "\n   " + "Host: Viruses in your cells have made your body hyper-sensitive to even the most minor scratch. Whenever you take damage, lumps and growths sprout from your epidermis." + "\n   " + "At the start of each of your turns, you regain hit points equal to your Constitution modifier (minimum of 1), provided you have taken at least 5 bludgeoning, piercing, or slashing damage since the start of your previous turn.",
					dependentChoices : "cysts",					
		},
						"flesh rot" : {
					name : "Flesh Rot",
					description : "\n   " + "Host: Only your own bacteria get to munch on your flesh. You gain resistance to necrotic damage.",
					dependentChoices : "flesh rot",
					dmgres: ["Necrotic"],				
		},
					"gutterruns" : {
					name : "Gutterruns",
					description : "\n   " + "Host: You have an iron gut and cannot get food poisoning. You gain resistance to poison damage and have advantage on saving throws made to resist the poisoned condition.",
					dependentChoices : "gutterruns",
					dmgres: ["Poison"],
					save: 'Adv. on saving throws against poisoned',
		},
					"pale fever" : {
					name : "Pale Fever",
					description : "\n   " + "Host: Where Pale Fever compromises a target’s constituion, it bolsters your own." + "\n   " + "When you are subjected to a spell or effect that allows you to make a Constitution saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
					dependentChoices : "pale fever",
					save: 'No damage on successful Con. save, half damage on fail',			
		},
					"the seize" : {
					name : "The Seize",
					description : "\n   " + "Host. Your walking speed increases by 10 feet as virulent viruses perfect the regulation of bone growth around your lower limb joints." + "\n   " + "Starting at 10th level the walking speed bonus from this disease increases to 20 feet.",
					dependentChoices : "the seize",
					walk : { spd : "+10", enc : 0 },

		},				
					"tube worms" : {
					name : "Tube Worms",
					description : "\n   " + "Host: Rather than steal the food from your gut, these worms increase the efficiency of your digestion." + "\n   " + "When you roll hit die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2).",
					dependentChoices : "tube worms",
								
		},
					"vampyric font" : {
					name : "Vampyric Font",
					description : "\n   " + "Host: Thanks to the symbionts within your blood vessels, your blood knows exactly when to clot in response to damage." + "\n   " + "When you are reduced to 0 hit points and fall unconscious, your body automatically stabilizes after the first failed death save, be it from a death saving throw or from sustaining damage." + "\n   " + "This feature cannot trigger more than once per long rest.",
					dependentChoices : "vampyric font",
					recovery : "long rest",
					
		},
},

		"subclassfeature8" : {
			name : "Riddled",
			source : ["T:SL", 0],
			minlevel : 8,
			description : "\n   " + "By 8th level, you have become a walking biome for a plethora of microscopic organisms. You gain access to the flare up and host features of a second disease." + "\n " + "You can have up to two flare ups active concurrently and can discharge any flare ups that use a bonus action simultaneously as part of the same, single bonus action.",
			
		},
		"subclassfeature17" : {
			name : "Autoimmune Assault",
			source : ["T:SL", 0],
			minlevel : 17,
			description : "\n   " + "Beginning at 17th level, when you hit a creature with an attack, you can use your Channel Divinity to cause an autoimmune cascade within the target." + "\n   " + 
			"This takes a form relevant to the target; for example, a fire elemental might find its own magic quenching the flames that keep it alive." +
			"\n   " + "Until the end of its next turn, the creature gains vulnerability to poison damage, and can’t benefit from immunity to poison damage." + "\n   " + "Additionally, its speed is halved, and it may make only one action or bonus action on its turn, not both." + "\n   " + "At the end of its next turn, the creature takes 10d10 necrotic damage, bypassing resistances and immunities, and then these effects end." + "\n   " + "Once you use this feature, you can’t use it again until you finish a long rest.",
			usages : "1",
			recovery : "long rest",
			action : ["action", ""]
		}
	}
  });
  
  ClassList.cleric.subclasses[1].push("seething life domain");