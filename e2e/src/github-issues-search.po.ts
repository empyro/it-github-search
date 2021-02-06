import { $, $$, browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class GithubIssuesSearchPage {
  private urlInputSelector = '[name="url"]';
  private cardsSelector = '.github-issue-card'
  private moreGithubIssuesButtonSelector = 'button.more-github-issues';

  async navigateTo() {
    return await browser.get(browser.baseUrl);
  }

  async setUrl(url: string) {
    const $urlInput = $(this.urlInputSelector);
    await $urlInput.sendKeys(url);
    await $urlInput.sendKeys(protractor.Key.ENTER);
  }

  async clickOnGetMoreCards() {
    const $button = $(this.moreGithubIssuesButtonSelector);
    await $button.click();
  }

  async getCardsCount() {
    return await $$(this.cardsSelector).count();
  }
}
