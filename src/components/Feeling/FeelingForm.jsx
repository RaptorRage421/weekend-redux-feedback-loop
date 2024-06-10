import {
    Typography,
    Button,
    CardContent,
    CardActions,
    Card,
    CardMedia, 
    CardHeader
} from "@mui/material"

import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import './FeelingForm.css'


const FeelingForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [myFeelings, setMyFeelings] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    
    const handleFeelingChange = (event) => {
        event.preventDefault()
        setMyFeelings(event.target.value)
    }
    const submitFeelings = (event) => {
        event.preventDefault()
        if (!myFeelings) {
            setErrorMessage('Please select a feeling score before proceeding.')
            return
        }
        dispatch({ type: 'ADD_FEELINGS', payload: Number(myFeelings) })
        history.push('/understanding')
        setMyFeelings('')
    }

const clearState = () => {

    dispatch({type: 'CLEAR_UNDERSTANDING'})

}


    return (
        <>
            <div className='flexbox'>
                <form onSubmit={submitFeelings}>
                    <div className="center">

                        <div className="vertical_space">
                            <label htmlFor="1">1</label>
                            <input

                                type="checkbox"
                                id='1'
                                name='feelings'
                                value='1'
                                checked={myFeelings === '1'}
                                onChange={handleFeelingChange}
                            />
                        </div>
                        <div className="vertical_space">
                            <label htmlFor="2">2</label>
                            <input
                                data-testid="input"
                                type="checkbox"
                                id='2'
                                name='feelings'
                                value='2'
                                checked={myFeelings === '2'}
                                onChange={handleFeelingChange}
                            />
                        </div>
                        <div className="vertical_space">
                            <label htmlFor="3">3</label>
                            <input
                                data-testid="input"
                                type="checkbox"
                                id='3'
                                name='feelings'
                                value='3'
                                checked={myFeelings === '3'}
                                onChange={handleFeelingChange}
                            />
                        </div>
                        <div className="vertical_space">
                            <label htmlFor="4">4</label>
                            <input
                                data-testid="input"
                                type="checkbox"
                                id='4'
                                name='feelings'
                                value='4'
                                checked={myFeelings === '4'}
                                onChange={handleFeelingChange}
                            />
                        </div>
                        <div className="vertical_space">
                            <label htmlFor="5">5</label>
                            <input
                                data-testid="input"
                                type="checkbox"
                                id='5'
                                name='feelings'
                                value='5'
                                checked={myFeelings === '5'}
                                onChange={handleFeelingChange}
                            />
                        </div>
                    </div>
                    <div className="button-container">
                        <Button onClick={clearState} data-testid="next" size="small" type="submit" color="primary">Submit</Button>
                    </div>
                    </form>
                    
            </div>
            <div className="errorMessage">{errorMessage && <p className="error-message">{errorMessage}</p>}</div>
        </>
    )
}

export default FeelingForm