const puppeteer = require('puppeteer');
const fs = require('fs');
const downloadImageDirectoryPath = './timetables'


async function scrapeImages() {
    console.log('SCRAPING')
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const client = await page.target().createCDPSession();
    await client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: downloadImageDirectoryPath,
    });
    await page.goto('https://nextlevel.worldmanager.com/admin/login-next.php')
    await page.type('[name=username]', 'daffa.fathurohman')
    await page.type('[name=password]', 'P@55word.3276')
    await page.click('[name=loginbutton]')
    await page.waitForSelector('section.widget-box')
    await page.goto('https://nextlevel.worldmanager.com/admin/ctrl?page=forum/view_forum&forum_id=70')
    await page.click('tr.legacy-angular-js:nth-child(2) > td:nth-child(1)')
    await page.waitForSelector('.details > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > strong:nth-child(1)')
    //await page.click('.details > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(1) > a:nth-child(1)')
    const data = await page.evaluate(() => {
        const images = document.querySelector('.details > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(1) > a:nth-child(1)')
        return 'https://nextlevel.worldmanager.com' + images.getAttribute('href')
    })
    console.log(data)
    return data
}

module.exports = {
    scrapeImages
}
