import React, {useState} from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// import Button from '../button/Button';

const LoginAccountForm = ({setOpenLoginModal, setLoggedIn}) => {

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [password, setPassword] = useState('');
    let mse = ''

    // on unfocus validate username
    const validateUsername = () => {
        if(username.length <  4){
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
    }

    const logInUser = () => {

        const reqOptions = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username, 
                password
            })
        }
     

        fetch('http://localhost:9000/users/login', reqOptions)
        .then(response => response.json())
        .then(data => {
            mse = data
            console.log(data, 'data');
            // save token to local storage
            // set loggedin to true 
            // show toast that use has logged in
            setUsername('');
            setPassword('');
            setOpenLoginModal(false);

            // show toast that user was successfully created 

            localStorage.setItem('accessToken', data.accessToken);
            setLoggedIn(true);
            
        }).catch(error => {
            console.log(error);
        })
    }
    console.log(username, password, mse)

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
                Please Log In
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
                label="Password" 
                type="password" 
                variant="outlined"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
        </Box>
        <button onClick={logInUser} text="submit" style={{width: '100px', marginTop: '10%', cursor: 'pointer'}}>Log In</button>
        </div>
  )
}

export default LoginAccountForm