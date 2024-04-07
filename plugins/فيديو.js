cmd({

pattern: "video",

alias :["فيديو"],

react: "⬇️",

desc: "Downloads video from yt.",

category: "downloader",

filename: __filename,

use: '<faded-Alan Walker>',

},

async(Void, citel, text) => {

let yts = require("secktor-pack");

let textYt; 

if (text.startsWith("https://youtube.com/shorts/")) {

const svid = text.replace("https://youtube.com/shorts/", "https://youtube.com/v=");

const s2vid = svid.split("?feature")[0];

textYt = s2vid;

} else {

textYt = text;

}

let search = await yts(textYt);

let anu = search.videos[0];

let buttonMessaged = {

image: {

url: anu.thumbnail,

},

caption: `

╼━━━━━━➢━━━━━━━━╾

🎧𝛯𝐿𝑆𝛥 𝑌𝛩𝑈𝑇𝑈𝐵𝛯⃤🎧

╼━━━━━━➢━━━━━━━━╾

*❄️⃝🧚‍♀️الـعـنـوان🗒️┇* ${anu.title}

*❄️⃝🧚‍♀️الـمـده⏳┇* ${anu.timestamp}

*❄️⃝🧚‍♀️الـمـشـاهـدات👀┇* ${anu.views}

*❄️⃝🧚‍♀️الـنـشـر📤┇* ${anu.ago}

*❄️⃝🧚‍♀️الـقـنـاه🧑‍🎤┇* ${anu.author.name}

*❄️⃝🧚‍♀️الـفـيديـو⬇️┇*

╼━━━━━━➢━━━━━━━╾

*❄️⃝🧚‍♀️الـرابـط🔗┇* ${anu.url}

`,

footer: tlang().footer,

headerType: 4,

};

await Void.sendMessage(citel.chat, buttonMessaged, {

quoted: citel,

});

let urlYt = anu.url

const getRandom = (ext) => {

return `${Math.floor(Math.random() * 10000)}${ext}`;

};

let infoYt = await ytdl.getInfo(urlYt);

if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*֎╎حـجـم الـفـيـديـو كـبـيـر جـدا*`);

let titleYt = infoYt.videoDetails.title;

let randomName = getRandom(".mp4");

// citel.reply('*Downloadig:* '+titleYt)

const stream = ytdl(urlYt, {

filter: (info) => info.itag == 22 || info.itag == 18,

})

.pipe(fs.createWriteStream(`./${randomName}`));

await new Promise((resolve, reject) => {

stream.on("error", reject);

stream.on("finish", resolve);

});

let stats = fs.statSync(`./${randomName}`);

let fileSizeInBytes = stats.size;

let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

if (fileSizeInMegabytes <= dlsize) {

let buttonMessage = {

video: fs.readFileSync(`./${randomName}`),

jpegThumbnail: log0,

mimetype: 'video/mp4',

