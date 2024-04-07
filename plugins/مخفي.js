cmd({

pattern: "hidetag",

alias: ["وهمي","مخفي"],

desc: "Tags everyperson of group without mentioning their numbers",

category: "group",

filename: __filename,

use: '<text>',

},

async(Void, citel, text) => {

if (!citel.isGroup) return citel.reply(tlang().group);

const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";

const participants = citel.isGroup ? await groupMetadata.participants : "";

const groupAdmins = await getAdmin(Void, citel)

const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

if (!isAdmins) return citel.reply(tlang().admin);

if (!isAdmins) citel.reply(tlang().admin);

Void.sendMessage(citel.chat, {

text: text ? text : "",

mentions: participants.map((a) => a.id),

}, {

quoted: citel,

});

}

)


