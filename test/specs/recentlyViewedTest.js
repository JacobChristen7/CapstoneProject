import RecentlyViewed from '../pageobjects/recentlyViewed.js';


describe('Recently Viewed', () => {
    it('Searched items are where they should be in the tab', async () => {
        await RecentlyViewed.recentlyViewedFullTest();
    })
})