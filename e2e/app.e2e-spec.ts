import { Website4Page } from './app.po';

describe('website4 App', function() {
  let page: Website4Page;

  beforeEach(() => {
    page = new Website4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
