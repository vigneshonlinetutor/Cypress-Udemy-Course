import BasePage from "./basePage"
import homePage from "./homePage"

class LoginPage extends BasePage{

    getEmail(){return 'input[type="email"]'}

    getPassword(){return 'input[type="password"]'}

    getSigninButton(){return 'button[type="submit"]'}

    enterEmail(email){
        this.fillText(this.getEmail(),email);
        return this;
    }

    enterPassword(password){
        this.fillText(this.getPassword(),password);
        return this;
    }

    clickSigninButton(){
        this.clickElement(this.getSigninButton());
        return homePage;
    }

}
const loginPage = new LoginPage();
export default loginPage