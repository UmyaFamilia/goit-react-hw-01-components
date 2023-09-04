
import PropTypes from 'prop-types';
export const Statistics=({title,stats})=>{
  return(
<section className="statistics">
  {
    title?(<h2 className="title">{title}</h2>):null
  }


  <ul className="stat-list">
    {stats.map(a=>(

<li className="item" key={a.id}>
<span className="label">{a.label}</span>
<span className="percentage">{a.percentage}</span>
</li>
    ))}


  </ul>
</section>
  )
}
Statistics.propTypes={
  title:PropTypes.string,
  stats:PropTypes.array,
}
