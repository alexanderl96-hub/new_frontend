import React, { useState, useEffect } from 'react'
import { Link , useNavigate, useParams } from 'react-router-dom'
import './NewMember.css'
import axios from 'axios'
import Navbar from '../navBar/Navbar'

const NewMember = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    const [group, setGroup] = useState([]);
    const date = new Date();
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const hoy = date.getDate()
    const [classT, setClassT] = useState('innerNew3')
   
    const [newMember,setMember] = useState({
       name: '',
       team_id: '',
       nickname: '',
       imag: '',
       imag2: '',
       born: '',
       city: '',
       state: '',
       country: '',
       age: '',
       height: '',
       weight: '',
       current_team: '',
       salary: '',
       number: '',
       education: '',
       spouse: '',
       parents: '',
       children: '',
       siblings: '',
       position: '',
       bats: '',
       throws: '',
       stats: '',
       about: '',
    })
   
    const handleInput = (e) =>{
        const {value} = e.target
        setMember({...newMember, [e.target.id]: value})
      }
    
      const handleSubmit = (e) =>{
        e.preventDefault()
        addMember(newMember)
        setClassT('intoFade')
      }
      const handleDelete = (e) =>{
        setClassT('innerNew3')
      }
      
      // const addMember = (newMember) => {
      //   axios.post(`https://my-baseball-teams.herokuapp.com/groups`, newMember).then((res)=>{
      //     navigate(`/teams/newpage/${id}`);
      //     })
      // }
      const addMember = ( newMember) => {
        axios.post(`http://localhost:9000/groups`, newMember).then((res)=>{   
          setMember({
            name: '',
            team_id: '',
            nickname: '',
            imag: '',
            born: '',
            city: '',
            state: '',
            country: '',
            age: '',
            height: '',
            weight: '',
            current_team: '',
            salary: '',
            number: '',
            education: '',
            spouse: '',
            parents: '',
            children: '',
            siblings: '',
            position: '',
            bats: '',
            throws: '',
            stats: '',
            about: '',
          })
          //  setClassT('innerNew3')
          navigate(`/teams/newMember/${id}`);
          
          })
      }

     
      let monterValue = newMember.born.split(' ')[0]
      let hoyValue = newMember.born.split(' ')[1]
      let yearValue = newMember.born.split(' ').slice(-1).join()
    
      const dateBirth = new Date(`${Number(yearValue)}-${monterValue}-${hoyValue}`)
      const yearB = dateBirth.getFullYear()
      const monthB = dateBirth.getMonth()+1
      const hoyB = dateBirth.getDate()

      const age = year - yearB
      // const currentAge = monthB <= month && hoyB >= hoy ? age  : age-1
      const currentAge = () =>{
            if(monthB <= month){
              return age
            }else if(monthB <= month && hoyB > hoy){
              return age-1
            }else{
              return age-1
            }
          }
  //   useEffect(() => {
  //       fetch(`https://my-baseball-teams.herokuapp.com/teams/${id}`)
  //       .then(res => res.json())
  //       .then(data =>{
  //           setGroup(data.team)
  //       })
  // },[id])

  useEffect(() => {
    fetch(`http://localhost:9000/teams/${id}`)
    .then(res => res.json())
    .then(data =>{
        setGroup(data.team)
    })
},[id, classT])

