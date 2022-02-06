const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options();
options.addArguments("--disable-notifications");

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome')
    .setChromeOptions(options)
    .build();
  
    await driver.get('https://www.facebook.com');
    driver.manage().setTimeouts({implicit: 0.5 });
    let acceptCookiesButton = await driver.findElement(By.css('button[data-testid="cookie-policy-dialog-accept-button"'));
    await acceptCookiesButton.click();

    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('pass'));
    let submitButton = await driver.findElement(By.css('button[name="login"]'));

    await emailField.sendKeys("myemailaddress");
    await passwordField.sendKeys('mypassword');
    await submitButton.click();

    await driver.findElement(By.css('div[aria-label="Messenger"]')).click();

    await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.wait(until.elementLocated(By.
      className('rq0escxv du4w35lb i09qtzwb oaz4zybt n7fi1qx3 pmk7jnqg j9ispegn kr520xx4 s45kfl79 emlxlaya bkmhp75w spb7xbtv')),10000).click();
    
    const messageField = await driver.wait(until.elementLocated(By.css('div[aria-label="Üzenet"]')),10000);
    await messageField.sendKeys('Message you want to send');
    await driver.findElement(By.css('div[aria-label="Küldés Enterrel"]')).click();

    await driver.quit();
})();





