
import PropTypes from 'prop-types';
import css from './Statistic.module.css'
export const Statistics=({title,stats})=>{
  return(
<section className="statistics" style={{
      marginBottom:"50px"
    }}>
  {
    title?(<h2 className="title">{title}</h2>):null
  }


  <ul className={`stat-list ${css.list}`}>
    {stats.map(a=>(

<li className={`item ${css.item}`} key={a.id}>
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
