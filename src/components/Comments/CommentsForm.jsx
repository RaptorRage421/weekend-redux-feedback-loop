import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

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
    
        return (
            <>
            <form onSubmit={submitComments}>
            <input
            data-testid="input"
            className="inputs"
            onChange={handleCommentsChange}
            value={myComments}
            placeholder="Comments...?"
            />
            <button data-testid="next" type="submit">Submit</button>
            

    
            </form>
            </>
        )
    
    }


export default CommentsForm