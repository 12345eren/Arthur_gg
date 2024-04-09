// كود تم نشره بواسطه obito
// تابع لقناه https://whatsapp.com/channel/0029VaSQX1TI1rcbxtQZ5518
let handler = async (m, { conn }) => {
let done = '🩶'; 
       m.react(done);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*⎔↞┃اهلين اكتب الاوامر للمساعدة┃*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/5cbf1d6fcd25dea5b80cb.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
