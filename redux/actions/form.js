export function userInformationUpdate(
    userName,
    userSurname,
    userMail,
    userCity,
    userDistrict
){
    return {
        type: 'USER_INFORMATION_UPDATE',
        payload: {
            userName,
            userSurname,
            userMail,
            userCity,
            userDistrict
        }
    }
}