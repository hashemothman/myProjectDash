import { useNavigate } from 'react-router-dom';
import Search from '../../../sharedComponents/Search/Search';
import PermissionCard from '../components/PermissionCard/PermissionCard';
import "./Permissions.css"
const Permissions = () => {
  const navegate = useNavigate();
  const handelCreateAction = () => {
    navegate('/home/permissions/add')
  }
  return (
    <div className='permission'>
      <div className="permission-header">
        <div className="search-input">
          <Search />
        </div>
        <div className="add-action">
          <button onClick={handelCreateAction} >
            إضافة سماحية
          </button>
        </div>
      </div>
      <PermissionCard name={"السماحية الاولى"} />
      <PermissionCard name={"السماحية الاولى"} />
      <PermissionCard name={"السماحية الاولى"} />
      <PermissionCard name={"السماحية الاولى"} />
    </div>
  )
}

export default Permissions