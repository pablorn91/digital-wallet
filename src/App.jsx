import { useState, useEffect } from 'react'
import './scss/app.scss'
import Aside from './components/Aside'
import Principal from './components/Principal'
import Modal from './components/Modal'
import { generarId } from './helpers'

function App() {
 
  const [ modal, setModal ] = useState(false);

  const [registros, setRegistros ] = useState(localStorage.getItem('registros') ? JSON.parse(localStorage.getItem('registros')) : [])

  const [ alerta, setAlerta ] = useState({})

  const guardarRegistro = registro => {
      registro.id = generarId();
      registro.fecha = Date.now();
      if(registro.operacion === 'ingreso') {
        registro.saldo = calcularPresupuesto()+Number(registro.cantidad)
      } else {
        registro.saldo = calcularPresupuesto()-Number(registro.cantidad)
      }
      setRegistros([...registros, registro])
      setAlerta({
        msg: 'Registrado con éxito',
        tipo: 'exito'
      })
      setTimeout(() => {
        setAlerta({})
    }, 3000);
  }

  const calcularPresupuesto = () => {
    const resultado = registros.reduce( (total, registro) => {
      if (registro.operacion === 'ingreso') {
        return total + Number(registro.cantidad);
      } else return total - Number(registro.cantidad);
    }, 0)
    return resultado;
  }

  useEffect( ()=> {
    localStorage.setItem('registros', JSON.stringify(registros) ?? [] )
  }, [registros])

  return (
    <div className='contenedor'>
     <h1>Digital Wallet</h1>
     <p className='descripcion'>Administra tus fondos</p>

     <div className='app'>
        <Aside 
          setModal={setModal}
          alerta={alerta}
          registros={registros}
          calcularPresupuesto={calcularPresupuesto}
        />

        { registros.length === 0 ?  
          <h2>Aquí se mostrarán tus Registros</h2> : 
          <Principal registros={registros} />
        }

        {modal && (

          <Modal 
              setModal={setModal}
              alerta={alerta}
              setAlerta={setAlerta}
              guardarRegistro={guardarRegistro}
              calcularPresupuesto={calcularPresupuesto}
          /> 

        )}
     </div>
    </div>
  )
}

export default App
