import { useNavigate } from 'react-router-dom';
import Search from '../../../sharedComponents/Search/Search';
import "./Percents.css"
import PercentCard from '../components/PercentCard/PercentCard';
const Percents = () => {
  const navegate = useNavigate();
  const handelCreateAction = () => {
    navegate('/home/percents/add')
  }
  return (
    <div className='percent'>
      <div className="percent-header">
        <div className="search-input">
          <Search />
        </div>
        <div className="add-action">
          <button onClick={handelCreateAction} >
            إضافة نسبة مئوية
          </button>
        </div>
      </div>
      <PercentCard value={10} coin={"Dolar"} operation={"external"} />
      <PercentCard value={10} coin={"Dolar"} operation={"external"} />
      <PercentCard value={10} coin={"Dolar"} operation={"external"} />
    </div>
  )
}

export default Percents