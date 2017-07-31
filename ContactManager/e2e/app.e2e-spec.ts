import { ContactManagerPage } from './app.po';

describe('contact-manager App', () => {
  let page: ContactManagerPage;

  beforeEach(() => {
    page = new ContactManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
