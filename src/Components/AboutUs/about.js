import React,{ useState, useRef } from 'react'
import Resume from '../PDF/Resume2022.pdf'
import Logo from '../../image/FullLogo.png'
import emailjs from '@emailjs/browser';
import './about.css'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaMobileAlt, FaMapMarkerAlt} from 'react-icons/fa'

const About = () => {
  const [formVal, setFormVal] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const form = useRef();
  const [nameUser, setNameUser] = useState('')

  function greet() {
    alert(`Thanks you  Mrs./Ms. ${nameUser}`);
    
   }
   
  const userTarget = (e)=> {
    let {value} = e.target
     setNameUser(value) 
   }


  const handleInput = (e) => {
    // this is where we'll call our future formatPhoneNumber function that we haven't written yet.
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    // we'll set the input value using our setInputValue
    setInputValue(formattedPhoneNumber);
  };


  function formatPhoneNumber(value) {
 
    if (!value) return value;
  
   
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
  
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
  
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }
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
    <div style={{ marginBottom: '20px'}}>
        {/* <NavBar /> */}
        <div>
            <div className='media'> 
                  <a href='https://github.com/alexanderl96-hub/new_frontend'>
                      <FaGithub  className='mediaIcon' /> 
                  </a>
                  <a href='https://www.linkedin.com/in/alexander-la-rosa-p%C3%A9rez-2b36a085/'>
                      <FaLinkedin   className='mediaIcon' /> 
                  </a>
                  <a href='https://twitter.com/LperezAlexander' >
                      <FaTwitter  className='mediaIcon' /> 
                  </a>
                  <a href='https://www.instagram.com/larosa_cubart/'>
                      <FaInstagram  className='mediaIcon' /> 
                  </a>
                  <a href='https://youtu.be/rY_fkUZL2qI'>
                      <FaYoutube  className='mediaIcon' /> 
                  </a>
            </div>
         
            <div className='Image-Description'>

                <div >
                    <img src='https://raw.githubusercontent.com/alexanderl96-hub/my-website-dev/main/src/Images/Alex.jpg' alt='' 
                    className='aboutImage' />
                    <h4>Alexander La Rosa Pérez</h4>
                </div>
          
                <div className='description'>
                  <p >From dancing and creating art, to building applications and choreographing code; 
                I am a dancer turned software developer aspiring to have a positive impact on the world using 
                technology.</p>
                  <p >I recently joined the <a href="http://www.pursuit.org/" >Pursuit</a> core program, which is an intensive <em>12 - month software engineering 
                    fellowship</em>, with a 9 percent acceptance rate. As a creative and 
                    diligent tech nerd I am a firm believer in the positive power of technology. My goal is 
                    to build and create programs that bring people closer together.  As a former performing 
                    artist, I am passionate about the <a href="https://www.instagram.com/p/B3TDzcgnO4M/" >arts</a>, music and <a href="https://youtu.be/rY_fkUZL2qI" >dance</a>. The 
                    Pursuit program has given me the chance to develop another creative outlet, and even 
                    though I spend most of my time in front of the computer these days I still perform, play 
                    drums and sing in my spare time.</p>
                  <p >My journey with Pursuit will end in a year from now, after which I hope to achieve 
                    my goals and to be able to give more to my community – not just as a person but also as a
                    professional.</p>
                </div>
            </div>

            <div className='technology'>
               Software Developer / Technology   
                 <p >
                   <a href='https://www.codecademy.com/learn/introduction-to-javascript' >• JavaScript •</a>
                   <a href='https://react-redux.js.org/tutorials/quick-start'  >• React/Redux •</a>
                   <a href='https://nodejs.org/en/'  >• Node.js •</a>
                   <a href='https://www.w3schools.com/html/html_intro.asp' >• HTML •</a>
                   <a href='https://www.w3schools.com/css/'  >• CSS •</a>
                   <a href='https://expressjs.com/' >• Express •</a>
                   <a href='https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners' >• Git/GitHub •</a>
                   <a href='https://www.postgresql.org/' >• PostgreSQL •</a>
                   <a href='https://rapidapi.com/category/Database'  >• APIs •</a>
                   <a href='https://code.visualstudio.com/'  >• VS Code •</a>
                   <a href='https://www.geeksforgeeks.org/data-structures/'  >• Data Structures •</a>
                   <a href='https://www.geeksforgeeks.org/introduction-to-algorithms/'  >• Algorithms •</a>
                   </p>
                 <a href={Resume} className='resume'>Resume</a>
            </div>
        
            <div  className='concatInfo'>
                  <div className='concatInfoWeb'>
                         <img src={Logo} alt='' />
                         <p><span>Contact:</span> Sport World</p>
                  </div>
                
                  <div className='concatInfoWeb'>
                         <a href='https://www.google.com/maps/place/626+Riverside+Dr,+New+York,+NY+10031/@40.8237005,-73.9568611,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2f666973658dd:0x10fef5e48a024bc1!8m2!3d40.8236965!4d-73.9546724'> <FaMapMarkerAlt  className='icon' /> </a>
                         <p><span>Location:</span> 626 Riverside Drive, New York, NY, 10031</p>      
                  </div>
               
                  <div  className='concatInfoWeb'>
                          <FaMobileAlt  className='icon' />
                          <p><span>Phone:</span> (347) 697-3775</p>   
                  </div>
                
            </div>
         
            <div className='aboutForm'>
              <div  className='aboutFillForm'>
                <h3>Contact us</h3>
                <div onClick={handleForm} className='aboutOpenForm'>{formVal === false ? 'Fill Out The Form' : 'Close Form'} </div>
                </div>
                {formVal === true ? 
                <div >
                  <form ref={form} onSubmit={sendEmail} className='formEmails' >
                    <label htmlFor="for" />
                    <input type='text' name="from_name" onChange={userTarget} placeholder='Name...' required   className='aboutInput' />
                    <label htmlFor="for" />
                    <input type='email' name="from_email" placeholder='Email...' required   className='aboutInput' />
                    <label htmlFor="for" />
                    <input type="phone" name="from_phone" 
                                          onChange={(e) => handleInput(e)} value={inputValue} 
                                          placeholder='Phone...'
                                           required    className='aboutInput' />
                    <label htmlFor="for" />
                    <textarea name='message' placeholder='Message...' required className='aboutMess' />
                    <button type='submit' value="Send"  className='aboutFormBott' >Submit</button>
                  </form>
               </div>
               : null}
            </div>
          
        </div>
  
        
    </div>
  )
}

export default About