import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import DefaultPage from './defaultPage.js';
import Login from './login.js'


class Collection extends DefaultPage {
    get userDropdown () {
        return $('gg-my-geek')
    }

    get collectionLink () {
        return $('//a[contains(text(), "Collection")]')
    }

    get statusBox () {
        return $('//td[@id="CEcell_status1"]')
    }

    get StatusTabXButton () {
        return $('//div[@class="collection_handle"] /span[@style="float:right;"]')
    }

    get CheckBoxOwn () {
        return $('//input[@name="own"]')
    }

    get CheckBoxPreviouslyOwned () {
        return $('//input[@name="prevowned"]')
    }

    get CheckBoxForTrade () {
        return $('//input[@name="fortrade"]')
    }

    get CheckBoxWantInTrade () {
        return $('//input[@name="want"]')
    }

    get CheckBoxWantToPlay () {
        return $('//input[@name="wanttoplay"]')
    }

    get CheckBoxWantToBuy () {
        return $('//input[@name="wanttobuy"]')
    }

    get CheckBoxPreordered () {
        return $('//input[@name="preordered"]')
    }

    get CheckBoxWishlist () {
        return $('//input[@name="wishlist"]')
    }

    get CheckBoxDropdown () {
        return $('//select[@name="wishlistpriority" and @fdprocessedid="rm0rac"]')
    }


    async collectionFullTest() {
        await this.open();
        await Login.login("YummyZombie", "autoTest88");
        await this.userDropdown.click();
        await this.collectionLink.click();
        await this.statusBox.click();
        await browser.pause(2000)

    }
}

export default new Collection();