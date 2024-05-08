const axios = require('axios');

module.exports = class {
  static config = {
    name: "bing",
    description: "Talk to Bing AI",
    prefix: true,
    accessableby: 0,
    author: "Deku",
  };

  static async start({ reply, event, text, react }) {
    try {
      const ask = text.join(' ');
      if (!ask) return reply('Missing prompt!');
      
      const r = Math.floor(Math.random() * 3) + 1;
      react('⏳');
      
      const response = await axios.get("https://joshweb.click/bing?prompt=" + ask + "&mode=" + r);
      
      react('⌛');
      
      return reply(response.data.bing);
    } catch (e) {
      return reply(e.message);
    }
  }
}
