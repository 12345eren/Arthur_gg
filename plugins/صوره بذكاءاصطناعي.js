import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*┊┃🚫┃✓هذا الأمر خاص بتوليد الصور باستعمال الذكاء الإصطناعي✓*\n\n*مثال*\n*${usedPrefix + command} girl and yellow cat*`;

  try {
    m.reply('*✓┃الرجاء الانتظار، جاري إنشاء الصور...✓┃*');

    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);

    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*فشل إنشاء الصورة*';
    }
  } catch {
    throw '*أُووبس! حدث خطأ ما أثناء إنشاء الصور. الرجاء معاودة المحاولة في وقت لاحق.*';
  }
};

handler.help = ['dalle'];
handler.tags = ['drawing'];
handler.command = ['ارسم'];
export default handler;
