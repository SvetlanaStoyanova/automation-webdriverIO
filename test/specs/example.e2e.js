import * as common from '../common/shared-pages';
import * as registerDevToolsEvent from '../helpers/shared-functions'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });

describe('Open TO-DO application', () => {
    it('should go to react to-do url', async () =>{
        await common.openApp("https://todomvc.com/examples/react/#/");
    });
})

describe('register an event listener to a Chrome DevTools event', () => {
    it('dev tools network events should be printed', async () => {
        // await browser.cdp('Network', 'enable')
        // await browser.on('Network.responseReceived', (params) => {
        //     console.log(`Loaded ${params.response.url}`)
        // })
        await registerDevToolsEvent.registerDevToolsEventListener();
        await browser.url('https://www.google.com')
    })
})

