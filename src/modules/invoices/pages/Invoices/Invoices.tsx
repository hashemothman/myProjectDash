import Button from "../../../../sharedComponents/Button/Button";
import InvoiceChart from "../../components/InvoiceChart";
import IncoiceStatus from "../../components/InvoicesStatus/IncoiceStatus";
import InvoiceStatistics from "../../components/InvoiceStatistics/InvoiceStatistics";
import SumInvoiceCard from "../../components/SumInvoiceCard/SumInvoiceCard";
import { GoArrowDown } from "react-icons/go";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Invoices = () => {
  const data = [
    {
        label:"عمولات",
        value:24,
        color:'rgb(255, 99, 132)',
        date :"22-8-2024"

    },
    {
        label:"نثريات",
        value:24,
        color:'rgb(54, 162, 235)',
        date :"22-8-2024"

    },
    {
        label:"رواتب",
        value:24,
        color:'rgb(255, 205, 86)',
        date :"22-8-2024"

    },
    {
        label:"ايجار",
        value:24,
        color:'rgb(255, 150, 70)',
        date :"22-8-2024"
    },

]
const navegate = useNavigate();

  const handleOnClick = () => {
    navegate('/home/invoices/add')

  }
  return (
    <div className="invoices">
      <InvoiceChart/>
      <SumInvoiceCard/>
      {
        data.map((data,index)=>{
          return (
            <InvoiceStatistics key={index} color={data.color} title={data.label} value={data.value}/>
          );
        })
      }
      {
        data.map((data,index)=>{
          return (
            <IncoiceStatus key={index} icon={<GoArrowDown/>} value={data.value} title={data.label}  date={data.date}/>
          );
        })
      }

      <select className="form-select" aria-label="Default select example">
        <option>جميع المكاتب </option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select className="form-select" aria-label="Default select example">
        <option>جميع الفواتير </option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div className="ho-popup-filter-date">
        <div>
          <label htmlFor="select" style={{ paddingTop: "1rem" }}>
            من تاريخ:
          </label>
          <Form.Control type="date" />
        </div>
        <div>
          <label htmlFor="select" style={{ paddingTop: "1rem" }}>
            إلى تاريخ:
          </label>
          <Form.Control type="date" />
        </div>
        </div>
      <Button title={"اضافة فاتورة"} icon onclick={handleOnClick}/>

    </div>
  )
}

export default Invoices;