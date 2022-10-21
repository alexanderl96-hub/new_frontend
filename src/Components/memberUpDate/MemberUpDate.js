import React,  { useState, useEffect}from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import '../newMember/NewMember.css'
import './MemberUpdate.css'
import Navbar from '../navBar/Navbar'

const MemberUpDate = () => {
  const [member, setMemberid] = useState([])

  const [memberName, setMemberName] = useState([])
  const [memberImg, setMemberImg] = useState([])
  const [memberTeam, setMemberTeam] = useState([])
  const [memberAge, setMemberAge] = useState([])
  const [memberBirth, setMemberBirth] = useState([])
  const [memberCity, setMemberCity] = useState([])
  const [memberState, setMemberState] = useState([])
  const [memberHeight, setMemberHeight] = useState([])
  const [memberWeight, setMemberWeight] = useState([])
  const date = new Date();
  const year = date.getFullYear()
  const month = date.getMonth()+1
  const hoy = date.getDate()

  const navigate = useNavigate(); 
  let { id } = useParams();
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

 

  const handleInput =(e)=>{
    const {value} = e.target;
     setMember({...newMember, [e.target.id]: value })
}

  const handleSubmit = (e) => {
    e.preventDefault();
     updatedTeam(newMember, id)
    navigate(`/teams/groups/${id}`)
    
  };
  const updatedTeam = (update, id) => {
    axios.put(`https://my-baseball-teams.adaptable.app/groups/${id}`, update).then(
      (res) => {
        const newTeam = [...newMember];
        newTeam[id] = update;
        setMember(newTeam);
      },
      (error) => console.log(error)
    );
  };
  //  const updatedTeam = (update, id) => {
  //   axios.put(`http://localhost:9000/groups/${id}`, update).then(
  //     (res) => {
  //       const newTeam = [...newMember];
  //       newTeam[id] = update;
  //       setMember(newTeam);
  //     },
  //     (error) => console.log(error)
  //   );
  // };
  useEffect(() => {
    fetch(`https://my-baseball-teams.adaptable.app/groups/${id}`)
        .then(res => res.json())
        .then(data =>{
          setMemberid(data.team.team_id)
          setMemberName(data.team.name)
          setMemberImg(data.team.imag)
          setMemberTeam(data.team.current_team)
          setMemberAge(data.team.age)
          setMemberBirth(data.team.born)
          setMemberCity(data.team.city)
          setMemberState(data.team.state)
          setMemberHeight(data.team.height)
          setMemberWeight(data.team.weight)
        })
  },[id])


     let monterValue = memberBirth.toString().split(' ')[0]
     let hoyValue = memberBirth.toString().split(' ')[1]
     let yearValue = memberBirth.toString().split(' ').slice(-1).join()
    
        const dateBirth = new Date(`${Number(yearValue)}-${monterValue}-${hoyValue}`)
      const yearB = dateBirth.getFullYear()
      const monthB = dateBirth.getMonth()+1
      const hoyB = dateBirth.getDate()

        const age = year - yearB
      // // const currentAge = monthB <= month && hoyB >= hoy ? age  : age-1
      const currentAge = () =>{
            if(monthB <= month){
              return age
            }else if(monthB <= month && hoyB > hoy){
              return age-1
            }else{
              return age-1
            }
          }

 console.log(currentAge(age))
 
  //  useEffect(() => {
  //   fetch(`http://localhost:9000/groups/${id}`)
  //       .then(res => res.json())
  //       .then(data =>{
  //           setMemberid(data.team.team_id)
  //           setMemberName(data.team.name)
  //           setMemberImg(data.team.imag)
  //           setMemberTeam(data.team.current_team)
  //           setMemberAge(data.team.age)
  //           setMemberCity(data.team.city)
  //           setMemberState(data.team.state)
  //           setMemberHeight(data.team.height)
  //           setMemberWeight(data.team.weight)
  //       })
  // },[id])

  console.log()
  return (
         <div className='Update_Container'>
             <Navbar />
           <h1 >UpDate Member</h1>
            <h2>{memberName}</h2>
         <div >
          
         <form onSubmit={handleSubmit} className='newMemberUpdate'>
                           <div className='innerUpdate'>
                                <input id='name' type="text" onChange={handleInput} value={newMember.name} placeholder={memberName} className='inputT' ></input>
                                <input id='team_id' type="text" onChange={handleInput}  placeholder={'team_id = ' +member} className='inputT' ></input>
                                <input id='nickname'type="text" onChange={handleInput}  placeholder={"Nickname..." } className='inputT' ></input>
                                <input id='imag' type="text" onChange={handleInput}  placeholder="Url..." className='inputT' ></input>
                                <input id='born' type="text" onChange={handleInput} placeholder={memberBirth } className='inputT' ></input>
                                <input id='city' type="text" onChange={handleInput}   placeholder={memberCity } className='inputT' ></input>
                                <input id='state' type="text" onChange={handleInput}  placeholder={memberState} className='inputT' ></input>
                                <input id='country' type="text" onChange={handleInput} placeholder="Country..." className='inputT' ></input>
                            </div>
                            <div className='innerUpdate'>
                                <input id='age' type="text" onChange={handleInput}  placeholder={currentAge(age)} className='inputT'></input>
                                <input id='height' type="text" onChange={handleInput}  placeholder="Height..."  className='inputT' ></input>
                                <input id='weight' type="text" onChange={handleInput}  placeholder="Weight..." className='inputT' ></input>
                                <input id='current_team' type="text" onChange={handleInput} placeholder={memberTeam} className='inputT' ></input>
                                <input id='salary' type="text" onChange={handleInput}  placeholder="Salary..." className='inputT' ></input>
                                <input id='number' type="number" onChange={handleInput} placeholder="Number..." className='inputT' ></input>
                                <input id='education' type="text" onChange={handleInput}  placeholder="Education..." className='inputT'></input>
                                <input id='spouse' type="text" onChange={handleInput}  placeholder="Spouse..." className='inputT'></input>
                                <buttom type='submit' className='newMemUpButton' onClick={handleSubmit}  >Submit</buttom>
                            </div>
                            <div className='innerUpdate'>
                                <input id='parents' type="text" onChange={handleInput}  placeholder="Parents..." className='inputT'></input>
                                <input id='children' type="text" onChange={handleInput}  placeholder="Children..." className='inputT'></input>
                                <input id='siblings' type="text" onChange={handleInput}  placeholder="Siblings..." className='inputT'></input>
                                <input id='position' type="text" onChange={handleInput} placeholder="Position..." className='inputT'></input>
                                <input id='bats' type="text" onChange={handleInput}  placeholder="Bats..." className='inputT'></input>
                                <input id='throws' type="text" onChange={handleInput}  placeholder="Throws..." className='inputT'></input>
                                <input id='stats' type="text" onChange={handleInput}  placeholder={'Stats id = ' + id} className='inputT'></input>
                                <input id='imag2' type="text" onChange={handleInput}  placeholder="Background..." className='inputT' ></input>
                                <input id='about' type="text" onChange={handleInput}  placeholder="About..." className='inputTAbout'></input>
                            </div>
                            <div  className='divImage'>
                                <img src={newMember.imag ? newMember.imag : memberImg } alt='NewImage' className='photo1' />
                                <div style={{backgroundColor: '#efeaea9d'}}>
                                    <hr/>
                                    <div className='Upcheck'>  <p className='a'>Edad:</p> <p className='b'>{newMember.age ? newMember.age : currentAge(age)}</p> </div>
                                  
                                    <div className='Upcheck'>  <p className='a'>City:</p> <p className='b'>{newMember.city ? newMember.city : memberCity}</p> </div>
                                    
                                    <div className='Upcheck'>  <p className='a'>State:</p> <p className='b'>{newMember.state ? newMember.state : memberState}</p> </div>
                                  
                                    <div className='Upcheck'>  <p className='a'>Height:</p> <p className='b'>{newMember.height ? newMember.height : memberHeight}</p> </div>
                                  
                                    <div className='Upcheck'>  <p className='a'>Weight:</p> <p className='b'>{newMember.weight ? newMember.weight : memberWeight}</p> </div>
                                </div>
                            </div>
                           
                 
             </form>
         </div>
      </div>
  )
}

export default MemberUpDate