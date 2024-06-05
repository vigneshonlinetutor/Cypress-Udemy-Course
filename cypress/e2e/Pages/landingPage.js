import BasePage from "./basePage"
class LandingPage extends BasePage{

    getSignin(){return 'Sign in'}

    clickSigninButton(){
        this.clickElement(this.getSignin(),true);
    }

}

export default LandingPage