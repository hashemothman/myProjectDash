import './Offices.css'
import Search from "../../../../sharedComponents/Search/Search";
import OfficeCard from "../../components/OfficeCard/OfficeCard";
import { useNavigate } from 'react-router-dom';

const Offices = () => {
  const navegate = useNavigate();

  const handelCreateAction = () => {
    navegate('/home/offices/add')
  }
  return (
    <div className='office'>
      <div className="office-header">
        <div className="search-input">
          <Search />
        </div>
        <div className="add-action">
          <button onClick={handelCreateAction} >
            إضافة مكتب
          </button>
        </div>
      </div>
      <OfficeCard />
    </div>
  )
}

export default Offices;