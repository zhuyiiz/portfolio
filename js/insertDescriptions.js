function insertConceptDesc(descName) {
    if (descName === "BeyondNova2026") {
        var descText = 'An assortment of concept and character designs for my passion project following the lives of magic-welding students who explore a vast fantasical world as they train to advance their abilities.<br>This project is still a work in progress.';
    } else if (descName === "JanitorsMystery2025") {
        var descText = 'Concept and illustration work for a singleplayer puzzle game where the player, a janitor, aims to clean up an abandoned school but unveils a dark secret in the process. Collaborated with and programed by Johnathan Huang & Hailee Yun.';
    } else if (descName === "HungryLegs2025") {
        var descText = 'Concept and illustration work for a two-player top-down game where hungry players must compete to eat the most legs within 3 minutes. Collaborated with and programed by Max Ta. Play with a friend on <a class="p-link" href="https://flooflezmt.itch.io/leg-hungry">https://flooflezmt.itch.io/leg-hungry.</a>';
    } else if (descName === "ConstantOutput2024") {
        var descText = 'Weekly challenge to design characters based on objects or concepts. My goals were to  explore a variety of forms, maintain aesthetic cohesiveness, consider depth and effective storytelling or personality, and apply the object or concept creatively.';
    }
    
    document.currentScript.parentElement.innerHTML = descText;
}

function insertMotionDesc(descName) {
    if (descName === "BeyondNova2026") {
        var descText = 'Trailer and character trailer for Beyond Nova, my passion project. See more about Beyond Nova <a class="p-link" href="concept_2026beyondnova.html">here</a>.';
    } else if (descName === "OneManCircus2026") {
        var descText = 'Lyric video of Elio Mei\'s song "One Man Circus," exploring kinetic text and motion graphics for class at NYU.';
    } else if (descName === "MyTripToSydney2026") {
        var descText = 'A collection of animal and food sketches from my trip to Sydney, Austrailia during December 2025 - January 2026, collaged into a motion graphic video.';
    }
    
    document.currentScript.parentElement.innerHTML = descText;
}