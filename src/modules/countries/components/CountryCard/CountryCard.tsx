import { FaFlag } from 'react-icons/fa'
import UpdateBtn from './../../../../assets/actions/update.png';
import DeleteBtn from './../../../../assets/actions/delete.png';
import './CountryCard.css'

const CountryCard = (props:{ country_name:string, is_active:1|0 }) => {

    return (
        <div className="YS-country-item">
            <div className='YS-country-card'>
                <div className="YS-country-info">
                    <div className="YS-country-icon">
                        <FaFlag className='icon' />
                    </div>
                    <div className="YS-country-details">
                        <p className='title'>{props.country_name}</p>
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

export default CountryCard