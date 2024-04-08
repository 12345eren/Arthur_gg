function handler(m, { text }) {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  m.reply(teks.replace(/[a-z]/gi, v => {
      return { 
          ''
          
      }[v.toLowerCase()] || v
  }))
}
handler.help = ['V E N O M']
handler.tags = ['V E N O M']
handler.command =  /^(الوو|الووو)$/i

export default handler
