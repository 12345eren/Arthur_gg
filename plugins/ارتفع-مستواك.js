if(Config.WORKTYPE!=='private'){

cmd({ on: "text" }, async(Void, citel) => {

const randomXp = 8;

let usrname = citel.pushName

const hasLeveledUp = await Levels.appendXp(citel.sender, "RandomXP", randomXp);

if (hasLeveledUp) {

const sck1 = await Levels.fetch(citel.sender, "RandomXP");

const lvpoints = sck1.level;

var role = "فنان";

if (lvpoints <= 2) {

var role = "🏳مواطن";

} else if (lvpoints <= 4) {

var role = "👼طبيب اطفال";

} else if (lvpoints <= 6) {

var role = "🧙‍♀️ساحر";

} else if (lvpoints <= 8) {

var role = "🧙‍♂️معالج";

} else if (lvpoints <= 10) {

var role = "🧚🏻طفل ملاك";

} else if (lvpoints <= 12) {

var role = "🧜ملاك";

} else if (lvpoints <= 14) {

var role = "🧜‍♂️سيد الملاك";

} else if (lvpoints <= 16) {

var role = "🌬طفل نوبل";

} else if (lvpoints <= 18) {

var role = "❄نوبل";

} else if (lvpoints <= 20) {

var role = "⚡سرعه النخبه";

} else if (lvpoints <= 22) {

var role = "🎭النخبه";

} else if (lvpoints <= 24) {

var role = "🥇بارع I";

} else if (lvpoints <= 26) {

var role = "🥈بارع II";

} else if (lvpoints <= 28) {

var role = "🥉متفوق بارع";

} else if (lvpoints <= 30) {

var role = "🎖متفوق مسيطر";

} else if (lvpoints <= 32) {

var role = "🏅متفوق النخبه";

} else if (lvpoints <= 34) {

var role = "🏆فائق";

} else if (lvpoints <= 36) {

var role = "💍فائق I";

} else if (lvpoints <= 38) {

var role = "💎فائق Ii";

} else if (lvpoints <= 40) {

var role = "🔮سيد اللعبه";

} else if (lvpoints <= 42) {

var role = "🛡اسطوره III";

} else if (lvpoints <= 44) {

var role = "🏹اسطوره II";

} else if (lvpoints <= 46) {

var role = "⚔اسطوره";

} else if (lvpoints <= 55) {

var role = "🐉ابدي";

} else {

var role = "مختم اللعبه";

}

if (Config.levelupmessage !== 'false') {

await Void.sendMessage(citel.chat, {

image: {

url: await botpic(),

},

caption: `

*❋ ─═══━•┇ارتـفـع مـسـتـواك🤴┇•━═══─ ❋*

*⌁︙اسمڪ🪪↫ ${citel.pushName}*

