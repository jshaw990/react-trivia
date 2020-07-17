import React from 'react'

import { Link } from 'react-router-dom'

import { questions } from '../../assets/questions.js'

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: questions,
            index: 0,
            score: 0,
            defaultClass: 'answer-button__default',
            disabled: false,
            correct: '',
            incorrect: '',
            finish: false,
            time: 60
        };
    }

    nextQuestions(e) {
        let i = this.state.index
        if (i < this.state.questions.length - 1) {
            i++
        }

        this.setState({
            index: i,
            disabled: false,
            defaultClass: this.state.defaultClass,
            correct: '',
            incorrect: ''
        })
    }

    finish() {
        this.setState({
            finish: true
        })
    }
}

export default Quiz;