import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'


export default class DefaultPage {
    
    get HamburgerOpen () {
        return $('button[class="btn btn-empty header-icon tw-mr-2 tw-hidden tw-self-center tw-rounded tw-p-1.5 tw-leading-none tw-outline-none hover:tw-bg-purple-dark hover:tw-text-white focus:tw-bg-purple-dark focus:tw-text-white xl:tw-block"]')
    }

    
    openPage () {
        return browser.url(`https://boardgamegeek.com/`)
    }
}