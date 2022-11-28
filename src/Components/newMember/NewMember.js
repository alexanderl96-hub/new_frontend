import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
    const [classT, setClassT] = useState('innerNew3')
   
    const [newMember,setMember] = useState({
       name: '',
       team_id: `${id}`,
       nickname: '',
       imag: '',
       imag2: '',
       born: '',
       city: '',
       state: '',
       country: '',
       age: '' ,
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
       stats: `${id}`,
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
      
       const addMember = (newMember) => {
        axios.post(`https://my-baseball-teams.adaptable.app/groups`, newMember).then((res)=>{
            setMember({
            name: '',
            team_id: `${id}`,
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
            stats: `${id}`,
            about: '',
            imag2: '',
          })
          
          navigate(`/teams/newMember/${id}`);
          
          })
      }
      // const addMember = ( newMember) => {
      //   axios.post(`http://localhost:9000/groups`, newMember).then((res)=>{   
      //     setMember({
      //       name: '',
      //       team_id: '',
      //       nickname: '',
      //       imag: '',
      //       born: '',
      //       city: '',
      //       state: '',
      //       country: '',
      //       age: '',
      //       height: '',
      //       weight: '',
      //       current_team: '',
      //       salary: '',
      //       number: '',
      //       education: '',
      //       spouse: '',
      //       parents: '',
      //       children: '',
      //       siblings: '',
      //       position: '',
      //       bats: '',
      //       throws: '',
      //       stats: '',
      //       about: '',
      //       imag2: '',
      //     })
          
      //     navigate(`/teams/newMember/${id}`);
          
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
      
      const currentAge = () =>{
            if(monthB <= month){
              return age
            }else if(monthB <= month && hoyB > hoy){
              return age-1
            }else{
              return age-1
            }
          }
    useEffect(() => {
        fetch(`https://my-baseball-teams.adaptable.app/teams/${id}`)
        .then(res => res.json())
        .then(data =>{
            setGroup(data.team)
        })
  },[id,classT])

//   useEffect(() => {
//     fetch(`http://localhost:9000/teams/${id}`)
//     .then(res => res.json())
//     .then(data =>{
//         setGroup(data.team)
//     })
// },[id, classT])
const educationLen = (about) => {
  let pro = [];
  let i = 0
  let str = about.split(" ");
  while(i < str.length){
     pro.push(str[i])
     i++
  }
return pro.length <= 5 ?  pro.join(' ') : pro.slice(0, 7).join(' ').concat(' ...')
};

const aboutLength = (about) => {
  let pro = [];
  let i = 0
  let str = about.split(" ");
  while(i < str.length ){
     pro.push(str[i])
     i++
  }
  return pro.length <= 31 ?  pro.join(' ') : pro.slice(0, 32).join(' ').concat(' ...')
};


function convertInKG(str){
  let convert = Number(str.slice(0, -4))/2.205
  return   convert.toString()[2] === '.' ? 
   Number(convert.toString().split('').slice(0, 4).join('')) : 
    Number(convert.toString().split('').slice(0, 5).join(''))
}

function convertFootInCm (height){
  let change = height[0] + '.' + height.slice(2)
  return String(Number(change)*30.48).slice(0, 5)
}

console.log(newMember )
  return (
    <div className='newMember_Container'>
   
         <h1 >New Member</h1>
         <div>
             <div  className="newMemberWrap">
                     <form onSubmit={handleSubmit} className='newMember_AboutGrid'>
                              <div className='innerNew'>
                                <input id='name' type="text" onChange={handleInput} value={newMember.name}  placeholder='Name...' className='inputNew' ></input>
                                <input id='team_id' type="text" onChange={handleInput} value={newMember.team_id} placeholder={'team_id = ' +id} className='inputNew' style={{display:'none'}} ></input>
                                <input id='nickname'type="text" onChange={handleInput} value={newMember.nickname} placeholder="Nickname..." className='inputNew' ></input>
                                <input id='imag' type="text" onChange={handleInput}  value={newMember.imag} placeholder="Url..." className='inputNew' ></input>
                                <input id='born' type="text" onChange={handleInput} value={newMember.born} placeholder="Months day, year" className='inputNew' ></input>
                                <input id='city' type="text" onChange={handleInput} value={newMember.city} placeholder="City..."  className='inputNew' ></input>
                                <input id='state' type="text" onChange={handleInput} value={newMember.state} placeholder="State..." className='inputNew' ></input>
                                <input id='country' type="text" onChange={handleInput} value={newMember.country} placeholder="Country..." className='inputNew' ></input>
                                <input id='age' type="text" onChange={handleInput} value={ newMember.age} placeholder={ !currentAge(age) ? "Age": currentAge(age)} className='inputNew'></input>
                                <input id='height' type="text" onChange={handleInput} value={newMember.height} placeholder="Height..."  className='inputNew' ></input>
                                <input id='weight' type="text" onChange={handleInput} value={newMember.weight}  placeholder="Weight..."  className='inputNew' ></input>
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
                                <input id='stats' type="text" onChange={handleInput} value={newMember.stats} placeholder={'Stats id = ' + id} className='inputNew' style={{display:'none'}}></input>
                                <input id='imag2' type="text" onChange={handleInput} value={newMember.imag2} placeholder="Background..." className='inputNew' ></input>
                                <input id='about' type="text" onChange={handleInput} value={newMember.about} placeholder="About..." className='inputNewAbout'></input>
                            </div>
                           
                           
                        {/* <buttom type='submit' className='newMemberButton' onClick={handleSubmit}  >Add New</buttom> */}
                    </form>
             <div className='innerNew2'>
                                <div className={classT}>
                                    <div  className='div'>
                                        <img src={newMember.imag ? newMember.imag : null } alt="" className='photo' />
                                    </div>
                                     <div className='div2'>
                                            <h3>Primary Information</h3> 
                                            <h5>{newMember.name}</h5>
                                            <h5>{newMember.born}</h5>
                                            <h5>{newMember.state ? newMember.state+ ' ,' : ''} {newMember.city}</h5>
                                            <h5>{newMember.country}</h5>
                                     </div>
                                     <div className='div3'>
                                        <p>{aboutLength(newMember.about)}</p>
                                     </div>

                                     <div className='div4'>
                                            <h5><span>Spouse:</span> {educationLen(newMember.spouse)}</h5>
                                            <h5><span>Parents:</span> {educationLen(newMember.parents)}</h5>
                                            <h5><span>Siblings:</span> {educationLen(newMember.siblings)}</h5>
                                            <h5><span>Children:</span> {educationLen(newMember.children)}</h5>
                                            <h5><span>Education:</span> {educationLen(newMember.education)}</h5>
                                     </div>
                                     <div className='div5'>
                                            <h5><span>Nickname:</span> {newMember.nickname}</h5>
                                            <h5><span>Age:</span> {currentAge(age) ? currentAge(age) : ''}</h5>
                                            <h5><span>Height:</span> {newMember.height ? newMember.height + ", ("+ convertFootInCm(newMember.height)+"cm)" : ''}</h5>
                                            <h5><span>Weight:</span> {newMember.weight ? newMember.weight + " ("+convertInKG(newMember.weight)+"kg)" : ''}</h5>
                                            <h5><span>Salary:</span> {newMember.salary}</h5>
                                     </div>
                                     <div className='div6'>
                                           <h5><span>Team:</span> {newMember.current_team} {newMember.team_id}</h5>
                                            <h5><span>Number: #</span> {newMember.number}</h5>
                                            <h5><span>Position:</span> {educationLen(newMember.position)}</h5>
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