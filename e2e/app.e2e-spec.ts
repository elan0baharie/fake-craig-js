import { FakeCraigPage } from './app.po';

describe('fake-craig App', () => {
  let page: FakeCraigPage;

  beforeEach(() => {
    page = new FakeCraigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
