const fs = require("fs");
const path = require("path");

const INDEXNOW_KEY = "d1272b723e3dfdd5fcb2d1d0728f89bb";
const HOST = "www.godfatherfunnelai.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

async function fetchSitemap() {
  console.log(`Fetching sitemap from ${SITEMAP_URL} ...`);
  const res = await fetch(SITEMAP_URL);
  const text = await res.text();
  const matches = text.match(/<loc>(.*?)<\/loc>/g) || [];
  const urls = matches.map((m) => m.replace(/<\/?loc>/g, ""));
  console.log(`Found ${urls.length} URLs in sitemap.`);
  return urls;
}

async function submitIndexNow(urls) {
  if (urls.length === 0) {
    console.log("No URLs to submit.");
    return;
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
  ];

  for (const endpoint of endpoints) {
    console.log(`Submitting ${urls.length} URLs to ${endpoint} ...`);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });

      if (res.ok || res.status === 200 || res.status === 202) {
        console.log(`SUCCESS (${res.status}): IndexNow submission to ${endpoint} accepted!`);
      } else {
        const errText = await res.text();
        console.log(`HTTP ${res.status} from ${endpoint}: ${errText}`);
      }
    } catch (err) {
      console.error(`Error submitting to ${endpoint}:`, err.message);
    }
  }
}

async function main() {
  try {
    const urls = await fetchSitemap();
    await submitIndexNow(urls);
  } catch (err) {
    console.error("IndexNow script failed:", err);
  }
}

main();
