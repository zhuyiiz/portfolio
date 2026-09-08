function starAudio() {
    let starSound = document.getElementById('sound-star');
    starSound.play();
}

window.onresize = function() {
    const dropdown = document.getElementById("menu-dropdown");
    const submenu = document.querySelectorAll(".submenu-ul");
    let divWidth = window.innerWidth;

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
    const arrow = menulink.querySelector(".nav-arrow");
    let divWidth = window.innerWidth;
    
    if (divWidth<=700) {
        if (submenu.style.display === "none") {
            submenu.style.display = "flex";
            arrow.style.rotate = "-225deg";
            arrow.style.marginTop = "5px";
        } else {
            submenu.style.display = "none";
            arrow.style.rotate = "-45deg";
            arrow.style.marginTop = "-5px";
        }
    }
}
function hoverSubMenuDropdown(menulink) {
    const submenu = menulink.querySelector(".submenu-ul");
    const arrow = menulink.querySelector(".nav-arrow");
    let divWidth = window.innerWidth;
    
    if (divWidth>700) {
        submenu.style.display = "flex";
        arrow.style.rotate = "-225deg";
        arrow.style.marginTop = "5px";
    }
}
function leaveSubMenuDropdown(menulink) {
    const submenu = menulink.querySelector(".submenu-ul");
    const arrow = menulink.querySelector(".nav-arrow");
    let divWidth = window.innerWidth;
    
    if (divWidth>700) {
        submenu.style.display = "none";
        arrow.style.rotate = "-45deg";
        arrow.style.marginTop = "-5px";
    }
}