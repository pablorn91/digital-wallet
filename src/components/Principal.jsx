import Registro from "./Registro"

const Principal = ({registros}) => {

  console.log(registros)

  return (
    <main>

          <table>

          <thead>
            <td>Fecha</td>
            <td>Registro</td>
            <td>Saldo</td>
          </thead>

          <tbody>

            { registros.map( registro => (

              <Registro 
                  key={registro.id}
                  registro={registro}
              />

            )) }

           
          </tbody>

          </table>
     
    </main>
  )
}

export default Principal