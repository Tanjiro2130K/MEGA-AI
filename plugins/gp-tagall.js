let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
  let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
  m.reply(
    `🍥 Group : *${groupMetadata.subject}*\n\n👥 Members : *${participants.length}*${text ? `\n\n📭 Message : ${text}\n\n` : ''}\n*everybody listen to Me*\n` +
      users.map(v => '🪻 @' + v.replace(/@.+/, '')).join`\n\n` +
      '\nsome love from Asta 🫶🏻',
    null,
    {
      mentions: users,
    }
  )
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
