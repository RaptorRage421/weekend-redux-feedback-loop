import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert() {
  return (
    <Alert aligh='center' icon={<CheckIcon fontSize="inherit" />} severity="success">
      Successfully Submitted your Feedback
    </Alert>
  );
}
