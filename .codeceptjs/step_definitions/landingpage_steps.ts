const { I } = inject();

When(/^I go to the root of the site$/, async (): Promise<void> => {
    await I.amOnPage('/');
});

Then(/^I see the landing page with the text "([^"]*)"$/, async (text: string): Promise<void> => {
    await I.see(text);
});
Then(/^I see the landing page with the title "([^"]*)"$/, async (title: string): Promise<void> => {
    await I.seeTitleEquals(title);
});