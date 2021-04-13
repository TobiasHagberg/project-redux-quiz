import { createSlice } from '@reduxjs/toolkit'

const questions = [
  {
    id: 1,
    questionText:
      'What is the name of the park with Stockholms famous cherry blossom trees?',
    options: ['Berzelii Park', 'Tantolunden', 'Kungsträdgården', 'Humlegården'],
    correctAnswerIndex: 2,
    image: './assets/cherry_blossom.jpg'
  },
  {
    id: 2,
    questionText:
      'Gröna Lund once had so many guest during a concert that some of the audience actually entered the amusement park from the water by swimming. What was the name of the band that caused this chaos?',
    options: ['Bob Marley & The Wailers', 'Marcus & Martinus', 'Tenacious D', 'Wu-Tang Clan'],
    correctAnswerIndex: 2,
    image: './assets/Carousel-Yanan_Li.jpg'
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
      'The mountain is Stockholm´s highest point, the background is a clue. What is its name?',
    options: [
      'Skinnarviksberget',
      'Vikingaberget',
      'Stora Lappkärrsberget',
      'Vita Bergen'
    ],
    correctAnswerIndex: 0,
    image: './assets/Berget.jpg'
  },
  {
    id: 5,
    questionText:
      'Marie and Poya had a spontaneous lunch, what is the name of the closest public gathering point?',
    options: ['Mariatorget', 'Medborgarplatsen', 'Skrapan', 'Bysistorget'],
    correctAnswerIndex: 1,
    image: './assets/Marie_Poya.jpg'
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
