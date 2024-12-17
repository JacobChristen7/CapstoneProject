import DefaultPage from './default.js'

class Hotness extends DefaultPage {
    
    get ShowMoreButton () {
        return $('//span[contains(text(), "+ Show more")]')
    }

    get ItemPageNameCheck () {
        return $('a[ui-sref="geekitem.overview"] > span')
    }


    async hamburgerFunction () {
        await this.openPage();
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

export default new Hotness();