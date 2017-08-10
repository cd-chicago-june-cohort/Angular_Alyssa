import { UsTimezoneDisplayPage } from './app.po';

describe('us-timezone-display App', () => {
  let page: UsTimezoneDisplayPage;

  beforeEach(() => {
    page = new UsTimezoneDisplayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
