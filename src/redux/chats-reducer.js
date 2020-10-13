const SEND_MESSAGE = 'chats/SEND_MESSAGE';

let initialState = {
    rooms    : [
        {
            id: 1,
            avatar : 'https://sun9-22.userapi.com/c635102/v635102198/4e8e/flsgJD6h5M8.jpg',
            name: 'Tolik'
        },
        {
            id: 2,
            avatar : 'https://sun9-28.userapi.com/c543107/v543107888/39e27/8qBIDuaR968.jpg',
            name: 'Jorik'
        },
        {
            id: 3,
            avatar : 'https://sun9-45.userapi.com/c626426/v626426361/2f915/vqiP4jY0CGw.jpg',
            name: 'Valera'
        },
        {
            id: 4,
            avatar : 'https://kinda.media/upload/news/1574792179.png',
            name: 'Shrek'
        },
        {
            id: 5,
            avatar : 'https://www.meme-arsenal.com/memes/f312cbe6568bce10828b5b89e7e6659b.jpg',
            name: 'Osel'
        },
    ],
    messages : [
        { incoming:false, id:1, text:'pokaji jopu'},
        { incoming:true,  id:2, text:'ne pokaju'},
        { incoming:false, id:3, text:'nu pokaji'},
        { incoming:true,  id:4, text:'net'},
        { incoming:false, id:5, text:'pochemu'},
        { incoming:true,  id:6, text:'ona volosataya'},
        { incoming:false, id:7, text:'a nu togda ladno'},
        { incoming:true,  id:8, text:'spasibo za ponimanie'}
    ]
}

const chatsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            if(action.message && action.message.trim() !== ''){
                let message = {
                    incoming: false,
                    id: (state.messages[state.messages.length-1].id)+1,
                    text: action.message
                };
                return {
                    ...state,
                    messages: [...state.messages, message],
                };
            }
            return state;
        }
        default: return state;
    }
}

export const sendMessageCreator = message => ({ type: SEND_MESSAGE, message:message })

export default chatsReducer

