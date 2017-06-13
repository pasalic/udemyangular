import { MyFirstApp2Page } from './app.po';

describe('my-first-app2 App', () => {
  let page: MyFirstApp2Page;

  beforeEach(() => {
    page = new MyFirstApp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
