import Logo from './../../../public/logo.png'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import { FaChartLine, FaUsers, FaUserTie, FaDollarSign, FaFileInvoiceDollar, FaBook, FaUserCog, FaHeadset, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="header"></div>
                <span className="side-logo">
                    <img src={Logo} alt="Logo" loading='lazy' />
                </span>
                <div className="main">
                    <ul >
                        <li>
                            <NavLink to='/Reports'
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                <FaChartLine  className='icon' />
                                <span>التقارير</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/users'
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                <FaUsers className='icon' />
                                <span>المستخدمين</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/agents'
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                <FaUserTie className='icon' />
                                <span>الوكلاء</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/coins'
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                <FaDollarSign  className='icon' />
                                <span>العملات</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/invoices'
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                <FaFileInvoiceDollar className='icon' />
                                <span>المصاريف</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/offices'
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                <FaBook className='icon' />
                                <span>المكاتب</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/employees'
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                <FaUserCog className='icon' />
                                <span>الموظفين</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/services'
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                <FaHeadset className='icon' />
                                <span>خدمة العملاء</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/settings'
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                <FaCog className='icon' />
                                <span>الإعدادات</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="logout">
                        <li>
                            <Link to='/auth'>
                                <FaSignOutAlt className='icon' />
                                <span>تسجيل الخروج</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
