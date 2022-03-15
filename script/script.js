let champ1 = document.querySelector('#champ1')
let champ2 = document.querySelector('#champ2')
let champ3 = document.querySelector('#champ3')
let champ4 = document.querySelector('#champ4')
let champ5 = document.querySelector('#champ5')

let garenHero = document.querySelector('#garen');
let leBlancHero = document.querySelector('#le-blanc');
let morganaHero = document.querySelector('#morgana');
let vayneHero = document.querySelector('#vayne');
let karmaHero = document.querySelector('#karma');

let heroButton = document.querySelector('#hero-button');

let garen = document.createElement('img');
garen.src = 'https://i.ibb.co/nmZffhm/garen.png';
let morgana = document.createElement('img');
morgana.src = 'https://i.ibb.co/hBgD1Jz/morgana.png';
let karma = document.createElement('img');
karma.src = 'https://i.ibb.co/zm2VHbQ/karma.png';
let leBlanc = document.createElement('img');
leBlanc.src = 'https://i.ibb.co/tLx9KS0/leblanc.png';
let vayne = document.createElement('img');
vayne.src = 'https://i.ibb.co/DzwxK1Q/vayne.png';

function randomHero() {
    let random = Math.floor(Math.random() * 5) +1
    if(random == 1) {
        return garen;
    }else if(random == 2) {
        return morgana;
    }else if(random == 3) {
        return karma;
    }else if(random == 4) {
        return leBlanc;
    }else if(random == 5) {
        return vayne;
    }
}

heroButton.addEventListener('click', function() {
    garenHero.classList.add('hidden');
    champ1.append(randomHero());
    
    leBlancHero.classList.add('hidden');
    champ2.append(randomHero());

    morganaHero.classList.add('hidden');
    champ3.append(randomHero());

    vayneHero.classList.add('hidden');
    champ4.append(randomHero());

    karmaHero.classList.add('hidden');
    champ5.append(randomHero());
})