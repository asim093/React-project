const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Helpers = {
    validataEmail(email) {
        return emailRegex.test(email)
    },

    validatePassword(password){
        return password.length >= 8;
    },

    validateName(name){
        return name.length >= 4; 
    }
}