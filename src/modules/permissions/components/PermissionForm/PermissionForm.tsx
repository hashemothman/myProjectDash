import React from 'react'
import { Link } from 'react-router-dom'
import ArrowLeft from './../../../../assets/nav-link-icons/ArrowLeft.svg'
import "./PermissionForm.css"
const PermissionForm = () => {
  return (
    <div className='permissions-form-page'>
    <div className="header">
        <div className="nav-link">
            <img src={ArrowLeft} alt="" />
            <Link to='/home/permissions'>السماحيات</Link>
            <span className='slash'>/</span>
            <span className='navigate-submain'>إضافة سماحية</span>
        </div>
        <button>
            حفظ
        </button>
    </div>
    <form className='office-form' >
        <div className="input">
            <label htmlFor="office_name">السماحية</label>
            <input type="text" name="office_name" id="office_name" placeholder='ادخل اسم المكتب' />
        </div>
    </form>
</div>
  )
}

export default PermissionForm