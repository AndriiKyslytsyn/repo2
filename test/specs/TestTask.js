const assert = require('assert');
const assetAccountentPage = require('../pageobjects/assetAccountent.page.js');
const credential = require('../pageobjects/credential');
const mailsacPage = require('../pageobjects/mailsac.page.js');
const page = require('../pageobjects/page.js');



describe('Test task on base url', async () => {
    it('Creating a new account', async () => {
        await assetAccountentPage.assetBaseURL(credential.assetBaseURL);
        await assetAccountentPage.clickbtnCreateAnAccount();
        await assetAccountentPage.setFirstname(credential.firstName);
        await assetAccountentPage.setLastname(credential.lastName);
        await assetAccountentPage.setEmail1(credential.Email);
        await assetAccountentPage.setPhone(credential.phoneNumber);
        await assetAccountentPage.setPassword1(credential.password);
        await assetAccountentPage.confirmPassword(credential.password);
        await assetAccountentPage.clickbtnSubmit();
        await page.makeScreenshot('accountCreated');
    })

    xit('The new account verification via Email', async () => {
        await mailsacPage.mailsacBaseURL(credential.mailsacBaseURL);
        await mailsacPage.clickdropbox();
        await mailsacPage.clicksignIn();
        await mailsacPage.setName(credential.userName);
        await mailsacPage.setPassword(credential.userPassword);
        await mailsacPage.clickbtnSignIn();
        await mailsacPage.setMail(credential.emailPart);
        await mailsacPage.clickCheckEmail();
        await mailsacPage.clickOnLetter();
        await mailsacPage.clickshowMailwithLink();
        await mailsacPage.switchWindow('Welcome to AssetAccountant™');
        await page.makeScreenshot('accountVerified');
        await mailsacPage.clickVerifyEmail();
        await mailsacPage.switchWindow('Create Your Organisation - AssetAccountant™');
        await assetAccountentPage.useClickBeforeStart();
        await assetAccountentPage.clickOnProfile();
        await assetAccountentPage.clickLogout();
        await page.makeScreenshot('logout');

    })

   xit('Sign in with valid credentils and create new asset', async () => {
        await assetAccountentPage.assetBaseURL(credential.assetBaseURL);
        await assetAccountentPage.clickSignIn();
        await assetAccountentPage.setEmail2(credential.Email);
        await assetAccountentPage.clickNext();
        await assetAccountentPage.setpassword2(credential.password);
        await assetAccountentPage.clickNext();
        await assetAccountentPage.useClickBeforeStart();
        await assetAccountentPage.setOrganisation(credential.organisation);
        await assetAccountentPage.clickbtnCreate();
        await assetAccountentPage.clickBtnCreateRegister();
        await assetAccountentPage.clickbtnNext();
        await assetAccountentPage.clickbtnTryForFree();
        await assetAccountentPage.selectRegisterButtonClick();
        await assetAccountentPage.createNewRegisterButtonClick();
        await assetAccountentPage.setRegisterNameInputValue(credential.registerName);
        await assetAccountentPage.clickbtnSave();
        await assetAccountentPage.okClick();
        await assetAccountentPage.assetsButtonClick();
        await assetAccountentPage.clickbtnCreateAssetGroupfromTemplate();
        await assetAccountentPage.clickbtnNewAsset();
        await assetAccountentPage.clickbtnSave();
        await assetAccountentPage.clickbtnExit();
        await page.makeScreenshot('allDone');

    })
})