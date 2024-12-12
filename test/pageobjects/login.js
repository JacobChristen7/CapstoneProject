import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import { browser } from '@wdio/globals';
import DefaultPage from './default.js';
import Info from './info.js';


class Login extends DefaultPage {
    
    get SignInButton () {
        return $('a[ggloginbutton]')
    }

    get SignInButtonBacked () {
        return $('li[class="global-header-nav-session global-header-nav-primary-separated ng-scope"] > button')
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

    get LogoLink () {
        return $('img[alt="boardgamegeek logo"]')
    }

    get LogoLinkSignUpPage () {
        return $('img[alt="BGG Logo"]')
    }

    get SignUpLink () {
        return $('//a[text()="Sign up"]')
    }

    get BadAttemptCheck () {
        return $('p[role=alert]')
    }


    async loginFullTest () {  
        await this.openPage();
        await this.SignInButton.click();
        await this.CancelSignIn.click();
        await this.SignInButton.click();
        await this.XSignIn.click();
        await this.badLogin("dajiuhi11212", "allingmes13")
        await this.ForgotUsernameLink.click();
        await expect(browser).toHaveUrl('https://boardgamegeek.com/geekaccount/forgotusername');
        await this.LogoLink.click();
        await this.SignInButton.click();
        await this.ForgotPasswordLink.click();
        await expect(browser).toHaveUrl('https://boardgamegeek.com/geekaccount/forgotpassword');
        await this.LogoLink.click();
        await this.SignInButton.click();
        await this.SignUpLink.click();
        await expect(browser).toHaveUrl('https://boardgamegeek.com/join');
        await this.LogoLinkSignUpPage.click();
        await this.goodAndBadLogin(Info.username, Info.password, "dajiuhi11212", "allingmes13")
        await this.login(Info.username, Info.password);
    }

    async login (username, password) {
        await this.SignInButton.click();
        await this.UsernameInput.setValue(username);
        await this.PasswordInput.setValue(password);
        await this.Submit.click();
    }

    async badLogin (badUsername, badPassword) {
        await this.SignInButton.click();
        await this.Submit.click();
        await expect(this.BadAttemptCheck).toHaveText(
            expect.stringContaining("Invalid username or password"));
        await this.UsernameInput.setValue(badUsername);
        await this.Submit.click();
        await expect(this.BadAttemptCheck).toHaveText(
            expect.stringContaining("Invalid username or password"));
        await this.UsernameInput.setValue("");
        await this.PasswordInput.setValue(badPassword);
        await this.Submit.click();
        await expect(this.BadAttemptCheck).toHaveText(
            expect.stringContaining("Invalid username or password"));
        await this.UsernameInput.setValue(badUsername);
        await this.Submit.click();
        await expect(this.BadAttemptCheck).toHaveText(
            expect.stringContaining("Invalid username or password"));
    }

    async goodAndBadLogin (goodUsername, goodPassword, badUsername, badPassword) {
        await this.SignInButton.click();
        await this.UsernameInput.setValue(goodUsername);
        await this.Submit.click();
        await expect(this.BadAttemptCheck).toHaveText(
            expect.stringContaining("Invalid username or password"));
        await this.PasswordInput.setValue(badPassword);
        await this.Submit.click();
        await expect(this.BadAttemptCheck).toHaveText(
            expect.stringContaining("Invalid username or password"));
        await this.XSignIn.click();
        await this.SignInButton.click();
        await this.PasswordInput.setValue(goodPassword);
        await this.Submit.click();
        await expect(this.BadAttemptCheck).toHaveText(
            expect.stringContaining("Invalid username or password"));
        await this.UsernameInput.setValue(badUsername);
        await this.Submit.click();
        await expect(this.BadAttemptCheck).toHaveText(
            expect.stringContaining("Invalid username or password"));
        await this.CancelSignIn.click();
    }
}

export default new Login();
