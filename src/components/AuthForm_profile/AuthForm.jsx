import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/forProfileAction';
import { User } from '../User_profile/User';
import s from './AuthForm.module.css'

export const AuthForm = ({ onSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snp, setSnp] = useState(''); 
    const [phone, setPhone] = useState(''); 
    const [nick, setNick] = useState(''); 

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.email === email) { 
                dispatch(login(storedUser));
                onSuccess(storedUser);
            } else {
                alert("Неправильный логин или пароль");
            }
        } else {
            const newUser = { email, password, snp, phone, nick };
            localStorage.setItem('user', JSON.stringify(newUser));
            dispatch(login(newUser));
            onSuccess(newUser);
        }
    };

    return (
        <div className={s.form_container}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
                    <input className={s.form_input}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id ='one'
                        required
                    />
                    <input className={s.form_input}
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {!isLogin && (
                        <>
                            <input className={s.form_input}
                                type="text"
                                placeholder="ФИО"
                                value={snp}
                                onChange={(e) => setSnp(e.target.value)}
                                required
                            />
                            <input className={s.form_input}
                                type="tel"
                                placeholder="Телефон"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <input className={s.form_input}
                                type="text"
                                placeholder="Ник"
                                value={nick}
                                onChange={(e) => setNick(e.target.value)}
                                required
                            />
                        </>
                    )}
                    <button className={s.form_btn} type="submit" onClick={<User />}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
                    <p onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войти'}
                    </p>
            </form>
        </div>
    );
};