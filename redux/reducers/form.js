const userState = {
    userName: 'deneme isim',
    userSurname: 'den soyad',
    userMail: 'deneme@istanbul.com',
    userCity: 'İstanbul',
    userDistrict: 'Kadıköy',
    isUserNewsSubscription: false
}


const userInformationUpdateReducer = (state = userState, action) => {
    switch (action.type){

        case 'USER_INFORMATION_UPDATE' :
            return {
                ...state,
                userName: action.payload.userName,
                userSurname: action.payload.userSurname,
                userMail: action.payload.userMail,
                userCity: action.payload.userCity,
                userDistrict: action.payload.userDistrict
            }

        default:
            return state;
    }
}


export default userInformationUpdateReducer