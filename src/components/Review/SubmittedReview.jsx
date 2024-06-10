import VerifiedIcon from '@mui/icons-material/Verified';
import ResponsiveAppBar from "../ButtonAppBar/ButtonAppBar"
import FeedbackIcon from '@mui/icons-material/Feedback';

import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { colors } from '@mui/material';

const SubmittedReview = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const backToStart = () => {
        dispatch({ type: 'CLEAR_ALL' })
        history.push('/')
    }

    return (
        <div className="submitted-review-container"> {/* Add a container for styling */}
            <h1>Thank You For Submitting Your Feedback!</h1>

            <div className="moreOutside_box">

                <div className="outside_box">
                    <div>
                         {/* Move the FeedbackIcon component here */}
                    </div>

                    <div className="inside_box" data-testid="next" onClick={backToStart}>
                        <span><FeedbackIcon className="feedback-icon" /></span><span className="text">Submit New Feedback</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SubmittedReview