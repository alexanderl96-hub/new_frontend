import React from 'react'
import ReactLoading from 'react-loading'
import { Section, list } from "./generic";


const Loading = () => {
    return (
    <Section style={{ paddingTop:'18%',}}>
        {list.map(l => (
            l.props === "spinningBubbles" ? 
            <ReactLoading 
              type={l.props} 
              color={'blue'} 
              height={30} 
              width={100}/> : null
        ))}
  </Section>
    )
}

export default Loading