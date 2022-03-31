import React from 'react'
import { formatearFecha } from '../helpers'

const Registro = ({registro}) => {

    const { fecha, operacion, cantidad, saldo } = registro;

  return (
    <tr>
        <td>{formatearFecha(fecha)}</td>
        <td className={operacion === 'ingreso' ? 'ingreso': 'gasto'} >{ operacion === 'ingreso' ? `+$${cantidad}`: `-$${cantidad}` }</td>
        <td>{`$${saldo}`}</td>
    </tr>
  )
}

export default Registro