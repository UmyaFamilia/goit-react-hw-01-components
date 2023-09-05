import PropTypes from 'prop-types';

export const TransactionHistory=({array})=>{
  return(
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
{array.map(a=>(
  <tr key={a.id}>
  <td>{a.type}</td>
  <td>{a.amount}</td>
  <td>{a.currency}</td>
</tr>
))}
  </tbody>
</table>
  )
}
TransactionHistory.propTypes={
  array:PropTypes.array,
 }
