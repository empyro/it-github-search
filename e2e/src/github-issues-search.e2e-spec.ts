import { browser, logging } from 'protractor';
import { GithubIssuesSearchPage } from './github-issues-search.po';

describe('GithubIssuesSearchPage', () => {
  let page: GithubIssuesSearchPage;

  beforeEach(() => {
    page = new GithubIssuesSearchPage();
  });

  it('should show expected cards', async () => {
    // Arrange
    await page.navigateTo();

    // Act
    await page.setUrl('https://github.com/angular/angular');

    // Assert
    expect(await page.getCardsCount()).toBe(10);
  });

  it('should show more cards with pagination', async () => {
    // Arrange
    await page.navigateTo();
    await page.setUrl('https://github.com/angular/angular');

    // Act
    await page.clickOnGetMoreCards();

    // Assert
    expect(await page.getCardsCount()).toBe(20);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
