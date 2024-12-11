import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import DefaultPage from './defaultPage.js'
import Login from './login.js'


class RecentlyViewed extends DefaultPage {
    
    get SearchBar () {
        return $('input[type="search"]')
    }

    get SearchSubmit () {
        return $('svg[class="svg-inline--fa fa-magnifying-glass fa-flip-horizontal fa-sm"]')
    }

    get SearchedGameLink () {
        return $('//div[@id="results_objectname1"]/a')
    }
    
    get LogoLink () {
        return $('img[alt="boardgamegeek logo"]')
    }

    get HamburgerOpen () {
        return $('[class="btn btn-empty header-icon tw-mr-2 tw-hidden tw-self-center tw-rounded tw-p-1.5 tw-leading-none tw-outline-none hover:tw-bg-purple-dark hover:tw-text-white focus:tw-bg-purple-dark focus:tw-text-white xl:tw-block"]')
    }

    get RecentlyViewedTabArrow () {
        return $('//button[contains(text(), "Recently Viewed")]')
    }

    get SeeAllButton () {
        return $('a[href="/geektracker/browse"]')
    }

    get RemoveFromHistoryButton () {
        return $$('//img[@alt="Remove from your history"]')
    }

    get RecentlyViewedTabGameLink () {
        return $$('li[class="tw-break-words"]')
    }


    async searchForGames() {
        const boardGames = [
            "Catan",
            "Carcassonne",
            "Ticket to Ride",
            "Pandemic",
            "Chess",
            "Monopoly",
            "Risk",
            "Codenames",
            "Clue",
            "Scrabble",
            "King of Tokyo"
          ];

        for (let i = 0; i < boardGames.length; i++) {
            await this.SearchBar.setValue(boardGames[i]);
            await browser.waitUntil(
                async () => (await this.SearchBar.getValue()) === boardGames[i],
                {
                    timeout: 5000,
                    timeoutMsg: `Search bar did not update with value: ${boardGames[i]}`
                }
            );
            await this.SearchSubmit.click();
            await this.SearchedGameLink.click();
            await this.LogoLink.click();
        }
    }

    async recentlyViewedFullTest() {
        await this.open();
        await Login.login("YummyZombie", "autoTest88");
        await browser.waitUntil(
            async () => (await this.SearchBar.isClickable()),
            {
                timeout: 5000,
                timeoutMsg: `Search bar was not clickable:`
            }
        );
        await this.searchForGames();
        await this.HamburgerOpen.click();
        await this.gameCheckTop();
        await this.RecentlyViewedTabArrow.click();
        await this.RecentlyViewedTabArrow.click();
        await this.SeeAllButton.click();
        await this.RemoveFromHistoryButton[0].click();
        await this.LogoLink.click();
        await this.HamburgerOpen.click();
        await this.gameCheck1();
        await this.SeeAllButton.click();
        await this.remove3Games();
        await this.LogoLink.click();
        await this.HamburgerOpen.click();
        await this.gameCheck2();
        await this.SeeAllButton.click();
        await this.removeRemainingGames();
        await this.LogoLink.click();
        await this.HamburgerOpen.click();
        await this.gameCheck3();
        await this.RecentlyViewedTabGameLink[1].click();
        await this.LogoLink.click();
        await this.HamburgerOpen.click();
        await this.gameCheck4();
        await this.SeeAllButton.click();
        await this.RemoveFromHistoryButton[0].click();
        await this.RemoveFromHistoryButton[0].click();
    }

    async remove3Games() {
        await this.RemoveFromHistoryButton[1].moveTo();
        await this.RemoveFromHistoryButton[1].click();
        await this.RemoveFromHistoryButton[1].moveTo();
        await this.RemoveFromHistoryButton[1].click();
        await this.RemoveFromHistoryButton[1].moveTo();
        await this.RemoveFromHistoryButton[1].click();
    }

    async removeRemainingGames() {
        await this.RemoveFromHistoryButton[1].moveTo();
        await this.RemoveFromHistoryButton[1].click();
        await this.RemoveFromHistoryButton[1].moveTo();
        await this.RemoveFromHistoryButton[1].click();
        await this.RemoveFromHistoryButton[1].moveTo();
        await this.RemoveFromHistoryButton[1].click();
        await this.RemoveFromHistoryButton[1].moveTo();
        await this.RemoveFromHistoryButton[1].click();
        await this.RemoveFromHistoryButton[1].moveTo();
        await this.RemoveFromHistoryButton[1].click();
    }

