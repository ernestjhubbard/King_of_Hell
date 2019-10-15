$(document).ready(startCard);

function startCard() {
  new Card;
}

class Card {
  constructor(monster) {
    this.box = $('<div>').addClass('playerscorebox');
    this.heartbox = $('<div>').addClass('heartbox').append
      ($('<div>').addClass('heart')).append
      ($('<div>').addClass('health'));
    this.starbox = $('<div>').addClass('starbox').append
      ($('<div>').addClass('star')).append
      ($('<div>').addClass('points'));;
    this.energybox = $('<div>').addClass('energybox').append
      ($('<div>').addClass('energy')).append
      ($('<div>').addClass('energynumber'));;
    switch (monster) {
      case 'jack':
        this.render('jack');
        break;
      case 'finkelstein':
        this.render('finkelstein');
        break;
      case 'oogie':
        this.render('oogie');
        break;
    }
  }
  render(king) {
    switch (king) {
      case 'jack':
        $('body').append(this.box.addClass('jack').append(this.starbox, this.heartbox, this.energybox));
        break;
      case 'finkelstein':
        $('body').append(this.box.addClass('finkelstein').append(this.starbox, this.heartbox, this.energybox));
        break;
      case 'oogie':
        $('body').append(this.box.addClass('oogie').append(this.starbox, this.heartbox, this.energybox));
        break;
    }
  }
}