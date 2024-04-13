
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `❒ منشن شخص ما\n\n❍ مثال : ${usedPrefix + command} @الشخص`
        if (!(who in global.db.data.users)) throw `❒ المستخدم غير موجود في قاعدة البيانات الخاصة بي`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *تحذير المستخدم* ⚠️
*⎔⋅• ┗╼╼╃✦⊰💧⊱✦╄╼╾┛ •⋅⎔*
*⎔↞┃المشرف:* ${name}
*⎔↞┃مستخدم:* @${who.split`@`[0]}
*⎔↞┃الانذارات:* ${warn + 1}/${war}
*⎔↞┃السبب:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
*⎔⋅• ┗╼╼╃✦⊰💧⊱✦╄╼╾┛ •⋅⎔*
*لقد تلقيت تحذيرًا من المشرف┃🚫┃*

❒ *الانذارات:* ${warn + 1}/${war} 
اذا تلقيت *${war}* تحذيرات سيتم إزالتك تلقائيًا من المجموعة┃🚫┃`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`❍ تجاوز المستخدم ال *${war}* من التحذيرات لذلك سيتم إزالة الشخص`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`❍ لقد تم ازالتك من الجروب *${groupMetadata.subject}* لان تم تحذيرك *${war}* مره`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['انذار'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
