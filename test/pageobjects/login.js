import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import DefaultPage from './defaultPage.js';


class Login extends DefaultPage {
    
    get SearchButton () {
        return $('#store_search_link')
    }
    
    get LoginButton () {
        return $('div[class="Box-s8oj9r-0 eByApt"]');
    }

    get LoginEmail () {
        return $('#login-email')
    }


    async login () {  
        await this.open();
        await this.searchButton.click();
    }
}

export default new Login();