    async gameCheckTop() {
        const boardGames = [
            "CATAN",
            "Carcassonne",
            "Ticket to Ride",
            "Pandemic",
            "Chess",
            "Monopoly",
            "Risk",
            "Codenames",
            "Clue",
            "Scrabble",
            "King of Tokyo"
          ];
        await expect(this.RecentlyViewedTabGameLink[0]).toHaveText(expect.stringContaining(boardGames[10]));
    }
    
    async gameCheck1() {
        const boardGames = [
            "CATAN",
            "Carcassonne",
            "Ticket to Ride",
            "Pandemic",
            "Chess",
            "Monopoly",
            "Risk",
            "Codenames",
            "Clue",
            "Scrabble",
            "King of Tokyo"
          ];

        await expect(this.RecentlyViewedTabGameLink[0]).toHaveText(expect.stringContaining(boardGames[9]));
        await expect(this.RecentlyViewedTabGameLink[1]).toHaveText(expect.stringContaining(boardGames[8]));
        await expect(this.RecentlyViewedTabGameLink[2]).toHaveText(expect.stringContaining(boardGames[7]));
        await expect(this.RecentlyViewedTabGameLink[3]).toHaveText(expect.stringContaining(boardGames[6]));
        await expect(this.RecentlyViewedTabGameLink[4]).toHaveText(expect.stringContaining(boardGames[5]));
        await expect(this.RecentlyViewedTabGameLink[5]).toHaveText(expect.stringContaining(boardGames[4]));
        await expect(this.RecentlyViewedTabGameLink[6]).toHaveText(expect.stringContaining(boardGames[3]));
        await expect(this.RecentlyViewedTabGameLink[7]).toHaveText(expect.stringContaining(boardGames[2]));
        await expect(this.RecentlyViewedTabGameLink[8]).toHaveText(expect.stringContaining(boardGames[1]));
        await expect(this.RecentlyViewedTabGameLink[9]).toHaveText(expect.stringContaining(boardGames[0]));
    }

    async gameCheck2() {
        const boardGames = [
            "CATAN",
            "Carcassonne",
            "Ticket to Ride",
            "Pandemic",
            "Chess",
            "Monopoly",
            "Risk",
            "Codenames",
            "Clue",
            "Scrabble",
            "King of Tokyo"
          ];

        await expect(this.RecentlyViewedTabGameLink[0]).toHaveText(expect.stringContaining(boardGames[9]));
        await expect(this.RecentlyViewedTabGameLink[1]).toHaveText(expect.stringContaining(boardGames[5]));
        await expect(this.RecentlyViewedTabGameLink[2]).toHaveText(expect.stringContaining(boardGames[4]));
        await expect(this.RecentlyViewedTabGameLink[3]).toHaveText(expect.stringContaining(boardGames[3]));
        await expect(this.RecentlyViewedTabGameLink[4]).toHaveText(expect.stringContaining(boardGames[2]));
        await expect(this.RecentlyViewedTabGameLink[5]).toHaveText(expect.stringContaining(boardGames[1]));
        await expect(this.RecentlyViewedTabGameLink[6]).toHaveText(expect.stringContaining(boardGames[0]));
    }

    async gameCheck3() {
        const boardGames = [
            "CATAN",
            "Carcassonne",
            "Ticket to Ride",
            "Pandemic",
            "Chess",
            "Monopoly",
            "Risk",
            "Codenames",
            "Clue",
            "Scrabble",
            "King of Tokyo"
          ];

        await expect(this.RecentlyViewedTabGameLink[0]).toHaveText(expect.stringContaining(boardGames[9]));
        await expect(this.RecentlyViewedTabGameLink[1]).toHaveText(expect.stringContaining(boardGames[0]));
    }

    async gameCheck4() {
        const boardGames = [
            "CATAN",
            "Carcassonne",
            "Ticket to Ride",
            "Pandemic",
            "Chess",
            "Monopoly",
            "Risk",
            "Codenames",
            "Clue",
            "Scrabble",
            "King of Tokyo"
          ];

        await expect(this.RecentlyViewedTabGameLink[0]).toHaveText(expect.stringContaining(boardGames[0]));
        await expect(this.RecentlyViewedTabGameLink[1]).toHaveText(expect.stringContaining(boardGames[9]));
    }
}

export default new RecentlyViewed();