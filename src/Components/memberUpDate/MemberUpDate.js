import React,  { useState, useEffect }from 'react'
import { useParams, Link} from 'react-router-dom'

const MemberUpDate = () => {
  return (
    <div>
         <div className='TeamUpDate_Container'>
         <div>UpDate Member</div>
         <Link to={`/homeBase`} className='memberLink1' >Back</Link> 
         <div className='TeamUpDate_Wrap' >
             <form className='TeamUpDate_Form' style={{paddingTop: '27px'}}>
                 <label htmlFor="">Name:</label>
                 <input id='' type="text" value='' placeholder="" className='' ></input>
                 <label htmlFor="">Image URL:</label> 
                 <input id='' type="text" value='' placeholder="" className='' ></input>
                 <hr/>
                 <bottom type='submit' className='' >Submit</bottom>
             </form>
             <div className="songs_photo">
            <img
              src={null}
              alt={'all'}
              style={{ width: "350px", height: "320px" }}
              className="photo"
            />
          </div>
         </div>
      </div>
    </div>
  )
}

export default MemberUpDate