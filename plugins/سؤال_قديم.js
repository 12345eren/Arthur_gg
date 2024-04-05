import fs from 'fs';
const timeout =  ❪ 60000 ❫;
const poin =  ❪ 500 ❫;
const handler = async (m, {conn, usedPrefix}) => {
  conn.tekateki = conn.tekateki ? conn.tekateki : {};
  const id = m.chat;
  if (id in conn.tekateki) {
    conn.reply(m.chat, '〈 لا تزال هناك سؤال لم تتم الإجابة عليها في هذه الدردشة 💧↫〉', conn.tekateki[id][0]);
    throw false;
  }
  const tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`));
  const json = tekateki[Math.floor(Math.random() * tekateki.length)];
  const _clue = json.response;
  const clue = _clue.replace(/[A-Za-z]/g, '_');
  const caption =`
 *┏━━━━━━⊰⚔️⊱━━━━━━┓*
ⷮ *${json.question}*
*❍⤪┇⌚ الــوقــت ${(timeout / 1000).toFixed(2)} ثــانـيـة
*❍⤪┇⚡️ الجوائز:* +${poin}  نــقـطـه 
*┗━━━━━━⊰⚔️⊱━━━━━━┛*
*┇𝑬𝑹𝑰𝑵- 𝑩𝑶𝑻┇*`.trim();
  conn.tekateki[id] = [
    await conn.reply(m.chat, caption, m), json,
    poin,
    setTimeout(async () => {
      if (conn.tekateki[id]) await conn.reply(m.chat, `*『𒀭خلص الوقت┇𒀭』*\n💧↫الاجـابـة┇⤪❍* ${json.response}`, conn.tekateki[id][0]);
      delete conn.tekateki[id];
    }, timeout)];
};
handler.help = ['acertijo'];
handler.tags = ['game'];
handler.command = /^(سؤال|acert|pregunta|adivinanza|tekateki)$/i;
export default handler;
