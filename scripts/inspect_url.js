const { google } = require('googleapis');
const path = require('path');

const keyPath = 'C:/Users/gmaro/Downloads/airgenergie-calendar.json';

async function main() {
    const auth = new google.auth.GoogleAuth({
        keyFile: keyPath,
        scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const searchconsole = google.searchconsole({ version: 'v1', auth });

    const urlsToInspect = [
        'https://www.ductedexpert.com/',
        'https://www.ductedexpert.com/en',
        'https://www.ductedexpert.com/en/hvac/united-kingdom/london',
    ];

    for (const url of urlsToInspect) {
        try {
            const res = await searchconsole.urlInspection.index.inspect({
                requestBody: {
                    inspectionUrl: url,
                    siteUrl: 'sc-domain:ductedexpert.com',
                }
            });
            const r = res.data.inspectionResult.indexStatusResult;
            console.log(`URL: ${url}`);
            console.log(`  verdict: ${r.verdict}`);
            console.log(`  coverageState: ${r.coverageState}`);
            console.log(`  indexingState: ${r.indexingState}`);
            console.log(`  lastCrawlTime: ${r.lastCrawlTime}`);
            console.log(`  robotsTxtState: ${r.robotsTxtState}`);
        } catch (e) {
            console.error(`Error inspecting ${url}:`, e.message);
        }
    }
}

main();
