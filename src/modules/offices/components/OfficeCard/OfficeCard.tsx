import './OfficeCard.css'
import UpdateBtn from './../../../../assets/actions/update.png';
import DeleteBtn from './../../../../assets/actions/delete.png';
import Office from './../../../../assets/Office.png';

const OfficeCard = () => {
  return (
    <div className="office-item">
      <div className='office-card'>
        <div className="office-info">
          <div className="office-image">
            <img src={Office} alt='' />
          </div>
          <div className="office-details">
            <p>مكتب سوريا</p>
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

export default OfficeCard