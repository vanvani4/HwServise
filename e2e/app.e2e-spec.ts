import { HwServisePage } from './app.po';

describe('hw-servise App', () => {
  let page: HwServisePage;

  beforeEach(() => {
    page = new HwServisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
