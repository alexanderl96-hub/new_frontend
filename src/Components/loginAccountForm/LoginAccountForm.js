import React, {useState} from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// import Button from '../button/Button';

const LoginAccountForm = ({setOpenLoginModal, setLoggedIn, setUser,  setUserImage, setUserId, setUserEmail}) => {

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [password, setPassword] = useState('');
    const [formMessage, setFormMessage] = useState('');



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
     

        fetch('https://userlogin-backend-sportworld.adaptable.app/users/login', reqOptions)
        .then(response => response.json())
        .then(data => {
            if(data.status === 'error'){

                if(data.message === 'No data returned from the query.'){
                    setFormMessage('No user with this email and password exists.')
                } else {
                    setFormMessage(data.message);
                }

            } else {
                setUsername('');
                setPassword('');
                setOpenLoginModal(false);
                //   setLoginMessage('You have logged in!')
                
                // show toast that user was successfully logged in
                // TODO 
               
                // save token to cookies
               localStorage.setItem('username', data.user.username)
               localStorage.setItem('userImage', data.user.image)
               localStorage.setItem('userid', data.user.id)
                localStorage.setItem('userEmail', data.user.email)
                document.cookie = 'accessToken=' + data.accessToken
                setUser(data.user.username )
                setUserImage(data.user.image)
                setUserId(data.user.id)
                console.log(data.user.email,  'useremail')
                setUserEmail(data.user.email)
              
                // set loggedin to true 
                setLoggedIn(true);
            }  
            
        }).catch(error => {
            console.log(error, 'error catch by the server');
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
                Please Log In
            </Typography>
            {formMessage && 
                <div className="form__errorText" style={{"color" : "red"}}>
                    {formMessage}
                </div>
            }
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
        <div onClick={logInUser} text="Submit" 
        className='LoginButton' >Log In</div>
        </div>
  )
}

export default LoginAccountForm