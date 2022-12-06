// import React , {useState} from 'react';
// import { uploadFile } from 'react-s3';
// import {S3_BUCKET, REGION, ACCESS_KEY, SECRET_ACCESS_KEY } from '../../.env'

// window.Buffer = window.Buffer || require("buffer").Buffer;

// // const S3_BUCKET ='baseballsportworld';
// // const REGION ='us-east-1';
// // const ACCESS_KEY ='AKIA2H7E3HU6YWUH4BO6';
// // const SECRET_ACCESS_KEY ='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';

// const config = {
//     bucketName: S3_BUCKET,
//     region: REGION,
//     accessKeyId: ACCESS_KEY,
//     secretAccessKey: SECRET_ACCESS_KEY,
// }

// const UploadImageToS3WithReactS3 = () => {

//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleFileInput = (e) => {
//         setSelectedFile(e.target.files[0]);
//     }


//     const handleUpload = async (file) => {
//         uploadFile(file, config)
//             .then(data => {
//                 console.log(data)
//                 setSelectedFile(null) 
//               })
//             .catch(err => console.error(err))
//     }

//     return <div>
//         <div>React S3 File Upload</div>
//         <input type="file" onChange={handleFileInput}  />
//         <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
//     </div>
// }

// export default UploadImageToS3WithReactS3;