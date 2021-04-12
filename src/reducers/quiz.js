import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'What is the name of the park where Stockholms famous cherry blossoms are located?', options: ['Berzelii Park', 'Tantolunden', 'Kungsträdgården', 'Humlegården'], correctAnswerIndex: 2 },
  { id: 2, questionText: '?', options: ['2012', '2014', '2016', '2018'], correctAnswerIndex: 2 },
  { id: 3, questionText: 'There is a landmark in the shape of a hole at Stockholms central station, what is its name in local tounge?', options: ['Spottkoppen', 'Ringen', 'Slukhålet'], correctAnswerIndex: 0 },
  { id: 4, questionText: 'The mountain is Stokholm´s highest point, the bridge in the background is a clue. What is its name?', options: ['Skinnarviksberget', '2014', '2016', '2018'], correctAnswerIndex: 2 },
  { id: 5, questionText: 'Blamfkasdnfjansf?', options: ['2011', '2013', '2017', '2019'], correctAnswerIndex: 2 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  score: 0,
  quizBegin: false,
  quizOver: false
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
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
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
    restart: () => {
      return initialState
    }

  }
})
