import Hotness from '../pageobjects/hotness';


describe('The Hotness', () => {
    it('All links in the hotness sidebar link to the right page', async () => {
        await Hotness.hamburgerFunction();
        await Hotness.theHotnessCheck();
    })
})

