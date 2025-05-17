export default {
  async fetch() {
    return new Response(
      `<?xml version="1.0"?>
      <rss version="2.0">
        <channel>
          <title>Fake Server Status</title>
          <item>
            <title>[TEST] Server Down</title>
            <link>https://robertsspaceindustries.com</link>
            <pubDate>${new Date().toUTCString()}</pubDate>
            <guid>${Date.now()}</guid>
            <description>This is a test incident from Zapier setup.</description>
          </item>
        </channel>
      </rss>`,
      {
        headers: { "Content-Type": "application/rss+xml" }
      }
    );
  }
}
