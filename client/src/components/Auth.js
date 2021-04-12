import s from '../style/Auth.module.scss'
import {useContext, useState} from "react";
import {AppContext} from "../App";
import Button from "../uikit/Button";
import Input from "../uikit/Input";

const Auth = ()=>{
    const {dispatch} = useContext(AppContext)
    const [input, setInput] = useState('')

    function handlerInput(e) {
        setInput(e.target.value)
    }

    function submit(e) {
        e.preventDefault()
        if (!input) return

        dispatch({
            type: 'login',
            payload: input
        })
    }

    return(
        <div className={s.auth}>
            <div className={s.authTitle}>
                Авторизация
            </div>
            <form onSubmit={submit} className={s.authBody}>
                <Input
                    className={s.authBodyInput}
                    placeholder='Имя'
                    value={input}
                    onChange={handlerInput}
                />
                <Button
                    className={s.authBodyBtn}
                    text='Войти'
                />
            </form>
        </div>
    )
}

export default Auth