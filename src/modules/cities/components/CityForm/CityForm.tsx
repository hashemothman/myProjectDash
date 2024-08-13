import './CityForm.css'
import { Link } from 'react-router-dom'
import ArrowLeft from './../../../../assets/nav-link-icons/ArrowLeft.svg'

const CityForm = () => {
  return (
    <div className='YS-cities-form-page'>
        <div className="header">
            <div className="nav-link">
                <img src={ArrowLeft} alt="" />
                <Link to='/home/cities'>المدن</Link>
                <span className='slash'>/</span>
                <span className='navigate-submain'>إضافة مدينة</span>
            </div>
            <button>
                حفظ
            </button>
        </div>
        <form className='YS-city-form' >
            <div className="input">
                <label htmlFor="city_name">اسم المدينة</label>
                <input type="text" name="city_name" id="city_name" placeholder='ادخل اسم المدينة' />
            </div>
            <div className="input">
                <label htmlFor="city_state">الحالة</label>
                <select className="form-select YS-select" aria-label="Default select example">
                    <option value={1}>مفعلة</option>
                    <option selected value={0}>غير مفعلة</option>
                </select>
            </div>
        </form>
    </div>
)
}

export default CityForm