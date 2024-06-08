import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
const SubmittedReview = () => {
const history = useHistory()

const backToStart = () => {
history.push('/')
}

    return (
        <>
        <h3>Thank You</h3>
        You Have Successfully Submitted your Feedback!
        

        <div data-testid="next" onClick={backToStart}>Submit New Feedback</div>
        </>
    )

}

export default SubmittedReview