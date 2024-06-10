import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Button } from "@mui/material"

const CommentsForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    let [myComments, setMyComments] = useState('')
    
    const handleCommentsChange = (event) => {
        event.preventDefault()
        setMyComments(event.target.value)
    }
    const submitComments = (event) => {
        event.preventDefault()
        dispatch({type: 'ADD_COMMENTS', payload: myComments})
        history.push('/review')
    }
    
    const goBack = () => {
        dispatch({type: 'CLEAR_SUPPORT'})
        history.goBack()

    }
        return (
            <>
            <form onSubmit={submitComments}>
            <div>
                <input
            type="text"
            data-testid="input"
            className="inputs"
            onChange={handleCommentsChange}
            value={myComments}
            placeholder="Comments...?"
            />
            </div>
            
            <div className="button-container">
                        <Button type="button" onClick={goBack}>Back</Button>
                        <Button data-testid="next" type="submit">Next</Button>
                    </div>
                </form>
                
            
        </>
        )
    
    }


export default CommentsForm