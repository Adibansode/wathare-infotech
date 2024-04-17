import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
// import 'bootstrap/dist/css/bootrstrap.min.css'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/getdata')
    .then(users=> setData(users.data))
    .cach(err=>console.log(err))
  },[])

  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
       <table className='table'>
        <thead>
        <tr>
          <th>
            th
          </th>
          <th>
            machine-status
          </th>
          <th>
            vibration
          </th>
        </tr>
        </thead>
        <tbody>
          {
            users.map(user=>{
              <tr>
                <td>{users.th}</td>
                <td>{users.machine-status}</td>
                <td>{users.vibration}</td>
              </tr>
            })
          }
        </tbody>
       </table>
      </div>
      
    </>
  )
}

export default App
