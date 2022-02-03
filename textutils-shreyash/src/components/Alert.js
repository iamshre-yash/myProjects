import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Alerts(props) {
    return (
        <div style={{height: '50px'}}>
        {props.alert && <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity={props.alert.type}>{props.alert.msg}</Alert>
        </Stack>}
        </div>
    );}
    