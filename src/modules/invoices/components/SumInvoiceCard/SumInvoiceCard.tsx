import React from 'react'
import "./SumInvoiceCard.css"
// import Form from "react-bootstrap/Form";

const SumInvoiceCard = () => {
    return (
        <div className='sumInvoiceCard'>
            <div className='InvoiceCard-header-AY'>
                <h3>مجموع المصاريف</h3>
                <h2>$445,000</h2>
            </div>
            <div className="InvoiceCard-filter-AY">
            {/* TODO:  تحويل من قائمة الى اختيار تاريخ ومعالجة التاريخ في الباك ليأخذ الشهر والسنة ويفلتر عليها  */}
                <select className="form-select" aria-label="Default select example">
                    <option>YYYY/MM</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    )
}

export default SumInvoiceCard
