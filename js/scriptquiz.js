$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 100) {
            $(".navbar").addClass("sticky")
        } else {
            $(".navbar").removeClass("sticky")
        }
    })
})

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

let shuffledQuestions, currentQuestionIndex

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.getElementById('quiz-container'))
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.getElementById('quiz-container'), correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Fazer de novo'
        startButton.classList.remove('hide')
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: 'Quando foi lançado o filme Barbie: As Rapunzel?',
        answer: [{
                text: '2010',
                correct: false
            },
            {
                text: '2002',
                correct: true
            },
            {
                text: '2020',
                correct: false
            },
            {
                text: '2012',
                correct: false
            }

        ]
    },
    {
        question: 'Qual protagonista do filme Barbie: A princesa e a Popstar?',
        answer: [{
                text: 'Barbie',
                correct: false
            },
            {
                text: 'Princesa Alexa',
                correct: true
            },
            {
                text: 'Princesa Tori',
                correct: false
            },
            {
                text: 'Rapunzel',
                correct: false
            }

        ]
    },

    {
        question: '"Há uma princesa dentro de toda garota", qual é o filme?',
        answer: [{
                text: 'Barbie: As rapunzel',
                correct: false
            },
            {
                text: 'Barbie: Em as escolas de princesa',
                correct: true
            },
            {
                text: 'Barbie: Vida de Sereia',
                correct: false
            },
            {
                text: 'Barbie: Portal Secreto',
                correct: false
            }

        ]
    },
    {
        question: '"Aqui estou" foi umas das músicas tocadas em Barbie a Princesa e a PopStar?',
        answer: [{
                text: 'Verdadeiro',
                correct: true
            },
            {
                text: 'Falso',
                correct: false
            },
        ]
    },
    {
        question: 'A classificação dos filmes da Barbie são para maiores de 18 anos.',
        answer: [{
                text: 'Verdadeiro',
                correct: false
            },
            {
                text: 'Falso',
                correct: true
            },
        ]
    },
    {
        question: 'Sou a barbie Girl se você quer seu meu...',
        answer: [{
                text: 'Traste',
                correct: false
            },
            {
                text: 'Namorado',
                correct: true
            },
            {
                text: 'Vagabundo',
                correct: false
            },
            {
                text: 'Esposo',
                correct: false
            }

        ]
    },
    {
        question: 'Quem é o namorado da Barbie?',
        answer: [{
                text: 'Josivaldo',
                correct: false
            },
            {
                text: 'Tony Ramos',
                correct: false
            },
            {
                text: 'Max Steel',
                correct: false
            },
            {
                text: 'Ken',
                correct: true
            }

        ]
    },
    {
        question: 'Quais são as amigas de Barbie em: Barbie e as Agentes Secretas?',
        answer: [{
                text: 'Teresa e Renee',
                correct: true
            },
            {
                text: 'Princesa Alexa e Princesa Tori',
                correct: false
            },
            {
                text: 'bela adormecida e chapeuzinho vermelho',
                correct: false
            },
            {
                text: 'Tinkerbell e rapunzel',
                correct: false
            }

        ]
    },
    {
        question: 'No filme Barbie e as agentes secretas, Barbie e suas amigas era atletas em que esportes?',
        answer: [{
                text: 'Hipismo',
                correct: false
            },
            {
                text: 'Futebol',
                correct: false
            },
            {
                text: 'Ginástica',
                correct: true
            },
            {
                text: 'Basquete',
                correct: false
            }

        ]
    },
    {
        question: 'Qual primeiro filme lançado da barbie?',
        answer: [{
                text: 'Barbie: A estrela do Rock',
                correct: true
            },
            {
                text: 'Barbie: Golfinhos Mágicos',
                correct: false
            },
            {
                text: 'Barbie: Quebra Nozes',
                correct: false
            },
            {
                text: 'Barbie: Lago dos Cisnes',
                correct: false
            }

        ]
    },





]