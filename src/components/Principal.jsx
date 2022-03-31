import Registro from "./Registro"

const Principal = ({registros, formatearCantidad}) => {

  console.log(registros)

  return (
    <main>

      <h2>Registros</h2>

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
                  formatearCantidad={formatearCantidad}
              />

            )) }

           
          </tbody>

          </table>
     
    </main>
  )
}

export default Principal