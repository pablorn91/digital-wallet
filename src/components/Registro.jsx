import React from 'react'
import { formatearFecha } from '../helpers'

const Registro = ({registro, formatearCantidad}) => {

    const { fecha, operacion, cantidad, saldo } = registro;

  return (
    <tr>
        <td>{formatearFecha(fecha)}</td>
        <td className={operacion === 'ingreso' ? 'ingreso': 'gasto'} >{ operacion === 'ingreso' ? `+${formatearCantidad(Number(cantidad))}`: `-${formatearCantidad(Number(cantidad))}` }</td>
        <td>{`${formatearCantidad(Number(saldo))}`}</td>
    </tr>
  )
}

export default Registro