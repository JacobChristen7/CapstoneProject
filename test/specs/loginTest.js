import Login from '../pageobjects/login.js';


describe('Logging into site', () => {
    it('User was logged in', async () => {
        await Login.loginFullTest('YummyZombie', 'autoTest88');
    })
})