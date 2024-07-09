import faceImage from '../../../assets/icons/face.svg'
import marketImage from '../../../assets/icons/market.svg'
import Search from '../../../sharedComponents/Search/Search';

import CountInfo from "../components/CountInfo/CountInfo";
import ReportItem from '../components/ReportItem/ReportItem';
import './Reports.css';
const Reports = () => {
  return (
    <div className="reports" style={{position:'relative'}}>
      <div className="ho-report-heder">
      <CountInfo title="عدد المستخدمين" number={2500} iconName={faceImage} imgAlt="face image basfast"/>
      <CountInfo title="عدد الوكلاء" number={500} iconName={marketImage} imgAlt="market image basfast"/>
      </div>
      <Search/>
      <div className='ho-report-section'>
        <ReportItem title='التحويلات' description='جميع التحويلات ضمن المنصة'/>
        <ReportItem title='التحويلات الخارجية' description='جميع الحوالات الواردة من الخارج عن طريق الحساب البنكي'/>
        <ReportItem title='الحركة ضمن فترة معينة' description='حركة التطبيق والنشاط ضمن فترة معينة'/>
        <ReportItem title='الأرباح' description='ارباح المنصة بعد خصم جميع التكاليف'/>
        <ReportItem title='الشكاوي' description='تقرير عن الشكاوي التي تسجل لدينا بالطرق المختلفة'/>
      </div>
  
  </div>
  )
}

export default Reports;
