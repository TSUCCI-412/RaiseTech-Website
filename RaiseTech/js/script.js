const navPrimary = document.getElementById("nav__primary");
const buttonHamburger = document.getElementById("js-buttonHamburger");

let isOpen = false;

buttonHamburger.addEventListener('click', function () {
    if(!isOpen) {
        this.classList.add('active');
        navPrimary.classList.add('active');
        isOpen = true;
    } else {
        this.classList.remove('active');
        navPrimary.classList.remove('active');
        isOpen = false;
    }
        
});


//1200px以下、secondary menuを開閉させる＋の動き


const parentMenu = document.querySelectorAll(".nav__primary__link");
for (let i = 0; i < parentMenu.length; i++) {
    parentMenu[i].addEventListener("click", function (e) {
        e.preventDefault();   //リンク効果を消去
        this.classList.toggle("is-open");
        this.nextElementSibling.classList.toggle("is-open");
    })
    // console.log("ok")
};


