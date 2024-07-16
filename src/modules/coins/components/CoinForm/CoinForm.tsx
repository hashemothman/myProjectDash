import './CoinForm.css'
import ImageDefulte from './../../../../assets/ImageDefulte.jpg'
import Flag from './../../../../assets/flag/USA_Coin.png'
import ArrowLeft from './../../../../assets/nav-link-icons/ArrowLeft.svg'
// import { useState } from 'react'
// import { TCoin } from '../../type'
// import { useParams } from 'react-router-dom'
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CoinForm = () => {

    // const [coin, setCoin] = useState<TCoin>();
    // const { id } = useParams<{ id: string }>();
    const [file, setFile] = useState<string | File | null>(ImageDefulte);

    const triggerFileInput = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();

        const fileInputElement = document.getElementById('fileInput') as HTMLInputElement | null;
        if (fileInputElement) {
            fileInputElement.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFile(file);
    };

    return (
        <div className='add-coin'>
            <div className="header">
                <div className="nav-link">
                    <img src={ArrowLeft} alt="" />
                    <Link to='/home/coins'>العملات</Link>
                    <span className='slash'>/</span>
                    <span className='navigate-submain'>إضافة عملة</span>
                </div>
                <button>
                    حفظ
                </button>
            </div>
            <form className='coin-form' >
                <div className="input">
                    <label htmlFor="coin_image">صورة العملة</label>
                    <img onClick={triggerFileInput} className='input-file' src={file ? (typeof file === 'string' ? file : URL.createObjectURL(file)) : ImageDefulte} alt="صورة العملة" />
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleFileChange} // Ensure handleFileChange is used here
                        style={{ display: "none" }}
                    />
                </div>
                <div className="input">
                    <label htmlFor="coin_name">اسم العملة</label>
                    <input type="text" name="coin_name" id="coin_name" placeholder='أدخل الاسم بالكامل' />
                </div>
                <div className="input">
                    <label htmlFor="coin_name">نسبة العمولة من كل عملية تحويل</label>
                    <div className="commission-rate-input">
                        <input type="text" name="coin_name" id="coin_name" placeholder='أدخل النسبة' />
                        <TbSquareRoundedPercentage />
                    </div>
                </div>
                <div className="hr">
                    <div></div>
                </div>
                <div className="exchange-prices">
                    <div className="label">أسعار الصرف</div>
                    <div className="labels">
                        <div className="label exchange-rate">
                            سعر الصرف مقابل
                        </div>
                        <div className="label sale">
                            شراء
                        </div>
                        <div className="label buy">
                            مبيع
                        </div>
                    </div>
                    <div className="inputs">
                        <div className="coin-info">
                            <img src={Flag} alt="" />
                            <div className="coin-name">عملة</div>
                        </div>
                        <input type="text" placeholder='شراء' />
                        <input type="text" placeholder='مبيع' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CoinForm