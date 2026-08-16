function insertConceptDesc(descName) {
    if (descName === "BeyondNova2026") {
        var descText = 'an assortment of concept and character design work for my passion project following a handful of magic-welding high school students who explore a wide fantasical world. peepeepoopoo blurb >:C This project is still a work in progress.';
    } else if (descName === "JanitorsMystery2025") {
        var descText = 'Concept and Illustration work done for a singleplayer mystery game where a janitor visits an abandoned school to clean up the facility, unveiling a secret in the process. Collaborated with Johnathan Huang & Hailee Yun.';
    } else if (descName === "HungryLegs2025") {
        var descText = 'Concept and illustration work done for a two-player top-down game where hungry players must compete to eat as many legs within 3 minutes. Collaborated with and programed by Max Ta. Play with a friend on https://flooflezmt.itch.io/leg-hungry';
    } else if (descName === "ConstantOutput2024") {
        var descText = 'weekly character design challenge';
    }
    
    document.currentScript.parentElement.innerHTML = descText;
}

function insertMotionDesc(descName) {
    if (descName === "BeyondNova2026") {
        var descText = 'somehting something animate character illust';
    } else if (descName === "OneManCircus2026") {
        var descText = 'kinetic text motion graphic video of Elio Mei\'s song "One Man Circus" done for class at NYU';
    } else if (descName === "MyTripToSydney2026") {
        var descText = 'A collection of animal and food sketches from my trip to Sydney, Austrailia during December 2025 - January 2026, collaged into a motion graphic video';
    }
    
    document.currentScript.parentElement.innerHTML = descText;
}