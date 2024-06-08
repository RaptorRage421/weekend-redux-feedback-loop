import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

const SupportedForm = () => {

    
    const history = useHistory()
    const dispatch = useDispatch()
    let [mySupport, setMySupport] = useState(0)
    
    const handleSupportChange = (event) => {
        event.preventDefault()
        setMySupport(event.target.value)
    }
    const submitSupport = (event) => {
        event.preventDefault()
        dispatch({type: 'ADD_SUPPORT', payload: Number(mySupport)})
        history.push('/comments')
    }
    
        return (
            <>
            <h3>My Support...</h3>
              <div className='flexbox'>
       <form onSubmit={submitSupport}>
        <div className="center">
        
               <div className="vertical_space">
                <label htmlFor="1">1</label>
                <input
                data-testid="input"
                    type="radio"
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
                    type="radio"
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
                    type="radio"
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
                    type="radio"
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
                    type="radio"
                    id='5'
                    name='understanding'
                    value='5'
                    checked={mySupport === '5'}
                    onChange={handleSupportChange}
                />
                </div>
                <button data-testid="next" type="submit">Submit</button>
                </div>
                
            </form>
            </div>
            </>
        )
    
    }

export default SupportedForm