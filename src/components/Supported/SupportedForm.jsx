import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Button } from "@mui/material"

const SupportedForm = () => {

    
    const history = useHistory()
    const dispatch = useDispatch()
    let [mySupport, setMySupport] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSupportChange = (event) => {
        event.preventDefault()
        setMySupport(event.target.value)
    }
    const submitSupport = (event) => {
        event.preventDefault()
        if (!mySupport) {
            setErrorMessage('Please select a Support score before proceeding.')
            return
        }
        dispatch({type: 'ADD_SUPPORT', payload: Number(mySupport)})
        history.push('/comments')
    }

    const goBack = () => {
        dispatch({type: 'CLEAR_UNDERSTANDING'})
        history.push('/understanding')

    }
    const clearState = () => {

        dispatch({type: 'CLEAR_COMMENTS'})
    
    }

        return (
            <>
        
              <div className='flexbox'>
       <form onSubmit={submitSupport}>
        <div className="center">
        
               <div className="vertical_space">
                <label htmlFor="1">1</label>
                <input
                data-testid="input"
                    type="checkbox"
                    id='1'
                    name='understanding'
                    value='1'
                    checked={mySupport === '1'}
                    onChange={handleSupportChange}
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
                    checked={mySupport === '2'}
                    onChange={handleSupportChange}
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
                    checked={mySupport === '3'}
                    onChange={handleSupportChange}
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
                    checked={mySupport === '4'}
                    onChange={handleSupportChange}
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
                    checked={mySupport === '5'}
                    onChange={handleSupportChange}
                />
                </div>
                </div>
                <div className="button-container">
                        <Button size="small" type="button" onClick={goBack}>Back</Button>
                        <Button size="small" onClick={clearState} data-testid="next" type="submit">Next</Button>
                    </div>
                </form>
                
            </div>
            <div className="errorMessage">{errorMessage && <p className="error-message">{errorMessage}</p>}</div>
        </>
    )
        
    
    }

export default SupportedForm