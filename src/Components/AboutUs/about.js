import React,{ useState, useRef } from 'react'
import NavBar from '../navBar/Navbar'
import Footer from '../Footer/Footer'
import Resume from '../PDF/Resume2022.pdf'
import Logo from '../../image/FullLogo.png'
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaMobileAlt, FaMapMarkerAlt} from 'react-icons/fa'

const About = () => {
  const [formVal, setFormVal] = useState(false)
  const form = useRef();
  let nameUser = ''

  function greet() {
    alert(`Thanks you  Mrs./Ms. ${nameUser}`);
    
   }
   
  const userTarget = (e)=> {
    let {value} = e.target
     nameUser = value
   }
  //  const phoneTarget =(e)=>{
  //    let {value} = e.target
  //   //  if(String(value).split('').length !== 10) return 'Invalid number'
  //    let len = String(value).split('').length
  //    let first = String(value).split('').slice(0,3).join('')
  //    let middle = String(value).split('').slice(3,6).join('')
  //    let rest = String(value).split('').slice(6,len).join('')
  //      `(${first}) ${middle}-${rest}`
  //  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l9ugyfa', 'template_sg2t9wa', form.current, '3QmzbJgYVWWAUxKwm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
       setTimeout(greet); 
      setFormVal(false)
      
  };


  function handleForm (){
    if(formVal === false){
      setFormVal(true)
    }else{
      setFormVal(false)
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

            <div style={{background: '#070f3c', height: '95px', color: 'white', textAlign: 'center', paddingTop: '8px'}}>
               Software Developer / Technology   
                 <p style={{color:'red', fontSize: '14px', display:'flex', justifyContent: 'space-around', height: '20px', pointerEvents: 'auto'}}>
                   <a href='https://www.codecademy.com/learn/introduction-to-javascript' style={{color:'red'}}>• JavaScript •</a>
                   <a href='https://react-redux.js.org/tutorials/quick-start' style={{color:'red'}} >• React/Redux •</a>
                   <a href='https://nodejs.org/en/' style={{color:'red'}} >• Node.js •</a>
                   <a href='https://www.w3schools.com/html/html_intro.asp' style={{color:'red'}} >• HTMl •</a>
                   <a href='https://www.w3schools.com/css/' style={{color:'red'}} >• CSS •</a>
                   <a href='https://expressjs.com/' style={{color:'red'}} >• Express •</a>
                   <a href='https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners' style={{color:'red'}} >• Git/GitHub •</a>
                   <a href='https://www.postgresql.org/' style={{color:'red'}} >• PostgreSQL •</a>
                   <a href='https://rapidapi.com/category/Database' style={{color:'red'}} >• APIs •</a>
                   <a href='https://code.visualstudio.com/' style={{color:'red'}} >• VS Code •</a>
                   <a href='https://www.geeksforgeeks.org/data-structures/' style={{color:'red'}} >• Data Structures •</a>
                   <a href='https://www.geeksforgeeks.org/introduction-to-algorithms/' style={{color:'red'}} >• Algorithms •</a>
                   </p>
                 <a href={Resume} style={{color: 'white', textDecoration: 'underline', fontSize: '14px',}}>Resume</a>
            </div>
        
            <div style={{display:'flex', justifyContent: 'space-around', margin: '20px'}}>
                  <div style={{height: '80px', width: '250px', border: '2px solid #070f3c', padding: '10px', textAlign: 'center'}}>
                         <img src={Logo} alt='' style={{height: '40px', borderRadius: '50px'}}/>
                         <p><span>Contact:</span> Sport World</p>
                  </div>
                
                  <div style={{height: '80px', width: '250px', border: '2px solid #070f3c', padding: '10px', textAlign: 'center'}}>
                         <a href='https://www.google.com/maps/place/626+Riverside+Dr,+New+York,+NY+10031/@40.8237005,-73.9568611,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2f666973658dd:0x10fef5e48a024bc1!8m2!3d40.8236965!4d-73.9546724'> <FaMapMarkerAlt style={{fontSize: '28px'}}/> </a>
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
                {formVal === true ? 
                <div >
                  <form ref={form} onSubmit={sendEmail} style={{display: 'flex', flexDirection: 'column', gap:'10px', alignItems: 'center'}} >
                    <label htmlFor="for" />
                    <input type='text' name="from_name" onChange={userTarget} placeholder='Name...' required  style={{ borderStyle: 'dashed', width: '300px', height: '30px' }}  />
                    <label htmlFor="for" />
                    <input type='email' name="from_email" placeholder='Email...' required  style={{ borderStyle: 'dashed',width: '300px', height: '30px' }} />
                    <label htmlFor="for" />
                    <input type='text' name="from_phone"  placeholder='Phone...' required  style={{ borderStyle: 'dashed', width: '300px', height: '30px' }}  />
                    <label htmlFor="for" />
                    <textarea name='message' placeholder='Message...' required  style={{ borderStyle: 'dashed',width: '300px', height: '200px'}} />
                    <button type='submit' value="Send" style={{ margin:'5px', width: '70px', borderRadius:'10px', cursor: 'pointer', }}  >Submit</button>
                  </form>
               </div>
               : null}
            </div>
          
        </div>
        <Footer />
        
    </div>
  )
}

export default About