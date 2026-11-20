const { google } = require('googleapis');
const path = require('path');

const keyPath = 'C:/Users/gmaro/Downloads/airgenergie-calendar.json';

async function main() {
    const auth = new google.auth.GoogleAuth({
        keyFile: keyPath,
        scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const searchconsole = google.searchconsole({ version: 'v1', auth });
    const siteUrl = 'sc-domain:ductedexpert.com';

    for (let i = 1; i <= 12; i++) {
        const feedpath = `https://www.ductedexpert.com/sitemap/${i}.xml`;
        try {
            await searchconsole.sitemaps.submit({
                siteUrl,
                feedpath,
            });
            console.log(`✓ Submitted: ${feedpath}`);
        } catch (e) {
            console.error(`✗ Error on ${feedpath}:`, e.message);
        }
    }

    const listRes = await searchconsole.sitemaps.list({ siteUrl });
    console.log(`\nTotal registered sitemaps in GSC: ${listRes.data.sitemap?.length || 0}`);
}

main();
