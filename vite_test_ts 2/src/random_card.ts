export function randomCards(count:number){ // функция возвращает count * 2 чисел от 1 до 36 склеенных с "card" 
  const allCards: number[] = 
  [
      1, 2, 3, 4, 5, 8, 7, 6, 7, 8, 9, 11, 12, 13, 14, 15, 18, 17, 16, 17, 18, 19, 20, 31, 32, 33, 34, 35, 38, 37, 36
  ];

const cards = [];

function randomSort(arr:number[]): number[] {
for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
return arr;
}

randomSort(allCards);


for(let i = 0; i < count; i++)
{
  cards.push(allCards[i]);
}

const temp = randomSort(cards.slice());

for(let i = 0; i < count; i++)
{
  cards.push((temp[i]));
}

randomSort(cards);

const cardStrings:string[] = [];

cards.forEach((num) => {
cardStrings.push("card" + num);
});

return(cardStrings);
}