import Login from '../pageobjects/login.js';
import HamburgerMenu from '../pageobjects/hamburger.js';


describe('Logging into site', () => {
    it('User was logged in', async () => {
        await Login.loginFullTest('YummyZombie', 'autoTest88');
    })
})