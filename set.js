const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkRGMFAwMmtFQndXYTRaWXVHTFR3QktUQkt6SWhGemF4cFkxWWpVcmRYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1FiOHNUVlBJNFlEQ256cG5jT0ZITUxHNkRMZ0hrK0JQTVpQRzNYWDRBUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSjJxODErVWdXWVowOGxYZU9PTWFHZ1ZFREcrY05ablBkQmgrWGhGRG00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWS2lCQTlvOVkyNHV0N3Y3YTd1NXMvVzRUZnBTOUZ1VnQvQzRxL1hDb1hVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdKOGU1RWRRQnYvV2Npc29aS3d5UlIvcDBzcEQvZzB0cUlqaXh6d0ZXR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtFbG5OTlE1MnFNSTVxNHRpcHJsbXF0ZHZCMzNqcUZsMDVNL2lkRXdWbTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dRZ1lvOUh0aFhUKzMycksvTDh0TEJ6NUdEVFRvWklPVndHSThtNllYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidW5XY2s2Q01vTnJkeUd5SmErejQzcEVGTU15N2t5Vkp2bFF0WEovNTVqaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktaMnNIT1IyQVZJVEpiNjdjczlpekNZVldHQ1JPNWI4amJCUWVOTGlrbUhDZ0Z1TkF6TjQrVTBjNzRkQzJmdGozVWlXeXpiV0dodHlQU1psdTZqL0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6Imd1eWtNS3BkNmhlTkFJK1lHUFJWK1ZVT1ZBRjdjckRhNlNPYzBtZGxOMUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBKTjl0ZngzUWcyTmVMUE5uUGZuWlEiLCJwaG9uZUlkIjoiOWIwOGQzNDctZTA3Ni00ZDlkLWI1NTEtMjRjY2I4NTA2YzcyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill1MzhCeHVuL2t2WWVza3VJWjg2WmZjYjFMQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMY1Q0cEhIZUxtelJaL2Jmc0lPandTZG9WV2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFBUTFpUUDgiLCJtZSI6eyJpZCI6Ijk0NzY1NzgxNDAzOjExQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNbkx5NGdCRUxlNjlMY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBL0lmWXlQZDMzUi9odTM2bEdyRWx1Wm9UNXptYklBZlZDeXB1dnFVL3gwPSIsImFjY291bnRTaWduYXR1cmUiOiJ4UzFCSjhOUkNDRTV5VDNZTDh6dW1yWjZDaE9XZUhnbXhVSk9RT001aUpzdXFxNkYrUjdCTmFTZk5tNmQ2ZmRYcHlwQ3QwanRrZktSblgxeU1heVpCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS1EzRG40cTBFZnBSMW1EOEJoVjdGeUtUMWhUTUlVQjBlZzl6cmNqUUFBd0kxOEt2T09mTnlVM2d6K1lqK2VuT2hsZGFqbko2YjlVTkpVb3YxSHpyQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NTc4MTQwMzoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRUHlIMk1qM2Q5MGY0YnQrcFJxeEpibWFFK2M1bXlBSDFRc3FicjZsUDhkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3ODY0MTMzfQ==| 'zokk',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME |Athal_Podda| "⚔  dexter  ⚔",
    NUMERO_OWNER : process.env.OWNER_NUMBER |+94765781403| "",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS |true| "oui",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS |false| 'non',
    BOT : process.env.BOT_NAME |DEXTER-MD| 'DEXTER-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS |true| 'https://static.animecorner.me/2023/08/op2.jpg',
    MODE: process.env.PUBLIC_MODE |false| "no",
    PM_PERMIT: process.env.PM_PER|false| 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT |.menu| '3' ,
    ETAT : process.env.PRESENCE |false| '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE |true| "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE |false| 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
