import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// Using fetch to get the sitemap
async function fetchSitemap() {
  console.log('Fetching sitemap from https://www.godfatherfunnelai.com/sitemap.xml ...');
  const res = await fetch('https://www.godfatherfunnelai.com/sitemap.xml');
  const text = await res.text();
  
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function bulkIndex(urls) {
  console.log(`Found ${urls.length} URLs in sitemap.`);
  
  const keyPath = path.join(process.cwd(), 'credentials.json');
  if (!fs.existsSync(keyPath)) {
    console.error('Error: credentials.json not found in root directory.');
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();

  const indexing = google.indexing({
    version: 'v3',
    auth: authClient
  });

  console.log('Authenticating with Google Indexing API...');
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED'
        }
      });
      console.log(`[${i+1}/${urls.length}] SUCCESS: ${url} (Status: ${response.status})`);
      successCount++;
    } catch (error) {
      if (error.code === 429) {
        console.error(`\n[!] QUOTA EXCEEDED (429) at URL ${i+1}. Google's default daily limit is usually 200 URLs/day.`);
        console.error(`You have successfully submitted ${successCount} URLs today. Run this script again tomorrow, or request a quota increase in Google Cloud.`);
        break; 
      } else {
        console.error(`[${i+1}/${urls.length}] ERROR submitting ${url}: ${error.message}`);
        errorCount++;
      }
    }
  }
  
  console.log(`\nDONE! Successfully submitted: ${successCount}. Errors: ${errorCount}.`);
}

fetchSitemap().then(bulkIndex).catch(console.error);
