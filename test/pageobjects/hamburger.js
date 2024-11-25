import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import DefaultPage from './defaultPage.js';


class HamburgerMenu extends DefaultPage {
    
    get HamburgerOpen () {
        return $('[class="btn btn-empty header-icon tw-mr-2 tw-self-center tw-rounded tw-p-1.5 tw-leading-none tw-outline-none hover:tw-bg-purple-dark hover:tw-text-white focus:tw-bg-purple-dark focus:tw-text-white xl:tw-hidden"]')
    }

    get ShowMoreButton () {
        return $('//span[contains(text(), "+ Show more")]')
    }


    async hamburgerFunction () { //opens the sidebar just fine
        await this.open();
        await browser.pause(2000);
        await this.HamburgerOpen.click();
        await browser.pause(2000);
        await this.ShowMoreButton.click();
        await browser.pause(2000)
    }

    async theHotnessCheck () {
        const hotnessItems = await $$('ul.geeksidebar-links.hotness.tw-m-0.tw-list-none.tw-p-0 > li > div > h2 > a');
        for (let i = 0; i < hotnessItems.length; i++) {
            const text = await hotnessItems[i].getText();
            console.log(`Item ${i + 1}: ${text}`);
            await hotnessItems[i].click();
            //await expect(browser).toHaveUrlContaining(text);
            await browser.back();
            await this.HamburgerOpen.click();
            //await this.ShowMoreButton.click();
        }
    }
}

export default new HamburgerMenu();