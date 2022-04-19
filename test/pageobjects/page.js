class Page {
    async getElement(element) {
        return await $(element);
    }
    async waitUntilClickable(element, timeout = 100000) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isClickable();
        }, {
            timeout: timeout
        });
    }
    async waitUntilDisplayed(element, timeout = 100000) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isDisplayed();
        }, {
            timeout: timeout
        });
    }
    async click(element) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).click();
    }
    async setValue(element, value) {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).setValue(value);
    }
    async makeScreenshot(name) {
        await browser.saveScreenshot(name + '.png');
    }
    async baseURL(name) {
        await browser.url(name)
    }
    async waitUntilDisplayedInViewport(element, timeout = 100000) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isDisplayedInViewport();
        }, {
            timeout: timeout
        });
    }


}
module.exports = new Page()