import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command, conn }) => {
  try {
    // Fetch environment variables with defaults
    const OwnerName = process.env.OWNER_NAME || '𝙺𝙰𝚂𝙸𝙼 𝙰𝙻𝙸';
    const timeZone = process.env.TIME_ZONE || '𝙿𝙰𝙺𝙸𝚂𝚃𝙰𝙽';
    const profession = process.env.OWNER_STATUS || '𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁';
    const skills = process.env.OWNER_SKILLS || '𝙹𝙰𝚅𝙰𝚂𝙲𝚁𝙸𝙿𝚃';
    const language = process.env.LANGUAGE || '𝙴𝙽𝙶𝙻𝙸𝚂𝙷,𝚄𝚁𝙳𝚄';
    const project = process.env.BOTNAME || '𝚄𝙻𝚃𝚁𝙰-𝙼𝙳';
    const hobbies = process.env.HOBBIES || '𝙲𝙾𝙳𝙸𝙽𝙶,𝙱𝙾𝚃𝚂';

    // Expanded intro card text with additional fields
    const introText = `
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 
 HIE MYSELF TIKU-SAIKIA FROM NORTHEAST/ASSAM
 06/10/2007 LIBRA ♎ 

 LOVE TO RIDE 
 390 🚀 SHIFTTER

IF I DIE DONT CRY 
JUST LOOK AT THE SKY
SMILE AND SEE HOW MY SOULS FLY 


I PRAY TO GOD THAT EVERYBODY LIFE GOES WITH BEAUTIFUL AND SWEET LOTS OF HAPPINESS 

SOME LOVE FROM TIKU✨🌷🫶🏻 

 
    `;

    let pp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    // Try fetching the profile picture of the sender
    try {
      pp = await conn.profilePictureUrl(m.sender);
    } catch (e) {
      console.log("Error fetching profile picture:", e);
    }

    const sourceUrl = 'https://chat.whatsapp.com/GQlWh6EUV2MA0F4BFysGgt'; // Example source URL for the card
    const OwnerImg = 'https://i.imgur.com/JZs6R9H.jpeg';
    const contextInfo = {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'TIKU✨🪻', // Title of the card
        body: 'Tiku loves you all ✨🫶🏻',
        thumbnailUrl: OwnerImg, // Fixed URL syntax with quotes
        mediaUrl: pp,  // Corrected to use profile picture URL fetched
        sourceUrl: sourceUrl, // Source URL for the card
      },
    };

    // Send the message with the extended intro text and external ad reply
    await conn.sendMessage(m.chat, { text: introText, contextInfo }, { quoted: m });

  } catch (e) {
    console.error(e);
    await conn.sendMessage(m.chat, { text: `❌ Something went wrong: ${e.message}` }, { quoted: m });
  }
};

handler.help = ['intro'];
handler.tags = ['fun'];
handler.command = /^owner|intro|duction$/i;

export default handler;
