document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'cake',
        img: 'assets/cake.png'
      },
      {
        name: 'cookie',
        img: 'assets/cookie.png'
      },
      {
        name: 'fish',
        img: 'assets/fish.png'
      },
      {
        name: 'picaxe',
        img: 'assets/picaxe.png'
      },
      {
        name: 'pork',
        img: 'assets/pork.png'
      },
      {
        name: 'record',
        img: 'assets/record.png'
      },
      {
        name: 'cake',
        img: 'assets/cake.png'
      },
      {
        name: 'cookie',
        img: 'assets/cookie.png'
      },
      {
        name: 'fish',
        img: 'assets/fish.png'
      },
      {
        name: 'picaxe',
        img: 'assets/picaxe.png'
      },
      {
        name: 'pork',
        img: 'assets/pork.png'
      },
      {
        name: 'record',
        img: 'assets/record.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'assets/blank.png')
        cards[optionTwoId].setAttribute('src', 'assets/blank.png')
        alert('you did it!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Great job')
        cards[optionOneId].setAttribute('src', 'assets/win.png')
        cards[optionTwoId].setAttribute('src', 'assets/win.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'assets/blank.png')
        cards[optionTwoId].setAttribute('src', 'assets/blank.png')
        alert('nope.')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations!'
      }
    }
  
    //flip card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  