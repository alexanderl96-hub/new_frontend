import React from 'react'
import ReactPlayer from 'react-player/youtube'
import '../teamsInfo/Teams.css'


const Videos = () => {
    const videos = ['https://www.youtube.com/watch?v=-zhs0pX3HEE','https://www.youtube.com/watch?v=Ot6ptCYT5oU',
    'https://www.youtube.com/watch?v=XEHVOmx3CdU', 'https://www.youtube.com/watch?v=GGqNG0QZ2wI', 'https://www.youtube.com/watch?v=9XkiuGRo3rk', 
    'https://www.youtube.com/watch?v=UOyDnrAZmhA', 'https://www.youtube.com/watch?v=zBr0vdjajWY', 'https://www.youtube.com/watch?v=bxw46ESNL48', 
    'https://www.youtube.com/watch?v=NpOG_yy4S4A', 'https://www.youtube.com/watch?v=MQ8G4rhW4_w', 'https://www.youtube.com/watch?v=IjWVK_HkM7E', 
    'https://www.youtube.com/watch?v=twKxW1CLOD0', 'https://www.youtube.com/watch?v=_ktcu_I1Ly8']

   
  return (
    <div className='videosSport'>
        <ReactPlayer 
        url={videos} 
        playing={true} 
        loop={true}
        progressInterval={1000}
        controls={true}
        width={'330px'} 
        height={'260px'} 
        muted={true} />
    </div>
  )
}

export default Videos