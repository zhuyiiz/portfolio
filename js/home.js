let resizeTimer;
window.addEventListener("resize", () => {
    const pageFront = document.querySelectorAll(".page-front")
    const pageBack = document.querySelectorAll(".page-back")
    pageFront.forEach(pageFront => {
    pageFront.classList.add("no-transition");});
    pageBack.forEach(pageBack => {
    pageBack.classList.add("no-transition");});

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        pageFront.forEach(pageFront => {
        pageFront.classList.remove("no-transition");});
        pageBack.forEach(pageBack => {
        pageBack.classList.remove("no-transition");});
    }, 100);
});

let currentPage = 2;
let totalPages = 2;
let lastPage = totalPages + 1;

function turnPageNext() {
    const paper1 = document.getElementById("p1");
    const paper2 = document.getElementById("p2");
    const bookArrowPrev = document.getElementById("book-arrow-prev")
    const bookArrowNext = document.getElementById("book-arrow-next")
    
    if (currentPage < lastPage) {
        switch (currentPage) {
            case 1:
                paper1.classList.add("flipped");
                paper1.style.zIndex = 3;
                paper2.style.zIndex = 2;
                bookArrowPrev.style.visibility = "visible";
                bookArrowPrev.style.cursor = "pointer";
                break;
            case 2:
                paper2.style.zIndex = 3;
                paper1.style.zIndex = 2;
                paper2.classList.add("flipped");
                bookArrowNext.style.visibility = "hidden";
                bookArrowNext.style.cursor = "default";
                break;
            default:
                throw new Error("unknown state")
        }
        currentPage++;
    }
}
function turnPagePrev() {
    const paper1 = document.getElementById("p1");
    const paper2 = document.getElementById("p2");
    const bookArrowPrev = document.getElementById("book-arrow-prev")
    const bookArrowNext = document.getElementById("book-arrow-next")
    
    if (currentPage > 1) {
        switch (currentPage) {
            case 2:
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 2;
                paper2.style.zIndex = 1;
                bookArrowPrev.style.visibility = "hidden";
                bookArrowPrev.style.cursor = "default";
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper1.style.zIndex = 2;
                paper2.style.zIndex = 3;
                bookArrowNext.style.visibility = "visible";
                bookArrowNext.style.cursor = "pointer";
                break;
            default:
                throw new Error("unknown state")
        }
        currentPage--;
    }
}

function turnPageSection(sectionName) {
    let pageNum;
    switch (sectionName) {
        case "illust":
            pageNum = 0;
            for (let turn = currentPage; turn >= pageNum; turn--) {
                turnPagePrev();
            }
            break;
        case "concept":
            pageNum = 1;
            if (pageNum < currentPage) {
                for (let turn = currentPage; turn > pageNum +1; turn--) {
                    turnPagePrev();
                }
            } else {
                for (let turn = currentPage; turn <= pageNum; turn++) {
                    turnPageNext();
                }
            }
            break;
        case "motion":
            pageNum = 2;
            for (let turn = currentPage; turn <= pageNum; turn++) {
                turnPageNext();
            }
            break;
        default:
            throw new Error("unknown state")
    }
}



function hoverLetter(letterDiv) {
    const cover = letterDiv.querySelector(".letter-cover");
    const project = letterDiv.querySelector(".letter-project");
    
    cover.style.transitionDelay = "0s";
    cover.style.transitionDuration = "0.20s";
    cover.style.zIndex = "0";
    cover.style.transform = "scaleY(-1)";
    cover.style.boxShadow = "box-shadow: 0px 1px 10px -10px var(--shadow-col)";
    
    project.style.transitionDelay = "0.1s";
    project.style.transitionDuration = "0.40s";
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
function leaveLetter(letterDiv) {
    const cover = letterDiv.querySelector(".letter-cover");
    const project = letterDiv.querySelector(".letter-project");
    
    project.style.transitionDelay = "0s";
    project.style.transitionDuration = "0.25s";
    project.style.bottom = "0%";

    cover.style.transitionDelay = "0.15s";
    cover.style.transitionDuration = "0.35s";
    cover.style.zIndex = "1";
    cover.style.transform = "scaleY(1)";
    cover.style.boxShadow = "0px 1px 10px 0px var(--shadow-col)";
}