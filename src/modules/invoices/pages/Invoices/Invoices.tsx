import Button from "../../../../sharedComponents/Button/Button";
import InvoiceChart from "../../components/InvoiceChart";
import IncoiceStatus from "../../components/InvoicesStatus/IncoiceStatus";
import InvoiceStatistics from "../../components/InvoiceStatistics/InvoiceStatistics";
import SumInvoiceCard from "../../components/SumInvoiceCard/SumInvoiceCard";
import { GoArrowDown } from "react-icons/go";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Invoices.css";

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
      <div className="container">
        <div className="header">
          <div className="cards">
            <SumInvoiceCard/>
            <div className="percent-cards">
            {
              data.map((data,index)=>{
                return (
                    <div className="col" style={{ marginTop:"5px" }}>
                      <InvoiceStatistics key={index} color={data.color} title={data.label} value={data.value}/>
                    </div>
                );
              })
            }
            </div>
          </div>
          <div className="chart">
            <InvoiceChart/>
          </div>
        </div>
        <div className="filter">
          <div className="lists"> 
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
            <div className="filter-date">
              <div className="date">
                <label htmlFor="select" style={{ paddingTop: "1rem" }}>
                  من تاريخ:
                </label>
                <Form.Control type="date" />
              </div>
              <div className="date" style={{ marginRight: "80px"}} >
                <label htmlFor="select" style={{ paddingTop: "1rem" }}>
                  إلى تاريخ:
                </label>
                <Form.Control type="date"/>
              </div>
            </div>
          </div>
          <div className="button" style={{ marginLeft:"4rem" }}>
            <Button title={"اضافة فاتورة"} icon onclick={handleOnClick}/>
          </div>
        </div>
        <div style={{ marginLeft:"4rem" }}>
          {
            data.map((data,index)=>{
              return (
                <IncoiceStatus key={index} icon={<GoArrowDown/>} value={data.value} title={data.label}  date={data.date}/>
              );
            })
          }
        </div>
      

      </div>


    </div>
  )
}

export default Invoices;