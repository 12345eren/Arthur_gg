let handler = async (m, { conn }) => {
let done = '🩶'; 
       m.react(done);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@اهلين' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*⎔↞┃ هل تحتاج على مساعده اكتب الاوامر┃*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/5cbf1d6fcd25dea5b80cb.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
