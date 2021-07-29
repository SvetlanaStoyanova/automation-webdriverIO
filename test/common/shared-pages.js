module.exports = {
    openApp: async (url) => {
        await browser.url(url);
    }
}