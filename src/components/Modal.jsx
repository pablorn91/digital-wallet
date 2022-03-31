import { useState, useEffect } from 'react';
import CerrarBtn from '../img/cerrar.svg';
import Alerta from './Alerta';

const Modal = ({setModal, alerta, setAlerta, guardarRegistro, calcularPresupuesto}) => {

    const [ operacion, setOperacion ] = useState('')
    const [ cantidad, setCantidad ] = useState('')

    const ocultarModal = () => {
        setModal(false)
        
    }

    const handelSubmit = e => {
        e.preventDefault();
        if([operacion, cantidad].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                tipo: 'error'
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);

            return;
        }

        if (operacion === 'gasto' && cantidad > calcularPresupuesto()) {
            setAlerta({
                msg: 'El gasto excede tu presupuesto',
                tipo: 'error'
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);

            return;
        }

        guardarRegistro({operacion, cantidad})
        setModal(false)
    }

    useEffect(() => {
        console.log(calcularPresupuesto())
    }, [])  

  return (
    
    <div className="modal">
      <div className="cerrar-modal">
            <img 
                src={CerrarBtn} 
                alt="Cerrar Modal" 
                onClick={ocultarModal}
            />
      </div>

      <form 
      className='formulario animar'
      onSubmit={handelSubmit}
      >
          <legend>Registrar</legend>
 
          <div className="campo">
              <label htmlFor="operacion">Elija operación</label>
                <select 
                    id="operacion"
                    value={operacion}
                    onChange={e => setOperacion(e.target.value)}
                    >
                   <option value="">-- Seleccione --</option>         
                   <option value="ingreso">Ingresar</option>         
                   <option value="gasto">Gastar</option>             
                </select>
          </div>

          <div className="campo">
              <label htmlFor="cantidad">Cantidad</label>
              <input 
                    id="cantidad"
                    type="number"
                    min="1"
                    step="any"
                    placeholder="Añade Monto"
                    value={cantidad}
                    onChange={e => setCantidad(e.target.value)}
              />
          </div>

          { alerta.msg && <Alerta alerta={alerta} />}

          <input 
                type="submit"
                value="Registrar"
                className='boton'
            />
 
      </form>

  </div>
  )
}

export default Modal