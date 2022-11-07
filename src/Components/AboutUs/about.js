import React,{ useState } from 'react'
import NavBar from '../navBar/Navbar'
import Footer from '../Footer/Footer'
import Resume from '../PDF/Resume2022.pdf'
import Logo from '../../image/FullLogo.png'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaMobileAlt, FaMapMarkerAlt} from 'react-icons/fa'

const About = () => {
  const [form, setForm] = useState(false)

  function handleForm (){
    if(form === false){
      setForm(true)
    }else{
      setForm(false)
    }
  }
  return (
    <div>
        <NavBar />
        <div>
            <div style={{display: 'flex', margin: '10px', justifyContent: 'flex-end'}}> 
             <a href='https://github.com/alexanderl96-hub/new_frontend'>
                <FaGithub    style={{fontSize: '25px', margin: '3px' }} /> 
             </a>
             <a href='https://www.linkedin.com/in/alexander-la-rosa-p%C3%A9rez-2b36a085/'>
                <FaLinkedin   style={{fontSize: '25px', margin: '3px'}} /> 
             </a>
             <a href='https://twitter.com/LperezAlexander' >
                <FaTwitter   style={{fontSize: '25px', margin: '3px'}} /> 
             </a>
             <a href='https://www.instagram.com/larosa_cubart/'>
                <FaInstagram  style={{fontSize: '25px', margin: '3px'}} /> 
             </a>
             <a href='https://youtu.be/rY_fkUZL2qI'>
                <FaYoutube   style={{fontSize: '25px', margin: '3px' }} /> 
            </a>
            </div>
         
            <div style={{display: 'flex', justifyContent: 'space-around', margin: '15px'}}>

                <div >
                    <img src='https://raw.githubusercontent.com/alexanderl96-hub/my-website-dev/main/src/Images/Alex.jpg' alt='' 
                    style={{height: '260px', borderRadius: '10px'}}/>
                    <h4>Alexander La Rosa Pérez</h4>
                </div>
          
                <div style={{ width: '500px'}}>
                  <p style={{ textAlign: 'justify',pointerEvents: 'auto'}}>From dancing and creating art, to building applications and choreographing code; 
                I am a dancer turned software developer aspiring to have a positive impact on the world using 
                technology.</p>
                  <p style={{ textAlign: 'justify',pointerEvents: 'auto'}}>I recently joined the <a href="http://www.pursuit.org/" style={{textDecoration:'underline'}}>Pursuit</a> core program, which is an intensive <em>12 - month software engineering 
                    fellowship</em>, with a 9 percent acceptance rate. As a creative and 
                    diligent tech nerd I am a firm believer in the positive power of technology. My goal is 
                    to build and create programs that bring people closer together.  As a former performing 
                    artist, I am passionate about the <a href="https://www.instagram.com/p/B3TDzcgnO4M/" style={{textDecoration:'underline'}}>arts</a>, music and <a href="https://youtu.be/rY_fkUZL2qI" style={{textDecoration:'underline'}}>dance</a>. The 
                    Pursuit program has given me the chance to develop another creative outlet, and even 
                    though I spend most of my time in front of the computer these days I still perform, play 
                    drums and sing in my spare time.</p>
                  <p style={{ textAlign: 'justify',pointerEvents: 'auto'}}>My journey with Pursuit will end in a year from now, after which I hope to achieve 
                    my goals and to be able to give more to my community – not just as a person but also as a
                    professional.</p>
                </div>
            </div>

            <div style={{background: '#070f3c', height: '90px', color: 'white', textAlign: 'center', paddingTop: '8px'}}>
               Software Development / Technology   
                 <p style={{color:'red', fontSize: '14px'}}>• JavaScript • React/Redux • Node.js • HTMl • CSS • Express • Git/GitHub • PostgreSQL APIs • VS Code • Data Structures • Algorithms • </p> 
                 <a href={Resume} style={{color: 'white', textDecoration: 'underline', fontSize: '14px' }}>Resume ...</a>
            </div>
        
            <div style={{display:'flex', justifyContent: 'space-around', margin: '20px'}}>
                  <div style={{height: '80px', width: '250px', border: '2px solid #070f3c', padding: '10px', textAlign: 'center'}}>
                         <img src={Logo} alt='' style={{height: '40px', borderRadius: '50px'}}/>
                         <p><span>Contact:</span> Sport World</p>
                  </div>
                
                  <div style={{height: '80px', width: '250px', border: '2px solid #070f3c', padding: '10px', textAlign: 'center'}}>
                          <FaMapMarkerAlt style={{fontSize: '28px'}}/> 
                         <p><span>Location:</span> 626 Riverside Drive, New York, NY, 10031</p>      
                  </div>
               
                  <div style={{height: '80px', width: '250px', border: '2px solid #070f3c', padding: '10px', textAlign: 'center'}}>
                          <FaMobileAlt style={{fontSize: '28px'}}/>
                          <p><span>Phone:</span> (347) 697-3775</p>   
                  </div>
                
            </div>
         
            <div style={{display: 'flex', padding: '5px', flexDirection: 'column'}}>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <h3>Contact us</h3>
                <div onClick={handleForm} style={{border:'1px solid', cursor: 'pointer', height:'20px', marginTop:'15px', marginLeft: '10px', padding: '5px', borderRadius:'10px'}}> Fill Out The Form</div>
                </div>
                {form === true ? 
                <div >
                  <from style={{display: 'flex', flexDirection: 'column', gap:'10px', alignItems: 'center'}} >
                    <label htmlFor="name" />
                    <input placeholder='Name...' required  style={{ borderStyle: 'dashed', width: '300px'}}  />
                    <label htmlFor="email" />
                    <input  placeholder='Email...' required  style={{ borderStyle: 'dashed',width: '300px'}} />
                    <label htmlFor="message" />
                    <textarea  placeholder='Message...' required  style={{ borderStyle: 'dashed',width: '300px', height: '200px'}} />
                    <button type='submit' style={{ margin:'5px', width: '70px', borderRadius:'10px', cursor: 'pointer', }} onClick={handleForm} >Submit</button>
                  </from>
               </div>
               : null}
            </div>
          
        </div>
        <Footer />
        
    </div>
  )
}

export default About