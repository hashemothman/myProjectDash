import './UserIfoCard.css'
import image from '../../../../assets/person.jpeg'

const UserInfoCard = () => {
  return (
    <div className='ho-info-user-card'>
        <img src={image} alt="" width={100} height={100}/>
        <h1 className='ho-info-user-card-name'>محمد الاحمد</h1>
        <h2 className='ho-info-user-card-id'>123456789</h2>
        <button className='ho-info-user-card-complaint'>شكاوي المستخدم</button>
        <button className='ho-info-user-card-off'>إيقاف الحساب مؤقتاً</button>
    </div>
  )
}

export default UserInfoCard