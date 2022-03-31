import { useState, useEffect } from 'react'
import Alerta from "./Alerta"

const Aside = ({setModal, alerta, registros, calcularPresupuesto}) => {

    const [ presupuesto, setPresupuesto ] = useState('')

    const handleNuevoRegistro = () => {
        setModal(true)
    }

    useEffect(() => {
        setPresupuesto(calcularPresupuesto())
    }, [registros])

  return (

    <div>
        <aside>
            <h2>Gestionar Fondos</h2>

            <button 
                type="button"
                className="boton"
                onClick={handleNuevoRegistro}
            >Registrar</button>
            
            <h3>Tu saldo:</h3>
            <p className={ presupuesto <=10 ? 'saldo enrojo' : 'saldo estable'}>{`$${presupuesto}`}</p>

        </aside>

        { alerta.msg && <Alerta alerta={alerta} />}

    </div>
    )
}

export default Aside