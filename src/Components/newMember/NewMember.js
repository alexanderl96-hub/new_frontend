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
   
    const [newMember,setMember] = useState({
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
   
    const handleInput = (e) =>{
        const {value} = e.target
        setMember({...newMember, [e.target.id]: value})
      }
    
      const handleSubmit = (e) =>{
        e.preventDefault()
        addMember(newMember)
      }
      // const addMember = (newMember) => {
      //   axios.post(`https://my-baseball-teams.herokuapp.com/groups`, newMember).then((res)=>{
      //     navigate(`/teams/newpage/${id}`);
      //     })
      // }
      const addMember = (newMember) => {
        axios.post(`http://localhost:9000/groups`, newMember).then((res)=>{
          navigate(`/teams/newpage/${id}`);
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
},[id])

  return (
    <div className='newMember_Container'>
        <Navbar />
         <h1 >New Member</h1>
         {/* <div className='wrapLink'> <Link to={`/teams/newpage/${group.id}`} className='newLinkBackNew'>Back</Link> </div> */}
         <div>
             <div >
             <form onSubmit={handleSubmit} className='newMember_AboutGrid'>
                              <div className='innerNew'>
                                <input id='name' type="text" onChange={handleInput} placeholder='Name...' className='inputNew' ></input>
                                <input id='team_id' type="text" onChange={handleInput} placeholder={'team_id = ' +id} className='inputNew' ></input>
                                <input id='nickname'type="text" onChange={handleInput}  placeholder="Nickname..." className='inputNew' ></input>
                                <input id='imag' type="text" onChange={handleInput}  placeholder="Url..." className='inputNew' ></input>
                                <input id='born' type="text" onChange={handleInput}  placeholder="Months day, year" className='inputNew' ></input>
                                <input id='city' type="text" onChange={handleInput}  placeholder="City..." className='inputNew' ></input>
                                <input id='state' type="text" onChange={handleInput} placeholder="State..."  className='inputNew' ></input>
                                <input id='country' type="text" onChange={handleInput} placeholder="Country..." className='inputNew' ></input>
                                <input id='age' type="text" onChange={handleInput}  placeholder={`Age.. ${currentAge(age) === Number(currentAge(age)) ? currentAge(age) : '' }`}className='inputNew'></input>
                                <input id='height' type="text" onChange={handleInput}  placeholder="Height..."  className='inputNew' ></input>
                                <input id='weight' type="text" onChange={handleInput}  placeholder="Weight..." className='inputNew' ></input>
                                <input id='current_team' type="text" onChange={handleInput} placeholder={"Current Team... " +group.name} className='inputNew' ></input>
                                <input id='salary' type="text" onChange={handleInput}  placeholder="Salary..." className='inputNew' ></input>
                            </div>
                            <div className='innerNew'>                      
                                <input id='number' type="number" onChange={handleInput} placeholder="Number..." className='inputNew' ></input>
                                <input id='education' type="text" onChange={handleInput}  placeholder="Education..." className='inputNew'></input>
                                <input id='spouse' type="text" onChange={handleInput}  placeholder="Spouse..." className='inputNew'></input>
                                <input id='parents' type="text" onChange={handleInput}  placeholder="Parents..." className='inputNew'></input>
                                <input id='children' type="text" onChange={handleInput}  placeholder="Children..." className='inputNew'></input>
                                <input id='siblings' type="text" onChange={handleInput}  placeholder="Siblings..." className='inputNew'></input>
                                <input id='position' type="text" onChange={handleInput} placeholder="Position..." className='inputNew'></input>
                                <input id='bats' type="text" onChange={handleInput}  placeholder="Bats..." className='inputNew'></input>
                                <input id='throws' type="text" onChange={handleInput}  placeholder="Throws..." className='inputNew'></input>
                                <input id='stats' type="text" onChange={handleInput}  placeholder={'Stats id = ' + id} className='inputNew'></input>
                                <input id='about' type="text" onChange={handleInput}  placeholder="About..." className='inputNewAbout'></input>
                            </div>
                            <div className='innerNew2'>
                                <div  className='div'>
                                    <img src={newMember.imag ? newMember.imag : null } alt='NewImage' className='photo' />
                                </div>
                            </div>
                           
                           
                 <buttom type='submit' className='newMemberButton' onClick={handleSubmit}  >Add New</buttom>
             </form>
             </div>
         </div>
    </div>
  )
}

export default NewMember