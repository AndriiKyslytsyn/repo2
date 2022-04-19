class Credential {
    //Credentials for Asset Accountent
    assetBaseURL = 'https://dev.asset.accountant';
    firstName = 'John';
    lastName = 'Snow';
    phoneNumber = '+380502689234';
    emailPart = 'test_7776558336903340';
    Email = this.emailPart + '@mailsac.com';
    password = 'Johnsnow123';
    organisation = 'Valha';
    registerName = 'ololo';
    //Credentials for mailsac.com
    userName = 'andriitsin';
    userPassword = 'KINGK0NGq13';
    mailsacBaseURL = 'https://mailsac.com';
}

module.exports = new Credential()