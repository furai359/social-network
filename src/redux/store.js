import profileReducer from "./profile-reducer";
import chatsReducer from "./chats-reducer";
import sidebarReducer from "./sidebar-reducer";




let store = {
    _state : {
        profilePage: {
            newPostText: '',
            posts : [
                { id: 1, text:'first post' , likesCount: 10},
                { id: 2, text:'second post', likesCount: 14},
                { id: 3, text:'third post' , likesCount: 23},
            ]
        },
        chatsPage: {
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
            newMessageBody: '',
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
        },
        sideBar: {
            importantFriends:[
                {
                    id: 1,
                    name:'Shrek',
                    avatar:'https://cs1.gtavicecity.ru/screenshots/9a0d4/2018-09/original/077baf4aaa659720920e468c59e9a76d5732fa9b/691231-enb2018-9-19-16-54-22-result.jpg'
                },
                {
                    id: 2,
                    name: 'Fiona',
                    avatar: 'https://f.vividscreen.info/soft/d51c7747a35a40b1d159f5edacf38315/Fiona-Shrek-1080x1920.jpg'
                },
                {
                    id: 3,
                    name: 'Osel',
                    avatar: 'https://vignette.wikia.nocookie.net/shrek/images/d/dc/DonkeyTransparent.png/revision/latest/scale-to-width-down/340?cb=20171218193004'
                }
            ]
        }
    },
    _callSubscriber()  {
        console.log('_callSubscriber() was called, state changed');
    },

    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        //state.profilePage каким-то хуем становится undefined после этого приравнивания
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.chatsPage   = chatsReducer(this._state.chatsPage, action);
        this._state.sideBar     = sidebarReducer(this._state.sideBar, action);
        debugger;
        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;
