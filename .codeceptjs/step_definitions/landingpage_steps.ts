const { I } = inject();

When(/^I go to the root of the site$/, async () => {
    await I.amOnPage('/');
});

Then(/^I see the landing page with the text "([^"]*)"$/, async (text: string) => {
    await I.see(text);
});