import React, { useState} from 'react'

const Profile = ({user, userImage}) => {
  const [updateImage, setUpdatedImage] = useState({
    image: ''
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
                   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiLheSvf4MSaNS8dDqQtRJ6zdYY9rPtQMxA&usqp=CAU', 
                   'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', 
                   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0zKjCd9Ltv-1Uz2nBPT13fvKsUkgv2D4W0A&usqp=CAU']

    function handelInput (e){
      let {value} = e.target
      console.log(e.target.src)
    }
 
  return (
    <div style={{minHeight: '831px'}}>
       <div style={{textAlign: 'center', marginTop: '15px',  fontWeight: 'bold', fontSize: '25px', textDecoration: 'underline'}}>My Profile</div>
       <div>
         <div style={{ display:'flex', textAlign: 'center', justifyContent: 'space-around', paddingTop: '4px'}} >
            <div> 
              <h3>{user}</h3>
              <img src={userImage ? userImage : 'https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg'} alt="" style={{height: '300px', width:'300px', borderRadius: '20px'}} />
            </div>
            
            <div style={{height: '300px', width: '450px', overflowX: 'hidden', marginTop: '60px' }}>
              {avatar.map((a, i) => {
                 return (
                  <>
                    <img src={a} alt=""  style={{height: '90px', width:'90px', margin: '5px', borderRadius: '20px'}} onClick={handelInput} />
                  </>
                 )
              })}
            </div>
         </div>
         <div></div>
       </div>
    </div>
  )
}

export default Profile