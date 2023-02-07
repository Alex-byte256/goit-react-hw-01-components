import c from "./Statistics.module.css"
import PropTypes from 'prop-types';


function Statistics ({title , stats }) {

  return (
    <section className={c.statistics}>
      {title && <h2 className={c.title}>Upload stats</h2>}

      <ul className={c.statList}>
        {
          stats.map(el => <li key={el.id} className={c.item}>
            <span className={c.label}>{el.label}</span>
            <span className={c.percentage}>{el.percentage}%</span>
          </li>)
        }
      </ul>
    </section>
  )
}

Statistics.propTypes = {
 title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
}

export default  Statistics;
