function handler(m, { text }) {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  m.reply(teks.replace(/[a-z]/gi, v => {
      return { 
          'a': 'a',
          'b': 'b',
          'c': 'c',
          'd': 'd',
          'e': 'e',
          'f': 'f',
          'g': 'g',
          'h': 'h',
          'i': 'i',
          'j': 'j',
          'k': 'k',
          'l': 'l',
          'm': 'm',
          'n': 'n',
          'o': 'o',
          'p': 'p',
          'q': 'q',
          'r': 'r',
          's': 's',
          't': 't',
          'u': 'u',
          'v': 'v',
          'w': 'w',
          'x': 'x',
          'y': 'y',
          'z': 'z', 
      }[v.toLowerCase()] || v
  }))
}
handler.help = ['V E N O M']
handler.tags = ['V E N O M']
handler.command =  /^(وهمي|مخفي)$/i

export default handler
