import { Clase2yeyPage } from './app.po';

describe('clase2yey App', function() {
  let page: Clase2yeyPage;

  beforeEach(() => {
    page = new Clase2yeyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
