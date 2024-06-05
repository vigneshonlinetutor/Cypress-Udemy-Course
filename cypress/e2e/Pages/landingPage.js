import BasePage from "./basePage"
import loginPage from "./loginPage"

class LandingPage extends BasePage{

    getSignin(){return 'Sign in'}

    clickSigninButton(){
        this.clickElement(this.getSignin(),true);
        return loginPage;
    }

}
const landingPage = new LandingPage();
export default landingPage