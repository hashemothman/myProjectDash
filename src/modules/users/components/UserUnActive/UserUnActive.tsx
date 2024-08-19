import { FaEye } from "react-icons/fa";
import { ImSpinner3 } from "react-icons/im";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import image from "../../../../assets/icons/person.png";
import "./UserUnActive.css";
import DeleteBtn from "./../../../../assets/actions/delete.png";
import UpdateBtn from "./../../../../assets/actions/update.png";
import { Link } from "react-router-dom";

const UserUnActive = (props: { type: string }) => {
  return (
    <div>
      {props.type == "active" ? null : (
        <h1 className="ho-no-active-title">حسابات تحتاج مراجعة</h1>
      )}
      <div className="ho-user-item-no-active">
        <div className="ho-info-user">
          <img src={image} alt="" height="64" width="64" />
          <div className="ho-user-info-item-no-acrive">
            <h1>محمد الأحمد</h1>
            <h2>@1465324</h2>
            <h3>
              mhmd@healthexpress.com{" "}
              <span>
                <IoCheckmarkCircleOutline />
              </span>
            </h3>
          </div>
        </div>
        <div className="ho-no-active-action">
          <div>
            <Link to='user-info'>
            <FaEye />
            </Link>
          </div>
          {props.type == "active" ? (
            <div className="ho-icon-user-action">
              <div>
                <img src={DeleteBtn} alt="delete" />
              </div>
              <div>
                <img src={UpdateBtn} alt="update" />
              </div>
            </div>
          ) : (
            <div className="ho-no-active-button">
              <ImSpinner3 />
              <p>في انتظار المراجعة</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserUnActive;
