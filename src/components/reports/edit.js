import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'
import { Link } from 'react-router-dom'
import auth from '../../models/auth'

let endpoint = 'https://me-api.henrikfredriksson.me'

if (process.env.NODE_ENV === 'development') {
  endpoint = 'http://localhost:5000'
}


export default function Edit() {
  const [reports, setReports] = useState([])


  useEffect(() => {
    const getReports = async () => {
      const response = await fetch(endpoint.concat('/reports'))
      const data = await response.json()

      await setReports(data)
    }

    getReports()
  }, [])

  const content = (
    <>
      <table>
        {reports.map((report, index) =>
          (
            <tr key={index}>
              <td style={{
                textAlign: 'left'
              }}>
                Vecka {report.week}
              </td>
              <td style={{
                textAlign: 'right'
              }}>
                <Link to={`/reports/edit/${report.week}`}>Redigera</Link>
              </td>
            </tr>
          )
        )}
      </table>

      <Link to='/reports/new/'>Skapa ny redovisningstext</Link>
    </>
  )


  const login = (
    <p><Link to='/login'>Logga in</Link> för att kunna redigera texter</p>
  )

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className="content">
          <h1>Redigera/Lägg till texter</h1>

          {auth.token ? content : login}


        </div>
      </div>
    </>)
}
