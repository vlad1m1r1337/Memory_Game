import {defeatScreen1, defeatScreen2, defeatScreen3,
	victoryScreen1, victoryScreen2, victoryScreen3, checkFlipClass} from './main';

export function compare1(container: HTMLElement) {
	let hasFlipperedCard = false;
	let firstCard:string , secondCard:string, targetFirst:HTMLElement, targetSecond:HTMLElement;
	const temp = document.querySelectorAll('.memory-card');

	const flipCard = (e:Event) => {
		if (!e.target)return;
		const target = (e.target as HTMLElement).parentElement;
		if (!target)return;
		const images = target.querySelectorAll('img');
		const firstClass = images[0].classList;
		target.classList.add('flip');

		if (!hasFlipperedCard) {
		hasFlipperedCard = true;
		targetFirst = target;
		firstCard = firstClass[0];
		}
		else {
		hasFlipperedCard = false;
		targetSecond = target;
		secondCard = firstClass[0];
		setTimeout(() =>{ 
      if(secondCard !== firstCard)
        defeatScreen1(container)
      else if (checkFlipClass() === 1)
        victoryScreen1(container)
    }, 100)
		}
	}
	temp.forEach(card => {
		card.addEventListener('click', flipCard);
	})
}

export function compare2(container:HTMLElement) {
	let hasFlipperedCard = false;
	let firstCard:string , secondCard:string, targetFirst:HTMLElement, targetSecond:HTMLElement;
	const temp = document.querySelectorAll('.memory-card');

	const flipCard = (e:Event) => {
		if (!e.target)return;
		const target = (e.target as HTMLElement).parentElement;
		if (!target)return;
		const images = target.querySelectorAll('img');
		const firstClass = images[0].classList;
		target.classList.add('flip');

		if (!hasFlipperedCard) {
		hasFlipperedCard = true;
		targetFirst = target;
		firstCard = firstClass[0];
		}
		else {
		hasFlipperedCard = false;
		targetSecond = target;
		secondCard = firstClass[0];
		setTimeout(() =>{ 
      if(secondCard !== firstCard)
        defeatScreen2(container)
      else if (checkFlipClass() === 1)
        victoryScreen2(container)
    }, 100)
		}
	}
	temp.forEach(card => {
		card.addEventListener('click', flipCard);
	})
}

export function compare3(container:HTMLElement) {
	let hasFlipperedCard = false;
	let firstCard:string , secondCard:string, targetFirst:HTMLElement, targetSecond:HTMLElement;
	const temp = document.querySelectorAll('.memory-card');
	const flipCard = (e:Event) => {
		if (!e.target)return;
		const target = (e.target as HTMLElement).parentElement;
		if (!target)return;
		const images = target.querySelectorAll('img');
		const firstClass = images[0].classList;
		target.classList.add('flip');

		if (!hasFlipperedCard) {
		hasFlipperedCard = true;
		targetFirst = target;
		firstCard = firstClass[0];
		}
		else {
		hasFlipperedCard = false;
		targetSecond = target;
		secondCard = firstClass[0];
		setTimeout(() =>{ 
      if(secondCard !== firstCard)
        defeatScreen3(container)
      else if (checkFlipClass() === 1)
        victoryScreen3(container)
    }, 100)
		}
	}
	temp.forEach(card => {
		card.addEventListener('click', flipCard);
	})
}