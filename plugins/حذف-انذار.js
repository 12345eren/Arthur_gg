cmd({

pattern: "حذف-انذار",

alias: ["اعفاء"],

desc: "Deletes all previously given warns of quoted user.",

category: "group",

filename: __filename,

use: '<quote|reply|number>',

},

async(Void, citel, text,{isCreator}) => {

if (!isAdmins) return citel.reply(tlang().admin)

if (!citel.quoted) return citel.reply('*֎╎مـنـشـن عـلـي شـخـص*')

await warndb.deleteOne({ id: citel.quoted.sender.split('@')[0] + 'warn' });

return citel.reply('*֎╎تـم حـذف انـذار*')

}

)

