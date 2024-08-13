import { useNavigate } from 'react-router-dom';
import Search from '../../../../sharedComponents/Search/Search';
import './CountriesPage.css'
import CountryCard from '../../components/CountryCard/CountryCard';

const CountriesPage = () => {
  const navegate = useNavigate();

  const handelCreateAction = () => {
    navegate('/home/countries/add')
  }
  return (
    <div className='YS-Countries'>
      <div className="YS-Countries-header">
        <div className="search-input">
          <Search />
        </div>
        <div className="add-action">
          <button onClick={handelCreateAction} >
            إضافة دولة
          </button>
        </div>
      </div>
      <CountryCard country_name='سوريا' is_active={1} />
      <CountryCard country_name='لبنان' is_active={0} />
    </div>
  )
}

export default CountriesPage