import React from 'React'

import { Link } from 'react-router-dom'

function Finish(props) {
    return (
        <div className='finish-page'>
            <div className='content-finish content_finish-page animated slideInRight'>
                <p className='score'>
                    <span>Your Score:</span> <br />
                    {props.score}/{props.questions.length}
                </p>
                <Link to='/' className='start-button'>Play Again</Link>
            </div>
        </div>
    );
}

export default Finish;