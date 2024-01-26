import { useEffect, useState } from 'react'
import { getUser } from './helpers/ApiUsers'
import { TableUsers } from './components/TableUsers'


function App() {
  const [user, setUser] = useState([])
  const [indicador, setIndicador] = useState(false)
  const [ordenado, setOrdenado] = useState(false)

  useEffect(() => {
    getUser().then(res => setUser(res.results))
  }, [])

  const filasPintada = () => {
    setIndicador(!indicador)
  }

  const ordenarPaises = () => {
    setOrdenado(!ordenado)
  }

  const ordearPorPaise =
    ordenado ? structuredClone(user).sort((a, b) => a.location.country.localeCompare(b.location.country)) : user
    ;

  console.log("ordenado", ordearPorPaise)

  return (
    <>
      <h1>Examen Tecnico Prueba Certus</h1>
      <button onClick={filasPintada}>Pinta Filas</button>
      <button onClick={ordenarPaises}>Ordenar por Pais</button>
      <TableUsers listUsers={ordearPorPaise} indicador={indicador} />
    </>
  )
}

export default App
