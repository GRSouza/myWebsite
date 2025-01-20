var openMenuButton = document.querySelector("#menu-button");
var closeMenuButton = document.querySelector("#close-menu-button");
var menuListButtonMobile = document.querySelectorAll(".dropdown-menu-list-item");
var menuListButtonDesk = document.querySelectorAll(".menu-button")
var myProjectsSection = document.querySelector(".projects-section");
var contactSection = document.querySelector(".contact-section");
var backToTopButton = document.querySelector(".footer-button");

setInterval(updateClock, 1000);
updateClock();
experienceHover();

function showDropdownMenu() {
    var dropdownMenu = document.querySelector("#dropdown-menu-mask");
    dropdownMenu.classList.toggle("show");
}
function showExperienceDescription() {
    var experienceDescriptionList = document.querySelector(".experience-description-list");
    experienceDescriptionList.classList.toggle("show");
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function updateClock() {
        var now = new Date();
        var options = { timeZone: 'America/Sao_Paulo', hour12: false };
        var formatter = new Intl.DateTimeFormat('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    
        var timeString = formatter.format(now);
        document.getElementById("clock").textContent = timeString;
}  
function stickyBoxPosition() {
    var stickyScrollArea = document.getElementById("experience-left");
    var stickyAreaPosition = stickyScrollArea.getBoundingClientRect().top;
    var stickBox = document.getElementById("sticky-box");    
    var stickyFixedBox = document.getElementById("fixed-sticky-box");

    if (stickyAreaPosition <= 100) {
        stickyFixedBox.classList.add("display-off");
        stickBox.classList.remove ("display-off");
    } else {
        stickyFixedBox.classList.remove("display-off");
        stickBox.classList.add ("display-off");
    }    
}
function experienceHover() {
    var expList = document.querySelectorAll(".experience-topic");
    var expBox = document.querySelectorAll(".experience-description-box-content");
    var expListDesc = document.querySelectorAll(".experience-description-list")

    function matchExpNumber() {
        var expListNumber = this.classList[1];

        for (var expBoxClassNr = 0; expBoxClassNr < expBox.length; expBoxClassNr++) {
            var expBoxNumber = expBox[expBoxClassNr].classList[1];

            if (expListNumber === expBoxNumber) {
                expBox[expBoxClassNr].classList.remove("display-off");
                console.log(expBoxNumber + " True");
            } else {
                expBox[expBoxClassNr].classList.add("display-off");
                console.log(expBoxNumber + " False");
            }
        }

        for (var expListDescClassNr = 0; expListDescClassNr < expListDesc.length; expListDescClassNr++) {
            var expListDescNumber = expListDesc[expListDescClassNr].classList[1];

            if (expListNumber === expListDescNumber) {
                expListDesc[expListDescClassNr].classList.remove("display-off");
                console.log(expListDescNumber + " True");
            } else {
                expListDesc[expListDescClassNr].classList.add("display-off");
                console.log(expListDescNumber + " False");
            }
        }

        expList.forEach(function(topic) {
            topic.classList.remove("topic-highlight");
        })

        this.classList.add("topic-highlight");
    }

    for (var expListClassNr = 0; expListClassNr < expList.length; expListClassNr++) {
        expList[expListClassNr].addEventListener("click", matchExpNumber);
    }
}



window.addEventListener("scroll", stickyBoxPosition)
openMenuButton.addEventListener ("click", showDropdownMenu);
closeMenuButton.addEventListener ("click", showDropdownMenu);
menuListButtonMobile[0].addEventListener ("click", showDropdownMenu);
menuListButtonMobile[1].addEventListener ("click", showDropdownMenu);
backToTopButton.addEventListener ("click", scrollToTop);

