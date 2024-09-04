import PalanceCard from "../../components/PalanceCard/PalanceCard";
import "./UserInfoPage.css";
import syria from "../../../../assets/flag/syria.png"
import iraq from "../../../../assets/flag/iraq.png"
import usa from "../../../../assets/flag/USA.png"
import UserInfoCard from "../../components/UserIfoCard/UserInfoCard";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsPrinter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import UserInfoBody from "../../components/UserInfoBody/UserInfoBody";


const UserInfoPage = () => {

    const navigate = useNavigate();
  // يقوم بالرجوع إلى الصفحة السابقة
    const handleGoBack = () => {
      navigate(-1); 
    };
  return (
    <>
    <div className="ho-user-info-page-header">
      <UserInfoCard/>
    <div className="ho-info-user-cards-secund">
    <div className="ho-info-user-cards-secund-clild1">
      <div className="ho-info-user-cards-secund-arrow">
      <IoIosArrowRoundForward  size={30} color="#354359" onClick={handleGoBack}/>
      <p onClick={handleGoBack}>المستخدمين /</p>
      <p>123456</p>
      </div>
      <button className="ho-print-button"><BsPrinter size={20}/> <span>طباعة معلومات المستخدم</span>
      </button>
    </div>
      <div className="ho-info-user-cards-secund-child"> 
         <PalanceCard
        name="ليرة سورية"
        image={syria}
        palance={200.2}
        title="رصيد المحفظة"
        palanceButton="yes"
        widthCard="30%"
      />
      <PalanceCard
        name="ليرة سورية"
        image={iraq}
        palance={200.2}
        title="رصيد المحفظة"
         palanceButton="yes"
         widthCard="30%"
      />
      <PalanceCard
        name="ليرة سورية"
        image={usa}
        palance={200.2}
        title="رصيد المحفظة"
        palanceButton="yes"
        widthCard="30%"
      /></div>
    
    </div>
    </div>
    <div className="ho-user-info-body">
        <UserInfoBody/>
      </div>
    </>
  );
};

export default UserInfoPage;
