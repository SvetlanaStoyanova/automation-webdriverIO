import * as common from '../common/shared-pages';

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


