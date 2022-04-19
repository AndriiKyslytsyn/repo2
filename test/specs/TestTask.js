const assert = require('assert');

const assetAccountentPage = require('../pageobjects/assetAccountent.page.js');

const credential = require('../pageobjects/credential');
const { mailsacBaseURL } = require('../pageobjects/Mailsac.page.js');
const MailsacPage = require('../pageobjects/Mailsac.page.js');
const page = require('../pageobjects/page.js');



describe('Test task on base url', async () => {
    it('Creating a new account', async () => {
        await assetAccountentPage.AssetBaseURL(credential.AssetBaseURL);
        await assetAccountentPage.clickbtnCreateAnAccount();
        await assetAccountentPage.SetFirstname(credential.firstName);
        await assetAccountentPage.SetLastname(credential.lastName);
        await assetAccountentPage.SetEmail1(credential.Email);
        await assetAccountentPage.SetPhone(credential.phoneNumber);
        await assetAccountentPage.SetPassword1(credential.password);
        await assetAccountentPage.ConfirmPassword(credential.password);
        await assetAccountentPage.clickbtnSubmit()
        await page.makeScreenshot('accountCreated');
    })

    it('The new account verification via Email', async () => {
        await MailsacPage.mailsacBaseURL(credential.mailsacBaseURL);
        await MailsacPage.clickdropbox();
        await MailsacPage.clicksignIn();
        await MailsacPage.SetName(credential.userName);
        await MailsacPage.setPassword(credential.userPassword);
        await MailsacPage.clickbtnSignIn();
        await MailsacPage.SetMail(credential.emailPart);
        await MailsacPage.ClickCheckEmail();
        await MailsacPage.ClickOnLetter();
        await MailsacPage.clickshowMailwithLink();
        await MailsacPage.switchWindow('Welcome to AssetAccountant™');
        await page.makeScreenshot('accountVerified');
        await MailsacPage.clickVerifyEmail();
        await MailsacPage.switchWindow('Create Your Organisation - AssetAccountant™')
        await assetAccountentPage.UseClickBeforeStart();
        await assetAccountentPage.clickOnProfile();
        await assetAccountentPage.clickLogout();
        await page.makeScreenshot('logout');

    })

    it('Sign in with valid credentils and create new asset', async () => {
        await assetAccountentPage.AssetBaseURL(credential.AssetBaseURL);
        await browser.setWindowSize(1920, 1080);
        await assetAccountentPage.clickSignIn();
        await assetAccountentPage.SetEmail2(credential.Email);
        await assetAccountentPage.clickNext();
        await assetAccountentPage.Setpassword2(credential.password);
        await assetAccountentPage.clickNext();
        await assetAccountentPage.UseClickBeforeStart();
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