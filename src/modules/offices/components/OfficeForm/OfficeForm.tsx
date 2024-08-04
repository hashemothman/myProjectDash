import { Link } from 'react-router-dom'
import ArrowLeft from './../../../../assets/nav-link-icons/ArrowLeft.svg'
import './OfficeForm.css'

const OfficeForm = () => {
    return (
        <div className='offices-form-page'>
            <div className="header">
                <div className="nav-link">
                    <img src={ArrowLeft} alt="" />
                    <Link to='/home/offices'>المكاتب</Link>
                    <span className='slash'>/</span>
                    <span className='navigate-submain'>إضافة عملة</span>
                </div>
                <button>
                    حفظ
                </button>
            </div>
            <form className='office-form' >
                <div className="input">
                    <label htmlFor="office_name">اسم المكتب</label>
                    <input type="text" name="office_name" id="office_name" placeholder='ادخل اسم المكتب' />
                </div>
                <div className="input">
                    <label htmlFor="office_name">المدينة</label>
                    <input type="text" name="office_name" id="office_name" placeholder='ادخل اسم المدينة' />
                </div>
                <div className="input">
                    <label htmlFor="office_name">العنوان</label>
                    <input type="text" name="office_name" id="office_name" placeholder='ادخل العنوان' />
                </div>
            </form>
        </div>
    )
}

export default OfficeForm