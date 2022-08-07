import React from 'react'
import ReactLoading from 'react-loading'
import { Section, Title, Article, Prop, list } from "./generic";


const Loading = () => {
    return (
    <Section>
        {list.map(l => (
            l.props === "spinningBubbles" ? 
            <ReactLoading 
              type={l.props} 
              color={'white'} 
              height={200} 
              width={375}/> : null
        ))}
        {/* <ReactLoading type={l.prop} color="#fff" />  */}
    {/* <Title>React Loading</Title>
    {list.map(l => (
      <Article key={l.prop}>
        <ReactLoading type={l.prop} color="#fff" />
        <Prop>{l.name}</Prop>
      </Article>
    ))} */}
  </Section>
    )
}

export default Loading