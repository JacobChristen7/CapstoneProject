import { browser } from '@wdio/globals'


export default class DefaultPage {
    open () {
        return browser.url(`https://store.steampowered.com/`)
    }
}