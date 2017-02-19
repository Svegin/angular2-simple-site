import { Angular2SimpleSitePage } from './app.po';

describe('angular2-simple-site App', () => {
  let page: Angular2SimpleSitePage;

  beforeEach(() => {
    page = new Angular2SimpleSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
