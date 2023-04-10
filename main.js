const btnSearch = document.querySelector('.js-search');
const btnbars = document.querySelector('.js-menu');
const modal = document.querySelector('.modal-js');
const close = document.querySelector('.close-js');
const modabodysearchjs = document.querySelector('.moda-body-search-js');
const showMenu = document.querySelector('.show-menu');
const closeMenu = document.querySelector('.js-show-menu-close');
const showMenuBody = document.querySelector('.show-menu-body');

const menuBtnTablet = document.querySelector('.header-bars-mobile-tablet');

const showOnTablet = document.querySelector('.header-nav-mobile-tablet');

btnSearch.addEventListener('click', function () {
    modal.classList.toggle('showModal')
});

close.addEventListener('click', function (e) {
    modal.classList.remove('showModal')

});
modal.addEventListener('click', function (e) {
    if (!modabodysearchjs.contains(e.target)) {
        close.click();
    }
})
btnbars.addEventListener('click', function () {
    showMenu.classList.toggle('show-js');
    showMenuBody.style.animation = 'sideIn 0.5s linear';
})
closeMenu.addEventListener('click', function () {
    showMenuBody.style.animation = 'sideOut 1s linear';
    setTimeout(function () {
        showMenu.classList.toggle('show-js')
    }, 1000)


})

showMenu.addEventListener('click', function (e) {

    if (!showMenuBody.contains(e.target)) {
        closeMenu.click()
    }
});

menuBtnTablet.addEventListener('click', function () {
    showOnTablet.classList.toggle('on-tablet');
}
)