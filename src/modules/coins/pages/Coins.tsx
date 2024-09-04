import './Coin.css'
import CoinItem from "../components/CoinItem/CoinItem";
// import { useState } from 'react';
// import axios from 'axios';
// import { TCoin } from '../type';
import { useNavigate } from 'react-router-dom';
import PalanceCard from '../../users/components/PalanceCard/PalanceCard';
import syria from "../../../assets/flag/syria.png"
import usa from "../../../assets/flag/USA.png"
import axios from 'axios';
import Cookies from 'cookie-universal';


const Coins = () => {

  // const [coinsData, setCoinsData] = useState<TCoin[]>([]);
  // const [update, setUpdate] = useState(false);

  const navegate = useNavigate();

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/api/admin/coins')
  //     .then(res => setCoinsData(res.data.data))
  //     .catch(err => console.log(err))
  //     .finally(() => console.log(coinsData));
  // }, [update]);
  const cookie = Cookies();
  const token = cookie.get('BF-secret_key');

  axios.get('https://app.basfast.com/api/admin/coins', {
      headers: {
          Authorization: 'Bearer ' + token ,
          "Content-Type": "application/json" // تحديد نوع المحتوى بشكل صحيح
        }
  })
  .then(response => {
      console.log(response.data.data); // طباعة البيانات المستلمة
  })
  .catch(error => {
      console.error('Error during request:', error); // طباعة الخطأ إذا حدث
  });

  const handelCreateAction = () => {
    navegate('/home/coins/add')
  }

  return (
    <div className='coin-section'>
      <div className="card-coin-balance">
        <PalanceCard name='ليرة سورية' image={syria} palance={200.2} />
        <PalanceCard name='دولار امريكي' image={usa} palance={200.2} />
      </div>
      <div className="coin-items">
        <div className="add-action">
          <button onClick={handelCreateAction}>
            إضافة عملة
          </button>
        </div>
        {/* {coinsData.map((coin) => {
          return <CoinItem key={coin.id} coin={coin} update={update} setUpdate={setUpdate} />
        })} */}
        <CoinItem  coin_name="ليرة سورية" country_flag=''  />
      </div>
    </div>
  )
}

export default Coins;