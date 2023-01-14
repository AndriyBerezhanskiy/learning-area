

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
   const random = Math.floor(Math.random() * array.length);
   return array[random];
}
let storyText = 'На вулиці було 94 Фаренгейта, тому :insertx: пішов погуляти. Коли вони дійшли до :inserty: ,вони кілька секунд дивилися в жаху, потім :insertz:.Боб усе бачив, але не був здивований — :insertx: важить 300 фунтів, і день був спекотним.';

let insertX = ['Гоблін Віллі',
   'Великий тато',
   'Дід Мороз',
];

let insertY = ['супова кухня',
   'Діснейленд',
   'білий дім',
];

let insertZ = ['самозаймання',
   'розтанув у калюжу на тротуарі»',
   'перетворився на слимака і поповз',
];

randomize.addEventListener('click', result);

function result() {
   let newStory = storyText;

   if (customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace('Боб', name);

   }

   if (document.getElementById("uk").checked) {
      const weight = Math.round(300 / 2.2046) + ' кг';
      const temperature = Math.round((94 - 32) / 1.8) + ' градуси';
      newStory = newStory.replace('94 Фаренгейта', temperature);
      newStory = newStory.replace('300 фунтів', weight);

   }
   let xItem = randomValueFromArray(insertX);
   let yItem = randomValueFromArray(insertY);
   let zItem = randomValueFromArray(insertZ);

   newStory = newStory.replace(':insertx:', xItem);
   newStory = newStory.replace(':insertx:', xItem);
   newStory = newStory.replace(':inserty:', yItem);
   newStory = newStory.replace(':inserty:', yItem);
   newStory = newStory.replace(':insertz:', zItem);
   
   
   
   story.textContent = newStory;
   story.style.visibility = 'visible';

}