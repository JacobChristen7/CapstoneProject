import DefaultPage from './defaultPage.js';
import AddToCollection from "../pageobjects/addToCollection";


describe('Add Game', () => {
    it('Game was added to collection and removed', async () => {
        await AddToCollection.searchForGame('Terraforming Mars');
    })
})