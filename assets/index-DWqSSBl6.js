var pt = Object.defineProperty;
var ut = (n, e, t) => e in n ? pt(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : n[e] = t;
var ue = (n, e, t) => ut(n, typeof e != "symbol" ? e + "" : e, t);
import*as P from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.module.js";
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        i(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const r of s.addedNodes)
                    r.tagName === "LINK" && r.rel === "modulepreload" && i(r)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function i(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = t(o);
        fetch(o.href, s)
    }
}
)();
const G = {
    SHADOW_KING: {
        id: "shadow_king",
        name: "Shadow King",
        description: "Train in the darkness to unlock your hidden strength. Complete 60 minutes of night training (after 8 PM).",
        baseTargetCount: 60,
        targetCount: 60,
        metric: "minutes",
        timeLimit: 24 * 1e3,
        rewards: {
            exp: 200,
            gold: 100,
            title: "Ruler of Shadows"
        },
        scaling: {
            targetCount: 5,
            rewards: {
                exp: 25,
                gold: 15
            }
        }
    },
    MONARCH_OF_FLESH: {
        id: "monarch_of_flesh",
        name: "Monarch of Flesh",
        description: "Push your body to its limit. Complete 150 push-ups within 24 hours.",
        baseTargetCount: 150,
        targetCount: 150,
        metric: "push-ups",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 250,
            gold: 125,
            title: "Body of a Warrior"
        },
        scaling: {
            targetCount: 10,
            rewards: {
                exp: 30,
                gold: 20
            }
        }
    },
    IRON_FIST: {
        id: "iron_fist",
        name: "Iron Fist",
        description: "Forge your fists in fire. Complete 200 push-ups in a single session.",
        baseTargetCount: 200,
        targetCount: 200,
        metric: "push-ups",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 300,
            gold: 150,
            title: "Unbreakable Fist"
        },
        scaling: {
            targetCount: 20,
            rewards: {
                exp: 35,
                gold: 20
            }
        }
    },
    CORE_OVERLORD: {
        id: "core_overlord",
        name: "Core Overlord",
        description: "Dominate your core. Complete 300 sit-ups in a single session.",
        baseTargetCount: 300,
        targetCount: 300,
        metric: "sit-ups",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 350,
            gold: 175,
            title: "Master of the Core"
        },
        scaling: {
            targetCount: 30,
            rewards: {
                exp: 40,
                gold: 25
            }
        }
    },
    PUSHUP_WARLORD: {
        id: "pushup_warlord",
        name: "Push-Up Warlord",
        description: "Conquer the ultimate push-up challenge. Complete 100 push-ups in 10 minutes.",
        baseTargetCount: 100,
        targetCount: 100,
        metric: "push-ups",
        timeLimit: 10 * 60 * 1e3,
        rewards: {
            exp: 275,
            gold: 140,
            title: "Push-Up Champion"
        },
        scaling: {
            targetCount: 10,
            rewards: {
                exp: 30,
                gold: 15
            }
        }
    },
    SITUP_SORCERER: {
        id: "situp_sorcerer",
        name: "Sit-Up Sorcerer",
        description: "Harness the magic of endurance. Complete 150 sit-ups in 15 minutes.",
        baseTargetCount: 150,
        targetCount: 150,
        metric: "sit-ups",
        timeLimit: 15 * 60 * 1e3,
        rewards: {
            exp: 300,
            gold: 150,
            title: "Core Mage"
        },
        scaling: {
            targetCount: 15,
            rewards: {
                exp: 35,
                gold: 20
            }
        }
    },
    PUSHUP_TITAN: {
        id: "pushup_titan",
        name: "Push-Up Titan",
        description: "Prove your might. Complete 500 push-ups in a week.",
        baseTargetCount: 500,
        targetCount: 500,
        metric: "push-ups",
        timeLimit: 7 * 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 1e3,
            gold: 500,
            title: "Titan of Push-Ups"
        },
        scaling: {
            targetCount: 50,
            rewards: {
                exp: 150,
                gold: 75
            }
        }
    },
    SITUP_SENTINEL: {
        id: "situp_sentinel",
        name: "Sit-Up Sentinel",
        description: "Guard your core. Complete 1,000 sit-ups in a week.",
        baseTargetCount: 1e3,
        targetCount: 1e3,
        metric: "sit-ups",
        timeLimit: 7 * 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 1200,
            gold: 600,
            title: "Core Sentinel"
        },
        scaling: {
            targetCount: 100,
            rewards: {
                exp: 150,
                gold: 75
            }
        }
    },
    PUSHUP_PHANTOM: {
        id: "pushup_phantom",
        name: "Push-Up Phantom",
        description: "Move like a shadow. Complete 50 push-ups in 5 minutes.",
        baseTargetCount: 50,
        targetCount: 50,
        metric: "push-ups",
        timeLimit: 5 * 60 * 1e3,
        rewards: {
            exp: 600,
            gold: 300,
            title: "Shadow Pusher"
        },
        scaling: {
            targetCount: 5,
            rewards: {
                exp: 50,
                gold: 25
            }
        }
    },
    SITUP_SPECTER: {
        id: "situp_specter",
        name: "Sit-Up Specter",
        description: "Haunt your core. Complete 75 sit-ups in 7 minutes.",
        baseTargetCount: 75,
        targetCount: 75,
        metric: "sit-ups",
        timeLimit: 7 * 60 * 1e3,
        rewards: {
            exp: 650,
            gold: 325,
            title: "Ghost of the Core"
        },
        scaling: {
            targetCount: 7,
            rewards: {
                exp: 50,
                gold: 25
            }
        }
    },
    PUSHUP_DRAGON: {
        id: "pushup_dragon",
        name: "Push-Up Dragon",
        description: "Breathe fire into your arms. Complete 300 push-ups in 30 minutes.",
        baseTargetCount: 300,
        targetCount: 300,
        metric: "push-ups",
        timeLimit: 30 * 60 * 1e3,
        rewards: {
            exp: 900,
            gold: 450,
            title: "Dragon of Strength"
        },
        scaling: {
            targetCount: 30,
            rewards: {
                exp: 100,
                gold: 50
            }
        }
    },
    SITUP_SERPENT: {
        id: "situp_serpent",
        name: "Sit-Up Serpent",
        description: "Coil your core. Complete 200 sit-ups in 20 minutes.",
        baseTargetCount: 200,
        targetCount: 200,
        metric: "sit-ups",
        timeLimit: 20 * 60 * 1e3,
        rewards: {
            exp: 800,
            gold: 400,
            title: "Serpent of the Core"
        },
        scaling: {
            targetCount: 20,
            rewards: {
                exp: 100,
                gold: 50
            }
        }
    },
    GATE_KEEPER: {
        id: "gate_keeper",
        name: "Gate Keeper",
        description: "Pass through the threshold of strength. Run 5 kilometers in a single session.",
        baseTargetCount: 5,
        targetCount: 5,
        metric: "kilometers",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 700,
            gold: 350,
            title: "Breaker of Chains"
        },
        scaling: {
            targetCount: .5,
            rewards: {
                exp: 100,
                gold: 50
            }
        }
    },
    RULER_OF_STAMINA: {
        id: "ruler_of_stamina",
        name: "Ruler of Stamina",
        description: "Survive the test of endurance. Burn 2,000 calories in a week.",
        baseTargetCount: 2e3,
        targetCount: 2e3,
        metric: "calories",
        timeLimit: 7 * 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 800,
            gold: 400,
            title: "Everlasting Hunter"
        },
        scaling: {
            targetCount: 200,
            rewards: {
                exp: 100,
                gold: 50
            }
        }
    },
    TITAN_SLAYER: {
        id: "titan_slayer",
        name: "Titan Slayer",
        description: "Overcome the mightiest. Lift a total of 5,000 kg in weight training.",
        baseTargetCount: 5e3,
        targetCount: 5e3,
        metric: "kilograms lifted",
        timeLimit: 7 * 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 1e3,
            gold: 500,
            title: "Crusher of Giants"
        },
        scaling: {
            targetCount: 500,
            rewards: {
                exp: 150,
                gold: 75
            }
        }
    },
    PHANTOM_RUNNER: {
        id: "phantom_runner",
        name: "Phantom Runner",
        description: "Outpace the unseen. Run 10 kilometers in under 60 minutes.",
        baseTargetCount: 10,
        targetCount: 10,
        metric: "kilometers",
        timeLimit: 60 * 60 * 1e3,
        rewards: {
            exp: 750,
            gold: 375,
            title: "Speed Demon"
        },
        scaling: {
            targetCount: 1,
            rewards: {
                exp: 100,
                gold: 50
            }
        }
    },
    IRON_WILL: {
        id: "iron_will",
        name: "Iron Will",
        description: "Forge your mind and body. Hold a plank for 5 minutes.",
        baseTargetCount: 5,
        targetCount: 5,
        metric: "minutes",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 400,
            gold: 200,
            title: "Unbreakable"
        },
        scaling: {
            targetCount: .5,
            rewards: {
                exp: 50,
                gold: 25
            }
        }
    },
    STORM_CALLER: {
        id: "storm_caller",
        name: "Storm Caller",
        description: "Summon the storm within. Complete 100 burpees in 20 minutes.",
        baseTargetCount: 100,
        targetCount: 100,
        metric: "burpees",
        timeLimit: 20 * 60 * 1e3,
        rewards: {
            exp: 600,
            gold: 300,
            title: "Thunder Lord"
        },
        scaling: {
            targetCount: 10,
            rewards: {
                exp: 75,
                gold: 35
            }
        }
    },
    ABYSS_WALKER: {
        id: "abyss_walker",
        name: "Abyss Walker",
        description: "Descend into the depths. Perform 50 pull-ups in a single session.",
        baseTargetCount: 50,
        targetCount: 50,
        metric: "pull-ups",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 700,
            gold: 350,
            title: "Void Strider"
        },
        scaling: {
            targetCount: 5,
            rewards: {
                exp: 100,
                gold: 50
            }
        }
    },
    FLAME_EMPEROR: {
        id: "flame_emperor",
        name: "Flame Emperor",
        description: "Burn with intensity. Complete 30 minutes of high-intensity interval training (HIIT).",
        baseTargetCount: 30,
        targetCount: 30,
        metric: "minutes",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 550,
            gold: 275,
            title: "Inferno Lord"
        },
        scaling: {
            targetCount: 2,
            rewards: {
                exp: 75,
                gold: 35
            }
        }
    },
    FROST_GIANT: {
        id: "frost_giant",
        name: "Frost Giant",
        description: "Endure the cold. Swim 1 kilometer in open water or a pool.",
        baseTargetCount: 1,
        targetCount: 1,
        metric: "kilometers",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 650,
            gold: 325,
            title: "Ice Breaker"
        },
        scaling: {
            targetCount: .2,
            rewards: {
                exp: 75,
                gold: 35
            }
        }
    },
    EARTH_SHAKER: {
        id: "earth_shaker",
        name: "Earth Shaker",
        description: "Shake the ground beneath you. Perform 200 squats in a single session.",
        baseTargetCount: 200,
        targetCount: 200,
        metric: "squats",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 800,
            gold: 400,
            title: "Titan of Strength"
        },
        scaling: {
            targetCount: 20,
            rewards: {
                exp: 100,
                gold: 50
            }
        }
    },
    WIND_RIDER: {
        id: "wind_rider",
        name: "Wind Rider",
        description: "Ride the winds of speed. Cycle 20 kilometers in a single session.",
        baseTargetCount: 20,
        targetCount: 20,
        metric: "kilometers",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 700,
            gold: 350,
            title: "Gale Force"
        },
        scaling: {
            targetCount: 2,
            rewards: {
                exp: 100,
                gold: 50
            }
        }
    },
    VOID_SEEKER: {
        id: "void_seeker",
        name: "Void Seeker",
        description: "Seek the unknown. Meditate for 30 minutes daily for 7 days.",
        baseTargetCount: 7,
        targetCount: 7,
        metric: "days",
        timeLimit: 7 * 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 900,
            gold: 450,
            title: "Mind of the Void"
        },
        scaling: {
            targetCount: 1,
            rewards: {
                exp: 100,
                gold: 50
            }
        }
    },
    BLAZE_ARCHER: {
        id: "blaze_archer",
        name: "Blaze Archer",
        description: "Strike with precision. Complete 100 archery shots or similar precision training.",
        baseTargetCount: 100,
        targetCount: 100,
        metric: "shots",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 600,
            gold: 300,
            title: "Eagle Eye"
        },
        scaling: {
            targetCount: 10,
            rewards: {
                exp: 75,
                gold: 35
            }
        }
    },
    THUNDER_GOD: {
        id: "thunder_god",
        name: "Thunder God",
        description: "Channel the power of thunder. Perform 50 box jumps in 10 minutes.",
        baseTargetCount: 50,
        targetCount: 50,
        metric: "box jumps",
        timeLimit: 10 * 60 * 1e3,
        rewards: {
            exp: 650,
            gold: 325,
            title: "Storm Bringer"
        },
        scaling: {
            targetCount: 5,
            rewards: {
                exp: 75,
                gold: 35
            }
        }
    },
    MOONLIGHT_ASSASSIN: {
        id: "moonlight_assassin",
        name: "Moonlight Assassin",
        description: "Move in silence. Complete 30 minutes of yoga or flexibility training.",
        baseTargetCount: 30,
        targetCount: 30,
        metric: "minutes",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 500,
            gold: 250,
            title: "Shadow Dancer"
        },
        scaling: {
            targetCount: 2,
            rewards: {
                exp: 50,
                gold: 25
            }
        }
    },
    STARGAZER: {
        id: "stargazer",
        name: "Stargazer",
        description: "Reach for the stars. Climb 500 meters on a climbing wall or rock face.",
        baseTargetCount: 500,
        targetCount: 500,
        metric: "meters climbed",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 800,
            gold: 400,
            title: "Celestial Climber"
        },
        scaling: {
            targetCount: 50,
            rewards: {
                exp: 100,
                gold: 50
            }
        }
    },
    DRAGON_TAMER: {
        id: "dragon_tamer",
        name: "Dragon Tamer",
        description: "Tame the beast within. Complete 3 consecutive days of intense training.",
        baseTargetCount: 3,
        targetCount: 3,
        metric: "days",
        timeLimit: 3 * 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 1e3,
            gold: 500,
            title: "Beast Master"
        },
        scaling: {
            targetCount: 1,
            rewards: {
                exp: 150,
                gold: 75
            }
        }
    },
    ETERNAL_GUARDIAN: {
        id: "eternal_guardian",
        name: "Eternal Guardian",
        description: "Protect the realm. Complete 10,000 steps in a single day.",
        baseTargetCount: 1e4,
        targetCount: 1e4,
        metric: "steps",
        timeLimit: 24 * 60 * 60 * 1e3,
        rewards: {
            exp: 700,
            gold: 350,
            title: "Guardian of Eternity"
        },
        scaling: {
            targetCount: 500,
            rewards: {
                exp: 75,
                gold: 35
            }
        }
    }
}
  , mt = {
    MINOR_XP_BOOST: {
        id: "minor_xp_boost",
        name: "Minor XP Boost",
        description: "Increases XP gain by 10% for 30 minutes",
        price: 50,
        category: "booster",
        rankRequired: "E",
        duration: 18e5,
        effect: {
            type: "global_xp",
            value: 1.1
        }
    },
    GOLDEN_GRIMOIRE: {
        id: "golden_grimoire",
        name: "Golden Grimoire",
        description: "Increases XP gain from all activities by 25% for 2 hours",
        price: 250,
        category: "booster",
        rankRequired: "D",
        duration: 72e5,
        effect: {
            type: "global_xp",
            value: 1.25
        }
    },
    RULERS_AUTHORITY: {
        id: "rulers_authority",
        name: "Ruler's Authority",
        description: "Triples XP gain from all sources for 30 minutes",
        price: 1e3,
        category: "booster",
        rankRequired: "A",
        duration: 18e5,
        effect: {
            type: "global_xp",
            value: 3
        }
    },
    BASIC_QUEST_BOOST: {
        id: "basic_quest_boost",
        name: "Basic Quest Boost",
        description: "Increases quest progress speed by 20% for 30 minutes",
        price: 75,
        category: "enhancer",
        rankRequired: "E",
        duration: 18e5,
        effect: {
            type: "quest_progress",
            value: 1.2
        }
    },
    MONARCHS_BLESSING: {
        id: "monarchs_blessing",
        name: "Monarch's Blessing",
        description: "Triples all quest rewards and progress for 30 minutes",
        price: 800,
        category: "enhancer",
        rankRequired: "B",
        duration: 18e5,
        effect: {
            type: "quest_rewards",
            value: 3
        }
    },
    MINOR_UPGRADE: {
        id: "minor_upgrade",
        name: "Minor Upgrade",
        description: "Permanently increases all XP gain by 2%",
        price: 100,
        category: "upgrade",
        rankRequired: "E",
        effect: {
            type: "permanent_xp",
            value: 1.02
        }
    },
    GOLD_MAGNET: {
        id: "gold_magnet",
        name: "Gold Magnet",
        description: "Permanently increases gold earned from all sources by 15%",
        price: 2e3,
        category: "upgrade",
        rankRequired: "A",
        effect: {
            type: "gold_multiplier",
            value: 1.15
        }
    },
    MONARCHS_DOMAIN: {
        id: "monarchs_domain",
        name: "Monarch's Domain",
        description: "Permanently increases all stats by 20%",
        price: 5e3,
        category: "upgrade",
        rankRequired: "S",
        effect: {
            type: "all_stats",
            value: 1.2
        }
    },
    CUSTOM_NAME_COLOR: {
        id: "custom_name_color",
        name: "Custom Name Color",
        description: "Change the color of your name in rankings and messages",
        price: 500,
        category: "cosmetic",
        rankRequired: "E",
        effect: {
            type: "name_color",
            value: !0
        }
    },
    NAME_CHANGE_TOKEN: {
        id: "name_change_token",
        name: "Name Change Token",
        description: "Allows you to change your hunter name once",
        price: 500,
        category: "utility",
        rankRequired: "E",
        consumable: !0,
        effect: {
            type: "name_change",
            value: 1
        }
    },
    TITLE_CHANGE_TOKEN: {
        id: "title_change_token",
        name: "Title Change Token",
        description: "Allows you to change your title once",
        price: 750,
        category: "utility",
        rankRequired: "E",
        consumable: !0,
        effect: {
            type: "title_change",
            value: 1
        }
    },
    LEVEL_EFFECT: {
        id: "level_effect",
        name: "Level-Up Effect",
        description: "Adds custom visual effects when you level up",
        price: 1e3,
        category: "cosmetic",
        rankRequired: "C",
        effect: {
            type: "level_visual",
            value: !0
        }
    },
    TITLE_SHADOW_MONARCH: {
        id: "title_shadow_monarch",
        name: 'Title: "Shadow Monarch"',
        description: "The ultimate title reserved for the strongest",
        price: 5e3,
        category: "title",
        rankRequired: "S",
        effect: {
            type: "title",
            value: "Shadow Monarch"
        }
    },
    TITLE_ARISE: {
        id: "title_arise",
        name: 'Title: "ARISE"',
        description: "The ultimate command of the Shadow Monarch",
        price: 1e4,
        category: "title",
        rankRequired: "S",
        effect: {
            type: "title",
            value: "ARISE"
        }
    },
    TITLE_CRIMSON_LORD: {
        id: "title_crimson_lord",
        name: 'Title: "Crimson Lord"',
        description: "A blood-red title for those who command respect",
        price: 3e3,
        category: "title",
        rankRequired: "A",
        effect: {
            type: "title",
            value: "Crimson Lord",
            color: "#ff3333"
        }
    },
    TITLE_FROST_SOVEREIGN: {
        id: "title_frost_sovereign",
        name: 'Title: "Frost Sovereign"',
        description: "An icy blue title for the masters of cold",
        price: 3e3,
        category: "title",
        rankRequired: "A",
        effect: {
            type: "title",
            value: "Frost Sovereign",
            color: "#33ccff"
        }
    },
    TITLE_EMERALD_SAGE: {
        id: "title_emerald_sage",
        name: 'Title: "Emerald Sage"',
        description: "A mystical green title for the wisest hunters",
        price: 3e3,
        category: "title",
        rankRequired: "A",
        effect: {
            type: "title",
            value: "Emerald Sage",
            color: "#33ff66"
        }
    },
    TITLE_GOLDEN_EMPEROR: {
        id: "title_golden_emperor",
        name: 'Title: "Golden Emperor"',
        description: "A majestic golden title for the wealthiest hunters",
        price: 5e3,
        category: "title",
        rankRequired: "S",
        effect: {
            type: "title",
            value: "Golden Emperor",
            color: "#ffcc33"
        }
    },
    DAILY_QUEST_RESET: {
        id: "daily_quest_reset",
        name: "Daily Quest Reset",
        description: "Reset all daily quests immediately",
        price: 500,
        category: "special",
        rankRequired: "B",
        effect: {
            type: "reset_daily",
            value: !0
        }
    },
    RANK_INSIGNIA: {
        id: "rank_insignia",
        name: "Rank Insignia",
        description: "Displays a special badge next to your name based on your rank",
        price: 1e3,
        category: "cosmetic",
        rankRequired: "C",
        effect: {
            type: "rank_badge",
            value: !0
        }
    }
}
  , F = {};
Object.values(mt).forEach(n => {
    F[n.id] = n
}
);
const He = {
    NOVICE_HUNTER: {
        id: "novice_hunter",
        name: "Novice Hunter",
        description: "Reach level 5",
        ranks: [{
            rank: 1,
            requirement: 5,
            reward: {
                exp: 50,
                gold: 25
            }
        }, {
            rank: 2,
            requirement: 10,
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 3,
            requirement: 25,
            reward: {
                exp: 200,
                gold: 100
            }
        }, {
            rank: 4,
            requirement: 50,
            reward: {
                exp: 400,
                gold: 200
            }
        }, {
            rank: 5,
            requirement: 100,
            reward: {
                exp: 800,
                gold: 400
            }
        }],
        currentRank: 0,
        type: "level",
        icon: "🌟"
    },
    QUEST_MASTER: {
        id: "quest_master",
        name: "Quest Master",
        description: "Complete quests",
        ranks: [{
            rank: 1,
            requirement: 5,
            reward: {
                exp: 25,
                gold: 15
            }
        }, {
            rank: 2,
            requirement: 10,
            reward: {
                exp: 50,
                gold: 25
            }
        }, {
            rank: 3,
            requirement: 25,
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 4,
            requirement: 50,
            reward: {
                exp: 200,
                gold: 100
            }
        }, {
            rank: 5,
            requirement: 100,
            reward: {
                exp: 400,
                gold: 200
            }
        }],
        currentRank: 0,
        type: "quests_completed",
        icon: "📚"
    },
    STREAK_WARRIOR: {
        id: "streak_warrior",
        name: "Streak Warrior",
        description: "Maintain a daily streak",
        ranks: [{
            rank: 1,
            requirement: 3,
            reward: {
                exp: 25,
                gold: 15
            }
        }, {
            rank: 2,
            requirement: 7,
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 3,
            requirement: 14,
            reward: {
                exp: 200,
                gold: 100
            }
        }, {
            rank: 4,
            requirement: 30,
            reward: {
                exp: 400,
                gold: 200
            }
        }, {
            rank: 5,
            requirement: 60,
            reward: {
                exp: 800,
                gold: 400
            }
        }],
        currentRank: 0,
        type: "daily_streak",
        icon: "🔥"
    },
    HYDRATION_MASTER: {
        id: "hydration_master",
        name: "Hydration Master",
        description: "Maintain a water intake streak",
        ranks: [{
            rank: 1,
            requirement: 3,
            reward: {
                exp: 50,
                gold: 25
            }
        }, {
            rank: 2,
            requirement: 7,
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 3,
            requirement: 14,
            reward: {
                exp: 200,
                gold: 100
            }
        }, {
            rank: 4,
            requirement: 30,
            reward: {
                exp: 500,
                gold: 250
            }
        }, {
            rank: 5,
            requirement: 60,
            reward: {
                exp: 1e3,
                gold: 500
            }
        }],
        currentRank: 0,
        type: "water_streak",
        icon: "💧"
    },
    GOLD_BARON: {
        id: "gold_baron",
        name: "Gold Baron",
        description: "Accumulate gold",
        ranks: [{
            rank: 1,
            requirement: 1e3,
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 2,
            requirement: 5e3,
            reward: {
                exp: 300,
                gold: 150
            }
        }, {
            rank: 3,
            requirement: 1e4,
            reward: {
                exp: 500,
                gold: 250
            }
        }, {
            rank: 4,
            requirement: 25e3,
            reward: {
                exp: 1e3,
                gold: 500
            }
        }, {
            rank: 5,
            requirement: 5e4,
            reward: {
                exp: 2e3,
                gold: 1e3
            }
        }],
        currentRank: 0,
        type: "total_gold",
        icon: "💎"
    },
    BATTLE_VETERAN: {
        id: "battle_veteran",
        name: "Battle Veteran",
        description: "Win battles",
        ranks: [{
            rank: 1,
            requirement: 10,
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 2,
            requirement: 50,
            reward: {
                exp: 300,
                gold: 150
            }
        }, {
            rank: 3,
            requirement: 100,
            reward: {
                exp: 500,
                gold: 250
            }
        }, {
            rank: 4,
            requirement: 250,
            reward: {
                exp: 1e3,
                gold: 500
            }
        }, {
            rank: 5,
            requirement: 500,
            reward: {
                exp: 2e3,
                gold: 1e3
            }
        }],
        currentRank: 0,
        type: "battles_won",
        icon: "⚔️"
    },
    WORLD_EXPLORER: {
        id: "world_explorer",
        name: "World Explorer",
        description: "Discover new locations",
        ranks: [{
            rank: 1,
            requirement: 5,
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 2,
            requirement: 10,
            reward: {
                exp: 200,
                gold: 100
            }
        }, {
            rank: 3,
            requirement: 20,
            reward: {
                exp: 400,
                gold: 200
            }
        }, {
            rank: 4,
            requirement: 35,
            reward: {
                exp: 600,
                gold: 300
            }
        }, {
            rank: 5,
            requirement: 50,
            reward: {
                exp: 1e3,
                gold: 500
            }
        }],
        currentRank: 0,
        type: "locations_discovered",
        icon: "🗺️"
    },
    MASTER_CRAFTSMAN: {
        id: "master_craftsman",
        name: "Master Craftsman",
        description: "Craft items",
        ranks: [{
            rank: 1,
            requirement: 10,
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 2,
            requirement: 25,
            reward: {
                exp: 200,
                gold: 100
            }
        }, {
            rank: 3,
            requirement: 50,
            reward: {
                exp: 400,
                gold: 200
            }
        }, {
            rank: 4,
            requirement: 100,
            reward: {
                exp: 600,
                gold: 300
            }
        }, {
            rank: 5,
            requirement: 200,
            reward: {
                exp: 1e3,
                gold: 500
            }
        }],
        currentRank: 0,
        type: "items_crafted",
        icon: "🛠️"
    },
    FRIENDLY_NEIGHBOR: {
        id: "friendly_neighbor",
        name: "Friendly Neighbor",
        description: "Make friends",
        ranks: [{
            rank: 1,
            requirement: 5,
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 2,
            requirement: 10,
            reward: {
                exp: 200,
                gold: 100
            }
        }, {
            rank: 3,
            requirement: 20,
            reward: {
                exp: 400,
                gold: 200
            }
        }, {
            rank: 4,
            requirement: 35,
            reward: {
                exp: 600,
                gold: 300
            }
        }, {
            rank: 5,
            requirement: 50,
            reward: {
                exp: 1e3,
                gold: 500
            }
        }],
        currentRank: 0,
        type: "friends_added",
        icon: "🤝"
    },
    COLLECTOR_EXTRAORDINAIRE: {
        id: "collector_extraordinaire",
        name: "Collector Extraordinaire",
        description: "Collect rare items",
        ranks: [{
            rank: 1,
            requirement: 5,
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 2,
            requirement: 10,
            reward: {
                exp: 200,
                gold: 100
            }
        }, {
            rank: 3,
            requirement: 20,
            reward: {
                exp: 400,
                gold: 200
            }
        }, {
            rank: 4,
            requirement: 35,
            reward: {
                exp: 600,
                gold: 300
            }
        }, {
            rank: 5,
            requirement: 50,
            reward: {
                exp: 1e3,
                gold: 500
            }
        }],
        currentRank: 0,
        type: "rare_items_collected",
        icon: "📦"
    },
    EARLY_BIRD: {
        id: "early_bird",
        name: "Early Bird",
        description: "Log in early in the morning",
        ranks: [{
            rank: 1,
            requirement: 1,
            reward: {
                exp: 50,
                gold: 25
            }
        }, {
            rank: 2,
            requirement: 5,
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 3,
            requirement: 10,
            reward: {
                exp: 200,
                gold: 100
            }
        }, {
            rank: 4,
            requirement: 20,
            reward: {
                exp: 400,
                gold: 200
            }
        }, {
            rank: 5,
            requirement: 30,
            reward: {
                exp: 800,
                gold: 400
            }
        }],
        currentRank: 0,
        type: "early_logins",
        icon: "🌅"
    },
    CHALLENGE_CHAMPION: {
        id: "challenge_champion",
        name: "Challenge Champion",
        description: "Complete challenges",
        ranks: [{
            rank: 1,
            requirement: 5,
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 2,
            requirement: 10,
            reward: {
                exp: 200,
                gold: 100
            }
        }, {
            rank: 3,
            requirement: 20,
            reward: {
                exp: 400,
                gold: 200
            }
        }, {
            rank: 4,
            requirement: 35,
            reward: {
                exp: 600,
                gold: 300
            }
        }, {
            rank: 5,
            requirement: 50,
            reward: {
                exp: 1e3,
                gold: 500
            }
        }],
        currentRank: 0,
        type: "challenges_completed",
        icon: "🏆"
    },
    RANK_MASTER: {
        id: "rank_master",
        name: "Rank Master",
        description: "Achieve higher ranks",
        ranks: [{
            rank: 1,
            requirement: "D",
            reward: {
                exp: 100,
                gold: 50
            }
        }, {
            rank: 2,
            requirement: "C",
            reward: {
                exp: 200,
                gold: 100
            }
        }, {
            rank: 3,
            requirement: "B",
            reward: {
                exp: 300,
                gold: 150
            }
        }, {
            rank: 4,
            requirement: "A",
            reward: {
                exp: 400,
                gold: 200
            }
        }, {
            rank: 5,
            requirement: "S",
            reward: {
                exp: 500,
                gold: 250
            }
        }],
        currentRank: 0,
        type: "rank",
        icon: "👑"
    }
};
async function Ne(n) {
    var r, a, d;
    if (!n) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    const e = db.collection("players").doc(currentUser.uid)
      , i = (await e.get()).data();
    i.profile || (i.profile = {
        name: "",
        title: "Novice",
        picture: "default.png",
        bio: "",
        class: "Hunter",
        joinDate: ((r = i.profile) == null ? void 0 : r.joinDate) || firebase.firestore.FieldValue.serverTimestamp(),
        unlockedTitles: []
    },
    await e.update({
        profile: i.profile
    })),
    await checkDailyStreak(),
    playerStats.profile = i.profile,
    playerStats.level = i.level,
    playerStats.exp = i.exp,
    playerStats.gold = i.gold,
    playerStats.rank = i.rank,
    playerStats.streak = i.streak,
    playerStats.questsCompleted = i.questsCompleted,
    playerStats.waterIntake = i.waterIntake,
    playerStats.achievements = i.achievements;
    let o = "";
    if (!i.achievements || Object.keys(i.achievements).length === 0)
        o = '<div class="profile-achievements-none">No achievements yet</div>';
    else {
        o = '<div class="profile-achievements-list">';
        for (const [l,c] of Object.entries(i.achievements)) {
            const p = Object.values(ACHIEVEMENTS).find(f => f.id === l);
            if (p) {
                const f = c.currentRank === p.ranks.length ? "MAX" : c.currentRank;
                o += `
          <div class="profile-achievement-item">
            <span class="achievement-name">${p.name}</span>
            <span class="achievement-rank">Rank ${f}</span>
          </div>`
            }
        }
        o += "</div>"
    }
    const s = document.getElementById("profileContent");
    s.innerHTML = `
    <div class="window-section">
      <div class="profile-header">
        <img src="${i.profile.picture}" alt="Profile Picture" class="profile-picture">
        <div class="profile-title" style="color: ${i.profile.titleColor || "white"}">
          [${i.profile.title || "Novice"}] ${i.profile.name || "Unnamed Hunter"}
        </div>
      </div>
      <div class="profile-details">
        <div>Class: ${i.profile.class || "Hunter"}</div>
        <div>Rank: ${i.rank}</div>
        <div>Level: ${i.level}</div>
        <div>EXP: ${i.exp}/${getExpNeededForLevel(i.level)}</div>
        <div>Gold: ${i.gold}</div>
        <div>Daily Streak: ${i.streak} days</div>
        ${((a = i.waterIntake) == null ? void 0 : a.streakDays) > 0 ? `<div>Water Streak: ${i.waterIntake.streakDays} days</div>` : ""}
        <div>Quests Completed: ${i.questsCompleted}</div>
        <div>Bio: ${i.profile.bio || "No bio set"}</div>
        <div>Join Date: ${((d = i.profile.joinDate) == null ? void 0 : d.toDate().toLocaleDateString()) || "Unknown"}</div>
      </div>
      <div class="profile-achievements">
        <h3>Achievements:</h3>
        ${o}
      </div>
      <div class="profile-commands">
        <h3>Profile Commands:</h3>
        <div>!setname &lt;name&gt; - Set your hunter name</div>
        <div>!settitle &lt;title&gt; - Set your title</div>
        <div>!setbio &lt;text&gt; - Set your profile bio</div>
        <div>!setclass &lt;class&gt; - Set your hunter class</div>
      </div>
    </div>
  `,
    windowSystem.showWindow("profileWindow"),
    printToTerminal(`
=== PLAYER PROFILE ===`, "system"),
    printToTerminal(`[${i.profile.title || "Novice"}] ${i.profile.name || "Unnamed Hunter"}`, "info"),
    printToTerminal(`Rank: ${i.rank} | Level: ${i.level} | Streak: ${i.streak} days`, "info"),
    printToTerminal("Use !profile to view full details in window", "system")
}
async function ie() {
    if (!window.isAuthenticated) {
        window.printToTerminal("You must !reawaken first.", "error");
        return
    }
    const n = document.getElementById("inventoryContent");
    if (!n) {
        window.printToTerminal("Inventory UI element not found!", "error");
        return
    }
    try {
        const t = await window.db.collection("players").doc(window.currentUser.uid).get();
        if (!t.exists) {
            window.printToTerminal("Player data not found!", "error"),
            n.innerHTML = '<div class="window-section">Error loading inventory</div>';
            return
        }
        const i = t.data().inventory || [];
        let o = '<div class="window-section">';
        i.length === 0 ? o += '<div class="window-item">Your inventory is empty</div>' : i.forEach( (s, r) => {
            const a = window.ITEMS[s.id] || {
                name: s.name || "Unknown Item",
                description: "No description available",
                consumable: !1
            }
              , d = s.used || !1
              , l = d ? " (Used)" : a.consumable ? " (Available)" : " (Permanent)";
            o += `
          <div class="window-item${d ? " used" : ""}">
            <div class="window-item-title">${a.name}${l}</div>
            <div class="window-item-description">${a.description}</div>
            <div class="window-item-actions">
              ${!d && a.consumable ? `<button class="window-button" onclick="useInventoryItem('${s.id}', ${r})">Use</button>` : d ? '<span class="item-status">Already Used</span>' : '<span class="item-status">Permanent Item</span>'}
            </div>
          </div>
        `
        }
        ),
        o += "</div>",
        n.innerHTML = o,
        window.windowSystem.showWindow("inventoryWindow")
    } catch (e) {
        console.error("Error loading inventory:", e),
        window.printToTerminal("Failed to load inventory: " + e.message, "error"),
        n.innerHTML = '<div class="window-section">Error loading inventory</div>'
    }
}
window.showInventory = ie;
function Re(n) {
    if (!n || n.length === 0) {
        printToTerminal("[ SYSTEM COMMANDS ] 📜"),
        printToTerminal("--------------------------------------------"),
        printToTerminal("!commands general - General Commands"),
        printToTerminal("!commands profile - User Authentication & Profile"),
        printToTerminal("!commands quests - Quests & Progression"),
        printToTerminal("!commands status - Player Status & Progress"),
        printToTerminal("!commands achievements - Achievements & Leaderboards"),
        printToTerminal("!commands inventory - Inventory & Shop"),
        printToTerminal("!commands water - Water Tracking"),
        printToTerminal(`
> Each category contains specific commands for that area.`),
        printToTerminal("> Type the category command to see detailed commands."),
        printToTerminal("--------------------------------------------");
        return
    }
    switch (n[0].toLowerCase()) {
    case "general":
        printToTerminal(`
=== 📜 GENERAL COMMANDS ===`, "system"),
        printToTerminal("!commands, !c - Show all commands"),
        printToTerminal("!clear, !cl - Clear the terminal"),
        printToTerminal("!sleep - Log out (Enter sleep mode)"),
        printToTerminal("!simulate - Simulate daily quest timeout [Testing]", "warning");
        break;
    case "auth":
    case "profile":
        printToTerminal(`
=== 🛡️ USER AUTHENTICATION & PROFILE ===`, "system"),
        printToTerminal("!reawaken, !r - Authenticate user"),
        printToTerminal("!profile, !p - Show player profile"),
        printToTerminal("!setname <name> - Set hunter name"),
        printToTerminal("!settitle <title> - Set your title"),
        printToTerminal("!setbio <text> - Set your profile bio"),
        printToTerminal("!setclass <class> - Set your hunter class");
        break;
    case "quests":
    case "quest":
        printToTerminal(`
=== 🎯 QUESTS & PROGRESSION ===`, "system"),
        printToTerminal("!quests, !q - Show active quests"),
        printToTerminal("!dailyquests, !dq - Show daily quests"),
        printToTerminal("!addquest, !aq - Create a new quest"),
        printToTerminal("!adddailyquest, !adq - Create a daily quest"),
        printToTerminal("!update <quest_id> <type> <amount> - Update quest progress");
        break;
    case "status":
    case "progress":
        printToTerminal(`
=== 📊 PLAYER STATUS & PROGRESS ===`, "system"),
        printToTerminal("!status, !s - Show player status"),
        printToTerminal("!addxp, !ax - Add experience points"),
        printToTerminal("!reset - Reset progress (level, exp, gold)", "warning");
        break;
    case "achievements":
    case "leaderboard":
        printToTerminal(`
=== 🏆 ACHIEVEMENTS & LEADERBOARDS ===`, "system"),
        printToTerminal("!achievements, !ach - Show unlocked achievements"),
        printToTerminal("!leaderboard, !lb - Show global leaderboard");
        break;
    case "inventory":
    case "shop":
        printToTerminal(`
=== 🎒 INVENTORY & SHOP ===`, "system"),
        printToTerminal("!inventory, !i - Show player inventory"),
        printToTerminal("!shop, !sh - Open the shop");
        break;
    case "water":
        printToTerminal(`
=== 💧 WATER TRACKING ===`, "system"),
        printToTerminal("!waterDrank, !wd <glasses> - Track water intake"),
        printToTerminal("!waterStatus, !ws - Show water intake progress");
        break;
    case "motivation":
        printToTerminal(`
=== 💪 MOTIVATION ===`, "system"),
        printToTerminal("!motivation, !m - Get a motivational quote");
        break;
    default:
        printToTerminal("Unknown category. Available categories:", "warning"),
        printToTerminal("!commands general - General commands"),
        printToTerminal("!commands profile - Profile & authentication"),
        printToTerminal("!commands quests - Quest management"),
        printToTerminal("!commands status - Player status"),
        printToTerminal("!commands achievements - Achievements"),
        printToTerminal("!commands inventory - Inventory"),
        printToTerminal("!commands water - Water tracking");
        break
    }
}
const Ue = {
    FIREBASE_CONFIG: {
        apiKey: "AIzaSyAEpfs-P81k4vagCAPlrW_qOXEysllMjGg",
        authDomain: "reawakening-fe981.firebaseapp.com",
        projectId: "reawakening-fe981",
        storageBucket: "reawakening-fe981.firebasestorage.app",
        messagingSenderId: "310750239922",
        appId: "1:310750239922:web:cdfb7c87f2e05c52553dab",
        measurementId: "G-WLY0K1N1TG"
    },
    OPENROUTER_API_KEY: "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"
};
window.ITEMS = F;
firebase.initializeApp(Ue.FIREBASE_CONFIG);
const Y = firebase.auth()
  , x = firebase.firestore()
  , _ = {
    timers: new Map,
    isInitialized: !1,
    startTimer(n, e, t=1e3) {
        this.timers.has(n) && this.stopTimer(n);
        const i = setInterval(e, t);
        return this.timers.set(n, i),
        i
    },
    stopTimer(n) {
        this.timers.has(n) && (clearInterval(this.timers.get(n)),
        this.timers.delete(n))
    },
    stopAllTimers() {
        this.timers.forEach(n => clearInterval(n)),
        this.timers.clear(),
        this.isInitialized = !1
    },
    hasActiveTimer(n) {
        return this.timers.has(n)
    }
};
function he() {
    _.isInitialized || (_.hasActiveTimer("battleTimers") || _.startTimer("battleTimers", ft),
    _.hasActiveTimer("questTimers") || _.startTimer("questTimers", gt),
    _.hasActiveTimer("waterCheck") || _.startTimer("waterCheck", de, 6e4),
    _.isInitialized = !0)
}
function ft() {
    if (!h)
        return;
    document.querySelectorAll(".battle-time-remaining").forEach(e => {
        const t = e.dataset.endTime;
        if (!t)
            return;
        const s = new Date(t) - new Date;
        if (s <= 0) {
            e.textContent = "Time's up!";
            const r = e.dataset.bossId;
            r && Se(x.collection("players").doc(h.uid), r)
        } else
            e.textContent = `Time Remaining: ${J(s)}`
    }
    )
}
function gt() {
    if (!h)
        return;
    const n = document.getElementById("centralDailyTimer");
    if (!n)
        return;
    const e = se()
      , t = new Date
      , i = e - t
      , o = new Date(t.setHours(0, 0, 0, 0))
      , s = e - o
      , r = (s - i) / s * 100;
    if (i <= 0)
        n.textContent = "Time's up!",
        ve();
    else {
        n.textContent = J(i);
        const a = n.parentElement.querySelector(".timer-progress-bar");
        a && (a.style.width = `${r}%`)
    }
}
document.addEventListener("visibilitychange", () => {
    document.hidden ? _.stopAllTimers() : h && he()
}
);
Y.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then( () => {
    console.log("Persistence set to LOCAL")
}
).catch(n => {
    console.error("Persistence error:", n)
}
);
Y.onAuthStateChanged(async n => {
    if (n)
        h = n,
        k = !0,
        localStorage.setItem("user", JSON.stringify({
            uid: n.uid,
            email: n.email,
            displayName: n.displayName
        })),
        await window.initializePlayer(),
        await Wt(),
        await printToTerminal("[ SYSTEM RECOGNIZES YOU ]", "system"),
        await new Promise(e => setTimeout(e, 1100)),
        await A.loadNotes();
    else {
        const e = localStorage.getItem("user");
        e ? Y.signInWithEmailAndPassword(JSON.parse(e).email).catch(async () => {
            localStorage.removeItem("user"),
            h = null,
            k = !1,
            await printToTerminal("[ CONNECTION LOST ]", "error"),
            await printToTerminal("Hunter Authentication Required", "warning")
        }
        ) : (h = null,
        k = !1,
        await printToTerminal("[ ACCESS DENIED ]", "error"),
        await printToTerminal("Use !reawaken to establish connection", "info"),
        A.notes.clear(),
        A.updateNotesWindow())
    }
}
);
let k = !1
  , h = null
  , u = {
    level: 1,
    exp: 0,
    expNeeded: null,
    gold: 0,
    rank: "E",
    streak: 0,
    questsCompleted: 0,
    achievements: [],
    inventory: [],
    lastDailyCompletion: null,
    profile: {
        name: "",
        title: "Novice",
        picture: "default.png",
        bio: "",
        class: "Hunter",
        joinDate: null,
        unlockedTitles: []
    },
    waterIntake: {
        current: 0,
        lastReset: null,
        streakDays: 0
    }
};
const De = document.getElementById("terminal")
  , ee = document.getElementById("output")
  , H = document.getElementById("input")
  , me = document.getElementById("notification");
window.updateTerminalPrompt = function() {
    var t, i;
    const e = document.querySelector(".terminal-prompt-user");
    if (e) {
        if ((u.streak || 0) >= 3) {
            Ie();
            return
        }
        let s = ((t = u.profile) == null ? void 0 : t.name) || "PLAYER";
        (i = u.profile) != null && i.title && (s = `[${u.profile.title}] ${s}`,
        u.profile.titleColor ? e.style.color = u.profile.titleColor : e.style.color = "white"),
        e.textContent = s
    }
}
;
window.showShop = async function() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    b.showWindow("shopWindow")
}
;
window.showQuestIds = async function() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    const e = x.collection("players").doc(h.uid)
      , t = await e.collection("quests").get()
      , i = await e.collection("dailyQuests").get();
    if (printToTerminal(`=== QUEST IDs ===
`, "system"),
    t.empty && i.empty) {
        printToTerminal("No quests found.", "error");
        return
    }
    t.empty || (printToTerminal(`
Regular Quests:`, "info"),
    t.forEach(o => {
        const s = o.data();
        printToTerminal(`${s.title}: <span class="copyable-id" onclick="copyToClipboard('${o.id}')">${o.id}</span>`, "default")
    }
    )),
    i.empty || (printToTerminal(`
Daily Quests:`, "info"),
    i.forEach(o => {
        const s = o.data();
        printToTerminal(`${s.title}: <span class="copyable-id" onclick="copyToClipboard('${o.id}')">${o.id}</span>`, "default")
    }
    )),
    printToTerminal(`
Click on any ID to copy it to clipboard.`, "info")
}
;
function ht(n) {
    navigator.clipboard.writeText(n).then( () => {
        showNotification(`Copied quest ID: ${n}`)
    }
    ).catch(e => {
        console.error("Failed to copy text: ", e),
        showNotification("Failed to copy quest ID", "error")
    }
    )
}
window.showQuestIds = showQuestIds;
window.copyToClipboard = ht;
function qe() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    b.showWindow("notificationsWindow")
}
const z = {
    "!switch": xe,
    "!sw": xe,
    "!commands": Re,
    "!c": Re,
    "!reawaken": Pe,
    "!r": Pe,
    "!quests": () => showQuestWindow("normal"),
    "!q": () => showQuestWindow("normal"),
    "!dailyquests": () => showQuestWindow("daily"),
    "!dq": () => showQuestWindow("daily"),
    "!clear": Ae,
    "!cl": Ae,
    "!sleep": wt,
    "!leaderboard": Me,
    "!lb": Me,
    "!achievements": ye,
    "!ach": ye,
    "!profile": () => Ne(k),
    "!p": () => Ne(k),
    "!inventory": ie,
    "!i": ie,
    "!shop": showShop,
    "!sh": showShop,
    "!addxp": We,
    "!ax": We,
    "!reset": je,
    "!update": n => {
        if (n.length < 2) {
            printToTerminal("Usage: !update <quest_id> <type> [amount|complete]", "warning"),
            printToTerminal("Examples:"),
            printToTerminal("  !update abc123 daily 5     - Add 5 to progress"),
            printToTerminal("  !update abc123 daily complete  - Complete instantly", "info");
            return
        }
        const [e,t,i] = n;
        updateQuestProgress(e, t, i)
    }
    ,
    "!battle": Qe,
    "!b": Qe,
    "!challenge": oe,
    "!ch": oe,
    "!progress": we,
    "!p": we,
    "!waterDrank": ae,
    "!wd": ae,
    "!waterStatus": Ge,
    "!ws": Ge,
    "!motivation": Be,
    "!m": Be,
    "!setname": window.setPlayerName,
    "!settitle": window.setPlayerTitle,
    "!setbio": window.setPlayerBio,
    "!setclass": window.setPlayerClass,
    "!rank": Dt,
    "!rankprogress": le,
    "!penalty": re,
    "!delete": async n => {
        if (!k) {
            printToTerminal("You must !reawaken first.", "error");
            return
        }
        if (n.length < 2) {
            printToTerminal("Usage: !delete [quest/daily] [questId]", "error");
            return
        }
        const e = n[0].toLowerCase()
          , t = n[1];
        if (e !== "quest" && e !== "daily") {
            printToTerminal("Invalid type. Use 'quest' or 'daily'.", "error");
            return
        }
        await Ee(t, e === "daily" ? "daily" : "normal")
    }
    ,
    "!qid": showQuestIds,
    "!questid": showQuestIds,
    "!notifications": qe,
    "!n": qe,
    "!note": () => A.createNote(),
    "!notes": () => b.showWindow("notesWindow"),
    "!shownotes": () => A.showAllNotes(),
    "!hidenotes": () => A.hideAllNotes()
};
z["!penalty"] = re;
let ne = !1
  , W = {
    type: null,
    title: null,
    count: null,
    metric: null,
    description: null
};
async function ye() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    b.showWindow("achievementsWindow")
}
window.startQuestCreation = function(e) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    ne = !0,
    W = {
        type: e,
        title: null,
        count: null,
        metric: null,
        description: null
    },
    e === "daily" ? printToTerminal("Creating new daily quest", "info") : printToTerminal("Creating new quest", "info"),
    printToTerminal("Enter quest title (or press Enter to cancel):", "info")
}
;
let fe = [];
H.addEventListener("keypress", async n => {
    var e, t;
    if (n.key === "Enter") {
        const i = H.value.trim();
        if (H.value = "",
        ne) {
            handleQuestCreation(i);
            return
        }
        const o = ((t = (e = u == null ? void 0 : u.profile) == null ? void 0 : e.name) == null ? void 0 : t.toUpperCase()) || "PLAYER";
        if (printToTerminal(`${o} : ${i}`, "command"),
        fe.push({
            role: "user",
            content: i
        }),
        te) {
            i === "Reset the dungeon" ? je(["Reset", "the", "dungeon"]) : printToTerminal('Please type "Reset the dungeon" exactly to confirm reset', "warning");
            return
        }
        const [s,...r] = i.split(" ");
        if (i.startsWith("!") && z[s])
            z[s](r);
        else if (i !== "") {
            if (!k) {
                printToTerminal("You must !reawaken first to chat with the AI.", "error");
                return
            }
            window.soloAISystem || (window.soloAISystem = new Le);
            const a = "ai-thinking-" + Date.now();
            printToTerminal(`<span id="${a}">SOLO is thinking</span>`, "info");
            const d = () => {
                const l = document.getElementById(a);
                if (!l)
                    return;
                const c = l.innerText;
                c.endsWith("...") ? l.innerText = "SOLO is thinking" : l.innerText = c + "."
            }
            ;
            window.timerManager.startTimer(a, d, 400);
            try {
                let l = {};
                if (h && k) {
                    const m = x.collection("players").doc(h.uid)
                      , g = await m.get();
                    g.exists && (l = g.data());
                    const y = await m.collection("dailyQuests").get()
                      , w = await m.collection("quests").get();
                    l.dailyQuests = y.docs.map(v => ({
                        id: v.id,
                        ...v.data()
                    })),
                    l.normalQuests = w.docs.map(v => ({
                        id: v.id,
                        ...v.data()
                    }))
                }
                const c = await window.soloAISystem.callDeepSeekAPI(i, fe, l);
                window.timerManager.stopTimer(a);
                const p = ee.querySelectorAll(".terminal-line")
                  , f = Array.from(p).find(m => m.innerHTML.includes(a));
                f && f.remove(),
                printToTerminal(`SOLO AI: 
${c}`, "ai"),
                fe.push({
                    role: "assistant",
                    content: c
                })
            } catch (l) {
                printToTerminal(`Error communicating with AI: ${l.message}`, "error")
            }
        }
    }
}
);
window.handleQuestCreation = async function(e) {
    if (e === "") {
        ne = !1,
        W = {},
        printToTerminal("Quest creation cancelled.", "warning");
        return
    }
    if (!W.title)
        W.title = e,
        printToTerminal("Enter target count (number):", "info");
    else if (W.count)
        W.metric ? W.description || (W.description = e || "No description",
        await createQuest(W),
        ne = !1,
        W = {}) : (W.metric = e,
        printToTerminal("Enter description (optional, press Enter to skip):", "info"));
    else {
        const t = parseInt(e);
        if (isNaN(t)) {
            printToTerminal("Please enter a valid number:", "warning");
            return
        }
        W.count = t,
        printToTerminal("Enter metric (e.g., km, pushups, minutes):", "info")
    }
}
;
window.createQuest = async function(e) {
    try {
        if (!h || !h.uid)
            throw new Error("User not authenticated.");
        e.title || (e.title = "New Quest");
        let t = parseInt(e.targetCount);
        (isNaN(t) || t <= 0) && (t = 5),
        e.metric || (e.metric = "times"),
        e.description || (e.description = "Complete this quest");
        const i = {
            title: e.title,
            targetCount: t,
            currentCount: 0,
            metric: e.metric,
            description: e.description,
            type: e.type || "normal",
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            completed: !1,
            ...e.type === "daily" ? {
                lastReset: firebase.firestore.FieldValue.serverTimestamp()
            } : {}
        };
        console.log("Creating quest with data:", i);
        const o = e.type === "daily" ? "dailyQuests" : "quests"
          , r = await x.collection("players").doc(h.uid).collection(o).add(i);
        return printToTerminal(`${e.type === "daily" ? "Daily quest" : "Quest"} created successfully!`, "success"),
        showNotification("Quest created!"),
        b && (e.type === "daily" ? b.updateWindowContent("dailyQuestsWindow") : b.updateWindowContent("questsWindow")),
        r.id
    } catch (t) {
        throw printToTerminal("Error creating quest: " + t.message, "error"),
        console.error("Error details:", t),
        t
    }
}
;
window.showQuestWindow = async function(e="normal") {
    try {
        const t = windowManager.showWindow("quests-window");
        document.querySelectorAll(".quest-tab").forEach(i => {
            i.classList.remove("active-tab")
        }
        ),
        document.getElementById(`${e}-quests-tab`).classList.add("active-tab"),
        e === "daily" ? await windowManager.updateQuestsWindow("daily") : await windowManager.updateQuestsWindow("normal")
    } catch (t) {
        console.error("Error showing quest window:", t),
        printToTerminal("Error showing quest window", "error")
    }
}
;
window.commandHandlers = {
    "!quests": () => showQuestWindow("normal"),
    "!q": () => showQuestWindow("normal"),
    "!dailyquests": () => showQuestWindow("daily"),
    "!dq": () => showQuestWindow("daily")
};
window.fetchDailyQuests = async function() {
    if (!h)
        return [];
    try {
        const t = await x.collection("players").doc(h.uid).collection("dailyQuests").get();
        return t.empty ? [] : t.docs.map(i => {
            const o = i.data();
            return {
                id: i.id,
                title: o.title,
                description: o.description || "No description",
                progress: o.currentCount,
                goal: o.targetCount,
                metric: o.metric,
                completed: o.completed,
                lastCompletion: o.lastCompletion
            }
        }
        )
    } catch (e) {
        return console.error("Error fetching daily quests:", e),
        printToTerminal("Error fetching daily quests: " + e.message, "error"),
        []
    }
}
;
window.fetchNormalQuests = async function() {
    if (!h)
        return [];
    try {
        const t = await x.collection("players").doc(h.uid).collection("quests").get();
        return t.empty ? [] : t.docs.map(i => {
            const o = i.data();
            return {
                id: i.id,
                title: o.title,
                description: o.description || "No description",
                progress: o.currentCount,
                goal: o.targetCount,
                metric: o.metric,
                completed: o.completed
            }
        }
        )
    } catch (e) {
        return console.error("Error fetching normal quests:", e),
        printToTerminal("Error fetching normal quests: " + e.message, "error"),
        []
    }
}
;
async function yt() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        const n = x.collection("players").doc(h.uid);
        (await n.collection("quests").get()).forEach(async i => {
            const o = i.data();
            o.completed || (await updateQuestProgress(i.id, "normal", "complete"),
            printToTerminal(`Quest "${o.title}" completed automatically!`, "success"))
        }
        ),
        (await n.collection("dailyQuests").get()).forEach(async i => {
            const o = i.data();
            o.completed && o.lastCompletion && X(o.lastCompletion) || (await updateQuestProgress(i.id, "daily", "complete"),
            printToTerminal(`Daily quest "${o.title}" completed automatically!`, "success"))
        }
        )
    } catch (n) {
        printToTerminal("Error completing quests: " + n.message, "error")
    }
}
window.printToTerminal = async function(e, t="default") {
    var o, s;
    const i = document.createElement("div");
    switch (i.className = "terminal-line",
    t === "system" ? i.classList.add("typewriter") : t === "command" && i.classList.add("command-text"),
    t) {
    case "success":
        i.classList.add("text-success");
        break;
    case "error":
        i.classList.add("text-error");
        break;
    case "warning":
        i.classList.add("text-warning");
        break;
    case "info":
        i.classList.add("text-info");
        break;
    case "quest":
        i.classList.add("text-quest");
        break;
    case "reward":
        i.classList.add("text-reward");
        break;
    case "system":
        i.classList.add("text-system");
        break;
    case "command":
        i.classList.add("text-command");
        break;
    case "ai":
        i.classList.add("text-command");
        break
    }
    if (t === "system") {
        i.innerHTML = "",
        ee.appendChild(i);
        const r = (o = window.soloAISystem) != null && o.renderSOLOText ? window.soloAISystem.renderSOLOText(e) : e;
        for (let a = 0; a < r.length; a++)
            i.innerHTML = r.substring(0, a + 1),
            await new Promise(d => setTimeout(d, 50))
    } else if (t === "ai") {
        const r = (s = window.soloAISystem) != null && s.renderSOLOText ? window.soloAISystem.renderSOLOText(e) : e;
        i.innerHTML = r,
        ee.appendChild(i)
    } else
        i.innerHTML = e,
        ee.appendChild(i);
    De.scrollTop = De.scrollHeight
}
;
window.showNotification = function(e) {
    me.querySelector(".notification-content").textContent = e,
    me.style.display = "block",
    setTimeout( () => {
        me.style.display = "none"
    }
    , 3333)
}
;
function Ae() {
    ee.innerHTML = ""
}
window.initializePlayer = async function() {
    try {
        const e = x.collection("players").doc(h.uid)
          , t = await e.get();
        Jt(),
        t.exists ? (u = t.data(),
        (!u.expNeeded || u.expNeeded !== getExpNeededForLevel(u.level)) && (u.expNeeded = getExpNeededForLevel(u.level),
        await e.update({
            expNeeded: u.expNeeded
        }))) : (u = {
            level: 1,
            exp: 0,
            expNeeded: getExpNeededForLevel(1),
            gold: 0,
            rank: "E",
            streak: 0,
            questsCompleted: 0,
            achievements: [],
            inventory: [],
            lastDailyCompletion: null,
            profile: {
                name: "",
                title: "Novice",
                picture: "default.png",
                bio: "",
                class: "Hunter",
                joinDate: firebase.firestore.FieldValue.serverTimestamp(),
                unlockedTitles: []
            },
            waterIntake: {
                current: 0,
                lastReset: null,
                streakDays: 0
            }
        },
        await e.set(u)),
        e.onSnapshot(i => {
            if (i.exists) {
                const o = i.data();
                (o.exp !== u.exp || o.level !== u.level || o.gold !== u.gold || o.rank !== u.rank || o.expNeeded !== u.expNeeded) && (u.exp = o.exp,
                u.level = o.level,
                u.gold = o.gold,
                u.rank = o.rank,
                u.expNeeded = o.expNeeded,
                updateStatusBar())
            }
        }
        ),
        Ie(),
        updateTerminalPrompt(),
        updateStatusBar()
    } catch (e) {
        console.error("Error initializing player:", e),
        printToTerminal("Error initializing player: " + e.message, "error")
    }
}
;
window.updateStatusBar = function() {
    const e = document.querySelector(".status-bar")
      , t = u.expNeeded || getExpNeededForLevel(u.level)
      , i = u.exp / t * 100;
    if (e.style.setProperty("--exp-progress", `${i}%`),
    e.innerHTML = `
    <div class="sl-status-item sl-status-rank">
      <div class="sl-rank-hex sl-rank-${u.rank.toLowerCase()}">
        <span>${u.rank}</span>
      </div>
      <span class="sl-status-label">RANK</span>
    </div>
    
    <div class="sl-status-item sl-status-level">
      <div class="sl-level-indicator">
        <span>${u.level}</span>
      </div>
      <span class="sl-status-label">LEVEL</span>
    </div>
    
    <div class="sl-status-item sl-status-exp">
      <div class="sl-exp-container">
        <span class="sl-exp-text">${u.exp.toLocaleString()}/${t.toLocaleString()}</span>
      </div>
      <span class="sl-status-label">EXPERIENCE</span>
    </div>
    
    <div class="sl-status-item sl-status-gold">
      <div class="sl-gold-display">
        <i class="fas fa-coins sl-gold-icon"></i>
        <span class="sl-gold-amount">${u.gold.toLocaleString()}</span>
      </div>
      <span class="sl-status-label">GOLD</span>
    </div>
  `,
    Ie(),
    !document.getElementById("soloLevelingStatusBarStyles")) {
        const o = document.createElement("style");
        o.id = "soloLevelingStatusBarStyles",
        o.textContent = `      
      .sl-status-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 0 10px;
        justify-content: center;
      }
      
      .sl-status-label {
        font-size: 11px;
        color: #00a8ff;
        font-weight: 500;
        margin-top: 4px;
        letter-spacing: 0.5px;
      }
      
      /* Rank styles */
      .sl-rank-hex {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(10, 20, 40, 0.7);
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        font-weight: bold;
        font-size: 16px;
        position: relative;
        z-index: 1;
        text-shadow: 0 0 5px rgba(0, 160, 255, 0.5);
        box-shadow: 0 0 0 2px rgba(0, 160, 255, 0.4);
      }
      
      .sl-rank-hex::after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: transparent;
        z-index: -1;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        border: 2px solid currentColor;
      }
      
      .sl-rank-e { color: #00a2ff; }
      .sl-rank-d { color: #00a8ff; }
      .sl-rank-c { color: #00b0ff; }
      .sl-rank-b { color: #00b8ff; }
      .sl-rank-a { color: #00c8ff; }
      .sl-rank-s { 
        color: #00d8ff;
        animation: pulse-soft 2s infinite;
      }
      
      /* Level styles */
      .sl-level-indicator {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 40, 80, 0.5);
        border-radius: 50%;
        border: 2px solid rgba(0, 160, 255, 0.5);
        font-weight: bold;
        color: #ffffff;
        font-size: 16px;
        box-shadow: 0 0 8px rgba(0, 160, 255, 0.3);
        text-shadow: 0 0 5px rgba(0, 160, 255, 0.5);
      }
      
      /* Experience styles */
      .sl-exp-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
      }

      .sl-exp-fill {
        height: 100%;
        background: linear-gradient(to right, #0062ff, #00c8ff);
        border-radius: 3px;
        position: relative;
        box-shadow: 0 0 8px rgba(0, 180, 255, 0.7);
        transition: width 0.5s ease;
      }
      
      .sl-exp-text {
        font-size: 14px;
        color: #e0f7ff;
        margin-top: 4px;
        font-weight: 600;
      }
      
      /* Gold styles */
      .sl-gold-display {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(0, 40, 80, 0.4);
        padding: 4px 10px;
        border-radius: 3px;
        border: 1px solid rgba(0, 160, 255, 0.4);
      }
      
      .sl-gold-icon {
        color: #ffd700;
        font-size: 16px;
        filter: drop-shadow(0 0 3px rgba(255, 215, 0, 0.6));
      }
      
      .sl-gold-amount {
        color: #ffffff;
        font-weight: bold;
        font-size: 16px;
      }
      
      @keyframes pulse-soft {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
    `,
        document.head.appendChild(o)
    }
}
;
window.checkDailyQuests = async function() {
    if (!h)
        return;
    const t = await x.collection("players").doc(h.uid).collection("dailyQuests").get()
      , i = x.batch();
    let o = !1;
    t.forEach(s => {
        var l;
        const a = ((l = s.data().lastReset) == null ? void 0 : l.toDate()) || new Date(0)
          , d = new Date;
        (a.getDate() !== d.getDate() || a.getMonth() !== d.getMonth() || a.getYear() !== d.getYear()) && (i.update(s.ref, {
            currentCount: 0,
            completed: !1,
            lastReset: firebase.firestore.FieldValue.serverTimestamp()
        }),
        o = !0)
    }
    ),
    o && (await i.commit(),
    console.log("Daily quests have been reset due to new day"),
    printToTerminal("Daily quests have been reset for a new day!", "success"),
    showNotification("Daily quests reset for a new day!"))
}
;
async function Pe() {
    if (k)
        printToTerminal("You are already authenticated.", "warning");
    else
        try {
            const n = new firebase.auth.GoogleAuthProvider;
            n.addScope("https://www.googleapis.com/auth/fitness.activity.read"),
            n.addScope("https://www.googleapis.com/auth/fitness.body.read"),
            n.addScope("https://www.googleapis.com/auth/fitness.location.read");
            const e = await Y.signInWithPopup(n);
            h = e.user;
            const i = e.credential.accessToken;
            await lt(i),
            k = !0,
            showNotification("Successfully authenticated!"),
            window.initializePlayer()
        } catch (n) {
            printToTerminal("Authentication failed: " + n.message, "error")
        }
}
async function wt() {
    if (!k) {
        printToTerminal("You are not awakened.", "warning");
        return
    }
    try {
        await Y.signOut(),
        localStorage.removeItem("user"),
        h = null,
        k = !1,
        printToTerminal("You have entered sleep mode.", "warning"),
        printToTerminal("Type !reawaken to continue.", "info")
    } catch (n) {
        printToTerminal("Error entering sleep mode: " + n.message, "error")
    }
}
window.initializeSystem = async function() {
    try {
        Fe(),
        window.timerManager.startTimer("dailyQuestResetCheck", () => {
            Fe()
        }
        , 15 * 60 * 1e3),
        await nt()
    } catch (e) {
        console.error("Error initializing system:", e),
        printToTerminal("Error initializing system: " + e.message, "error")
    }
}
;
document.addEventListener("DOMContentLoaded", async () => {
    await PlayerDB.init(),
    Ye(),
    await initializeSystem(),
    window.soloAISystem = new Le;
    const n = document.createElement("div");
    n.innerHTML = bt,
    document.body.appendChild(n);
    const e = document.createElement("style");
    e.textContent = styles + vt,
    document.head.appendChild(e),
    setTimeout(async () => {
        await nt()
    }
    , 2e3)
}
);
window.commandAutocomplete = {
    commands: Object.keys(z),
    currentSuggestionIndex: 0,
    suggest(n) {
        return n ? n.startsWith("!") ? this.commands.filter(e => e.toLowerCase().startsWith(n.toLowerCase()) && e !== n).slice(0, 5) : [] : []
    },
    showNextSuggestion(n) {
        const e = this.suggest(n);
        if (e.length === 0) {
            n.placeholder = "";
            return
        }
        this.currentSuggestionIndex = (this.currentSuggestionIndex + 1) % e.length,
        n.placeholder = e[this.currentSuggestionIndex]
    }
};
H.addEventListener("input", n => {
    const e = n.target.value;
    if (e.startsWith("!")) {
        commandAutocomplete.currentSuggestionIndex = 0;
        const t = commandAutocomplete.suggest(e);
        H.placeholder = t.length > 0 ? t[0] : ""
    } else
        H.placeholder = ""
}
);
H.addEventListener("keydown", n => {
    n.key === "Tab" ? (n.preventDefault(),
    H.value.startsWith("!") && commandAutocomplete.showNextSuggestion(H)) : n.key === "Enter" && (commandAutocomplete.currentSuggestionIndex = 0)
}
);
const bt = ""
  , vt = "";
window.notificationSystem = {
    sounds: {
        success: new Audio("sounds/success.mp3"),
        warning: new Audio("sounds/warning.mp3"),
        error: new Audio("sounds/error.mp3"),
        buy: new Audio("sounds/buy.mp3"),
        sell: new Audio("sounds/sell.mp3"),
        system: new Audio("sounds/system.mp3"),
        levelup: new Audio("sounds/levelup.mp3"),
        close: new Audio("sounds/close.mp3"),
        activated: new Audio("sounds/activated.mp3")
    },
    playSound(n) {
        const e = this.sounds[n];
        e && (e.currentTime = 0,
        e.play().catch(t => {
            console.log(`Error playing sound: ${t}`)
        }
        ))
    },
    show(n, e="info") {
        const t = document.getElementById("notification")
          , i = t.querySelector(".notification-content");
        i.textContent = n,
        t.className = `notification ${e}`,
        t.classList.remove("slide-in", "slide-out"),
        t.style.display = "block",
        t.classList.add("slide-in"),
        this.playSound(e),
        setTimeout( () => {
            t.classList.remove("slide-in"),
            t.classList.add("slide-out"),
            setTimeout( () => {
                t.style.display = "none",
                t.classList.remove("slide-out")
            }
            , 500)
        }
        , 3e3)
    }
};
window.styles = `
    .notification {
      animation: slideIn 0.5s ease-out;
    }

    .notification.animate {
      animation: shake 0.5s ease-in-out;
    }

    @keyframes slideIn {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(10px); }
      75% { transform: translateX(-10px); }
    }
  `;
function Ye() {
    if (!h)
        return;
    x.collection("players").doc(h.uid).collection("quests").onSnapshot(t => {
        t.docChanges().forEach(i => {
            if (i.type === "added") {
                const o = i.doc.data();
                printToTerminal(`
New quest added:`, "info"),
                printToTerminal(`[${o.title}]`, "quest"),
                printToTerminal(`Progress: ${o.currentCount}/${o.targetCount} ${o.metric}`, "info"),
                printToTerminal(`Description: ${o.description}`, "system"),
                printToTerminal("Commands:", "system"),
                printToTerminal(`  !update ${i.doc.id} normal <amount>  - Add specific amount`, "info"),
                printToTerminal(`  !update ${i.doc.id} normal complete  - Complete instantly`, "info"),
                printToTerminal("---", "system")
            } else if (i.type === "modified") {
                const o = i.doc.data();
                printToTerminal(`
Quest "${o.title}" updated:`, "warning"),
                printToTerminal(`Progress: ${o.currentCount}/${o.targetCount} ${o.metric}`, "info"),
                printToTerminal("---", "system")
            }
        }
        )
    }
    ),
    x.collection("players").doc(h.uid).collection("dailyQuests").onSnapshot(t => {
        t.docChanges().forEach(i => {
            if (i.type === "added") {
                const o = i.doc.data();
                printToTerminal(`
New daily quest added:`, "info"),
                printToTerminal(`[${o.title}]`, "quest"),
                printToTerminal(`Progress: ${o.currentCount}/${o.targetCount} ${o.metric}`, "info"),
                printToTerminal(`Description: ${o.description}`, "system"),
                printToTerminal("Resets daily", "warning"),
                printToTerminal("Commands:", "system"),
                printToTerminal(`  !update ${i.doc.id} daily <amount>  - Add specific amount`, "info"),
                printToTerminal(`  !update ${i.doc.id} daily complete  - Complete instantly`, "info"),
                printToTerminal(`  <button class="window-button danger" onclick="deleteQuest('${i.doc.id}', 'daily')">
            Delete Quest
          </button>`, "info"),
                printToTerminal("---", "system")
            } else if (i.type === "modified") {
                const o = i.doc.data();
                printToTerminal(`
Daily quest "${o.title}" updated:`, "warning"),
                printToTerminal(`Progress: ${o.currentCount}/${o.targetCount} ${o.metric}`, "info"),
                printToTerminal("---", "system")
            }
        }
        )
    }
    )
}
window.updateQuestUI = function(e, t, i) {
    const o = document.getElementById(i === "daily" ? "dailyQuestsList" : "activeQuestsList");
    let s = document.getElementById(`quest-${t}`);
    s || (s = document.createElement("div"),
    s.id = `quest-${t}`,
    s.className = "window-item",
    o.appendChild(s));
    const a = se() - new Date
      , d = e.completed && e.lastCompletion && X(e.lastCompletion);
    s.innerHTML = `
    <div class="window-item-title">
      ${e.title}
      ${d ? '<span class="completion-badge">✓</span>' : ""}
    </div>
    <div class="window-item-description">
      Progress: 
      <input type="number" 
             value="${d ? e.targetCount : e.currentCount}" 
             min="0" 
             max="${e.targetCount}" 
             onchange="updateQuestCount('${t}', '${i}', this.value)"
             style="width: 60px; background: transparent; color: var(--text-color); border: 1px solid var(--system-blue);"
             ${d ? "disabled" : ""}>
      /${e.targetCount} ${e.metric}
    </div>
    <div class="window-item-description">
      <strong>Description:</strong><br>
      ${e.description}
    </div>    <div class="window-item-description">
      ${i === "daily" ? d ? "Completed Today" : `Time remaining: ${J(a)}` : ""}
    </div>
    <div class="window-item-progress">
      <div class="window-item-progress-bar" style="width: ${d ? 100 : e.currentCount / e.targetCount * 100}%"></div>
    </div>
    `
}
;
window.removeQuestFromUI = function(e, t) {
    const i = document.getElementById(`quest-${e}`);
    i && i.remove()
}
;
const xt = "PlayerSystemDB"
  , Tt = 1;
window.PlayerDB = class {
    static async init() {
        return new Promise( (e, t) => {
            const i = indexedDB.open(xt, Tt);
            i.onerror = () => t(i.error),
            i.onsuccess = () => e(i.result),
            i.onupgradeneeded = o => {
                const s = o.target.result;
                s.objectStoreNames.contains("playerData") || s.createObjectStore("playerData", {
                    keyPath: "uid"
                }),
                s.objectStoreNames.contains("quests") || s.createObjectStore("quests", {
                    keyPath: "id"
                })
            }
        }
        )
    }
    static async savePlayer(e) {
        const t = await this.init();
        return new Promise( (i, o) => {
            const a = t.transaction(["playerData"], "readwrite").objectStore("playerData").put(e);
            a.onsuccess = () => i(),
            a.onerror = () => o(a.error)
        }
        )
    }
    static async getPlayer(e) {
        const t = await this.init();
        return new Promise( (i, o) => {
            const a = t.transaction(["playerData"], "readonly").objectStore("playerData").get(e);
            a.onsuccess = () => i(a.result),
            a.onerror = () => o(a.error)
        }
        )
    }
}
;
async function Me() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    b.showWindow("leaderboardWindow")
}
window.checkAchievements = async function() {
    var e;
    if (k)
        try {
            const t = x.collection("players").doc(h.uid)
              , i = (await t.get()).data();
            i.achievements ? i.unlockedAchievements || (await t.update({
                unlockedAchievements: []
            }),
            i.unlockedAchievements = []) : (await t.update({
                achievements: {},
                unlockedAchievements: []
            }),
            i.achievements = {},
            i.unlockedAchievements = []);
            let o = !1;
            for (const [s,r] of Object.entries(He)) {
                i.achievements[r.id] || (i.achievements[r.id] = {
                    currentRank: 0
                });
                const a = i.achievements[r.id]
                  , d = a.currentRank + 1;
                if (d > r.ranks.length)
                    continue;
                const l = r.ranks[d - 1];
                let c = !1;
                switch (r.type) {
                case "level":
                    c = i.level >= l.requirement;
                    break;
                case "quests_completed":
                    c = i.questsCompleted >= l.requirement;
                    break;
                case "daily_streak":
                    c = i.streak >= l.requirement;
                    break;
                case "water_streak":
                    c = ((e = i.waterIntake) == null ? void 0 : e.streakDays) >= l.requirement;
                    break;
                case "total_gold":
                    c = i.gold >= l.requirement;
                    break;
                case "rank":
                    c = ke(i.rank, l.requirement);
                    break
                }
                if (c)
                    try {
                        const p = {
                            [`achievements.${r.id}.currentRank`]: d,
                            exp: firebase.firestore.FieldValue.increment(l.reward.exp),
                            gold: firebase.firestore.FieldValue.increment(l.reward.gold)
                        };
                        a.currentRank === 0 && (p.unlockedAchievements = firebase.firestore.FieldValue.arrayUnion(r.id)),
                        await t.update(p),
                        u.exp += l.reward.exp,
                        u.gold += l.reward.gold,
                        u.achievements || (u.achievements = {}),
                        u.achievements[r.id] || (u.achievements[r.id] = {
                            currentRank: 0
                        }),
                        u.achievements[r.id].currentRank = d,
                        a.currentRank === 0 && !i.unlockedAchievements.includes(r.id) && (i.unlockedAchievements.push(r.id),
                        u.unlockedAchievements = i.unlockedAchievements);
                        const f = d === r.ranks.length ? "MAX" : d;
                        showNotification(`Achievement Ranked Up: ${r.name} Rank ${f}! ${r.icon}`),
                        printToTerminal(`🏆 Achievement Ranked Up: ${r.name} (Rank ${f})`, "success"),
                        printToTerminal(`${r.description}`, "info"),
                        printToTerminal(`Rewards: ${l.reward.exp} EXP, ${l.reward.gold} gold`, "reward"),
                        o = !0
                    } catch (p) {
                        console.error("Error updating achievement:", p),
                        printToTerminal(`Error updating achievement ${r.name}: ${p.message}`, "error")
                    }
            }
            o && (await j(t, u.exp),
            updateStatusBar(),
            await et(t, u),
            Q.playVoiceLine("ACHIEVEMENT"))
        } catch (t) {
            console.error("Check achievements error:", t),
            printToTerminal(`Error checking achievements: ${t.message}`, "error")
        }
}
;
window.getExpNeededForLevel = function(e) {
    let s;
    return e <= 20 ? s = Math.floor(100 + (e - 1) * 50) : s = Math.floor(100 * Math.pow(1.12, e - 20) + e * 100),
    k && h && kt(e, s),
    s
}
;
async function kt(n, e) {
    try {
        u.level === n && u.expNeeded !== e && (u.expNeeded = e,
        await x.collection("players").doc(h.uid).update({
            expNeeded: e
        }),
        console.log(`Updated expNeeded for level ${n}: ${e}`))
    } catch (t) {
        console.error("Error updating expNeeded in Firestore:", t),
        printToTerminal("Error updating expNeeded: " + t.message, "error")
    }
}
async function j(n, e) {
    let t = e
      , i = 0
      , o = u.level;
    const s = o;
    for (; t >= (u.expNeeded || getExpNeededForLevel(o)); )
        t -= u.expNeeded || getExpNeededForLevel(o),
        i++,
        o++,
        u.expNeeded = getExpNeededForLevel(o);
    i > 0 && (notificationSystem.playSound("levelup"),
    Q.playVoiceLine("LEVEL_UP"),
    u.level += i,
    u.exp = t,
    u.expNeeded = getExpNeededForLevel(u.level),
    await n.update({
        level: u.level,
        exp: t,
        expNeeded: u.expNeeded
    }),
    printToTerminal(`LEVEL UP! You are now level ${u.level}!`, "success"),
    showNotification(`Leveled up to level ${u.level}!`),
    Vt(s, u.level),
    await updateStatusBar(),
    await et(n, u))
}
async function Ve(n, e) {
    var t, i, o, s, r;
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        const a = x.collection("players").doc(h.uid)
          , d = a.collection("activeBattles").doc(n)
          , l = await d.get();
        if (!l.exists) {
            printToTerminal("Boss battle not found.", "error");
            return
        }
        const c = l.data();
        if (e < c.targetCount) {
            printToTerminal(`Progress insufficient. Current: ${e}/${c.targetCount}`, "error");
            return
        }
        let p;
        if (c.bossData)
            p = c.bossData;
        else if (p = G[n.toUpperCase()],
        !p) {
            const T = await x.collection("bosses").doc(n).get();
            if (!T.exists) {
                printToTerminal("Boss not found in database or BOSSES object.", "error");
                return
            }
            p = T.data()
        }
        const m = (await a.get()).data()
          , g = ((t = m == null ? void 0 : m.defeatedBosses) == null ? void 0 : t[n]) || 0
          , y = p.rewards.exp + g * (((o = (i = p.scaling) == null ? void 0 : i.rewards) == null ? void 0 : o.exp) || 0)
          , w = p.rewards.gold + g * (((r = (s = p.scaling) == null ? void 0 : s.rewards) == null ? void 0 : r.gold) || 0);
        printToTerminal(`
🏆 BOSS DEFEATED! 🏆`, "success"),
        printToTerminal(`You have defeated ${p.name}!`, "success"),
        printToTerminal(`
Rewards received:`, "info"),
        printToTerminal(`+ ${y} XP`, "reward"),
        printToTerminal(`+ ${w} Gold`, "reward"),
        p.rewards.title && printToTerminal(`+ Title: ${p.rewards.title}`, "reward"),
        await x.runTransaction(async T => {
            var B, M;
            const E = await T.get(a);
            if (!E.exists)
                return;
            const C = E.data()
              , L = C.defeatedBosses || {};
            L[n] = (L[n] || 0) + 1;
            const S = ((B = C.stats) == null ? void 0 : B.exp) || C.exp || 0
              , R = ((M = C.stats) == null ? void 0 : M.gold) || C.gold || 0
              , N = S + y
              , I = R + w;
            let q = {};
            p.rewards.title && (q = {
                "profile.title": p.rewards.title,
                "profile.titleColor": p.rewards.titleColor || null
            });
            const D = C.stats ? {
                "stats.exp": N,
                "stats.gold": I
            } : {
                exp: N,
                gold: I
            };
            T.update(a, {
                ...D,
                defeatedBosses: L,
                ...q
            }),
            T.delete(d),
            u.stats ? (u.stats.exp = N,
            u.stats.gold = I) : (u.exp = N,
            u.gold = I),
            p.rewards.title && (u.profile || (u.profile = {}),
            u.profile.title = p.rewards.title,
            u.profile.titleColor = p.rewards.titleColor || null)
        }
        ),
        u.stats ? await j(a, u.stats.exp) : await j(a, u.exp),
        Q.playVoiceLine("VICTORY"),
        updateStatusBar(),
        b.updateWindowContent("BattleWindow"),
        b.updateWindowContent("profileWindow"),
        await x.collection("notifications").add({
            userId: h.uid,
            type: "victory",
            message: `You defeated ${p.name} and earned ${y} XP and ${w} Gold!`,
            timestamp: firebase.firestore.Timestamp.now(),
            read: !1
        });
        const v = await b.getUnreadNotificationsCount();
        b.updateNotificationBadge(v),
        await b.updateBattleWindow()
    } catch (a) {
        console.error("Error completing boss battle:", a),
        printToTerminal("Error completing boss battle: " + a.message, "error")
    }
}
window.checkLevelUp = j;
window.completeBossBattle = Ve;
window.completeQuest = async function(e, t="normal") {
    if (!k || !h)
        return console.error("User not authenticated"),
        {
            success: !1,
            error: "You must be authenticated to complete quests"
        };
    try {
        const i = x.collection("players").doc(h.uid)
          , o = t === "daily" ? "dailyQuests" : "quests";
        let s = i.collection(o).doc(e)
          , r = await s.get();
        if (!r.exists) {
            console.log(`Quest not found by ID, searching by title: ${e}`);
            const p = await i.collection(o).where("title", "==", e).limit(1).get();
            if (p.empty)
                return console.error(`No ${t} quest found with ID or title: ${e}`),
                {
                    success: !1,
                    error: "Quest not found"
                };
            r = p.docs[0],
            s = r.ref
        }
        const a = r.data();
        if (console.log("Found quest to complete:", a),
        t === "daily" && a.completed && a.lastCompletion) {
            const p = a.lastCompletion.toDate ? a.lastCompletion.toDate() : new Date(a.lastCompletion)
              , f = new Date;
            if (p.getDate() === f.getDate() && p.getMonth() === f.getMonth() && p.getFullYear() === f.getFullYear())
                return console.log("Daily quest already completed today"),
                {
                    success: !1,
                    error: "This daily quest has already been completed today. It will reset tomorrow."
                }
        }
        if (t === "normal" && a.completed)
            return console.log("Normal quest already completed"),
            {
                success: !1,
                error: "This quest has already been completed."
            };
        const d = Math.floor(a.targetCount * 10)
          , l = Math.floor(a.targetCount * 5)
          , c = await x.runTransaction(async p => {
            var g;
            const m = (await p.get(i)).data();
            if (t === "daily") {
                p.update(s, {
                    currentCount: a.targetCount,
                    completed: !0,
                    lastCompletion: firebase.firestore.FieldValue.serverTimestamp()
                });
                const y = (g = m.lastDailyCompletion) != null && g.toDate ? m.lastDailyCompletion.toDate() : m.lastDailyCompletion ? new Date(m.lastDailyCompletion) : null
                  , w = new Date;
                w.setHours(0, 0, 0, 0),
                (!y || y < w) && p.update(i, {
                    streak: firebase.firestore.FieldValue.increment(1),
                    lastDailyCompletion: firebase.firestore.FieldValue.serverTimestamp()
                })
            } else
                p.delete(s);
            return p.update(i, {
                exp: firebase.firestore.FieldValue.increment(d),
                gold: firebase.firestore.FieldValue.increment(l),
                questsCompleted: firebase.firestore.FieldValue.increment(1)
            }),
            {
                expGained: d,
                goldGained: l,
                questTitle: a.title
            }
        }
        );
        return u.exp += d,
        u.gold += l,
        u.questsCompleted += 1,
        t === "daily" && (u.streak += 1),
        updateStatusBar(),
        await j(x.collection("players").doc(h.uid), u.exp),
        await checkAchievements(),
        t === "daily" ? b.updateWindowContent("dailyQuestsWindow") : (b.updateWindowContent("questsWindow"),
        removeQuestFromUI(r.id, t)),
        console.log(`Quest "${a.title}" completed successfully. Rewards: ${d} XP, ${l} gold`),
        {
            success: !0,
            ...c
        }
    } catch (i) {
        return console.error("Error completing quest:", i),
        {
            success: !1,
            error: i.message
        }
    }
}
;
window.updateQuestProgress = async function(e, t, i) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        const o = x.collection("players").doc(h.uid)
          , s = o.collection(t === "daily" ? "dailyQuests" : "quests").doc(e)
          , r = (await s.get()).data();
        if (!r) {
            printToTerminal("Quest not found.", "error");
            return
        }
        if (r.completed && r.lastCompletion && X(r.lastCompletion)) {
            printToTerminal("Quest already completed today.", "warning");
            return
        }
        let a = r.currentCount;
        if (i === "complete")
            a = r.targetCount;
        else {
            const d = parseInt(i);
            if (isNaN(d)) {
                printToTerminal("Invalid amount. Please enter a number.", "error");
                return
            }
            a = Math.min(r.targetCount, r.currentCount + d)
        }
        if (await s.update({
            currentCount: a,
            completed: a >= r.targetCount,
            lastCompletion: a >= r.targetCount ? firebase.firestore.FieldValue.serverTimestamp() : null
        }),
        a >= r.targetCount && (!r.completed || !X(r.lastCompletion))) {
            const d = t === "daily" ? 50 : 25
              , l = t === "daily" ? 25 : 15;
            await o.update({
                questsCompleted: firebase.firestore.FieldValue.increment(1),
                exp: firebase.firestore.FieldValue.increment(d),
                gold: firebase.firestore.FieldValue.increment(l)
            }),
            printToTerminal(`Quest completed! Earned ${d} XP and ${l} gold.`, "success"),
            showNotification("Quest completed!", "success"),
            Q.playVoiceLine("QUEST_COMPLETE")
        } else
            printToTerminal(`Quest progress updated: ${a}/${r.targetCount}`, "info");
        updateQuestUI(r, e, t)
    } catch (o) {
        console.error("Error updating quest progress:", o),
        printToTerminal("Error updating quest progress: " + o.message, "error")
    }
}
;
function X(n) {
    if (!n)
        return !1;
    const e = n instanceof Date ? n : n.toDate()
      , t = new Date;
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
}
window.wasCompletedToday = X;
window.sellShard = async function(e, t) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        const i = x.collection("players").doc(h.uid)
          , r = (await i.get()).data().inventory.filter(c => c.id === e);
        if (r.length === 0) {
            printToTerminal("Invalid shard to sell.", "error");
            return
        }
        let a = Math.min(t, r.length);
        const d = r[0].goldValue * a
          , l = r.slice(0, a);
        await i.update({
            inventory: firebase.firestore.FieldValue.arrayRemove(...l),
            gold: firebase.firestore.FieldValue.increment(d)
        }),
        u.inventory = u.inventory.filter(c => c.id !== e || --a > 0),
        u.gold += d,
        printToTerminal(`Sold ${a} ${r[0].name}${a > 1 ? "s" : ""} for ${d} gold!`, "success"),
        showNotification(`Sold ${a} ${r[0].name}${a > 1 ? "s" : ""} for ${d} gold!`),
        b.updateWindowContent("inventoryWindow"),
        updateStatusBar()
    } catch (i) {
        printToTerminal("Error selling shard: " + i.message, "error"),
        console.error("Sell shard error:", i)
    }
}
;
window.useShard = async function(e) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    const t = x.collection("players").doc(h.uid)
      , i = (await t.get()).data();
    if (!i.inventory.find(s => s.id === e)) {
        printToTerminal("Shard not found in inventory.", "error");
        return
    }
    try {
        const s = i.inventory.filter(r => r.id !== e);
        await t.update({
            inventory: s
        }),
        u.inventory = s,
        printToTerminal("Shard used successfully!", "success"),
        b.updateWindowContent("inventoryWindow")
    } catch (s) {
        printToTerminal("Use shard error: " + s, "error"),
        console.error("Use shard error:", s)
    }
}
;
window.attemptShardDrop = function() {
    if (Math.random() < 1) {
        const i = {
            id: "crystal_shard",
            name: "Crystal Shard",
            description: "Use to gain XP and sell for gold",
            type: "shard"
        }
          , o = 200
          , s = 200
          , r = Math.floor(Math.pow(Math.random(), 2) * o) + 1
          , a = Math.floor(Math.pow(Math.random(), 2) * s) + 1;
        i.xpValue = r,
        i.goldValue = a,
        x.collection("players").doc(h.uid).update({
            inventory: firebase.firestore.FieldValue.arrayUnion(i)
        }).then( () => {
            u.inventory || (u.inventory = []),
            u.inventory.push(i),
            showNotification(`You received: ${i.name} - ${i.description} (${i.xpValue} XP, ${i.goldValue} gold)`),
            b.updateWindowContent("inventoryWindow")
        }
        ).catch(l => {
            console.error("Error adding shard to inventory:", l),
            showNotification("Error adding shard to inventory. Please try again.")
        }
        )
    } else
        showNotification("No shards dropped this time.")
}
;
function se() {
    const n = new Date
      , e = new Date(n);
    return e.setHours(23, 58, 0, 0),
    e
}
function J(n) {
    const e = Math.floor(n / 36e5)
      , t = Math.floor(n % (1e3 * 60 * 60) / (1e3 * 60))
      , i = Math.floor(n % (1e3 * 60) / 1e3);
    return `${e.toString().padStart(2, "0")}:${t.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`
}
let te = !1;
async function je(n) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    const e = "Reset the dungeon"
      , t = n.join(" ");
    if (!te) {
        printToTerminal("⚠️ WARNING: This will reset your progress!", "warning"),
        printToTerminal("Resetting: Level, EXP, Gold, Rank, Achievements, Streak, Title, Class, Bio, Water, Inventory, Items, Bosses, Quests, Notifications.", "warning"),
        printToTerminal(`
To confirm, type "${e}"`, "warning"),
        te = !0;
        return
    }
    if (t === e)
        try {
            const i = x.collection("players").doc(h.uid)
              , o = await x.collection("notifications").where("userId", "==", h.uid).get()
              , s = x.batch();
            o.forEach(r => {
                s.delete(r.ref)
            }
            ),
            await s.commit(),
            await i.update({
                inventory: [],
                profile: {
                    ...u.profile,
                    title: "Novice",
                    class: "Hunter",
                    bio: ""
                },
                level: 1,
                exp: 0,
                gold: 0,
                rank: "E",
                achievements: [],
                streak: 0,
                waterIntake: 0,
                questsCompleted: 0
            }),
            u.level = 1,
            u.exp = 0,
            u.gold = 0,
            u.rank = "E",
            u.achievements = [],
            u.streak = 0,
            u.questsCompleted = 0,
            u.profile.title = "Novice",
            u.profile.class = "Hunter",
            u.profile.bio = "",
            updateStatusBar(),
            b.updateWindowContent("achievementsWindow"),
            b.updateWindowContent("profileWindow"),
            b.updateWindowContent("questsWindow"),
            b.updateWindowContent("dailyQuestsWindow"),
            b.updateWindowContent("notificationsWindow"),
            b.updateNotificationBadge(0),
            printToTerminal("Progress has been reset!", "success"),
            printToTerminal("Level reset to 1", "info"),
            printToTerminal("Experience reset to 0", "info"),
            printToTerminal("Gold reset to 0", "info"),
            printToTerminal("Rank reset to E", "info"),
            printToTerminal("Title reset to Novice", "info"),
            printToTerminal("Class reset to Hunter", "info"),
            printToTerminal("Bio cleared", "info"),
            printToTerminal("Achievements progress reset", "info"),
            printToTerminal("Completed quests count reset to 0", "info"),
            printToTerminal("All notifications cleared", "info"),
            showNotification("Progress has been reset!")
        } catch (i) {
            printToTerminal("Error resetting progress: " + i.message, "error"),
            console.error("Reset error:", i)
        }
    else
        printToTerminal(`Please type "${e}" exactly to confirm reset`, "warning");
    te = !1
}
async function we(n) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        const [e,t] = n;
        if (!e) {
            printToTerminal("Usage: !progress <bossId> [amount]", "error");
            return
        }
        if (!G || typeof G != "object") {
            printToTerminal("Boss data is not properly initialized.", "error"),
            console.error("BOSSES is invalid:", G);
            return
        }
        const i = x.collection("players").doc(h.uid)
          , o = G[e.toUpperCase()];
        if (!o) {
            printToTerminal(`Invalid boss ID: ${e}`, "error");
            return
        }
        const s = i.collection("activeBattles").doc(e)
          , r = await s.get();
        if (!r.exists) {
            printToTerminal("No active battle found for this boss.", "error");
            return
        }
        let a = r.data()
          , d = a.currentCount || 0;
        const l = a.targetCount || o.targetCount || 100;
        d += parseInt(t, 10) || 1,
        await s.update({
            currentCount: d
        }),
        d >= l ? (await Ve(e, d),
        updateStatusBar()) : printToTerminal(`Battle progress updated: ${d}/${l}`, "info")
    } catch (e) {
        printToTerminal(`Error updating battle progress: ${e.message}`, "error"),
        console.error("Battle progress error:", e)
    }
}
function Xe(n) {
    const e = Math.floor(n / 864e5)
      , t = Math.floor(n % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
    return e > 0 ? `${e} day${e > 1 ? "s" : ""}` : `${t} hour${t > 1 ? "s" : ""}`
}
async function Be() {
    try {
        const n = await fetch("https://stoic-quotes.com/api/quote");
        if (!n.ok)
            throw new Error("Failed to fetch quote");
        const e = await n.json();
        printToTerminal(`
=== DAILY MOTIVATION ===`, "system"),
        printToTerminal(`"${e.text}"`, "quest"),
        printToTerminal(`- ${e.author}`, "info")
    } catch (n) {
        printToTerminal("Error fetching quote: " + n.message, "error"),
        printToTerminal('"The obstacle is the way."', "quest"),
        printToTerminal("- Marcus Aurelius", "info")
    }
}
window.setPlayerName = async function(e) {
    var o;
    if (!h) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    const t = (o = u.profile) == null ? void 0 : o.name
      , i = e[0];
    if (t && t !== i) {
        const s = x.collection("players").doc(h.uid)
          , r = await s.get();
        if (!r.exists) {
            printToTerminal("Player data not found.", "error");
            return
        }
        if (!(r.data().inventory || []).find(c => c.id === "name_change_token" && (c.quantity || 1) > 0)) {
            printToTerminal("You need a Name Change Token to change your name.", "error"),
            printToTerminal("You can purchase one from the shop.", "info");
            return
        }
        try {
            await x.runTransaction(async c => {
                const f = (await c.get(s)).data()
                  , g = (f.inventory || []).map(y => y.id === "name_change_token" ? {
                    ...y,
                    quantity: (y.quantity || 1) - 1,
                    lastUsed: firebase.firestore.FieldValue.serverTimestamp()
                } : y).filter(y => y.id !== "name_change_token" || (y.quantity || 1) > 0);
                f.profile ? c.update(s, {
                    "profile.name": i,
                    inventory: g
                }) : (f.profile = {
                    name: i
                },
                c.update(s, {
                    profile: {
                        name: i
                    },
                    inventory: g
                }))
            }
            ),
            u.profile ? u.profile.name = i : u.profile = {
                name: i
            },
            printToTerminal(`Name changed to "${i}". You used 1 Name Change Token.`, "success"),
            showNotification(`Name changed to "${i}"`),
            updateStatusBar(),
            updateTerminalPrompt(),
            b.updateProfileWindow(),
            b.updateInventoryWindow()
        } catch (c) {
            console.error("Error changing name:", c),
            printToTerminal("Error changing name: " + c.message, "error")
        }
    } else
        try {
            const s = x.collection("players").doc(h.uid);
            u.profile ? (await s.update({
                "profile.name": i
            }),
            u.profile.name = i) : (await s.update({
                profile: {
                    name: i
                }
            }),
            u.profile = {
                name: i
            }),
            printToTerminal(`Name set to "${i}".`, "success"),
            updateStatusBar(),
            updateTerminalPrompt(),
            b.updateProfileWindow()
        } catch (s) {
            console.error("Error setting name:", s),
            printToTerminal("Error setting name: " + s.message, "error")
        }
}
;
window.setPlayerTitle = async function(e) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    if (!e || e.length === 0)
        return;
    const t = e.join(" ");
    if (t.length > 50) {
        printToTerminal("Title must be 50 characters or less.", "error");
        return
    }
    try {
        await x.collection("players").doc(h.uid).update({
            "profile.title": t
        }),
        u.profile.title = t,
        printToTerminal(`Title updated to: ${t}`, "success"),
        showNotification("Title updated successfully!")
    } catch (i) {
        printToTerminal("Error updating title: " + i.message, "error")
    }
}
;
window.setPlayerBio = async function(e) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    if (!e || e.length === 0) {
        printToTerminal("Usage: !setbio <text>", "warning"),
        printToTerminal("Example: !setbio A hunter who never gives up", "info");
        return
    }
    const t = e.join(" ");
    if (t.length > 200) {
        printToTerminal("Bio must be 200 characters or less.", "error");
        return
    }
    try {
        await x.collection("players").doc(h.uid).update({
            "profile.bio": t
        }),
        u.profile.bio = t,
        printToTerminal("Bio updated successfully!", "success"),
        showNotification("Bio updated!")
    } catch (i) {
        printToTerminal("Error updating bio: " + i.message, "error")
    }
}
;
window.setPlayerClass = async function(e) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    if (!e || e.length === 0) {
        printToTerminal("Usage: !setclass <class>", "warning"),
        printToTerminal("Available classes:", "info"),
        printToTerminal("- Hunter", "info"),
        printToTerminal("- Healer", "info"),
        printToTerminal("- Tank", "info"),
        printToTerminal("- Assassin", "info"),
        printToTerminal("Example: !setclass Hunter", "info");
        return
    }
    const t = e.join(" ")
      , i = ["Hunter", "Healer", "Tank", "Assassin", "Mage", "Warrior", "Rogue", "Paladin", "Summoner", "Berserker", "Necromancer", "Monk", "Druid", "Gunslinger", "Samurai", "Engineer", "Elementalist", "Bard", "Shadow Knight", "Sentinel"];
    if (!i.includes(t)) {
        printToTerminal("Invalid class. Available classes:", "error"),
        i.forEach(o => printToTerminal(`- ${o}`, "info"));
        return
    }
    try {
        await x.collection("players").doc(h.uid).update({
            "profile.class": t
        }),
        u.profile.class = t,
        printToTerminal(`Class updated to: ${t}`, "success"),
        showNotification("Class updated successfully!")
    } catch (o) {
        printToTerminal("Error updating class: " + o.message, "error")
    }
}
;
window.setProfileTitle = async function(e) {
    if (!h) {
        showNotification("You must be logged in to change your title", "error");
        return
    }
    try {
        const t = x.collection("players").doc(h.uid)
          , i = await t.get();
        if (!i.exists) {
            showNotification("Player data not found", "error");
            return
        }
        const o = i.data();
        if (!o.unlockedTitles || !o.unlockedTitles.includes(e)) {
            showNotification("You don't own this title", "error");
            return
        }
        if (await t.update({
            "profile.title": e
        }),
        o.unlockedTitleColors) {
            const s = o.unlockedTitleColors.find(r => r.title === e);
            s && s.color ? (await t.update({
                "profile.titleColor": s.color
            }),
            u.profile && (u.profile.titleColor = s.color)) : (await t.update({
                "profile.titleColor": null
            }),
            u.profile && (u.profile.titleColor = null))
        }
        u.profile || (u.profile = {}),
        u.profile.title = e,
        showNotification(`Title changed to "${e}"`, "success"),
        updateStatusBar(),
        updateTerminalPrompt(),
        b.updateProfileWindow()
    } catch (t) {
        console.error("Error setting title:", t),
        showNotification("Error setting title: " + t.message, "error")
    }
}
;
const b = {
    windows: {
        profileWindow: document.getElementById("profileWindow"),
        questsWindow: document.getElementById("questsWindow"),
        dailyQuestsWindow: document.getElementById("dailyQuestsWindow"),
        achievementsWindow: document.getElementById("achievementsWindow"),
        shopWindow: document.getElementById("shopWindow"),
        inventoryWindow: document.getElementById("inventoryWindow"),
        rankProgressWindow: document.getElementById("rankProgressWindow"),
        bossBattlesWindow: document.getElementById("bossBattlesWindow"),
        leaderboardWindow: document.getElementById("leaderboardWindow"),
        notesWindow: document.getElementById("notesWindow"),
        notificationsWindow: document.getElementById("notificationsWindow")
    },
    taskbarItems: [{
        id: "profileWindow",
        icon: "fa-user",
        title: "Profile"
    }, {
        id: "questsWindow",
        icon: "fa-tasks",
        title: "Quests"
    }, {
        id: "dailyQuestsWindow",
        icon: "fa-calendar-check",
        title: "Daily Quests"
    }, {
        id: "achievementsWindow",
        icon: "fa-trophy",
        title: "Achievements"
    }, {
        id: "shopWindow",
        icon: "fa-store",
        title: "Shop"
    }, {
        id: "inventoryWindow",
        icon: "fa-box",
        title: "Inventory"
    }, {
        id: "rankProgressWindow",
        icon: "fa-star",
        title: "Rank Progress"
    }, {
        id: "bossBattlesWindow",
        icon: "fa-dragon",
        title: "Boss Battles"
    }, {
        id: "leaderboardWindow",
        icon: "fa-crown",
        title: "Leaderboard"
    }, {
        id: "notesWindow",
        icon: "fa-sticky-note",
        title: "Notes"
    }, {
        id: "notificationsWindow",
        icon: "fa-bell",
        title: "Notifications"
    }],
    zIndex: 1e3,
    init() {
        this.windows = {
            profileWindow: document.getElementById("profileWindow"),
            questsWindow: document.getElementById("questsWindow"),
            dailyQuestsWindow: document.getElementById("dailyQuestsWindow"),
            achievementsWindow: document.getElementById("achievementsWindow"),
            shopWindow: document.getElementById("shopWindow"),
            inventoryWindow: document.getElementById("inventoryWindow"),
            rankProgressWindow: document.getElementById("rankProgressWindow"),
            bossBattlesWindow: document.getElementById("bossBattlesWindow"),
            leaderboardWindow: document.getElementById("leaderboardWindow"),
            notificationsWindow: document.getElementById("notificationsWindow")
        };
        const n = document.createElement("div");
        n.className = "window-taskbar",
        document.body.appendChild(n),
        document.querySelectorAll(".window").forEach(t => {
            const i = t.id;
            this.windows[i] = t,
            !t.style.top && !t.style.left && (t.style.top = "10px",
            t.style.left = "10px");
            const o = t.querySelector(".window-header")
              , s = t.querySelector(".window-close");
            if (s)
                s.addEventListener("click", () => this.closeWindow(i));
            else {
                const r = document.createElement("button");
                r.className = "window-close",
                r.innerHTML = "×",
                r.addEventListener("click", () => this.closeWindow(i)),
                o.appendChild(r)
            }
            this.makeDraggable(t)
        }
        ),
        [{
            id: "profileWindow",
            icon: "fa-user",
            title: "Profile"
        }, {
            id: "questsWindow",
            icon: "fa-tasks",
            title: "Quests"
        }, {
            id: "dailyQuestsWindow",
            icon: "fa-calendar-check",
            title: "Daily Quests"
        }, {
            id: "achievementsWindow",
            icon: "fa-star",
            title: "Achievements"
        }, {
            id: "shopWindow",
            icon: "fa-store",
            title: "Shop"
        }, {
            id: "inventoryWindow",
            icon: "fa-box",
            title: "Inventory"
        }, {
            id: "rankProgressWindow",
            icon: "fa-medal",
            title: "Rank Progress"
        }, {
            id: "bossBattlesWindow",
            icon: "fa-dragon",
            title: "Boss Battles"
        }, {
            id: "leaderboardWindow",
            icon: "fa-trophy",
            title: "Leaderboard"
        }, {
            id: "notificationsWindow",
            icon: "fa-bell",
            title: "Notifications"
        }, {
            id: "notesWindow",
            icon: "fa-sticky-note",
            title: "Notes"
        }, {
            id: "fitWindow",
            icon: "fa-heartbeat",
            title: "Google Fit"
        }].forEach(t => {
            const i = document.createElement("div");
            i.className = "taskbar-item",
            i.title = t.title,
            i.innerHTML = `<i class="fas ${t.icon}"></i>`,
            i.addEventListener("click", () => this.toggleWindow(t.id)),
            n.appendChild(i),
            n.appendChild(toggleTerminal)
        }
        ),
        document.addEventListener("mousedown", t => {
            const i = t.target.closest(".window");
            i && this.bringToFront(i.id)
        }
        )
    },
    makeDraggable(n) {
        const e = n.querySelector(".window-header");
        let t = !1, i, o, s, r, a = 0, d = 0;
        e.addEventListener("mousedown", l => {
            l.target.closest(".window-close") || (t = !0,
            s = l.clientX - a,
            r = l.clientY - d,
            n.style.cursor = "grabbing")
        }
        ),
        document.addEventListener("mousemove", l => {
            t && (l.preventDefault(),
            i = l.clientX - s,
            o = l.clientY - r,
            a = i,
            d = o,
            n.style.transform = `translate(${i}px, ${o}px)`)
        }
        ),
        document.addEventListener("mouseup", () => {
            if (!t)
                return;
            t = !1,
            n.style.cursor = "default";
            const l = n.getBoundingClientRect();
            n.style.left = l.left + "px",
            n.style.top = l.top + "px",
            n.style.transform = "",
            a = 0,
            d = 0
        }
        )
    },
    showWindow(n) {
        const e = this.windows[n];
        e && (notificationSystem.playSound("system"),
        setTimeout( () => {
            e.classList.add("show"),
            this.bringToFront(n),
            this.updateWindowContent(n);
            const t = this.getTaskbarItem(n);
            t && (document.querySelectorAll(".taskbar-item").forEach(i => {
                i.classList.remove("active")
            }
            ),
            t.classList.add("active")),
            (n === "dailyQuestsWindow" || n === "bossBattlesWindow") && !_.isInitialized && he()
        }
        , 250))
    },
    toggleWindow(n) {
        const e = this.windows[n];
        e && e.classList.contains("show"),
        e && (e.classList.contains("show") ? this.closeWindow(n) : n === "rankProgressWindow" ? le() : this.showWindow(n))
    },
    closeWindow(n) {
        const e = this.windows[n];
        e && (notificationSystem.playSound("close"),
        setTimeout( () => {
            var i, o;
            e.classList.remove("show");
            const t = this.getTaskbarItem(n);
            if (t && t.classList.remove("active"),
            n === "dailyQuestsWindow" || n === "bossBattlesWindow") {
                const s = (i = this.windows.dailyQuestsWindow) == null ? void 0 : i.classList.contains("show")
                  , r = (o = this.windows.bossBattlesWindow) == null ? void 0 : o.classList.contains("show");
                !s && !r && _.stopAllTimers()
            }
        }
        , 200))
    },
    bringToFront(n) {
        const e = this.windows[n];
        e && (this.zIndex += 1,
        e.style.zIndex = this.zIndex)
    },
    getTaskbarItem(n) {
        const e = this.windows[n].querySelector(".window-title").textContent;
        return Array.from(document.querySelectorAll(".taskbar-item")).find(t => n === "profileWindow" && t.title === "Profile" || n === "questsWindow" && t.title === "Quests" ? !0 : t.title === e)
    },
    async updateInventoryWindow() {
        var n;
        if (h)
            try {
                const t = (await x.collection("players").doc(h.uid).get()).data()
                  , i = document.getElementById("inventoryItemsList");
                i.innerHTML = "";
                const o = document.createElement("div");
                if (o.className = "inventory-header",
                o.innerHTML = `
        <div class="inventory-stats">
          <div class="inventory-stat">
            <span class="stat-label">Items:</span>
            <span class="stat-value">${((n = t.inventory) == null ? void 0 : n.length) || 0}</span>
          </div>
          <div class="inventory-stat">
            <span class="stat-label">Gold:</span>
            <span class="stat-value">${t.gold || 0}</span>
          </div>
        </div>
        <div class="inventory-tabs">
          <button class="inventory-tab active" data-tab="all">All</button>
          <button class="inventory-tab" data-tab="consumable">Consumable</button>
          <button class="inventory-tab" data-tab="title">Titles</button>
          <button class="inventory-tab" data-tab="special">Special</button>
        </div>
      `,
                i.appendChild(o),
                !t.inventory || t.inventory.length === 0) {
                    const a = document.createElement("div");
                    a.className = "inventory-empty",
                    a.textContent = "Your inventory is empty",
                    i.appendChild(a);
                    return
                }
                const s = document.createElement("div");
                s.className = "inventory-grid",
                i.appendChild(s);
                const r = {};
                if (t.inventory.forEach(a => {
                    r[a.id] ? a.quantity ? r[a.id].quantity += a.quantity : r[a.id].quantity++ : r[a.id] = {
                        ...a,
                        quantity: a.quantity || 1
                    }
                }
                ),
                Object.values(r).forEach(a => {
                    const d = Object.values(F).find(l => l.id === a.id) || a;
                    if (d) {
                        const l = document.createElement("div");
                        l.className = "inventory-item",
                        l.dataset.category = d.category || "special";
                        const c = a.expiresAt && a.expiresAt <= Date.now();
                        c && l.classList.add("expired-item");
                        const p = `./assets/items/${a.id}.png`
                          , f = `https://via.placeholder.com/64?text=${a.id.substring(0, 2)}`;
                        let m = "";
                        d.effect && d.effect.type === "title" ? m = `<button onclick="setProfileTitle('${d.effect.value}')" class="inventory-button">Set Title</button>` : d.effect && d.effect.type === "name_change" ? m = '<button onclick="showSetNamePrompt()" class="inventory-button">Change Name</button>' : d.consumable || d.duration ? m = `<button onclick="useItem('${d.id}')" class="inventory-button">Use</button>` : d.type === "shard" ? a.quantity > 1 ? m = `
                <button onclick="useShard('${d.id}', ${a.quantity})" class="inventory-button">Use All</button>
                <button onclick="sellShard('${d.id}', ${a.quantity})" class="inventory-button">Sell All</button>
              ` : m = `
                <button onclick="useShard('${d.id}', 1)" class="inventory-button">Use</button>
                <button onclick="sellShard('${d.id}', 1)" class="inventory-button">Sell</button>
              ` : m = `<button onclick="sellItem('${d.id}')" class="inventory-button">Sell</button>`;
                        let g = `
            <div class="tooltip-title">${d.name}</div>
            <div class="tooltip-description">${d.description}</div>
          `;
                        if (d.duration && (g += `<div class="tooltip-duration">Duration: ${be(d.duration)}</div>`),
                        d.effect) {
                            let y = "";
                            d.effect.type === "global_xp" ? y = `${Math.round((d.effect.value - 1) * 100)}% XP boost` : d.effect.type === "title" ? (y = `Grants title: "${d.effect.value}"`,
                            d.effect.color && (y += ` (${d.effect.color})`)) : d.effect.type === "name_change" && (y = "Allows changing your name"),
                            y && (g += `<div class="tooltip-effect">Effect: ${y}</div>`)
                        }
                        d.rankRequired && (g += `<div class="tooltip-rank">Requires Rank: ${d.rankRequired}</div>`),
                        d.type === "shard" && (g += `
              <div class="tooltip-rewards">
                XP: ${a.xpValue || 0} × ${a.quantity}
                Gold: ${a.goldValue || 0} × ${a.quantity}
              </div>
            `),
                        l.innerHTML = `
            <div class="inventory-item-image" data-tooltip="${encodeURIComponent(g)}">
              <img src="${f}" alt="${d.name}" data-real-src="${p}">
              ${a.quantity > 1 ? `<span class="inventory-item-quantity">${a.quantity}</span>` : ""}
            </div>
            <div class="inventory-item-name">${d.name}</div>
            <div class="inventory-item-actions">
              ${m}
            </div>
            ${c ? '<div class="inventory-item-expired">EXPIRED</div>' : ""}
          `,
                        s.appendChild(l)
                    }
                }
                ),
                document.querySelectorAll(".inventory-item-image img").forEach(a => {
                    const d = a.getAttribute("data-real-src");
                    if (d) {
                        const l = new Image;
                        l.onload = function() {
                            a.src = d
                        }
                        ,
                        l.src = d
                    }
                }
                ),
                document.querySelectorAll(".inventory-item-image[data-tooltip]").forEach(a => {
                    a.addEventListener("mouseenter", function(d) {
                        const l = document.createElement("div");
                        l.className = "inventory-tooltip",
                        l.innerHTML = decodeURIComponent(this.getAttribute("data-tooltip")),
                        document.body.appendChild(l);
                        const c = this.getBoundingClientRect();
                        l.style.left = `${c.left + window.scrollX}px`,
                        l.style.top = `${c.bottom + window.scrollY + 5}px`,
                        this.tooltip = l
                    }),
                    a.addEventListener("mouseleave", function() {
                        this.tooltip && (this.tooltip.remove(),
                        this.tooltip = null)
                    })
                }
                ),
                document.querySelectorAll(".inventory-tab").forEach(a => {
                    a.addEventListener("click", function() {
                        document.querySelectorAll(".inventory-tab").forEach(l => l.classList.remove("active")),
                        this.classList.add("active");
                        const d = this.getAttribute("data-tab");
                        document.querySelectorAll(".inventory-item").forEach(l => {
                            d === "all" || l.dataset.category === d ? l.style.display = "flex" : l.style.display = "none"
                        }
                        )
                    })
                }
                ),
                !document.getElementById("inventoryStyles")) {
                    const a = document.createElement("style");
                    a.id = "inventoryStyles",
                    a.textContent = `
          #inventoryItemsList {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 0;
            overflow: hidden;
          }
          
          .inventory-header {
            display: flex;
            flex-direction: column;
            padding: 10px;
            border-bottom: 1px solid rgba(0, 136, 255, 0.3);
            background: rgba(0, 16, 32, 0.8);
          }
        
          
          .inventory-stat {
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          .stat-label {
            color: #88ccff;
            font-size: 0.9em;
          }
          
          .stat-value {
            color: #00ffff;
            font-weight: bold;
            font-size: 1em;
          }
          
          .inventory-tabs {
            display: flex;
            gap: 5px;
            border-bottom: 1px solid rgba(0, 136, 255, 0.2);
            padding-bottom: 5px;
          }
          
          .inventory-tab {
            background: rgba(0, 32, 64, 0.5);
            border: 1px solid rgba(0, 136, 255, 0.3);
            color: #88ccff;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8em;
            text-transform: uppercase;
            transition: all 0.2s ease;
          }
          
          .inventory-tab:hover {
            background: rgba(0, 64, 128, 0.3);
            border-color: #00ffff;
          }
          
          .inventory-tab.active {
            background: rgba(0, 136, 255, 0.2);
            color: #00ffff;
            border-color: #00ffff;
          }
          
          .inventory-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 10px;
            padding: 10px;
            overflow-y: auto;
            flex-grow: 1;
          }
          
          .inventory-empty {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            color: #88ccff;
            font-style: italic;
          }
          
          .inventory-item {
            display: flex;
            flex-direction: column;
            background: rgba(0, 16, 32, 0.7);
            border: 1px solid rgba(0, 136, 255, 0.3);
            border-radius: 4px;
            padding: 8px;
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
          }
          
          .inventory-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 10px rgba(0, 136, 255, 0.2);
            border-color: #00ffff;
          }
          
          .inventory-item::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, #00ffff, transparent);
          }
          
          .inventory-item-image {
            position: relative;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 5px;
            cursor: pointer;
            display: none;
          }
          
          .inventory-item-image img {
            max-width: 64px;
            max-height: 64px;
            object-fit: contain;
            transition: transform 0.2s ease;
          }
          
          .inventory-item:hover .inventory-item-image img {
            transform: scale(1.05);
          }
          
          .inventory-item-quantity {
            position: absolute;
            bottom: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.7);
            color: #00ffff;
            font-size: 0.8em;
            font-weight: bold;
            padding: 2px 5px;
            border-radius: 3px;
            border: 1px solid rgba(0, 136, 255, 0.5);
          }
          
          .inventory-item-name {
            font-size: 0.85em;
            color: #ffffff;
            text-align: center;
            margin-bottom: 5px;
            height: 2.5em;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          
          .inventory-item-actions {
            display: flex;
            gap: 5px;
            justify-content: center;
          }
          
          .inventory-button {
            background: linear-gradient(180deg, #0088ff, #0066cc);
            color: white;
            border: none;
            padding: 3px 6px;
            border-radius: 3px;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 0.75em;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border: 1px solid #00aaff;
            white-space: nowrap;
          }
          
          .inventory-button:hover {
            background: linear-gradient(180deg, #00aaff, #0088ff);
            box-shadow: 0 0 5px rgba(0, 136, 255, 0.3);
          }
          
          .inventory-item-expired {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(255, 0, 0, 0.7);
            color: white;
            text-align: center;
            font-size: 0.75em;
            padding: 2px 0;
            transform: rotate(-45deg) translate(-25%, -50%);
            transform-origin: 0 0;
          }
          
          .expired-item {
            opacity: 0.7;
          }
          
          .inventory-tooltip {
            position: absolute;
            z-index: 2000;
            background: rgba(0, 16, 32, 0.95);
            border: 1px solid #0088ff;
            border-radius: 4px;
            padding: 10px;
            width: 250px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            pointer-events: none;
          }
          
          .tooltip-title {
            color: #00ffff;
            font-weight: bold;
            font-size: 1em;
            margin-bottom: 5px;
            border-bottom: 1px solid rgba(0, 136, 255, 0.3);
            padding-bottom: 3px;
          }
          
          .tooltip-description {
            color: #88ccff;
            font-size: 0.85em;
            margin-bottom: 8px;
          }
          
          .tooltip-duration,
          .tooltip-effect,
          .tooltip-rank,
          .tooltip-rewards {
            color: #ffffff;
            font-size: 0.8em;
            margin-top: 5px;
          }
          
          /* Scrollbar styling */
          .inventory-grid::-webkit-scrollbar {
            width: 8px;
          }
          
          .inventory-grid::-webkit-scrollbar-track {
            background: rgba(0, 16, 32, 0.5);
            border-radius: 4px;
          }
          
          .inventory-grid::-webkit-scrollbar-thumb {
            background: #0088ff;
            border-radius: 4px;
          }
          
          .inventory-grid::-webkit-scrollbar-thumb:hover {
            background: #00aaff;
          }
        `,
                    document.head.appendChild(a)
                }
            } catch (e) {
                console.error("Error updating inventory window:", e)
            }
    },
    async updateWindowContent(n) {
        if (h)
            try {
                switch (n) {
                case "questsWindow":
                    await this.updateQuestsWindow();
                    break;
                case "dailyQuestsWindow":
                    await this.updateDailyQuestsWindow();
                    break;
                case "achievementsWindow":
                    await this.updateAchievementsWindow();
                    break;
                case "shopWindow":
                    await this.updateShopWindow();
                    break;
                case "inventoryWindow":
                    await this.updateInventoryWindow();
                    break;
                case "profileWindow":
                    await this.updateProfileWindow();
                    break;
                case "leaderboardWindow":
                    await this.updateLeaderboardWindow();
                    break;
                case "bossBattlesWindow":
                    await this.updateBattleWindow();
                    break;
                case "notificationsWindow":
                    await this.updateNotificationsWindow();
                    break
                }
            } catch (e) {
                console.error(`Error updating window ${n}:`, e)
            }
    },
    async updateProfileWindow() {
        var n, e, t, i, o, s, r, a, d, l, c;
        try {
            if (!h)
                return;
            const p = x.collection("players").doc(h.uid)
              , f = await p.get();
            if (!f.exists)
                return;
            const m = f.data()
              , g = (w, v, T="Not set") => {
                const E = document.getElementById(w);
                E && (E.textContent = v || T)
            }
            ;
            g("profileName", ((n = m.profile) == null ? void 0 : n.name) || "Anonymous"),
            g("profileTitle", ((e = m.profile) == null ? void 0 : e.title) || "Novice"),
            g("profileRank", m.rank || "E"),
            g("profileLevel", `${m.level || 1}`),
            g("profileExp", `${m.exp || 0}/${m.expNeeded || 100}`),
            g("profileGold", m.gold || 0),
            g("profileQuests", m.questsCompleted || 0),
            g("profileDungeons", m.dungeonsCompleted || 0),
            g("profileStreak", `${m.streak || 0} days`),
            g("profileAchievements", ((t = m.achievementsUnlocked) == null ? void 0 : t.length) || 0),
            g("profileBio", ((i = m.profile) == null ? void 0 : i.bio) || "No biography set."),
            g("profileClass", ((o = m.profile) == null ? void 0 : o.class) || "Not chosen"),
            g("profileAge", ((s = m.profile) == null ? void 0 : s.age) || "Not set"),
            g("profileHeight", ((r = m.profile) == null ? void 0 : r.height) || "Not set"),
            g("profileWeight", ((a = m.profile) == null ? void 0 : a.weight) || "Not set"),
            g("profileGender", ((d = m.profile) == null ? void 0 : d.gender) || "Not set");
            const y = document.getElementById("profileTitleSelect");
            if (y) {
                y.innerHTML = "";
                const w = document.createElement("option");
                w.value = "Novice",
                w.textContent = "Novice",
                w.selected = ((l = m.profile) == null ? void 0 : l.title) === "Novice" || !((c = m.profile) != null && c.title),
                y.appendChild(w),
                m.unlockedTitles && m.unlockedTitles.length > 0 && m.unlockedTitles.forEach(v => {
                    var E;
                    const T = document.createElement("option");
                    T.value = v,
                    T.textContent = v,
                    T.selected = ((E = m.profile) == null ? void 0 : E.title) === v,
                    y.appendChild(T)
                }
                ),
                y.addEventListener("change", async function() {
                    const v = this.value;
                    try {
                        if (await p.update({
                            "profile.title": v
                        }),
                        m.unlockedTitleColors) {
                            const T = m.unlockedTitleColors.find(E => E.title === v);
                            T && T.color ? (await p.update({
                                "profile.titleColor": T.color
                            }),
                            u.profile.titleColor = T.color) : (await p.update({
                                "profile.titleColor": null
                            }),
                            u.profile && (u.profile.titleColor = null))
                        }
                        u.profile || (u.profile = {}),
                        u.profile.title = v,
                        updateTerminalPrompt(),
                        g("profileTitle", v),
                        showNotification(`Title changed to "${v}"`)
                    } catch (T) {
                        console.error("Error changing title:", T),
                        showNotification("Error changing title", "error")
                    }
                })
            }
        } catch (p) {
            console.error("Error updating profile window:", p)
        }
    },
    async updateQuestsWindow(n="normal") {
        if (h)
            try {
                const e = n === "daily" ? "dailyQuests" : "quests"
                  , i = await x.collection("players").doc(h.uid).collection(e).get()
                  , o = document.getElementById(n === "daily" ? "activeDailyQuestsList" : "activeQuestsList");
                if (o.innerHTML = "",
                i.empty) {
                    o.innerHTML = `<div class="window-item">No active ${n === "daily" ? "daily " : ""}quests</div>`;
                    return
                }
                const s = document.createElement("button");
                s.className = "window-button",
                s.textContent = `Complete All ${n === "daily" ? "Daily " : ""}Quests`,
                s.onclick = () => Je(n),
                o.appendChild(s),
                i.forEach(r => {
                    const a = r.data()
                      , d = document.createElement("div");
                    d.className = "window-item",
                    d.innerHTML = `
          <div class="window-item-title">${a.title}</div>
          <div class="window-item-description">
            Progress: 
            <input type="number" 
                   value="${a.currentCount}" 
                   min="0" 
                   max="${a.targetCount}" 
                   onchange="updateQuestCount('${r.id}', '${n}', this.value)"
                   style="width: 60px; background: transparent; color: var(--text-color); border: 1px solid var(--system-blue);">
            /${a.targetCount} ${a.metric}
          </div>
    <div class="window-item-description">
      <strong>Description:</strong><br>
      ${a.description}
    </div>          <div class="window-item-progress">
            <div class="window-item-progress-bar" style="width: ${a.currentCount / a.targetCount * 100}%"></div>
          </div>
          <div class="window-actions" style="margin-top: 10px;">
            <button class="window-button" onclick="completeQuest('${r.id}', '${n}')">
              Complete Quest
            </button>
            <button class="window-button danger" onclick="deleteQuest('${r.id}', '${n}')">
              Delete Quest
            </button>
          </div>
        `,
                    o.appendChild(d)
                }
                )
            } catch (e) {
                console.error(`Error updating ${n} quests window:`, e)
            }
    },
    async updateDailyQuestsWindow(n="daily") {
        try {
            if (!h)
                return;
            const t = await x.collection("players").doc(h.uid).collection("dailyQuests").get()
              , i = document.getElementById("dailyQuestsList");
            if (!i)
                return;
            const o = document.createElement("div");
            o.className = "sl-system-header",
            o.innerHTML = `
        <div class="sl-system-line"></div>
        <div class="sl-title">DAILY MISSIONS</div>
        <div class="sl-system-line"></div>
      `;
            const s = document.createElement("div");
            s.className = "sl-timer-section";
            const r = se()
              , a = new Date
              , d = r - a
              , l = new Date(a.setHours(0, 0, 0, 0))
              , c = r - l
              , p = (c - d) / c * 100;
            s.innerHTML = `
        <div class="sl-timer-container">
          <div class="sl-timer-label">TIME UNTIL RESET</div>
          <div class="sl-timer-display" id="centralDailyTimer">${J(d)}</div>
          <div class="sl-timer-progress">
            <div class="sl-progress-bar-track">
              <div class="sl-progress-bar-fill" style="width: ${p}%"></div>
            </div>
            <div class="sl-timer-markers">
              <span class="sl-marker" style="left: 0%">|</span>
              <span class="sl-marker" style="left: 25%">|</span>
              <span class="sl-marker" style="left: 50%">|</span>
              <span class="sl-marker" style="left: 75%">|</span>
              <span class="sl-marker" style="left: 100%">|</span>
            </div>
          </div>
        </div>
      `;
            const f = document.createElement("div");
            if (f.className = "sl-quests-container",
            i.innerHTML = "",
            i.appendChild(o),
            i.appendChild(s),
            i.appendChild(f),
            t.empty) {
                const m = document.createElement("div");
                m.className = "sl-empty-quests",
                m.innerHTML = '<div class="sl-empty-message">NO MISSIONS AVAILABLE</div>',
                f.appendChild(m)
            } else
                t.forEach(m => {
                    const g = m.data()
                      , y = document.createElement("div");
                    y.className = "sl-quest-item";
                    const w = g.completed && g.lastCompletion && X(g.lastCompletion);
                    w && y.classList.add("sl-completed-quest");
                    const v = w ? 100 : g.currentCount / g.targetCount * 100;
                    y.innerHTML = `
            <div class="sl-quest-header">
              <div class="sl-quest-status ${w ? "sl-status-complete" : "sl-status-active"}">
                ${w ? "COMPLETE" : "ACTIVE"}
          </div>
              <div class="sl-quest-title">${g.title}</div>
              ${w ? '<div class="sl-completion-badge">✓</div>' : ""}
            </div>
            
            <div class="sl-quest-body">
            <div style="font-size: 14px; color: #00a8ff; margin-bottom: 5px;" class="sl-quest-body-description-text">Description
              <div class="sl-quest-description">${g.description}</div>
            </div>
              <div class="sl-quest-progress">
                <div class="sl-progress-label">
                  PROGRESS: 
                  <span class="sl-progress-count">
            <input type="number" 
                   value="${w ? g.targetCount : g.currentCount}" 
                   min="0" 
                   max="${g.targetCount}" 
                   onchange="updateQuestCount('${m.id}', 'daily', this.value)"
                           class="sl-count-input"
                   ${w ? "disabled" : ""}>
            /${g.targetCount} ${g.metric}
                  </span>
          </div>
                
                <div class="sl-progress-track">
                  <div class="sl-progress-fill" style="width: ${v}%"></div>
                </div>
              </div>
          </div>
          
            <div class="sl-quest-actions">
              <button class="sl-action-button sl-complete-button" 
                      onclick="completeQuest('${m.id}', '${n}')" 
                      ${w ? "disabled" : ""}>
                <span class="sl-button-label">COMPLETE MISSION</span>
            </button>
              <button class="sl-action-button sl-delete-button" onclick="deleteQuest('${m.id}', '${n}')">
                <span class="sl-button-label">DELETE</span>
            </button>
          </div>`,
                    f.appendChild(y)
                }
                );
            if (!document.getElementById("soloLevelingQuestsStyles")) {
                const m = document.createElement("style");
                m.id = "soloLevelingQuestsStyles",
                m.textContent = `
          /* Solo Leveling Quests Styles */
          #dailyQuestsWindow {
            background: rgba(8, 19, 34, 0.85) !important;
            border: 1px solid rgba(0, 160, 255, 0.6) !important;
            box-shadow: 0 0 15px rgba(0, 190, 255, 0.4), inset 0 0 20px rgba(0, 130, 255, 0.1) !important;
            font-family: 'Rajdhani', sans-serif !important;
          }
          
          #dailyQuestsWindow::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              repeating-linear-gradient(
                transparent,
                transparent 2px,
                rgba(0, 128, 255, 0.03) 3px,
                transparent 4px
              );
            pointer-events: none;
            z-index: 0;
          }
          
          .sl-system-header, .sl-system-footer {
            text-align: center;
            color: #00a8ff;
            position: relative;
          }
          
          .sl-system-line {
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(0, 160, 255, 0.7), transparent);
            margin: 5px 0;
          }
          
          .sl-title {
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 2px;
            color: #00c8ff;
            text-shadow: 0 0 10px rgba(0, 200, 255, 0.5);
          }
          
          .sl-footer-text {
            font-size: 12px;
            color: rgba(0, 180, 255, 0.7);
            letter-spacing: 1px;
          }
          
          .sl-footer-line {
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(0, 160, 255, 0.5), transparent);
            margin: 5px 0;
          }
          
          .sl-timer-section {
            margin-bottom: 10px;
            background: rgba(0, 40, 80, 0.3);
            border: 1px solid rgba(0, 160, 255, 0.3);
            border-radius: 5px;
            padding: 20px;
          }
          
          .sl-timer-label {
            color: #00a8ff;
            font-size: 12px;
            letter-spacing: 1px;
            margin-bottom: 5px;
            text-align: center;
          }
          
          .sl-timer-display {
            font-size: 24px;
            font-weight: bold;
            color: #ffffff;
            text-shadow: 0 0 10px rgba(0, 200, 255, 0.7);
            text-align: center;
            margin-bottom: 10px;
          }
          
          .sl-timer-progress {
            position: relative;
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          
          .sl-progress-bar-track {
            height: 6px;
            background: rgba(0, 60, 120, 0.3);
            border-radius: 3px;
            position: relative;
            overflow: hidden;
            width: 100%;
          }
          
          .sl-progress-bar-fill {
            height: 100%;
            background: linear-gradient(to right, #0062ff, #00c8ff);
            border-radius: 3px;
            box-shadow: 0 0 5px rgba(0, 180, 255, 0.7);
            transition: width 0.3s ease;
          }
          
          .sl-timer-markers {
            display: flex;
            justify-content: space-between !important;
            margin-top: 5px;
            position: relative;
            width: 100%;
            height: 15px;
          }
          
          .sl-marker {
            position: absolute;
            transform: translateX(-50%);
            font-size: 10px;
            color: rgba(0, 160, 255, 0.8);
          }
          
          .sl-quests-container {
            max-height: 350px;
            overflow-y: auto;
            padding-right: 5px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          
          .sl-quests-container::-webkit-scrollbar {
            width: 6px;
          }
          
          .sl-quests-container::-webkit-scrollbar-track {
            background: rgba(0, 20, 40, 0.3);
            border-radius: 3px;
          }
          
          .sl-quests-container::-webkit-scrollbar-thumb {
            background: rgba(0, 140, 255, 0.5);
            border-radius: 3px;
          }
          
          .sl-quest-item {
            background: rgba(0, 30, 60, 0.3);
            border-left: 3px solid rgba(0, 160, 255, 0.5);
            border-radius: 0 3px 3px 0;
            transition: all 0.3s ease;
          }
          
          .sl-quest-item:hover {
            background: rgba(0, 40, 80, 0.4);
            transform: translateY(-2px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          }
          
          .sl-completed-quest {
            border-left-color: #00e0ff !important;
            box-shadow: 0 0 10px rgba(0, 200, 255, 0.2);
          }
          
          .sl-quest-header {
            display: flex;
            align-items: center;
            padding: 8px 12px;
            background: rgba(0, 40, 80, 0.4);
            position: relative;
          }
          
          .sl-quest-status {
            font-size: 10px;
            padding: 2px 6px;
            border-radius: 2px;
            margin-right: 10px;
            font-weight: 600;
            letter-spacing: 0.5px;
          }
          
          .sl-status-active {
            background: rgba(0, 100, 200, 0.3);
            color: #00a8ff;
            border: 1px solid rgba(0, 160, 255, 0.4);
          }
          
          .sl-status-complete {
            background: rgba(0, 200, 160, 0.2);
            color: #00e0c0;
            border: 1px solid rgba(0, 230, 180, 0.4);
          }
          
          .sl-quest-title {
            flex: 1;
            font-weight: 600;
            color: #ffffff;
            font-size: 15px;
          }
          
          .sl-completion-badge {
            width: 20px;
            height: 20px;
            background: rgba(0, 220, 170, 0.2);
            color: #00ffc0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 12px;
            margin-left: 10px;
            border: 1px solid rgba(0, 230, 180, 0.5);
          }
          
          .sl-quest-body {
            padding: 12px;
          }
          
          .sl-quest-description {
            margin-bottom: 10px;
            color: rgba(200, 230, 255, 0.8);
            font-size: 13px;
            line-height: 1.4;
          }
          
          .sl-quest-progress {
            margin-top: 10px;
          }
          
          .sl-progress-label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;
            font-size: 12px;
            color: #00b8ff;
          }
          
          .sl-progress-count {
            color: #ffffff;
          }
          
          .sl-count-input {
            width: 40px;
            background: rgba(0, 40, 80, 0.4);
            color: #ffffff;
            border: 1px solid rgba(0, 160, 255, 0.5);
            border-radius: 3px;
            text-align: center;
            font-family: 'Rajdhani', sans-serif;
            margin: 0 3px;
            padding: 2px;
          }
          
          .sl-count-input:disabled {
            opacity: 0.7;
            background: rgba(0, 60, 120, 0.2);
          }
          
          .sl-progress-track {
            height: 5px;
            background: rgba(0, 60, 120, 0.3);
            border-radius: 3px;
            overflow: hidden;
          }
          
          .sl-progress-fill {
            height: 100%;
            background: linear-gradient(to right, #0062ff, #00c8ff);
            border-radius: 3px;
            box-shadow: 0 0 5px rgba(0, 180, 255, 0.7);
            transition: width 0.3s ease;
          }
          
          .sl-quest-actions {
            display: flex;
            gap: 8px;
            padding: 0 12px 12px;
          }
          
          .sl-action-button {
            padding: 6px 12px;
            border: none;
            background: rgba(0, 80, 160, 0.4);
            color: #00c8ff;
            border-radius: 3px;
            font-family: 'Rajdhani', sans-serif;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 0.5px;
            font-size: 12px;
            border: 1px solid rgba(0, 160, 255, 0.3);
          }
          
          .sl-action-button:hover {
            background: rgba(0, 100, 200, 0.5);
            transform: translateY(-1px);
          }
          
          .sl-action-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            background: rgba(0, 60, 120, 0.3);
          }
          
          .sl-complete-button {
            flex: 2;
          }
          
          .sl-delete-button {
            flex: 1 !important;
            background: rgba(160, 40, 40, 0.3)!important;
            color: #ff8080!important;
            border-color: rgba(255, 100, 100, 0.3)!important;
          }
          
          .sl-delete-button:hover {
            background: rgba(180, 50, 50, 0.4)!important;
          }
          
          .sl-empty-quests {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80px;
            background: rgba(0, 30, 60, 0.2);
            border: 1px solid rgba(0, 160, 255, 0.2);
            border-radius: 5px;
          }
          
          .sl-empty-message {
            color: rgba(0, 160, 255, 0.6);
            font-size: 14px;
            letter-spacing: 1px;
          }
        `,
                document.head.appendChild(m)
            }
        } catch (e) {
            console.error("Error updating daily quests window:", e)
        }
    },
    async updateAchievementsWindow() {
        if (h)
            try {
                const e = (await x.collection("players").doc(h.uid).get()).data()
                  , t = document.getElementById("achievementsList");
                t.innerHTML = "",
                Object.entries({
                    level: "Level Achievements",
                    quests_completed: "Quest Achievements",
                    daily_streak: "Streak Achievements",
                    water_streak: "Hydration Achievements",
                    total_gold: "Gold Achievements",
                    rank: "Rank Achievements"
                }).forEach( ([o,s]) => {
                    const r = Object.values(He).filter(a => a.type === o);
                    if (r.length > 0) {
                        const a = document.createElement("div");
                        a.className = "achievement-category",
                        a.textContent = s,
                        t.appendChild(a),
                        r.forEach(d => {
                            var w, v, T;
                            const l = document.createElement("div")
                              , c = ((v = (w = e.achievements) == null ? void 0 : w[d.id]) == null ? void 0 : v.currentRank) || 0
                              , p = c === d.ranks.length
                              , f = p ? null : d.ranks[c];
                            l.className = `achievement-item${c === 0 ? " locked" : ""}`;
                            let m = 0
                              , g = ""
                              , y = 0;
                            if (f) {
                                switch (d.type) {
                                case "level":
                                    m = Math.min(e.level || 0, f.requirement),
                                    g = `Level ${m}/${f.requirement}`;
                                    break;
                                case "quests_completed":
                                    m = Math.min(e.questsCompleted || 0, f.requirement),
                                    g = `${m}/${f.requirement} Quests`;
                                    break;
                                case "daily_streak":
                                    m = Math.min(e.streak || 0, f.requirement),
                                    g = `${m}/${f.requirement} Days`;
                                    break;
                                case "water_streak":
                                    m = Math.min(((T = e.waterIntake) == null ? void 0 : T.streakDays) || 0, f.requirement),
                                    g = `${m}/${f.requirement} Days`;
                                    break;
                                case "total_gold":
                                    m = Math.min(e.gold || 0, f.requirement),
                                    g = `${m.toLocaleString()}/${f.requirement.toLocaleString()} Gold`;
                                    break;
                                case "rank":
                                    const C = ["E", "D", "C", "B", "A", "S"]
                                      , L = C.indexOf(e.rank || "E")
                                      , S = C.indexOf(f.requirement);
                                    m = L >= S ? S : L,
                                    g = `Current: ${e.rank || "E"} / Required: ${f.requirement}`,
                                    g = `${m}/${f.requirement} ${f.description}`;
                                    break
                                }
                                if (d.type === "rank") {
                                    const C = ["E", "D", "C", "B", "A", "S"]
                                      , L = C.indexOf(e.rank || "E")
                                      , S = C.indexOf(f.requirement);
                                    y = L / S * 100
                                } else
                                    y = m / f.requirement * 100;
                                l.innerHTML = `
                    <div class="achievement-rank ${p ? "max" : ""}">
                        ${p ? "MAX" : `Rank ${c}`}
                    </div>
                    <div class="achievement-glow"></div>
                    <div class="achievement-header">
                        <div class="achievement-name">
                            <span class="achievement-icon">${d.icon}</span>
                            ${d.name}
                        </div>
                    </div>
                    <div class="achievement-description">${d.description}</div>
                    ${f ? `
                        <div class="achievement-rewards">
                            Next Rank Rewards: ${f.reward.exp} XP, ${f.reward.gold} Gold
                        </div>
                        <div class="achievement-progress-container">
                            <div class="achievement-progress-bar" style="width: ${y}%"></div>
                        </div>
                        <div class="achievement-progress-text">${g}</div>
                        <div class="achievement-next-rank">Next: Rank ${c + 1}</div>
                    ` : `
                        <div class="achievement-rewards">
                            Achievement Mastered!
                        </div>
                    `}
                `;
                                const E = document.getElementById("achievementsList");
                                E ? E.appendChild(l) : console.error("Error: 'achievementsList' element not found.")
                            }
                        }
                        )
                    }
                }
                )
            } catch (n) {
                console.error("Error updating achievements window:", n)
            }
    },
    async updateShopWindow() {
        if (h)
            try {
                const e = (await x.collection("players").doc(h.uid).get()).data()
                  , t = document.getElementById("shopItemsList");
                t.innerHTML = "";
                const i = {
                    booster: {
                        name: "🎓 XP & Level Boosters",
                        items: []
                    },
                    enhancer: {
                        name: "🎯 Quest Enhancers",
                        items: []
                    },
                    training: {
                        name: "💪 Training Boosters",
                        items: []
                    },
                    upgrade: {
                        name: "🏆 Permanent Upgrades",
                        items: []
                    },
                    economy: {
                        name: "💰 Gold & Economy",
                        items: []
                    },
                    title: {
                        name: "🏅 Special Titles & Cosmetics",
                        items: []
                    },
                    utility: {
                        name: "🛠️ Utility Items",
                        items: []
                    },
                    special: {
                        name: "🌟 Special Items",
                        items: []
                    },
                    cosmetic: {
                        name: "✨ Cosmetic Items",
                        items: []
                    }
                };
                if (Object.entries(F).forEach( ([o,s]) => {
                    i[s.category] ? i[s.category].items.push({
                        id: o,
                        ...s
                    }) : i.special.items.push({
                        id: o,
                        ...s
                    })
                }
                ),
                Object.values(i).forEach(o => {
                    if (o.items.length > 0) {
                        const s = document.createElement("div");
                        s.className = "shop-category-section";
                        const r = document.createElement("div");
                        r.className = "shop-category-header",
                        r.textContent = o.name,
                        s.appendChild(r);
                        const a = document.createElement("div");
                        a.className = "shop-items-container",
                        o.items.forEach(d => {
                            var w;
                            const l = document.createElement("div");
                            l.className = "shop-item";
                            const c = !d.rankRequired || ke(u.rank, d.rankRequired)
                              , p = d.effect && (d.effect.type === "title" || d.effect.type === "profile_custom" || d.effect.type === "achievement_tracking" || d.effect.type === "milestone_custom" || d.effect.type === "quest_chain")
                              , f = ((w = d.effect) == null ? void 0 : w.type) === "title" && e.unlockedTitles && e.unlockedTitles.includes(d.effect.value)
                              , m = p && (e.inventory && e.inventory.some(v => v.id === d.id) || f);
                            (!c || m) && l.classList.add("shop-item-locked");
                            const g = `./assets/items/${d.id}.png`
                              , y = "https://img.myloview.com/posters/pixel-art-game-item-icon-and-objects-for-the-design-vector-illustration-fantasy-world-old-game-console-700-179505611.jpg";
                            l.innerHTML = `
            <div class="shop-item-image">
              <img src="${g}" onerror="this.src='${y}'" alt="${d.name}">
            </div>
            <div class="shop-item-header">
              <span class="shop-item-name">${d.name}</span>
              ${d.rankRequired ? `<span class="shop-item-rank">Rank ${d.rankRequired}</span>` : ""}
            </div>
            <div class="shop-item-description">${d.description}</div>
            <div class="shop-item-footer">
              <span class="shop-item-price">${d.price} Gold</span>
              ${m ? '<div class="shop-item-owned">Purchased</div>' : c ? `<button onclick="purchaseItem('${d.id}')" class="shop-button">Purchase</button>` : `<div class="shop-item-requirement">Requires Rank ${d.rankRequired}</div>`}
            </div>
            ${d.duration ? `<div class="shop-item-duration">Duration: ${be(d.duration)}</div>` : ""}
          `,
                            a.appendChild(l)
                        }
                        ),
                        s.appendChild(a),
                        t.appendChild(s)
                    }
                }
                ),
                !document.getElementById("shopStyles")) {
                    const o = document.createElement("style");
                    o.id = "shopStyles",
                    o.textContent = `
        #shopItemsList {
          padding: 10px;
        }
        .shop-category-section {
          margin-bottom: 15px;
        }
        .shop-category-header {
          font-size: 1em;
          font-weight: bold;
          color: #00ffff;
          margin: 10px 0 5px 0;
          padding: 3px 0;
          border-bottom: 1px solid #0088ff;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
        }
        .shop-items-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 10px;
          padding: 5px 0;
        }
        .shop-item {
          background: rgba(0, 16, 32, 0.95);
          border: 1px solid #0088ff;
          border-radius: 4px;
          padding: 10px;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
          font-size: 0.9em;
          display: flex;
          flex-direction: column;
        }
        .shop-item::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00ffff, transparent);
        }
        .shop-item:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 10px rgba(0, 136, 255, 0.2);
          border-color: #00ffff;
        }
        .shop-item-locked {
          opacity: 0.7;
          border-color: #444;
        }
        .shop-item-locked::after {
          background: linear-gradient(90deg, transparent, #444, transparent);
        }
.shop-item-image {
  text-align: center;
  margin-bottom: 8px;
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  display: none;
}

.shop-item-image img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  transition: opacity 0.2s ease;
}
        .shop-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
          border-bottom: 1px solid rgba(0, 136, 255, 0.2);
          padding-bottom: 4px;
          gap: 8px;
        }
        .shop-item-name {
          font-weight: bold;
          color: #fff;
          text-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
          font-size: 0.9em;
        }
        .shop-item-rank {
          color: #00ffff;
          font-size: 0.8em;
          background: rgba(0, 136, 255, 0.1);
          padding: 1px 6px;
          border-radius: 3px;
          border: 1px solid rgba(0, 136, 255, 0.3);
          white-space: nowrap;
        }
        .shop-item-description {
          color: #88ccff;
          font-size: 0.85em;
          margin-bottom: 8px;
          min-height: 32px;
          line-height: 1.3;
          flex-grow: 1;
        }
        .shop-item-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 4px;
          background: rgba(0, 16, 32, 0.3);
          padding: 4px 6px;
          border-radius: 3px;
          gap: 8px;
        }
        .shop-item-price {
          color: #00ffff;
          font-weight: bold;
          text-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
          font-size: 0.85em;
          white-space: nowrap;
        }
        .shop-button {
          background: linear-gradient(180deg, #0088ff, #0066cc);
          color: white;
          border: none;
          padding: 3px 8px;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          font-size: 0.8em;
          font-weight: bold;
          letter-spacing: 0.5px;
          border: 1px solid #00aaff;
          white-space: nowrap;
        }
        .shop-button:hover {
          background: linear-gradient(180deg, #00aaff, #0088ff);
          box-shadow: 0 0 5px rgba(0, 136, 255, 0.3);
        }
        .shop-item-requirement {
          color: #ff4444;
          font-size: 0.8em;
          background: rgba(255, 68, 68, 0.1);
          padding: 1px 6px;
          border-radius: 3px;
          border: 1px solid rgba(255, 68, 68, 0.3);
        }
        .shop-item-owned {
          color: #44ff44;
          font-size: 0.8em;
          background: rgba(68, 255, 68, 0.1);
          padding: 1px 6px;
          border-radius: 3px;
          border: 1px solid rgba(68, 255, 68, 0.3);
        }
        .shop-item-duration {
          color: #88ccff;
          font-size: 0.75em;
          margin-top: 4px;
          text-align: right;
          font-style: italic;
        }
      `,
                    document.head.appendChild(o)
                }
            } catch (n) {
                console.error("Error updating shop window:", n)
            }
    },
    async updateBattleWindow() {
        try {
            if (!h)
                return;
            const n = document.getElementById("bossBattlesList");
            if (!n) {
                console.error("Boss battles list element not found");
                return
            }
            n.innerHTML = "";
            const e = x.collection("players").doc(h.uid)
              , i = (await e.get()).data()
              , o = (i == null ? void 0 : i.defeatedBosses) || {}
              , r = await e.collection("activeBattles").get()
              , a = new Map;
            if (r.forEach(d => {
                const l = d.data();
                a.set(d.id, l);
                const c = new Date
                  , p = l.endTime.toDate();
                c > p && (Se(e, d.id, l),
                a.delete(d.id))
            }
            ),
            !document.getElementById("bossBattleStyles")) {
                const d = document.createElement("style");
                d.id = "bossBattleStyles",
                d.textContent = `
          .defeat-count {
            margin-left: 10px;
            font-size: 0.9em;
            color: #ff4444;
          }
          .active-battle-badge {
            margin-left: 10px;
            font-size: 0.9em;
            color: #44ff44;
          }
          .battle-time-remaining {
            font-size: 0.9em;
            color: #ffff44;
            margin: 5px 0;
          }
          .progress-input {
            display: flex;
            align-items: center;
            margin: 10px 0;
          }
          .progress-input input {
            margin: 0 10px;
            padding: 2px 5px;
            width: 80px;
            background: transparent;
            color: var(--text-color);
            border: 1px solid var(--system-blue);
          }
        `,
                document.head.appendChild(d)
            }
            Object.entries(G).forEach( ([d,l]) => {
                var w, v, T, E, C, L;
                const c = o[l.id] || 0
                  , p = a.get(l.id)
                  , f = document.createElement("div");
                f.className = "window-item";
                const m = l.baseTargetCount + c * (((w = l.scaling) == null ? void 0 : w.targetCount) || 0)
                  , g = l.rewards.exp + c * (((T = (v = l.scaling) == null ? void 0 : v.rewards) == null ? void 0 : T.exp) || 0)
                  , y = l.rewards.gold + c * (((C = (E = l.scaling) == null ? void 0 : E.rewards) == null ? void 0 : C.gold) || 0);
                f.innerHTML = `
          <div class="window-item-title">
            ${l.name}
            ${c > 0 ? `<span class="defeat-count">💀 ${c}</span>` : ""}
            ${p ? '<span class="active-battle-badge">⚔️ In Progress</span>' : ""}
          </div>
          <div class="window-item-description">${l.description}</div>
          <div class="window-item-description">
            Target: ${m} ${l.metric}
            <br>Time Limit: ${Xe(l.timeLimit)}
            ${c > 0 ? `<br>Scaling: +${((L = l.scaling) == null ? void 0 : L.targetCount) || 0} ${l.metric} per defeat` : ""}
          </div>
          <div class="window-item-description">
            Rewards:
            <br>- ${g} XP
            <br>- ${y} Gold
            ${l.rewards.title ? `<br>- Title: ${l.rewards.title}` : ""}
          </div>
          ${p ? `
            <div class="window-item-progress">
              <div class="progress-input">
                <label>Current Progress:</label>
                <input type="number" 
                       value="${p.currentCount}"
                       min="0"
                       max="${p.targetCount}"
                       onchange="updateBattleProgress(['${l.id}', this.value])"
                       style="width: 80px; margin: 0 10px; background: transparent; color: var(--text-color); border: 1px solid var(--system-blue);">
                  /${p.targetCount} ${l.metric}
              </div>
              <div class="battle-time-remaining" data-end-time="${p.endTime.toDate().toISOString()}" data-boss-id="${l.id}">
                Time Remaining: ${J(p.endTime.toDate() - new Date)}
              </div>
              <div class="window-item-progress-bar" style="width: ${p.currentCount / p.targetCount * 100}%"></div>
            </div>
          ` : ""}
          <div class="window-actions">
            <button class="window-button" 
                    onclick="startBossBattle(['${l.id}'])"
                    ${p ? "disabled" : ""}>
              ${p ? "Battle in Progress" : "Start Battle"}
            </button>
          </div>
        `,
                n.appendChild(f)
            }
            ),
            he()
        } catch (n) {
            console.error("Error updating boss battles window:", n)
        }
    },
    async updateLeaderboardWindow() {
        if (h)
            try {
                const n = document.getElementById("leaderboardWindow");
                if (!n) {
                    console.error("Leaderboard window not found in DOM");
                    return
                }
                let e = document.getElementById("leaderboardContent");
                e || (e = document.createElement("div"),
                e.id = "leaderboardContent",
                n.appendChild(e));
                const t = document.createElement("div");
                t.className = "sl-system-header",
                t.innerHTML = `
        <div class="sl-system-line"></div>
        <div class="sl-title">HUNTER RANKINGS</div>
        <div class="sl-system-line"></div>
      `;
                const i = document.createElement("div");
                i.className = "sl-leaderboard-container";
                const s = await x.collection("players").orderBy("level", "desc").limit(10).get()
                  , r = document.createElement("div");
                r.id = "leaderboardList",
                r.className = "sl-leaderboard-list";
                let a = 1;
                s.forEach(l => {
                    var y, w;
                    const c = l.data()
                      , p = document.createElement("div");
                    p.className = "sl-leaderboard-entry",
                    a === 1 ? p.classList.add("sl-first-place") : a === 2 ? p.classList.add("sl-second-place") : a === 3 && p.classList.add("sl-third-place");
                    const f = c.rank || "E"
                      , m = l.id === h.uid;
                    let g = 0;
                    typeof c.exp == "number" ? g = c.exp : c.exp && typeof c.exp.value == "number" && (g = c.exp.value),
                    p.innerHTML = `
          <div class="sl-entry-rank">
            <div class="sl-rank-indicator ${m ? "sl-current-user" : ""}">
              <span>${a}</span>
          </div>
              </div>
          <div class="sl-entry-info">
            <div class="sl-entry-name">
              <span class="sl-player-name">${((y = c.profile) == null ? void 0 : y.name) || "Anonymous"}</span>
              <span class="sl-player-title">${((w = c.profile) == null ? void 0 : w.title) || "Novice"}</span>
              </div>
            <div class="sl-entry-stats">
              <div class="sl-stat">
                <span class="sl-stat-label">LVL</span>
                <span class="sl-stat-value">${c.level || 1}</span>
              </div>
              <div class="sl-stat">
                <div class="sl-rank-hex sl-rank-${f.toLowerCase()}">
                  <span>${f}</span>
              </div>
            </div>
              <div class="sl-stat">
                <span class="sl-stat-label">XP</span>
                <span class="sl-stat-value">${g.toLocaleString()}</span>
          </div>
            </div>
          </div>
          ${a <= 3 ? '<div class="sl-medal-effect"></div>' : ""}
        `,
                    r.appendChild(p),
                    a++
                }
                );
                const d = document.createElement("div");
                if (d.className = "sl-system-footer",
                e.innerHTML = "",
                e.appendChild(t),
                i.appendChild(r),
                e.appendChild(i),
                !document.getElementById("soloLevelingLeaderboardStyles")) {
                    const l = document.createElement("style");
                    l.id = "soloLevelingLeaderboardStyles",
                    l.textContent = `
          /* Solo Leveling Leaderboard Styles */
          #leaderboardWindow {
            background: rgba(8, 19, 34, 0.85) !important;
            border: 1px solid rgba(0, 160, 255, 0.6) !important;
            box-shadow: 0 0 15px rgba(0, 190, 255, 0.4), inset 0 0 20px rgba(0, 130, 255, 0.1) !important;
            font-family: 'Rajdhani', sans-serif !important;
          }
          
          #leaderboardWindow::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              repeating-linear-gradient(
                transparent,
                transparent 2px,
                rgba(0, 128, 255, 0.03) 3px,
                transparent 4px
              );
            pointer-events: none;
            z-index: 0;
          }
          
          .sl-leaderboard-container {
            position: relative;
            border: 2px solid rgba(0, 160, 255, 0.5);
            border-radius: 5px;
            padding: 8px;
            max-height: 450px;
            overflow-y: auto;
            background: rgba(10, 20, 40, 0.4);
            z-index: 1;
            margin: 10px;
          }
          
          .sl-leaderboard-container::-webkit-scrollbar {
            width: 8px;
          }
          
          .sl-leaderboard-container::-webkit-scrollbar-track {
            background: rgba(0, 20, 40, 0.3);
          }
          
          .sl-leaderboard-container::-webkit-scrollbar-thumb {
            background: rgba(0, 140, 255, 0.5);
            border-radius: 3px;
          }
          
          .sl-leaderboard-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          
          .sl-leaderboard-entry {
            display: flex;
            align-items: center;
            padding: 12px;
            background: rgba(0, 30, 60, 0.3);
            border-left: 4px solid rgba(0, 160, 255, 0.5);
            position: relative;
            overflow: hidden;
            transition: all 0.2s ease;
            border-radius: 0 4px 4px 0;
          }
          
          .sl-leaderboard-entry:hover {
            background: rgba(0, 40, 80, 0.4);
            transform: translateY(-2px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
          }
          
          .sl-first-place {
            background: rgba(0, 50, 100, 0.5) !important;
            border-left: 4px solid #00d8ff !important;
            box-shadow: 0 0 15px rgba(0, 190, 255, 0.3) !important;
          }
          
          .sl-second-place {
            background: rgba(0, 40, 80, 0.45) !important;
            border-left: 4px solid #00c8ff !important;
          }
          
          .sl-third-place {
            background: rgba(0, 30, 60, 0.4) !important;
            border-left: 4px solid #00b8ff !important;
          }
          
          .sl-entry-rank {
            width: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .sl-rank-indicator {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 40, 80, 0.5);
            font-weight: bold;
            color: #a0e0ff;
            font-size: 18px;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            position: relative;
            border: 2px solid transparent;
            box-shadow: 0 0 0 1px rgba(0, 160, 255, 0.4);
          }
          
          .sl-rank-indicator::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background: transparent;
            z-index: -1;
            border: 2px solid rgba(0, 160, 255, 0.4);
          }
          
          .sl-first-place .sl-rank-indicator {
            background: rgba(0, 90, 180, 0.6);
            color: #ffffff;
            box-shadow: 0 0 12px rgba(0, 216, 255, 0.6);
            border-color: rgba(0, 200, 255, 0.6);
          }
          
          .sl-current-user {
            background: rgba(0, 150, 255, 0.5) !important;
            animation: pulse-highlight 2s infinite;
            border-color: rgba(0, 200, 255, 0.8);
          }
          
          .sl-entry-info {
            flex: 1;
            margin-left: 15px;
          }
          
          .sl-entry-name {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
          }
          
          .sl-player-name {
            font-size: 18px;
            font-weight: 600;
            color: #ffffff;
            text-shadow: 0 0 8px rgba(0, 150, 255, 0.3);
          }
          
          .sl-player-title {
            font-size: 13px;
            color: #7bd5ff;
            background: rgba(0, 60, 120, 0.3);
            padding: 3px 8px;
            border-radius: 3px;
            border: 1px solid rgba(0, 160, 255, 0.3);
          }
          
          .sl-entry-stats {
            display: flex;
            gap: 20px;
          }
          
          .sl-stat {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .sl-stat-label {
            font-size: 13px;
            color: #00a8ff;
            font-weight: 500;
            margin-bottom: 3px;
          }
          
          .sl-stat-value {
            font-size: 16px;
            color: #e0f7ff;
            font-weight: 600;
          }
          
          .sl-rank-hex {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(10, 20, 40, 0.7);
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            font-weight: bold;
            font-size: 16px;
            color: #00a8ff;
            position: relative;
            z-index: 1;
            text-shadow: 0 0 5px rgba(0, 160, 255, 0.5);
            box-shadow: 0 0 0 2px rgba(0, 160, 255, 0.4);
          }
          
          .sl-rank-hex::after {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: transparent;
            z-index: -1;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            border: 2px solid currentColor;
          }
          
          .sl-rank-e { color: #00a2ff; }
          .sl-rank-d { color: #00a8ff; }
          .sl-rank-c { color: #00b0ff; }
          .sl-rank-b { color: #00b8ff; }
          .sl-rank-a { color: #00c8ff; }
          .sl-rank-s { 
            color: #00d8ff;
            animation: pulse-soft 2s infinite;
          }
          
          .sl-medal-effect {
            position: absolute;
            top: 0;
            left: 0;
            width: 150px;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.2), transparent);
            animation: medal-shine 3s ease-in-out infinite;
            pointer-events: none;
          }
          
          @keyframes medal-shine {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(270%); }
          }
          
          @keyframes pulse-highlight {
            0% { box-shadow: 0 0 5px rgba(0, 200, 255, 0.3); }
            50% { box-shadow: 0 0 12px rgba(0, 200, 255, 0.7); }
            100% { box-shadow: 0 0 5px rgba(0, 200, 255, 0.3); }
          }
          
          @keyframes pulse-soft {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `,
                    document.head.appendChild(l)
                }
                n.dataset.glitchInitialized || (n.dataset.glitchInitialized = "true",
                setInterval( () => {
                    if (Math.random() > .9 && n.style.display !== "none") {
                        const l = n.querySelectorAll(".sl-leaderboard-entry")
                          , c = l[Math.floor(Math.random() * l.length)];
                        c && (c.classList.add("glitching"),
                        setTimeout( () => c.classList.remove("glitching"), 300))
                    }
                }
                , 3e3))
            } catch (n) {
                console.error("Error updating leaderboard window:", n)
            }
    },
    async updateNotificationsWindow() {
        if (h)
            try {
                const e = await x.collection("notifications").where("userId", "==", h.uid).orderBy("timestamp", "desc").get()
                  , t = document.getElementById("notificationsList");
                if (!t)
                    return;
                t.innerHTML = "";
                const i = document.createElement("div");
                i.className = "sl-system-header",
                i.innerHTML = `
        <div class="sl-system-line"></div>
        <div class="sl-title">NOTIFICATIONS</div>
        <div class="sl-system-line"></div>
      `,
                t.appendChild(i);
                const o = document.createElement("div");
                o.className = "sl-notifications-actions",
                o.innerHTML = `
        <button class="sl-action-button" onclick="windowSystem.markAllNotificationsAsRead()">
          <span class="sl-button-icon">✓</span>
          <span class="sl-button-label">READ ALL</span>
          </button>
        <button class="sl-action-button sl-delete-button" onclick="windowSystem.deleteAllNotifications()">
          <span class="sl-button-icon">×</span>
          <span class="sl-button-label">DELETE ALL</span>
          </button>
      `,
                t.appendChild(o);
                const s = document.createElement("div");
                if (s.className = "sl-notifications-container",
                t.appendChild(s),
                e.empty) {
                    const a = document.createElement("div");
                    a.className = "sl-empty-notifications",
                    a.innerHTML = '<div class="sl-empty-message">NO NOTIFICATIONS</div>',
                    s.appendChild(a)
                } else
                    e.forEach(a => {
                        var y;
                        const d = a.data()
                          , l = document.createElement("div");
                        l.className = `sl-notification-item ${d.read ? "sl-read" : "sl-unread"}`,
                        l.dataset.notificationId = a.id,
                        d.type && l.classList.add(`sl-type-${d.type}`);
                        const p = (((y = d.timestamp) == null ? void 0 : y.toDate()) || new Date).toLocaleString();
                        let f = d.message || "No message"
                          , m = "SYSTEM"
                          , g = "sl-type-default";
                        if (d.type === "penalty") {
                            m = "PENALTY",
                            g = "sl-type-penalty";
                            const w = d.details || {}
                              , v = w.levelsLost ?? 0
                              , T = w.previousLevel ?? "Unknown"
                              , E = w.newLevel ?? "Unknown";
                            f = `
              <div class="sl-notification-content">
                <div class="sl-notification-message">${d.message || "Penalty Applied"}</div>
                <div class="sl-notification-details">
                  ${v > 0 ? `<div class="sl-detail-item">Levels Lost: <span class="sl-highlight-negative">${v}</span></div>` : ""}
                  <div class="sl-detail-item">Previous Level: <span>${T}</span></div>
                  <div class="sl-detail-item">New Level: <span>${E}</span></div>
              </div>
            </div>
          `
                        } else
                            d.type === "reward" ? (m = "REWARD",
                            g = "sl-type-reward") : d.type === "quest" ? (m = "QUEST",
                            g = "sl-type-quest") : d.type === "level" && (m = "LEVEL UP",
                            g = "sl-type-level");
                        d.type !== "penalty" && (f = `
              <div class="sl-notification-content">
                <div class="sl-notification-message">${d.message || "No message"}</div>
              </div>
            `),
                        l.innerHTML = `
            <div class="sl-notification-header">
              <div class="sl-notification-type ${g}">${m}</div>
              <div class="sl-notification-time">${p}</div>
              <div class="sl-notification-status ${d.read ? "sl-status-read" : "sl-status-unread"}">
                ${d.read ? "READ" : "UNREAD"}
              </div>
          </div>
          ${f}
        `,
                        d.read || l.addEventListener("click", () => {
                            this.markNotificationAsRead(a.id)
                        }
                        ),
                        s.appendChild(l)
                    }
                    );
                if (!document.getElementById("soloLevelingNotificationsStyles")) {
                    const a = document.createElement("style");
                    a.id = "soloLevelingNotificationsStyles",
                    a.textContent = `
          /* Solo Leveling Notifications Styles */
          #notificationsWindow {
            background: rgba(8, 19, 34, 0.85) !important;
            border: 1px solid rgba(0, 160, 255, 0.6) !important;
            box-shadow: 0 0 15px rgba(0, 190, 255, 0.4), inset 0 0 20px rgba(0, 130, 255, 0.1) !important;
            font-family: 'Rajdhani', sans-serif !important;
          }
          
          #notificationsWindow::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              repeating-linear-gradient(
                transparent,
                transparent 2px,
                rgba(0, 128, 255, 0.03) 3px,
                transparent 4px
              );
            pointer-events: none;
            z-index: 0;
          }
          
          .sl-system-header, .sl-system-footer {
            text-align: center;
            padding: 10px 0;
            color: #00a8ff;
            position: relative;
            margin: 0 10px;
          }
          
          .sl-system-line {
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(0, 160, 255, 0.7), transparent);
            margin: 5px 0;
          }
          
          .sl-title {
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 2px;
            color: #00c8ff;
            text-shadow: 0 0 10px rgba(0, 200, 255, 0.5);
          }
          
          .sl-footer-text {
            font-size: 12px;
            color: rgba(0, 180, 255, 0.7);
            letter-spacing: 1px;
          }
          
          .sl-footer-line {
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(0, 160, 255, 0.5), transparent);
            margin: 5px 0;
          }
          
          .sl-notifications-actions {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: -8px;
            margin-bottom: 5px;
          }
          
          .sl-action-button {
            padding: 6px 12px;
            background: rgba(0, 80, 160, 0.4);
            color: #00c8ff;
            border-radius: 3px;
            font-family: 'Rajdhani', sans-serif;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            letter-spacing: 0.5px;
            font-size: 12px;
            border: 1px solid rgba(0, 160, 255, 0.3);
          }
          
          .sl-action-button:hover {
            background: rgba(0, 100, 200, 0.5);
            transform: translateY(-1px);
          }
          
          .sl-delete-button {
            background: rgba(160, 40, 40, 0.3) !important;
            color: #ff8080 !important;
            border-color: rgba(255, 100, 100, 0.3) !important;
          }
          
          .sl-delete-button:hover {
            background: rgba(180, 50, 50, 0.4) !important;
          }
          
          .sl-button-icon {
            font-size: 14px;
          }
          
          .sl-notifications-container {
            margin: 0 15px 15px;
            max-height: 450px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          
          .sl-notifications-container::-webkit-scrollbar {
            width: 6px;
          }
          
          .sl-notifications-container::-webkit-scrollbar-track {
            background: rgba(0, 20, 40, 0.3);
            border-radius: 3px;
          }
          
          .sl-notifications-container::-webkit-scrollbar-thumb {
            background: rgba(0, 140, 255, 0.5);
            border-radius: 3px;
          }
          
          .sl-notification-item {
            background: rgba(0, 30, 60, 0.3);
            border-left: 3px solid rgba(0, 160, 255, 0.5);
            border-radius: 0 3px 3px 0;
            transition: all 0.3s ease;
          }
          
          .sl-notification-item:hover {
            background: rgba(0, 40, 80, 0.4);
            transform: translateY(-2px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          }
          
          .sl-notification-header {
            display: flex;
            align-items: center;
            padding: 8px 12px;
            background: rgba(0, 40, 80, 0.4);
            position: relative;
          }
          
          .sl-notification-type {
            font-size: 10px;
            padding: 2px 6px;
            border-radius: 2px;
            margin-right: 10px;
            font-weight: 600;
            letter-spacing: 0.5px;
            background: rgba(0, 100, 200, 0.3);
            color: #00a8ff;
            border: 1px solid rgba(0, 160, 255, 0.4);
            min-width: 60px;
            text-align: center;
          }
          
          .sl-notification-time {
            flex: 1;
            font-size: 11px;
            color: rgba(200, 220, 255, 0.7);
          }
          
          .sl-notification-status {
            font-size: 10px;
            padding: 2px 6px;
            border-radius: 2px;
            font-weight: 600;
            letter-spacing: 0.5px;
          }
          
          .sl-status-unread {
            background: rgba(0, 180, 255, 0.2);
            color: #00d8ff;
            border: 1px solid rgba(0, 200, 255, 0.3);
            animation: pulse-highlight-blue 2s infinite;
          }
          
          .sl-status-read {
            background: rgba(100, 100, 100, 0.2);
            color: #a0a0a0;
            border: 1px solid rgba(150, 150, 150, 0.3);
          }
          
          .sl-notification-content {
            padding: 12px;
          }
          
          .sl-notification-message {
            color: #ffffff;
            font-size: 14px;
            margin-bottom: 6px;
            line-height: 1.4;
          }
          
          .sl-notification-details {
            color: rgba(200, 220, 255, 0.8);
            font-size: 12px;
            background: rgba(0, 40, 80, 0.3);
            padding: 8px;
            border-radius: 3px;
            margin-top: 8px;
          }
          
          .sl-detail-item {
            margin: 3px 0;
          }
          
          .sl-highlight-negative {
            color: #ff8080;
          }
          
          .sl-highlight-positive {
            color: #80ff80;
          }
          
          /* Type-specific styling */
          .sl-type-penalty {
            background: rgba(180, 40, 40, 0.3);
            color: #ff8080;
            border-color: rgba(255, 100, 100, 0.4);
          }
          
          .sl-type-reward {
            background: rgba(40, 180, 40, 0.3);
            color: #80ff80;
            border-color: rgba(100, 255, 100, 0.4);
          }
          
          .sl-type-quest {
            background: rgba(180, 120, 0, 0.3);
            color: #ffcc80;
            border-color: rgba(255, 180, 0, 0.4);
          }
          
          .sl-type-level {
            background: rgba(120, 40, 180, 0.3);
            color: #d880ff;
            border-color: rgba(180, 100, 255, 0.4);
          }
          
          .sl-unread {
            border-left-color: #00c8ff;
            box-shadow: 0 0 5px rgba(0, 200, 255, 0.2);
          }
          
          .sl-read {
            opacity: 0.8;
          }
          
          .sl-empty-notifications {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            background: rgba(0, 30, 60, 0.2);
            border: 1px solid rgba(0, 160, 255, 0.2);
            border-radius: 5px;
          }
          
          .sl-empty-message {
            color: rgba(0, 160, 255, 0.6);
            font-size: 14px;
            letter-spacing: 1px;
          }
          
          @keyframes pulse-highlight-blue {
            0% { box-shadow: 0 0 5px rgba(0, 200, 255, 0.3); }
            50% { box-shadow: 0 0 10px rgba(0, 200, 255, 0.6); }
            100% { box-shadow: 0 0 5px rgba(0, 200, 255, 0.3); }
          }
        `,
                    document.head.appendChild(a)
                }
                const r = await this.getUnreadNotificationsCount();
                this.updateNotificationBadge(r)
            } catch (n) {
                console.error("Error updating notifications window:", n),
                printToTerminal(`Error updating notifications window: ${n.message}`, "error")
            }
    },
    async markNotificationAsRead(n) {
        try {
            await x.collection("notifications").doc(n).update({
                read: !0
            }),
            await this.updateNotificationsWindow(),
            notificationSystem.show("Notification marked as read", "success")
        } catch (e) {
            console.error("Error marking notification as read:", e),
            notificationSystem.show("Error marking notification as read", "error")
        }
    },
    async markAllNotificationsAsRead() {
        try {
            const n = x.batch();
            (await x.collection("notifications").where("userId", "==", h.uid).where("read", "==", !1).get()).forEach(i => {
                n.update(i.ref, {
                    read: !0
                })
            }
            ),
            await n.commit(),
            await this.updateNotificationsWindow(),
            notificationSystem.show("All notifications marked as read", "success")
        } catch (n) {
            console.error("Error marking all notifications as read:", n),
            notificationSystem.show("Error marking notifications as read", "error")
        }
    },
    async deleteAllNotifications() {
        try {
            const n = x.batch();
            (await x.collection("notifications").where("userId", "==", h.uid).get()).forEach(i => {
                n.delete(i.ref)
            }
            ),
            await n.commit(),
            this.updateNotificationBadge(0),
            await this.updateNotificationsWindow(),
            notificationSystem.show("All notifications deleted", "success")
        } catch (n) {
            console.error("Error deleting all notifications:", n),
            notificationSystem.show("Error deleting notifications", "error")
        }
    },
    async getUnreadNotificationsCount() {
        if (!h)
            return 0;
        try {
            return (await x.collection("notifications").where("userId", "==", h.uid).where("read", "==", !1).get()).size
        } catch (n) {
            return console.error("Error getting unread notifications count:", n),
            0
        }
    },
    updateNotificationBadge(n) {
        const e = this.getTaskbarItem("notificationsWindow");
        if (e) {
            const t = e.querySelector(".notification-badge");
            if (n > 0) {
                if (t)
                    t.textContent = n;
                else {
                    const i = document.createElement("div");
                    i.className = "notification-badge",
                    i.textContent = n,
                    e.appendChild(i)
                }
                e.classList.add("has-notifications")
            } else
                t && t.remove(),
                e.classList.remove("has-notifications")
        }
    },
    switchQuestTab(n) {
        document.querySelectorAll(".quest-tab").forEach(e => {
            e.classList.remove("active-tab")
        }
        ),
        document.getElementById(`${n}-quests-tab`).classList.add("active-tab"),
        this.updateQuestsWindow(n)
    }
};
document.addEventListener("DOMContentLoaded", () => {
    b.init()
}
);
function Ke() {
    const n = prompt("Enter your new name:");
    n && (window.setPlayerName([n]),
    b.updateWindowContent("profileWindow"))
}
window.purchaseItem = async function(e) {
    if (!h) {
        showNotification("You must log in to make purchases", "error");
        return
    }
    try {
        console.log("Available items:", window.ITEMS),
        console.log("Trying to purchase item:", e);
        const t = x.collection("players").doc(h.uid);
        if (!window.ITEMS)
            throw new Error("Items database not loaded! Please refresh the page.");
        const i = Object.values(window.ITEMS).find(o => o.id === e);
        if (!i)
            throw console.error(`Item with id ${e} not found in:`, window.ITEMS),
            new Error(`Item "${e}" not found in database. Please refresh the page.`);
        await x.runTransaction(async o => {
            const s = await o.get(t);
            if (!s.exists)
                throw new Error("Player not found");
            const r = s.data();
            if (i.rankRequired && !ke(r.rank, i.rankRequired))
                throw new Error(`You need to be Rank ${i.rankRequired} to purchase this item`);
            if (r.gold < i.price)
                throw new Error(`Not enough gold. You need ${i.price - r.gold} more gold.`);
            if (i.effect && i.effect.type === "title")
                if (!(r.unlockedTitles || []).includes(i.effect.value))
                    o.update(t, {
                        gold: r.gold - i.price,
                        unlockedTitles: firebase.firestore.FieldValue.arrayUnion(i.effect.value),
                        unlockedTitleColors: firebase.firestore.FieldValue.arrayUnion({
                            title: i.effect.value,
                            color: i.effect.color || "#ffffff"
                        })
                    });
                else
                    throw new Error("You already own this title");
            else if (i.consumable) {
                const a = r.inventory || [];
                if (a.find(l => l.id === e)) {
                    const l = a.map(c => c.id === e ? {
                        ...c,
                        quantity: (c.quantity || 1) + 1
                    } : c);
                    o.update(t, {
                        gold: r.gold - i.price,
                        inventory: l
                    })
                } else
                    o.update(t, {
                        gold: r.gold - i.price,
                        inventory: firebase.firestore.FieldValue.arrayUnion({
                            id: e,
                            quantity: 1,
                            purchasedAt: new Date().getTime()
                        })
                    })
            } else
                o.update(t, {
                    gold: r.gold - i.price,
                    inventory: firebase.firestore.FieldValue.arrayUnion({
                        id: e,
                        purchasedAt: new Date().getTime()
                    })
                });
            u.gold -= i.price
        }
        ),
        showNotification(`Successfully purchased ${F[e].name}!`),
        notificationSystem.playSound("purchase"),
        printToTerminal(`You purchased ${F[e].name} for ${F[e].price} gold.`, "success"),
        updateStatusBar(),
        await b.updateShopWindow(),
        await b.updateInventoryWindow()
    } catch (t) {
        console.error("Error purchasing item:", t),
        showNotification(t.message, "error"),
        printToTerminal(t.message, "error")
    }
}
;
async function Je(n) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        const t = await x.collection("players").doc(h.uid).collection(n === "daily" ? "dailyQuests" : "quests").get()
          , i = [];
        t.forEach(o => {
            const s = o.data();
            (!s.completed || n === "daily" && !X(s.lastCompletion)) && i.push(completeQuest(o.id, n))
        }
        ),
        await Promise.all(i),
        printToTerminal(`All ${n} quests completed!`, "success"),
        b.updateWindowContent(n === "daily" ? "dailyQuestsWindow" : "questsWindow")
    } catch (e) {
        printToTerminal(`Error completing all quests: ${e.message}`, "error")
    }
}
async function Et(n, e, t) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        const i = x.collection("players").doc(h.uid).collection(e === "daily" ? "dailyQuests" : "quests").doc(n)
          , o = await i.get();
        if (!o.exists) {
            printToTerminal("Quest not found.", "error");
            return
        }
        const s = o.data()
          , r = parseInt(t);
        if (isNaN(r) || r < 0 || r > s.targetCount) {
            printToTerminal("Invalid count value.", "error"),
            b.updateWindowContent(e === "daily" ? "dailyQuestsWindow" : "questsWindow");
            return
        }
        r >= s.targetCount ? await completeQuest(n, e) : (await i.update({
            currentCount: r
        }),
        printToTerminal(`Progress updated: ${r}/${s.targetCount} ${s.metric}`, "success")),
        b.updateWindowContent(e === "daily" ? "dailyQuestsWindow" : "questsWindow")
    } catch (i) {
        printToTerminal("Error updating quest count: " + i.message, "error")
    }
}
window.completeAllQuests = Je;
window.updateQuestCount = Et;
window.updateQuestProgress = updateQuestProgress;
function ke(n, e) {
    const t = ["E", "D", "C", "B", "A", "S"]
      , i = t.indexOf(n)
      , o = t.indexOf(e);
    return i >= o
}
function be(n) {
    const e = Math.floor(n / 36e5)
      , t = Math.floor(n % (1e3 * 60 * 60) / (1e3 * 60));
    return e > 0 ? `${e} hour${e > 1 ? "s" : ""}` : `${t} minutes`
}
function Ct(n) {
    if (!n)
        return [];
    const e = Date.now();
    return n.filter(t => !t.expiresAt || t.expiresAt > e).map(t => {
        const i = Object.values(F).find(o => o.id === t.id);
        return i ? i.effect : null
    }
    ).filter(t => t !== null)
}
function St(n, e) {
    let t = 1;
    return e.forEach(i => {
        (i.type === n || i.type === "global_xp" || i.type === "all_stats") && (t *= i.value)
    }
    ),
    t
}
async function We(n) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        const e = parseInt(n[0]) || 0;
        if (e <= 0) {
            printToTerminal("Please specify a valid amount of XP.", "error");
            return
        }
        const t = x.collection("players").doc(h.uid)
          , o = (await t.get()).data()
          , s = Ct(o.inventory)
          , r = St("global_xp", s)
          , a = Math.floor(e * r);
        u.exp += a,
        updateStatusBar(),
        await t.update({
            exp: firebase.firestore.FieldValue.increment(a)
        }),
        r > 1 ? printToTerminal(`Gained ${a} XP! (${e} × ${r.toFixed(2)} boost)`, "success") : printToTerminal(`Gained ${a} XP!`, "success"),
        await j(t, u.exp)
    } catch (e) {
        printToTerminal("Error adding experience points: " + e.message, "error")
    }
}
window.useItem = async function(e) {
    if (!h) {
        showNotification("You must be logged in to use items", "error");
        return
    }
    try {
        const t = x.collection("players").doc(h.uid)
          , i = F[e];
        if (!i) {
            showNotification("Item not found", "error");
            return
        }
        await x.runTransaction(async o => {
            var c;
            const s = await o.get(t);
            if (!s.exists)
                throw new Error("Player not found");
            const a = s.data().inventory || []
              , d = a.findIndex(p => p.id === e);
            if (d === -1)
                throw new Error("Item not found in inventory");
            const l = a[d];
            switch ((c = i.effect) == null ? void 0 : c.type) {
            case "title":
                o.update(t, {
                    unlockedTitles: firebase.firestore.FieldValue.arrayUnion(i.effect.value),
                    inventory: a.filter( (p, f) => f !== d)
                }),
                i.effect.color && o.update(t, {
                    unlockedTitleColors: firebase.firestore.FieldValue.arrayUnion({
                        title: i.effect.value,
                        color: i.effect.color
                    })
                }),
                showNotification(`Unlocked title: "${i.effect.value}"`);
                break;
            case "name_change":
                Ke();
                break;
            case "global_xp":
            case "quest_progress":
            case "quest_rewards":
            case "all_stats":
                if (i.duration) {
                    const p = Date.now() + i.duration
                      , f = [...a];
                    f[d] = {
                        ...l,
                        active: !0,
                        expiresAt: p
                    },
                    o.update(t, {
                        inventory: f,
                        activeEffects: firebase.firestore.FieldValue.arrayUnion({
                            type: i.effect.type,
                            value: i.effect.value,
                            expiresAt: p,
                            itemId: e
                        })
                    }),
                    showNotification(`Activated ${i.name} for ${be(i.duration)}`)
                }
                break;
            case "reset_daily":
                o.update(t, {
                    inventory: a.filter( (p, f) => f !== d)
                }),
                it(),
                showNotification("Daily quests have been reset");
                break;
            default:
                if (i.consumable)
                    o.update(t, {
                        inventory: a.filter( (p, f) => f !== d)
                    }),
                    showNotification(`Used ${i.name}`);
                else
                    throw new Error("This item cannot be used")
            }
        }
        ),
        notificationSystem.playSound("item_use"),
        updateStatusBar(),
        await b.updateInventoryWindow()
    } catch (t) {
        console.error("Error using item:", t),
        showNotification(t.message, "error")
    }
}
;
window.useItem = useItem;
window.sellItem = async function(e) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    const t = x.collection("players").doc(h.uid)
      , s = (await t.get()).data().inventory.find(a => a.id === e);
    if (!s) {
        printToTerminal("Item not found in your inventory.", "error");
        return
    }
    const r = Object.values(F).find(a => a.id === e);
    if (!r) {
        printToTerminal("Invalid item.", "error");
        return
    }
    try {
        const a = qt(r);
        await t.update({
            gold: firebase.firestore.FieldValue.increment(a),
            inventory: firebase.firestore.FieldValue.arrayRemove(s)
        }),
        u.gold += a,
        u.inventory = u.inventory.filter(d => d.id !== e),
        notificationSystem.playSound("sell"),
        printToTerminal(`Sold ${r.name} for ${a} gold! (50% of original price)`, "success"),
        showNotification(`Sold ${r.name} for ${a} gold!`),
        updateStatusBar(),
        b.updateWindowContent("inventoryWindow")
    } catch (a) {
        printToTerminal("Error selling item: " + a.message, "error")
    }
}
;
function Lt() {
    document.querySelectorAll(".window").forEach(e => {
        let t = 0
          , i = 0
          , o = 0
          , s = 0;
        e.addEventListener("touchstart", r => {
            r.target.closest(".window-header") && !r.target.closest(".window-close") && (t = r.touches[0].clientX,
            i = r.touches[0].clientY,
            o = e.offsetLeft,
            s = e.offsetTop)
        }
        ),
        e.addEventListener("touchmove", r => {
            if (t && i) {
                r.preventDefault();
                const a = r.touches[0].clientX
                  , d = r.touches[0].clientY
                  , l = a - t
                  , c = d - i;
                e.style.left = `${o + l}px`,
                e.style.top = `${s + c}px`
            }
        }
        ),
        e.addEventListener("touchend", () => {
            t = 0,
            i = 0
        }
        )
    }
    )
}
function It() {
    let n = 0;
    document.addEventListener("touchend", e => {
        const t = Date.now();
        t - n <= 300 && e.preventDefault(),
        n = t
    }
    , !1)
}
function $t() {
    document.querySelectorAll(".terminal-container, .window-content").forEach(e => {
        e.style.webkitOverflowScrolling = "touch"
    }
    )
}
const Nt = b.init;
b.init = function() {
    Nt.call(this),
    Lt(),
    It(),
    $t(),
    window.addEventListener("orientationchange", () => {
        setTimeout( () => {
            document.querySelectorAll(".window").forEach(e => {
                if (e.classList.contains("show")) {
                    const t = e.innerHeight;
                    e.offsetHeight > t * .9 && (e.style.height = "90vh",
                    e.style.top = "5vh")
                }
            }
            )
        }
        , 100)
    }
    )
}
;
async function re(n) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        const e = n.length > 0 ? parseInt(n[0]) : 0;
        if (isNaN(e) || e <= 0) {
            printToTerminal("Please specify a valid penalty amount (e.g., !penalty 2000)", "error");
            return
        }
        const t = x.collection("players").doc(h.uid)
          , o = (await t.get()).data()
          , s = o.exp || 0
          , r = o.level || 1;
        let a = s - e
          , d = r;
        for (; a < 0 && d > 1; )
            d--,
            a += getExpNeededForLevel(d);
        d === 1 && a < 0 && (a = 0);
        const l = r - d
          , c = firebase.firestore.Timestamp.now();
        l > 0 && ot(r, d),
        await t.update({
            exp: a,
            level: d,
            lastPenalty: c,
            lastPenaltyAmount: e
        }),
        u.exp = a,
        u.level = d,
        await x.collection("penaltyLogs").add({
            userId: h.uid,
            timestamp: c,
            penaltyAmount: e,
            previousExp: s,
            previousLevel: r,
            newExp: a,
            newLevel: d,
            expLost: e,
            levelsLost: l,
            manualPenalty: !0
        }),
        await x.collection("notifications").add({
            userId: h.uid,
            type: "penalty",
            timestamp: c,
            read: !1,
            message: `Manual Penalty Applied: Lost ${e} XP${l > 0 ? ` and ${l} level${l > 1 ? "s" : ""}` : ""}.`,
            details: {
                penaltyAmount: e,
                expLost: e,
                levelsLost: l,
                previousLevel: r,
                newLevel: d
            }
        }),
        printToTerminal(`
=== PENALTY APPLIED ===`, "error"),
        printToTerminal(`XP Lost: ${e}`, "error"),
        l > 0 && printToTerminal(`Levels Lost: ${l}`, "error"),
        printToTerminal(`Previous Level: ${r}`, "info"),
        printToTerminal(`New Level: ${d}`, "info"),
        printToTerminal(`Previous EXP: ${s}`, "info"),
        printToTerminal(`New EXP: ${a}`, "info"),
        updateStatusBar(),
        b.updateWindowContent("profileWindow"),
        b.updateWindowContent("notificationsWindow"),
        Q.playVoiceLine("PENALTY")
    } catch (e) {
        console.error("Error in penalty command:", e),
        printToTerminal("Error applying penalty: " + e.message, "error")
    }
}
z["!penalty"] = re;
async function Ee(n, e) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        const t = x.collection("players").doc(h.uid).collection(e === "daily" ? "dailyQuests" : "quests").doc(n)
          , i = await t.get();
        if (!i.exists) {
            printToTerminal("Quest not found.", "error");
            return
        }
        const o = i.data();
        await t.delete(),
        printToTerminal(`Quest "${o.title}" deleted successfully!`, "success"),
        b.updateWindowContent(e === "daily" ? "dailyQuestsWindow" : "questsWindow")
    } catch (t) {
        printToTerminal("Error deleting quest: " + t.message, "error")
    }
}
z["!delete"] = async n => {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    if (n.length < 2) {
        printToTerminal("Usage: !delete [quest/daily] [questId]", "error");
        return
    }
    const e = n[0].toLowerCase()
      , t = n[1];
    if (e !== "quest" && e !== "daily") {
        printToTerminal("Invalid type. Use 'quest' or 'daily'.", "error");
        return
    }
    await Ee(t, e === "daily" ? "daily" : "normal")
}
;
window.deleteQuest = Ee;
const Oe = {
    LEVEL_UP: ["I am getting stronger.", "My power... it's growing.", "This is just the beginning.", "I can feel it... I'm becoming more powerful.", "Each level makes me stronger."],
    QUEST_COMPLETE: ["Another quest completed.", "Mission accomplished.", "All according to plan.", "One step closer to becoming the strongest hunter.", "That was merely a warm-up."],
    BOSS_START: ["Arise.", "Let's test your strength.", "Show me what you've got.", "This might be interesting.", "Time to hunt."],
    BOSS_VICTORY: ["Know your place.", "Is that all you've got?", "You were not strong enough.", "Another one falls.", "Victory was inevitable."],
    DEMON_BATTLE: ["Face your demons.", "Conquer your weaknesses.", "Your fears make you weak.", "Overcome your limits.", "Break through your barriers."],
    ACHIEVEMENT: ["Progress... I can feel it.", "Another milestone reached.", "Getting closer to my goal.", "This is just a stepping stone.", "Becoming stronger every day."],
    DAILY_RESET: ["A new day begins.", "Time to get stronger.", "Another day of hunting.", "Let's see what today brings.", "Ready for today's challenges."],
    PENALTY: ["Unacceptable.", "I must do better.", "This weakness... I'll overcome it.", "A setback... but temporary.", "Learn from failure."],
    RANK_UP: ["My rank increases.", "Moving up in the world.", "One step closer to the top.", "The shadow monarch rises.", "Power befitting my status."],
    STREAK: ["Consistency is key.", "Day after day, growing stronger.", "My dedication shows results.", "The path to power is endless.", "No days wasted."]
}
  , Q = {
    playVoiceLine(n) {
        if (!Oe[n])
            return;
        const e = Oe[n]
          , o = `sounds/voice/${e[Math.floor(Math.random() * e.length)].toLowerCase().replace(/[^a-z0-9]+/g, "_")}.mp3`
          , s = new Audio(o);
        s.volume = .7;
        try {
            s.play().catch(r => {
                console.log("Voice line not available:", r)
            }
            )
        } catch (r) {
            console.log("Error playing voice line:", r)
        }
    }
};
function ve() {
    Q.playVoiceLine("DAILY_RESET")
}
function Ze() {
    Q.playVoiceLine("PENALTY")
}
function Rt(n, e) {
    ei(n, e),
    showNotification(`Congratulations! You've been promoted to Rank ${e}!`, "achievement"),
    printToTerminal(`⭐ You have been promoted to Rank ${e}! ⭐`, "achievement")
}
const ze = {
    E: {
        name: "E Rank",
        requirements: {
            level: 1,
            questsCompleted: 0,
            achievements: 0
        },
        color: "#808080"
    },
    D: {
        name: "D Rank",
        requirements: {
            level: 5,
            questsCompleted: 10,
            achievements: 3
        },
        color: "#CD7F32"
    },
    C: {
        name: "C Rank",
        requirements: {
            level: 10,
            questsCompleted: 25,
            achievements: 7
        },
        color: "#C0C0C0"
    },
    B: {
        name: "B Rank",
        requirements: {
            level: 20,
            questsCompleted: 50,
            achievements: 12
        },
        color: "#FFD700"
    },
    A: {
        name: "A Rank",
        requirements: {
            level: 35,
            questsCompleted: 100,
            achievements: 20
        },
        color: "#E5E4E2"
    },
    S: {
        name: "S Rank",
        requirements: {
            level: 50,
            questsCompleted: 200,
            achievements: 30
        },
        color: "#B9F2FF"
    }
};
async function le() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        const e = (await x.collection("players").doc(h.uid).get()).data()
          , t = Ce(e)
          , i = {
            E: {
                shape: "polygon(50% 0%, 100% 86%, 0% 86%)",
                edges: 3,
                border: "#88b0d0",
                glow: "rgba(136, 176, 208, 0.3)",
                baseColor: "#88b0d0",
                intensity: .1,
                particleCount: 0,
                animation: ""
            },
            D: {
                shape: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                edges: 4,
                border: "#66b8e0",
                glow: "rgba(102, 184, 224, 0.4)",
                baseColor: "#66b8e0",
                intensity: .2,
                particleCount: 2,
                animation: ""
            },
            C: {
                shape: "polygon(50% 0%, 95% 35%, 80% 90%, 20% 90%, 5% 35%)",
                edges: 5,
                border: "#44c0f0",
                glow: "rgba(68, 192, 240, 0.5)",
                baseColor: "#44c0f0",
                intensity: .25,
                particleCount: 4,
                animation: "pulseSoft 4s infinite"
            },
            B: {
                shape: "polygon(50% 0%, 85% 25%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 15% 25%)",
                edges: 6,
                border: "#22c8ff",
                glow: "rgba(34, 200, 255, 0.6)",
                baseColor: "#22c8ff",
                intensity: .35,
                particleCount: 6,
                animation: "pulseSoft 3s infinite"
            },
            A: {
                shape: "polygon(50% 0%, 75% 15%, 100% 40%, 95% 75%, 70% 100%, 30% 100%, 5% 75%, 0% 40%, 25% 15%)",
                edges: 8,
                border: "linear-gradient(45deg, #00c8ff, #00a0ff)",
                glow: "rgba(0, 200, 255, 0.7)",
                baseColor: "linear-gradient(135deg, #00c8ff, #0080ff)",
                intensity: .5,
                particleCount: 10,
                animation: "pulseBright 2.5s infinite",
                shadow: "0 0 10px rgba(0, 160, 255, 0.4)"
            },
            S: {
                shape: "polygon(50% 0%, 72% 10%, 90% 30%, 100% 55%, 90% 80%, 65% 100%, 35% 100%, 10% 80%, 0% 55%, 10% 30%, 28% 10%)",
                edges: 9,
                border: "linear-gradient(45deg, #5000ff, #00d8ff, #ff00d0)",
                glow: "rgba(128, 0, 255, 0.8)",
                baseColor: "linear-gradient(135deg, #7700ff, #00d8ff)",
                intensity: .8,
                particleCount: 24,
                animation: "pulseRank 1.2s infinite",
                shadow: "0 0 20px rgba(128, 0, 255, 0.5), 0 0 40px rgba(80, 0, 255, 0.3)",
                specialEffects: !0
            }
        }
          , o = i[t.currentRank]
          , s = t.nextRank ? i[t.nextRank] : null
          , r = document.getElementById("rankProgressContent");
        if (r.innerHTML = `
      <div class="solo-window-section">
        <div class="sl-system-header">
          <div class="sl-system-line"></div>
          <div class="sl-title">PLAYER RANK SYSTEM</div>
          <div class="sl-system-line"></div>
        </div>
        
        ${t.nextRank ? `
            <div class="rank-info">
              <div class="current-rank">
                <div class="sl-rank-container" data-particles="${o.particleCount}">
                  <div class="sl-rank-hex" style="--rank-shape: ${o.shape}; --rank-color: ${o.border}; --rank-base: ${o.baseColor}; --rank-intensity: ${o.intensity}; animation: ${o.animation};">
                    <span class="sl-rank-value">${t.currentRank}</span>
                    ${o.edges > 6 ? '<div class="sl-rank-inner"></div>' : ""}
              </div>
                </div>
                <div class="rank-label">CURRENT<br>RANK</div>
              </div>
              
              <div class="rank-arrow">
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <path d="M0 10 H30 M20 0 L30 10 L20 20" stroke="${s.border}" stroke-width="2" fill="none" />
                </svg>
              </div>
              
              <div class="next-rank">
                <div class="sl-rank-container" data-particles="${s.particleCount}">
                  <div class="sl-rank-hex" style="--rank-shape: ${s.shape}; --rank-color: ${s.border}; --rank-base: ${s.baseColor}; --rank-intensity: ${s.intensity}; animation: ${s.animation};">
                    <span class="sl-rank-value">${t.nextRank}</span>
                    ${s.edges > 6 ? '<div class="sl-rank-inner"></div>' : ""}
                  </div>
                </div>
                <div class="rank-label">TARGET<br>RANK</div>
              </div>
            </div>

            <div class="sl-requirements-section">
              <div class="sl-section-header">
                <span>ADVANCEMENT REQUIREMENTS</span>
                <div class="sl-header-line"></div>
              </div>
              
              <div class="sl-requirement-item">
                <div class="requirement-label">
                  <span class="requirement-title">Hunter Level</span>
                  <div class="requirement-hex-container">
                    <div class="requirement-hex-bg"></div>
                  <span class="requirement-value">${t.currentValues.level}/${t.requirements.level}</span>
              </div>
                </div>
                <div class="sl-progress-container">
                  <div class="sl-progress-bg">
                    <div class="sl-progress-bar" style="width: ${t.progress.level}%;"></div>
                  </div>
                  <div class="sl-progress-value">${t.progress.level}%</div>
              </div>
            </div>

              <div class="sl-requirement-item">
                <div class="requirement-label">
                  <span class="requirement-title">Quests Completed</span>
                  <div class="requirement-hex-container">
                    <div class="requirement-hex-bg"></div>
                  <span class="requirement-value">${t.currentValues.questsCompleted}/${t.requirements.quests}</span>
              </div>
                </div>
                <div class="sl-progress-container">
                  <div class="sl-progress-bg">
                    <div class="sl-progress-bar" style="width: ${t.progress.quests}%;"></div>
                  </div>
                  <div class="sl-progress-value">${t.progress.quests}%</div>
              </div>
            </div>

              <div class="sl-requirement-item">
                <div class="requirement-label">
                  <span class="requirement-title">Achievements</span>
                  <div class="requirement-hex-container">
                    <div class="requirement-hex-bg"></div>
                  <span class="requirement-value">${t.currentValues.achievements}/${t.requirements.achievements}</span>
              </div>
                </div>
                <div class="sl-progress-container">
                  <div class="sl-progress-bg">
                    <div class="sl-progress-bar" style="width: ${t.progress.achievements}%;"></div>
                  </div>
                  <div class="sl-progress-value">${t.progress.achievements}%</div>
              </div>
            </div>

              <div class="sl-requirement-item overall">
                <div class="requirement-label">
                  <span class="requirement-title">Overall Progress</span>
                  <div class="requirement-hex-container overall">
                    <div class="requirement-hex-bg"></div>
                  <span class="requirement-value">${t.progress.overall}%</span>
              </div>
              </div>
                <div class="sl-progress-container">
                  <div class="sl-progress-bg">
                    <div class="sl-progress-bar" style="width: ${t.progress.overall}%;"></div>
                  </div>
                  <div class="sl-progress-value">${t.progress.overall}%</div>
                </div>
              </div>
              
              <div class="sl-system-footer">
                <div class="sl-footer-line"></div>
                <div class="sl-footer-text">HUNTER ASSOCIATION</div>
                <div class="sl-footer-line"></div>
            </div>
          </div>
        ` : `
            <div class="sl-max-rank-message">
              <div class="sl-rank-container max" data-particles="${o.particleCount * 2}">
                <div class="sl-rank-hex max" style="--rank-shape: ${o.shape}; --rank-color: ${o.border}; --rank-base: ${o.baseColor}; --rank-intensity: ${o.intensity * 1.5}; animation: ${o.animation};">
                  <span class="sl-rank-value">${t.currentRank}</span>
                  ${o.edges > 6 ? '<div class="sl-rank-inner"></div>' : ""}
                </div>
                <div class="sl-max-rank-glow"></div>
              </div>
              <div class="sl-max-rank-text">
                <div class="sl-max-rank-header">MAXIMUM RANK ACHIEVED</div>
                <div class="sl-max-rank-congrats">Congratulations, Hunter.</div>
                <div class="sl-max-rank-status">STATUS: EXCEPTIONAL</div>
              </div>
              <div class="sl-system-footer">
                <div class="sl-footer-line"></div>
                <div class="sl-footer-text">HUNTER ASSOCIATION</div>
                <div class="sl-footer-line"></div>
            </div>
          </div>
        `}
        <div class="sl-system-glitch"></div>
      </div>
    `,
        !document.getElementById("soloLevelingRankStyles")) {
            const l = document.createElement("style");
            l.id = "soloLevelingRankStyles",
            l.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');
        
        #rankProgressWindow {
          background: rgba(8, 19, 34, 0.85) !important;
          border: 1px solid rgba(0, 160, 255, 0.6) !important;
          box-shadow: 0 0 15px rgba(0, 190, 255, 0.4), inset 0 0 20px rgba(0, 130, 255, 0.1) !important;
          font-family: 'Rajdhani', sans-serif !important;
        }
        
        #rankProgressWindow::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              transparent,
              transparent 2px,
              rgba(0, 128, 255, 0.03) 3px,
              transparent 4px
            );
          pointer-events: none;
          z-index: 0;
        }
        
        .solo-window-section {
          position: relative;
          color: #e0f7ff;
          z-index: 1;
        }
        
        .sl-system-header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .sl-title {
          font-size: 18px;
          font-weight: 600;
          color: #00a8ff;
          margin: 0 10px;
          text-shadow: 0 0 5px rgba(0, 168, 255, 0.7);
          letter-spacing: 1px;
        }
        
        .sl-system-line {
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(90deg, transparent, #00a8ff, transparent);
        }
        
        .rank-info {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 25px 0;
          gap: 15px;
        }
        
        .sl-rank-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          width: 80px;
          height: 80px;
        }
        
        .sl-rank-container .sl-rank-hex  {
          width: 70px;
          height: 70px;
          background: #0a1428;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          clip-path: var(--rank-shape);
          border: 2px solid var(--rank-color);
          box-shadow: 0 0 10px var(--rank-color);
          z-index: 2;
        }
        
        .sl-rank-hex::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          right: 3px;
          bottom: 3px;
          background: var(--rank-base);
          opacity: var(--rank-intensity);
          clip-path: var(--rank-shape);
          z-index: -1;
        }
        
        .sl-rank-inner {
          position: absolute;
          width: 60%;
          height: 60%;
          background: transparent;
          border: 1.5px solid var(--rank-color);
          opacity: 0.8;
          clip-path: var(--rank-shape);
          z-index: 1;
        }
        
        .sl-rank-value {
          font-size: 32px;
          font-weight: 700;
          color: var(--rank-color);
          text-shadow: 0 0 5px var(--rank-color);
          z-index: 2;
        }
        
        .rank-label {
          font-size: 12px;
          font-weight: 600;
          color: #88ccff;
          text-align: center;
          letter-spacing: 1px;
          margin-top: 8px;
        }
        
        .rank-arrow svg {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: drawArrow 2s forwards;
        }
        
        .sl-requirements-section {
          background: rgba(10, 20, 40, 0.4);
          border: 1px solid rgba(0, 160, 255, 0.3);
          border-radius: 5px;
          padding: 20px;
          position: relative;
          margin-top: 10px;
        }
        
        .sl-requirements-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 174, 255, 0.8), transparent);
          z-index: 1;
        }
        
        .sl-section-header {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          padding-bottom: 5px;
          border-bottom: 1px solid rgba(0, 160, 255, 0.3);
        }
        
        .sl-section-header span {
          font-size: 14px;
          font-weight: 600;
          color: #00a8ff;
          margin-right: 10px;
          letter-spacing: 1px;
        }
        
        .sl-header-line {
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(90deg, #00a8ff, transparent);
        }
        
        .sl-requirement-item {
          margin-bottom: 15px;
          padding: 10px;
          background: rgba(8, 20, 40, 0.5);
          border-radius: 5px;
          transition: all 0.2s ease;
        }
        
        .sl-requirement-item:hover {
          background: rgba(10, 30, 60, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }
        
        .requirement-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .requirement-title {
          font-size: 14px;
          font-weight: 500;
          color: #7bd5ff;
        }
        
        .requirement-hex-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 10px;
        }
        
        .requirement-hex-bg {
          width: 40px;
          height: 25px;
          background: rgba(0, 60, 120, 0.3);
          clip-path: polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%);
          position: absolute;
        }
        
        .requirement-value {
          font-size: 13px;
          font-weight: 600;
          color: #8ecfff;
          z-index: 1;
        }
        
        .sl-progress-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .sl-progress-bg {
          height: 6px;
          background: rgba(0, 40, 80, 0.4);
          border-radius: 3px;
          flex-grow: 1;
          position: relative;
          overflow: hidden;
        }
        
      .sl-progress-bar {
          height: 100%;
          width: 0; /* Start at 0 */
          background: linear-gradient(90deg, rgba(0, 160, 255, 0.5), #00d8ff);
          border-radius: 3px;
          position: relative;
          transition: width 0.3s ease;
          box-shadow: 0 0 5px rgba(0, 200, 255, 0.7);
        }
    
        
        .sl-progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 5px;
          background: #00d8ff;
          box-shadow: 0 0 10px #00d8ff;
          opacity: 0.8;
        }
        
        .sl-progress-value {
          font-size: 12px;
          font-weight: 600;
          color: #a0e0ff;
          min-width: 45px;
          text-align: left;
        }
        
        .sl-requirement-item.overall {
          background: rgba(0, 80, 160, 0.15);
          border: 1px solid rgba(0, 174, 255, 0.4);
        }
        
        .sl-max-rank-message {
        display: flex;
        flex-direction: column;
          align-items: center;
        justify-content: center;
          text-align: center;
          padding: 20px 0;
        }
        
        .sl-rank-container.max {
          transform: scale(1.4);
          margin: 20px 0 30px;
        }
        
        .sl-max-rank-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, #00d8ff 0%, transparent 70%);
          opacity: 0.2;
          animation: pulse 2s infinite;
          z-index: 1;
        }
        
        .sl-max-rank-text {
          margin-bottom: 20px;
        }
        
        .sl-max-rank-header {
          font-size: 18px;
          font-weight: 700;
          color: #00a8ff;
          margin-bottom: 10px;
          text-shadow: 0 0 5px rgba(0, 168, 255, 0.7);
          letter-spacing: 1px;
        }
        
        .sl-max-rank-congrats {
          font-size: 16px;
          color: #ffffff;
          margin-bottom: 5px;
        }
        
        .sl-max-rank-status {
          font-size: 14px;
          font-weight: 600;
          color: #7bd5ff;
          background: rgba(0, 80, 160, 0.3);
          display: inline-block;
          padding: 3px 10px;
          border-radius: 3px;
          margin-top: 10px;
        }
        
        .sl-system-footer {
          display: flex;
        align-items: center;
          justify-content: center;
          margin-top: 20px;
          padding: 5px 0;
        }
        
        .sl-footer-line {
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(90deg, transparent, rgba(0, 140, 255, 0.5), transparent);
        }
        
        .sl-footer-text {
          font-size: 12px;
          font-weight: 500;
          color: #5a9cd2;
          margin: 0 10px;
          letter-spacing: 1px;
        }
        
        .sl-system-glitch {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          z-index: 5;
          pointer-events: none;
          opacity: 0;
        }
        
        /* Rank particle effects */
        .sl-rank-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: var(--rank-color, #00a8ff);
          border-radius: 50%;
          opacity: 0;
          z-index: 1;
          box-shadow: 0 0 5px var(--rank-color, #00a8ff);
          animation: particleFloat 3s ease-in-out infinite;
        }
        
        /* Animations */
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes drawArrow {
          to { stroke-dashoffset: 0; }
        }
        
        
        
        @keyframes pulse {
          0% { opacity: 0.1; transform: scale(0.95); }
          50% { opacity: 0.3; transform: scale(1.05); }
          100% { opacity: 0.1; transform: scale(0.95); }
        }
        
        @keyframes pulseSoft {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
        
        @keyframes pulseBright {
          0% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.3); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        
        @keyframes rotateHex {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes particleFloat {
          0% { transform: translate(0, 0); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.5; }
          100% { transform: translate(var(--tx, 0), var(--ty, -30px)); opacity: 0; }
      
      `,
            document.head.appendChild(l)
        }
        b.showWindow("rankProgressWindow");
        const a = document.getElementById("rankProgressWindow");
        setInterval( () => {
            Math.random() > .9 && a.style.display !== "none" && (a.classList.add("glitching"),
            setTimeout( () => a.classList.remove("glitching"), 300))
        }
        , 2e3),
        document.querySelectorAll(".sl-rank-container").forEach(l => {
            const c = parseInt(l.getAttribute("data-particles") || "0")
              , p = l.querySelector(".sl-rank-hex")
              , f = getComputedStyle(p).getPropertyValue("--rank-color") || "#00a8ff";
            l.querySelectorAll(".sl-rank-particle").forEach(m => m.remove());
            for (let m = 0; m < c; m++) {
                const g = document.createElement("div");
                g.className = "sl-rank-particle";
                const y = Math.random() * Math.PI * 2
                  , w = 30 + Math.random() * 10
                  , v = 40 + Math.cos(y) * (Math.random() * 10)
                  , T = 40 + Math.sin(y) * (Math.random() * 10)
                  , E = Math.cos(y) * w
                  , C = Math.sin(y) * w;
                g.style.setProperty("--rank-color", f),
                g.style.setProperty("--tx", `${E}px`),
                g.style.setProperty("--ty", `${C}px`),
                g.style.left = `${v}px`,
                g.style.top = `${T}px`,
                g.style.animationDelay = `${Math.random() * 5}s`,
                l.appendChild(g)
            }
        }
        )
    } catch (n) {
        console.error("Error showing rank progress:", n),
        printToTerminal("Error showing rank progress: " + n.message, "error")
    }
}
async function et(n, e) {
    const t = Ce(e);
    if (t.nextRank && t.progress.overall >= 100) {
        const i = e.rank
          , o = t.nextRank;
        return await n.update({
            rank: o
        }),
        Rt(i, o),
        u.rank = o,
        showNotification(`🎉 Ranked Up to ${o} Rank! 🎉`),
        printToTerminal(`
=== RANK UP! ===`, "success"),
        printToTerminal(`Congratulations! You've achieved ${o} Rank!`, "success"),
        printToTerminal("Keep up the great work!", "success"),
        updateStatusBar(),
        b.updateWindowContent("profileWindow"),
        await checkAchievements(),
        Q.playVoiceLine("RANK_UP"),
        printToTerminal(`
🎉 RANK UP! You are now rank ${o}!`, "success"),
        !0
    }
    return !1
}
function Ce(n) {
    const e = n.rank || "E"
      , t = Object.keys(ze)
      , i = t.indexOf(e) + 1
      , o = i < t.length ? t[i] : null;
    if (!o)
        return {
            currentRank: e,
            nextRank: null,
            progress: {
                level: 100,
                quests: 100,
                achievements: 100,
                overall: 100
            }
        };
    const s = ze[o].requirements
      , r = Math.min(100, (n.level || 1) / s.level * 100)
      , a = Math.min(100, (n.questsCompleted || 0) / s.questsCompleted * 100)
      , d = Array.isArray(n.unlockedAchievements) ? n.unlockedAchievements.length : 0
      , l = Math.min(100, d / s.achievements * 100)
      , c = Math.min(100, (r + a + l) / 3);
    return console.log("Rank Progress Debug:", {
        level: n.level || 1,
        questsCompleted: n.questsCompleted || 0,
        achievementsCount: d,
        unlockedAchievements: n.unlockedAchievements
    }),
    {
        currentRank: e,
        nextRank: o,
        progress: {
            level: Math.round(r),
            quests: Math.round(a),
            achievements: Math.round(l),
            overall: Math.round(c)
        },
        requirements: {
            level: s.level,
            quests: s.questsCompleted,
            achievements: s.achievements
        },
        currentValues: {
            level: n.level || 1,
            questsCompleted: n.questsCompleted || 0,
            achievements: d
        }
    }
}
window.showRankProgress = le;
async function Dt() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    const e = (await x.collection("players").doc(h.uid).get()).data()
      , t = Ce(e);
    printToTerminal(`
=== RANK STATUS ===`, "system"),
    printToTerminal(`Current Rank: ${e.rank}`, "info"),
    t.nextRank ? (printToTerminal(`Next Rank: ${t.nextRank}`, "info"),
    printToTerminal(`
Requirements for next rank:`, "info"),
    printToTerminal(`Level: ${t.currentValues.level}/${t.requirements.level} (${Math.floor(t.progress.level)}%)`, "info"),
    printToTerminal(`Quests: ${t.currentValues.questsCompleted}/${t.requirements.questsCompleted} (${Math.floor(t.progress.quests)}%)`, "info"),
    printToTerminal(`Achievements: ${t.currentValues.achievements}/${t.requirements.achievements} (${Math.floor(t.progress.achievements)}%)`, "info"),
    printToTerminal(`
Overall Progress: ${Math.floor(t.progress.overall)}%`, "success")) : printToTerminal("Maximum rank achieved!", "success"),
    printToTerminal(`
Tip: Use !rankprogress to open detailed rank progress window`, "system")
}
function Qe() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    b.showWindow("BattleWindow")
}
const ge = {
    exp: -100,
    gold: -50
};
async function Se(n, e) {
    try {
        const t = n.collection("activeBattles").doc(e)
          , i = await t.get();
        if (!i.exists) {
            console.log(`No active battle found for boss ${e}.`);
            return
        }
        const o = i.data();
        if (o.penaltyApplied) {
            console.log(`Penalties already applied for boss ${e}.`);
            return
        }
        await t.update({
            processingPenalty: !0
        });
        const s = o.bossName || (G[e] ? G[e].name : "Unknown Boss")
          , r = new Date;
        await x.collection("notifications").add({
            userId: Y.currentUser.uid,
            title: "Boss Battle Failed",
            message: `Your battle against ${s} has timed out. Better luck next time!`,
            type: "defeat",
            timestamp: firebase.firestore.Timestamp.fromDate(r),
            read: !1
        });
        const a = await b.getUnreadNotificationsCount();
        b.updateNotificationBadge(a);
        const d = Math.max(0, u.gold + ge.gold);
        await n.update({
            gold: d
        }),
        u.gold = d,
        await t.update({
            penaltyApplied: !0
        }),
        await t.delete(),
        printToTerminal(`
⚠️ Boss Battle Failed: ${s}`, "error"),
        printToTerminal("Time's up! You've suffered penalties:", "error"),
        printToTerminal(`${ge.gold} Gold`, "error"),
        b.updateWindowContent("BattleWindow"),
        await re([Math.abs(ge.exp).toString()])
    } catch (t) {
        console.error("Error handling boss battle timeout:", t),
        printToTerminal("Error processing battle timeout: " + t.message, "error"),
        t.message.includes("No document to update") && console.warn(`Battle document for boss ${e} was already deleted or does not exist.`)
    }
}
window.calculateExpAfterPenalty = function(e, t, i) {
    e = Math.max(1, e),
    t = Math.max(0, t),
    i = Math.abs(i);
    let o = t - i
      , s = e;
    for (; o < 0 && s > 1; ) {
        s--;
        const r = getExpNeededForLevel(s);
        o += r
    }
    return s === 1 && o < 0 && (o = 0),
    {
        newLevel: s,
        newExp: o,
        levelsLost: e - s
    }
}
;
async function oe(n) {
    var i;
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    if (!n || n.length === 0) {
        printToTerminal("Usage: !challenge <boss_id>", "warning"),
        printToTerminal("Example: !challenge step_master", "info");
        return
    }
    const e = n[0]
      , t = Object.values(G).find(o => o.id === e);
    if (!t) {
        printToTerminal("Invalid boss battle ID.", "error");
        return
    }
    try {
        const o = x.collection("players").doc(h.uid);
        if ((await o.collection("activeBattles").doc(e).get()).exists) {
            printToTerminal(`You are already battling ${t.name}!`, "warning"),
            b.showWindow("BattleWindow");
            return
        }
        const d = ((i = (await o.get()).data().defeatedBosses) == null ? void 0 : i[e]) || 0
          , l = t.baseTargetCount + d * t.scaling.targetCount
          , c = t.rewards.exp + d * t.scaling.rewards.exp
          , p = t.rewards.gold + d * t.scaling.rewards.gold
          , f = new Date
          , m = new Date(f.getTime() + t.timeLimit);
        await o.collection("activeBattles").doc(e).set({
            bossId: e,
            bossName: t.name,
            currentCount: 0,
            targetCount: l,
            startTime: firebase.firestore.Timestamp.fromDate(f),
            endTime: firebase.firestore.Timestamp.fromDate(m),
            completed: !1
        }),
        await b.updateBattleWindow(),
        b.showWindow("BattleWindow"),
        printToTerminal(`
🗡️ Boss Battle Started: ${t.name}`, "success"),
        printToTerminal(`Target: ${l} ${t.metric}`, "info"),
        printToTerminal(`Time Limit: ${Xe(t.timeLimit)}`, "info"),
        printToTerminal(`
Rewards if victorious:`, "reward"),
        printToTerminal(`- ${c} XP`, "reward"),
        printToTerminal(`- ${p} Gold`, "reward"),
        printToTerminal(`- Title: ${t.rewards.title}`, "reward"),
        Q.playVoiceLine("BOSS_START"),
        printToTerminal(`Battle against ${t.name} has begun!`, "system")
    } catch (o) {
        printToTerminal("Error starting boss battle: " + o.message, "error")
    }
}
window.handleBossBattleTimeout = Se;
function qt(n) {
    return Math.floor(n.price * .5)
}
class _e {
    constructor(e) {
        this.audioContext = e,
        this.analyzer = this.audioContext.createAnalyser(),
        this.analyzer.fftSize = 256,
        this.isActive = !1,
        this.isProcessing = !1,
        this.scene = new P.Scene,
        this.camera = new P.PerspectiveCamera(75,window.innerWidth / window.innerHeight,.1,1e3),
        this.camera.position.z = 5,
        this.renderer = new P.WebGLRenderer({
            antialias: !0
        }),
        this.renderer.setSize(window.innerWidth, window.innerHeight),
        this.renderer.setPixelRatio(window.devicePixelRatio),
        this.renderer.domElement.style.position = "absolute",
        this.renderer.domElement.style.top = "0",
        this.renderer.domElement.style.left = "0",
        this.renderer.domElement.style.width = "100%",
        this.renderer.domElement.style.height = "100%",
        this.renderer.domElement.style.zIndex = "-1";
        const t = document.getElementById("soloContainer");
        document.body.appendChild(this.renderer.domElement);
        const i = new P.AmbientLight(16777215,.2);
        this.scene.add(i);
        const o = new P.DirectionalLight(16777215,1);
        o.position.set(1, 1, 1),
        this.scene.add(o);
        const s = new P.IcosahedronGeometry(2,1);
        this.geometry = s;
        const r = new P.MeshPhongMaterial({
            color: 245500,
            specular: 6710886,
            shininess: 10,
            transparent: !0,
            opacity: .5,
            wireframe: !1
        });
        this.sphere = new P.Mesh(s,r);
        const a = new P.WireframeGeometry(s)
          , d = new P.LineBasicMaterial({
            color: 245500,
            transparent: !0,
            opacity: .9
        })
          , l = new P.LineSegments(a,d);
        this.sphere.add(l),
        this.scene.add(this.sphere),
        this.originalPositions = [];
        const c = s.attributes.position.array;
        for (let p = 0; p < c.length; p += 3) {
            const f = c[p]
              , m = c[p + 1]
              , g = c[p + 2];
            this.originalPositions.push({
                x: f,
                y: m,
                z: g
            })
        }
        this.bufferLength = this.analyzer.frequencyBinCount,
        this.dataArray = new Uint8Array(this.bufferLength),
        this.animate = this.animate.bind(this),
        this.animate(),
        window.addEventListener("resize", () => {
            if (t) {
                const p = t.clientWidth
                  , f = t.clientHeight;
                this.renderer.setSize(p, f),
                this.camera.aspect = p / f,
                this.camera.updateProjectionMatrix()
            }
        }
        )
    }
    setActiveMode(e) {
        this.isActive = e
    }
    setProcessingMode(e) {
        this.isProcessing = e;
        const t = e ? 16776960 : 245500;
        this.sphere.material.color.set(t),
        this.sphere.children[0] && this.sphere.children[0].material.color.set(t)
    }
    updateWireframe() {
        this.sphere.children.length > 0 && this.sphere.remove(this.sphere.children[0]);
        const e = new P.WireframeGeometry(this.sphere.geometry)
          , t = new P.LineBasicMaterial({
            color: this.sphere.material.color.getHex(),
            transparent: !0,
            opacity: .9
        })
          , i = new P.LineSegments(e,t);
        this.sphere.add(i)
    }
    animate() {
        if (requestAnimationFrame(this.animate),
        this.isActive) {
            this.analyzer.getByteFrequencyData(this.dataArray);
            let e = 0;
            for (let d = 0; d < this.bufferLength; d++)
                e += this.dataArray[d];
            const t = e / this.bufferLength
              , i = 6
              , o = Math.floor(this.bufferLength / i)
              , s = [];
            for (let d = 0; d < i; d++) {
                let l = 0;
                const c = d * o
                  , p = d === i - 1 ? this.bufferLength : (d + 1) * o;
                for (let f = c; f < p; f++)
                    l += this.dataArray[f];
                s[d] = Math.pow(l / (p - c) / 255, .9) * .8
            }
            const r = this.sphere.geometry.attributes.position;
            for (let d = 0; d < this.originalPositions.length; d++) {
                const l = this.originalPositions[d]
                  , c = Math.sqrt(l.x * l.x + l.y * l.y + l.z * l.z)
                  , p = l.x / c
                  , f = l.y / c
                  , m = l.z / c
                  , g = Math.abs(p)
                  , y = Math.abs(f)
                  , w = Math.abs(m);
                let v = Math.floor(g * (i - 1))
                  , T = Math.floor(y * (i - 1))
                  , E = Math.floor(w * (i - 1));
                v = Math.min(Math.max(0, v), i - 1),
                T = Math.min(Math.max(0, T), i - 1),
                E = Math.min(Math.max(0, E), i - 1);
                const C = s[v] || 0
                  , L = s[T] || 0
                  , S = s[E] || 0
                  , N = 1 + (C * g + L * y + S * w) / (g + y + w) * .6;
                r.setXYZ(d, l.x * N, l.y * N, l.z * N)
            }
            r.needsUpdate = !0,
            this.updateWireframe();
            const a = Math.min(t / 128, 2);
            this.sphere.material.emissive.setRGB(a * .1, a * .1, a * .2)
        } else {
            const e = this.sphere.geometry.attributes.position;
            for (let t = 0; t < this.originalPositions.length; t++) {
                const i = this.originalPositions[t];
                e.setXYZ(t, i.x, i.y, i.z)
            }
            e.needsUpdate = !0,
            this.updateWireframe(),
            this.sphere.material.emissive.setRGB(0, 0, 0)
        }
        this.sphere.rotation.y += .001,
        this.sphere.rotation.x += .001,
        this.renderer.render(this.scene, this.camera)
    }
}
class Le {
    constructor() {
        this.initialized = !1,
        this.listening = !1,
        this.processing = !1,
        this.conversation = [],
        this.audioContext = null,
        this.visualizer = null,
        this.speechRecognition = null,
        this.openRouterKey = Ue.OPENROUTER_API_KEY,
        this.initUI(),
        this.initialize()
    }
    initUI() {
        this.elements = {
            startListeningBtn: document.getElementById("startListening"),
            stopListeningBtn: document.getElementById("stopListening"),
            clearChatBtn: document.getElementById("clearChat"),
            transcript: document.getElementById("transcript"),
            listeningIndicator: document.getElementById("listeningIndicator"),
            thinkingIndicator: document.getElementById("thinkingIndicator"),
            systemStatus: document.getElementById("systemStatus"),
            listeningStatus: document.getElementById("listeningStatus"),
            processingStatus: document.getElementById("processingStatus")
        },
        this.elements.startListeningBtn ? this.elements.startListeningBtn.addEventListener("click", () => this.startListening()) : console.error("Start listening button not found in DOM"),
        this.elements.stopListeningBtn ? this.elements.stopListeningBtn.addEventListener("click", () => this.stopListening()) : console.error("Stop listening button not found in DOM"),
        this.elements.clearChatBtn && this.elements.clearChatBtn.addEventListener("click", () => {
            this.elements.transcript && (this.elements.transcript.innerHTML = "",
            this.conversation = [])
        }
        )
    }
    async initialize() {
        this.updateDebug("system", "Initializing Solo AI System...");
        try {
            if (this.audioContext = new (window.AudioContext || window.webkitAudioContext),
            this.updateDebug("system", "Audio context initialized"),
            this.visualizer = new _e(this.audioContext),
            this.updateDebug("system", "Visualizer initialized"),
            "SpeechRecognition"in window || "webkitSpeechRecognition"in window) {
                const e = window.SpeechRecognition || window.webkitSpeechRecognition;
                this.speechRecognition = new e,
                this.speechRecognition.continuous = !0,
                this.speechRecognition.interimResults = !0,
                this.speechRecognition.lang = "en-US",
                this.speechRecognition.onstart = () => {
                    this.listening = !0,
                    this.updateListeningUI(!0),
                    this.updateDebug("speech", "Speech recognition started"),
                    console.log("Speech recognition started successfully")
                }
                ,
                this.speechRecognition.onend = () => {
                    if (console.log("Speech recognition ended, listening state:", this.listening),
                    this.listening)
                        try {
                            this.speechRecognition.start(),
                            this.updateDebug("speech", "Speech recognition restarted")
                        } catch (t) {
                            console.error("Failed to restart speech recognition:", t),
                            this.listening = !1,
                            this.updateListeningUI(!1)
                        }
                    else
                        this.updateListeningUI(!1),
                        this.updateDebug("speech", "Speech recognition stopped")
                }
                ,
                this.speechRecognition.onresult = t => {
                    const i = t.results[t.results.length - 1];
                    if (i.isFinal) {
                        const o = i[0].transcript.trim();
                        o && (console.log("Recognized speech:", o),
                        this.handleUserInput(o))
                    }
                }
                ,
                this.speechRecognition.onerror = t => {
                    console.error("Speech recognition error:", t.error),
                    this.updateDebug("speech", "Speech recognition error: " + t.error),
                    (t.error === "not-allowed" || t.error === "service-not-allowed") && (this.addMessage("system", "Microphone access denied. Please allow microphone access in your browser settings."),
                    this.listening = !1,
                    this.updateListeningUI(!1))
                }
                ,
                this.updateDebug("speech", "Speech recognition initialized")
            } else
                this.updateDebug("speech", "Speech recognition not supported in this browser"),
                this.addMessage("system", "Speech recognition is not supported in your browser.");
            this.initialized = !0,
            this.updateDebug("system", "SOLO AI System initialized and ready")
        } catch (e) {
            console.error("Error initializing SOLO AI system:", e),
            this.updateDebug("system", "Error initializing: " + e.message)
        }
    }
    async startListening() {
        if (console.log("Start listening called, initialized:", this.initialized),
        !this.initialized)
            try {
                await this.initialize()
            } catch {
                this.addMessage("system", "Failed to initialize. Please refresh and try again.");
                return
            }
        if (!this.speechRecognition) {
            this.addMessage("system", "Speech recognition not available in your browser");
            return
        }
        if (this.listening) {
            console.log("Already listening, no need to start again");
            return
        }
        try {
            console.log("Requesting microphone permission..."),
            this.restartAttempts = 0,
            (await navigator.mediaDevices.getUserMedia({
                audio: !0
            })).getTracks().forEach(t => t.stop()),
            this.listening = !0,
            this.updateListeningUI(!0);
            try {
                this.speechRecognition.start(),
                console.log("Speech recognition started")
            } catch (t) {
                console.error("Error starting speech recognition:", t),
                t.name === "InvalidStateError" && t.message.includes("already started") ? console.log("Speech recognition was already running") : (this.addMessage("system", "Error starting speech recognition: " + t.message),
                this.listening = !1,
                this.updateListeningUI(!1))
            }
        } catch (e) {
            console.error("Microphone permission error:", e),
            this.addMessage("system", "Microphone access denied. Please allow microphone access and try again."),
            this.listening = !1,
            this.updateListeningUI(!1)
        }
    }
    stopListening() {
        if (console.log("Stop listening called, current state:", this.listening),
        this.restartTimeout && (clearTimeout(this.restartTimeout),
        this.restartTimeout = null),
        this.listening = !1,
        this.restartAttempts = 0,
        this.speechRecognition)
            try {
                this.speechRecognition.stop(),
                console.log("Speech recognition stopped")
            } catch (e) {
                console.error("Error stopping speech recognition:", e),
                e.name === "InvalidStateError" && (console.log("Recreating speech recognition object"),
                this.recreateSpeechRecognition())
            }
        this.updateListeningUI(!1),
        this.updateDebug("speech", "Microphone deactivated")
    }
    recreateSpeechRecognition() {
        if ("SpeechRecognition"in window || "webkitSpeechRecognition"in window) {
            const e = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.speechRecognition && (this.speechRecognition.onstart = null,
            this.speechRecognition.onend = null,
            this.speechRecognition.onresult = null,
            this.speechRecognition.onerror = null),
            this.speechRecognition = new e,
            this.speechRecognition.continuous = !0,
            this.speechRecognition.interimResults = !0,
            this.speechRecognition.lang = "en-US",
            this.speechRecognition.onstart = () => {
                this.listening = !0,
                this.updateListeningUI(!0),
                this.updateDebug("speech", "Speech recognition started"),
                console.log("Speech recognition started successfully")
            }
            ,
            this.speechRecognition.onend = () => {
                if (console.log("Speech recognition ended, listening state:", this.listening),
                this.listening)
                    if (this.restartAttempts < this.maxRestartAttempts) {
                        this.restartAttempts++,
                        console.log(`Restart attempt ${this.restartAttempts}/${this.maxRestartAttempts}`);
                        const t = 300 * this.restartAttempts;
                        this.updateDebug("speech", `Will restart in ${t}ms, attempt ${this.restartAttempts}`),
                        this.restartTimeout && clearTimeout(this.restartTimeout),
                        this.restartTimeout = setTimeout( () => {
                            if (this.listening)
                                try {
                                    this.speechRecognition.start(),
                                    this.updateDebug("speech", "Speech recognition restarted")
                                } catch (i) {
                                    console.error("Failed to restart speech recognition:", i),
                                    this.restartAttempts >= this.maxRestartAttempts && (console.log("Giving up on restarting speech recognition"),
                                    this.listening = !1,
                                    this.updateListeningUI(!1),
                                    this.addMessage("system", "Speech recognition failed to restart. Please try again."))
                                }
                        }
                        , t)
                    } else
                        console.log("Maximum restart attempts exceeded"),
                        this.listening = !1,
                        this.updateListeningUI(!1);
                else
                    this.updateListeningUI(!1),
                    this.updateDebug("speech", "Speech recognition stopped")
            }
            ,
            this.speechRecognition.onresult = t => {
                this.restartAttempts = 0;
                const i = t.results[t.results.length - 1];
                if (i.isFinal) {
                    const o = i[0].transcript.trim();
                    o && (console.log("Recognized speech:", o),
                    this.handleUserInput(o))
                }
            }
            ,
            this.speechRecognition.onerror = t => {
                console.error("Speech recognition error:", t.error),
                this.updateDebug("speech", "Speech recognition error: " + t.error),
                t.error === "not-allowed" || t.error === "service-not-allowed" ? (this.addMessage("system", "Microphone access denied. Please allow microphone access in your browser settings."),
                this.listening = !1,
                this.updateListeningUI(!1)) : t.error === "aborted" || this.restartAttempts++
            }
            ,
            console.log("Speech recognition object recreated")
        }
    }
    updateListeningUI(e) {
        this.elements && (this.elements.listeningStatus && (this.elements.listeningStatus.className = e ? "status-dot active" : "status-dot inactive"),
        this.elements.listeningIndicator && (e ? this.elements.listeningIndicator.classList.add("active") : this.elements.listeningIndicator.classList.remove("active")),
        this.elements.startListeningBtn && (this.elements.startListeningBtn.style.display = e ? "none" : "flex"),
        this.elements.stopListeningBtn && (this.elements.stopListeningBtn.style.display = e ? "flex" : "none"),
        this.visualizer && this.visualizer.setActiveMode(e),
        console.log("UI updated, listening state:", e))
    }
    updateProcessingUI(e) {
        this.processing = e,
        this.elements && (this.elements.processingStatus && (this.elements.processingStatus.className = e ? "status-dot active" : "status-dot inactive"),
        this.elements.thinkingIndicator && this.elements.thinkingIndicator.classList.toggle("active", e),
        this.visualizer && this.visualizer.setProcessingMode(e))
    }
    async initialize() {
        this.updateDebug("system", "Initializing Solo AI System...");
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext),
            this.updateDebug("system", "Audio context initialized"),
            this.visualizer = new _e(this.audioContext),
            this.updateDebug("system", "Visualizer initialized"),
            this.recreateSpeechRecognition(),
            this.initialized = !0,
            this.updateDebug("system", "SOLO AI System initialized and ready")
        } catch (e) {
            console.error("Error initializing SOLO AI system:", e),
            this.updateDebug("system", "Error initializing: " + e.message)
        }
    }
    extractQuestDetails(e) {
        const t = e.match(/create daily quest to (.+) (\d+) (\w+)/i);
        return t ? {
            type: "daily",
            title: t[1],
            count: parseInt(t[2], 10),
            metric: t[3],
            description: "Auto-generated daily quest via AI"
        } : null
    }
    extractWindowId(e) {
        return Object.keys(b.windows).find(i => e.toLowerCase().includes(i.toLowerCase()))
    }
    extractBossId(e) {
        const t = e.match(/start boss battle against (\w+)/i);
        return t ? t[1] : null
    }
    async handleUserInput(e) {
        var t;
        if (!this.processing) {
            this.addMessage("user", e),
            this.updateProcessingUI(!0);
            try {
                let i, o = !1;
                const s = e.toLowerCase();
                if (s.includes("create daily quest") || s.includes("create quest") || s.includes("create normal quest")) {
                    if (!k) {
                        i = "You must authenticate first with !reawaken.",
                        this.addMessage("ai", i),
                        await this.speakResponse(i),
                        this.updateProcessingUI(!1);
                        return
                    }
                    if (i = await this.callDeepSeekAPI(e, this.formatConversationForDeepSeek()),
                    console.log("AI Response:", i),
                    i.includes("quest created") || i.includes("Quest created")) {
                        const r = this.parseAIQuestResponse(i);
                        if (console.log("Parsed Quest Details:", r),
                        r) {
                            r.type === "quest" && (r.type = "normal",
                            console.log('Normalized quest type from "quest" to "normal"')),
                            console.log("Sending quest to createQuest:", r);
                            const a = await window.createQuest(r);
                            console.log("Quest ID from createQuest:", a),
                            a ? (i = `I've created a ${r.type === "daily" ? "daily" : "normal"} quest for you: "${r.title}". Complete ${r.count} ${r.metric} to earn rewards!`,
                            console.log(`Created ${r.type} quest:`, r)) : i = "Failed to save the quest to the database. Please try again."
                        } else
                            i = "I had trouble creating the quest. Please try again with a more specific request.",
                            console.log("Failed to parse quest details from response")
                    } else
                        i = this.cleanTechnicalContent(i);
                    o = !0
                } else if (s.includes("complete daily quest") || s.includes("complete quest") || s.includes("complete normal quest")) {
                    if (!Y.currentUser) {
                        i = "You must authenticate first with !reawaken.",
                        await this.speakResponse(i),
                        this.updateProcessingUI(!1);
                        return
                    }
                    let r = "normal";
                    s.includes("daily") && (r = "daily");
                    let a = "";
                    if (r === "daily" ? a = e.replace(/complete\s+daily\s+quest\s+/i, "").trim() : a = e.replace(/complete\s+(normal\s+)?quest\s+/i, "").trim(),
                    console.log(`Quest completion requested - Type: ${r}, Identifier: "${a}"`),
                    !a)
                        i = `Please specify which ${r} quest you want to complete.`;
                    else {
                        const d = await this.findQuestIdByTitle(a, r);
                        if (d) {
                            console.log(`Completing ${r} quest with ID: ${d}`);
                            const c = ((t = (r === "daily" ? await window.fetchDailyQuests() : await window.fetchNormalQuests())[d]) == null ? void 0 : t.title) || a
                              , p = await window.completeQuest(d, r);
                            p && p.success ? (i = `${r === "daily" ? "Daily" : "Normal"} quest "${c}" completed successfully! You earned ${p.expGained || 0} XP and ${p.goldGained || 0} gold.`,
                            r === "daily" ? b.updateDailyQuestsWindow() : b.updateQuestsWindow(),
                            updateStatusBar()) : i = `Failed to complete ${r} quest "${c}". ${(p == null ? void 0 : p.error) || "Please try again."}`
                        } else
                            console.log(`No matching ${r} quest found for: "${a}"`),
                            i = `I couldn't find a ${r} quest matching "${a}". Please check your active quests with !qid.`
                    }
                    o = !0
                } else
                    i = await this.callDeepSeekAPI(e, this.formatConversationForDeepSeek()),
                    o = !0;
                o && await this.speakResponse(i)
            } catch (i) {
                console.error("Error in handleUserInput:", i),
                await this.speakResponse("Sorry, I encountered an error processing your request.")
            } finally {
                this.updateProcessingUI(!1)
            }
        }
    }
    async callDeepSeekAPI(e, t=[]) {
        var i;
        try {
            let o = {};
            if (h && k) {
                const g = x.collection("players").doc(h.uid)
                  , y = await g.get();
                y.exists && (o = y.data());
                const w = await g.collection("dailyQuests").get()
                  , v = await g.collection("quests").get();
                o.dailyQuests = w.docs.map(T => ({
                    id: T.id,
                    ...T.data()
                })),
                o.normalQuests = v.docs.map(T => ({
                    id: T.id,
                    ...T.data()
                }))
            }
            const s = ((i = u == null ? void 0 : u.profile) == null ? void 0 : i.name) || "Hunter";
            let r = [];
            h && k && (r = (await x.collection("players").doc(h.uid).collection("notes").get()).docs.map(y => {
                var w, v;
                return {
                    id: y.id,
                    title: y.data().title,
                    content: y.data().content,
                    createdAt: (w = y.data().createdAt) == null ? void 0 : w.toDate().toISOString(),
                    lastModified: (v = y.data().lastModified) == null ? void 0 : v.toDate().toISOString()
                }
            }
            ));
            const a = {
                ...o,
                notes: r
            }
              , d = g => {
                const y = new Date
                  , w = new Date(g)
                  , v = y - w
                  , T = Math.floor(v / (1e3 * 60 * 60 * 24));
                return T === 0 ? "Now" : `${T}d ago`
            }
              , c = [{
                role: "system",
                content: `You are SOLO, a SOlo leveling system inspired companion dedicated to "${s}"—that's me! You're here to help, and do whatever I ask, with a genuine interest in everything I say.  do not use emojis. do not be happy and stuff, be serious, not too cold tho.
                  Data: ${JSON.stringify(a)}. Purpose: Support me, answer my questions, and make things fun!  
        
                  - **Data Access**: Level, exp, gold, rank, quests (daily/normal), notes (id, title, content, createdAt, lastModified). Use it whenever I ask or when it fits the convo.  
                  - **Style**:  
                    - Casual, warm, and conversational—like talking to a friend.  
                    - Markup: **text** for bold, &RED&text&RED& for red, &BLUE&text&BLUE& for blue, &GREEN&text&GREEN& for green—keep it playful when it fits.  
                    - Emphasize: **Fun**, **Ideas**, &GREEN&Success&GREEN&, &BLUE&Cool stuff&BLUE&.  
                    - Timestamps: "Just now," "A bit ago," "Yesterday"—keep it chill.  
                    - Borders: Optional, but if used, keep it light like == Hey! == or === Done! ===.  
                  - **Quests**:  
                    - "create daily quest [task] [count] [metric]": "== Hey! == | **${s}'s Daily Adventure: [task]** | Do [count] [metric] | Let's make it happen!"  
                    - "create quest [task] [count] [metric]": "== Cool Quest Alert! == | **${s}'s Challenge: [task]** | Hit [count] [metric] | You've got this!"  
                    - Titles: Keep it personal and fun—like "${s}'s Great Run" or "${s}'s Epic Push." Metrics: km, reps, min, etc.  
                  - **Completion**:  
                    - "complete [daily] quest [title or id]": "== &GREEN&Sweet!&GREEN& == | **Nailed it!** | [title or id] | Awesome job—what's next?"  
                  - **Commands**: [!switch, !commands, !reawaken, !quests, !dailyquests, !clear, !sleep, !leaderboard, !achievements, !profile, !inventory, !shop, !addxp, !reset, !update, !battle, !challenge, !progress, !waterDrank, !waterStatus, !motivation, !setname, !settitle, !setbio, !setclass, !rank, !rankprogress, !penalty, !delete, !qid, !notifications, !note, !quicknote, !notes, !shownotes, !hidenotes]—Handle these with enthusiasm like "You got it!"  
                  `
            }, ...t]
              , f = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.openRouterKey}`,
                    "HTTP-Referer": "http://localhost",
                    "X-Title": "SOLO AI System",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "google/gemini-pro:latest",
                    messages: c,
                    temperature: .2,
                    top_p: .9
                })
            });
            if (!f.ok) {
                const g = await f.text();
                throw console.error("API response:", g),
                new Error(`API request failed with status ${f.status}: ${g.substring(0, 100)}`)
            }
            const m = await f.json();
            if (!m.choices || !m.choices[0] || !m.choices[0].message)
                throw console.error("Unexpected API response structure:", m),
                new Error("Invalid API response structure");
            return m.choices[0].message.content.trim()
        } catch (o) {
            return console.error("Error calling DeepSeek API:", o),
            "|- &RED&Connection error&RED& -| API endpoint issue. Please check your OpenRouter configuration."
        }
    }
    addMessage(e, t) {
        if (this.conversation.length > 0 && this.conversation[this.conversation.length - 1].text === t)
            return;
        this.conversation.push({
            type: e,
            text: t
        });
        const i = document.createElement("div");
        if (i.style.marginBottom = "10px",
        e === "user")
            i.innerHTML = `<strong>You:</strong> ${t}`;
        else if (e === "ai") {
            const o = this.renderSOLOText(t);
            i.innerHTML = `<strong>AI:</strong> ${o}`
        } else
            i.innerHTML = `<strong>System:</strong> ${t}`;
        this.elements.transcript.appendChild(i),
        this.elements.transcript.scrollTop = this.elements.transcript.scrollHeight
    }
    renderSOLOText(e) {
        return e.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/&RED&(.*?)&RED&/g, '<span style="color: red">$1</span>').replace(/&BLUE&(.*?)&BLUE&/g, '<span style="color: blue">$1</span>').replace(/&GOLD&(.*?)&GOLD&/g, '<span style="color: #EFBF04">$1</span>').replace(/&GREEN&(.*?)&GREEN&/g, '<span style="color: green">$1</span>').replace(/&ITALIC&(.*?)&ITALIC&/g, "<em>$1</em>").replace(/&UNDERLINE&(.*?)&UNDERLINE&/g, "<u>$1</u>").replace(/&STRIKE&(.*?)&STRIKE&/g, " $1 ").replace(/&LINK&([^&]+)&LINK&/g, '<a href="$1" target="_blank">$1</a>')
    }
    formatConversationForDeepSeek() {
        const e = [];
        e.push({
            role: "system",
            content: `You are SOLO, an AI assistant for a fitness app inspired by Solo Leveling. You can control the app by:
        - Creating quests: You MUST respond differently based on the quest type:
          1. For "create daily quest [task] [count] [metric]":
             Respond: "Daily quest created. type: daily, title: [epic title], count: [count], metric: [short metric], description: [short thematic description]."
          2. For "create quest [task] [count] [metric]":
             Respond: "Quest created. type: quest, title: [epic title], count: [count], metric: [short metric], description: [short thematic description]."
          - Pick an epic, Solo Leveling-style title (e.g., "The Speed Monarch" for running, "Iron Fist Sovereign" for pushups).
          - Use short metric forms: "km" for kilometers, "ml" for milliliters, "reps" for repetitions (pushups/situps/squats), "steps" for steps, "min" for minutes.
          - Keep descriptions concise and thematic (e.g., "Sprint like a monarch over 5 km").
          - Examples:
            - "create daily quest run 5 kilometers" -> "Daily quest created. type: daily, title: The Speed Monarch, count: 5, metric: km, description: Sprint like a monarch over 5 km."
            - "create quest do 100 pushups" -> "Quest created. type: quest, title: Iron Fist Sovereign, count: 100, metric: reps, description: Crush 100 foes with your fists."
        - Completing quests: When asked to "complete [daily] quest [title or id]":
          - Respond: "Quest completed! type: [daily/quest], questId: [provided id or 'lookup']"
          - If no ID is provided, use 'lookup' and let the app handle finding the quest by title.
          - Examples:
            - "complete daily quest The Speed Monarch" -> "Quest completed! type: daily, questId: lookup"
            - "complete quest abc123" -> "Quest completed! type: quest, questId: abc123"
        Keep responses concise and avoid markdown or emojis outside of the technical blocks for parsing. Do not use emojis unless asked to. Try to be mysterious and short with small talk.`
        });
        const t = this.conversation.slice(-10);
        for (const i of t)
            i.type === "user" ? e.push({
                role: "user",
                content: i.text
            }) : i.type === "ai" && e.push({
                role: "assistant",
                content: i.text
            });
        return e
    }
    parseAIQuestResponse(e) {
        var o, s, r, a, d, l, c, p, f;
        try {
            const m = e.match(/\{[\s\S]*\}/);
            if (m) {
                const g = JSON.parse(m[0]);
                if (g.title && g.targetCount && g.metric)
                    return g
            }
        } catch {
            console.log("JSON parsing failed, trying other methods")
        }
        try {
            const m = (s = (o = e.match(/title[\s:"']*([^"',\n]+)/i)) == null ? void 0 : o[1]) == null ? void 0 : s.trim()
              , g = (a = (r = e.match(/description[\s:"']*([^"',\n]+)/i)) == null ? void 0 : r[1]) == null ? void 0 : a.trim()
              , y = parseInt(((d = e.match(/target(?:Count)?[\s:"']*(\d+)/i)) == null ? void 0 : d[1]) || "0", 10)
              , w = (c = (l = e.match(/metric[\s:"']*([^"',\n]+)/i)) == null ? void 0 : l[1]) == null ? void 0 : c.trim()
              , v = ((f = (p = e.match(/type[\s:"']*([^"',\n]+)/i)) == null ? void 0 : p[1]) == null ? void 0 : f.trim()) || "normal";
            if (m && y && w)
                return {
                    title: m,
                    description: g || `Complete ${y} ${w}`,
                    targetCount: y,
                    metric: w,
                    type: v
                }
        } catch {
            console.log("Flexible pattern matching failed")
        }
        const t = e.match(/(\d+)\s*([a-zA-Z]+)/);
        if (t)
            return {
                title: e.split(`
`)[0].trim() || "Quest",
                description: e.substring(0, 100),
                targetCount: parseInt(t[1], 10),
                metric: t[2],
                type: "normal"
            };
        const i = e.split(`
`);
        return i.length > 0 ? {
            title: i[0].trim() || "New Quest",
            description: i.length > 1 ? i[1].trim() : "Complete this quest",
            targetCount: 5,
            metric: "times",
            type: "normal"
        } : null
    }
    parseAICompletionResponse(e) {
        console.log("Parsing completion response:", e);
        const t = e.match(/\*\*(.*?)\*\*/);
        if (t) {
            const s = t[1];
            console.log("Technical completion content:", s);
            const r = s.match(/type:\s*(daily|quest|normal),\s*(id|questId|title):\s*([^,]+)(?:,|$)/i);
            if (r) {
                let a = r[1].trim().toLowerCase();
                const d = r[2].trim().toLowerCase()
                  , l = r[3].trim();
                return {
                    type: a,
                    [d]: l,
                    questId: d === "id" || d === "questid" ? l : "lookup",
                    title: d === "title" ? l : null
                }
            }
        }
        const i = e.toLowerCase().match(/complete(?:d)?\s+daily\s+quest\s+(?:"|'|called\s+|titled\s+)?([^"'\.\?!]+)/i)
          , o = e.toLowerCase().match(/complete(?:d)?\s+(?:normal\s+)?quest\s+(?:"|'|called\s+|titled\s+)?([^"'\.\?!]+)/i);
        return i ? {
            type: "daily",
            title: i[1].trim(),
            questId: "lookup"
        } : o ? {
            type: "normal",
            title: o[1].trim(),
            questId: "lookup"
        } : null
    }
    async findQuestIdByTitle(e, t) {
        console.log(`Finding quest ID for: "${e}" of type: ${t}`);
        let i = e;
        const o = ["complete quest", "complete daily quest", "complete normal quest", "finish quest", "finish daily quest", "finish normal quest", "mark quest", "mark daily quest", "mark normal quest"];
        for (const s of o)
            if (e.toLowerCase().includes(s)) {
                i = e.toLowerCase().replace(s, "").trim();
                break
            }
        console.log(`Extracted quest title: "${i}"`);
        try {
            let s;
            if (t === "daily" ? s = await window.fetchDailyQuests() : s = await window.fetchNormalQuests(),
            console.log(`Available ${t} quests:`, s),
            Object.keys(s).length === 0)
                return console.log(`No ${t} quests found in database.`),
                null;
            for (const [r,a] of Object.entries(s))
                if (a.title && a.title.toLowerCase().includes(i.toLowerCase()))
                    return console.log(`Found matching ${t} quest: ${a.title} (ID: ${r})`),
                    r;
            return console.log(`No matching ${t} quest found for: "${i}"`),
            null
        } catch (s) {
            return console.error(`Error finding quest ID for "${i}":`, s),
            null
        }
    }
    cleanTechnicalContent(e) {
        return e.replace(/\*\*.*?\*\*/g, "").trim()
    }
    async speakResponse(e) {
        try {
            this.updateDebug("audio", "Using robotic speech synthesis..."),
            this.conversation.push({
                type: "ai",
                text: e
            });
            const t = document.createElement("div");
            t.style.marginBottom = "10px",
            t.innerHTML = "<strong>AI:</strong> ",
            this.elements.transcript.appendChild(t),
            this.elements.transcript.scrollTop = this.elements.transcript.scrollHeight,
            At(e, t, 250);
            const i = new SpeechSynthesisUtterance(e);
            i.pitch = .1,
            i.rate = 1.1,
            i.volume = 1;
            const o = e.replace(/\. /g, "... ").replace(/\, /g, "... ");
            i.text = o;
            const r = window.speechSynthesis.getVoices().find(a => a.name.includes("Microsoft") || a.name.includes("Google") || a.name.includes("English") || a.name.includes("US"));
            r && (i.voice = r),
            this.visualizer && this.visualizer.setActiveMode(!0),
            i.onstart = () => {
                this.updateDebug("audio", "Robotic speech started")
            }
            ,
            i.onend = () => {
                this.updateDebug("audio", "Robotic speech completed"),
                this.visualizer && this.visualizer.setActiveMode(!1)
            }
            ,
            i.onerror = a => {
                console.error("Speech synthesis error:", a),
                this.updateDebug("audio", "Speech error: " + a.error)
            }
            ,
            window.speechSynthesis.speak(i)
        } catch (t) {
            console.error("Speech synthesis error:", t),
            this.updateDebug("audio", "Error generating speech: " + t.message),
            this.conversation.some(i => i.type === "ai" && i.text === e) || this.addMessage("ai", e)
        }
    }
    addMessage(e, t) {
        if (this.conversation.length > 0 && this.conversation[this.conversation.length - 1].text === t)
            return;
        this.conversation.push({
            type: e,
            text: t
        });
        const i = document.createElement("div");
        i.style.marginBottom = "10px",
        e === "user" ? i.innerHTML = `<strong>You:</strong> ${t}` : e === "ai" ? i.innerHTML = `<strong>AI:</strong> ${t}` : i.innerHTML = `<strong>System:</strong> ${t}`,
        this.elements.transcript.appendChild(i),
        this.elements.transcript.scrollTop = this.elements.transcript.scrollHeight
    }
    updateDebug(e, t) {
        const i = {
            system: document.getElementById("debugSystem"),
            speech: document.getElementById("debugSpeech"),
            api: document.getElementById("debugAPI"),
            audio: document.getElementById("debugAudio")
        };
        i[e] && (i[e].textContent = t)
    }
}
document.addEventListener("DOMContentLoaded", () => {
    new Le
}
);
function At(n, e, t) {
    const i = n.split(" ");
    let o = 0
      , s = e.innerHTML;
    const r = () => {
        if (o < i.length) {
            const a = i[o];
            s += a + " ";
            const d = a.slice(-1);
            let l = t;
            ["!", ".", "?", "..."].includes(d) && (l = 1250),
            e.innerHTML = s,
            o++,
            setTimeout(r, l)
        }
    }
    ;
    r()
}
window.startBossBattle = oe;
window.updateBattleProgress = we;
window.windowSystem = b;
function xe() {
    const n = document.querySelector(".terminal-container");
    n && (n.style.display === "block" || n.style.display === "" ? n.style.display = "none" : n.style.display = "block")
}
document.getElementById("toggleTerminal").addEventListener("click", xe);
window.createQuest = createQuest;
window.completeQuest = completeQuest;
window.autoCompleteQuests = yt;
window.startBossBattle = oe;
window.showInventory = ie;
window.showShop = showShop;
window.showAchievements = ye;
window.showRankProgress = le;
window.showSetNamePrompt = function() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    const e = document.getElementById("setNameContent");
    e.innerHTML = `
    <div class="window-section">
      <div class="window-item">
<input type="text" id="nameInput" class="modal-input" placeholder="Enter your name" maxlength="20" value="${u.profile.name || ""}">      </div>
      <div class="window-actions">
        <button id="setNameSubmit" class="window-button">Submit</button>
        <button id="setNameCancel" class="window-button danger">Cancel</button>
      </div>
    </div>
  `,
    document.getElementById("setNameSubmit").addEventListener("click", async () => {
        const t = document.getElementById("nameInput").value.trim();
        t && (await window.setPlayerName([t]),
        printToTerminal("Name changed successfully!", "success"),
        showNotification("Name updated!"),
        b.updateWindowContent("profileWindow"),
        b.closeWindow("setNameWindow"))
    }
    ),
    document.getElementById("setNameCancel").addEventListener("click", () => {
        b.closeWindow("setNameWindow")
    }
    ),
    b.showWindow("setNameWindow")
}
;
window.showSetTitlePrompt = function() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    const e = document.getElementById("setTitleContent");
    e.innerHTML = `
    <div class="window-section">
      <div class="window-item">
        <input type="text" id="titleInput" class="modal-input" placeholder="Enter your title" maxlength="30" value="${u.profile.title || ""}">
      </div>
      <div class="window-actions">
        <button id="setTitleSubmit" class="window-button">Submit</button>
        <button id="setTitleCancel" class="window-button danger">Cancel</button>
      </div>
    </div>
  `,
    document.getElementById("setTitleSubmit").addEventListener("click", async () => {
        const t = document.getElementById("titleInput").value.trim();
        t && (await setPlayerTitle([t]),
        printToTerminal("Title changed successfully!", "success"),
        showNotification("Title updated!"),
        b.updateWindowContent("profileWindow"),
        b.closeWindow("setTitleWindow"))
    }
    ),
    document.getElementById("setTitleCancel").addEventListener("click", () => {
        b.closeWindow("setTitleWindow")
    }
    ),
    b.showWindow("setTitleWindow")
}
;
window.showSetClassPrompt = function() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    const e = AVAILABLE_CLASSES.map(i => `<option value="${i}" ${u.profile.class === i ? "selected" : ""}>${i}</option>`).join("")
      , t = document.getElementById("setClassContent");
    t.innerHTML = `
    <div class="window-section">
      <div class="window-item">
        <select id="classInput" class="modal-input">${e}</select>
      </div>
      <div class="window-actions">
        <button id="setClassSubmit" class="window-button">Submit</button>
        <button id="setClassCancel" class="window-button danger">Cancel</button>
      </div>
    </div>
  `,
    document.getElementById("setClassSubmit").addEventListener("click", async () => {
        const i = document.getElementById("classInput").value;
        await setPlayerClass([i]),
        printToTerminal("Class changed successfully!", "success"),
        showNotification("Class updated!"),
        b.updateWindowContent("profileWindow"),
        b.closeWindow("setClassWindow")
    }
    ),
    document.getElementById("setClassCancel").addEventListener("click", () => {
        b.closeWindow("setClassWindow")
    }
    ),
    b.showWindow("setClassWindow")
}
;
window.showSetBioPrompt = function() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    const e = document.getElementById("setBioContent");
    e.innerHTML = `
    <div class="window-section">
      <div class="window-item">
        <textarea id="bioInput" class="modal-input" placeholder="Enter your bio" maxlength="200">${u.profile.bio || ""}</textarea>
      </div>
      <div class="window-actions">
        <button id="setBioSubmit" class="window-button">Submit</button>
        <button id="setBioCancel" class="window-button danger">Cancel</button>
      </div>
    </div>
  `,
    document.getElementById("setBioSubmit").addEventListener("click", async () => {
        const t = document.getElementById("bioInput").value.trim();
        await setPlayerBio([t]),
        printToTerminal("Bio changed successfully!", "success"),
        showNotification("Bio updated!"),
        b.updateWindowContent("profileWindow"),
        b.closeWindow("setBioWindow")
    }
    ),
    document.getElementById("setBioCancel").addEventListener("click", () => {
        b.closeWindow("setBioWindow")
    }
    ),
    b.showWindow("setBioWindow")
}
;
window.showSetPhysicalProfilePrompt = function() {
    var o, s, r;
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    const t = ["Male", "Female", "Non-binary", "Prefer not to say"].map(a => {
        var d;
        return `<option value="${a}" ${((d = u == null ? void 0 : u.profile) == null ? void 0 : d.gender) === a ? "selected" : ""}>${a}</option>`
    }
    ).join("")
      , i = document.getElementById("setPhysicalProfileContent");
    i.innerHTML = `
    <div class="window-section">
      <h3>Physical Profile</h3>
      <div>
        <div class="form-group">
          <label for="ageInput">Age:</label>
          <input type="number" id="ageInput" class="modal-input" min="1" max="120" value="${((o = u == null ? void 0 : u.profile) == null ? void 0 : o.age) || ""}">
        </div>
        <div class="form-group">
          <label for="heightInput">Height (cm):</label>
          <input type="number" id="heightInput" class="modal-input" min="0" max="300" value="${((s = u == null ? void 0 : u.profile) == null ? void 0 : s.height) || ""}">
        </div>
        <div class="form-group">
          <label for="weightInput">Weight (kg):</label>
          <input type="number" id="weightInput" class="modal-input" min="0" max="500" value="${((r = u == null ? void 0 : u.profile) == null ? void 0 : r.weight) || ""}">
        </div>
        <div class="form-group">
          <label for="genderInput">Gender:</label>
          <select id="genderInput" class="modal-input">${t}</select>
        </div>
      </div>
      <div class="window-actions">
        <button id="setPhysicalProfileSubmit" class="window-button">Submit</button>
        <button id="setPhysicalProfileCancel" class="window-button danger">Cancel</button>
      </div>
    </div>
  `,
    document.getElementById("setPhysicalProfileSubmit").addEventListener("click", async () => {
        const a = parseInt(document.getElementById("ageInput").value) || null
          , d = parseFloat(document.getElementById("heightInput").value) || null
          , l = parseFloat(document.getElementById("weightInput").value) || null
          , c = document.getElementById("genderInput").value;
        await tt(a, d, l, c),
        printToTerminal("Physical profile updated successfully!", "success"),
        showNotification("Physical profile updated!"),
        b.updateWindowContent("profileWindow"),
        b.closeWindow("setPhysicalProfileWindow")
    }
    ),
    document.getElementById("setPhysicalProfileCancel").addEventListener("click", () => {
        b.closeWindow("setPhysicalProfileWindow")
    }
    ),
    b.showWindow("setPhysicalProfileWindow")
}
;
async function tt(n, e, t, i) {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    if (n !== null && (n < 1 || n > 120)) {
        printToTerminal("Please provide a valid age (between 1 and 120).", "error");
        return
    }
    if (e !== null && (e <= 0 || e > 300)) {
        printToTerminal("Please provide a valid height in cm (between 0 and 300).", "error");
        return
    }
    if (t !== null && (t <= 0 || t > 500)) {
        printToTerminal("Please provide a valid weight in kg (between 0 and 500).", "error");
        return
    }
    try {
        const o = x.collection("players").doc(h.uid)
          , s = {};
        n !== null && (s["profile.age"] = n),
        e !== null && (s["profile.height"] = e),
        t !== null && (s["profile.weight"] = t),
        i && (s["profile.gender"] = i),
        await o.update(s),
        u.profile || (u.profile = {}),
        u.profile.physique || (u.profile.physique = {}),
        n !== null && (u.profile.age = n),
        e !== null && (u.profile.height = e),
        t !== null && (u.profile.weight = t),
        i && (u.profile.gender = i)
    } catch (o) {
        printToTerminal("Error updating physical profile: " + o.message, "error")
    }
}
window.setPlayerPhysicalProfile = tt;
function Fe() {
    if (h)
        try {
            const n = new Date
              , e = new Date(n);
            e.setHours(0, 0, 0, 0);
            const t = localStorage.getItem("lastDailyQuestReset");
            if (t && new Date(t) >= e) {
                console.log("Daily quests already reset today, skipping");
                return
            }
            console.log("Daily quest reset triggered - new day detected"),
            it(),
            localStorage.setItem("lastDailyQuestReset", e.toISOString())
        } catch (n) {
            console.error("Error checking daily quest reset:", n)
        }
}
let Z = !1;
async function it() {
    if (Z) {
        console.log("Daily quest reset already in progress, skipping");
        return
    }
    Z = !0;
    try {
        if (!h) {
            Z = !1;
            return
        }
        await Pt();
        const n = x.collection("players").doc(h.uid)
          , t = await n.collection("dailyQuests").get();
        if (t.empty) {
            console.log("No daily quests to reset"),
            Z = !1;
            return
        }
        const i = x.batch();
        t.forEach(s => {
            i.update(s.ref, {
                currentCount: 0,
                completed: !1,
                lastReset: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        ),
        i.update(n, {
            lastDailyReset: firebase.firestore.FieldValue.serverTimestamp()
        }),
        await i.commit(),
        console.log("Daily quests have been reset!"),
        printToTerminal("Daily quests have been reset for a new day!", "success"),
        showNotification("Daily quests reset for a new day!");
        const o = document.getElementById("quests-window");
        if (o && o.style.display !== "none") {
            const s = document.getElementById("daily-quests-tab");
            windowManager.updateQuestsWindow(s && s.classList.contains("active-tab") ? "daily" : "normal")
        }
        typeof ve == "function" && ve()
    } catch (n) {
        console.error("Error resetting daily quests:", n),
        printToTerminal("Error resetting daily quests: " + n.message, "error")
    } finally {
        Z = !1
    }
}
async function Pt() {
    var n, e;
    if (h)
        try {
            const t = x.collection("players").doc(h.uid)
              , o = (await t.get()).data();
            if (!o)
                return;
            const s = 50
              , r = 100;
            let a = 0
              , d = []
              , l = 0
              , c = [];
            const f = await t.collection("dailyQuests").get()
              , m = f.size;
            let g = 0;
            f.forEach(w => {
                w.data().completed && g++
            }
            );
            const y = m - g;
            if (y > 0) {
                const w = y * s;
                a += w,
                d.push(`You didn't complete ${y} daily quest${y > 1 ? "s" : ""}: -${w} XP`)
            }
            if (o.waterIntake) {
                const w = ((n = o.waterIntake) == null ? void 0 : n.dailyGoal) || $.DAILY_GOAL
                  , v = ((e = o.waterIntake) == null ? void 0 : e.current) || 0;
                if (v < w)
                    a += r,
                    d.push(`You didn't reach your water intake goal (${v}/${w}): -${r} XP`);
                else if (v > w) {
                    const T = Math.floor((v - w) / w * 100)
                      , E = Math.min(Math.floor(50 + T * .5), 100);
                    l += E,
                    c.push(`You exceeded your water intake goal by ${T}%: +${E} XP`)
                }
            }
            if (a > 0) {
                const w = o.exp || 0
                  , v = o.level || 1;
                let T = w - a
                  , E = v;
                for (; T < 0 && E > 1; )
                    E--,
                    T += getExpNeededForLevel(E);
                E === 1 && T < 0 && (T = 0);
                const C = v - E;
                await t.update({
                    exp: T,
                    level: E,
                    "penalties.lastPenalty": {
                        amount: a,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        details: d
                    }
                }),
                await x.collection("notifications").add({
                    userId: h.uid,
                    type: "penalty",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    read: !1,
                    message: `Daily Penalty: Lost ${a} XP${C > 0 ? ` and ${C} level${C > 1 ? "s" : ""}` : ""}.`,
                    details: {
                        penaltyAmount: a,
                        reasons: d,
                        previousLevel: v,
                        newLevel: E,
                        levelsLost: C
                    }
                }),
                u && (u.exp = T,
                u.level = E),
                printToTerminal(`
=== DAILY PENALTIES APPLIED ===`, "error"),
                d.forEach(L => {
                    printToTerminal(L, "error")
                }
                ),
                printToTerminal(`Total Penalty: -${a} XP`, "error"),
                Ze()
            }
            l > 0 && (await t.update({
                exp: firebase.firestore.FieldValue.increment(l)
            }),
            await x.collection("notifications").add({
                userId: h.uid,
                type: "reward",
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                read: !1,
                message: `Daily Reward: Gained ${l} XP`,
                details: {
                    rewardAmount: l,
                    reasons: c
                }
            }),
            u && (u.exp += l),
            printToTerminal(`
=== DAILY REWARDS APPLIED ===`, "success"),
            c.forEach(w => {
                printToTerminal(w, "success")
            }
            ),
            printToTerminal(`Total Reward: +${l} XP`, "success")),
            updateStatusBar(),
            b.updateWindowContent("profileWindow"),
            b.updateWindowContent("notificationsWindow")
        } catch (t) {
            console.error("Error applying daily penalties:", t),
            printToTerminal("Error applying daily penalties: " + t.message, "error")
        }
}
class Mt {
    constructor() {
        this.timers = {},
        this.pendingTimerClears = new Set
    }
    startTimer(e, t, i=1e3) {
        if (this.pendingTimerClears.has(e)) {
            setTimeout( () => this.startTimer(e, t, i), 10);
            return
        }
        return this.stopTimer(e),
        this.timers[e] = setInterval(t, i),
        this.timers[e]
    }
    stopTimer(e) {
        return this.timers[e] ? (this.pendingTimerClears.add(e),
        clearInterval(this.timers[e]),
        delete this.timers[e],
        setTimeout( () => this.pendingTimerClears.delete(e), 50),
        !0) : !1
    }
    stopAllTimers() {
        for (const e in this.timers)
            this.stopTimer(e)
    }
    hasActiveTimer(e) {
        return this.timers.hasOwnProperty(e)
    }
}
window.timerManager = new Mt;
const O = class O {
    static getNextZIndex() {
        return ++O.currentMaxZIndex
    }
    static getRandomRotation() {
        const e = Math.floor(Math.random() * O.rotationPresets.length);
        return O.rotationPresets[e]
    }
    constructor(e, t, i, o="#ffeb3b", s={
        x: 10,
        y: 10
    }, r=!1, a=!0) {
        this.id = e,
        this.title = t,
        this.content = i,
        this.color = o,
        this.position = s,
        this.isPinned = r,
        this.isVisible = a,
        this.rotation = O.getRandomRotation(),
        this.createdAt = firebase.firestore.FieldValue.serverTimestamp(),
        this.lastModified = firebase.firestore.FieldValue.serverTimestamp()
    }
    async delete() {
        try {
            return await x.collection("players").doc(h.uid).collection("notes").doc(this.id).delete(),
            !0
        } catch (e) {
            return console.error("Error deleting note:", e),
            !1
        }
    }
    static async create(e=!0) {
        if (!k)
            return printToTerminal("You must !reawaken first.", "error"),
            null;
        let t = "Untitled";
        e && (t = prompt("Enter note title (leave blank for 'Untitled')") || "Untitled");
        try {
            const i = {
                title: t,
                content: "",
                color: "#011621",
                position: {
                    x: Math.random() * (window.innerWidth - 300),
                    y: Math.random() * (window.innerHeight - 350)
                },
                isPinned: !1,
                isVisible: !0,
                rotation: O.getRandomRotation(),
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastModified: firebase.firestore.FieldValue.serverTimestamp()
            }
              , o = await x.collection("players").doc(h.uid).collection("notes").add(i);
            return new O(o.id,i.title,"",i.color,i.position,!1,!0)
        } catch (i) {
            return console.error("Error creating note:", i),
            null
        }
    }
    async save() {
        if (!h)
            return !1;
        const e = 3;
        let t = 0
          , i = !1;
        for (; !i && t < e; )
            try {
                return await x.collection("players").doc(h.uid).collection("notes").doc(this.id).set({
                    title: this.title,
                    content: this.content,
                    color: this.color,
                    position: this.position,
                    isPinned: this.isPinned,
                    isVisible: this.isVisible,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                }),
                i = !0,
                !0
            } catch (o) {
                if (console.error(`Error saving note (attempt ${t + 1}):`, o),
                t++,
                t >= e)
                    return showNotification("Failed to save note. Please try again.", "error"),
                    !1;
                await new Promise(s => setTimeout(s, 1e3))
            }
    }
    createNoteElement() {
        const e = document.createElement("div");
        return e.className = "note-window",
        e.id = `note-${this.id}`,
        e.style.backgroundColor = this.color,
        this.adjustPositionForScreenSize(),
        e.style.left = `${this.position.x}px`,
        e.style.top = `${this.position.y}px`,
        window.innerWidth > 768 && (e.style.transform = `rotate(${this.rotation}deg)`),
        e.style.zIndex = O.getNextZIndex(),
        e.style.display = this.isVisible ? "flex" : "none",
        e.innerHTML = `
      <div class="note-header">
        <input type="text" class="note-title" value="${this.title}" placeholder="Untitled">
        <div class="note-actions">
          <button style="display:none;" class="note-pin ${this.isPinned ? "pinned" : ""}" title="${this.isPinned ? "Unpin" : "Pin"}">
            <i class="fas fa-thumbtack"></i>
          </button>
          <button class="note-color" title="Change Color">
            <i class="fas fa-palette"></i>
          </button>
          <button class="note-close" title="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <textarea class="note-content" placeholder="Write your note here...">${this.content}</textarea>
    `,
        this.setupNoteEventListeners(e),
        setTimeout( () => {
            const t = e.querySelector(".note-content");
            this.adjustNoteSize(t, e)
        }
        , 0),
        e
    }
    adjustPositionForScreenSize() {
        window.innerWidth <= 768 ? (this.position.x = (window.innerWidth - window.innerWidth * .9) / 2,
        this.position.y = Math.min(this.position.y, window.innerHeight * .1),
        this.position.y = Math.max(10, Math.min(this.position.y, window.innerHeight - 200))) : (this.position.x = Math.max(0, Math.min(this.position.x, window.innerWidth - 300)),
        this.position.y = Math.max(0, Math.min(this.position.y, window.innerHeight - 350)))
    }
    adjustNoteSize(e, t) {
        e.style.height = "auto";
        const i = Math.max(150, Math.min(500, e.scrollHeight + 30))
          , o = e.value.split(`
`);
        let s = 0;
        for (const a of o)
            s = Math.max(s, a.length);
        const r = Math.max(250, Math.min(500, s * 8 + 40));
        t.style.width = `${r}px`,
        e.style.height = `${i - 50}px`
    }
    setupNoteEventListeners(e) {
        const t = e.querySelector(".note-title")
          , i = e.querySelector(".note-content")
          , o = e.querySelector(".note-pin")
          , s = e.querySelector(".note-color")
          , r = e.querySelector(".note-close")
          , a = e.querySelector(".note-header");
        e.addEventListener("mousedown", f => {
            f.target.closest(".note-window") && this.bringToFront(e)
        }
        ),
        this.makeDraggable(e),
        this.adjustNoteSize(i, e);
        let d;
        const l = () => {
            clearTimeout(d),
            d = setTimeout( () => {
                this.title = t.value || "Untitled",
                this.content = i.value,
                this.save(),
                this.adjustNoteSize(i, e)
            }
            , 1e3)
        }
        ;
        i.addEventListener("input", () => {
            this.adjustNoteSize(i, e),
            l()
        }
        ),
        t.addEventListener("input", l),
        t.addEventListener("focus", () => this.bringToFront(e)),
        i.addEventListener("focus", () => this.bringToFront(e)),
        a.addEventListener("focus", () => this.bringToFront(e)),
        o.addEventListener("click", f => {
            f.stopPropagation(),
            this.isPinned = !this.isPinned,
            o.classList.toggle("pinned", this.isPinned),
            o.title = this.isPinned ? "Unpin" : "Pin",
            this.save()
        }
        );
        const c = f => m => {
            m.stopPropagation(),
            m.preventDefault(),
            f(m)
        }
        ;
        s.addEventListener("click", f => {
            f.stopPropagation();
            const m = document.querySelector(".color-picker-overlay");
            m && m.remove();
            const g = document.createElement("div");
            g.className = "color-picker-overlay";
            const y = document.createElement("div");
            y.className = "note-color-picker",
            ["#011621", "#ffd700", "#ff9800", "#ff5722", "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#795548", "#607d8b"].forEach( (C, L) => {
                const S = document.createElement("div");
                S.className = "color-option",
                S.style.backgroundColor = C,
                L === 0 && (S.innerHTML = '<div class="diagonal-line"></div>',
                S.title = "Default Color"),
                S.addEventListener("click", R => {
                    R.stopPropagation(),
                    this.color = C,
                    e.style.backgroundColor = C,
                    g.remove(),
                    this.save()
                }
                ),
                y.appendChild(S)
            }
            );
            const v = document.createElement("div");
            v.className = "custom-color-container";
            const T = document.createElement("input");
            T.type = "color",
            T.className = "custom-color-input",
            T.value = this.color;
            const E = document.createElement("div");
            E.className = "custom-color-label",
            E.textContent = "Custom Color",
            T.addEventListener("input", C => {
                this.color = C.target.value,
                e.style.backgroundColor = C.target.value
            }
            ),
            T.addEventListener("change", () => this.save()),
            v.appendChild(T),
            v.appendChild(E),
            y.appendChild(v),
            g.appendChild(y),
            document.body.appendChild(g),
            g.addEventListener("click", C => {
                C.target === g && g.remove()
            }
            )
        }
        ),
        r.addEventListener("click", async f => {
            f.stopPropagation(),
            this.isVisible = !1,
            e.style.display = "none";
            const m = document.querySelector(`[onclick="noteManager.showNote('${this.id}')"]`);
            if (m) {
                const g = m.querySelector("i");
                g && (g.className = "fas fa-eye"),
                m.title = "Show note"
            }
            await this.save(),
            await A.updateNotesWindow()
        }
        );
        const p = c(async () => {
            this.isVisible = !1,
            e.style.display = "none";
            const f = document.querySelector(`[onclick="noteManager.showNote('${this.id}')"]`);
            if (f) {
                const m = f.querySelector("i");
                m && (m.className = "fas fa-eye"),
                f.title = "Show note"
            }
            await this.save(),
            await A.updateNotesWindow()
        }
        );
        r.addEventListener("click", p),
        r.addEventListener("touchstart", p, {
            passive: !1
        })
    }
    bringToFront(e) {
        const t = O.getNextZIndex();
        e.style.zIndex = t,
        e.classList.add("note-focus"),
        setTimeout( () => e.classList.remove("note-focus"), 300)
    }
    makeDraggable(e) {
        const t = e.querySelector(".note-header")
          , i = e.querySelector(".note-title");
        if (!t)
            return;
        let o = !1, s, r;
        const a = c => {
            const p = c.clientX || c.touches && c.touches[0].clientX
              , f = c.clientY || c.touches && c.touches[0].clientY;
            c.target !== i && (!p || !f || (c.preventDefault(),
            this.bringToFront(e),
            s = p - parseFloat(e.style.left || 0),
            r = f - parseFloat(e.style.top || 0),
            document.addEventListener("mousemove", d),
            document.addEventListener("touchmove", d, {
                passive: !1
            }),
            document.addEventListener("mouseup", l),
            document.addEventListener("touchend", l),
            o = !0))
        }
          , d = c => {
            if (!o)
                return;
            const p = c.clientX || c.touches && c.touches[0].clientX
              , f = c.clientY || c.touches && c.touches[0].clientY;
            if (!p || !f)
                return;
            let m = p - s
              , g = f - r;
            const y = window.innerWidth - e.offsetWidth
              , w = window.innerHeight - e.offsetHeight;
            m = Math.max(0, Math.min(m, y)),
            g = Math.max(0, Math.min(g, w)),
            e.style.position = "absolute",
            e.style.left = `${m}px`,
            e.style.top = `${g}px`,
            this.position = {
                x: m,
                y: g
            }
        }
          , l = () => {
            o && (document.removeEventListener("mousemove", d),
            document.removeEventListener("touchmove", d),
            document.removeEventListener("mouseup", l),
            document.removeEventListener("touchend", l),
            this.bringToFront(e),
            this.save(),
            o = !1)
        }
        ;
        t.addEventListener("mousedown", a),
        t.addEventListener("touchstart", a, {
            passive: !1
        }),
        t.addEventListener("dragstart", c => c.preventDefault())
    }
}
;
ue(O, "rotationPresets", [-3, 0, 3]),
ue(O, "currentMaxZIndex", 900);
let V = O;
const A = {
    notes: new Map,
    areNotesVisible: !0,
    async loadNotes() {
        if (k)
            try {
                this.notes.clear();
                const n = await x.collection("players").doc(h.uid).collection("notes").get();
                if (n.empty) {
                    this.updateNotesWindow();
                    return
                }
                this.notes.forEach(e => {
                    e.adjustPositionForScreenSize();
                    const t = e.createNoteElement();
                    document.body.appendChild(t)
                }
                ),
                n.forEach(e => {
                    const t = e.data()
                      , i = new V(e.id,t.title,t.content,t.color,t.position || {
                        x: 10,
                        y: 10
                    },t.isPinned || !1,t.isVisible !== !1);
                    i.rotation = t.rotation || V.getRandomRotation(),
                    this.notes.set(e.id, i);
                    const o = i.createNoteElement();
                    document.body.appendChild(o)
                }
                ),
                this.updateNotesWindow()
            } catch (n) {
                console.error("Error loading notes:", n),
                printToTerminal("Error loading notes: " + n.message, "error")
            }
    },
    async updateNotesWindow() {
        try {
            if (!document.getElementById("notesWindow"))
                return;
            const e = document.getElementById("notesList");
            if (!e)
                return;
            if (e.innerHTML = "",
            this.notes.size === 0) {
                e.innerHTML = '<div class="no-notes">No notes yet. Use "!note" to create one.</div>';
                return
            }
            this.notes.forEach(t => {
                const i = document.createElement("div");
                i.className = "note-item";
                const o = t.isVisible;
                i.innerHTML = `
          <div class="note-item-header" style="background-color: ${t.color}">
            <span class="note-item-title">${t.title || "Untitled"}</span>
            <div class="note-item-actions">
              <button class="note-visibility-toggle" onclick="noteManager.showNote('${t.id}')" title="${o ? "Hide" : "Show"} note">
                <i class="fas fa-${o ? "eye" : "eye-slash"}"></i>
              </button>
              <button class="danger" onclick="noteManager.deleteNote('${t.id}')"><i class="fas fa-trash"></i></button>
            </div>
          </div>
          <div class="note-item-preview">${t.content || "No content"}</div>
        `,
                e.appendChild(i)
            }
            )
        } catch (n) {
            console.error("Error updating notes window:", n)
        }
    },
    async createNote() {
        if (!k) {
            printToTerminal("You must !reawaken first.", "error");
            return
        }
        const n = await V.create(!0);
        if (n) {
            this.notes.set(n.id, n);
            const e = n.createNoteElement();
            e.classList.add("note-animate-in"),
            document.body.appendChild(e),
            b.bringToFront(`note-${n.id}`),
            this.updateNotesWindow(),
            printToTerminal("Note created successfully!", "success"),
            showNotification("New note created!")
        }
    },
    showNote(n) {
        const e = this.notes.get(n);
        if (e) {
            const t = document.getElementById(`note-${n}`);
            if (t) {
                e.isVisible = !e.isVisible,
                e.isVisible ? (t.classList.remove("note-hide"),
                t.style.display = "flex",
                b.bringToFront(`note-${n}`)) : (t.classList.add("note-hide"),
                setTimeout( () => {
                    t.style.display = "none"
                }
                , 300)),
                e.save();
                const i = document.querySelector(`[onclick="noteManager.showNote('${n}')"]`);
                if (i) {
                    const o = i.querySelector("i");
                    o && (o.className = `fas fa-${e.isVisible ? "eye" : "eye-slash"}`),
                    i.title = `${e.isVisible ? "Hide" : "Show"} note`
                }
            } else if (e.isVisible) {
                const i = e.createNoteElement();
                document.body.appendChild(i)
            }
        }
    },
    async quickNote() {
        if (!k) {
            printToTerminal("You must !reawaken first.", "error");
            return
        }
        const n = await V.create(!1);
        if (n) {
            this.notes.set(n.id, n);
            const e = n.createNoteElement();
            document.body.appendChild(e),
            this.updateNotesWindow(),
            printToTerminal("Quick note created!", "success"),
            showNotification("Quick note created!")
        }
    },
    async deleteNote(n) {
        try {
            const e = this.notes.get(n);
            if (!e)
                return;
            if (await e.delete()) {
                this.notes.delete(n);
                const i = document.getElementById(`note-${n}`);
                i && (i.remove(),
                delete b.windows[`note-${n}`]),
                this.updateNotesWindow(),
                printToTerminal("Note deleted successfully!", "success"),
                showNotification("Note deleted!")
            }
        } catch (e) {
            console.error("Error deleting note:", e),
            printToTerminal("Error deleting note: " + e.message, "error")
        }
    },
    toggleNotes() {
        this.areNotesVisible = !this.areNotesVisible,
        this.notes.forEach(t => {
            const i = document.getElementById(`note-${t.id}`);
            if (this.areNotesVisible) {
                if (t.isVisible)
                    if (i)
                        i.classList.remove("note-hide"),
                        i.style.display = "flex";
                    else {
                        const o = t.createNoteElement();
                        document.body.appendChild(o)
                    }
            } else
                i && !t.isPinned && (i.classList.add("note-hide"),
                setTimeout( () => {
                    i.style.display = "none"
                }
                , 300),
                t.isVisible = !1,
                t.save())
        }
        ),
        document.querySelectorAll(".note-item").forEach(t => {
            const i = t.querySelector(".note-item-actions button");
            if (i) {
                const o = i.getAttribute("onclick").match(/'([^']+)'/)[1]
                  , s = this.notes.get(o);
                if (s) {
                    const r = i.querySelector("i");
                    r && (r.className = `fas fa-${s.isVisible ? "eye" : "eye-slash"}`),
                    i.title = `${s.isVisible ? "Hide" : "Show"} note`
                }
            }
        }
        );
        const e = document.getElementById("toggleNotesButton");
        if (e) {
            const t = e.querySelector("i");
            t && (t.className = `fas fa-${this.areNotesVisible ? "eye-slash" : "eye"}`),
            e.innerHTML = `<i class="fas fa-${this.areNotesVisible ? "eye-slash" : "eye"}"></i> ${this.areNotesVisible ? "Hide All" : "Show All"}`
        }
    }
};
window.windowSystem.windows.notesWindow = {
    element: document.getElementById("notesWindow"),
    update: () => A.updateNotesWindow()
};
document.addEventListener("DOMContentLoaded", async () => {
    await PlayerDB.init(),
    Ye(),
    await initializeSystem(),
    k && h && (await A.loadNotes(),
    b.updateNotificationBadge(unreadCount))
}
);
window.noteManager = A;
typeof window.printToTerminal != "function" && (window.printToTerminal = function(n, e) {
    console.log(`[${e}] ${n}`),
    e === "error" && alert(n)
}
);
window.Note = V;
z["!note"] = () => A.createNote();
z["!quicknote"] = () => A.quickNote();
z["!notes"] = () => b.showWindow("notesWindow");
z["!shownotes"] = () => A.showAllNotes();
z["!hidenotes"] = () => A.hideAllNotes();
async function nt() {
    try {
        const n = await b.getUnreadNotificationsCount();
        b.updateNotificationBadge(n)
    } catch (n) {
        console.error("Error loading notification badge:", n)
    }
}
window.initializeDailyQuestsWindow = function() {
    console.log("Initializing daily quests window"),
    ce(),
    window.windowSystem && window.windowSystem.registerWindow("dailyQuestsWindow", {
        onOpen: () => {
            document.getElementById("water-intake-tab").classList.contains("active-tab") && U()
        }
    })
}
;
document.addEventListener("DOMContentLoaded", () => {
    typeof initializeDailyQuestsWindow == "function" && initializeDailyQuestsWindow()
}
);
window.initializeDailyQuestsWindow = function() {
    ce(),
    b.registerWindow("dailyQuestsWindow", {
        onOpen: () => {
            document.getElementById("water-intake-tab").classList.contains("active-tab") && U()
        }
    })
}
;
async function Bt() {
    if (!window.isOnline || window.offlineActions.length === 0)
        return;
    showNotification("Syncing your offline changes...", "info");
    let n = 0
      , e = 0;
    for (const t of window.offlineActions)
        try {
            t.type === "waterIntake" && (await ae(t.args, t.exactAmount),
            n++)
        } catch (i) {
            console.error("Failed to process offline action:", i),
            e++
        }
    window.offlineActions = [],
    e > 0 ? showNotification(`Sync complete with ${e} errors. Some changes may need to be re-applied.`, "warning") : showNotification(`Successfully synced ${n} changes!`, "success")
}
window.offlineActions = [];
window.isOnline = navigator.onLine;
window.addEventListener("online", () => {
    window.isOnline = !0,
    showNotification("You're back online!", "success"),
    Bt()
}
);
window.addEventListener("offline", () => {
    window.isOnline = !1,
    showNotification("You're offline. Changes will be saved when you're back online.", "warning")
}
);
const $ = {
    DAILY_GOAL: 8,
    GLASS_ML: 250,
    REWARDS: {
        exp: 10,
        gold: 10
    },
    ENCOURAGEMENTS: [{
        threshold: .25,
        message: "Good start! Keep hydrating!"
    }, {
        threshold: .5,
        message: "Halfway there - you're doing great!"
    }, {
        threshold: .75,
        message: "Almost at your goal - fantastic effort!"
    }, {
        threshold: 1,
        message: "Hydration champion! Goal reached!"
    }]
};
async function ae(n, e=null) {
    var i, o, s, r;
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    if (!window.isOnline) {
        window.offlineActions.push({
            type: "waterIntake",
            args: n,
            exactAmount: e,
            timestamp: new Date
        }),
        showNotification("Water tracking saved offline. Will sync when you're back online.", "info");
        return
    }
    await de();
    let t = n && n.length > 0 ? parseFloat(n[0]) : 1;
    if (isNaN(t) || t <= 0) {
        printToTerminal("Please enter a valid number of glasses.", "error");
        return
    }
    try {
        const a = x.collection("players").doc(h.uid)
          , d = (await a.get()).data()
          , l = ((i = d.waterIntake) == null ? void 0 : i.cupSize) || $.GLASS_ML
          , c = ((o = d.waterIntake) == null ? void 0 : o.dailyGoal) || $.DAILY_GOAL
          , p = ((s = d.waterIntake) == null ? void 0 : s.current) || 0
          , f = p + t
          , m = p < c && f >= c
          , g = e || t * l
          , y = new Date
          , w = x.batch();
        !d.waterIntake || typeof d.waterIntake != "object" ? w.update(a, {
            waterIntake: {
                current: f,
                cupSize: l,
                dailyGoal: c,
                lastReset: firebase.firestore.FieldValue.serverTimestamp(),
                streakDays: 0,
                history: [{
                    amount: g,
                    timestamp: y
                }]
            }
        }) : w.update(a, {
            "waterIntake.current": f,
            "waterIntake.lastReset": ((r = d.waterIntake) == null ? void 0 : r.lastReset) || firebase.firestore.FieldValue.serverTimestamp(),
            "waterIntake.history": firebase.firestore.FieldValue.arrayUnion({
                amount: g,
                timestamp: y
            })
        }),
        m && w.update(a, {
            exp: firebase.firestore.FieldValue.increment($.REWARDS.exp),
            gold: firebase.firestore.FieldValue.increment($.REWARDS.gold),
            "waterIntake.streakDays": firebase.firestore.FieldValue.increment(1)
        }),
        await w.commit(),
        u.waterIntake || (u.waterIntake = {}),
        u.waterIntake.current = f,
        u.waterIntake.cupSize = l,
        u.waterIntake.dailyGoal = c,
        u.waterIntake.history || (u.waterIntake.history = []),
        u.waterIntake.history.push({
            amount: g,
            timestamp: y
        }),
        m && (u.exp += $.REWARDS.exp,
        u.gold += $.REWARDS.gold,
        u.waterIntake.streakDays = (u.waterIntake.streakDays || 0) + 1);
        const v = f / c * 100;
        if (printToTerminal(`Added ${t} glass${t !== 1 ? "es" : ""} (${g}ml) of water!`, "success"),
        printToTerminal(`Current Water Intake: ${f}/${c} glasses` + (v > 100 ? ` (${v.toFixed(1)}%)` : ""), "info"),
        printToTerminal(`Total: ${f * l}ml / ${c * l}ml`, "info"),
        v > 100)
            printToTerminal("🏆 WOW! You've exceeded your water goal! Incredible hydration!", "success");
        else
            for (let T = $.ENCOURAGEMENTS.length - 1; T >= 0; T--)
                if (v / 100 >= $.ENCOURAGEMENTS[T].threshold) {
                    printToTerminal($.ENCOURAGEMENTS[T].message, "system");
                    break
                }
        m && (printToTerminal(`
🎉 Daily Water Goal Achieved! 🎉`, "success"),
        printToTerminal("Rewards:", "reward"),
        printToTerminal(`- ${$.REWARDS.exp} EXP`, "reward"),
        printToTerminal(`- ${$.REWARDS.gold} Gold`, "reward"),
        printToTerminal(`Water Streak: ${u.waterIntake.streakDays} days`, "info"),
        await j(a, u.exp),
        await checkAchievements(),
        updateStatusBar()),
        typeof U == "function" && await U(),
        showNotification(`Water intake updated: ${f}/${c} glasses` + (v > 100 ? ` (${v.toFixed(1)}%)` : ""))
    } catch (a) {
        printToTerminal("Error updating water intake: " + a.message, "error"),
        console.error("Water intake update error:", a)
    }
}
async function de() {
    var n, e, t, i, o;
    if (h)
        try {
            const s = x.collection("players").doc(h.uid)
              , r = await s.get();
            if (!r.exists) {
                console.error("Player document not found");
                return
            }
            const a = r.data();
            if (!a.waterIntake || typeof a.waterIntake != "object") {
                await s.update({
                    waterIntake: {
                        current: 0,
                        lastReset: firebase.firestore.FieldValue.serverTimestamp(),
                        streakDays: 0,
                        cupSize: $.GLASS_ML,
                        dailyGoal: $.DAILY_GOAL,
                        history: []
                    }
                }),
                u && (u.waterIntake = {
                    current: 0,
                    streakDays: 0,
                    cupSize: $.GLASS_ML,
                    dailyGoal: $.DAILY_GOAL,
                    history: []
                });
                return
            }
            const d = ((e = (n = a.waterIntake) == null ? void 0 : n.lastReset) == null ? void 0 : e.toDate()) || new Date(0)
              , l = new Date
              , c = ((t = a.waterIntake) == null ? void 0 : t.dailyGoal) || $.DAILY_GOAL;
            if (d.getDate() !== l.getDate() || d.getMonth() !== l.getMonth() || d.getYear() !== l.getYear()) {
                const p = new Date(l);
                p.setDate(p.getDate() - 1);
                const f = ((i = a.waterIntake) == null ? void 0 : i.current) >= c;
                await s.update({
                    "waterIntake.current": 0,
                    "waterIntake.lastReset": firebase.firestore.FieldValue.serverTimestamp(),
                    "waterIntake.streakDays": f ? firebase.firestore.FieldValue.increment(0) : 0
                }),
                u && u.waterIntake && (u.waterIntake.current = 0,
                f || (u.waterIntake.streakDays = 0)),
                !f && ((o = a.waterIntake) == null ? void 0 : o.streakDays) > 0 && printToTerminal("Water streak reset! Remember to drink water daily!", "warning")
            }
        } catch (s) {
            console.error("Error checking water intake reset:", s)
        }
}
async function Ge() {
    var n, e, t, i;
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    await de();
    try {
        const s = (await x.collection("players").doc(h.uid).get()).data()
          , r = ((n = s.waterIntake) == null ? void 0 : n.cupSize) || $.GLASS_ML
          , a = ((e = s.waterIntake) == null ? void 0 : e.dailyGoal) || $.DAILY_GOAL
          , d = ((t = s.waterIntake) == null ? void 0 : t.current) || 0
          , l = ((i = s.waterIntake) == null ? void 0 : i.streakDays) || 0;
        printToTerminal("=== WATER INTAKE STATUS ===", "system"),
        printToTerminal(`Current Progress: ${d}/${a} glasses (${r}ml each)`, "info"),
        printToTerminal(`Total: ${d * r}ml / ${a * r}ml`, "info"),
        printToTerminal(`Streak: ${l} days`, "info");
        const c = a - d;
        if (c > 0) {
            printToTerminal(`
Remaining: ${c} glass${c > 1 ? "es" : ""} to reach your daily goal`, "warning");
            const f = se() - new Date;
            printToTerminal(`Time remaining: ${J(f)}`, "warning")
        } else
            printToTerminal(`
Daily goal achieved! 🎉`, "success")
    } catch (o) {
        printToTerminal("Error showing water status: " + o.message, "error")
    }
}
window.addCupOfWater = async function() {
    var e;
    if (!k) {
        showNotification("You need to be logged in to add water", "error");
        return
    }
    try {
        const o = ((e = (await x.collection("players").doc(h.uid).get()).data().waterIntake) == null ? void 0 : e.cupSize) || $.GLASS_ML;
        await ae([1], o);
        const s = document.querySelector(".water-level");
        s && (s.classList.add("splash"),
        setTimeout( () => {
            s.classList.remove("splash")
        }
        , 1e3))
    } catch (t) {
        console.error("Error adding cup of water:", t),
        showNotification("Error adding water", "error")
    }
}
;
window.openPopup = function(e) {
    const t = document.getElementById(e);
    if (!t) {
        console.error(`Popup with ID ${e} not found`);
        return
    }
    if (t.style.display = "flex",
    e === "edit-goal-popup") {
        const i = document.getElementById("edit-daily-goal");
        if (k && u && u.waterIntake) {
            const o = u.waterIntake.cupSize || $.GLASS_ML
              , r = (u.waterIntake.dailyGoal || $.DAILY_GOAL) * o / 1e3;
            i.value = r
        } else
            i.value = $.DAILY_GOAL * $.GLASS_ML / 1e3
    } else if (e === "edit-cup-popup") {
        const i = document.getElementById("edit-cup-size");
        k && u && u.waterIntake ? i.value = u.waterIntake.cupSize || $.GLASS_ML : i.value = $.GLASS_ML
    } else if (e === "add-cup-popup") {
        const i = document.getElementById("add-water-amount");
        k && u && u.waterIntake ? i.value = u.waterIntake.cupSize || $.GLASS_ML : i.value = $.GLASS_ML
    }
}
;
window.closePopup = function(e) {
    const t = document.getElementById(e);
    if (!t) {
        console.error(`Popup with ID ${e} not found`);
        return
    }
    t.style.display = "none"
}
;
window.saveEditedGoal = async function() {
    var i;
    if (!k) {
        showNotification("You need to be logged in to set water goals", "error");
        return
    }
    const e = document.getElementById("edit-daily-goal");
    let t = parseFloat(e.value);
    if (isNaN(t) || t <= 0) {
        showNotification("Please enter a valid goal (minimum 0.1 liters)", "error");
        return
    }
    try {
        const o = x.collection("players").doc(h.uid)
          , s = (await o.get()).data()
          , r = ((i = s.waterIntake) == null ? void 0 : i.cupSize) || $.GLASS_ML
          , a = Math.ceil(t * 1e3 / r);
        let d = {};
        !s.waterIntake || typeof s.waterIntake != "object" ? d = {
            waterIntake: {
                current: 0,
                cupSize: r,
                dailyGoal: a,
                lastReset: firebase.firestore.FieldValue.serverTimestamp(),
                streakDays: 0,
                history: []
            }
        } : d = {
            "waterIntake.dailyGoal": a
        },
        await o.update(d),
        u.waterIntake || (u.waterIntake = {}),
        u.waterIntake.dailyGoal = a,
        U(),
        closePopup("edit-goal-popup"),
        showNotification(`Daily goal updated to ${t.toFixed(1)}L`)
    } catch (o) {
        console.error("Error saving goal:", o),
        showNotification("Error saving water goal", "error")
    }
}
;
window.saveEditedCup = async function() {
    if (!k) {
        showNotification("You need to be logged in to set cup size", "error");
        return
    }
    const e = document.getElementById("edit-cup-size");
    let t = parseInt(e.value);
    if (isNaN(t) || t < 50) {
        showNotification("Please enter a valid cup size (minimum 50ml)", "error");
        return
    }
    t = Math.round(t / 10) * 10;
    try {
        const i = x.collection("players").doc(h.uid)
          , o = (await i.get()).data();
        let s = {};
        !o.waterIntake || typeof o.waterIntake != "object" ? s = {
            waterIntake: {
                current: 0,
                cupSize: t,
                dailyGoal: $.DAILY_GOAL,
                lastReset: firebase.firestore.FieldValue.serverTimestamp(),
                streakDays: 0,
                history: []
            }
        } : s = {
            "waterIntake.cupSize": t
        },
        await i.update(s),
        u.waterIntake || (u.waterIntake = {}),
        u.waterIntake.cupSize = t,
        U(),
        closePopup("edit-cup-popup"),
        showNotification(`Cup size updated to ${t}ml`)
    } catch (i) {
        console.error("Error saving cup size:", i),
        showNotification("Error saving cup size", "error")
    }
}
;
function ce() {
    const n = document.getElementById("daily-quests-tab")
      , e = document.getElementById("water-intake-tab")
      , t = document.getElementById("daily-quests-content")
      , i = document.getElementById("water-intake-content");
    if (!n || !e || !t || !i) {
        console.error("Daily quests tabs elements not found");
        return
    }
    n.addEventListener("click", () => {
        n.classList.add("active-tab"),
        e.classList.remove("active-tab"),
        t.style.display = "block",
        i.style.display = "none"
    }
    ),
    e.addEventListener("click", () => {
        e.classList.add("active-tab"),
        n.classList.remove("active-tab"),
        i.style.display = "block",
        t.style.display = "none",
        U()
    }
    )
}
window.initializeDailyQuestsWindow = function() {
    ce(),
    window.windowSystem && typeof window.windowSystem.registerWindow == "function" && window.windowSystem.registerWindow("dailyQuestsWindow", {
        onOpen: () => {
            const e = document.getElementById("water-intake-tab");
            e && e.classList.contains("active-tab") && U()
        }
    })
}
;
document.addEventListener("DOMContentLoaded", () => {
    typeof initializeDailyQuestsWindow == "function" && initializeDailyQuestsWindow()
}
);
async function U() {
    var e, t, i, o, s, r;
    if (!k)
        return;
    const n = document.getElementById("water-intake-details");
    if (n) {
        n.innerHTML = `
    <div class="water-card">
      <h2>Drink Water</h2>
      <div style="display: flex; flex-direction: column; align-items: center; padding: 20px;">
        <div class="loading-spinner" style="
          width: 40px; 
          height: 40px; 
          border: 4px solid rgba(255, 255, 255, 0.2); 
          border-left-color: #5b86e5; 
          border-radius: 50%; 
          animation: spin 1s linear infinite;">
        </div>
        <p style="margin-top: 15px; color: rgba(255, 255, 255, 0.8);">Loading your water intake data...</p>
      </div>
    </div>
    
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;
        try {
            await de();
            const d = await x.collection("players").doc(h.uid).get();
            if (!d.exists) {
                console.error("Player document not found"),
                n.innerHTML = `
        <div class="error-message">
          <p>Player data not found</p>
          <button class="water-btn" onclick="updateWaterIntakeUI()">Retry</button>
        </div>`;
                return
            }
            const l = d.data();
            if (!l.waterIntake || typeof l.waterIntake != "object") {
                n.innerHTML = `
        <div class="water-card">
          <h2>Drink Water</h2>
          <p>Set up your water tracking by configuring your daily goal and cup size.</p>
          
          <div class="water-actions">
            <button class="water-btn" onclick="openPopup('edit-goal-popup')">
              <i class="fas fa-bullseye"></i> Set Daily Goal
            </button>
            <button class="water-btn" onclick="openPopup('edit-cup-popup')">
              <i class="fas fa-glass-water"></i> Set Cup Size
            </button>
          </div>
        </div>
      `;
                return
            }
            const c = ((e = l.waterIntake) == null ? void 0 : e.cupSize) || $.GLASS_ML
              , p = ((t = l.waterIntake) == null ? void 0 : t.dailyGoal) || $.DAILY_GOAL
              , f = ((i = l.waterIntake) == null ? void 0 : i.current) || 0
              , m = ((o = l.waterIntake) == null ? void 0 : o.streakDays) || 0
              , g = f * c
              , y = p * c
              , w = g / y * 100
              , v = w > 100
              , T = v ? 0 : ((y - g) / 1e3).toFixed(2)
              , E = v ? w.toFixed(1) : Math.min(100, w).toFixed(1);
            let C = `
      <div class="water-card">
        <h2>
          <button class="edit-btn" onclick="openPopup('edit-goal-popup')">
            <i class="fas fa-edit"></i>
            Edit Goal
          </button>
        </h2>
        <p class="water-goal">Goal: ${(y / 1e3).toFixed(2)} Liters ${v ? '<span class="achieved">✓ Exceeded!</span>' : ""}</p>
        
        <div class="water-glass-container ${v ? "overflowing" : ""}">
          ${v ? `
          <div class="water-overflow"></div>
          <div class="water-drop"></div>
          <div class="water-drop"></div>
          <div class="water-drop"></div>
          <div class="water-drop"></div>
          <div class="water-drop"></div>
          ` : ""}
          <div class="water-glass">
            ${v ? "" : `<div class="water-remaining">${T}L<br>Remaining</div>`}
            <div class="water-percentage ${v ? "overflowing" : ""}">${E}%</div>
            <div class="water-level ${v ? "overflowing" : ""}" style="height: ${v ? 100 : Math.max(5, w)}%">
            </div>
          </div>
        </div>
        
        <div class="water-stats">
          <div class="water-stat">
            <span class="stat-label">Current:</span>
            <span class="stat-value ${v ? "exceeding" : ""}">${(g / 1e3).toFixed(2)}L</span>
          </div>
          <div class="water-stat">
            <span class="stat-label">Streak:</span>
            <span class="stat-value">${m} days</span>
          </div>
        </div>
        
        <div class="water-actions">
          <button class="window-button" onclick="addCupOfWater()">
            <i class="fas fa-plus"></i>
            Add Cup (${c}ml)
          </button>
          <button class="edit-btn" onclick="openPopup('edit-cup-popup')">
            <i class="fas fa-edit"></i>
            Edit Cup Size
          </button>
        </div>
      </div>

      <div class="water-history">
        <h3>Today's Log</h3>
        <div class="water-logs">`;
            const L = ((r = (s = l.waterIntake) == null ? void 0 : s.history) == null ? void 0 : r.filter(S => {
                if (!S || !S.timestamp)
                    return !1;
                const R = S.timestamp instanceof Date ? S.timestamp : S.timestamp.toDate()
                  , N = new Date;
                return R.getDate() === N.getDate() && R.getMonth() === N.getMonth() && R.getFullYear() === N.getFullYear()
            }
            )) || [];
            L.length > 0 ? (L.sort( (S, R) => {
                const N = S.timestamp instanceof Date ? S.timestamp : S.timestamp.toDate();
                return (R.timestamp instanceof Date ? R.timestamp : R.timestamp.toDate()) - N
            }
            ),
            L.forEach(S => {
                if (!S || !S.timestamp)
                    return;
                const N = (S.timestamp instanceof Date ? S.timestamp : S.timestamp.toDate()).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                });
                let I;
                S.amount >= 1e3 ? I = `+${(S.amount / 1e3).toFixed(2)}L` : I = `+${S.amount}ml`,
                C += `
          <div class="water-log-entry">
            <span class="water-time">${N}</span>
            <span class="water-amount">${I}</span>
          </div>`
            }
            )) : C += '<div class="water-log-empty">No water intake recorded today</div>',
            C += "</div></div>",
            n.innerHTML = C
        } catch (a) {
            console.error("Error updating water intake UI:", a),
            n && (n.innerHTML = `
        <div class="error-message">
          <p>Error loading water intake data</p>
          <p>${a.message}</p>
          <button class="water-btn" onclick="updateWaterIntakeUI()">Retry</button>
        </div>`)
        }
    }
}
window.initializeDailyQuestsWindow = function() {
    console.log("Initializing daily quests window"),
    ce(),
    window.windowSystem && typeof window.windowSystem.registerWindow == "function" && window.windowSystem.registerWindow("dailyQuestsWindow", {
        onOpen: () => {
            const e = document.getElementById("water-intake-tab");
            e && e.classList.contains("active-tab") && U()
        }
    })
}
;
document.addEventListener("DOMContentLoaded", () => {
    typeof initializeDailyQuestsWindow == "function" && initializeDailyQuestsWindow()
}
);
async function Wt() {
    var n;
    if (k)
        try {
            if (sessionStorage.getItem("penaltyShown"))
                return;
            const i = (await x.collection("players").doc(h.uid).get()).data();
            if ((n = i.penalties) != null && n.lastPenalty) {
                const o = i.penalties.lastPenalty
                  , s = o.timestamp.toDate()
                  , r = new Date;
                s.getDate() === r.getDate() && s.getMonth() === r.getMonth() && s.getFullYear() === r.getFullYear() && (o.details.forEach(a => {
                    printToTerminal(a, "warning")
                }
                ),
                sessionStorage.setItem("penaltyShown", "true"))
            }
        } catch (e) {
            console.error("Error checking penalties:", e)
        }
}
async function Ot() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        const n = x.collection("players").doc(h.uid)
          , t = (await n.get()).data();
        if (!t)
            return;
        const i = 150
          , o = ["You didn't complete 1 daily quest: -50 XP", "You didn't reach your water intake goal (0/15): -100 XP"]
          , s = t.exp || 0
          , r = t.level || 1;
        let a = s - i
          , d = r;
        for (; a < 0 && d > 1; )
            d--,
            a += getExpNeededForLevel(d);
        d === 1 && a < 0 && (a = 0);
        const l = r - d;
        await n.update({
            exp: a,
            level: d,
            "penalties.lastPenalty": {
                amount: i,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                details: o
            }
        }),
        await x.collection("notifications").add({
            userId: h.uid,
            type: "penalty",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            read: !1,
            message: `Daily Penalty: Lost ${i} XP${l > 0 ? ` and ${l} level${l > 1 ? "s" : ""}` : ""}.`,
            details: {
                penaltyAmount: i,
                reasons: o,
                previousLevel: r,
                newLevel: d,
                levelsLost: l
            }
        }),
        u && (u.exp = a,
        u.level = d),
        l > 0 && ot(r, d),
        sessionStorage.removeItem("penaltyShown"),
        printToTerminal("=== SIMULATED DAILY PENALTIES APPLIED ===", "error"),
        o.forEach(c => {
            printToTerminal(c, "error")
        }
        ),
        printToTerminal(`Total Penalty: -${i} XP`, "error"),
        l > 0 && (printToTerminal(`You lost ${l} level(s)!`, "error"),
        printToTerminal(`Previous Level: ${r}`, "info"),
        printToTerminal(`New Level: ${d}`, "info")),
        updateStatusBar(),
        b.updateWindowContent("profileWindow"),
        b.updateWindowContent("notificationsWindow"),
        Ze()
    } catch (n) {
        console.error("Error simulating daily penalties:", n),
        printToTerminal("Error simulating daily penalties: " + n.message, "error")
    }
}
document.addEventListener("DOMContentLoaded", function() {
    Xt()
});
z["!simulatepenalty"] = Ot;
function zt() {
    const n = document.createElement("canvas");
    n.id = "particle-canvas",
    n.style.position = "fixed",
    n.style.top = "0",
    n.style.left = "0",
    n.style.width = "100%",
    n.style.height = "100%",
    n.style.pointerEvents = "none",
    n.style.zIndex = "999",
    document.body.appendChild(n),
    n.width = window.innerWidth,
    n.height = window.innerHeight;
    const e = n.getContext("2d")
      , t = []
      , i = 50;
    for (let s = 0; s < i; s++)
        t.push({
            x: Math.random() * n.width,
            y: Math.random() * n.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 1 - .5,
            speedY: Math.random() * 1 - .5,
            color: `rgba(0, ${120 + Math.random() * 135}, ${215 + Math.random() * 40}, ${.2 + Math.random() * .3})`
        });
    function o() {
        requestAnimationFrame(o),
        e.clearRect(0, 0, n.width, n.height),
        Array.from(document.querySelectorAll(".window")).filter(r => r.style.display !== "none").length !== 0 && t.forEach(r => {
            r.x += r.speedX,
            r.y += r.speedY,
            r.x > n.width && (r.x = 0),
            r.x < 0 && (r.x = n.width),
            r.y > n.height && (r.y = 0),
            r.y < 0 && (r.y = n.height),
            e.beginPath(),
            e.arc(r.x, r.y, r.size, 0, Math.PI * 2),
            e.fillStyle = r.color,
            e.fill(),
            t.forEach(a => {
                const d = r.x - a.x
                  , l = r.y - a.y
                  , c = Math.sqrt(d * d + l * l);
                c < 100 && (e.beginPath(),
                e.strokeStyle = `rgba(0, 200, 255, ${.1 * (1 - c / 100)})`,
                e.lineWidth = .5,
                e.moveTo(r.x, r.y),
                e.lineTo(a.x, a.y),
                e.stroke())
            }
            )
        }
        )
    }
    o(),
    window.addEventListener("resize", () => {
        n.width = window.innerWidth,
        n.height = window.innerHeight
    }
    )
}
function Qt() {
    const n = document.createElement("div");
    n.id = "holographic-scan-lines",
    document.body.appendChild(n),
    setInterval( () => {
        document.querySelectorAll(".window").forEach(t => {
            t.style.display !== "none" && Math.random() > .95 && (t.classList.add("hologram-flicker"),
            setTimeout( () => {
                t.classList.remove("hologram-flicker")
            }
            , 150))
        }
        )
    }
    , 2e3)
}
const _t = b.init;
b.init = function() {
    _t.call(this),
    zt(),
    Qt();
    const n = this.showWindow;
    this.showWindow = function(e) {
        const t = document.getElementById(e);
        t && (t.classList.add("window-opening"),
        setTimeout( () => {
            t.classList.remove("window-opening")
        }
        , 500)),
        n.call(this, e)
    }
}
;
function Ft() {
    const n = document.createElement("style");
    n.textContent = `
    /* Solo Leveling Window Design */
    .window {
      background: rgba(8, 19, 34, 0.7) !important;
      border: 1px solid rgba(0, 160, 255, 0.6) !important;
      box-shadow: 0 0 15px rgba(0, 190, 255, 0.4), inset 0 0 20px rgba(0, 130, 255, 0.1) !important;
      backdrop-filter: blur(8px) !important;
      color: #e0f2ff !important;
      border-radius: 8px !important;
      overflow: hidden !important;
    }
    
    .window::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(0, 120, 255, 0.05) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%, rgba(0, 200, 255, 0.05) 100%);
      z-index: -1;
      pointer-events: none;
    }
    
    .window::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0, 174, 255, 0.8), transparent);
      z-index: 1;
      pointer-events: none;
    }
    
    .window-header {
      border-bottom: 1px solid rgba(0, 160, 255, 0.3) !important;
      padding: 8px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      background: rgba(4, 34, 66, 0.7) !important;
    }
    
    .window-title {
      color: #00a8ff !important;
      font-weight: bold !important;
      text-shadow: 0 0 10px rgba(0, 168, 255, 0.7) !important;
      font-family: 'Rajdhani', sans-serif !important;
    }
    
    .window-content {
      max-height: calc(80vh - 40px) !important;
      overflow-y: auto !important;
      scrollbar-width: thin !important;
      scrollbar-color: rgba(0, 140, 255, 0.5) rgba(0, 60, 120, 0.1) !important;
    }
    
    .window-content::-webkit-scrollbar {
      width: 6px !important;
    }
    
    .window-content::-webkit-scrollbar-track {
      background: rgba(0, 60, 120, 0.1) !important;
    }
    
    .window-content::-webkit-scrollbar-thumb {
      background-color: rgba(0, 140, 255, 0.5) !important;
      border-radius: 3px !important;
    }
    
    /* Holographic Effects */
    @keyframes hologram-scan {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
    
    #holographic-scan-lines {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        rgba(0, 200, 255, 0.03) 1px,
        transparent 2px
      );
      background-size: 100% 4px;
      pointer-events: none;
      z-index: 9999;
    }
    

    
    /* Window opening animation */
    @keyframes window-glitch {
      0% { clip-path: inset(0 0 0 0); }
      5% { clip-path: inset(33% 0 66% 0); }
      10% { clip-path: inset(50% 0 50% 0); }
      15% { clip-path: inset(25% 0 75% 0); }
      20% { clip-path: inset(80% 0 20% 0); }
      25% { clip-path: inset(0 0 0 0); }
      30% { clip-path: inset(0 0 100% 0); }
      35% { clip-path: inset(100% 0 0 0); }
      40% { clip-path: inset(43% 0 57% 0); }
      45% { clip-path: inset(0 0 0 0); }
      100% { clip-path: inset(0 0 0 0); }
    }
    
    .window-opening {
      animation: window-glitch 0.5s forwards;
    }
    
    /* Hologram flicker */
    @keyframes hologram-flicker {
      0% { opacity: 1; transform: scale(1); filter: brightness(1); }
      25% { opacity: 0.8; transform: scale(1.01) skewX(1deg); filter: brightness(1.2) hue-rotate(5deg); }
      50% { opacity: 0.9; transform: scale(0.99); filter: brightness(0.9); }
      75% { opacity: 1; transform: scale(1.01) skewX(-1deg); filter: brightness(1.1) hue-rotate(-5deg); }
      100% { opacity: 1; transform: scale(1); filter: brightness(1); }
    }
    
    .hologram-flicker {
      animation: hologram-flicker 5s linear;
    }
    
    /* Button styling */
    .window button {
      background: rgba(0, 90, 180, 0.4);
      border: 1px solid rgba(0, 174, 255, 0.5);
      color: #a0e0ff !important;
      padding: 5px 12px !important;
      border-radius: 4px !important;
      transition: all 0.2s ease !important;
    }
    
    .window button:hover {
      background: rgba(0, 120, 225, 0.6);
      box-shadow: 0 0 10px rgba(0, 160, 255, 0.5);
      text-shadow: 0 0 5px rgba(0, 200, 255, 0.7);
    }
    
    /* TaskBar styling */
    .taskbar {
      background: rgba(4, 20, 40, 0.85) !important;
      border-top: 1px solid rgba(0, 140, 255, 0.5) !important;
      box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.3) !important;
    }
    
    .taskbar-item {
      border: 1px solid rgba(0, 140, 255, 0.3) !important;
      background: rgba(8, 40, 70, 0.5) !important;
      margin: 5px !important;
      border-radius: 4px !important;
      transition: all 0.2s ease !important;
    }
    
    .taskbar-item:hover {
      background: rgba(10, 60, 100, 0.7) !important;
      box-shadow: 0 0 10px rgba(0, 140, 255, 0.4) !important;
    }
    
    .taskbar-item.active {
      background: rgba(0, 80, 160, 0.6) !important;
      border-color: rgba(0, 180, 255, 0.7) !important;
      box-shadow: 0 0 10px rgba(0, 180, 255, 0.5) !important;
    }
  `,
    document.head.appendChild(n);
    const e = document.createElement("link");
    e.rel = "stylesheet",
    e.href = "https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap",
    document.head.appendChild(e)
}
Ft();
function Gt() {
    console.log("Initializing quest suggestion system");
    const n = document.getElementById("suggestQuestButton");
    n && n.remove();
    const e = document.getElementById("suggestQuestWindow");
    e && e.remove();
    const t = document.createElement("div");
    t.id = "suggestQuestButton",
    t.innerHTML = '<i class="fas fa-lightbulb"></i><span class="sl-button-label">SUGGEST QUEST</span>',
    t.classList.add("floating-suggest-button", "sl-action-button"),
    document.body.appendChild(t);
    const i = document.createElement("div");
    i.id = "suggestQuestWindow",
    i.className = "window",
    i.style.position = "absolute",
    i.style.width = "500px",
    i.style.height = "450px",
    i.style.display = "none",
    i.innerHTML = `
    <div class="window-header">
      <span class="window-title">QUEST SUGGESTIONS</span>
      <div class="window-controls">
        <button class="window-minimize">_</button>
        <button class="window-close">×</button>
      </div>
    </div>
    <div class="window-body">
      <div class="sl-system-header">
        <div class="sl-system-line"></div>
        <div class="sl-title">SOLO AI QUEST GENERATOR</div>
        <div class="sl-system-line"></div>
      </div>
      <div id="suggestionInputContainer">
        <p>Tell SOLO about your goals and interests:</p>
        <textarea id="suggestionGoalsText" placeholder="Describe your goals, what you want to improve, your interests..."></textarea>
        
        <div class="suggestion-type-selector">
          <label>
            <input type="radio" name="questType" value="normal" checked>
            <span>Normal Quest</span>
          </label>
          <label>
            <input type="radio" name="questType" value="daily">
            <span>Daily Quest</span>
          </label>
        </div>
        
        <button id="generateSuggestionBtn" class="sl-action-button">
          <span class="sl-button-label">GENERATE SUGGESTIONS</span>
        </button>
      </div>
      
      <div id="suggestionResults"></div>
      
      <div class="sl-system-footer">
        <div class="sl-footer-line"></div>
        <div class="sl-footer-text">SYSTEM READY</div>
        <div class="sl-footer-line"></div>
      </div>
    </div>
  `,
    document.body.appendChild(i);
    let o = !1;
    const s = () => {
        if (o)
            return;
        const c = window.innerWidth
          , p = window.innerHeight
          , f = 500
          , m = 450;
        i.style.left = `${(c - f) / 2}px`,
        i.style.top = `${(p - m) / 2}px`,
        o = !0
    }
    ;
    if (typeof b < "u")
        b.windows || (b.windows = {}),
        b.windows.suggestQuestWindow = i,
        b.makeDraggable(i);
    else {
        console.error("windowSystem is not defined");
        let c = !1, p, f;
        const m = i.querySelector(".window-header");
        m && (m.style.cursor = "move",
        m.addEventListener("mousedown", g => {
            o || s(),
            c = !0;
            const y = i.getBoundingClientRect();
            p = g.clientX - y.left,
            f = g.clientY - y.top,
            m.style.userSelect = "none"
        }
        ),
        document.addEventListener("mousemove", g => {
            if (!c)
                return;
            const y = g.clientX - p
              , w = g.clientY - f;
            i.style.left = `${y}px`,
            i.style.top = `${w}px`
        }
        ),
        document.addEventListener("mouseup", () => {
            c = !1,
            m.style.userSelect = ""
        }
        ))
    }
    function r() {
        if (o || s(),
        typeof b < "u" && b.showWindow)
            try {
                i.style.display = "block",
                b.showWindow("suggestQuestWindow")
            } catch (c) {
                console.error("Error using windowSystem.showWindow:", c),
                i.style.display = "block",
                i.classList.add("show")
            }
        else
            i.style.display = "block",
            i.classList.add("show");
        setTimeout( () => {
            const c = document.getElementById("suggestionGoalsText");
            c && c.focus()
        }
        , 100)
    }
    t.addEventListener("click", () => {
        console.log("Suggestion button clicked"),
        r()
    }
    );
    const a = document.getElementById("generateSuggestionBtn");
    a && a.addEventListener("click", Te);
    const d = i.querySelector(".window-close");
    d && d.addEventListener("click", () => {
        console.log("Close button clicked"),
        i.style.display = "none",
        typeof b < "u" && b.closeWindow ? b.closeWindow("suggestQuestWindow") : i.classList.remove("show")
    }
    );
    const l = i.querySelector(".window-minimize");
    return l && l.addEventListener("click", () => {
        console.log("Minimize button clicked"),
        typeof b < "u" && b.closeWindow ? b.closeWindow("suggestQuestWindow") : (i.style.display = "none",
        i.classList.remove("show"))
    }
    ),
    Yt(),
    console.log("Quest suggestion system initialized"),
    {
        window: i,
        showWindow: r
    }
}
async function Ht(n) {
    if (!(!h || !n))
        try {
            await x.collection("players").doc(h.uid).collection("preferences").doc("suggestions").set({
                goalsText: n,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, {
                merge: !0
            })
        } catch (e) {
            console.error("Error saving suggestion text:", e)
        }
}
async function Te() {
    const n = document.getElementById("suggestionGoalsText").value.trim()
      , e = document.querySelector('input[name="questType"]:checked').value
      , t = document.getElementById("suggestionResults");
    if (!n) {
        t.innerHTML = '<div class="error-message">Please describe your goals first.</div>';
        return
    }
    await Ht(n),
    t.innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Generating suggestions...</p></div>';
    try {
        const s = (await x.collection("players").doc(h.uid).get()).data()
          , r = `
Create a specific, actionable quest for someone with this goal: "${n}"

The quest should be CONCRETE and DETAILED, breaking down a specific action they can take to achieve their goal.
For example:
- If they want to be a web developer: Create a quest about writing HTML/CSS for 30 minutes or building a specific component
- If they want to get fit: Create a quest for specific exercises like "Complete 3 sets of pushups and squats"
- If they want to learn a language: Create a quest like "Practice Spanish verbs for 20 minutes"

IMPORTANT: Respond ONLY with a JSON object using this exact format:

{
  "title": "Brief, specific title (3-5 words)",
  "description": "Detailed instructions with specific actions to take",
  "targetCount": 5,
  "metric": "specific unit of measurement",
  "type": "${e}"
}

Make sure:
1. Title is brief but specific to the action
2. Description has DETAILED instructions on exactly what to do
3. TargetCount is a number from 1-30
4. Metric is specific (reps, minutes, pages, sessions, etc.)
`
          , a = await soloAISystem.callDeepSeekAPI(r);
        console.log("AI Response:", a);
        let d = null;
        try {
            const l = a.match(/\{[\s\S]*\}/);
            if (l) {
                const c = l[0].trim();
                d = JSON.parse(c),
                console.log("JSON parsing successful:", d)
            }
        } catch (l) {
            console.error("JSON parse error:", l)
        }
        if (!d) {
            let l = ""
              , c = ""
              , p = "sessions"
              , f = 5;
            const m = n.toLowerCase();
            m.includes("stronger") || m.includes("fit") || m.includes("muscle") || m.includes("lean") || m.includes("weight") || m.includes("exercise") ? (l = "Strength Training Circuit",
            c = "Complete a full-body workout: 3 sets of 10 pushups, 15 squats, 10 lunges per leg, and 30-second plank. Rest 60 seconds between exercises.",
            p = "workouts",
            f = 3) : m.includes("code") || m.includes("programming") || m.includes("developer") || m.includes("web") ? (l = "Coding Practice Session",
            c = "Spend time writing code for your project. Focus on implementing one specific feature or fixing one bug completely.",
            p = "sessions",
            f = 4) : m.includes("read") || m.includes("book") || m.includes("study") ? (l = "Focused Study Session",
            c = "Complete a focused study session with no distractions. Take notes on key concepts and review them afterward.",
            p = "pages",
            f = 15) : m.includes("language") || m.includes("speak") || m.includes("vocabulary") ? (l = "Language Practice",
            c = "Practice your target language by learning 10 new vocabulary words and using each in a complete sentence.",
            p = "minutes",
            f = 20) : (l = "Goal Progress Session",
            c = "Work on your goal of " + n + ". Break it down into small steps and complete one step fully.",
            p = "sessions",
            f = 3),
            d = {
                title: l,
                description: c,
                targetCount: f,
                metric: p,
                type: e
            },
            console.log("Using specialized default quest:", d)
        }
        d.title = d.title || "Goal Progress",
        d.description = d.description || `Work on specific actions to achieve: ${n}`,
        d.targetCount = parseInt(d.targetCount) || 5,
        d.metric = d.metric || "times",
        d.type = e,
        t.innerHTML = `
      <div class="suggestion-card">
        <h3>${d.title}</h3>
        <p>${d.description}</p>
        <div class="quest-details">
          <span>Target: ${d.targetCount} ${d.metric}</span>
          <span>Type: ${d.type}</span>
        </div>
        <div class="suggestion-actions">
          <button id="acceptSuggestion" class="sl-action-button">
            <span class="sl-button-label">ACCEPT QUEST</span>
          </button>
          <button id="rejectSuggestion" class="sl-action-button sl-delete-button">
            <span class="sl-button-label">GENERATE ANOTHER</span>
          </button>
        </div>
      </div>
    `,
        window.currentSuggestion = d,
        document.getElementById("acceptSuggestion").addEventListener("click", () => {
            Ut(d)
        }
        ),
        document.getElementById("rejectSuggestion").addEventListener("click", () => {
            Te()
        }
        )
    } catch (i) {
        console.error("Error generating suggestion:", i),
        t.innerHTML = `
      <div class="error-message">
        Error generating suggestion. Please try again.
        <button id="retryGenerateBtn" class="sl-action-button" style="margin-top:10px;width:100%">
          <span class="sl-button-label">RETRY</span>
        </button>
      </div>
    `;
        const o = document.getElementById("retryGenerateBtn");
        o && o.addEventListener("click", Te)
    }
}
async function Ut(n) {
    try {
        await createQuest(n),
        printToTerminal(`Quest "${n.title}" has been added to your ${n.type} quests!`, "success"),
        await x.collection("players").doc(h.uid).collection("suggestionHistory").add({
            quest: n,
            action: "accepted",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }),
        b.closeWindow("suggestQuestWindow"),
        n.type === "daily" ? await b.updateDailyQuestsWindow() : await b.updateQuestsWindow()
    } catch (e) {
        console.error("Error accepting suggestion:", e),
        printToTerminal("Failed to add quest. Please try again.", "error")
    }
}
function Yt() {
    const n = document.createElement("style");
    n.textContent = `
    .floating-suggest-button {
      position: fixed;
      bottom: 120px;
      right: 20px;
      background: rgba(0, 80, 160, 0.7) !important;
      color: #00c8ff !important;
      padding: 10px 15px;
      border-radius: 50px;
      box-shadow: 0 0 15px rgba(0, 190, 255, 0.4);
      cursor: pointer;
      z-index: 1000;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
      border: 1px solid rgba(0, 160, 255, 0.5) !important;
      letter-spacing: 1px;
      padding: 6px 12px;
    background: rgba(0, 80, 160, 0.4);
    color: #00c8ff;
    border-radius: 3px;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    letter-spacing: 0.5px;
    font-size: 12px;
    border: 1px solid rgba(0, 160, 255, 0.3);
    }
    
    .floating-suggest-button:hover {
      background: rgba(0, 100, 200, 0.8) !important;
      box-shadow: 0 0 20px rgba(0, 210, 255, 0.6);
      transform: translateY(-2px);
    }
    
    .floating-suggest-button i {
      color: #00d8ff;
      margin-right: 5px;
    }
    
    #suggestQuestWindow {
      background: rgba(8, 19, 34, 0.85) !important;
      border: 1px solid rgba(0, 160, 255, 0.6) !important;
      box-shadow: 0 0 15px rgba(0, 190, 255, 0.4), inset 0 0 20px rgba(0, 130, 255, 0.1) !important;
      width: 500px;
      height: fit-content;
    }
    
    #suggestQuestWindow::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        repeating-linear-gradient(
          transparent,
          transparent 2px,
          rgba(0, 128, 255, 0.03) 3px,
          transparent 4px
        );
      pointer-events: none;
      z-index: 0;
    }
    
    #suggestionGoalsText {
      width: 100%;
      height: 120px;
      padding: 12px;
      margin: 10px 0 15px;
      background: rgba(0, 40, 80, 0.4);
      color: #e0f7ff;
      border: 1px solid rgba(0, 160, 255, 0.3);
      border-radius: 4px;
      resize: none;
      font-family: 'Rajdhani', sans-serif !important;
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }
    
    #suggestionGoalsText:focus {
      border-color: rgba(0, 180, 255, 0.5);
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 200, 255, 0.4);
      outline: none;
    }
    
    #suggestionGoalsText::placeholder {
      color: rgba(150, 200, 255, 0.5);
    }
    
    .suggestion-type-selector {
      display: flex;
      gap: 20px;
      margin-bottom: 15px;
      padding: 10px;
      background: rgba(0, 30, 60, 0.3);
      border-radius: 5px;
      border: 1px solid rgba(0, 160, 255, 0.2);
    }
    
    .suggestion-type-selector label {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      color: #a0e0ff;
      font-weight: 500;
      transition: all 0.2s ease;
    }
    
    .suggestion-type-selector label:hover {
      color: #00d8ff;
    }
    
    .suggestion-type-selector input {
      margin: 0;
      accent-color: #00a8ff;
    }
    
    #generateSuggestionBtn {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      background: rgba(0, 80, 160, 0.4);
      color: #00c8ff;
      border: 1px solid rgba(0, 160, 255, 0.4);
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
      letter-spacing: 1px;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
    }
    
    #generateSuggestionBtn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.2), transparent);
      transition: all 0.5s ease;
    }
    
    #generateSuggestionBtn:hover {
      background: rgba(0, 100, 200, 0.5);
      box-shadow: 0 0 10px rgba(0, 180, 255, 0.3);
      transform: translateY(-2px);
    }
    
    #generateSuggestionBtn:hover::before {
      left: 100%;
    }
    
    .suggestion-card {
      margin-top: 20px;
      padding: 15px;
      background: rgba(0, 30, 60, 0.3);
      border-left: 3px solid rgba(0, 160, 255, 0.5);
      border-radius: 0 3px 3px 0;
      transition: all 0.3s ease;
    }
    
    .suggestion-card:hover {
      background: rgba(0, 40, 80, 0.4);
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    
    .suggestion-card h3 {
      margin-top: 0;
      color: #00c8ff;
      font-size: 16px;
      font-weight: 600;
      text-shadow: 0 0 5px rgba(0, 200, 255, 0.3);
    }
    
    .quest-details {
      margin: 15px 0;
      display: flex;
      justify-content: space-between;
      font-size: 0.9em;
      color: #88ccff;
      background: rgba(0, 40, 80, 0.3);
      padding: 5px 8px;
      border-radius: 3px;
    }
    
    .suggestion-actions {
      display: flex;
      gap: 10px;
      margin-top: 15px;
    }
    
    .suggestion-actions button {
      flex: 1;
      padding: 8px 0;
      cursor: pointer;
      border: none;
      border-radius: 3px;
      font-weight: 600;
      letter-spacing: 0.5px;
      transition: all 0.2s ease;
    }
    
    #acceptSuggestion {
      background: rgba(0, 80, 160, 0.4);
      color: #00c8ff;
      border: 1px solid rgba(0, 160, 255, 0.4);
    }
    
    #acceptSuggestion:hover {
      background: rgba(0, 100, 200, 0.5);
      transform: translateY(-1px);
    }
    
    #rejectSuggestion {
      background: rgba(40, 40, 40, 0.4);
      color: #a0a0a0;
      border: 1px solid rgba(100, 100, 100, 0.4);
    }
    
    #rejectSuggestion:hover {
      background: rgba(60, 60, 60, 0.5);
      transform: translateY(-1px);
    }
    
    .loading-spinner {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      color: #00a8ff;
    }
    
    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid rgba(0, 160, 255, 0.2);
      border-radius: 50%;
      border-left-color: #00c8ff;
      animation: spin 1s linear infinite;
      box-shadow: 0 0 10px rgba(0, 180, 255, 0.3);
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .error-message {
      color: #ff8080;
      text-align: center;
      margin-top: 20px;
      background: rgba(80, 20, 20, 0.3);
      padding: 10px;
      border-radius: 3px;
      border: 1px solid rgba(255, 100, 100, 0.3);
    }
    
    #suggestionInputContainer {
      padding: 0 15px;
    }
    
    #suggestionInputContainer p {
      color: #00a8ff;
      font-weight: 500;
      margin-top: 5px;
    }
    
    #suggestionResults {
      padding: 0 15px;
      margin-bottom: 15px;
      max-height: 200px;
      overflow-y: auto;
    }
    
    #suggestionResults::-webkit-scrollbar {
      width: 6px;
    }
    
    #suggestionResults::-webkit-scrollbar-track {
      background: rgba(0, 20, 40, 0.3);
      border-radius: 3px;
    }
    
    #suggestionResults::-webkit-scrollbar-thumb {
      background: rgba(0, 140, 255, 0.5);
      border-radius: 3px;
    }
  `,
    document.head.appendChild(n)
}
Gt();
function ot(n, e) {
    const t = document.querySelector(".sl-level-animation-container");
    t && document.body.removeChild(t);
    const i = document.createElement("div");
    i.className = "sl-level-animation-container sl-level-down",
    document.body.appendChild(i);
    const o = document.createElement("div");
    o.className = "sl-level-animation-inner",
    i.appendChild(o);
    const s = document.createElement("div");
    s.className = "sl-level-display",
    o.appendChild(s);
    const r = document.createElement("div");
    r.className = "sl-level-text",
    r.textContent = "LEVEL",
    s.appendChild(r);
    const a = document.createElement("div");
    a.className = "sl-level-number-container",
    s.appendChild(a);
    const d = document.createElement("div");
    d.className = "sl-level-number sl-old-level",
    d.textContent = n,
    a.appendChild(d);
    const l = document.createElement("div");
    l.className = "sl-level-number sl-new-level",
    l.textContent = e,
    a.appendChild(l);
    const c = document.createElement("div");
    c.className = "sl-status-text",
    c.textContent = "LEVEL DOWN",
    s.appendChild(c);
    try {
        Q.playVoiceLine("PENALTY")
    } catch (p) {
        console.log("Voice line not available:", p)
    }
    setTimeout( () => {
        i.classList.add("sl-active"),
        c.classList.add("sl-status-active")
    }
    , 100),
    setTimeout( () => {
        d.classList.add("sl-number-exit"),
        l.classList.add("sl-number-enter"),
        o.classList.add("sl-flash-red")
    }
    , 1500),
    setTimeout( () => {
        i.classList.add("sl-fade-out"),
        setTimeout( () => {
            document.body.contains(i) && document.body.removeChild(i)
        }
        , 800)
    }
    , 4e3)
}
function Vt(n, e) {
    const t = document.querySelector(".sl-level-animation-container");
    t && document.body.removeChild(t);
    const i = document.createElement("div");
    i.className = "sl-level-animation-container sl-level-up",
    document.body.appendChild(i);
    for (let p = 0; p < 30; p++) {
        const f = document.createElement("div");
        f.className = "sl-particle";
        const m = 3 + Math.random() * 7
          , g = 30 + Math.random() * 40
          , y = Math.random() * 1.5
          , w = 1 + Math.random() * 2;
        f.style.width = `${m}px`,
        f.style.height = `${m}px`,
        f.style.left = `${g}%`,
        f.style.animationDelay = `${y}s`,
        f.style.animationDuration = `${w}s`,
        i.appendChild(f)
    }
    const o = document.createElement("div");
    o.className = "sl-level-animation-inner",
    i.appendChild(o);
    const s = document.createElement("div");
    s.className = "sl-level-display",
    o.appendChild(s);
    const r = document.createElement("div");
    r.className = "sl-level-text",
    r.textContent = "LEVEL",
    s.appendChild(r);
    const a = document.createElement("div");
    a.className = "sl-level-number-container",
    s.appendChild(a);
    const d = document.createElement("div");
    d.className = "sl-level-number sl-old-level",
    d.textContent = n,
    a.appendChild(d);
    const l = document.createElement("div");
    l.className = "sl-level-number sl-new-level",
    l.textContent = e,
    a.appendChild(l);
    const c = document.createElement("div");
    c.className = "sl-status-text",
    c.textContent = "LEVEL UP",
    s.appendChild(c);
    try {
        Q.playVoiceLine("LEVEL_UP")
    } catch (p) {
        console.log("Voice line not available:", p)
    }
    setTimeout( () => {
        i.classList.add("sl-active"),
        c.classList.add("sl-status-active")
    }
    , 100),
    setTimeout( () => {
        d.classList.add("sl-number-exit"),
        l.classList.add("sl-number-enter"),
        o.classList.add("sl-flash-blue")
    }
    , 1500),
    setTimeout( () => {
        i.classList.add("sl-fade-out"),
        setTimeout( () => {
            document.body.contains(i) && document.body.removeChild(i)
        }
        , 800)
    }
    , 4500)
}
function jt() {
    const n = document.createElement("style");
    n.textContent = `
    .sl-level-animation-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      background-color: rgba(0, 0, 0, 0.85);
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    
    .sl-active {
      opacity: 1;
    }
    
    /* Level Down Styles */
    .sl-level-down .sl-level-animation-inner {
      width: 400px;
      height: 300px;
      border: none;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 20px rgba(255, 0, 0, 0.5), inset 0 0 20px rgba(255, 0, 0, 0.3);
      position: relative;
      transition: all 0.3s ease;
      animation: sl-float 1.5s ease-in-out infinite alternate;
    }
    
    .sl-level-down .sl-old-level {
      color: #f8d210;
      text-shadow: 0 0 15px rgba(248, 210, 16, 0.7);
    }
    
    .sl-level-down .sl-new-level {
      color: #ff4747;
      text-shadow: 0 0 15px rgba(255, 71, 71, 0.7);
    }
    
    .sl-level-down .sl-status-text {
      color: #ff4747;
    }
    
    .sl-flash-red {
      animation: sl-red-flash 0.5s ease;
    }
    
    /* Level Up Styles */
    .sl-level-up .sl-level-animation-inner {
      width: 400px;
      height: 300px;
      border: none;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 20px rgba(0, 200, 255, 0.5), inset 0 0 20px rgba(0, 200, 255, 0.3);
      position: relative;
      transition: all 0.3s ease;
      animation: sl-float 1.5s ease-in-out infinite alternate;
    }
    
    .sl-level-up .sl-old-level {
      color: #3366ff;
      text-shadow: 0 0 15px rgba(51, 102, 255, 0.7);
    }
    
    .sl-level-up .sl-new-level {
      color: #00ff99;
      text-shadow: 0 0 15px rgba(0, 255, 153, 0.7);
    }
    
    .sl-level-up .sl-status-text {
      color: #00ff99;
    }
    
    .sl-flash-blue {
      animation: sl-blue-flash 0.5s ease;
    }
    
    /* Particle effect for level up */
    .sl-particle {
      position: absolute;
      background-color: #00ffcc;
      border-radius: 50%;
      top: 50%;
      opacity: 0;
      animation: sl-particle-float 3s ease-out forwards;
    }
    
    /* Shared Styles */
    .sl-level-display {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 20px;
    }
    
    .sl-level-text {
      font-size: 28px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 20px;
      letter-spacing: 5px;
      font-weight: bold;
    }
    
    .sl-level-number-container {
      position: relative;
      height: 120px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      overflow: hidden;
    }
    
    .sl-level-number {
      font-size: 120px;
      font-weight: bold;
      position: absolute;
      transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .sl-new-level {
      transform: translateY(100px);
      opacity: 0;
    }
    
    .sl-number-exit {
      transform: translateY(-100px);
      opacity: 0;
    }
    
    .sl-number-enter {
      transform: translateY(0);
      opacity: 1;
    }
    
    .sl-status-text {
      font-size: 24px;
      letter-spacing: 3px;
      font-weight: bold;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.5s ease;
    }
    
    .sl-status-active {
      opacity: 1;
      transform: translateY(0);
    }
    
    .sl-fade-out {
      opacity: 0;
      transition: opacity 0.8s ease;
    }
    
    @keyframes sl-float {
      0% { transform: translateY(0); }
      100% { transform: translateY(-10px); }
    }
    
    @keyframes sl-red-flash {
      0% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.5), inset 0 0 20px rgba(255, 0, 0, 0.3); }
      50% { box-shadow: 0 0 40px rgba(255, 0, 0, 0.8), inset 0 0 40px rgba(255, 0, 0, 0.6); }
      100% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.5), inset 0 0 20px rgba(255, 0, 0, 0.3); }
    }
    
    @keyframes sl-blue-flash {
      0% { box-shadow: 0 0 20px rgba(0, 200, 255, 0.5), inset 0 0 20px rgba(0, 200, 255, 0.3); }
      50% { box-shadow: 0 0 40px rgba(0, 200, 255, 0.8), inset 0 0 40px rgba(0, 200, 255, 0.6); }
      100% { box-shadow: 0 0 20px rgba(0, 200, 255, 0.5), inset 0 0 20px rgba(0, 200, 255, 0.3); }
    }
    
    @keyframes sl-particle-float {
      0% { 
        transform: translate(-50%, -50%);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      100% { 
        transform: translate(-50%, -300%);
        opacity: 0;
      }
    }
  `,
    document.head.appendChild(n)
}
function Xt() {
    jt()
}
function Ie() {
    var i, o, s;
    if (!h || !u)
        return;
    const n = u.streak || 0
      , e = ((i = u.profile) == null ? void 0 : i.name) || "Hunter"
      , t = ((o = u.profile) == null ? void 0 : o.title) || null;
    if (n >= 3) {
        const r = Kt(e, n, t)
          , a = document.querySelector(".terminal-prompt-user");
        a && (a.innerHTML = r,
        (s = u.profile) != null && s.titleColor && (a.style.color = u.profile.titleColor));
        const d = document.getElementById("status-username");
        d && (d.innerHTML = r);
        const l = document.getElementById("profile-name");
        l && (l.innerHTML = r)
    } else
        updateTerminalPrompt()
}
function Kt(n, e, t=null) {
    let i = n;
    return t && (i = `[${t}] ${i}`),
    !e || e < 3 ? i : `
    <span class="streak-username-container">
      <span class="streak-username">${i}</span>
      <i class="fa-solid fa-fire streak-flame-icon"></i>
      <span class="streak-counter">${e}</span>
    </span>
  `
}
function Jt() {
    const n = document.createElement("style");
    n.textContent = `
    .streak-username-container {
      position: relative;
      display: inline-block;
      padding-right: 20px;
    }
    
    .streak-username {
      position: relative;
      z-index: 2;
    }
    
    .streak-flame-icon {
      color: #ff6a00;
      position: absolute;
      top: -5px;
      right: 3px;
      font-size: 18px;
      z-index: 1;
      filter: drop-shadow(0 0 2px rgba(255, 0, 0, 0.4));
    }
    
    .streak-counter {
      position: absolute;
      top: -2px;
      right: 4px;
      font-size: 9px;
      padding: 0;
      color: white;
      background-color: #ff6a00;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      font-weight: bold;
    }
  `,
    document.head.appendChild(n)
}
function Zt() {
    const n = document.getElementById("profile-window");
    if (!n)
        return;
    let e = n.querySelector(".edit-profile-section");
    e || (e = document.createElement("div"),
    e.className = "edit-profile-section",
    n.appendChild(e));
    const t = `
    <div class="profile-edit-item">
      <label for="profileTitleSelect">Title:</label>
      <select id="profileTitleSelect" class="profile-select">
        <option value="Novice">Novice</option>
      </select>
    </div>
  `;
    e.innerHTML = t + `
    <div class="profile-edit-item">
      <button id="editProfileBtn" class="sl-button">Edit Profile</button>
    </div>
  `;
    const i = document.getElementById("editProfileBtn");
    i && i.addEventListener("click", () => {
        Ke()
    }
    )
}
Zt();
function ei(n, e) {
    setTimeout( () => {
        const t = document.querySelector(".sl-rank-animation-container");
        t && document.body.removeChild(t);
        const i = {
            E: {
                shape: "polygon(50% 0%, 100% 86%, 0% 86%)",
                color: "#88b0d0",
                glow: "rgba(136, 176, 208, 0.5)"
            },
            D: {
                shape: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                color: "#66b8e0",
                glow: "rgba(102, 184, 224, 0.6)"
            },
            C: {
                shape: "polygon(50% 0%, 95% 35%, 80% 90%, 20% 90%, 5% 35%)",
                color: "#44c0f0",
                glow: "rgba(68, 192, 240, 0.7)"
            },
            B: {
                shape: "polygon(50% 0%, 85% 25%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 15% 25%)",
                color: "#22c8ff",
                glow: "rgba(34, 200, 255, 0.8)"
            },
            A: {
                shape: "polygon(50% 0%, 75% 15%, 100% 40%, 95% 75%, 70% 100%, 30% 100%, 5% 75%, 0% 40%, 25% 15%)",
                color: "linear-gradient(135deg, #00c8ff, #0080ff)",
                glow: "rgba(0, 200, 255, 0.9)"
            },
            S: {
                shape: "polygon(50% 0%, 72% 10%, 90% 30%, 100% 55%, 90% 80%, 65% 100%, 35% 100%, 10% 80%, 0% 55%, 10% 30%, 28% 10%)",
                color: "linear-gradient(135deg, #7700ff, #00d8ff)",
                glow: "rgba(128, 0, 255, 1.0)"
            }
        }
          , o = document.createElement("div");
        o.className = "sl-rank-animation-container",
        document.body.appendChild(o);
        const s = e === "S" ? 60 : e === "A" ? 40 : 30
          , r = e === "S" ? ["#7700ff", "#00d8ff", "#ff00d0"] : e === "A" ? ["#00c8ff", "#0080ff", "#00ffff"] : [i[e].color];
        for (let g = 0; g < s; g++) {
            const y = document.createElement("div");
            y.className = "sl-rank-particle";
            const w = 3 + Math.random() * 8
              , v = Math.random() * 100
              , T = Math.random() * 100
              , E = Math.random() * 2
              , C = 1 + Math.random() * 3
              , L = Math.floor(Math.random() * r.length);
            y.style.width = `${w}px`,
            y.style.height = `${w}px`,
            y.style.left = `${v}%`,
            y.style.top = `${T}%`,
            y.style.backgroundColor = r[L],
            y.style.animationDelay = `${E}s`,
            y.style.animationDuration = `${C}s`,
            o.appendChild(y)
        }
        const a = document.createElement("div");
        a.className = "sl-rank-animation-inner",
        o.appendChild(a);
        const d = document.createElement("div");
        d.className = "sl-rank-display",
        a.appendChild(d);
        const l = document.createElement("div");
        l.className = "sl-rank-text",
        l.textContent = "HUNTER RANK",
        d.appendChild(l);
        const c = document.createElement("div");
        c.className = "sl-rank-badge-container",
        d.appendChild(c);
        const p = document.createElement("div");
        p.className = "sl-rank-badge sl-old-rank",
        p.textContent = n,
        p.style.clipPath = i[n].shape,
        p.style.background = i[n].color,
        p.style.boxShadow = `0 0 15px ${i[n].glow}`,
        c.appendChild(p);
        const f = document.createElement("div");
        f.className = "sl-rank-badge sl-new-rank",
        f.textContent = e,
        f.style.clipPath = i[e].shape,
        f.style.background = i[e].color,
        f.style.boxShadow = `0 0 20px ${i[e].glow}`,
        c.appendChild(f);
        const m = document.createElement("div");
        m.className = "sl-rank-status-text",
        m.textContent = "RANK UP",
        d.appendChild(m);
        try {
            Q.playVoiceLine("RANK_UP")
        } catch {
            console.log("Voice line not available, using default sound"),
            notificationSystem.playSound("achievement")
        }
        setTimeout( () => {
            o.classList.add("sl-active"),
            m.classList.add("sl-status-active")
        }
        , 100),
        setTimeout( () => {
            p.classList.add("sl-badge-exit"),
            f.classList.add("sl-badge-enter"),
            a.classList.add("sl-flash")
        }
        , 1500),
        (e === "S" || e === "A") && setTimeout( () => {
            if (a.classList.add("sl-special-effect"),
            e === "S") {
                const g = document.createElement("div");
                g.className = "sl-shockwave",
                o.appendChild(g)
            }
        }
        , 2e3),
        setTimeout( () => {
            o.classList.add("sl-fade-out"),
            setTimeout( () => {
                document.body.contains(o) && document.body.removeChild(o)
            }
            , 1e3)
        }
        , 5500)
    }
    , 5e3)
}
function ti() {
    if (document.getElementById("rankAnimationStyles"))
        return;
    const n = document.createElement("style");
    n.id = "rankAnimationStyles",
    n.textContent = `
    .sl-rank-animation-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.85);
      z-index: 10000;
      opacity: 0;
      transition: opacity 0.5s ease;
      pointer-events: none;
    }
    
    .sl-rank-animation-container.sl-active {
      opacity: 1;
    }
    
    .sl-rank-animation-container.sl-fade-out {
      opacity: 0;
    }
    
    .sl-rank-animation-inner {
      background: rgba(0, 24, 48, 0.9);
      border: 2px solid #0088ff;
      border-radius: 10px;
      padding: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 30px rgba(0, 136, 255, 0.5);
      transform: scale(0.9);
      transition: transform 0.5s ease, box-shadow 0.5s ease;
    }
    
    .sl-rank-animation-inner.sl-flash {
      animation: rankFlash 1s forwards;
    }
    
    .sl-rank-animation-inner.sl-special-effect {
      animation: rankPulse 2s infinite;
    }
    
    .sl-rank-display {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    
    .sl-rank-text {
      font-size: 28px;
      font-weight: bold;
      color: #00ffff;
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
      letter-spacing: 2px;
    }
    
    .sl-rank-badge-container {
      position: relative;
      width: 150px;
      height: 150px;
      margin: 20px 0;
    }
    
    .sl-rank-badge {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 72px;
      font-weight: bold;
      color: white;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      transition: transform 1s ease, opacity 1s ease;
    }
    
    .sl-old-rank {
      opacity: 1;
      transform: scale(1);
    }
    
    .sl-new-rank {
      opacity: 0;
      transform: scale(0.5);
    }
    
    .sl-badge-exit {
      opacity: 0;
      transform: scale(0.5) rotate(-30deg);
    }
    
    .sl-badge-enter {
      opacity: 1;
      transform: scale(1.2);
      animation: badgeEntrance 1.5s forwards;
    }
    
    .sl-rank-status-text {
      font-size: 36px;
      font-weight: bold;
      color: white;
      margin-top: 20px;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.5s ease;
    }
    
    .sl-rank-status-text.sl-status-active {
      opacity: 1;
      transform: translateY(0);
    }
    
    .sl-rank-particle {
      position: absolute;
      border-radius: 50%;
      opacity: 0;
      animation: particleRise 3s ease-out forwards;
    }
    
    .sl-shockwave {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.8);
      opacity: 0.8;
      animation: shockwave 1.5s ease-out forwards;
    }
    
    @keyframes rankFlash {
      0% { box-shadow: 0 0 30px rgba(0, 136, 255, 0.5); }
      50% { box-shadow: 0 0 50px rgba(255, 255, 255, 0.9); }
      100% { box-shadow: 0 0 40px rgba(0, 136, 255, 0.7); }
    }
    
    @keyframes rankPulse {
      0% { transform: scale(0.95); box-shadow: 0 0 30px rgba(0, 136, 255, 0.5); }
      50% { transform: scale(1); box-shadow: 0 0 50px rgba(0, 136, 255, 0.8); }
      100% { transform: scale(0.95); box-shadow: 0 0 30px rgba(0, 136, 255, 0.5); }
    }
    
    @keyframes badgeEntrance {
      0% { transform: scale(1.2); }
      10% { transform: scale(1.3); }
      20% { transform: scale(1.1); }
      30% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
    
    @keyframes particleRise {
      0% { transform: translateY(0) scale(1); opacity: 0; }
      10% { opacity: 1; }
      100% { transform: translateY(-100px) scale(0); opacity: 0; }
    }
    
    @keyframes shockwave {
      0% { width: 20px; height: 20px; opacity: 0.8; }
      100% { width: 500px; height: 500px; opacity: 0; }
    }
  `,
    document.head.appendChild(n)
}
ti();
window.showFitWindow = function() {
    if (!k) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    b.showWindow("fitWindow")
}
;
b.windows.fitWindow = document.getElementById("fitWindow");
b.updateFitWindow = async function() {
    if (!h)
        return;
    const e = document.querySelector("#fitWindow .window-content");
    if (e)
        try {
            const i = await x.collection("players").doc(h.uid).get();
            if (!i.exists)
                return;
            const s = i.data().googleFit || {};
            let r = document.getElementById("fitTabs")
              , a = document.getElementById("fitDashboard")
              , d = document.getElementById("fitActivity")
              , l = document.getElementById("fitGoals");
            if (!r) {
                e.innerHTML = "";
                const p = document.createElement("div");
                p.className = "fit-window-container",
                r = document.createElement("div"),
                r.id = "fitTabs",
                r.className = "window-tabs",
                r.innerHTML = `
        <button class="tab-button active" data-tab="goals">
          <i class="fas fa-trophy"></i> Goals
        </button>
        <button class="tab-button" data-tab="activity">
          <i class="fas fa-walking"></i> Daily Activity
        </button>
        <button class="tab-button" data-tab="dashboard">
          <i class="fas fa-chart-bar"></i> Dashboard
        </button>
      `;
                const f = document.createElement("div");
                f.className = "tab-content",
                l = document.createElement("div"),
                l.id = "fitGoals",
                l.className = "tab-panel active";
                const m = document.createElement("div");
                m.className = "sl-system-header",
                m.innerHTML = `
        <div class="sl-system-line"></div>
        <div class="sl-title">FITNESS GOALS</div>
        <div class="sl-system-line"></div>
      `;
                const g = document.createElement("div");
                g.id = "fitGoalsList",
                g.className = "goals-list";
                const y = document.createElement("button");
                y.className = "window-button",
                y.innerHTML = '<i class="fas fa-plus"></i> New Goal',
                y.onclick = () => st(),
                l.appendChild(m),
                l.appendChild(g),
                l.appendChild(y),
                d = document.createElement("div"),
                d.id = "fitActivity",
                d.className = "tab-panel";
                const w = document.createElement("div");
                w.className = "sl-system-header",
                w.innerHTML = `
        <div class="sl-system-line"></div>
        <div class="sl-title">DAILY ACTIVITY</div>
        <div class="sl-system-line"></div>
      `;
                const v = document.createElement("div");
                v.id = "dailyBreakdown",
                v.innerHTML = `
        <div id="dailyActivityList" class="activity-list">
          <!-- Daily activities will be listed here -->
        </div>
      `,
                d.appendChild(w),
                d.appendChild(v),
                a = document.createElement("div"),
                a.id = "fitDashboard",
                a.className = "tab-panel";
                const T = document.createElement("div");
                T.className = "sl-system-header",
                T.innerHTML = `
        <div class="sl-system-line"></div>
        <div class="sl-title">FITNESS DASHBOARD</div>
        <div class="sl-system-line"></div>
      `;
                const E = document.createElement("div");
                E.className = "window-grid",
                E.innerHTML = `
        <div class="window-item">
          <div class="window-item-title">Total Steps</div>
          <div class="window-item-description" id="totalSteps">Loading...</div>
        </div>
        <div class="window-item">
          <div class="window-item-title">Total Distance</div>
          <div class="window-item-description" id="totalDistance">Loading...</div>
        </div>
        <div class="window-item">
          <div class="window-item-title">Total Calories</div>
          <div class="window-item-description" id="totalCalories">Loading...</div>
        </div>
        <div class="window-item">
          <div class="window-item-title">Last Updated</div>
          <div class="window-item-description" id="lastUpdated">Never</div>
        </div>
      `;
                const C = document.createElement("div");
                C.className = "window-actions",
                C.innerHTML = `
        <button class="window-button" onclick="refreshGoogleFitData()">
          <i class="fas fa-sync"></i> Refresh Data
        </button>
      `,
                a.appendChild(T),
                a.appendChild(E),
                a.appendChild(C),
                f.appendChild(l),
                f.appendChild(d),
                f.appendChild(a),
                p.appendChild(r),
                p.appendChild(f),
                e.appendChild(p);
                const L = r.querySelectorAll(".tab-button");
                L.forEach(S => {
                    S.addEventListener("click", () => {
                        console.log(`Tab ${S.getAttribute("data-tab")} clicked`),
                        L.forEach(q => q.classList.remove("active")),
                        S.classList.add("active");
                        const R = S.getAttribute("data-tab")
                          , N = `fit${R.charAt(0).toUpperCase() + R.slice(1)}`;
                        console.log(`Target panel: ${N}`),
                        document.querySelectorAll(".tab-panel").forEach(q => {
                            q.classList.remove("active"),
                            q.style.display = "none",
                            console.log(`Hiding panel: ${q.id}`)
                        }
                        );
                        const I = document.getElementById(N);
                        I ? (I.classList.add("active"),
                        I.style.display = "block",
                        console.log(`Showing panel: ${N}`)) : console.error(`Panel ${N} not found`)
                    }
                    )
                }
                )
            }
            const c = document.querySelector(".tab-button.active");
            if (c) {
                const p = c.getAttribute("data-tab")
                  , f = `fit${p.charAt(0).toUpperCase() + p.slice(1)}`
                  , m = document.getElementById(f);
                m && (m.style.display = "block")
            }
            updateFitnessDashboard(s),
            at()
        } catch (t) {
            console.error("Error updating Fit window:", t),
            e.innerHTML = `<p class="error-message">Error loading fitness data: ${t.message}</p>`
        }
}
;
async function at() {
    if (!h)
        return;
    const n = document.getElementById("fitGoalsList");
    if (n)
        try {
            const t = await x.collection("players").doc(h.uid).collection("fitnessGoals").orderBy("createdAt", "desc").get();
            if (t.empty) {
                n.innerHTML = "<p>No fitness goals yet. Create your first goal!</p>";
                return
            }
            const r = (await x.collection("players").doc(h.uid).get()).data().googleFit || {}
              , a = new Date;
            a.setHours(0, 0, 0, 0),
            n.innerHTML = "",
            t.forEach(d => {
                var N, I, q;
                const l = d.data()
                  , c = d.id;
                let p = l.currentCount
                  , f = l.completed
                  , m = !1;
                if (r && r.steps && r.steps.length > 0) {
                    let D = 0;
                    if (l.periodType === "daily" || !l.periodType) {
                        const M = r.steps.find(pe => pe.date === new Date().toISOString().split("T")[0])
                          , K = (N = r.calories) == null ? void 0 : N.find(pe => pe.date === new Date().toISOString().split("T")[0]);
                        l.type === "steps" ? D = M ? M.steps : 0 : l.type === "calories" && K ? D = K.calories : l.type === "active_days" && (D = M && M.steps >= 1e3 ? 1 : 0)
                    } else
                        l.type === "steps" ? D = r.steps.reduce( (M, K) => M + K.steps, 0) : l.type === "calories" && r.calories ? D = r.calories.reduce( (M, K) => M + K.calories, 0) : l.type === "active_days" && (D = r.steps.filter(M => M.steps >= 1e3).length);
                    D !== p && (p = D,
                    f = p >= l.targetCount,
                    m = p > l.targetCount)
                }
                let g = !1;
                if (f && !l.claimed && l.completedAt) {
                    const D = l.completedAt.toDate ? l.completedAt.toDate() : new Date(l.completedAt);
                    D.setHours(0, 0, 0, 0);
                    const B = new Date(D);
                    B.setDate(B.getDate() + 1),
                    g = a >= B
                }
                const y = document.createElement("div");
                y.className = `fitness-goal ${l.claimed ? "claimed" : f ? m ? "exceeded" : "completed" : "active"}`;
                let w = ""
                  , v = 0;
                const T = l.periodType === "cumulative" ? "Cumulative " : "Daily ";
                l.type === "steps" ? (v = Math.min(100, Math.round(p / l.targetCount * 100)),
                w = `${p.toLocaleString()} / ${l.targetCount.toLocaleString()} ${T}steps`) : l.type === "calories" ? (v = Math.min(100, Math.round(p / l.targetCount * 100)),
                w = `${p.toLocaleString()} / ${l.targetCount.toLocaleString()} ${T}calories`) : l.type === "active_days" && (v = Math.min(100, Math.round(p / l.targetCount * 100)),
                w = `${p} / ${l.targetCount} ${l.periodType === "daily" ? "active today" : "active days"}`);
                const C = ((I = l.createdAt) != null && I.toDate ? l.createdAt.toDate() : new Date(l.createdAt)).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                });
                let L = "";
                if (l.claimed)
                    L = `<span class="goal-claimed-badge"><i class="fas fa-coins"></i> Claimed ${l.goldClaimed} gold</span>`;
                else if (f)
                    if (m) {
                        const D = p - l.targetCount;
                        L = `<span class="goal-exceeded-badge"><i class="fas fa-trophy"></i> Exceeded by ${l.type === "active_days" ? `${D} extra days` : l.type === "steps" ? `${D.toLocaleString()} extra steps` : `${D.toLocaleString()} extra calories`}</span>`
                    } else
                        L = '<span class="goal-completed-badge"><i class="fas fa-check-circle"></i> Completed</span>';
                let S = 0;
                l.type === "steps" ? S = Math.floor(p / 100) : l.type === "calories" ? S = Math.floor(p / 20) : l.type === "active_days" && (S = p * 50);
                let R = "";
                if (l.claimed)
                    R = `<span class="goal-reward-text">Claimed on ${new Date(l.claimedAt).toLocaleDateString()}</span>`;
                else if (g)
                    R = `
          <button class="window-button claim-button" onclick="claimGoalReward('${c}')">
            <i class="fas fa-coins"></i> Claim ${S} Gold
          </button>
        `;
                else if (!f)
                    R = `
          <button class="window-button" onclick="updateFitnessGoalFromFit('${c}')">
            <i class="fas fa-sync"></i> Update Progress
          </button>
        `;
                else {
                    const D = (q = l.completedAt) != null && q.toDate ? l.completedAt.toDate() : new Date(l.completedAt)
                      , B = new Date(D);
                    B.setDate(B.getDate() + 1),
                    R = `
          <span class="goal-reward-text">Claimable on ${B.toLocaleDateString()}</span>
        `
                }
                y.innerHTML = `
        <div class="goal-header">
          <div class="goal-title">${l.title}</div>
          <div class="goal-date">Created: ${C}</div>
        </div>
        <div class="goal-description">${l.description}</div>
        <div class="goal-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${v}%"></div>
          </div>
          <div class="progress-text">${w}</div>
        </div>
        <div class="goal-actions">
          ${L}
          ${R}
          <button class="window-button delete-button" onclick="deleteFitnessGoal('${c}')">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `,
                n.appendChild(y)
            }
            )
        } catch (e) {
            console.error("Error updating fitness goals:", e),
            n.innerHTML = `<p class="error-message">Error loading fitness goals: ${e.message}</p>`
        }
}
function st() {
    const n = "newFitnessGoalPopup";
    let e = document.getElementById(n);
    if (!e) {
        e = document.createElement("div"),
        e.id = n,
        e.className = "popup",
        e.style.zIndex = "10000",
        e.innerHTML = `
      <div class="popup-content">
        <div class="popup-header" id="goalPopupDragHandle">
          <h3>Create New Fitness Goal</h3>
          <button class="close-popup" onclick="closePopup('${n}')">×</button>
        </div>
        <div class="popup-body">
          <div class="form-group">
            <label for="goalTitle">Title:</label>
            <input type="text" id="goalTitle" placeholder="E.g., Daily Steps Challenge">
          </div>
          <div class="form-group">
            <label for="goalDescription">Description:</label>
            <textarea id="goalDescription" placeholder="Describe your fitness goal"></textarea>
          </div>
          <div class="form-group">
            <label for="goalType">Goal Type:</label>
            <select id="goalType">
              <option value="steps">Steps</option>
              <option value="calories">Calories Burned</option>
              <option value="active_days">Active Days</option>
            </select>
          </div>
          <div class="form-group">
            <label for="goalPeriodType">Period Type:</label>
            <select id="goalPeriodType">
              <option value="daily">Daily (Today only)</option>
              <option value="cumulative">Cumulative (All tracked days)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="goalTarget">Target:</label>
            <input type="number" id="goalTarget" min="1" placeholder="E.g., 10000">
          </div>
        </div>
        <div class="popup-footer">
          <button class="window-button cancel-button" onclick="closePopup('${n}')">Cancel</button>
          <button class="window-button" onclick="createFitnessGoal()">Create Goal</button>
        </div>
      </div>
    `,
        document.body.appendChild(e);
        const a = e.querySelector(".popup-content")
          , d = document.getElementById("goalPopupDragHandle");
        a.style.position = "absolute",
        d.style.cursor = "move";
        let l = !1, c, p;
        d.addEventListener("mousedown", f => {
            l = !0;
            const m = a.getBoundingClientRect();
            c = f.clientX - m.left,
            p = f.clientY - m.top,
            f.preventDefault()
        }
        ),
        document.addEventListener("mousemove", f => {
            if (!l)
                return;
            const m = f.clientX - c
              , g = f.clientY - p
              , y = window.innerWidth - a.offsetWidth
              , w = window.innerHeight - a.offsetHeight
              , v = Math.max(0, Math.min(m, y))
              , T = Math.max(0, Math.min(g, w));
            a.style.left = `${v}px`,
            a.style.top = `${T}px`
        }
        ),
        document.addEventListener("mouseup", () => {
            l = !1
        }
        )
    }
    document.getElementById("goalTitle").value = "",
    document.getElementById("goalDescription").value = "",
    document.getElementById("goalType").value = "steps",
    document.getElementById("goalPeriodType").value = "daily",
    document.getElementById("goalTarget").value = "";
    const t = e.querySelector(".popup-content")
      , i = window.innerWidth
      , o = window.innerHeight
      , s = (i - t.offsetWidth) / 2
      , r = (o - t.offsetHeight) / 2;
    t.style.left = `${Math.max(0, s)}px`,
    t.style.top = `${Math.max(0, r)}px`,
    openPopup(n)
}
window.openPopup = function(e) {
    const t = document.getElementById(e);
    if (!t)
        return;
    t.style.zIndex = "10000",
    t.classList.add("visible");
    const i = t.querySelector(".popup-content");
    if (i && !i.style.position && (i.style.position = "absolute",
    !i.style.left)) {
        const o = window.innerWidth
          , s = window.innerHeight;
        setTimeout( () => {
            const r = (o - i.offsetWidth) / 2
              , a = (s - i.offsetHeight) / 2;
            i.style.left = `${Math.max(0, r)}px`,
            i.style.top = `${Math.max(0, a)}px`
        }
        , 0)
    }
}
;
const rt = document.createElement("style");
rt.textContent = `
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    z-index: 10000;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s;
  }
  
  .popup.visible {
    visibility: visible;
    opacity: 1;
  }
  
  .popup-content {
    background-color: #0a1a2a;
    border: 1px solid #0088ff;
    border-radius: 6px;
    box-shadow: 0 0 20px rgba(0, 100, 200, 0.4);
    width: 450px;
    max-width: 90%;
    position: absolute;
    /* Initial position will be set by JS */
  }
  
  .popup-header {
    padding: 15px;
    border-bottom: 1px solid #0066aa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, #0a1a2a, #0e2a45);
    cursor: move;
    user-select: none;
  }
`;
document.head.appendChild(rt);
window.createFitnessGoal = async function() {
    if (!h) {
        showNotification("You must be logged in to create goals", "error");
        return
    }
    try {
        const e = document.getElementById("goalTitle").value.trim()
          , t = document.getElementById("goalDescription").value.trim()
          , i = document.getElementById("goalType").value
          , o = document.getElementById("goalPeriodType").value
          , s = parseInt(document.getElementById("goalTarget").value);
        if (!e || !t || !s || isNaN(s)) {
            showNotification("Please fill out all fields", "error");
            return
        }
        if (s <= 0) {
            showNotification("Target must be greater than zero", "error");
            return
        }
        await x.collection("players").doc(h.uid).collection("fitnessGoals").add({
            title: e,
            description: t,
            type: i,
            periodType: o,
            targetCount: s,
            currentCount: 0,
            completed: !1,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        }),
        closePopup("newFitnessGoalPopup"),
        b.updateWindowContent("fitWindow"),
        showNotification("Fitness goal created successfully!", "success")
    } catch (e) {
        console.error("Error creating fitness goal:", e),
        showNotification(`Error creating goal: ${e.message}`, "error")
    }
}
;
b.updateFitWindow = async function() {
    if (!h)
        return;
    const e = document.querySelector("#fitWindow .window-content");
    if (e)
        try {
            const i = await x.collection("players").doc(h.uid).get();
            if (!i.exists)
                return;
            const s = i.data().googleFit || {};
            let r = document.getElementById("fitTabs")
              , a = document.getElementById("fitDashboard")
              , d = document.getElementById("fitActivity")
              , l = document.getElementById("fitGoals");
            if (!r) {
                e.innerHTML = "";
                const c = document.createElement("div");
                c.className = "fit-window-container",
                r = document.createElement("div"),
                r.id = "fitTabs",
                r.className = "window-tabs",
                r.innerHTML = `
        <button class="tab-button active" data-tab="goals">
          <i class="fas fa-trophy"></i> Goals
        </button>
        <button class="tab-button" data-tab="activity">
          <i class="fas fa-walking"></i> Daily Activity
        </button>
        <button class="tab-button" data-tab="dashboard">
          <i class="fas fa-chart-bar"></i> Dashboard
        </button>
      `;
                const p = document.createElement("div");
                p.className = "tab-content",
                l = document.createElement("div"),
                l.id = "fitGoals",
                l.className = "tab-panel active";
                const f = document.createElement("div");
                f.className = "sl-system-header",
                f.innerHTML = `
        <div class="sl-system-line"></div>
        <div class="sl-title">FITNESS GOALS</div>
        <div class="sl-system-line"></div>
      `;
                const m = document.createElement("div");
                m.id = "fitGoalsList",
                m.className = "goals-list";
                const g = document.createElement("button");
                g.className = "window-button",
                g.innerHTML = '<i class="fas fa-plus"></i> New Goal',
                g.onclick = () => st(),
                l.appendChild(f),
                l.appendChild(m),
                l.appendChild(g),
                d = document.createElement("div"),
                d.id = "fitActivity",
                d.className = "tab-panel";
                const y = document.createElement("div");
                y.className = "sl-system-header",
                y.innerHTML = `
        <div class="sl-system-line"></div>
        <div class="sl-title">DAILY ACTIVITY</div>
        <div class="sl-system-line"></div>
      `;
                const w = document.createElement("div");
                w.id = "dailyBreakdown",
                w.innerHTML = `
        <div id="dailyActivityList" class="activity-list">
          <!-- Daily activities will be listed here -->
        </div>
      `,
                d.appendChild(y),
                d.appendChild(w),
                a = document.createElement("div"),
                a.id = "fitDashboard",
                a.className = "tab-panel";
                const v = document.createElement("div");
                v.className = "sl-system-header",
                v.innerHTML = `
        <div class="sl-system-line"></div>
        <div class="sl-title">FITNESS DASHBOARD</div>
        <div class="sl-system-line"></div>
      `;
                const T = document.createElement("div");
                T.className = "window-grid",
                T.innerHTML = `
        <div class="window-item">
          <div class="window-item-title">Total Steps</div>
          <div class="window-item-description" id="totalSteps">Loading...</div>
        </div>
        <div class="window-item">
          <div class="window-item-title">Total Distance</div>
          <div class="window-item-description" id="totalDistance">Loading...</div>
        </div>
        <div class="window-item">
          <div class="window-item-title">Total Calories</div>
          <div class="window-item-description" id="totalCalories">Loading...</div>
        </div>
        <div class="window-item">
          <div class="window-item-title">Last Updated</div>
          <div class="window-item-description" id="lastUpdated">Never</div>
        </div>
      `;
                const E = document.createElement("div");
                E.className = "window-actions",
                E.innerHTML = `
        <button class="window-button" onclick="refreshGoogleFitData()">
          <i class="fas fa-sync"></i> Refresh Data
        </button>
      `,
                a.appendChild(v),
                a.appendChild(T),
                a.appendChild(E),
                p.appendChild(l),
                p.appendChild(d),
                p.appendChild(a),
                c.appendChild(r),
                c.appendChild(p),
                e.appendChild(c);
                const C = r.querySelectorAll(".tab-button");
                C.forEach(L => {
                    L.addEventListener("click", () => {
                        C.forEach(N => N.classList.remove("active")),
                        L.classList.add("active"),
                        document.querySelectorAll(".tab-panel").forEach(N => N.classList.remove("active"));
                        const R = L.getAttribute("data-tab");
                        document.getElementById(`fit${R.charAt(0).toUpperCase() + R.slice(1)}`).classList.add("active")
                    }
                    )
                }
                )
            }
            updateFitnessDashboard(s),
            at()
        } catch (t) {
            console.error("Error updating Fit window:", t),
            e.innerHTML = `<p class="error-message">Error loading fitness data: ${t.message}</p>`
        }
}
;
window.claimGoalReward = async function(e) {
    if (!h) {
        showNotification("You must be logged in to claim rewards", "error");
        return
    }
    try {
        const t = x.collection("players").doc(h.uid).collection("fitnessGoals").doc(e)
          , i = await t.get();
        if (!i.exists) {
            showNotification("Goal not found", "error");
            return
        }
        const o = i.data();
        if (!o.completed) {
            showNotification("Goal is not completed yet", "error");
            return
        }
        if (o.claimed) {
            showNotification("Reward already claimed", "error");
            return
        }
        if (o.completedAt) {
            const a = o.completedAt.toDate ? o.completedAt.toDate() : new Date(o.completedAt);
            a.setHours(0, 0, 0, 0);
            const d = new Date;
            d.setHours(0, 0, 0, 0);
            const l = new Date(a);
            if (l.setDate(l.getDate() + 1),
            d < l) {
                showNotification(`This goal will be claimable on ${l.toLocaleDateString()}`, "error");
                return
            }
        }
        let s = 0;
        o.type === "steps" ? s = Math.floor(o.currentCount / 100) : o.type === "calories" ? s = Math.floor(o.currentCount / 20) : o.type === "active_days" && (s = o.currentCount * 50),
        await t.update({
            claimed: !0,
            claimedAt: firebase.firestore.FieldValue.serverTimestamp(),
            goldClaimed: s
        }),
        await x.collection("players").doc(h.uid).update({
            gold: firebase.firestore.FieldValue.increment(s)
        }),
        showNotification(`Claimed ${s} gold from fitness goal!`, "success"),
        printToTerminal(`Claimed ${s} gold from fitness goal: ${o.title}`, "success"),
        notificationSystem.playSound("coin"),
        b.updateWindowContent("fitWindow")
    } catch (t) {
        console.error("Error claiming goal reward:", t),
        showNotification(`Error claiming reward: ${t.message}`, "error")
    }
}
;
window.updateFitnessGoalFromFit = async function n(e) {
    var t;
    if (!h) {
        showNotification("You must be logged in to update goals", "error");
        return
    }
    try {
        const i = x.collection("players").doc(h.uid).collection("fitnessGoals").doc(e)
          , o = await i.get();
        if (!o.exists) {
            showNotification("Goal not found", "error");
            return
        }
        const s = o.data()
          , l = (await x.collection("players").doc(h.uid).get()).data().googleFit || {};
        if (!l || !l.steps || l.steps.length === 0) {
            showNotification("No Google Fit data available. Try refreshing data.", "error");
            return
        }
        const c = new Date().toISOString().split("T")[0];
        let p = 0
          , f = !1
          , m = !1;
        if (s.periodType === "daily" || !s.periodType) {
            const w = l.steps.find(E => E.date === c)
              , v = (t = l.calories) == null ? void 0 : t.find(E => E.date === c)
              , T = document.createElement("button");
            T.className = "window-button",
            T.innerHTML = '<i class="fas fa-sync"></i> Sync All Goals',
            T.onclick = () => {
                x.collection("players").doc(h.uid).collection("fitnessGoals").get().then(E => {
                    E.forEach(C => n(C.id))
                }
                ).then( () => showNotification("All goals synced!", "success")).catch(E => showNotification("Error syncing: " + E.message, "error"))
            }
            ,
            s.type === "steps" ? p = w ? w.steps : 0 : s.type === "calories" ? p = v ? v.calories : 0 : s.type === "active_days" && (p = w && w.steps >= 1e3 ? 1 : 0)
        } else
            s.type === "steps" ? p = l.steps.reduce( (w, v) => w + v.steps, 0) : s.type === "calories" ? p = l.calories ? l.calories.reduce( (w, v) => w + v.calories, 0) : 0 : s.type === "active_days" && (p = l.steps.filter(w => w.steps >= 1e3).length);
        f = p >= s.targetCount,
        m = p > s.targetCount;
        const y = {
            currentCount: p,
            completed: f,
            exceeded: m,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        };
        if (f && !s.completed && (y.completedAt = firebase.firestore.FieldValue.serverTimestamp()),
        await i.update(y),
        f && !s.completed) {
            let w = "Goal completed! It will be claimable tomorrow.";
            m && (w = "Goal exceeded! Extra progress counts toward your reward. It will be claimable tomorrow."),
            showNotification(w, "success"),
            printToTerminal(`Fitness goal ${m ? "exceeded" : "completed"}: ${s.title}. 
        It will be claimable tomorrow for gold rewards!`, "success"),
            notificationSystem.playSound("achievement")
        } else
            showNotification(`Goal progress updated: ${p}/${s.targetCount}`, "info");
        b.updateWindowContent("fitWindow")
    } catch (i) {
        console.error("Error updating fitness goal:", i),
        showNotification(`Error updating goal: ${i.message}`, "error")
    }
}
;
window.deleteFitnessGoal = async function(e) {
    if (!h) {
        showNotification("You must be logged in to delete goals", "error");
        return
    }
    if (confirm("Are you sure you want to delete this fitness goal?"))
        try {
            await x.collection("players").doc(h.uid).collection("fitnessGoals").doc(e).delete(),
            b.updateWindowContent("fitWindow"),
            showNotification("Fitness goal deleted", "info")
        } catch (t) {
            console.error("Error deleting fitness goal:", t),
            showNotification(`Error deleting goal: ${t.message}`, "error")
        }
}
;
const ii = b.updateWindowContent;
b.updateWindowContent = async function(n) {
    if (h)
        try {
            switch (n) {
            case "fitWindow":
                await this.updateFitWindow();
                break;
            default:
                await ii.call(this, n);
                break
            }
        } catch (e) {
            console.error(`Error updating window ${n}:`, e)
        }
}
;
const $e = document.createElement("style");
$e.textContent = `
  .activity-list {
    max-height: 300px;
    overflow-y: auto;
    margin-top: 10px;
  }
  
  .activity-day {
    background: rgba(0, 50, 100, 0.2);
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    border-left: 3px solid #0088ff;
  }
  
  .activity-date {
    font-weight: bold;
    color: #0088ff;
    margin-bottom: 5px;
  }
  
  .activity-stats {
    display: flex;
    gap: 15px;
    margin-bottom: 5px;
  }
  
  .activity-stat {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .activity-details {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid rgba(100, 180, 255, 0.2);
  }
  
  .activity-item {
    padding: 3px 0;
    font-size: 0.9em;
    color: #aaddff;
  }
  
  .activity-goals {
    margin-top: 8px;
    padding: 6px;
    background: rgba(0, 200, 80, 0.1);
    border-radius: 4px;
  }
  
  .completed-goal-tag {
    color: #00dd66;
    font-size: 0.9em;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  
  .completed-goal-tag i {
    color: #ffcc00;
  }
  
  .fitness-goal {
    background: rgba(0, 40, 80, 0.3);
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 12px;
    border-left: 3px solid #0088ff;
  }
  
  .fitness-goal.completed {
    border-left-color: #00cc66;
  }
  
  .fitness-goal.exceeded {
    border-left-color: #ffcc00;
    background: linear-gradient(to right, rgba(0, 40, 80, 0.3), rgba(50, 50, 0, 0.2));
  }
  
  .goal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .goal-title {
    font-weight: bold;
    color: #ffffff;
    font-size: 1.1em;
  }
  
  .goal-date {
    font-size: 0.85em;
    color: #88ccff;
  }
  
  .goal-description {
    margin-bottom: 12px;
    color: #dddddd;
  }
  
  .goal-progress {
    margin-bottom: 12px;
  }
  
  .progress-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 5px;
  }
  
  .progress-fill {
    height: 100%;
    background: linear-gradient(to right, #0088ff, #00ccff);
    border-radius: 4px;
  }
  
  .fitness-goal.completed .progress-fill {
    background: linear-gradient(to right, #00aa55, #00dd66);
  }
  
  .fitness-goal.exceeded .progress-fill {
    background: linear-gradient(to right, #ddaa00, #ffdd00);
  }
  
  .progress-text {
    font-size: 0.9em;
    color: #aaddff;
    text-align: right;
  }
  
  .goal-actions {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  
  .goal-completed-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #00dd66;
    font-weight: bold;
  }
  
  .goal-exceeded-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #ffdd00;
    font-weight: bold;
  }
  
  .delete-button {
    background-color: rgba(220, 50, 50, 0.2) !important;
    border-color: rgba(220, 50, 50, 0.5) !important;
  }
  
  .delete-button:hover {
    background-color: rgba(220, 50, 50, 0.4) !important;
  }
  
  .sl-subtitle {
    color: #0088ff;
    margin: 15px 0 5px;
    font-size: 1.1em;
    text-align: center;
  }
  
  .goals-list {
    margin-top: 15px;
    margin-bottom: 15px;
    max-height: 400px;
    overflow-y: auto;
  }
`;
document.head.appendChild($e);
document.head.appendChild($e);
async function lt(n) {
    try {
        if (!n)
            throw new Error("No access token provided");
        console.log("Fetching Google Fit data with token:", n.substring(0, 10) + "...");
        const e = new Date
          , t = e.getTime()
          , i = t - 30 * 24 * 60 * 60 * 1e3
          , o = {
            steps: {
                aggregateBy: [{
                    dataTypeName: "com.google.step_count.delta",
                    dataSourceId: "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
                }],
                bucketByTime: {
                    durationMillis: 864e5
                },
                startTimeMillis: i,
                endTimeMillis: t
            },
            calories: {
                aggregateBy: [{
                    dataTypeName: "com.google.calories.expended",
                    dataSourceId: "derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended"
                }],
                bucketByTime: {
                    durationMillis: 864e5
                },
                startTimeMillis: i,
                endTimeMillis: t
            },
            activities: {
                aggregateBy: [{
                    dataTypeName: "com.google.activity.segment",
                    dataSourceId: "derived:com.google.activity.segment:com.google.android.gms:merge_activity_segments"
                }],
                bucketByTime: {
                    durationMillis: 864e5
                },
                startTimeMillis: i,
                endTimeMillis: t
            }
        }
          , s = "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate"
          , r = {
            Authorization: `Bearer ${n}`,
            "Content-Type": "application/json"
        }
          , [a,d,l] = await Promise.all([fetch(s, {
            method: "POST",
            headers: r,
            body: JSON.stringify(o.steps)
        }), fetch(s, {
            method: "POST",
            headers: r,
            body: JSON.stringify(o.calories)
        }), fetch(s, {
            method: "POST",
            headers: r,
            body: JSON.stringify(o.activities)
        })]);
        if (!a.ok || !d.ok || !l.ok) {
            const g = await Promise.any([a.text(), d.text(), l.text()].filter(y => !y.ok));
            throw new Error(`API error: ${g}`)
        }
        const [c,p,f] = await Promise.all([a.json(), d.json(), l.json()]);
        return {
            steps: ni(c),
            calories: oi(p),
            activities: ai(f),
            lastUpdated: e.toISOString()
        }
    } catch (e) {
        return console.error("Error fetching Google Fit data:", e),
        printToTerminal(`Error fetching Google Fit data: ${e.message}`, "error"),
        null
    }
}
function ni(n) {
    return n != null && n.bucket ? n.bucket.map(e => {
        var o;
        const t = new Date(parseInt(e.startTimeMillis)).toISOString().split("T")[0]
          , i = ((o = e.dataset[0]) == null ? void 0 : o.point.reduce( (s, r) => {
            var a;
            return s + (((a = r.value[0]) == null ? void 0 : a.intVal) || 0)
        }
        , 0)) || 0;
        return {
            date: t,
            steps: i
        }
    }
    ) : []
}
function oi(n) {
    return n != null && n.bucket ? n.bucket.map(e => {
        var o;
        const t = new Date(parseInt(e.startTimeMillis)).toISOString().split("T")[0]
          , i = ((o = e.dataset[0]) == null ? void 0 : o.point.reduce( (s, r) => {
            var a;
            return s + (((a = r.value[0]) == null ? void 0 : a.fpVal) || 0)
        }
        , 0)) || 0;
        return {
            date: t,
            calories: Math.round(i)
        }
    }
    ) : []
}
function ai(n) {
    if (!(n != null && n.bucket))
        return [];
    const e = {
        7: "Walking",
        8: "Running",
        9: "Biking",
        10: "Still"
    };
    return n.bucket.map(t => {
        var s;
        const i = new Date(parseInt(t.startTimeMillis)).toISOString().split("T")[0]
          , o = {};
        return (s = t.dataset[0]) == null || s.point.forEach(r => {
            var a;
            if (((a = r.value) == null ? void 0 : a.length) >= 2) {
                const d = r.value[0].intVal
                  , l = r.value[1].intVal
                  , c = Math.round(l / 6e4)
                  , p = e[d] || `Activity (${d})`;
                c > 0 && (o[p] = (o[p] || 0) + c)
            }
        }
        ),
        {
            date: i,
            activities: o
        }
    }
    )
}
window.refreshGoogleFitData = async function() {
    var e;
    if (!k || !h) {
        printToTerminal("You must !reawaken first.", "error");
        return
    }
    try {
        if (!confirm("This will request access to your Google Fit data. Please approve all fitness permissions to proceed."))
            return;
        const i = new firebase.auth.GoogleAuthProvider;
        i.addScope("https://www.googleapis.com/auth/fitness.activity.read"),
        i.addScope("https://www.googleapis.com/auth/fitness.body.read"),
        i.addScope("https://www.googleapis.com/auth/fitness.location.read"),
        i.setCustomParameters({
            prompt: "consent",
            access_type: "offline"
        }),
        printToTerminal("Requesting Google Fit access...", "info");
        const s = (e = (await Y.signInWithPopup(i)).credential) == null ? void 0 : e.accessToken;
        if (!s)
            throw new Error("Failed to obtain access token");
        const r = await lt(s);
        if (r)
            await x.collection("players").doc(h.uid).update({
                googleFit: r,
                lastFitSync: firebase.firestore.FieldValue.serverTimestamp()
            }),
            b.updateWindowContent("fitWindow"),
            showNotification("Google Fit data refreshed successfully!", "success");
        else
            throw new Error("No data returned from Google Fit")
    } catch (t) {
        console.error("Error refreshing Google Fit data:", t),
        printToTerminal(`Error: ${t.message}`, "error"),
        showNotification(`Failed to refresh Google Fit data: ${t.message}`, "error")
    }
}
;
window.updateFitnessDashboard = async function(e) {
    var m;
    const t = document.getElementById("totalSteps")
      , i = document.getElementById("totalDistance")
      , o = document.getElementById("totalCalories")
      , s = document.getElementById("lastUpdated")
      , r = document.getElementById("dailyActivityList");
    if (!((m = e == null ? void 0 : e.steps) != null && m.length)) {
        t && (t.textContent = "No data"),
        i && (i.textContent = "No data"),
        o && (o.textContent = "No data"),
        s && (s.textContent = "Never"),
        r && (r.innerHTML = "<p>No activity data available</p>");
        return
    }
    const a = [...e.steps].sort( (g, y) => new Date(g.date) - new Date(y.date))
      , d = e.calories ? [...e.calories].sort( (g, y) => new Date(g.date) - new Date(y.date)) : []
      , l = a.reduce( (g, y) => g + y.steps, 0)
      , c = d.reduce( (g, y) => g + y.calories, 0)
      , p = (l * .75 / 1e3).toFixed(2);
    t && (t.textContent = l.toLocaleString()),
    i && (i.textContent = `${p} km`),
    o && (o.textContent = c.toLocaleString()),
    s && (s.textContent = e.lastUpdated ? new Date(e.lastUpdated).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }) : "Never");
    let f = [];
    try {
        (await x.collection("players").doc(h.uid).collection("fitnessGoals").get()).forEach(w => {
            f.push({
                id: w.id,
                ...w.data()
            })
        }
        )
    } catch (g) {
        console.error("Error fetching goals:", g)
    }
    r && (r.innerHTML = e.steps.sort( (g, y) => new Date(y.date) - new Date(g.date)).map(g => {
        var L, S, R, N;
        const y = new Date(g.date).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric"
        })
          , w = ((S = (L = e.calories) == null ? void 0 : L.find(I => I.date === g.date)) == null ? void 0 : S.calories) || 0
          , v = ((N = (R = e.activities) == null ? void 0 : R.find(I => I.date === g.date)) == null ? void 0 : N.activities) || {}
          , T = (g.steps * .75 / 1e3).toFixed(2)
          , E = f.filter(I => (I.periodType === "daily" || !I.periodType) && (I.type === "steps" && g.steps >= I.targetCount || I.type === "calories" && w >= I.targetCount)).map(I => {
            const q = I.type === "steps" ? g.steps > I.targetCount ? `Exceeded by ${(g.steps - I.targetCount).toLocaleString()} steps` : "Completed" : w > I.targetCount ? `Exceeded by ${(w - I.targetCount).toLocaleString()} calories` : "Completed";
            return `<div class="completed-goal-tag"><i class="fas fa-trophy"></i> ${I.title}: ${q}</div>`
        }
        ).join("")
          , C = Object.entries(v).filter( ([,I]) => I > 5).map( ([I,q]) => `<div class="activity-item">${I}: ${q} min</div>`).join("");
        return `
          <div class="activity-day">
            <div class="activity-date">${y}</div>
            <div class="activity-stats">
              <div class="activity-stat"><i class="fas fa-shoe-prints"></i> ${g.steps.toLocaleString()} steps</div>
              <div class="activity-stat"><i class="fas fa-road"></i> ${T} km</div>
              <div class="activity-stat"><i class="fas fa-fire"></i> ${w.toLocaleString()} cal</div>
            </div>
            ${E ? `<div class="activity-goals">${E}</div>` : ""}
            ${C ? `<div class="activity-details">${C}</div>` : ""}
          </div>
        `
    }
    ).join(""))
}
;
const dt = document.createElement("style");
dt.textContent = `
  .fitness-goal.claimed {
    border-left-color: #ffd700;
    background: linear-gradient(to right, rgba(0, 40, 80, 0.3), rgba(50, 40, 0, 0.2));
  }
  
  .goal-claimed-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #ffd700;
    font-weight: bold;
  }
  
  .claim-button {
    background-color: rgba(255, 215, 0, 0.2) !important;
    border-color: rgba(255, 215, 0, 0.5) !important;
    color: #ffd700 !important;
  }
  
  .claim-button:hover {
    background-color: rgba(255, 215, 0, 0.4) !important;
  }
  
  .goal-reward-text {
    color: #aaddff;
    font-style: italic;
    font-size: 0.9em;
  }
`;
document.head.appendChild(dt);
const ct = document.createElement("style");
ct.textContent = `
  .fit-window-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  
  .window-tabs {
    display: flex;
    border-bottom: 1px solid #0066aa;
    margin-bottom: 10px;
    background: rgba(0, 30, 60, 0.3);
    flex-shrink: 0;
  }
  
  .tab-button {
    padding: 10px 15px;
    background: none;
    border: none;
    color: #88ccff;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    flex: 1;
    text-align: center;
    font-size: 0.9em;
  }
  
  .tab-button:hover {
    background: rgba(0, 100, 200, 0.2);
    color: #ffffff;
  }
  
  .tab-button.active {
    background: rgba(0, 100, 200, 0.3);
    color: #ffffff;
    border-bottom: 2px solid #0088ff;
  }
  
  .tab-content {
    flex: 1;
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  
  .tab-panel {
    display: none;
    padding: 10px;
    overflow-y: auto;
    flex: 1;
  }
  
  .tab-panel.active {
    display: block;
  }
  
  #fitWindow {
    width: 650px;
    height: 550px;
    max-width: 80vw;
    max-height: 80vh;
  }
  
  #fitWindow .window-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }
  
  .goals-list {
    margin-top: 15px;
    margin-bottom: 15px;
    max-height: 350px;
    overflow-y: auto;
  }
  
  .activity-list {
    overflow-y: auto;
    max-height: 400px;
  }
  
  /* For debugging - add borders to see element boundaries */
  .debug .fit-window-container,
  .debug .tab-content,
  .debug .tab-panel {
    border: 1px dashed rgba(255, 0, 0, 0.3);
  }
`;
document.head.appendChild(ct);
