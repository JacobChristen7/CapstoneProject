import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'


export default class DefaultPage {
    openPage () {
        return browser.url(`https://boardgamegeek.com/`)
    }
}