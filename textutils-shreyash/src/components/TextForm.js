import React, {
    useState
} from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleCrClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","error")
    }
    const handleCopy = () => {
        let text = document.getElementById("copytext");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to clipboard","success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces","info")
    }
    
    const handelOnChange = (event)=> {
        setText(event.target.value)
    }
    const [text,
        setText] = useState('');

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align='left' color="text.primary" gutterBottom>
                {props.heading}
            </Typography>
            <Stack spacing={1} direction="row-reverse">
                <IconButton disabled={text.length===0}  aria-label="delete" color="error" onClick={handleCrClick}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                <IconButton disabled={text.length===0}  aria-label="delete" color="success" onClick={handleCopy}>
                    <ContentCopyIcon fontSize="inherit" />
                </IconButton>
                
            </Stack>
            <Box sx={{width: 500,maxWidth: '100%',}}>
            <TextField id="copytext" label="Enter Text -TextUtils" multiline fullWidth maxRows={8} value={text} onChange={handelOnChange} />
            </Box>
            <Box sx={{ mb: '16px'}}/>
            <Stack spacing={2} direction="row">
                <Button disabled={text.length===0} variant="contained" onClick={handleUpClick}>Convert to UpperCase</Button>
                <Button disabled={text.length===0} variant="outlined" onClick={handleExtraSpaces}>Remove Extra Spaces</Button>
                <Button disabled={text.length===0} variant="contained" onClick={handleLowerClick}>Convert to LowerCase</Button>
            </Stack>
            <Box sx={{ mb: '16px'}}/>
            <Typography variant="h6" align='left' color="text.primary" gutterBottom>
                Your text summary:
            </Typography>
            <Typography variant="body1" align='left' color="text.primary" gutterBottom>
                {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters <br/>
                {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read
            </Typography>
            <Typography variant="h6" align='left' color="text.primary" gutterBottom>
                Preview
            </Typography>
            <Typography variant="body1" align='left' color="text.primary" gutterBottom>
                {text.length>0?text:"Nothing to Preview."}
            </Typography>
            </Container>
    )
};