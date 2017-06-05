import { JandrPropertiesPage } from './app.po';

describe('jandr-properties App', () => {
  let page: JandrPropertiesPage;

  beforeEach(() => {
    page = new JandrPropertiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
