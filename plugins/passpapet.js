const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');

const LITEN15_UP = "*✍️EXAM:* *O/L*\n*⭕SUBJECT:* *ENGLISH LITERATURE*\n*📂YEAR:* *2015*\n*📤UPLOADING...*"
const LITEN16_UP = "*✍️EXAM:* *O/L*\n*⭕SUBJECT:* *ENGLISH LITERATURE*\n*📂YEAR:* *2016*\n*📤UPLOADING...*"
const LITEN17_UP = "*✍️EXAM:* *O/L*\n*⭕SUBJECT:* *ENGLISH LITERATURE*\n*📂YEAR:* *2017*\n*📤UPLOADING...*"
const LITEN18_UP = "*✍️EXAM:* *O/L*\n*⭕SUBJECT:* *ENGLISH LITERATURE*\n*📂YEAR:* *2018*\n*📤UPLOADING...*"
const LITEN19_UP = "*✍️EXAM:* *O/L*\n*⭕SUBJECT:* *ENGLISH LITERATURE*\n*📂YEAR:* *2019*\n*📤UPLOADING...*"

// LIST
const EFFECT_DESC = "to download past papers."
const NEED_WORD = "*input command*"

if (Config.NEOA == 'aca83a4354ac') {
Asena.addCommand({pattern: '15liten ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://drive.google.com/u/1/uc?id=1KTBaqHoUtQaUID88cq68g6g0apli2nvl&export=download`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,LITEN15_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '16liten ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://drive.google.com/u/1/uc?id=14Np2ItrYSHFzZgdparhg4XMSne2LMyzx&export=download`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,LITEN16_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '17liten ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://drive.google.com/u/1/uc?id=1L82DwFreYlJn4LyNj2g2nyh0R6cGGSQj&export=download`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,LITEN17_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '18liten ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://drive.google.com/u/1/uc?id=1-7nYuPMgLyc3wlBb9datsHPH55uiIatB&export=download`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,LITEN18_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Asena.addCommand({pattern: '19liten ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://drive.google.com/u/1/uc?id=1PuEAzYCNYi5YPjkgYbG1bL-t-zYvf52g&export=download`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,LITEN19_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));




}
