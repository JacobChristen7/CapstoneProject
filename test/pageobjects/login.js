import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import DefaultPage from './defaultPage.js';


class Login extends DefaultPage {
    
    get searchButton () {
        return $('#store_search_link')
    }
    
    get loginButton () {
        return $('div[class="Box-s8oj9r-0 eByApt"]');
    }

    get loginEmail () {
        return $('#login-email')
    }


    async login () {  
        await this.open();
        await browser.pause(2000)
        await this.searchButton.click();
        await browser.pause(2000)
    }
}

export default new Login();
