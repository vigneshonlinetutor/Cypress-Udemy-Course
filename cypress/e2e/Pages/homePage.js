import BasePage from "./basePage"

class HomePage extends BasePage{

    getYourFeed(){return 'Your Feed'}

    getGlobalFeed(){return 'Global Feed'}

    getHome(){return 'Home'}

    getNewPost(){return 'New Post'}

    getSettings(){return 'Settings'}

    checkYourFeedIsVisible(){
        this.isElementVisible(this.getYourFeed(),true);
    }

    clickSettingsButton(){
        this.clickElement(this.getSettings(),true);
    }
}
const homePage = new HomePage();
export default homePage