console.log(classT)
  return (
    <div className='newMember_Container'>
        <Navbar />
         <h1 >New Member</h1>
         {/* <div className='wrapLink'> <Link to={`/teams/newpage/${group.id}`} className='newLinkBackNew'>Back</Link> </div> */}
         <div>
             <div style={{display: 'flex'}} >
             <form onSubmit={handleSubmit} className='newMember_AboutGrid'>
                              <div className='innerNew'>
                                <input id='name' type="text" onChange={handleInput} value={newMember.name}  placeholder='Name...' className='inputNew' ></input>
                                <input id='team_id' type="text" onChange={handleInput} value={newMember.team_id} placeholder={'team_id = ' +id} className='inputNew' ></input>
                                <input id='nickname'type="text" onChange={handleInput} value={newMember.nickname} placeholder="Nickname..." className='inputNew' ></input>
                                <input id='imag' type="text" onChange={handleInput}  value={newMember.imag} placeholder="Url..." className='inputNew' ></input>
                                <input id='born' type="text" onChange={handleInput} value={newMember.born} placeholder="Months day, year" className='inputNew' ></input>
                                <input id='state' type="text" onChange={handleInput} value={newMember.state} placeholder="City..." className='inputNew' ></input>
                                <input id='city' type="text" onChange={handleInput} value={newMember.city} placeholder="State..."  className='inputNew' ></input>
                                <input id='country' type="text" onChange={handleInput} value={newMember.country} placeholder="Country..." className='inputNew' ></input>
                                <input id='age' type="text" onChange={handleInput} value={newMember.age} placeholder={`Age.. ${currentAge(age) === Number(currentAge(age)) ? currentAge(age) : '' }`}className='inputNew'></input>
                                <input id='height' type="text" onChange={handleInput} value={newMember.height} placeholder="Height..."  className='inputNew' ></input>
                                <input id='weight' type="text" onChange={handleInput} value={newMember.weight} placeholder="Weight..." className='inputNew' ></input>
                                <input id='current_team' type="text" onChange={handleInput} value={newMember.current_team} placeholder={group.name} className='inputNew' ></input>
                                <input id='salary' type="text" onChange={handleInput} value={newMember.salary} placeholder="Salary..." className='inputNew' ></input>
                                <buttom type='submit' className='newMemberButton' onClick={ newMember.name === ''  ?  handleDelete : handleSubmit } >{classT === 'intoFade' ? 'Refresh' : 'Add New'}</buttom>
                                 {/* <buttom type='submit' className='newMemberButton' onClick={handleDelete}  >Refresh</buttom> */}

                            </div>
                            <div className='innerNew'>                      
                                <input id='number' type="number" onChange={handleInput} value={newMember.number} placeholder="Number..." className='inputNew' ></input>
                                <input id='education' type="text" onChange={handleInput} value={newMember.education} placeholder="Education..." className='inputNew'></input>
                                <input id='spouse' type="text" onChange={handleInput} value={newMember.spouse} placeholder="Spouse..." className='inputNew'></input>
                                <input id='parents' type="text" onChange={handleInput} value={newMember.parents} placeholder="Parents..." className='inputNew'></input>
                                <input id='children' type="text" onChange={handleInput} value={newMember.children} placeholder="Children..." className='inputNew'></input>
                                <input id='siblings' type="text" onChange={handleInput} value={newMember.siblings} placeholder="Siblings..." className='inputNew'></input>
                                <input id='position' type="text" onChange={handleInput} value={newMember.position} placeholder="Position..." className='inputNew'></input>
                                <input id='bats' type="text" onChange={handleInput} value={newMember.bats} placeholder="Bats..." className='inputNew'></input>
                                <input id='throws' type="text" onChange={handleInput} value={newMember.throws} placeholder="Throws..." className='inputNew'></input>
                                <input id='stats' type="text" onChange={handleInput} value={newMember.stats} placeholder={'Stats id = ' + id} className='inputNew'></input>
                                <input id='imag2' type="text" onChange={handleInput} value={newMember.imag2} placeholder="Background..." className='inputNew' ></input>
                                <input id='about' type="text" onChange={handleInput} value={newMember.about} placeholder="About..." className='inputNewAbout'></input>
                            </div>
                           
                           
                 {/* <buttom type='submit' className='newMemberButton' onClick={handleSubmit}  >Add New</buttom> */}
             </form>
             <div className='innerNew2'>
                                <div className={classT}>
                                    <div  className='div'>
                                        <img src={newMember.imag ? newMember.imag : null } alt='NewImage' className='photo' />
                                    </div>
                                     <div className='div2'>
                                            <h3>Primary Information</h3> 
                                            <h5>{newMember.name}</h5>
                                            <h5>{newMember.born}</h5>
                                            <h5>{newMember.state+ ' ,'} {newMember.city}</h5>
                                            <h5>{newMember.country}</h5>
                                     </div>
                                     <div className='div3'>
                                        <p>{newMember.about}</p>
                                     </div>

                                     <div className='div4'>
                                            <h5><span>Spouse:</span> {newMember.spouse}</h5>
                                            <h5><span>Parents:</span> {newMember.parents}</h5>
                                            <h5><span>Siblings:</span> {newMember.siblings}</h5>
                                            <h5><span>Children:</span> {newMember.children}</h5>
                                            <h5><span>Education:</span> {newMember.education}</h5>
                                     </div>
                                     <div className='div5'>
                                            <h5><span>Nickname:</span> {newMember.nickname}</h5>
                                            <h5><span>Age:</span> {newMember.age}</h5>
                                            <h5><span>Height:</span> {newMember.height}</h5>
                                            <h5><span>Weight:</span> {newMember.weight}</h5>
                                            <h5><span>Salary:</span> {newMember.salary}</h5>
                                     </div>
                                     <div className='div6'>
                                           <h5><span>Team:</span> {newMember.current_team} {newMember.team_id}</h5>
                                            <h5><span>Number: #</span> {newMember.number}</h5>
                                            <h5><span>Position:</span> {newMember.position}</h5>
                                            <h5><span>Bats:</span> {newMember.bats}</h5>
                                            <h5><span>Throws:</span> {newMember.throws}</h5>
                                     </div>


                                </div>
                            </div>
                           
             </div>
         </div>
    </div>
  )
}

export default NewMember