import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



const Admin = () => {
   
    useEffect(() => {
        fetchFeedback()
    }, [])
   const dispatch = useDispatch()

const feedbackList = useSelector(store => store.feedbackList)


   const fetchFeedback = () => {
    axios.get('/api/feedback')
    .then((response) => {
        dispatch({type: 'FETCH_FEEDBACK', payload: response.data})
        console.log("response.data", response.data)
    })
    .catch((err) => {
        console.error("Error getting List of Feedback", err)
    })
}
const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    return date.toLocaleDateString(); // You can customize this method according to your preferred date format
  };

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>
                        Feeling
                    </th>
                    <th>
                        Understanding
                    </th>
                    <th>
                        Support
                    </th>
                    <th>Comments</th>
                    <th>Date</th>
                    <th>Flagged</th>
                </tr>
            </thead>
            <tbody>
        {feedbackList.map((feedback) => 
        <tr key={feedback.id}>
            <td>{feedback.feeling}</td>
            <td>{feedback.understanding}</td>
            <td>{feedback.support}</td>
            <td>{feedback.comments}</td>
            <td>{formatDate(feedback.date)}</td>
            <td>{feedback.flagged ? <div>🚩</div> : <div></div>}</td>
        </tr>)}
        </tbody>
        </table>
        </>
    )
    
}

export default Admin