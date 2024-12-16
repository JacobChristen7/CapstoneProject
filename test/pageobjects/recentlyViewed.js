import DefaultPage from './default.js'
import Login from './login.js'
import Info from './info.js';

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


    async recentlyViewedFullTest() {
        await this.openPage();
        await Login.login(Info.username, Info.password);
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
        await this.RecentlyViewedTabCollapse();
        await this.SeeAllButton.click();
        await this.removeGame(0);
        await this.GoHomeAndViewTab();
        await this.gameCheckAll();
        await this.SeeAllButton.click();
        await this.removeGamesMultiple1(3);
        await this.GoHomeAndViewTab();
        await this.gameCheck7Games();
        await this.SeeAllButton.click();
        await this.removeGamesMultiple1(5);
        await this.GoHomeAndViewTab();
        await this.gameCheck2Games(9, 0);
        await this.RecentlyViewedTabGameLink[1].click();
        await this.GoHomeAndViewTab();
        await this.gameCheck2Games(0, 9);
        await this.SeeAllButton.click();
        await this.removeGamesMultiple0(2);
    }

    async searchForGames() {

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

    async RecentlyViewedTabCollapse() {
        await this.RecentlyViewedTabArrow.click();
        await this.RecentlyViewedTabArrow.click();
    }

    async GoHomeAndViewTab() {
        await this.LogoLink.click();
        await this.HamburgerOpen.click();
    }

    async removeGame(num) {
        await this.RemoveFromHistoryButton[num].moveTo();
        await this.RemoveFromHistoryButton[num].click();
    }

    async removeGamesMultiple1(times) {
        for (let i = 0; i < times; i++) {
            await this.removeGame(1);
        }
    }

    async removeGamesMultiple0(times) {
        for (let i = 0; i < times; i++) {
            await this.removeGame(0);
        }
    }

    async gameCheckTop() {
        await expect(this.RecentlyViewedTabGameLink[0]).toHaveText(expect.stringContaining(boardGames[10]));
    }
    
    async gameCheckAll() {
        for (let i = 0; i < 10; i++) {
            await expect(this.RecentlyViewedTabGameLink[i]).toHaveText(expect.stringContaining(boardGames[9 - i]));
        }
    }

    async gameCheck7Games() {
        await expect(this.RecentlyViewedTabGameLink[0]).toHaveText(expect.stringContaining(boardGames[9]));
        await expect(this.RecentlyViewedTabGameLink[1]).toHaveText(expect.stringContaining(boardGames[5]));
        await expect(this.RecentlyViewedTabGameLink[2]).toHaveText(expect.stringContaining(boardGames[4]));
        await expect(this.RecentlyViewedTabGameLink[3]).toHaveText(expect.stringContaining(boardGames[3]));
        await expect(this.RecentlyViewedTabGameLink[4]).toHaveText(expect.stringContaining(boardGames[2]));
        await expect(this.RecentlyViewedTabGameLink[5]).toHaveText(expect.stringContaining(boardGames[1]));
        await expect(this.RecentlyViewedTabGameLink[6]).toHaveText(expect.stringContaining(boardGames[0]));
    }

    async gameCheck2Games(game1Num, game2Num) {
        await expect(this.RecentlyViewedTabGameLink[0]).toHaveText(expect.stringContaining(boardGames[game1Num]));
        await expect(this.RecentlyViewedTabGameLink[1]).toHaveText(expect.stringContaining(boardGames[game2Num]));
    }

}

export default new RecentlyViewed();