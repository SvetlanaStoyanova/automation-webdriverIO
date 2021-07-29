module.exports = {
    registerDevToolsEventListener: async () => {
        await browser.cdp('Network', 'enable')
        await browser.on('Network.responseReceived', (params) => {
            console.log(`Loaded ${params.response.url}`)
        })
    }
}