const axios = require('axios');
const api = `https://gemini-api.replit.app`;
module.exports = {
  config: {
    name: 'geminiadvance',
    author: 'Deku',
    role: 0,
    category: 'ai',
    shortDescription: 'gemini (conversational)',
  },
  onStart: async function ({ api, event, args, message }) {
    const prompt = args.join(' '),
    uid = event.senderID;
   let url;
    if (!prompt) return message.reply('Missing prompt.');
  if (event.type == "message_reply"){
        if (event.messageReply.attachments[0]?.type == "photo"){
        url = encodeURIComponent(event.messageReply.attachments[0].url);
        const res = (await axios.get(api + "/gemini?prompt="+prompt+"&url="+url+"&uid="+uid)).data;
        return message.reply(res.gemini)
        } else {
          return message.reply('Please reply to an image.')
        }
      }
      const rest = (await axios.get(api + "/gemini?prompt=" + prompt + "&uid=" + uid)).data;
      return message.reply(rest.gemini)
  }
                    }
