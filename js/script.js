function starAudio() {
    var starSound = document.getElementById('sound-star');
    starSound.play();
}

window.onresize = function() {
    const dropdown = document.getElementById("menu-dropdown");
    const submenu = document.querySelectorAll(".submenu-ul");
    var divWidth = window.innerWidth;

    if (divWidth<=700) {
        dropdown.style.display = "none";
        bar1.style.rotate = "0deg";
        bar2.style.opacity = "100";
        bar3.style.rotate = "0deg";
        submenu.forEach(submenu => {submenu.style.display = "none";});
    }else{
        dropdown.style.display = "block";
    }
}

function clickMenuDropdown() {
    const dropdown = document.getElementById("menu-dropdown");
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");

    if (dropdown.style.display === "none") {
		dropdown.style.display = "block";
        bar1.style.rotate = "-45deg";
        bar2.style.opacity = "0";
        bar3.style.rotate = "45deg";
	} else {
		dropdown.style.display = "none";
        bar1.style.rotate = "0deg";
        bar2.style.opacity = "100";
        bar3.style.rotate = "0deg";
	}
}

function clickSubMenuDropdown(menulink) {
    const submenu = menulink.querySelector(".submenu-ul");
    var divWidth = window.innerWidth;
    
    if (divWidth<=700) {
        if (submenu.style.display === "none") {
            submenu.style.display = "flex";
        } else {
            submenu.style.display = "none";
        }
    }
}
function hoverSubMenuDropdown(menulink) {
    const submenu = menulink.querySelector(".submenu-ul");
    // var divWidth = window.innerWidth;
    
    // if (divWidth>700) {
        submenu.style.display = "flex";
    // }
}
function leaveSubMenuDropdown(menulink) {
    const submenu = menulink.querySelector(".submenu-ul");
    // var divWidth = window.innerWidth;
    
    // if (divWidth>700) {
        submenu.style.display = "none";
    // }
}

function hoverLetter() {
    const cover = document.getElementById("letter-cover")
    const project = document.getElementById("letter-project")
    
    cover.style.transitionDelay = "0s";
    cover.style.transitionDuration = "0.25s";
    cover.style.zIndex = "0";
    cover.style.transform = "scaleY(-1)";
    cover.style.boxShadow = "box-shadow: 0px 1px 10px -10px var(--shadow-col)";
    
    project.style.transitionDelay = "0.1s";
    project.style.transitionDuration = "0.35s";
    project.style.bottom = "85%";
    
    // on click function:
    // if (cover.style.transform === "scaleY(1)") {
    //         project.style.marginTop = "calc(var(--letter-h) * -1 - 15vw)";
    //         cover.style.transform = "scaleY(-1)";
    //     } else {
    //         project.style.marginTop = "calc(var(--letter-h) * -1 + 5vw)";
    //         cover.style.transform = "scaleY(1)";
    //     }
}
function leaveLetter() {
    const cover = document.getElementById("letter-cover")
    const project = document.getElementById("letter-project")
    
    project.style.transitionDelay = "0s";
    project.style.transitionDuration = "0.25s";
    project.style.bottom = "0%";

    cover.style.transitionDelay = "0.15s";
    cover.style.transitionDuration = "0.35s";
    cover.style.zIndex = "1";
    cover.style.transform = "scaleY(1)";
    cover.style.boxShadow = "0px 1px 10px 0px var(--shadow-col)";
}