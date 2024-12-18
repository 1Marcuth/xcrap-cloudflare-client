import PuppeteerExtraClient, { PuppeteerExtraClientOptions } from "xcrap-puppeteer-extra-client"
import StealthPlugin from "puppeteer-extra-plugin-stealth"

class CloudflareClient extends PuppeteerExtraClient {
    constructor({ plugins, ...options }: PuppeteerExtraClientOptions = {}) {
        const cloudflarePlugins = [StealthPlugin()]
        const adjustedPlugins = [...plugins ?? [], ...cloudflarePlugins]

        super({
            plugins: adjustedPlugins,
            ...options,
        })    
    }
}

const cloudflareClient = new CloudflareClient()

export default CloudflareClient