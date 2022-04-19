const assert = require('assert');
const page = require('./page.js')
class MailsacPage {
    //SignIn mailsac.com
    dropbox = '[class="dropdown-toggle"]';
    signIn = '[href="/login"]';
    nameInput = '[ng-model="loginDetails._id"]';
    passwordInput = '[ng-model="loginDetails.password"]';
    signInButton = '[class="btn btn-primary"]';
    //Check Email for verification letter
    emailInput = '[ng-model="myinbox"]';
    checkEmailButton = '[class="btn btn-primary btn-block"]';
    letter = '[class="col-xs-5 ng-binding"]';
    showEmailWithLinkButton = '//a[contains(text(),"Unblock links and images ↗")]';
    verifyEmailButton = '//a[@href and @target and @style]';
    //For logout after verification
    profileButton = '//span[@class="ml-2" and contains(text(),"")]';
    logoutButton = '[name="log-out"]';

    async mailsacBaseURL(url) {
        await page.baseURL(url)
        browser.maximizeWindow()
    };
    async clickdropbox() {
        await page.click(this.dropbox)
    };

    async clicksignIn() {
        await page.click(this.signIn)
    };
    async setName(userName) {
        await page.setValue(this.nameInput, userName)
    };
    async setPassword(userPassword) {
        await page.setValue(this.passwordInput, userPassword)
    };
    async clickbtnSignIn() {
        await page.click(this.signInButton)
    };
    async setMail(email) {
        page.setValue(this.emailInput, email)
    };
    async clickCheckEmail() {
        await page.click(this.checkEmailButton)
    };
    async clickOnLetter() {
        await page.click(this.letter)
    };
    async clickshowMailwithLink() {
        await page.click(this.showEmailWithLinkButton)
    };

    async switchWindow(windowTitle, timeout = 30000) {
        await browser.waitUntil(async () => {
            return (await browser.switchWindow(windowTitle));
        }, {
            timeout: timeout
        });
    };

    async clickVerifyEmail() {
        await page.click(this.verifyEmailButton)

    };

};

module.exports = new MailsacPage();