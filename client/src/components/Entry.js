import Input from "../uikit/Input";
import s from '../style/Entry.module.scss'
import Button from "../uikit/Button";
import {useContext, useState} from "react";
import {AppContext} from "../App";
import axios from "axios";

const Entry = ()=>{
    const {state, dispatch} = useContext(AppContext)
    const [input, setInput] = useState('')

    function handlerInput(e) {
        setInput(e.target.value)
    }

    async function submit(e) {
        e.preventDefault()
        if (!input) return

        setInput('')

        const res = await axios.post('/api/chat/', {text: input, sender: state.name})
        if (res.status !== 200) {
            console.log('error')
        }
    }

    return(
        <form onSubmit={submit} className={s.entry}>
            <Input
                className={s.entryInput}
                value={input}
                onChange={handlerInput}
            />
            <Button className={s.entryButton} text={<SendSvg/>}/>
        </form>
    )
}

const SendSvg = ()=>(
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="26" height="26" viewBox="0 0 16 16">
        <path fill="#444444" d="M16 0l-16 8 4.7 1.6 0.3 5.4 2.5-2.8 2.5 3.8 6-16zM7.5 10.4l4.3-5.9-6.2 4.3-3-1 11.6-5.8-4.5 11.8-2.2-3.4z"/>
    </svg>
)

export default Entry