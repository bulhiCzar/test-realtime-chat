import s from '../style/History.module.scss';
import {AppContext} from "../App";
import {useContext, useEffect, useRef} from "react";
import axios from "axios";


const History = () => {
    const {state, dispatch} = useContext(AppContext)
    const scrollRef = useRef()

    const loadHistory = async () => {
        try {
            const res = await axios.get('/api/chat/')
            if (res.status !== 200) throw new Error()
            dispatch({
                type: 'load',
                payload: res.data
            })

            scrollRef.current.scrollTop = scrollRef.current.scrollHeight

            await loadHistory()
        } catch (e) {
            setTimeout(loadHistory, 500)
        }
    }

    useEffect(() => {
        loadHistory()
    }, [])


    return (
        <div className={s.history} ref={scrollRef}>
            {
                state.messages.length ?
                    state.messages.map((message, idx) => {
                        return (
                            <div className={s.historyMessage} key={idx}>
                                <div className={s.historyMessageSender}>
                                    {message.sender}
                                </div>
                                <div className={s.historyMessageText}>
                                    {message.text}
                                </div>
                            </div>
                        )
                    })
                    :
                    <div className={s.historyEmpty}>Нет сообщений</div>
            }
        </div>
    )
}

export default History