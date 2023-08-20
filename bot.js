const { Telegraf, Markup } = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('6307148351:AAEerLWT4UWMWJZMt5d0X4NigbYewGr0wEk');
const DATA_URL = 'https://sovann-digital.github.io/sdau-data/data/data-sdau.json';
const PHOTO_URL = 'https://imgs.search.brave.com/1ceNxYMVBSYwbGpdRw2Es-AyucQw-FP8o2ciL7ep7CY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjE1/NTgyNDAyL3Bob3Rv/L21lZXJrYXQtY2F0/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1haEVRaEp5aVdO/Yk1VdUdscWZsbktr/dXpyRU5iM0h4UTZi/NU9Hc29PRkxJPQ';


bot.start(async (ctx) => {
    try {
        await ctx.replyWithPhoto({ url: PHOTO_URL }, { caption: '👇ជ្រើសរើសក្រុងឬស្រុក' });

        const jsonData = await axios.get(DATA_URL);
        const communes = jsonData.data[0]?.Communes;

        if (communes) {
            const buttons = communes.map(commune => Markup.button.callback(commune.name, `commune_${commune.name}`));
            const keyboard = Markup.inlineKeyboard(buttons, { columns: 3 });

            await ctx.reply('សូមជ្រើសរើសឃុំរបស់អ្នក:', keyboard);
        } else {
            console.log("Commune data not found.");
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

bot.action(/commune_(.+)/, async (ctx) => {
    ctx.deleteMessage();
    try {
        const selectedCommuneName = ctx.match[1];
        const jsonData = await axios.get(DATA_URL);
        const selectedCommune = jsonData.data[0]?.Communes.find(commune => commune.name === selectedCommuneName);

        if (selectedCommune) {
            const villageButtons = selectedCommune.villages.map(village => Markup.button.callback(village.name, `village_${village.command}`));
            const villageKeyboard = Markup.inlineKeyboard(villageButtons, { columns: 3 });

            await ctx.reply('សូមជ្រើសរើសភូមិ:', villageKeyboard);
        } else {
            console.log("Selected commune not found.");
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

bot.action(/village_(.+)/, async (ctx) => {
    try {
        const villageCommand = ctx.match[1];
        const jsonData = await axios.get(DATA_URL);
        const villages = jsonData.data[0]?.Communes.flatMap(commune => commune.villages);
        const villageData = villages.find(village => village.command === villageCommand);

        if (villageData) {
            const services = villageData.Services;
            const servicesText = services.map(service => `(${service.name}) ${service.phonenumber.hotline}`).join('\n');
            // await ctx.answerCbQuery(services.name)
            await ctx.reply(`សេវាកម្មដែលអាចត្រូវបានផ្តល់ជូន:\n${servicesText}`);
        } else {
            console.log("Selected village not found.");
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

bot.settings((ctx) => {
    ctx.reply("Bot setting of command")
})

bot.launch();