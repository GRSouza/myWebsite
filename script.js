var openMenuButton = document.querySelector("#menu-button");
var closeMenuButton = document.querySelector("#close-menu-button");
var menuListButtonMobile = document.querySelectorAll(".dropdown-menu-list-item");
var menuListButtonDesk = document.querySelectorAll(".menu-button")
var myProjectsSection = document.querySelector(".projects-section");
var contactSection = document.querySelector(".contact-section");
var backToTopButton = document.querySelector(".footer-button");

setInterval(updateClock, 1000);
updateClock();
experienceHighlight();

function showDropdownMenu() {
    var dropdownMenu = document.querySelector("#dropdown-menu-mask");
    dropdownMenu.classList.toggle("show");
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
function experienceHighlight() {
    var expList = document.querySelectorAll(".experience-topic");
    var expBox = document.querySelectorAll(".experience-description-box-content");
    var expListDesc = document.querySelectorAll(".experience-description-list");
    var chevronIcon = document.querySelectorAll(".chevron-icon");

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
                expListDesc[expListDescClassNr].classList.add("open");
                console.log(expListDescNumber + " True");
            } else {
                expListDesc[expListDescClassNr].classList.remove("open");
                console.log(expListDescNumber + " False");
            }
        }
        for (var expChevronIconClassNr = 0; expChevronIconClassNr < chevronIcon.length; expChevronIconClassNr++) {
            var expChevronIconNumber = chevronIcon[expChevronIconClassNr].classList[1];

            if (expListNumber === expChevronIconNumber){
                chevronIcon[expChevronIconClassNr].classList.add("fa-chevron-up");
                chevronIcon[expChevronIconClassNr].classList.remove("fa-chevron-down");
            } else {
                chevronIcon[expChevronIconClassNr].classList.remove("fa-chevron-up");
                chevronIcon[expChevronIconClassNr].classList.add("fa-chevron-down");                
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

openMenuButton.addEventListener ("click", showDropdownMenu);
closeMenuButton.addEventListener ("click", showDropdownMenu);
menuListButtonMobile[0].addEventListener ("click", showDropdownMenu);
menuListButtonMobile[1].addEventListener ("click", showDropdownMenu);
backToTopButton.addEventListener ("click", scrollToTop);

