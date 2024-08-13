import { Link } from 'react-router-dom'
import ArrowLeft from './../../../../assets/nav-link-icons/ArrowLeft.svg'
import './CountryForm.css'

const CountryForm = () => {
    return (
        <div className='YS-countries-form-page'>
            <div className="header">
                <div className="nav-link">
                    <img src={ArrowLeft} alt="" />
                    <Link to='/home/countries'>الدول</Link>
                    <span className='slash'>/</span>
                    <span className='navigate-submain'>إضافة دولة</span>
                </div>
                <button>
                    حفظ
                </button>
            </div>
            <form className='YS-country-form' >
                <div className="input">
                    <label htmlFor="country_name">اسم الدولة</label>
                    <input type="text" name="country_name" id="country_name" placeholder='ادخل اسم الدولة' />
                </div>
                <div className="input">
                    <label htmlFor="country_state">الحالة</label>
                    <select className="form-select YS-select" aria-label="Default select example">
                        <option value={1}>مفعلة</option>
                        <option selected value={0}>غير مفعلة</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default CountryForm