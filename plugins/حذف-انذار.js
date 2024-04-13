
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `*مــنشـن الـشـخص┃🚫┃*`
        if (!(who in global.db.data.users)) throw `*المستخدم غير موجود في قاعدة البيانات الخاصة بي*`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`⚠️ *حذف الانذار*
         
▢الانذار : *-1*
▢ عدد الانذارات الحالي: *${warn - 1}*`)
         m.reply(`✳️ قام أحد المسؤولين بتخفيض تحذيره ، والآن لديك *${warn - 1}*`, who)
         } else if (warn == 0) {
            m.reply('*⎔↞┃المستخدم ليس لديه انذارات*')
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['الغاء-انذار', 'الغاء_تحذير'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
