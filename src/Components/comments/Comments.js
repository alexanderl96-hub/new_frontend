import React, { useState, useEffect} from 'react'
import { FaPlus } from 'react-icons/fa';

const Comments = ({commentId, check}) => {

    const [comment, setComment] = useState([]);
    const [open, setOpen] = useState(false)
    const [newComment, setNewComment] = useState({
        username: '',
        userImage: '',
        comment: '',
        memberId:check,
    })

    function handelOpen (){
       if(open === false){
             setOpen(true)
       }else{
        setOpen(false)
       }
    }

    useEffect(()=>{
        fetch('https://userlogin-backend-sportworld.adaptable.app/comments')
        .then(res => res.json())
        .then(data =>{setComment(data.comments)})
    },[])

console.log(newComment)

  return (
      <div>
          <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '5%', }}>
                   <h3 style={{color: 'white', fontSize: '20px', width: '200px', height: '40px', border: '2px solid', 
                   borderRadius: '10px', backgroundColor: '#070f3c', paddingTop: '6px', cursor: 'pointer' }} onClick={handelOpen } >Comments 
                   {!open ? <FaPlus  style={{marginLeft: '10px', paddingTop: '6px'}} /> : null}</h3>
          </div>

         { open ? <div style={{display:'flex', textAlign: 'center', justifyContent: 'center', marginBottom: '20px'}}  >
                    <form style={{}}>
                       
                        <div style={{ display:'flex', flexDirection: 'column', padding: '7px', 
                                     width: '430px',  height: '420px',backgroundColor: 'white',  alignItems: 'center', 
                                     justifyContent: 'center', border: '2.5px solid black'}}>
                            <h4 style={{color: ' #6c6c6c'}}>Leave your comment here</h4>
                            <textarea name='message' placeholder='Message...' required className='aboutMess' />
                            <button type='submit' value="Send" style={{height: '40px', marginTop: '20px',
                             width: '300px', border: '0.5px solid #BaBaBa', color: 'white', cursor: 'pointer', backgroundColor: '#371F76'}} onClick={handelOpen }>Submit</button>
                         </div>
                    </form>
                </div> : null }

         <div style={{display:'flex', justifyContent: 'space-around', textAlign: 'center', margin: '15px'}}>
            {comment.map((a, i)=>{
                return(
                    <div style={{ height: '320px', width: '420px', border: '3px solid black', borderRadius: '30px',
                                display: 'flex', flexDirection: 'column' , padding: '4px', cursor: 'pointer', backgroundColor:'#fff'}}>
                        <div style={{margin: '5px'}}>{a.username}</div>
                        <div style={{padding: '3px', display: 'flex',  flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                            <img src={a.userimage} alt ='' style={{ height: '100px', width: '90px', borderRadius: '10px'}} />
                            <div style={{display:'flex', textAlign: 'justify', marginTop: '8px', fontSize: '15.3px'}}>{a.comment}</div>
                            <div>{a.memberid}</div>
                        </div>
                    </div>
                )
            })}
          </div>
    </div>
  )
}

export default Comments