import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';
import './Admin.css'



const Admin = () => {

    useEffect(() => {
        fetchFeedback()
    }, [])
    const dispatch = useDispatch()
   
    const feedbackList = useSelector(store => store.feedbackList)
    const flaggedItems = useSelector(store => store.flaggedItems);

    const fetchFeedback = () => {
        axios.get('/api/feedback')
            .then((response) => {
                dispatch({ type: 'FETCH_FEEDBACK', payload: response.data })
                console.log("response.data", response.data)
            })
            .catch((err) => {
                console.error("Error getting List of Feedback", err)
            })
    }
    const formatDate = (rawDate) => {
        const date = new Date(rawDate);
        return date.toLocaleDateString(); 
    };


    const handleDelete = (id) => {
        axios.delete(`/api/feedback/${id}`)
            .then((response) => {
                dispatch({ type: 'DELETE_FEEDBACK', payload: id });
            })
            .catch((err) => {
                console.error("Error deleting Feedback", err);
            });
    };

    const markAsFlagged = (id) => {
        axios.put(`/api/feedback/${id}/flag`, { isFlagged: true })
            .then((response) => {
                dispatch({ type: 'UPDATE_FLAGGED_STATUS', payload: id });
                
            })
            .catch((err) => {
                console.error("Error updating flagged status", err);
            });
    };
    
    return (
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
                        <th></th>
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
                            <td className={feedback.flagged ? "flagged" : ""}>
                                {feedback.flagged ? <div><FlagIcon color="error"/></div> : <Button onClick={() => markAsFlagged(feedback.id)}>Request Review</Button>}
                            </td>
                            <td><Button onClick={() => handleDelete(feedback.id)}><DeleteIcon /></Button></td>
                        </tr>)}
                </tbody>
            </table>
        </>
    )

}

export default Admin