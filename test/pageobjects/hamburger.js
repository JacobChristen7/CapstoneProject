import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import DefaultPage from './defaultPage.js'
import Login from './login.js'


class HamburgerMenu extends DefaultPage {
    
    get HamburgerOpen () {
        return $('[class="btn btn-empty header-icon tw-mr-2 tw-hidden tw-self-center tw-rounded tw-p-1.5 tw-leading-none tw-outline-none hover:tw-bg-purple-dark hover:tw-text-white focus:tw-bg-purple-dark focus:tw-text-white xl:tw-block"]')
    }

    get ShowMoreButton () {
        return $('//span[contains(text(), "+ Show more")]')
    }

    get ItemPageNameCheck () {
        return $('a[ui-sref="geekitem.overview"] > span')
    }


    async hamburgerFunction () {
        await this.open();
        await Login.login('YummyZombie', 'autoTest88');
        await this.HamburgerOpen.click();
        await this.ShowMoreButton.click();
    }

    async theHotnessCheck () {
        const hotnessItems = await $$('ul.geeksidebar-links.hotness.tw-m-0.tw-list-none.tw-p-0 > li > div > h2 > a');
        for (let i = 0; i < hotnessItems.length; i++) {
            const text = await hotnessItems[i].getText();
            console.log(`Item ${i + 1}: ${text}`);
            await hotnessItems[i].click();
            await expect(this.ItemPageNameCheck).toHaveText(
                expect.stringContaining(text))
            await browser.back();
            await this.HamburgerOpen.click();
        }
    }
}

export default new HamburgerMenu();