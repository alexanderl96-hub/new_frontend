import React, {useState} from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// import Button from '../button/Button';

// import './CreateAccountForm.scss';

const CreateAccountForm = ({setOpenLoginModal, setLoggedIn}) => {

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
  
 
     // on unfocus validate username
     const validateUsername = () => {
        if(username.length <  4){
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
    }

    const validateEmail = () => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setEmailError(false); 
        } else {
            setEmailError(true);
        }
    }


    const createUser = () => {

        const reqOptions = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username, 
                email, 
                image,
                password
            })
        }

        fetch('http://localhost:9000/users', reqOptions)
        .then(response => response.json())
        .then(data => {
            
            setEmail('');
            setUsername('');
            setPassword('');
            setImage('');
            setOpenLoginModal(false);

            // show toast that user was successfully created 

            localStorage.setItem('accessToken', data.accessToken);
            setLoggedIn(true);
        }).catch(error => {
            // handle error
            console.error(error);
        })
    }

  return (
      <div>
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { my: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <Typography className="loginModal__title" id="modal-modal-title" variant="h6" component="h2">
            Please Create an Account
        </Typography>
        <TextField 
           id="outlined-basic" 
           label="Username" 
           variant="outlined" 
           required
           onChange={(e) => setUsername(e.target.value)}
           value={username}
           onBlur={validateUsername}
           error={usernameError}
           helperText={usernameError && "Username must be at least 4 characters long."}
        />
        <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            onBlur={validateEmail}
            error={emailError}
            helperText={emailError &&  "Please enter a valid email."}
        />
          <TextField 
            id="outlined-basic" 
            label="Image" 
            variant="outlined" 
            onChange={(e) => setImage(e.target.value)}
            value={image}
        />
        <TextField 
            id="outlined-basic" 
            label="Password" 
            type="password" 
            variant="outlined"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
       
    </Box>
    <button onClick={createUser} text="Submit" style={{width: '100px', marginTop: '5%', cursor: 'pointer'}} >Submit</button>
    </div>
  )
}

export default CreateAccountForm