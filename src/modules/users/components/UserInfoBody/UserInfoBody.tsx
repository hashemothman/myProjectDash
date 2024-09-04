import './UserInfoBody.css'
import image from './../../../../assets/idnumber.png'
const UserInfoBody = () => {
  return (
    <div className='ho-user-info-body'>
        <h1 className="ho-user-info-body-title">معلومات الحساب</h1>
        <div className="ho-body-infos">
            <div>
              <h1>الرقم التعريفي للحساب</h1>
              <h2>@123456789123456789</h2>
            </div>
            <div>
              <h1>الاسم الكامل</h1>
              <h2>احمد الاحمد</h2>
            </div>
            <div>
              <h1>رقم الجوال</h1>
              <h2>+963997744645</h2>
            </div>
            <div>
              <h1>البريد الالكتروني</h1>
              <h2>test@test.com</h2>
            </div>
            <div>
              <h1>البلد</h1>
              <h2>ٍSyria</h2>
            </div>
            <div>
              <h1>المدينة</h1>
              <h2>Homs</h2>
            </div>
            <div>
              <h1>العنوان</h1>
              <h2>حارة السوق</h2>
            </div>
            <div>
              <h1>رقم الوثيقة</h1>
              <h2>@123456789123456789</h2>
            </div>
            <div>
              <h1>صورة الوثيقة</h1>
              <div>
              <img src={image} alt="" />
              <img src={image} alt="" />
              </div>
            </div>
            <h1 className="ho-user-info-body-title">العمليات</h1>

        </div>
    </div>
  )
}

export default UserInfoBody