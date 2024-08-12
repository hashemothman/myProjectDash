import { FaBuildingFlag } from "react-icons/fa6";
import UpdateBtn from './../../../../assets/actions/update.png';
import DeleteBtn from './../../../../assets/actions/delete.png';
import './CityCard.css'

const CityCard = (props:{ city_name:string, is_active:1|0 }) => {

  return (
      <div className="YS-city-item">
          <div className='YS-city-card'>
              <div className="YS-city-info">
                  <div className="YS-city-icon">
                      <FaBuildingFlag className='icon' />
                  </div>
                  <div className="YS-city-details">
                      <p className='title'>{props.city_name}</p>
                      <p className='state'>(<span className={props.is_active == 1 ? 'green' : 'red'} >{props.is_active == 1 ? `مفعلة` : `غير مفعلة`}</span>)</p>
                  </div>
              </div>
              <div className="actions">
                  <img src={UpdateBtn} alt="update" />
                  <img src={DeleteBtn} alt="delete" />
              </div>
          </div>
      </div>
  )
}

export default CityCard