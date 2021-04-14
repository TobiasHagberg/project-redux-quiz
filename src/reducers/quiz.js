import { createSlice } from '@reduxjs/toolkit'

const questions = [
  {
    id: 1,
    questionText:
      'Vem har oberoende av ålder firat flest nyår i team tigers?',
    options: ['Ida', 'Isabella', 'Tobias', 'Sandra'],
    correctAnswerIndex: 2,
    image: './assets/new-year.jpg'
  },
  {
    id: 2,
    questionText:
      'Vad är Isabellas favoritgodis?',
    options: ['Saltlakrits', 'Hallonbåt', 'Zoo', 'Center'],
    correctAnswerIndex: 0,
    image: './assets/lollipop.jpg'
  },
  {
    id: 3,
    questionText:
      'There is a landmark in the shape of a hole at Stockholms central station, what is its name in local tounge?',
    options: ['Spottkoppen', 'Ringen', 'Slukhålet', 'Askkoppen'],
    correctAnswerIndex: 0,
    image: './assets/Centralen_hall.jpg'
  },
  {
    id: 4,
    questionText:
      'Chalmers är en erkänt lärosäte i Sverige, hur många elever har passerat Tobias bakom katedern?',
    options: [
      'Noll',
      'Fler än hundra',
      '176 st',
      'Fler än 300'
    ],
    correctAnswerIndex: 3,
    image: './assets/chalm-nollk.jpg'
  },
  {
    id: 5,
    questionText:
      'Höga kusten och team tigers, vilken är kopplingen?',
    options: ['Adventure racing', 'Peter Forsberg', 'Henrik & Daniel Sedin', 'Slottsdalsskrevan, Ronja'],
    correctAnswerIndex: 1,
    image: './assets/Marie_Poya.jpg'
  },
  {
    id: 6,
    questionText:
      'Chalmers är en erkänt lärosäte i Sverige, hur många elever har passerat Tobias bakom katedern?',
    options: [
      'Noll',
      'Fler än hundra',
      '176 st',
      'Fler än 300'
    ],
    correctAnswerIndex: 3,
    image: './assets/chalm-nollk.jpg'
  },
  {
    id: 7,
    questionText:
      'Chalmers är en erkänt lärosäte i Sverige, hur många elever har passerat Tobias bakom katedern?',
    options: [
      'Noll',
      'Fler än hundra',
      '176 st',
      'Fler än 300'
    ],
    correctAnswerIndex: 3,
    image: './assets/chalm-nollk.jpg'
  },
  {
    id: 8,
    questionText:
      'Chalmers är en erkänt lärosäte i Sverige, hur många elever har passerat Tobias bakom katedern?',
    options: [
      'Noll',
      'Fler än hundra',
      '176 st',
      'Fler än 300'
    ],
    correctAnswerIndex: 3,
    image: './assets/chalm-nollk.jpg'
  },
  {
    id: 9,
    questionText:
      'Vilket är Isabellas spirit animal?',
    options: [
      'Apa',
      'Sengångare',
      'Katt',
      'Hund'
    ],
    correctAnswerIndex: 2,
    image: './assets/bird.jpg'
  },
  {
    id: 10,
    questionText:
      'Chalmers är en erkänt lärosäte i Sverige, hur många elever har passerat Tobias bakom katedern?',
    options: [
      'Noll',
      'Fler än hundra',
      '176 st',
      'Fler än 300'
    ],
    correctAnswerIndex: 3,
    image: './assets/chalm-nollk.jpg'
  },
  {
    id: 11,
    questionText:
      'Chalmers är en erkänt lärosäte i Sverige, hur många elever har passerat Tobias bakom katedern?',
    options: [
      'Noll',
      'Fler än hundra',
      '176 st',
      'Fler än 300'
    ],
    correctAnswerIndex: 3,
    image: './assets/chalm-nollk.jpg'
  },
  {
    id: 12,
    questionText:
      'Vilken musikgenre lyssnar Isabella mestadels på?',
    options: [
      'Pop',
      'Metal core',
      'EDM',
      'RnB'
    ],
    correctAnswerIndex: 3,
    image: './assets/guitar.jpg'
  }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  score: 0,
  quizBegin: false,
  quizOver: false,
  showDetails: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (store, action) => {
      const { questionId, answerIndex } = action.payload
      const question = store.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error(
          'Could not find question! Check to make sure you are passing the question id correctly.'
        )
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        )
      }

      if (answerIndex === question.correctAnswerIndex) {
        store.score += 1
      }

      store.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (store) => {
      if (store.currentQuestionIndex + 1 === store.questions.length) {
        store.quizOver = true
      } else {
        store.currentQuestionIndex += 1
      }
    },

    goToPreviousQuestion: (store) => {
      store.currentQuestionIndex -= 1
    },

    startQuiz: (store) => {
      store.quizBegin = true
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    showDetailedSummary: (store) => {
      store.showDetails = true
    },

    restart: () => {
      return initialState
    }
  }
})
