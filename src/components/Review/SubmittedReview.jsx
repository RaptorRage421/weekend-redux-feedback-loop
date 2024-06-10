import {
    Typography,
    Button,
    CardContent,
    CardActions,
    Card,
    CardMedia,
    CardHeader
} from "@mui/material"
import ResponsiveAppBar from "../ButtonAppBar/ButtonAppBar"
import SimpleAlert from "../SuccessfulAlert/SuccessfulAlert"

import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const SubmittedReview = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const backToStart = () => {
        dispatch({ type: 'CLEAR_ALL' })
        history.push('/')
    }

    return (
        <>
            <h3>Thank You</h3>

            <div className="moreOutside_box">

                <div className="outside_box">
                    <div>
                        <SimpleAlert />
                    </div>

                    <div className="inside_box" data-testid="next" onClick={backToStart}><span>🌟</span> <span className="text">Submit New Feedback</span> <span>🌟</span></div>
                </div>
            </div>
        </>
    )

}

export default SubmittedReview