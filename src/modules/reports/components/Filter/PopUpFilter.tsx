import PrintButton from "../../../../sharedComponents/PrintButton/PrintButton";
import "./PopUpFilter.css";
import Form from "react-bootstrap/Form";

const PopUpFilter = () => {
  return (
    <div className="ho-popup-filter">
      <label htmlFor="select"> نوع العملة</label>
      <Form.Select aria-label="Default select example">
        <option>اختر من القائمة</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <label htmlFor="select" style={{ paddingTop: "1rem" }}>
        {" "}
        المكتب{" "}
      </label>
      <Form.Select aria-label="Default select example">
        <option>اختر من القائمة</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>

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
      <div style={{ paddingTop: "2rem" }}>
      <PrintButton />
      </div>
    </div>
  );
};

export default PopUpFilter;
