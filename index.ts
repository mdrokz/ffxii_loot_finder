import * as puppeteer from 'puppeteer';

(async () => {

    let browser = await puppeteer.launch({headless: false});

    let tab = (await browser.pages())[0];

    await tab.goto("https://finalfantasy.fandom.com/wiki/Loot_(Final_Fantasy_XII)#A");
    
    tab.waitForNavigation({waitUntil: ['domcontentloaded']});

})()