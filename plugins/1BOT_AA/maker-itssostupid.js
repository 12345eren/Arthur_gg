const handler = async (m, {conn, args}) => {
  const text = args.slice(1).join(' ');
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
try {
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/its-so-stupid', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    dog: text || 'im+stupid',
  }), 'error.png', `*@${author}*`, m);
} catch (e) {
console.log(e)}}
handler.help = ['itssostupid', 'iss', 'stupid'];
handler.tags = ['maker'];
handler.command = /^(itssostupid|iss|stupid)$/i;
handler.limit = 1
handler.register = true
export default handler;
