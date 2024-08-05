import React, { useState } from 'react'
import "./InvoiceForm.css"
import ArrowLeft from './../../../../assets/nav-link-icons/ArrowLeft.svg'
import { Link } from 'react-router-dom';
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdOutlineUploadFile } from "react-icons/md";
import Form from "react-bootstrap/Form";

const InvoiceForm = () => {

  const [file, setFile] = useState<string | File | null>();
  const triggerFileInput = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();

      const fileInputElement = document.getElementById('fileInput') as HTMLInputElement | null;
      if (fileInputElement) {
          fileInputElement.click();
      }
  };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFile(file);
};
  return (
    <div className='add-invoice'>
      <div className="header">
          <div className="nav-link">
              <img src={ArrowLeft} alt="" />
              <Link to='/home/invoices'>المصاريف</Link>
              <span className='slash'>/</span>
              <span className='navigate-submain'>إضافة فاتورة</span>
          </div>
          <button>
              حفظ
          </button>
      </div>
      <form className='invoice-form' >
        <div className="input">
            <label>حدد المكتب</label>
            <select className="form-select" aria-label="Default select example">
                <option>اختر من القائمة</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div className="input">
            <label>نوع القائمة</label>
            <select className="form-select" aria-label="Default select example">
                <option>اختر من القائمة</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div className="input">
            <label htmlFor="invoice-number">رقم الفاتورة</label>
            <input type="text" name="invoice_number" id="invoice-number" placeholder='أدخل رقم الفاتورة' />
        </div>
        <div className="input">
          <div>
            <label htmlFor="select" style={{ paddingTop: "1rem" }}>
              تاريخ
            </label>
            <Form.Control type="date" />
          </div>
        </div>
        <div className="input">
            <label>نوع العملة</label>
            <select className="form-select" aria-label="Default select example">
                <option>اختر من القائمة</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div className="input">
            <label htmlFor="invoice_value">مبلغ الفاتورة</label>
            <div className="invoice-value-input">
                <input type="text" name="invoice_value" id="invoice_value" placeholder='أدخل مبلغ الفاتورة بالدولار الامريكي' />
                <RiMoneyDollarBoxLine />
            </div>
        </div>
        <div className="input">
            <label htmlFor="invoice-file">صورة الفاتورة</label>
            <div className="invoice-file-input">
              <div onClick={triggerFileInput}>اضغط هنا لرفع صورة الفاتورة</div>
              <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  style={{display:"none"}}
              />
              <MdOutlineUploadFile />
            </div>
        </div>
      </form>
    </div>
  )
}

export default InvoiceForm
