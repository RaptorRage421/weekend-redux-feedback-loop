import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const SubmittedReview = () => {
const history = useHistory()
const dispatch = useDispatch()
const backToStart = () => {
    dispatch({type:'CLEAR_ALL'})
history.push('/')
}

    return (
        <>
        <h3>Thank You</h3>
        You Have Successfully Submitted your Feedback!
        <div className="moreOutside_box">
        <div className="outside_box">

        <div className="inside_box" data-testid="next" onClick={backToStart}><p>Submit New Feedback</p></div>
        </div>
        </div>
        </>
    )

}

export default SubmittedReview