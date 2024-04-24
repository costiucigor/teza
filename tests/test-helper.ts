import type { Page } from "@playwright/test"

const Config = {
  homepageURL: 'http://localhost:63342/',
  openAiURL: 'https://api.openai.com/v1/images/generations',
  apiRoute: (page: Page) => page.route(Config.openAiURL, async route => {
    console.log("apiRoute function called");
    await route.fulfill({
      body: JSON.stringify({ data: [{ url: 'http://localhost/test-image.png' }] })
    })
  })
}

export default Config
