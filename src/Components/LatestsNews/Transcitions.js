import React, { useState, useEffect } from 'react'

const Transcitions = () => {
    const [transaction, setTransaction] = useState([])
    let previous = new Date()
    let current = new Date()

    function currentDate(value){
        let date = new Date(value);
        let day = date.getDate() < 10 ? '0'.concat(date.getDate() ) : date.getDate()
        let month = date.getMonth()+1 < 10 ? '0'.concat(date.getMonth()+1) : date.getMonth()+1 
        let year = date.getFullYear()
        return [year, month, day].join('')
      }

    function changeDate(value){
        let date = new Date(value);
        let day = date.getDate() < 10 ? '0'.concat(date.getDate() ) : date.getDate()
        let month = date.getMonth()+1 < 10 ? '0'.concat(date.getMonth()+1) : date.getMonth()+1 
        let year = date.getFullYear()
        return [year, month, day].join('-')
      }

      function serachFromlastTwoMonth (day){
        let date = new Date(day);
        let today = date.getDate() < 10 ? '0'.concat(date.getDate() ) : date.getDate()
        let month = date.getMonth()+1 < 10 ? '0'.concat(date.getMonth()+1): date.getMonth()+1
        let year = date.getFullYear()
        let current = 0
           if(today-7 <= 0){
             current = today - 7
             today = 30 - Math.abs(current)
              year = month -1 === 0 ? year-1 : year
             let currentmonth = month -1 === 0 ? 12 : month -1
             month = currentmonth < 10 ? '0'.concat(currentmonth) : currentmonth
           }else {
             today = today-7 < 10 ? '0'.concat(today-7) : today-7
           }
        
        return [year, month, today].join('')
      }

    useEffect(() => {
        fetch(`http://lookup-service-prod.mlb.com/json/named.transaction_all.bam?sport_code='mlb'&start_date='${serachFromlastTwoMonth(previous)}'&end_date='${currentDate(current)}'`)
        .then(res => res.json())
        .then(data =>{
            setTransaction(data.transaction_all.queryResults.row)
        })
    },[])
   console.log(serachFromlastTwoMonth(previous), transaction)
  return (
    <div>
         <div className='mainNews'>
            <h2 >News</h2>
            <div className='mainNews-firstinner' >
                { transaction.map((a, index)=>{
                    return(
                        <div>
                            <div className= 'newsMap'>
                                <div>
                                    { changeDate(a.effective_date)} 
                                </div>                     
                                <div >
                                    {a.note}
                                </div>
                                <div className= 'newsMap-Name'>
                                    {a.name_display_first_last} / {a.orig_asset}
                                </div>
                                <div  className= 'newsMap-Name'>
                                    {a.team} {a.orig_asset_type} {a.trans_date_cd}
                                </div>
                                <div  className= 'newsMap-Name'>
                                    {a.type_cd}
                                </div>    
                            </div>
                        </div>
                    )
                })}
                </div>
         </div>
    </div>
  )
}

export default Transcitions