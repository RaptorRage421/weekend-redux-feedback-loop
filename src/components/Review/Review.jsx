import axios from "axios"
import { useSelector,useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"


const Review = () => {
const history = useHistory()
const dispatch = useDispatch()
const feelingState = useSelector(store => store.feelingState)
const understandingState = useSelector(store => store.understandingState)
const supportState = useSelector(store => store.supportState)
const commentState = useSelector(store => store.commentState)

let reviewObject = {}
console.log("feelingState", feelingState)
for (let feeling of feelingState){
reviewObject.feeling = feeling
}
for (let understanding of understandingState){
    reviewObject.understanding = understanding
}
for (let support of supportState){
    reviewObject.support = support
}
for (let comments of commentState){
    reviewObject.comments = comments
}

console.log(reviewObject)

const submitReview = () => {
    if (!reviewObject.feeling || !reviewObject.understanding || !reviewObject.support) {
        Swal.fire('Please Go back and Fill out ALL fields.');
        return; // Exit the function if any data is empty
    }
axios.post('/api/feedback', reviewObject)
.then((response) => {
    history.push('/submitted')
})
.catch((err) => {
    console.error("Error Submitting your Feedback", err)
})
}


    return (
        <>
        <h3>Review</h3>
        <p>Feelings: {reviewObject.feeling}</p>
        <p>Understanding: {reviewObject.understanding}</p>
        <p>Support: {reviewObject.support}</p>
        <p>Comments: {reviewObject.comments}</p>

        <button data-testid="next" onClick={submitReview}>Submit</button>
        </>
    )

}

export default Review