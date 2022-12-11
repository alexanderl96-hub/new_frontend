import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Profile = ({user, userImage, userId, userEmail, setUserImage}) => {
  const navigate = useNavigate();
  const [newImage, setNewImage]= useState('')
  const [updateImage, setUpdatedImage] = useState({
    username: user,
    email: userEmail,
    image: newImage,
  })



  const avatar = ['https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png', 
                'https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png', 
                'https://e7.pngegg.com/pngimages/122/453/png-clipart-computer-icons-user-profile-avatar-female-profile-heroes-head.png',
                 'https://w7.pngwing.com/pngs/980/304/png-transparent-computer-icons-user-profile-avatar-heroes-silhouette-avatar.png',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jwSQgCkm6QMwHg1uHfJ5DGG1bNZWiI-8kA&usqp=CAU',
                   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNVIRR1648FmQLaZVYmirNrGv_rp2IedSLQ&usqp=CAU', 
                   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjv-LlSn3OR47vA5HF_uL2jN2ha-9ZymPMzA&usqp=CAU', 
                   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAr_NzcpxGZg4Ak7eNCO56QN8XzHD7SXulA&usqp=CAU', 
                   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q82jNfTx-SgpqS4rog-rnlx-yTxhbzn8ow&usqp=CAU', 
                   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiLheSvf4MSaNS8dDqQtRJ6zdYY9rPtQMxA&usqp=CAU', 
                   'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', 
                   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0zKjCd9Ltv-1Uz2nBPT13fvKsUkgv2D4W0A&usqp=CAU',
                   'https://cdn.iconscout.com/icon/free/png-128/avatar-367-456319.png',
                  'https://cdn.iconscout.com/icon/free/png-128/avatar-378-456330.png',
                  'https://cdn.iconscout.com/icon/free/png-128/avatar-366-456318.png', 
                  'https://cdn.iconscout.com/icon/free/png-128/avatar-371-456323.png',
                   'https://cdn.iconscout.com/icon/free/png-128/avatar-380-456332.png',
                    'https://cdn.iconscout.com/icon/free/png-128/avatar-373-456325.png',
                     'https://cdn.iconscout.com/icon/free/png-128/avatar-374-456326.png',
                      'https://cdn.iconscout.com/icon/free/png-128/avatar-377-456329.png',
                       'https://cdn.iconscout.com/icon/free/png-128/avatar-375-456327.png',
                          'https://cdn.iconscout.com/icon/free/png-128/sport-game-batsman-cricket-player-bat-ball-pad-gloves-helmet-29296.png',
                           'https://cdn.iconscout.com/icon/free/png-128/sport-game-golf-golfer-club-ball-stick-stroke-hole-29295.png',
                            'https://cdn.iconscout.com/icon/free/png-128/thor-avengers-1502879-1273094.png', 
                            'https://cdn3d.iconscout.com/3d/premium/thumb/florist-5691544-4741085.png',
                             'https://cdn3d.iconscout.com/3d/premium/thumb/female-chef-5691556-4741097.png', 
                             'https://cdn.iconscout.com/icon/premium/png-128-thumb/account-profile-3519249-2939068.png'
                   ]


function selectNewAvatar (selectedAvatar) {
  setNewImage(selectedAvatar)
   setUpdatedImage({...updateImage, image : selectedAvatar })
}

    const handleInput =(e)=>{
      const {value} = e.target;
      setUpdatedImage({...updateImage, image : value })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      updatedUser(updateImage, userId)
       
    };
 
    const updatedUser = (updateImage, userId) => {
    
      axios.put(`http://localhost:9000/users/${userId}`, updateImage).then(
        (res) => {
          setUpdatedImage(updateImage);
          setUserImage(newImage)
          navigate(`/`)  
        },
        (error) => console.log(error)
      );
    }; 
  console.log(newImage, updateImage.image, 'newImage')
  return (
    <div style={{minHeight: '831px'}}>
       <div style={{textAlign: 'center', marginTop: '15px',  fontWeight: 'bold', fontSize: '25px', textDecoration: 'underline'}}>My Profile</div>
       <div>
         <div style={{ display:'flex', textAlign: 'center', justifyContent: 'space-around', paddingTop: '4px'}} >
            <div> 
              <h3>{user}</h3>
              <img src={newImage === '' ?  userImage : newImage } alt="" style={{height: '300px', width:'300px', borderRadius: '20px'}} />
              <p ><span style={{fontWeight: 'bold', textDecoration:"none"}}>Email:</span> {userEmail} </p>
              {/* <img src={userImage ? userImage : 'https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg'} alt="" style={{height: '300px', width:'300px', borderRadius: '20px'}} /> */}
            </div>
            
            <div style={{height: '300px', width: '450px', overflowX: 'hidden', marginTop: '60px' }}>
              {avatar.map((a, i) => {
                 return (
                  <>
                    <img src={a} alt=""  style={{height: '90px', width:'90px', margin: '5px', borderRadius: '20px', cursor: 'pointer'}} 
                    onClick={(e)=>  selectNewAvatar(e.target.src)}  />
                    {/* onClick={(e)=>  setNewImage(e.target.src)}  */}
                  </>
                 )
              })}
            </div>
         </div>

         <div>
          <form onSubmit={handleSubmit}  style={{textAlign: 'center', marginTop: '10%'}}>
            <input id='username' 
                   type='text' 
                   value={updateImage.username}    
                   onChange={handleInput} 
                   style={{display:'none'}}
                   />
            <input id='email' 
                   type='text' 
                   value={updateImage.email}   
                   onChange={handleInput} 
                   style={{display:'none'}}
                    />
            <input id='image' 
                   type='text'  
                   value={updateImage.image}   
                   onChange={handleInput} 
                   style={{display:'none'}}
                   />
            <button type='submit' 
                    value="Send" 
                    onSubmit={handleSubmit}
                    style={{ width: '130px', borderRadius: '40px', height: '35px', border: 'none',
                           backgroundColor: '#070f3c', color:'#fff', fontSize: '17px', cursor: 'pointer'}}
                    >Submit</button>
          </form>
         </div>
       </div>
    </div>
  )
}

export default Profile