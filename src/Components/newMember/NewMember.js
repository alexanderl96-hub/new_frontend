import React, { useState, useEffect } from 'react'
import { Link , useNavigate, useParams } from 'react-router-dom'
import './NewMember.css'
import axios from 'axios'


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
      const addMember = (newMember) => {
        axios.post(`https://my-baseball-teams.herokuapp.com/groups`, newMember).then((res)=>{
          navigate(`/teams/newpage/${id}`);
          })
      }
      // const addMember = (newMember) => {
      //   axios.post(`http://localhost:9000/groups`, newMember).then((res)=>{
      //     navigate(`/teams/newpage/${id}`);
      //     })
      // }
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

  /* calculate the age of new player
  const myBirthday = new Date('1987-07-22');
const rightNow = new Date();

const numberOfMsIHaveLived = rightNow - myBirthday;  */
  useEffect(() => {
    fetch(`http://localhost:9000/teams/${id}`)
    .then(res => res.json())
    .then(data =>{
        setGroup(data.team)
    })
},[id])

console.log(currentAge, group.name)
console.log(hoyB, monthB, yearB)
  return (
    <div className='newMember_Container'>
         <h1 className='newTitle'>New Member</h1>
         <div className='wrapLink'> <Link to={`/teams/newpage/${group.id}`} className='newLinkBackNew'>Back</Link> </div>
         <div>
             <div >
             <form onSubmit={handleSubmit} className='newMember_AboutGrid'>
                              <div className='innerNew'>
                                <input id='name' type="text" onChange={handleInput} placeholder='Name...' className='inputT' ></input>
                                <input id='team_id' type="text" onChange={handleInput} placeholder={'team_id = ' +id} className='inputT' ></input>
                                <input id='nickname'type="text" onChange={handleInput}  placeholder="Nickname..." className='inputT' ></input>
                                <input id='imag' type="text" onChange={handleInput}  placeholder="Url..." className='inputT' ></input>
                                <input id='born' type="text" onChange={handleInput}  placeholder="Months day, year" className='inputT' ></input>
                                <input id='city' type="text" onChange={handleInput}  placeholder="City..." className='inputT' ></input>
                                <input id='state' type="text" onChange={handleInput} placeholder="State..."  className='inputT' ></input>
                                <input id='country' type="text" onChange={handleInput} placeholder="Country..." className='inputT' ></input>
                            </div>
                            <div className='innerNew'>
                                <input id='age' type="text" onChange={handleInput}  placeholder={`Age.. ${currentAge(age) === Number(currentAge(age)) ? currentAge(age) : '' }`}className='inputT'></input>
                                <input id='height' type="text" onChange={handleInput}  placeholder="Height..."  className='inputT' ></input>
                                <input id='weight' type="text" onChange={handleInput}  placeholder="Weight..." className='inputT' ></input>
                                <input id='current_team' type="text" onChange={handleInput} placeholder={"Current Team... " +group.name} className='inputT' ></input>
                                <input id='salary' type="text" onChange={handleInput}  placeholder="Salary..." className='inputT' ></input>
                                <input id='number' type="number" onChange={handleInput} placeholder="Number..." className='inputT' ></input>
                                <input id='education' type="text" onChange={handleInput}  placeholder="Education..." className='inputT'></input>
                                <input id='spouse' type="text" onChange={handleInput}  placeholder="Spouse..." className='inputT'></input>
                            </div>
                            <div className='innerNew'>
                                <input id='parents' type="text" onChange={handleInput}  placeholder="Parents..." className='inputT'></input>
                                <input id='children' type="text" onChange={handleInput}  placeholder="Children..." className='inputT'></input>
                                <input id='siblings' type="text" onChange={handleInput}  placeholder="Siblings..." className='inputT'></input>
                                <input id='position' type="text" onChange={handleInput} placeholder="Position..." className='inputT'></input>
                                <input id='bats' type="text" onChange={handleInput}  placeholder="Bats..." className='inputT'></input>
                                <input id='throws' type="text" onChange={handleInput}  placeholder="Throws..." className='inputT'></input>
                                <input id='stats' type="text" onChange={handleInput}  placeholder={'Stats id = ' + id} className='inputT'></input>
                                <input id='about' type="text" onChange={handleInput}  placeholder="About..." className='inputTAbout'></input>
                            </div>
                            <div  className='div'>
                                <img src={newMember.imag ? newMember.imag : null } alt='NewImage' className='photo' />
                            </div>
                           
                 <buttom type='submit' className='newMemberButton' onClick={handleSubmit}  >Add New</buttom>
             </form>
             </div>
         </div>
    </div>
  )
}

export default NewMember