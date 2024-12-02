import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import DefaultPage from './defaultPage.js';


class Login extends DefaultPage {
    
    get SignInButton () {
        return $('a[ggloginbutton]')
    }
    
    get CancelSignIn () {
        return $('button[type="button"].btn-outline-secondary');
    }

    get XSignIn () {
        return $('button[aria-label="Close"].btn-close.btn-close-white')
    }

    get UsernameInput () {
        return $('#inputUsername')
    }

    get PasswordInput () {
        return $('#inputPassword')
    }

    get Submit () {
        return $('button.btn.btn-lg.btn-primary')
    }

    get ForgotUsernameLink () {
        return $('a[href="/geekaccount/forgotusername"]')
    }

    get ForgotPasswordLink () {
        return $('a[href="/geekaccount/forgotpassword"]')
    }

    get SignInLinkCheck () {
        return $('h3[align="center"]')
    }


    async loginFullTest (username, password) {  
        await this.open();
        await browser.pause(1000);
        await this.SignInButton.click();
        await browser.pause(1000);
        await this.CancelSignIn.click();
        await browser.pause(1000);
        await this.SignInButton.click();
        await browser.pause(1000);
        await this.XSignIn.click();
        await browser.pause(1000);
        await this.SignInButton.click();
        await browser.pause(1000);
        await this.ForgotUsernameLink.click();
        //await expect(browser).toHaveUrl('https://boardgamegeek.com/geekaccount/forgotusername');
        //await expect(this.SignInLinkCheck).toHaveText(
            //expect.stringContaining("Forgot Username"))
        await browser.pause(1000);
        await browser.back();
        await browser.pause(1000);
        await this.ForgotPasswordLink.click();
        //await expect(browser).toHaveUrl('https://boardgamegeek.com/geekaccount/forgotpassword');
        //await expect(this.SignInLinkCheck).toHaveText(
            //expect.stringContaining("Forgot Password"))
        await browser.pause(1000);
        await browser.back();
        await browser.pause(1000);
        await this.UsernameInput.setValue(username);
        await browser.pause(1000);
        await this.PasswordInput.setValue(password);
        await browser.pause(1000);
        await this.Submit.click();
    }

    async login (username, password) {
        await this.open();
        await this.SignInButton.click();
        await this.UsernameInput.setValue(username);
        await this.PasswordInput.setValue(password);
        await this.Submit.click();
    }
}

export default new Login();
