import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import DefaultPage from './defaultPage.js';


class AddToCollection extends DefaultPage {

    get SearchBar {
        return $('input[name="searchTerm"]')
    }

    get SearchButton {
        return $('button[type="submit"]')
    }


    async SearchForGame(gameName) {
        await this.open();
        await this.SearchBar.setValue(gameName);
        await browser.pause(2000);
        await this.SearchButton.click();
        await browser.pause(2000);
    }
}

export default new AddToCollection();