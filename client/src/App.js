import s from './style/App.module.scss';
import reducer from "./reducer";
import {useReducer, createContext} from "react";
import Auth from "./components/Auth";
import History from "./components/History";
import Entry from "./components/Entry";

const initState = {auth: false, name: '', messages: []}

function App() {
    const [state, dispatch] = useReducer(reducer, initState)


    return (
        <AppContext.Provider value={{state, dispatch}}>
            <div className={s.wrapper}>
                {
                    state.auth ?
                        <div className={s.chat}>
                            <History/>
                            <Entry/>
                        </div>
                        :
                        <Auth/>
                }
            </div>
        </AppContext.Provider>
    );
}

export const AppContext = createContext({
    state: {...initState},
    dispatch: () => {
    },
})

export default App;
