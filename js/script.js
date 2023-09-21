'use strict';

// ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

document.querySelectorAll('a[href*="#"]').forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault()

		const href = this.getAttribute('href').substring(1);

		const scrollTagret = document.getElementById(href);

		const topOffset = document.querySelector('.header').offsetHeight + 15;
		if (window.innerWidth < 480) {
			topOffset === 100;
		}
		const elementPosition = scrollTagret.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		if (iconMenu.classList.contains('_active')) {
			document.body.classList.remove('_lock');
			menuBody.classList.remove('_active');
			iconMenu.classList.remove('_active');
		}

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth',
		})
	});
});

// ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ

// ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА
// const headerDropdown = document.querySelector('.actions-header__dropdown');
const headerSelect = document.querySelector('.actions-header__select');
const headerCaret = document.querySelector('.actions-header__caret');
const headerMenuList = document.querySelector('.actions-header__menu-list');
const headerOptions = document.querySelectorAll('.actions-header__menu-item');
const headerSelected = document.querySelector('.actions-header__selected');

headerSelect.addEventListener('click', () => {
	headerSelect.classList.toggle('select-clicked');
	headerCaret.classList.toggle('caret-rotate');
	headerMenuList.classList.toggle('menu-open');
});

headerOptions.forEach(option => {
	option.addEventListener('click', () => {
		headerSelected.innerText = option.innerText;
		headerSelect.classList.remove('select-clicked');
		headerCaret.classList.remove('caret-rotate');
		headerMenuList.classList.remove('menu-open');
	});
	headerOptions.forEach(option => {
		option.classList.remove('active');
		option.classList.add('active');
	});
})
// ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА

