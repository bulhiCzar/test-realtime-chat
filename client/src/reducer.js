export default (state, action)=>{
    switch (action.type) {
        case 'login':
            return {...state, auth: true, name: action.payload}
        case 'send':
            state.messages.push(action.payload)
            return {...state}
        case 'load':
            state.messages.push(action.payload)
            return {...state}
        default:
            return {...state}
    }
}