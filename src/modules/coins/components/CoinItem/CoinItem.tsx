import './CoinItem.css'
import UpdateBtn from './../../../../assets/actions/update.png';
import DeleteBtn from './../../../../assets/actions/delete.png';
import ShowBtn from './../../../../assets/actions/show.png';
import React from 'react';
import { TCoin } from '../../type';
import axios from 'axios';

type TCoinItem = {
    coin: TCoin;
    update: boolean;
    setUpdate(update: boolean) : void
}

const CoinItem: React.FC<TCoinItem> = ({ coin, update, setUpdate }) => {

    const handelDeleteAction = (id: number)=>{
        axios.delete(`http://127.0.0.1:8000/api/delete_coin/${id}`)
        .then((res)=> console.log('message: ',res.data.message))
        .catch((err)=> console.error(err))
        .finally(()=>setUpdate(!update))
   }

    return (
        <div className="coin-item">
            <div className='coin-card'>
                <div className="coin-info">
                    <img src={typeof coin.country_flag === 'string' ? coin.country_flag : ''} alt={coin.coin_name} />
                    <div className="coin-details">
                        <p>{coin.coin_name}</p>
                    </div>
                </div>
                <div className="actions">
                    <img src={ShowBtn} alt="show" />
                    <img src={UpdateBtn} alt="update" />
                    <img onClick={()=>handelDeleteAction(coin.id)} src={DeleteBtn} alt="delete" />
                </div>
            </div>
        </div>
    )
}

export default CoinItem