import { browser } from '@wdio/globals'
import DefaultPage from './default.js';
import Login from './login.js'
import Info from './info.js';


class Collection extends DefaultPage {
    get UserDropdown () {
        return $('gg-my-geek')
    }

    get CollectionLink () {
        return $('//a[contains(text(), "Collection")]')
    }

    get StatusBox () {
        return $('//td[@id="CEcell_status1"]')
    }

    get StatusBoxCheck () {
        return $('//div[@id="results_status1"]')
    }

    get StatusBoxCheckDropdown () {
        return $('//div[@style="white-space:nowrap; line-height:20px;"] /select')
    }

    get StatusBoxDropdownOptions () {
        return $$('//div[@style="white-space:nowrap; line-height:20px;"] /select /option')
    }

    get StatusTabSave () {
        return $('//input[@value="Save"]')
    }

    get StatusTabXButton () {
        return $('//div[@class="collection_handle"] /span[@style="float:right;"]')
    }

    get StatusTabCancel () {
        return $('//input[@value="Cancel"]')
    }

    get StatusTabCheckBoxes () {
        return $$('//div[@style="white-space:nowrap; line-height:20px;"] /input')
    }


    async collectionFullTest() {
        await this.openPage();
        await Login.login(Info.username, Info.password);
        await this.UserDropdown.click();
        await this.CollectionLink.click();
        await this.checkAllOptionsIndiSave();
        await this.checkAllOptionsIndiCancel();
        await this.checkAllOptionsIndiXButton();
        await this.selectAllOptions();
        await this.StatusTabSave.click();
        await expect(this.StatusBoxCheck).toHaveText(expect.stringContaining("Owned", "Prev. Owned", "For Trade", "Want In Trade", "Want To Play", "Want To Buy", "Preordered", " (Must have)"));
        await this.selectAllOptions();
        await this.StatusTabSave.click();
        await expect(this.StatusBoxCheck).toHaveText(expect.stringContaining(""));
        await this.selectAllOptions();
        await this.StatusTabCancel.click();
        await expect(this.StatusBoxCheck).toHaveText(expect.stringContaining(""));
        await this.selectAllOptions();
        await this.StatusTabXButton.click();
        await expect(this.StatusBoxCheck).toHaveText(expect.stringContaining(""));
        await this.selectHalfOptions(1, 4, 5, 7);
        await this.StatusTabSave.click();
        await expect(this.StatusBoxCheck).toHaveText(expect.stringContaining("Prev. Owned", "Want To Play", "Want To Buy", " (Must have)"));
        await this.selectHalfOptions(1, 4, 5, 7);
        await this.StatusTabSave.click();
        await expect(this.StatusBoxCheck).toHaveText(expect.stringContaining(""));
        await this.selectHalfOptions(1, 4, 5, 7);
        await this.StatusTabCancel.click();
        await expect(this.StatusBoxCheck).toHaveText(expect.stringContaining(""));
        await this.selectHalfOptions(1, 4, 5, 7);
        await this.StatusTabXButton.click();
        await expect(this.StatusBoxCheck).toHaveText(expect.stringContaining(""));
    }

    async checkOptionIndiSave(box1, box2 = null, expectText) {
        await this.StatusBox.click();
        await this.StatusTabCheckBoxes[box1].click();
        
        if (box2 !== null) {
            await this.StatusTabCheckBoxes[box2].click();
        }
        
        await this.StatusTabSave.click();
        await expect(this.StatusBoxCheck).toHaveText(expect.stringContaining(expectText));
    }

    async checkOptionIndiSaveDropdown(option, expectText) {
        await this.StatusBox.click();
        await this.StatusBoxCheckDropdown.click();
        await this.StatusBoxDropdownOptions[option].click();
        await this.StatusTabSave.click();
        await expect(this.StatusBoxCheck).toHaveText(expect.stringContaining(expectText));
    }

    async checkOptionIndiCancel(box1, box2 = null, expectText) {
        await this.StatusBox.click();
        await this.StatusTabCheckBoxes[box1].click();
        
        if (box2 !== null) {
            await this.StatusTabCheckBoxes[box2].click();
        }
        
        await this.StatusTabCancel.click();
        await expect(this.StatusBoxCheck).toHaveText(expect.stringContaining(expectText));
    }

    async checkOptionIndiXButton(box1, box2 = null, expectText) {
        await this.StatusBox.click();
        await this.StatusTabCheckBoxes[box1].click();
        
        if (box2 !== null) {
            await this.StatusTabCheckBoxes[box2].click();
        }
        
        await this.StatusTabXButton.click();
        await expect(this.StatusBoxCheck).toHaveText(expect.stringContaining(expectText));
    }

    async checkAllOptionsIndiSave() {
        await this.checkOptionIndiSave(0, null, "Owned");
        await this.checkOptionIndiSave(0, 1, "Prev. Owned");
        await this.checkOptionIndiSave(1, 2, "For Trade");
        await this.checkOptionIndiSave(2, 3, "Want In Trade");
        await this.checkOptionIndiSave(3, 4, "Want To Play");
        await this.checkOptionIndiSave(4, 5, "Want To Buy");
        await this.checkOptionIndiSave(5, 6, "Preordered");
        await this.checkOptionIndiSave(6, 7, " (Must have)");
        await this.checkOptionIndiSaveDropdown(1, " (Love to have)")
        await this.checkOptionIndiSaveDropdown(2, " (Like to have)")
        await this.checkOptionIndiSaveDropdown(3, " (Thinking about it)")
        await this.checkOptionIndiSaveDropdown(4, " (Don't buy this)")
        await this.checkOptionIndiSaveDropdown(0, " (Must have)")
        await this.checkOptionIndiSave(7, null, "");
    }

    async checkAllOptionsIndiCancel() {
        await this.checkOptionIndiCancel(0, null, "");
        await this.checkOptionIndiCancel(1, null, "");
        await this.checkOptionIndiCancel(2, null, "");
        await this.checkOptionIndiCancel(3, null, "");
        await this.checkOptionIndiCancel(4, null, "");
        await this.checkOptionIndiCancel(5, null, "");
        await this.checkOptionIndiCancel(6, null, "");
        await this.checkOptionIndiCancel(7, null, "");
    }

    async checkAllOptionsIndiXButton() {
        await this.checkOptionIndiXButton(0, null, "");
        await this.checkOptionIndiXButton(1, null, "");
        await this.checkOptionIndiXButton(2, null, "");
        await this.checkOptionIndiXButton(3, null, "");
        await this.checkOptionIndiXButton(4, null, "");
        await this.checkOptionIndiXButton(5, null, "");
        await this.checkOptionIndiXButton(6, null, "");
        await this.checkOptionIndiXButton(7, null, "");
    }

    async selectAllOptions() {
        await this.StatusBox.click();
        await this.StatusTabCheckBoxes[0].click();
        await this.StatusTabCheckBoxes[1].click();
        await this.StatusTabCheckBoxes[2].click();
        await this.StatusTabCheckBoxes[3].click();
        await this.StatusTabCheckBoxes[4].click();
        await this.StatusTabCheckBoxes[5].click();
        await this.StatusTabCheckBoxes[6].click();
        await this.StatusTabCheckBoxes[7].click();
    }

    async selectHalfOptions(box1, box2, box3, box4) {
        await this.StatusBox.click();
        await this.StatusTabCheckBoxes[box1].click();
        await this.StatusTabCheckBoxes[box2].click();
        await this.StatusTabCheckBoxes[box3].click();
        await this.StatusTabCheckBoxes[box4].click();
    }
}

export default new Collection();