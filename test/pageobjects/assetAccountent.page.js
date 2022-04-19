const assert = require('assert');
const { Email } = require('./credential.js');
const page = require('./page.js')
class AssetAccountentPage {
    //Start page

    createAnAccountButton = 'a[class="btn btn-lg btn-block btn-tertiary bold text-dark Login-create"]';
    signInButton = '[class="btn btn-lg btn-light bold Login-heading"]';
    emailInput1 = '[class="form-control form-control-lg"]';
    nextButton1 = '[class="btn btn-lg btn-primary Login-submit"]';
    passwordInput1 = '[class="form-control form-control-lg"]';
    //Registration page   
    firstNameInput = '[name="firstname"]';
    lastNameInput = '[name="lastname"]';
    emailInput2 = '[name="email"]';
    phonenumberInput = '[name="phonenumber"]';
    passwordInput2 = '[name="password"]';
    confirmPasswordInput = '[name="confirmpassword"]';
    submitButton = '[type="submit"]'
    //Start page after logout
    forLoadClick = '[src="/resources/images/aa-logo-small-white.svg"]';
    organizationInput = '[class="form-control ng-untouched ng-pristine ng-invalid ng-star-inserted"]';
    createButton = '[class="btn btn-primary"]';
    //After create a register
    createRegisterButton = '[class="btn btn-register ng-star-inserted"]';
    nextButton2 = '[class="btn btn-primary ml-2"]';
    tryForFreeButton = '//*[contains(text(),"Try For Free")]';
    selectRegisterButton = '[id="register-selection"]';
    createNewRegisterButton = '[class="dropdown-item ng-star-inserted"][type="button"]';
    registerNameInput = '[formcontrolname="name"]';
    autoNumberCheckbox = '//*[contains(text(),"Auto") and @class]';
    saveButton = '[type="submit"]';
    okButton = '[class="btn btn-primary"]'
    assetsButton = 'a:nth-child(1)[class="btn ng-star-inserted"]';
    createAssetGroupFromTempleteButton = '//a[contains(text()," Create Asset Group (from template) ")]';
    newAssetButton = '//*[@class="form-check-label card-title" and contains(text()," Buildings ")]';
    alertPic = '[class="alert-icon ng-star-inserted"]'
    exitButton = '[routerlink="../../assets"]';
    //For logout after verification
    profileButton = '//span[@class="ml-2" and contains(text(),"")]';
    logoutButton = '[name="log-out"]';
    async okClick() {
        await page.click(this.okButton)
    }
    async selectRegisterButtonClick() {
        await page.click(this.selectRegisterButton)
    }
    async createNewRegisterButtonClick() {
        await page.click(this.createNewRegisterButton)
    }
    async setRegisterNameInputValue(name) {
        await page.setValue(this.registerNameInput, name)
    }
    async w8ForAssets() {
        await page.waitUntilClickable(this.assetsButton, 100000)
    }
    async w8ForSave() {
        await page.waitUntilDisplayed(this.alertPic)
    }

    async AssetBaseURL(name) {
        await page.baseURL(name);
    }

    async clickbtnCreateAnAccount() {
        await page.click(this.createAnAccountButton);
    };

    async SetFirstname(firstName) {
        await page.setValue(this.firstNameInput, firstName);
    };
    async SetLastname(lastName) {
        await page.setValue(this.lastNameInput, lastName);
    };

    async SetEmail1(Email) {
        await page.setValue(this.emailInput2, Email);
    };
    async SetPhone(phoneNumber) {
        await page.setValue(this.phonenumberInput, phoneNumber);
    };
    async SetPassword1(password) {
        await page.setValue(this.passwordInput2, password);
    };
    async ConfirmPassword(password) {
        await page.setValue(this.confirmPasswordInput, password);
    };
    async clickbtnSubmit() {
        await page.click(this.submitButton);
    };


    async clickSignIn() {
        await page.click(this.signInButton)
    }


    async SetEmail2(Email) {

        await page.setValue(this.emailInput1, Email)
    }

    async clickNext() {
        await page.click(this.nextButton1)
    }

    async Setpassword2(password) {
        await page.setValue(this.passwordInput1, password)
    }
    async UseClickBeforeStart() {
        await page.click(this.forLoadClick);
    }

    async setOrganisation(organisation) {
        await page.setValue(this.organizationInput, organisation)
    }

    async clickbtnCreate() {
        await page.click(this.createButton)
    }
    async clickBtnCreateRegister() {
        await page.click(this.createRegisterButton)
    }

    async clickbtnNext() {
        await page.click(this.nextButton2)
    }

    async clickbtnTryForFree() {
        await page.click(this.tryForFreeButton)
    }

    async clickAutoNumber() {
        await page.click(this.autoNumberCheckbox)
    }

    async clickbtnSave() {
        await page.click(this.saveButton)
        await browser.pause(1500)
    }

    async assetsButtonClick() {
        await page.click(this.assetsButton)
    }

    async clickbtnCreateAssetGroupfromTemplate() {
        await page.click(this.createAssetGroupFromTempleteButton)
        await browser.pause(2000)
    }

    async clickbtnNewAsset() {
        await page.click(this.newAssetButton)
    }

    async clickbtnExit() {
        await page.click(this.exitButton)
        await browser.pause(3000)

    }
    async clickOnProfile() {
        await page.click(this.profileButton);
    }
    async clickLogout() {
        await page.click(this.logoutButton)
    }
    async waitForLogout() {
        await page.waitUntilDisplayed(this.createButton, timeout = 100000)
        await browser.pause(3000)
    }
    async waitForLogoutButton() {
        await page.waitUntilDisplayedInViewport(this.logoutButton, timeout = 100000)
        await browser.pause(1500)
    }


};



module.exports = new AssetAccountentPage(); 