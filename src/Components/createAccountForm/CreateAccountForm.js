import React, {useState} from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const CreateAccountForm = ({setOpenLoginModal, setLoggedIn, setLoginMessage, setUser,  setUserImage, setUserId, setUserEmail}) => {

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [formMessage, setFormMessage] = useState('');
  
  

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
        // const formdata = new FormData();
        // formdata.append('image', userInfo.file);

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

        fetch(`https://userlogin-backend-sportworld.adaptable.app/users`, reqOptions)
        .then(response => response.json())
        .then(data => {
            if(data.status === 'error'){
                // set form info to show message
                if(data.message.includes('users_username_key')){
                    setFormMessage('Please choose another username. This one is already taken.');
                } else if (data.message.includes('users_email_key')){
                    setFormMessage('Please choose another email. This one is already taken.');
                } else if (data.message.includes('Password must be')){
                    setFormMessage(data.message);
                }
               
            } else {
                setEmail('');
                setUsername('');
                setPassword('');
                setOpenLoginModal(false);
                // setLoginMessage('You\'re account has been created.')
    
                // show toast that user was successfully created 
                
                // save access token as a cookie
                localStorage.setItem('username', data.user.username)
                localStorage.setItem('userImage', data.user.image)
                localStorage.setItem('userid', data.user.id)
                 localStorage.setItem('userEmail', data.user.email)
                document.cookie = "accessToken=" + data.accessToken;
                setUser(data.user.username)
                setUserImage(data.user.image)
                setUserId(data.user.id)
                setUserEmail(data.user.email)
                setLoggedIn(true);
            }
          
        }).catch(error => {
            // handle error
            console.log(error);
        })
    }
console.log(image)
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
    {/* <input type="file"  onChange={handelinputChange} name='file'  style={{width: '250px',marginLeft: '50px'}}/>  */}
    <div onClick={createUser} text="Submit"    className='LoginCreateButton'>Submit</div>
    </div>
  )
}

export default CreateAccountForm