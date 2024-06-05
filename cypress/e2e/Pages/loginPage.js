import BasePage from "./basePage"

class LoginPage extends BasePage{

    getEmail(){return 'input[type="email"]'}

    getPassword(){return 'input[type="password"]'}

    getSigninButton(){return 'button[type="submit"]'}

    enterEmail(email){
        this.fillText(this.getEmail(),email);
    }

    enterPassword(password){
        this.fillText(this.getPassword(),password);
    }

    clickSigninButton(){
        this.clickElement(this.getSigninButton());
    }

}

export default LoginPage