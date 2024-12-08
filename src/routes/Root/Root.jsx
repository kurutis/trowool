import { Link, NavLink, Outlet } from 'react-router-dom'
import s from './Root.module.css'
import {SearchBar} from '../../components/search_menu/search'
import logo from '../../assets/logo.svg'
import basket from '../../assets/basketIcon.svg'
import profile from '../../assets/profileIcon.svg'
import Video from '../../assets/Video/video.mp4'
import down from '../../assets/down.svg'
import { useEffect, useRef, useState } from 'react'
import phone from '../../assets/phone.svg'
import email from '../../assets/email.svg'
import whatsapp from '../../assets/whatsapp.svg'
import {Modal} from '../../components/Modal_profile/Modal'
import  {User} from '../../components/User_profile/User'
import  {AuthForm}  from '../../components/AuthForm_profile/AuthForm'




export const Root = () =>{
    const targetRef = useRef(null)

    const scroll = () => {
        if(targetRef.current){
            targetRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [user, setUser] = useState(null);

    const handleOpenProfile = (user) => {
        setUser(user);
        setShowProfile(true);
        setIsModalOpen(false);
    };


    return(
        <>
        <header className={s.header}>
                <div className={s.container}>
                    <div className={s.header_items}>
                        <div className={s.name}>
                            <Link className={s.logo}><img src={logo}   alt="logo" /></Link>
                            <h2 className={s.header_h2}><span>Троицкая</span> камвольная фабрика</h2>
                        </div>
                        <ul className={s.menu}>
                            <li>
                                <SearchBar />
                            </li>
                            <li>
                                <ul className={s.icons}>
                                    <li>
                                        <Link><img src={basket} height={45.26} alt="" /> <p>Корзина</p></Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setIsModalOpen(true)}><img src={profile} alt="" /> <p>Личный кабинет</p></Link>
                                        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                                            {showProfile ? (
                                                <User />
                                            ) : (
                                                <AuthForm onSuccess={handleOpenProfile} />
                                            )}
                                        </Modal>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
        </header>
        <div>
                <div className={s.video_container}>
                    <video loop="loop" src={Video} autoPlay="true" className={s.video} />
                    <button onClick={scroll} className={s.btn}> Вниз <img src={down} alt="" /></button>
                </div>
                <div className={s.container}>
                    <ul ref={targetRef} className={s.navigation}>
                        <NavLink className={({isActive, isPending}) => isActive ? s.active : isPending ? s.loading: s.btnNav} to={'About'}><li>О магазине</li></NavLink>
                        <NavLink className={({isActive, isPending}) => isActive ? s.active : isPending ? s.loading: s.btnNav} to={'Shop'}><li>Товары</li></NavLink>
                        <NavLink className={({isActive, isPending}) => isActive ? s.active : isPending ? s.loading: s.btnNav} to={'Feedbacks'}><li>Отзывы</li></NavLink>
                    </ul>
                </div>
        </div>
        <div>
            <Outlet />
        </div>
        <footer>
            <div className={s.container}>
                <div className={s.footer_text}>
                    <div className={s.name}>
                        <Link className={s.logo}><img src={logo}   alt="logo" /></Link>
                        <h2 className={s.header_h2}><span>Троицкая</span> камвольная фабрика</h2>
                    </div>
                        <div className={s.contact}>
                            <p>Для оптовых клиентов:</p>
                            <p><span><img src={phone} alt="" /></span> +7 (495) 850 18 48</p>
                            <p>Фирменный магазин:</p>
                            <p><span><img src={phone} alt="" /></span> +7 (495) 851-50-66</p> 
                            <p>время работы с 9 до 21</p>
                            <p>Для розничных клиентов:</p>
                            <p><span><img src={phone} alt="" /></span> +7 (495) 546-97-54</p>
                            <p>график работы: ПН-ПТ с 8.30 до 17.30</p>
                            <div className={s.footer_links}>
                                <Link to='mailto:shop@troitskwool.com' target='_blanck'><img src={email} alt="" /></Link>
                                <Link to='https://wa.me/79661101244' target='_blanck'><img src={whatsapp} alt="" /></Link>
                            </div>
                        </div>
                        <div className={s.info}>
                                <p>108842, Россия, г.Москва, г.Троицк, Фабричная площадь, дом 1</p>
                                <p>ОГРН: 1125003003531</p>
                                <p>ИНН/КПП: 5046075590/775101001</p>
                        </div>
                </div>
                    
                    <div className={s.span}>
                        <span>
                            © 2009 – 2024 Troitskwool. Все права защищены.
                        </span>
                    </div>
            </div>
        </footer>
        </>
    )
}
