import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"


const UnderstandingForm = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    let [myUnderstanding, setMyUnderstanding] = useState(0)
    
    const handleUnderstandingChange = (event) => {
        event.preventDefault()
        setMyUnderstanding(event.target.value)
    }
    const submitUnderstanding = (event) => {
        event.preventDefault()
        dispatch({type: 'ADD_UNDERSTANDING', payload: Number(myUnderstanding)})
        history.push('/support')
    }
    
        return (
            <>
            <h3>My Understanding...</h3>
              <div className='flexbox'>
       <form onSubmit={submitUnderstanding}>
        <div className="center">
        
               <div className="vertical_space">
                <label htmlFor="1">1</label>
                <input
                data-testid="input"
                    type="radio"
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
                    type="radio"
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
                    type="radio"
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
                    type="radio"
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
                    type="radio"
                    id='5'
                    name='understanding'
                    value='5'
                    checked={myUnderstanding === '5'}
                    onChange={handleUnderstandingChange}
                />
                </div>
                <button data-testid="next" type="submit">Next</button>
                </div>
                
            </form>
            </div>
            </>
        )
    
    }

export default UnderstandingForm