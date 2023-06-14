import React from 'react'

const OrderRow = (props) => {
    return (
        <>
              <tr>
      <th scope="row">{props.exp}</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
        </>
    )
}

export default OrderRow
