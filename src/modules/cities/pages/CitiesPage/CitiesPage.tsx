import { useNavigate } from 'react-router-dom';
import './CitiesPage.css'
import Search from '../../../../sharedComponents/Search/Search';
import CityCard from '../../components/CityCard/CityCard';

const CitiesPage = () => {
    const navegate = useNavigate();

    const handelCreateAction = () => {
        navegate('/home/cities/add')
    }
    return (
        <div className='YS-cities'>
            <div className="YS-cities-header">
                <div className="search-input">
                    <Search />
                </div>
                <div className="add-action">
                    <button onClick={handelCreateAction} >
                        إضافة مدينة
                    </button>
                </div>
            </div>
            <CityCard city_name='جبلة' is_active={1} />
            <CityCard city_name='بانياس' is_active={0} />
        </div>
    )
}

export default CitiesPage