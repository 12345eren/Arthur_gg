import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/4ec39070a2d99fd6883d3.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = ` 
🪶┃شرح اوامر البوت✓┃🪶
 *❐↞『نورت ${taguser}』*
╮───────╯✦╰───────╭
*⎔┃اسـم البـوت ↞🏷️『 ايـريـن』*
*⎔┃وقت التشغيل ↞ 🖨️『 دائم』*
*⎔┃لوضـع الـبوت ↞⁉️『 عـام 』*
*⎔┃الـمـنـصـه ↞🌐『 هـيـروكـو』*
╯───────╮✦╭───────╰

✦━━━━━━━ •➢• ━━━━━━━✦
    *〄━━┋قائمـة المجموعات┋━━〄*
✦━━━━━━━ •➢• ━━━━━━━✦
*⎔↞┃💎✓『.منشن 』*
*⎔↞┃💎✓『.المشرفين』*
*⎔↞┃💎✓『.الاشباح』*
*⎔↞┃💎✓『.طرد』*
*⎔↞┃💎✓『.ترقيه』*
*⎔↞┃💎✓ 『.مخفي』*
*⎔↞┃💎✓ 『.دعوه』*
*⎔↞┃💎✓ 『.احذف』*
*⎔↞┃💎✓ 『.الجروب』*
*⎔↞┃💎✓ 『.جروب فتح』*
*⎔↞┃💎✓ 『.قفل』*
*⎔↞┃💎✓『.انذار』*
*⎔↞┃💎✓ 『.تغيير_اللينك』*
✦━━━━━━━ •➢• ━━━━━━━✦
     *〄━━┋ قائمـة الـترفيـه┋━━〄*
✦━━━━━━━ •➢• ━━━━━━━✦
*⎔↞┃💎✓ 『.بيحبني』*
*⎔↞┃💎✓ 『.بيكرهني』*
*⎔↞┃💎✓『.زوجني』*
*⎔↞┃💎✓ 『.صداقه』*
*⎔↞┃💎✓ 『.تاج』*
*⎔↞┃💎✓ 『.ارسم』*
*⎔↞┃💎✓ 『.شبيهي』*
*⎔↞┃💎✓ 『.سرقه』*
*⎔↞┃💎✓ 『.قلب』*
*⎔↞┃💎✓ 『.تخيل』*
*⎔↞┃💎✓ 『.ارسم』*
*⎔↞┃💎✓『.ميمز 』*
*⎔↞┃💎✓『.علم』*
*⎔↞┃💎✓『.احزر』*
*⎔↞┃💎✓『.سؤال』*
*⎔↞┃💎✓『.ديني』*
*⎔↞┃💎✓『.حب』*
*⎔↞┃💎✓ 『.رياضيات』*
*⎔↞┃💎✓ 『.كت』*
*⎔↞┃💎✓ 『.تج』*
*⎔↞┃💎✓ 『.هل』*
*⎔↞┃💎✓ 『.ورع』*
*⎔↞┃💎✓ 『.لو』*
*⎔↞┃💎✓ 『.زواج』*
*⎔↞┃💎✓ 『.طلاق』*
*⎔↞┃💎✓『.غباء』*
*⎔↞┃💎✓ 『.ذكاء』*
✦━━━━━━━ •➢• ━━━━━━━✦
     *〄━━┋ قائمـة التحميل┋━━〄*
✦━━━━━━━ •➢• ━━━━━━━✦
*⎔↞┃💎✓『.شغل』*
*⎔↞┃💎✓『.قرآن』*
*⎔↞┃💎✓『.صوره』*
*⎔↞┃💎✓『.تيك』*
*⎔↞┃💎✓『.بحث』*
*⎔↞┃💎✓『.المتجر』*
*⎔↞┃💎✓ 『.انستا』*
*⎔↞┃💎✓ 『.تطقيم』*
*⎔↞┃💎✓ 『.ايديت』*
*⎔↞┃💎✓ 『.ادت』*
*⎔↞┃💎✓ 『.صوتي』*
*⎔↞┃💎✓『.اغنيه』*
*⎔↞┃💎✓ 『.تليجراف』*
✦━━━━━━━ •➢• ━━━━━━━✦
     *〄━━┋ قائمـة الافتارت وخلفيات┋━━〄*
✦━━━━━━━ •➢• ━━━━━━━✦
*⎔↞┃💎✓ 『.جوجوتسو』*
*⎔↞┃💎✓ 『.عشوائي 』*
*⎔↞┃💎✓ 『.باراديس』*
*⎔↞┃💎✓ 『.مانهوو』*
*⎔↞┃💎✓ 『.خلفية-اولاد』*
*⎔↞┃💎✓ 『.خلفية-بنات』*
*⎔↞┃💎✓ 『.قدوتي』*
*⎔↞┃💎✓ 『.بنت』*
*⎔↞┃💎✓ 『.حقيقي』*
*⎔↞┃💎✓ 『.ميسي』*
*⎔↞┃💎✓ 『.رونالدو』*
*⎔↞┃💎✓ 『.تطقيم』*
✦━━━━━━━ •➢• ━━━━━━━✦
     *〄━━┋ قائمـة الأعضاء┋━━〄*
✦━━━━━━━ •➢• ━━━━━━━✦
*⎔↞┃💎✓『.يومي』*
*⎔↞┃💎✓『.لفل』*
*⎔↞┃💎✓『.بنك』*
*⎔↞┃💎✓『.رتبة』*
*⎔↞┃💎✓『.حظي』*
*⎔↞┃💎✓ 『.نصحيه』*
*⎔↞┃💎✓ 『.شخصيه』*
*⎔↞┃💎✓ 『.منشني』*
*⎔↞┃💎✓『.بروفايل』*
*⎔↞┃💎✓ 『.المبندين』*
*⎔↞┃💎✓ 『.باركود』*
*⎔↞┃💎✓ 『.انمي』*
*⎔↞┃💎✓ 『.تحويل』*
*⎔↞┃💎✓ 『.مانجا』*
*⎔↞┃💎✓ 『.مانهوا』*
*⎔↞┃💎✓ 『.سرقه』*
*⎔↞┃💎✓ 『.ملصق』*
*⎔↞┃💎✓ 『.لكرتون』*
*⎔↞┃💎✓ 『.لفيديو』*
*⎔↞┃💎✓ 『.الوقت』*
*⎔↞┃💎✓ 『.خط』*
*⎔↞┃💎✓ 『.زخرفة』*
*⎔↞┃💎✓ 『.ترجم』*
*⎔↞┃💎✓ 『.نشر』*
*⎔↞┃💎✓ 『.تصميم』*
*⎔↞┃💎✓ 『.حل』*
*⎔↞┃💎✓ 『.حكمه』*
✦━━━━━━━ •➢• ━━━━━━━✦
     *〄━━┋ قـسـم الـمطـور┋━━〄*
✦━━━━━━━ •➢• ━━━━━━━✦
*⎔↞┃💎✓『.المطور 』*
*⎔↞┃💎✓『.بريم』*
*⎔↞┃💎✓『.انضم』*
*⎔↞┃💎✓『.اخرج』*
*⎔↞┃💎✓『.رفع_البلوك』*
*⎔↞┃💎✓『.بان』*
*⎔↞┃💎✓ 『.اضف-اكسبي』*
*⎔↞┃💎✓ 『.فك_البان』*
*⎔↞┃💎✓ 『.تصليح』*
*⎔↞┃💎✓ 『.بلوك』*
*⎔↞┃💎✓ 『.حظر』*
*⎔↞┃💎✓ 『.الغاء المحظروين』*
*⎔↞┃💎✓『.البلوكات』*
*⎔↞┃💎✓ 『.فحص』*
*✦━━━✤━ –⊰ ❖ ⊱– ━✤━━━✦*`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['المهام']
handler.command = ['الاوامر'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }
