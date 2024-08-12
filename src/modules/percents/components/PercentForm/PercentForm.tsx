import React from 'react'
import { Link } from 'react-router-dom'
import ArrowLeft from './../../../../assets/nav-link-icons/ArrowLeft.svg'
import "./PercentForm.css"
const PercentForm = () => {
  return (
    <div className='percents-form-page'>
        <div className="header">
            <div className="nav-link">
                <img src={ArrowLeft} alt="" />
                <Link to='/home/percents'>النسب المئوية</Link>
                <span className='slash'>/</span>
                <span className='navigate-submain'>إضافة نسبة</span>
            </div>
            <button>
                حفظ
            </button>
        </div>
        <form className='percent-form' >
            <div className="input">
                <label htmlFor="percent_name">النسبة <span style={{ fontSize:"0.7rem" }}>(قيمة من 0 الى 100)</span></label>
                <input type="text" name="percent_name" id="percent_name" placeholder='ادخل اسم المكتب' />
            </div>
            <div className="input">
                <label>حدد العملة</label>
                <select className="form-select" aria-label="Default select example">
                    <option>اختر من القائمة</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="input">
                <label>حدد نوع عملية التحويل</label>
                <select className="form-select" aria-label="Default select example">
                    <option>اختر من القائمة</option>
                    <option value="1">internal</option>
                    <option value="2">external</option>
                </select>
            </div>
        </form>
</div>
  )
}

export default PercentForm