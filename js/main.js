window.addEventListener('load', () => {


   const stratButton = document.querySelector('#start-btn'),
      startPage = document.querySelector('.menu'),
      levelPage = document.querySelector('.level'),
      hard = document.querySelector('#hard'),
      medium = document.querySelector('#medium'),
      easy = document.querySelector('#easy'),
      gameWindow = document.querySelector('.game-window');





   stratButton.addEventListener('click', () => {
      startPage.classList.add('hide');
      levelPage.classList.add('show');

   });


   function hidePage() {
      levelPage.classList.remove('show');
      levelPage.classList.add('hide');
   }

   hard.addEventListener('click', (e) => {
      hidePage();
      hardGame(cardBackUrl);
   });

   const cardBackUrl = "img/Cards/CardBack.png",
      cardOne = "img/Cards/Card1.png";


   function hardGame(url) {
      gameWindow.innerHTML = `
      <div class="cards">
         <div id="card1">
            <img src=${url} width="70" height="100" alt="lorem">
         </div>
      </div>
      `;
   }

   setTimeout(() => {
      let card1 = document.querySelector('#card1');
      card1.addEventListener('click', () => {
         card1.classList.add('.hide');
      });
   }, 4000);









});