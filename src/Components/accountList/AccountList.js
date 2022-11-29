// import React, { useEffect, useState } from 'react';

// import { getCookie } from '../../utils/cookieUtils';

// const AccountList = () => {

//     const [accounts, setAccounts] = useState([]);


//     useEffect(() => {

//         const accessToken = getCookie('accessToken');

//         const requestOptions = {
//             headers: {'Authorization': `Bearer ${accessToken}`}
//         }

//         fetch('http://localhost:9000/accounts',requestOptions )
//         .then(response => response.json())
//         .then(data => {

//             if(data.error){
//                 console.log(data.error);
//             } else {
//                 console.log(data)
//                 setAccounts(data);
//             }
           
//         })
//     }, [])


//   return (
//     <div>
//         <div>Accounts</div>
//         <div>
//             {accounts.map(account => {
//                 return (<div>{account.number}, {account.balance}</div>)
//             })}
//         </div>
//     </div>
//   )
// }

// export default AccountList