// import React from 'react'

// function NotFound() {
//   return (
//     <div> <div className="flex justify-center items-center h-64">
//     <ClipLoader color="#2563EB" loading={loading} size={50} />
//   </div></div>
//   )
// }

// export default NotFound

// import ClipLoader from 'react-spinners/ClipLoader';

// export default function Loader({ loading }) {
//   return (
//     <div className="flex justify-center items-center h-64">
//       <ClipLoader color="#2563EB" loading={loading} size={50} />
//     </div>
//   );
// }
import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
export const NotFound = ({loading}) => {
  return (
    <div>
      <div className="flex justify-center items-center h-64">
    <ClipLoader color="#2563EB" loading={loading} size={50} />
  </div>
    </div>
  )
}
