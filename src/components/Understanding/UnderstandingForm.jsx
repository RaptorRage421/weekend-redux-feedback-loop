import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Button } from "@mui/material"


const UnderstandingForm = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    let [myUnderstanding, setMyUnderstanding] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleUnderstandingChange = (event) => {
        event.preventDefault()
        setMyUnderstanding(event.target.value)
    }
    const submitUnderstanding = (event) => {
        event.preventDefault()
        if (!myUnderstanding) {
            setErrorMessage('Please select an Understanding score before proceeding.')
            return
        }
        dispatch({ type: 'ADD_UNDERSTANDING', payload: Number(myUnderstanding) })
        history.push('/support')
    }

    const goBack = () => {
        dispatch({type: 'CLEAR_FEELING'})
        history.push('/')

    }
    const clearState = () => {

        dispatch({type: 'CLEAR_SUPPORT'})
    
    }

    return (
        <>
    
            <div className='flexbox'>
                <form onSubmit={submitUnderstanding}>
                    <div className="center">

                        <div className="vertical_space">
                            <label htmlFor="1">1</label>
                            <input
                                data-testid="input"
                                type="checkbox"
                                id='1'
                                name='understanding'
                                value='1'
                                checked={myUnderstanding === '1'}
                                onChange={handleUnderstandingChange}
                            />
                        </div>
                        <div className="vertical_space">
                            <label htmlFor="2">2</label>
                            <input
                                data-testid="input"
                                type="checkbox"
                                id='2'
                                name='understanding'
                                value='2'
                                checked={myUnderstanding === '2'}
                                onChange={handleUnderstandingChange}
                            />
                        </div>
                        <div className="vertical_space">
                            <label htmlFor="3">3</label>
                            <input
                                data-testid="input"
                                type="checkbox"
                                id='3'
                                name='understanding'
                                value='3'
                                checked={myUnderstanding === '3'}
                                onChange={handleUnderstandingChange}
                            />
                        </div>
                        <div className="vertical_space">
                            <label htmlFor="4">4</label>
                            <input
                                data-testid="input"
                                type="checkbox"
                                id='4'
                                name='understanding'
                                value='4'
                                checked={myUnderstanding === '4'}
                                onChange={handleUnderstandingChange}
                            />
                        </div>
                        <div className="vertical_space">
                            <label htmlFor="5">5</label>
                            <input
                                data-testid="input"
                                type="checkbox"
                                id='5'
                                name='understanding'
                                value='5'
                                checked={myUnderstanding === '5'}
                                onChange={handleUnderstandingChange}
                            />
                        </div>

                    </div>
                    <div className="button-container">
                        <Button color="primary" size="small" type="button" onClick={goBack}>Back</Button>
                        <Button onClick={clearState} data-testid="next" size="small" type="submit">Next</Button>
                    </div>
                </form>
                
            </div>
            <div className="errorMessage">{errorMessage && <p className="error-message">{errorMessage}</p>}</div>
        </>
    )

}

export default UnderstandingForm