import { quizData } from './data.js'

//logs
console.log(quizData.questions[0]) //first question
console.log(quizData.results.Brave) //first question

let currentQuestionIndex = 0
let traitScores = {
  Brave: 0,
  Calm: 0,
  Clever: 0,
  Playful: 0,
}

function displayTheQuestions() {
  //get the current question using the index
  const currentQuestion = quizData.questions[currentQuestionIndex]

  //get the HTML elements that we need to fill
  const questionElement = document.getElementById('question-text')
  const answerElement = document.getElementById('answers')

  //fill the question text with data inside quizData.questions
  questionElement.textContent = currentQuestion.question

  answerElement.innerHTML = '' //clear the previous answers

  //loop through each answers and create a button for each one
  currentQuestion.answers.forEach((answer) => {
    //create a button
    const button = document.createElement('button')
    button.textContent = answer.text
    button.className = 'answer-btn'

    //when clicked, do something
    button.addEventListener('click', () => {
      console.log('clicked answer:', answer.text)
      handleAnswerClick(answer.trait)
      //log the clicked answer text
      console.log('trait', answer.trait) //log the trait of the clicked answer
    })

    //add the button the container
    answerElement.appendChild(button)
  })

  const questionNumberElement = currentQuestionIndex + 1
  document.getElementById('question-number').textContent =
    `Question ${questionNumberElement} of ${quizData.questions.length}`
}

function showResult() {
  //hide the quiz, and show the result scren
  document.getElementById('quiz-container').style.display = 'none'
  document.getElementById('result-container').style.display = 'block'

  //find which trait has the highest score
  let highestTrait = ''
  let highestScore = 0

  //loop through each trait and find the maximum score
  for (let trait in traitScores) {
    if (traitScores[trait] > highestScore) {
      highestScore = traitScores[trait]
      highestTrait = trait
    }
  }

  //get all Pokémon for that trait
  const pokemonList = quizData.results[highestTrait]

  //pick a random Pokémon from the list
  const randomIndex = Math.floor(Math.random() * pokemonList.length)
  const resultPokemon = pokemonList[randomIndex]

  //display the result Pokémon
  document.getElementById('pokemon-name').textContent = resultPokemon.name
  document.getElementById('pokemon-image').src = resultPokemon.imageUrl
  document.getElementById('pokemon-description').textContent =
    resultPokemon.description
  document.getElementById('pokemon-nature').textContent = resultPokemon.nature
  document.getElementById('pokedex-number').textContent =
    `#${resultPokemon.pokedexNumber}`

  //display the trait scores
  const traitScoresElement = document.getElementById('trait-scores')
  traitScoresElement.innerHTML = '' //clear element first

  //loop through each trait
  for (let trait in traitScores) {
    //create a div for this trait
    const traitDivElement = document.createElement('div')
    traitDivElement.className = 'trait-score'

    //add the trait name and score inside
    traitDivElement.innerHTML = `
      <div class='trait-name'>${trait}</div>
      <div class='trait-value'>${traitScores[trait]}</div>
    `

    //add the div to the container
    traitScoresElement.appendChild(traitDivElement)
  }
}

function handleAnswerClick(trait) {
  //add 1 to the trait score
  traitScores[trait] += 1

  //move to the next question
  currentQuestionIndex += 1

  //check if we are done with the quiz
  if (currentQuestionIndex < quizData.questions.length) {
    displayTheQuestions()
  } else {
    //quiz is done, and show the result
    showResult()
  }
}

displayTheQuestions()

document.getElementById('restart-btn').addEventListener('click', () => {
  //Reset everything
  currentQuestionIndex = 0
  traitScores = {
    Brave: 0,
    Calm: 0,
    Clever: 0,
    Playful: 0,
  }

  document.getElementById('result-container').style.display = 'none'
  document.getElementById('quiz-container').style.display = 'block'

  displayTheQuestions()
})

document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('landing-container').style.display = 'none'
  document.getElementById('quiz-container').style.display = 'block'
  displayTheQuestions()
})
