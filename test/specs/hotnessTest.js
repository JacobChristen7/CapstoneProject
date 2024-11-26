import Login from '../pageobjects/login.js';
import HamburgerMenu from '../pageobjects/hamburger.js';


describe('The Hotness', () => {
    it('All links in the hotness sidebar link to the right page', async () => {
        await HamburgerMenu.hamburgerFunction();
        await HamburgerMenu.theHotnessCheck();
    })
})

