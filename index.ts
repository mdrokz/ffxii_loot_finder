// Dependencies
import * as puppeteer from 'puppeteer';


// Standard Library
import * as fs from 'fs';


// Types

export interface LootTable {
    info: {
        name: string,
        price: string,
        drop: string,
        monograph_drop: string,
        steal: string,
        poach: string,
        reward: string
    },
    description: string,
    baazar: {
        items: string[]
    }
}

// Main

const script_file = fs.readFileSync('./scrape.js').toString();

export default async (): Promise<LootTable> => {

    let browser = await puppeteer.launch({headless: true,defaultViewport: {height: 800,width: 800}});

    let tab = (await browser.pages())[0];

    await tab.goto("https://finalfantasy.fandom.com/wiki/Loot_(Final_Fantasy_XII)#A",{waitUntil: ['domcontentloaded']});
    
    const loot_table: LootTable = await tab.evaluate(script_file);

    await tab.close();

    await browser.close();

    return Promise.resolve(loot_table);

};