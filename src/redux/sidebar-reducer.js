let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;