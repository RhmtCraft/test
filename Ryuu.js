//Function Module
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const hx = require('hxz-api')
const { removeBackgroundFromImageFile } = require('remove.bg')
const yts = require( 'yt-search')
const ggs = require('google-it')

//Database Module
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { pinterest } = require('./lib/pinterest')
const { mediafireDl } = require('./lib/mediafire.js')
const { wikiSearch } = require('./lib/wiki.js')
const { lirikLagu } = require('./lib/lirik.js')

//Virus
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')

//Fun Menu
const atm = require("./lib/atm")
const level = require("./lib/level")
const game = require("./lib/game")

//Database Menu
const {allmenu} = require('./ryudata/allmenu.js')
const {sewa} = require('./ryudata/sewa.js')
const {rules} = require('./ryudata/rules.js')
const {donasi} = require('./ryudata/donasi.js')
const { 
            stalkmenu,
            gamemenu,
            moviemenu,
            warmenu,
            textpromemenu,
            nsfwmenu,
            groupmenu,
            downloadmenu,
            asupanmenu,
            cecanmenu,
            stickermenu,
            islamimenu,
            ownermenu,
            funmenu,
            informasimenu,
            nekopoimenu,
            audiomenu,
            soundmenu,
            animemenu,
            potooxymenu,
            ephotomenu
           } = require('./ryudata/simple.js')

//Database Store Menu
const allpayment = require('./shop/allpayment.js')
const aov = require('./shop/aov.js')
const cod = require('./shop/cod.js')
const format = require('./shop/format.js')
const freefire = require('./shop/freefire.js')
const lol = require('./shop/lol.js')
const mobilelegend = require('./shop/mobilelegend.js')
const sausage = require('./shop/sausage.js')
const valo = require('./shop/valo.js')

//Settings
owner = setting.OwnerNumber
owner2 = setting.Owner2
botname = setting.BotName
ownername = setting.OwnerName
ownernamee = setting.OwnerNamee
fake = setting.Fake
fakeyoi = setting.Fake
Yt = setting.yt
lolkey = setting.Lolkey
dhakey = setting.DhaKey
ZeksKey = setting.ZeksKey
dana = setting.Dana
ovo = setting.Ovo
gopay = setting.Gopay
const gcount = setting.gcount
gamewaktu = setting.gamewaktu
let public_mode = setting. public_mode
a = '```'
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
autobio = true
public = true

//Media
const fakeimage = fs.readFileSync ('./media/Ryuu.jpg')
gambar = fs.readFileSync('./media/Ryuu.jpg')
tamnel = fs.readFileSync('./media/Ryuu.jpg')
const fakeRyuu = fs.readFileSync ('./media/thumb.jpg')
const dona = fs.readFileSync ('./media/donasi.jpg')

//Database Function
const _user = JSON.parse(fs.readFileSync('./database/user.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json')) 
const glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
const _uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const tebakanime = JSON.parse(fs.readFileSync('./database/game/tebakanime.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
const asahotak = JSON.parse(fs.readFileSync('./database/game/asahotak.json'))
const caklontong = JSON.parse(fs.readFileSync('./database/game/caklontong.json'))
const tebaksiapaaku = JSON.parse(fs.readFileSync('./database/game/tebaksiapaaku.json'))
const tebakbendera = JSON.parse(fs.readFileSync('./database/game/tebakbendera.json'))
const susunkata = JSON.parse(fs.readFileSync('./database/game/susunkata.json'))
const tebakata = JSON.parse(fs.readFileSync('./database/game/tebakata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./database/game/tebaklirik.json'))
const tebakjenaka = JSON.parse(fs.readFileSync('./database/game/tebakjenaka.json'))
const tebakimia = JSON.parse(fs.readFileSync('./database/game/tebakimia.json'))
const kuismath = JSON.parse(fs.readFileSync('./database/game/kuismath.json'))
const tebaklagu = JSON.parse(fs.readFileSync('./database/game/tebaklagu.json'))
const tebaktebakan = JSON.parse(fs.readFileSync('./database/game/tebaktebakan.json'))
const family100 = [];

    //Module Export
    module.exports = Ryuu = async (Ryuu, mek, _welkom) => {
	try {
    if (!mek.hasNewMessage) return
    mek = mek.messages.all()[0]
    if (!mek.message) return
	if (mek.key && mek.key.remoteJid == 'status@broadcast') return
	global.blocked
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    const content = JSON.stringify(mek.message)
    const from = mek.key.remoteJid
    const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
    const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
    const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
    const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
    const type = Object.keys(mek.message)[0]        
    const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
    body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
	const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	const args = body.trim().split(/ +/).slice(1)
	const arg = budy.slice(command.length + 2, budy.length)
	const c = args.join(' ')
	const isCmd = body.startsWith(prefix)
	const q = args.join(' ')
	const Verived = "0@s.whatsapp.net"
	const txt = mek.message.conversation
	const botNumber = Ryuu.user.jid
	const ownerNumber = [`${owner}@s.whatsapp.net`, `${owner2}@s.whatsapp.net`]
	const isGroup = from.endsWith('@g.us')		
	const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
	let sender = isGroup ? mek.participant : mek.key.remoteJid
	let senderr = mek.key.fromMe ? Ryuu.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
	const groupMetadata = isGroup ? await Ryuu.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupId = isGroup ? groupMetadata.jid : ''
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupDesc = isGroup ? groupMetadata.desc : ''
	const groupOwner = isGroup ? groupMetadata.owner : ''
	const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
    const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
    const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
    mention != undefined ? mention.push(mentionByReply) : []
    const mentionUser = mention != undefined ? mention.filter(n => n) : []
    
    //Function TicTacToe
    idttt = []
    players1 = []
    players2 = []
    gilir = []
    for (let t of ky_ttt){
    idttt.push(t.id)
    players1.push(t.player1)
    players2.push(t.player2)
    gilir.push(t.gilir)
    }
    const isTTT = isGroup ? idttt.includes(from) : false
    isPlayer1 = isGroup ? players1.includes(sender) : false
    isPlayer2 = isGroup ? players2.includes(sender) : false
	
	//Function Group
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
    const isGroupAdmins = groupAdmins.includes(sender) || false
    const senderNumber = sender.split("@")[0]
	const conts = mek.key.fromMe ? Ryuu.user.jid : Ryuu.contacts[sender] || { notify: jid.replace(/@.+/, '') }
    const pushname = mek.key.fromMe ? Ryuu.user.name : conts.notify || conts.vname || conts.name || '-'    
    const isAntiLink = isGroup ? _antilink.includes(from) : false
	const isNsfw = isGroup ? nsfww.includes(from) : false
	const isWelkom = isGroup ? _welkom.includes(from) : false
	const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false   
    const isLevelingOn = isGroup ? _leveling.includes(from) : false
    
    //Function Waktu 1
    const hour_now = moment().format('HH:mm:ss')
    
    //Function Owner
    const isBanned = ban.includes(sender)
    const isPrem = premium.includes(sender)
    const isOwner = ownerNumber.includes(sender)
    const isMybot = isOwner || mek.key.fromMe
    const itsMe = mek.key.fromMe ? true : false
    
    //Get Bio User
    let bio_nya = await Ryuu.getStatus(sender)
    try {
	bio_user = `${bio_nya.status}`
	} catch {
	bio_user = '-'
	}

    //Message Dan Lain-lain
mess = {
wait: 'Tunggu Sedang Di Proses',
eror: 'Terjadi Kesalahan',
banned: 'Kamu Sudah Terbanned!', 
success: 'Success️',
error: {
stick: 'Khusus Sticker',
Iv: 'Link Invalid!'
},
only: {
group: 'Fitur Hanya Bisa Di Gunakan Di Group',
owner: 'Khusus Owner Ngab',
admin: 'Khusus Admin Ngab',
Badmin: 'Bot Harus Jadi Admin Kalo Mau Menggunakan Fiturnya', 
}
}
    
    //Filter Url
    const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
    }
    
    //Function Saat Reply Pesan Orang
    const reply = (teks) => {
    Ryuu.sendMessage(from, teks, text, {quoted:mek})
    }
    
    //Function Saat Mengirim Pesan
   const sendMess = (hehe, teks) => {
   Ryuu.sendMessage(hehe, teks, text)
   }
   
   //Function Saat Menyebutkan Orang
   const mentions = (teks, memberr, id) => {
   (id == null || id == undefined || id == false) ? Ryuu.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Ryuu.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
    }
    
    //Function Custom
    const costum = (pesan, tipe, target, target2) => {
	Ryuu.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
    }
    
    //Function User Yang Belum Daftar
    const addRegisterUser = (userid, sender, age, bio) => {
	const obj = { id: userid, name: sender, age: age, bio: bio }
    _user.push(obj)
	fs.writeFileSync('./database/user.json', JSON.stringify(_user))
	}
	
	//Function Waktu
    function clockString(ms) {
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
    return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
    
    //Function Anti Link
    if (budy.includes("https://chat.whatsapp.com/")) {
    if (!mek.key.fromMe){
	if (!isGroup) return
	if (!isAntiLink) return
	if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
	Ryuu.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
    reply(`*「 LINK TERDETEKSI 」*\n\nBabayy Kawand Makanya Jangan Nakal Yah:v`)
    Ryuu.groupRemove(from, [kic]).catch((e) => { reply('ternyata bot bukan admin tidak bisa mengkick dia') })
	}
	}
	
	//Function Bio Auto Terganti Saat Run Bot
    if (autobio){
    if (autobio === false) return           
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
    let _uptime = process.uptime() * 1000;
    let uptimer = clockString(_uptime);
    await Ryuu.setStatus(`RyuBotz V3 | ⏰${uptimer}`).catch((_) => _);
    settingstatus = new Date() * 1;
    }}
    
    //Function Fake Troli
    const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2022, status: 200, thumbnail: fakeRyuu, surface: 200, message: `Made By ${ownername}`, orderTitle: 'Ryuukaa', sellerJid: '0@s.whatsapp.net'} } }        
    
    //Function Verify
    const getRegisteredRandomId = () => {
    return _registered[Math.floor(Math.random() * _registered.length)].id
    }
    const addRegisteredUser = (userid, sender, age, time, serials) => {
    const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
    _registered.push(obj)
    fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
    }
    const checkRegisteredUser = (sender) => {
    let status = false
    Object.keys(_registered).forEach((i) => {
    if (_registered[i].id === sender) {
    status = true
    }
    })
    return status
    }
    const cekUser = (sender) => {
	let status = false
	Object.keys(_user).forEach((i) => {
    if (_user[i].id === sender) {
	status = true
	}
	})
	return status
	}
	const isUser = cekUser(sender)
    const isRegistered = checkRegisteredUser(sender)
    
    //Function Kirim Pesan Button Bagi Yang Belum Daftar
    const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
    const buttonMessage = {
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 1,
    };
    Ryuu.sendMessage(
    id,
    buttonMessage,
    MessageType.buttonsMessage,
    options
    );
    };
    const daftar1 = `*Hai kak  ${pushname} 👋*\n\n*Sebelum Mengakses Bot Silahkan Daftar Terlebih Dahulu Ya*`
    const daftar2 = '```Ketik #daftar Atau Klik Tombol Di Bawah Untuk Verify Kak```'
    const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `🥀 VERIFY 🥀 `,},type: 1,},]
    
    //Function Kirim Pesan Bagi Yang Tidak Premium
    const sendButPrem = (id, text1, desc1, but = [], options = {}) => {
    const buttonMessage = {
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 1,
    };
    Ryuu.sendMessage(
    id,
    buttonMessage,
    MessageType.buttonsMessage,
    options
    );
    };
    const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
    }
    
    //Function Cek Uang User
    const checkATMuser = (sender) => {
	let position = false
    Object.keys(_uang).forEach((i) => {
    if (_uang[i].id === sender) {
    position = i
    }
    })
    if (position !== false) {
    return _uang[position]._uang
    }
    }     
    
    //Function Beli Limit 
    const bayarLimit = (sender, amount) => {
    let position = false
    Object.keys(glimit).forEach((i) => {
    if (glimit[i].id === sender) {
    position = i
    }
    })
    if (position !== false) {
    glimit[position].limit -= amount
    fs.writeFileSync('./database/user/glimit', JSON.stringify(glimit))
    }
    }
    
    //Function Konfirmasi Uang User    	
    const confirmATM = (sender, amount) => {
	let position = false
    Object.keys(_uang).forEach((i) => {
    if (_uang[i].id === sender) {
    position = i
    }
    })
    if (position !== false) {
    _uang[position]._uang -= amount
    fs.writeFileSync('./database/uang.json', JSON.stringify(_uang))
    }
    }
    
    //Function Button :
    //Katalog
    const katalog = (teks) => {
    res = Ryuu.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© Ryuuka Botz_*", "thumbnail": thumb, "surface": 'CATALOG' }}, {quoted:troli})
    Ryuu.relayWAMessage(res)}       
    
    //Document           
    const fdoc = {
	key : {
    participant : '0@s.whatsapp.net'
    },
    message: {
    documentMessage: {
    title: `${jams} ${pushname}`, 
    jpegThumbnail: thumb
    }
    }
    }
    
    //Button Biasa                 
   const sendButton = async (from, context, fortext, but, mek) => {
   buttonMessages = {
   contentText: context,
   footerText: fortext,
   buttons: but,
   headerType: 1
   }
   Ryuu.sendMessage(from, buttonMessages, buttonsMessage, {
   quoted: troli
   })
   }
   
   //Button With Message
   const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
   const buttonMessage = {
   contentText: text1,
   footerText: desc1,
   buttons: but,
   headerType: 1,
   };
   Ryuu.sendMessage(
   id,
   buttonMessage,
   MessageType.buttonsMessage,
   options
   );
   };
   
   //Button With Media (Image)
   const sendButImage = async (from, context, fortext, img, but, mek) => {
   jadinya = await Ryuu.prepareMessage(from, img, image)
   buttonMessagesI = {
   imageMessage: jadinya.message.imageMessage,
   contentText: context,
   footerText: fortext,
   buttons: but,
   headerType: 4
   }
   Ryuu.sendMessage(from, buttonMessagesI, buttonsMessage, {
   quoted: ftrol,
    })
    }
    
    //Button With Media (Lokasi)
    async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
    const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
    return Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
    
    //Button With Media (Document)
    const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
    media = file1
    kma = doc1
    yha = await Ryuu.prepareMessage(from, media, document, kma)
    const buttonMessages = {
    documentMessage: yha.message.documentMessage,
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: "DOCUMENT"
    }
    Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
    
    //Button With Media (Video)
   const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
   kma = vid1
   mhan = await Ryuu.prepareMessage(from, kma, video)
   const buttonMessages = {
   videoMessage: mhan.message.videoMessage,
   contentText: text1,
   footerText: desc1,
   buttons: but,
   headerType: 5
   }
   Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
   }

   //Function Fake :
   //Fake YT
(function(_0x1b8915,_0x57a6bf){const _0x412a16=_0x2b09,_0x122aa7=_0x1b8915();while(!![]){try{const _0x20e0de=-parseInt(_0x412a16(0x1ee))/0x1+parseInt(_0x412a16(0x1f2))/0x2+-parseInt(_0x412a16(0x1ed))/0x3+parseInt(_0x412a16(0x1ea))/0x4+parseInt(_0x412a16(0x1f3))/0x5*(-parseInt(_0x412a16(0x1e9))/0x6)+parseInt(_0x412a16(0x1e8))/0x7*(-parseInt(_0x412a16(0x1ef))/0x8)+parseInt(_0x412a16(0x1ec))/0x9*(parseInt(_0x412a16(0x1eb))/0xa);if(_0x20e0de===_0x57a6bf)break;else _0x122aa7['push'](_0x122aa7['shift']());}catch(_0x2c65a0){_0x122aa7['push'](_0x122aa7['shift']());}}}(_0x4ba3,0xccdb9));function _0x4ba3(){const _0x1a8e93=['1955ZVqozT','Jangan\x20Lupa\x20Subscribe','3934jqJVjq','3606qsWnmD','4756988iNrMmE','10CjixGd','12275199dSoNvX','1429758sTvhoJ','1337935mmuKuU','7968ZGgjmP','sendMessage','https://telegra.ph/file/64a3f4a3ea76ee25e201a.jpg','1790406UzTXHm'];_0x4ba3=function(){return _0x1a8e93;};return _0x4ba3();}function _0x2b09(_0x355e2e,_0x45886d){const _0x4ba36f=_0x4ba3();return _0x2b09=function(_0x2b099b,_0x2e8bfd){_0x2b099b=_0x2b099b-0x1e8;let _0x1f5df4=_0x4ba36f[_0x2b099b];return _0x1f5df4;},_0x2b09(_0x355e2e,_0x45886d);}const fakeyt=_0x476008=>{const _0x5afc32=_0x2b09;Ryuu[_0x5afc32(0x1f0)](from,_0x476008,text,{'contextInfo':{'text':'hi','forwardingScore':0x3b9aca00,'isForwarded':![],'sendEphemeral':![],'externalAdReply':{'title':''+tanggal,'body':_0x5afc32(0x1f4),'mediaType':'10','mediaUrl':''+Yt,'thumbnailUrl':_0x5afc32(0x1f1),'thumbnail':fakeimage,'sourceUrl':''+Yt},'mentionedJid':[sender]},'quoted':mek});};
   
   //Fake Status
   const fakestatus = (teks) => {
   Ryuu.sendMessage(from, teks, text, {
   quoted: {
   key: {
   fromMe: false,
   participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
   },
   message: {
   "imageMessage": {
   "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
   "mimetype": "image/jpeg",
   "caption": fake,
   "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
   "fileLength": "28777",
   "height": 1080,
   "width": 1079,
   "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
   "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
   "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
   "mediaKeyTimestamp": "1610993486",
   "jpegThumbnail": fs.readFileSync('./media/Ryuu.jpg'),
   "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
   }
   }
   }
   })
   }
   
   //Fake Group
   const fakegroup = (teks) => {
   Ryuu.sendMessage(from, teks, text, {
   quoted: {
   key: {
   fromMe: false,
   participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
   },
   message: {
   "imageMessage": {
   "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
   "mimetype": "image/jpeg",
   "caption": fake,
   "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
   "fileLength": "28777",
   "height": 1080,
   "width": 1079,
   "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
   "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
   "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
   "mediaKeyTimestamp": "1610993486",
   "jpegThumbnail": fs.readFileSync('./media/Ryuu.jpg'),
   "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
   }
   }
   }
   })
   }
   
   //Fake Troli
   const ftrol = {
   key : {
   participant : '0@s.whatsapp.net'
   },
   message: {
   orderMessage: {
   itemCount : 123,
   status: 1,
   surface : 1,
   message: `Haii ${pushname}`, 
   orderTitle: `Haii ${pushname}`,
   thumbnail: tamnel,
   sellerJid: '0@s.whatsapp.net' 
   }
   }
   }    
   
   //Fake Video
   const fvid = {
   key: { 
   fromMe: false,
   participant: `0@s.whatsapp.net`, ...(from ? 
   { remoteJid: "6283891921787-1613049930@g.us" } : {}) 
   },
   message: { 
   "videoMessage": { 
   "title": `Ryuuka Botz🐧`,
   "h": `Haii ${pushname}`,
   'duration': '99999', 
   'caption': `Haii ${pushname}`,
   'jpegThumbnail': fakeRyuu
   }
   }
   }
   
   //Message With Sticker
   const replysticker = (stiker) => { Ryuu.sendMessage(from, stiker, sticker, {quoted:mek, contextInfo:{sendEphemeral: true, "externalAdReply":{"title": `${ownername}`,"body": `Runtime ${runtime(process.uptime())}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": tamnel,"sourceUrl": `${Yt}`}}})}
   adminstc = fs.readFileSync('./sticker/admin.webp')
   ownerstc = fs.readFileSync('./sticker/owner.webp') 
   waitstc = fs.readFileSync('./sticker/wait.webp') 
   groupstc = fs.readFileSync('./sticker/group.webp') 
   
   //Database Send File :
   //Send Sticker Dari Url
   const sendStickerFromUrl = async(to, url) => {
   var names = Date.now() / 10000;
   var download = function (uri, filename, callback) {
   request.head(uri, function (err, res, body) {
   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
   });
   };
   download(url, './stik' + names + '.png', async function () {
   console.log('selesai');
   let filess = './stik' + names + '.png'
   let asw = './stik' + names + '.webp'
   exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
   let media = fs.readFileSync(asw)
   Ryuu.sendMessage(to, media, MessageType.sticker,{quoted:mek})
   fs.unlinkSync(filess)
   fs.unlinkSync(asw)
   });
   });
   }
   
   //Send File Dari Url
   const sendFileFromUrl = async(link, type, options) => {
   hasil = await getBuffer(link)
   Ryuu.sendMessage(from, hasil, type, options).catch(e => {
   fetch(link).then((hasil) => {
   Ryuu.sendMessage(from, hasil, type, options).catch(e => {
   Ryuu.sendMessage(from, { url : link }, type, options).catch(e => {
   reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
   console.log(e)
   })
   })
   })
   })
   }
   
   //Send Media Dari Url
   const sendMediaURL = async(to, url, text="", mids=[]) =>{
   if(mids.length > 0){
   text = normalizeMention(to, text, mids)
   }
   const fn = Date.now() / 10000;
   const filename = fn.toString()
   let mime = ""
   var download = function (uri, filename, callback) {
   request.head(uri, function (err, res, body) {
   mime = res.headers['content-type']
   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
   });
   };
   download(url, filename, async function () {
   console.log('done');
   let media = fs.readFileSync(filename)
   let type = mime.split("/")[0]+"Message"
   if(mime === "image/gif"){
   type = MessageType.video
   mime = Mimetype.gif
   }
   if(mime.split("/")[0] === "audio"){
   mime = Mimetype.mp4Audio
   }
   Ryuu.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
   fs.unlinkSync(filename)
   });
   }  

   //Function Hidetag
  const hideTag = async function(from, text){
  let anu = await Ryuu.groupMetadata(from)
  let members = anu.participants
  let ane = []
  for (let i of members){
  ane.push(i.jid)
  }
  Ryuu.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Ryuu.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
  }
  
  //Anti Virtex
  if (budy.length > 3500) {
  if (!isGroup) return
  if (!isAntiVirtex) return
  if (isGroupAdmins) return
  reply('Tandai telah dibaca\n'.repeat(300))
  reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
  console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
  Ryuu.groupRemove(from, [sender])
  }     
  
  //Game 
  function randomNomor(angka){
  return Math.floor(Math.random() * angka) + 1
  }
  
  //Tebak Gambar
  game.cekWaktuFam(Ryuu, family100)
  if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebakgambar[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  var http = randomNomor(100)
  atm.addKoinUser(sender, http, _uang)
  await reply(`🎮 Tebak Gambar  🎮\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
  delete tebakgambar[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
  }
  }
  
  //Family 100
  if (game.isfam(from, family100)) {
  var anjuy = game.getjawaban100(from, family100)
  for (let i of anjuy){
  if (budy.toLowerCase().includes(i)){
  var htgmp = Math.floor(Math.random() * 20) + 1
  atm.addKoinUser(sender, htgmp, _uang)
  await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
  var anug = anjuy.indexOf(i)
  anjuy.splice(anug, 1)
  }
  }
  if (anjuy.length < 1){
 Ryuu.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
 family100.splice(game.getfamposi(from, family100), 1)
  }
  }
  
  //Tebak Anime
  if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebakanime[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  var htgmu = randomNomor(100)
  atm.addKoinUser(sender, htgmu, _uang)
  await reply(`🎮 Tebak Anime 🎮\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
  delete tebakanime[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tebakanime.json", JSON.stringify(tebakanime))
  }
  }
  
  //Asah Otak
  if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = asahotak[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  var htgm = randomNomor(100)
  atm.addKoinUser(sender, htgm, _uang)
  await reply(`🎮 Asah Otak  🎮\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
  delete asahotak[sender.split('@')[0]]
  fs.writeFileSync("./database/game/asahotak.json", JSON.stringify(asahotak))
  }
  }
  
  //Cak Lontong
  if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = caklontong[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  var htgmi = randomNomor(100)
  atm.addKoinUser(sender, htgmi, _uang)
  await reply(`🎮 Caklontong  🎮\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
  delete caklontong[sender.split('@')[0]]
  fs.writeFileSync("./database/game/caklontong.json", JSON.stringify(caklontong))
  }
  }
  
  //Tebak Jenaka
  if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebakjenaka[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  var htgmuu = randomNomor(100)
  atm.addKoinUser(sender, htgmuu, _uang)
  await reply(`🎮 Tebak Jenaka  🎮\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
  delete tebakjenaka[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
  }
  }
  
  //Tebak Lirik
  if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebaklirik[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  var htgmii = randomNomor(100)
  atm.addKoinUser(sender, htgmii, _uang)
  await reply(`🎮 Tebak Lirik 🎮\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
  delete tebaklirik[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tebaklirik.json", JSON.stringify(tebaklirik))
  }
  }
  
  //Tebak Siapa Aku
  if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebaksiapaaku[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  var htgmk = randomNomor(100)
  atm.addKoinUser(sender, htgmk, _uang)
  await reply(`🎮 Tebak Siapakah Aku  🎮\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
  delete tebaksiapaaku[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
  }
  }
  
  //Tebak Bendera
  if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebakbendera[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  var html = randomNomor(100)
  atm.addKoinUser(sender, html, _uang)
  await reply(`🎮 Tebak Bendera  🎮\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
  delete tebakbendera[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tebakbendera.json", JSON.stringify(tebakbendera))
  }
  }
  
  //Susun Kata
  if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = susunkata[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  var htmp = randomNomor(100)
  atm.addKoinUser(sender, htmp, _uang)
  await reply(`🎮 Susun Kata  🎮\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
  delete susunkata[sender.split('@')[0]]
  fs.writeFileSync("./database/game/susunkata.json", JSON.stringify(susunkata))
  }
  }
  
  //Tebak Kata
  if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = tebakata[sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  var htmu = randomNomor(100)
  atm.addKoinUser(sender, htmu, _uang)
  await reply(`🎮 Tebak Kata  🎮\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
  delete tebakata[sender.split('@')[0]]
  fs.writeFileSync("./database/game/tebakata.json", JSON.stringify(tebakata))
  }
  }

    //Function Waktu
    if (!public){
    if (!isOwner && !itsMe) return
    }
    const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
    const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
    const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    var runtime = function (seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
    };
    var datw = new Date();
    var tahun = datw.getFullYear();
    var bulan = datw.getMonth();
    var tanggal = datw.getDate();
    var hari = datw.getDay();
    var jams = datw.getHours();
    var menit = datw.getMinutes();
    var detik = datw.getSeconds();
    switch(hari) {
    case 0: hari = "Minggu"; break;
    case 1: hari = "Senin"; break;
    case 2: hari = "Selasa"; break;
    case 3: hari = "Rabu"; break;
    case 4: hari = "Kamis"; break;
    case 5: hari = "Jum'at"; break;
    case 6: hari = "Sabtu"; break;
    }
    switch(bulan) {
    case 0: bulan = "Januari"; break;
    case 1: bulan = "Februari"; break;
    case 2: bulan = "Maret"; break;
    case 3: bulan = "April"; break;
    case 4: bulan = "Mei"; break;
    case 5: bulan = "Juni"; break;
    case 6: bulan = "Juli"; break;
    case 7: bulan = "Agustus"; break;
    case 8: bulan = "September"; break;
    case 9: bulan = "Oktober"; break;
    case 10: bulan = "November"; break;
    case 11: bulan = "Desember"; break;
    }
    switch(jams){
    case 0: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
    case 1: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
    case 2: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
    case 3: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
    case 4: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break; 
    case 5: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
    case 6: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
    case 7: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
    case 8: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
    case 9: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
    case 10: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
    case 11: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break; 
    case 12: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
    case 13: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
    case 14: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
    case 15: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
    case 16: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
    case 17: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
    case 18: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break; 
    case 19: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
    case 20: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
    case 21: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
    case 22: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break; 
    case 23: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
    }
    var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
    var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
    var tampilHari = "" + jams;
    
    //ROLE
    const levelRole = level.getLevelingLevel(sender, _level)
    var role = 'Warrior III'
    if (levelRole <= 5) {
    role = 'Warrior II'
     } else if (levelRole <= 10) {
    role = 'Warrior I'
     } else if (levelRole <= 15) {
    role = 'Elite III'
     } else if (levelRole <= 20) {
    role = 'Elite II'
     } else if (levelRole <= 25) {
    role = 'Elite I'
     } else if (levelRole <= 30) {
    role = 'Master III'
     } else if (levelRole <= 35) {
    role = 'Master II'
     } else if (levelRole <= 40) {
    role = 'Master I'
     } else if (levelRole <= 45) {
    role = 'GrandMaster III'
     } else if (levelRole <= 50) {
    role = 'GrandMaster II'
     } else if (levelRole <= 55) {
    role = 'GrandMaster I'
     } else if (levelRole <= 60) {
    role = 'Epic III'
     } else if (levelRole <= 65) {
    role = 'Epic II'
     } else if (levelRole <= 70) {
    role = 'Epic I'
     } else if (levelRole <= 75) {
    role = 'Legend III'
     } else if (levelRole <= 80) {
    role = 'Legend II'
     } else if (levelRole <= 85) {
    role = 'Legend I'
     } else if (levelRole <= 90) {
    role = 'Mythic'
     } else if (levelRole <= 95) {
    role = 'Mythical Glory'
     } else if (levelRole >= 100) {
    role = 'Immortal'
     }
    let Levelnye = level.getLevelingLevel(sender, _level)
    let Xpluu = level.getLevelingXp(sender, _level)
    let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100

    if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
    try {
    level.addCooldown(sender)
    const checkATM = atm.checkATMuser(sender, _uang)
    if (checkATM === undefined) atm.addATM(sender, _uang)
    const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
    atm.addKoinUser(sender, uangsaku, _uang)
    const currentLevel = level.getLevelingLevel(sender, _level)
    const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
    const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
    level.addLevelingXp(sender, amountXp, _level)
    if (requiredXp <= level.getLevelingXp(sender, _level)) {
    level.addLevelingLevel(sender, 1, _level)
    const userLevel = level.getLevelingLevel(sender, _level)
    const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
    reply(`「 𝐋𝐄𝐕𝐄𝐋 𝐔𝐏 」\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
    } 
    } catch (err) {
    console.error(err)
    }
    }
    
    //Function Is
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
    
    //Warna In Console
	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

    //Masuk Fiturnya Kak 
    switch (command) {
    
    //Fitur Limit
    case 'leveling':
       if (!isGroup) return replysticker(groupstc)
       if (args[0] === 'enable') {
       if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
       _leveling.push(from)
       fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
       reply('Fitur leveling berhasil diaktifkan.')
       } else if (args[0] === 'disable') {
       var anup = _leveling.indexOf(from)
       _leveling.splice(anup, 1)
       fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
       reply('Fitur leveling berhasil dimatikan.')
       } else {
       reply('Pilih enable atau disable!')
       }
       break
    case 'resetlimit':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		Ryuu.updatePresence(from, Presence.avaible)
		fs.writeFileSync('./database/user/glimit.json', ('[]'))
		reply('Sukses Kak.. Jangan Lupa Matikan Ulang Bot')
		break    
     case 'leaderboard': case 'leaderboards':
         if (!isGroup) return replysticker(groupstc)
         if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
         const resp = _level
         _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
         let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
         try {
         for (let i = 0; i < 10; i++) {
         var roles = 'Warrior III'
         if (resp[i].level <= 5) {
         roles = 'Warrior II'
         } else if (resp[i].level <= 10) {
         roles = 'Warrior I'
         } else if (resp[i].level <= 15) {
         roles = 'Elite III'
         } else if (resp[i].level <= 20) {
         roles = 'Elite II'
         } else if (resp[i].level <= 25) {
         roles = 'Elite I'
         } else if (resp[i].level <= 30) {
         roles = 'Master III'
         } else if (resp[i].level <= 35) {
         roles = 'Master II'
         } else if (resp[i].level <= 40) {
         roles = 'Master I'
         } else if (resp[i].level <= 45) {
         roles = 'GrandMaster III'
         } else if (resp[i].level <= 50) {
         roles = 'GrandMaster II'
         } else if (resp[i].level <= 55) {
         roles = 'GrandMaster I'
         } else if (resp[i].level <= 60) {
         roles = 'Epic III'
         } else if (resp[i].level <= 65) {
         roles = 'Epic II'
         } else if (resp[i].level <= 70) {
         roles = 'Epic I'
         } else if (resp[i].level <= 75) {
         roles = 'Legend III'
         } else if (resp[i].level <= 80) {
         roles = 'Legend II'
         } else if (resp[i].level <= 85) {
         roles = 'Legend I'
         } else if (resp[i].level <= 90) {
         roles = 'Mythic'
         } else if (resp[i].level <= 95) {
         roles = 'Mythical Glory'
         } else if (resp[i].level >= 100) {
         roles = 'Immortal'
         } 

         leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
         }
         reply(leaderboard)
         } catch (err) {
         console.error(err)
         reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
         }
         break
    case 'profile':    
    if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
    const balance = atm.checkATMuser(sender, _uang)
    menu =
`╭─ ✾「 𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑 」✾
│➸ 𝙉𝙖𝙢𝙚 : ${pushname}
│➸ 𝙏𝙖𝙜𝙨 : @${sender.split("@")[0]}
│➸ 𝙎𝙩𝙖𝙩𝙪𝙨 : ${isOwner? "Owner️":"User"}
│➸ 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 : ${isPrem? "Premium":"User"}
╰─ ✾

╭─ ✾「 𝐘𝐎𝐔𝐑 𝐈𝐍𝐅𝐎 」✾
│➸ 𝙐𝙖𝙣𝙜 : ${balance}
│➸ 𝙇𝙞𝙢𝙞𝙩 : ${cekGLimit(sender, gcount, glimit)}/${gcount}
│➸ 𝙇𝙚𝙫𝙚𝙡 : ${Levelnye}
│➸ 𝙍𝙤𝙡𝙚 : ${role}
│➸ 𝙓𝙥 : ${Xpluu} / ${requiredXplu}
╰─ ✾

𝙉𝙤𝙩𝙚 : 𝗠𝗲𝗻𝗮𝗶𝗸𝗮𝗻 𝗫𝗽 𝗨𝗻𝘁𝘂𝗸 𝗠𝗲𝗻𝗮𝗶𝗸𝗮𝗻 𝗟𝗲𝘃𝗲𝗹 𝗞𝗮𝗺𝘂!`
teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/tabun.mp3');
break

    //Fitur Tic Tac Toe
    case 'delsesittt':
    case 'resetgame':
        if (!isGroup) return replysticker(groupstc)
        if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
        naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
        ky_ttt = naa 
        reply('Sukses Mereset Game')
        break
    case 'tictactoe':
    case 'ttt':
        if (!isGroup) return replysticker(groupstc)
        if (args.length < 1) return reply('Tag Lawan Anda! ')
        if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
        ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
        player1 = sender
        player2 = ment[0]
        angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
        id = from
        gilir = player2
        ky_ttt.push({player1,player2,id,angka,gilir})
        Ryuu.sendMessage(from, `🎳 𝐌𝐄𝐌𝐔𝐋𝐀𝐈 𝐆𝐀𝐌𝐄 𝐓𝐈𝐂𝐓𝐀𝐂𝐓𝐎𝐄 🎲\n\n [@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥\nKetik Y/N untuk menerima atau menolak permainan\n\nKet : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
        break
    
    //Fitur Banned 
    case 'ban':
		if (!isOwner && !mek.key.fromMe) return replysticker(ownerstc)
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
		ny = `${args[0].replace('@', '')}@s.whatsapp.net`
	    ban.push(ny)
		fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
	    reply(`Nomor ${ny} telah dibanned!`)
		} else {
		ny = `${mentionUser}`
		ban.push(ny)
		fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
	    reply(`Nomor ${ny} telah dibanned!`)
		}
		break
	case 'unban':
		if (!isOwner && !mek.key.fromMe) return replysticker(ownerstc)
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
		ah = `${args[0].replace("@","")}@s.whatsapp.net`
	    unb = ban.indexOf(ah)
		ban.splice(unb, 1)
		fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
		reply(`Nomor ${ah} telah di unban!`)
		} else {
		ah = `${mentionUser}`
		unb = ban.indexOf(ah)
		ban.splice(unb, 1)
		fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
		reply(`Nomor ${ah} telah di unban!`)
		}
		break
    
    //Fitur Add Premium 
    case 'addprem':
        if (!isOwner && !mek.key.fromMe) return replysticker(ownerstc)
        if (isBanned) return reply('Kamu Sudah Di banned!') 
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})  
		if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
		addp = body.slice(10)
		premium.push(`${addp}@s.whatsapp.net`)
		fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
		reply(`Berhasil Menambahkan ${addp} Ke Daftar Premium`)
		break
	case 'delprem':
        if (!isOwner && !mek.key.fromMe) return replysticker(ownerstc)
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})  
		if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
		oh = body.slice(11)
		delp = premium.indexOf(oh)
		premium.splice(delp, 1)
		fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
		reply(`Berhasil Menghapus ${oh} Dari Daftar Premium`)
		break				

    //Fitur Daftar Saat Sebelum Menggunakan Bot	
    case 'verify': case 'daftar':
        if (isUser) return reply('Kamu sudah terdaftar di dalam database')
        const serialUser = createSerial(18)
        veri = sender
        _registered.push(sender)
       addRegisterUser(sender, pushname, bio_user, timeWib, serialUser)
       fs.writeFileSync('./database/registered.json', JSON.stringify(_user))
       teks = `╭─ ✾ 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 ✾\n│➸ *Nama :* ${pushname}\n│➸ *Nomor :* @${sender.split('@')[0]}\n│➸ *Bio :* ${bio_user}\n│➸ *seri :* ${serialUser}\n│➸ *Time :* ${timeWib} Wib\n╰✾`
	   let papako = [{
	   "buttonId": `${prefix}menu`,
	   "buttonText": {
	   "displayText": "𝐌𝐄𝐍𝐔 📖"
	   },
	   "type": "RESPONSE"
	   },{
	   "buttonId": `${prefix}profile`,
	   "buttonText": {
	   "displayText": "𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ☕"
	   },
	   "type": "RESPONSE"
	   }]
	   sendButLocation(from, teks , `Thank for verification\n${botname}™© | By ${ownername}`, tamnel, papako, {contextInfo: { mentionedJid: [sender]}})
	   break
	
	//Self And Public
    case 'mode':
       if (!isOwner && !mek.key.fromMe) return replysticker(ownerstc) 
       buttonss = [{buttonId: `${prefix}public`, buttonText: {displayText: '𝐏𝐔𝐁𝐋𝐈𝐂 👥'}, type: 1},{buttonId: `${prefix}self`, buttonText: {displayText: '𝐒𝐄𝐋𝐅 👤'}, type: 1}]
       const buMess = {
       contentText: "SELF/PUBLIC",
       footerText: 'Silahkan Pilih Saah Satu',
       buttons: buttonss,
       headerType: 1
       }
       await Ryuu.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: mek})
       break
    case 'self':
	    if (!isOwner && !mek.key.fromMe) return replysticker(ownerstc) 
        if(!public)return reply('*_Fitur sudah diaktifkan sebelumnya_*')			
	    public = false
	    return fakestatus(`╭─ ✾「 𝗠𝗢𝗗𝗘 𝗦𝗘𝗟𝗙 」✾\n│➸ sukses ke Mode self\n│➸ sekarang hanya nomor bot\n│➸ dan owner yang bisa pakai fitur\n╰─ ✾`,text)
		break
		case 'public':
		if (!isOwner && !mek.key.fromMe) return replysticker(ownerstc) 
		if (public)return reply('*_Fitur sudah diaktifkan sebelumnya_*')
		public = true
		return fakestatus(`╭─ ✾「 𝗠𝗢𝗗𝗘 𝗣𝗨𝗕𝗟𝗜𝗖 」✾\n│➸ sukses ke Mode Public\n│➸ semua user bisa menggunakan bot\n╰─ ✾`, text)
		break			
    
    //Menu Awal
    case 'menu':
    case 'help':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        const balaance = atm.checkATMuser(sender, _uang)
        ptod = "6283891921787@s.whatsapp.net"
        stod = `${sender}`
        dtod = 'ngetes'
        uwu = '```'
        stst = await Ryuu.getStatus(`${sender.split('@')[0]}@c.us`)
	    stst = stst.status == 401 ? '' : stst.status
        tescok =
`*Hai @${sender.split('@')[0]} ${jams}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑 」✾
│➸ 𝙉𝙖𝙢𝙚 : ${pushname}
│➸ 𝙏𝙖𝙜𝙨 : @${sender.split("@")[0]}
│➸ 𝙎𝙩𝙖𝙩𝙪𝙨 : ${isOwner? "Owner️":"User"}
│➸ 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 : ${isPrem? "Premium":"User"}
╰─ ✾

╭─ ✾「 𝐓𝐎 𝐃𝐀𝐘 」✾
│➸ 𝙐𝙘𝙖𝙥𝙖𝙣 : ${jams}
│➸ 𝘽𝙪𝙡𝙖𝙣 : ${bulan}
│➸ 𝙃𝙖𝙧𝙞 : ${hari}
│➸ 𝙏𝙂𝙇 : ${tanggal}
╰─ ✾

╭─ ✾「 𝐘𝐎𝐔𝐑 𝐈𝐍𝐅𝐎 」✾
│➸ 𝙐𝙖𝙣𝙜 : ${balaance}
│➸ 𝙇𝙞𝙢𝙞𝙩 : ${cekGLimit(sender, gcount, glimit)}/${gcount}
│➸ 𝙇𝙚𝙫𝙚𝙡 : ${Levelnye}
│➸ 𝙍𝙤𝙡𝙚 : ${role}
│➸ 𝙓𝙥 : ${Xpluu} / ${requiredXplu}
╰─ ✾`
        Sendbutdocument(from, tescok, "𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳", fs.readFileSync('./media/Ryuu.pdf'),{mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/Ryuu.jpg'), filename:`Ryuu.pdf`,pageCount: 999 }, [{buttonId:`${prefix}listmenu`,buttonText:{displayText:'𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔 📖'},type:1},{buttonId:`${prefix}rules`,buttonText:{displayText:'𝐑𝐔𝐋𝐄𝐒 📚'},type:1},{buttonId:`${prefix}info`,buttonText:{displayText:'𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 ℹ️'},type:1}], {quoted:fvid, contextInfo: { mentionedJid: [ptod,dtod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${jams} ${pushname}\nDownload Script`,mediaType:"2",thumbnail:fakeimage,mediaUrl:`https://youtu.be/iblnzTUbqBI`}}})
        break

    //List Menu
    case 'listmenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})  
        stod = `${sender}`
        stst = await Ryuu.getStatus(`${sender.split('@')[0]}@c.us`)
	    stst = stst.status == 401 ? '' : stst.status
        const modde = public ? 'PUBLIC': 'SELF'
        listMsg = {
        buttonText: '𝐌𝐄𝐍𝐔 𝐃𝐈𝐒𝐈𝐍𝐈 💻',
        footerText: fake,
        description: `*Hai Kak* @${sender.split('@')[0]} ${jams}\n\n𝙋𝙚𝙣𝙘𝙚𝙩 𝘽𝙪𝙩𝙩𝙤𝙣 𝘿𝙞 𝘽𝙖𝙬𝙖𝙝 𝙄𝙣𝙞 𝗨𝗻𝙩𝙪𝙠 𝙈𝙚𝙢𝙞𝙡𝙞𝙝 𝙈𝙚𝙣𝙪`, 
        sections: [
        {
        "title": `Silahkan Dipilih Kak ${pushname} 🤗`,
        rows: [
        {
        "title": "[🕊️] 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔",
        "rowId": `${prefix}allmenu`,
        "description": `Menampilkan Seluruh Menu ${botname}`
        },
        {
        "title": "[💎] 𝐒𝐓𝐎𝐑𝐄 𝐌𝐄𝐍𝐔",
        "rowId": `${prefix}storemenu`, 
        "description": `Menampilkan Seluruh Store ${botname}`
        },
        {
        "title": "[💿] 𝐒𝐎𝐔𝐍𝐃 𝐌𝐄𝐍𝐔",
        "rowId": `${prefix}soundmenu`, 
        "description": `Menampilkan Seluruh Sound ${botname}`
         },
         {
          "title": "[🎙] 𝐒𝐎𝐔𝐍𝐃 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}audiomenu`, 
          "description": `Menampilkan Seluruh Audio ${botname}`
          },
          {
          "title": "[🎞] 𝐍𝐄𝐊𝐎𝐏𝐎𝐈 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}nekopoimenu`, 
          "description": `Menampilkan Seluruh Nekopoi ${botname}`
          },
          {
          "title": "[👨]‍‍ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}grupmenu`, 
          "description": `Menampilkan Seluruh Group ${botname}`
          },
          {
          "title": "[👤] 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}ownermenu`, 
          "description": `Menampilkan Seluruh Owner ${botname}`
          },
          {
          "title": "‍[🔞] 𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}nsfwmenu`, 
          "description": `Menampilkan Seluruh Nsfw ${botname}`
          },
          {
          "title": "‍[🕋] 𝐈𝐒𝐋𝐀𝐌𝐈 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}islamimenu`, 
          "description": `Menampilkan Seluruh Islami ${botname}`
          },
          {
          "title": "‍[⌨️] 𝐓𝐄𝐗𝐓𝐏𝐑𝐎𝐌𝐄 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}textpromemenu`, 
          "description": `Menampilkan Seluruh Textprome ${botname}`
          },
          {
          "title": "‍[📸️] 𝐏𝐇𝐎𝐓𝐎𝐗𝐘 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}potooxymenu`, 
          "description": `Menampilkan Seluruh Potooxy ${botname}`
          },
          {
          "title": "‍[✉️️] 𝐄𝐏𝐇𝐎𝐓𝐎 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}ephotomenu`, 
          "description": `Menampilkan Seluruh Ephoto 360 ${botname}`
          },
          {
          "title": "‍[️🕹] 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}gamemenu`, 
          "description": `Menampilkan Seluruh Game ${botname}`
          },
          {
          "title": "‍[️📊] 𝐒𝐓𝐀𝐋𝐊 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}stalkmenu`, 
          "description": `Menampilkan Seluruh Stalk ${botname}`
          },
          {
          "title": "‍[️👫] 𝐌𝐎𝐕𝐈𝐄 & 𝐒𝐓𝐎𝐑𝐘 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}moviemenu`, 
          "description": `Menampilkan Seluruh Movie ${botname}`
          },
          {
          "title": "‍[️💀] 𝐖𝐀𝐑 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}warmenu`, 
          "description": `Menampilkan Seluruh War ${botname}`
          },
          {
          "title": "‍[️📄] 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}informasimenu`, 
          "description": `Menampilkan Seluruh Informasi ${botname}`
          },
          {
          "title": "‍[💕️] 𝐀𝐍𝐈𝐌𝐄 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}animemenu`, 
          "description": `Menampilkan Seluruh Anime ${botname}`
          },
          {
          "title": "‍[👩‍] 𝐀𝐒𝐔𝐏𝐀𝐍 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}asupanmenu`, 
          "description": `Menampilkan Seluruh Asupan ${botname}`
          },
          {
          "title": "‍[👯] 𝐂𝐄𝐂𝐀𝐍 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}cecanmenu`, 
          "description": `Menampilkan Seluruh Cecan ${botname}`
          },
          {
          "title": "[🚲] 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}funmenu`, 
          "description": `Menampilkan Seluruh Fun ${botname}`
          },
          {
          "title": "[💾] 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 𝐌𝐄𝐍𝐔",
          "rowId": `${prefix}downloadmenu`, 
          "description": `Menampilkan Seluruh Download ${botname}`
          },
          {
          "title": "[🎁] 𝐃𝐎𝐍𝐀𝐒𝐈",
          "rowId": `${prefix}donasi`, 
          "description": `Menampilkan Donasi ${botname}`
          },
          {
          "title": "[💻] 𝐒𝐎𝐔𝐑𝐂𝐄 𝐂𝐎𝐃𝐄",
          "rowId": `${prefix}sc`, 
          "description": `Menampilkan Script Bot RyuBotz`
          },
          {
          "title": "[🏆] 𝐁𝐈𝐆 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎",
          "rowId": `${prefix}tqto`, 
          "description": `Menampilkan Thanks ${botname}`
          },
          {
          "title": "[📚] 𝐑𝐔𝐋𝐄𝐒",
          "rowId": `${prefix}rules`, 
          "description": `Menampilkan Rules Pengguna Bot ${botname}`
          }
          ]
          }],
          listType: 1
          }
          Ryuu.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})
          break
    
    //All Menu
    case 'allmenu':
          if (isBanned) return reply('Kamu Sudah Di banned!') 
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
          const modee = public ? 'PUBLIC': 'SELF'
          menuall =
`*Hai @${sender.split('@')[0]} ${jams}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑 」✾
│➸ 𝙉𝙖𝙢𝙚 : ${pushname}
│➸ 𝙏𝙖𝙜𝙨 : @${sender.split("@")[0]}
│➸ 𝙎𝙩𝙖𝙩𝙪𝙨 : ${isOwner? "Owner️":"User"}
│➸ 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 : ${isPrem? "Premium":"User"}
╰─ ✾

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙊𝙬𝙣𝙚𝙧𝙉𝙪𝙢𝙗𝙚𝙧 : ${owner}
│➸ 𝙈𝙤𝙙𝙚 : ${modee}
│➸ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾

`
menuall2 = 
`\n╭─ ✾「 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎 」✾
│➸ 𝐁𝐎𝐓 𝐃𝐇𝐀𝐍𝐈 ? 
│➸ 𝐑𝐘𝐔𝐔𝐊𝐀 𝐁𝐎𝐓𝐙
│➸ 𝐙𝐄𝐄𝐎𝐍𝐄 𝐎𝐅𝐂
│➸ 𝐋𝐄𝐗𝐗𝐘 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋
│➸ 𝐙𝐄𝐑𝐎𝐘𝐓𝟕
│➸ 𝐅𝐁𝐎𝐓𝐙
╰─ ✾「 𝐑𝐲𝐮𝐁𝐨𝐭𝐳 𝟒.𝟎.𝟎 」✾`
       teks = `𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳\n𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
       Ryuu.sendMessage(from, { contentText: `${menuall}`+allmenu(prefix, jams, bulan, hari, tanggal, timeWib, timeWita, timeWit)+`${menuall2}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '𝐃𝐎𝐍𝐀𝐒𝐈💸' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
       man = fs.readFileSync('./assets/tabun.mp3');
       break
    
    //Donasi
    case 'donasi':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳\n𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        butdon = [
                         { buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },
                         { buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 }
                         ]
        sendButImage(from, donasi(), `${teks}`, dona, butdon)
        break
    
    //List Game Menu
    case 'gamemenu':
        if (isBanned) return reply('Kamu Sudah Di banned!') 
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣𝙩𝙞𝗺𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳\n𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+gamemenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    //List Stalk Menu
    case 'stalkmenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+stalkmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    
    //List Movie Menu
    case 'moviemenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+moviemenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    
    //List War Menu
    case 'warmenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]} ${jams}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+warmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    case 'textpromemenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]} ${jams}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+textpromemenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    
    //List Nsfw
    case 'nsfwmenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙒𝙖𝙠𝙩𝙪 : ${jams}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+nsfwmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

//List Group Menu
        case 'grupmenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙒𝙖𝙠𝙩𝙪 : ${jams}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+groupmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    case 'downloadmenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙒𝙖𝙠𝙩𝙪 : ${jams}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+downloadmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    case 'asupanmenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+asupanmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    case 'cecanmenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝗕𝙖𝙝𝙖𝙜𝙞𝙖🍵

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+cecanmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    case 'stickermenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+stickermenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    case 'islamimenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜ ${prefix} ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}+islamimenu(prefix)`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    case 'ownermenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+ownermenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    case 'storemenu': case 'store':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        listMsg = {
        buttonText: 'KLIK DISINI 👋',
        footerText: fake,
        description: `*Hai Kak @${sender.split('@')[0]}*\n*${jams}*\n\n*Berikut List Voucher Game Yang Tersedia Di Toko Kami 🛒*\n\n$Note : Jika Ada Fitur Yang Error Harap Lapor Ke Owner Agar Segera Diperbaiki 🤗`,
        sections: [
        {
        "title": `Silahkan Dipilih Kak ${pushname} 🤗`,
        rows: [
        {
        "title": "MOBILE LEGEND [🎮🕹]️",
        "rowId": `${prefix}ml`
        },
        {
        "title": "VALO [🎮🔫]",
        "rowId": `${prefix}valo`
        },
        {
        "title": "COD [🎮🔫]",
        "rowId": `${prefix}cod`
        },
        {
        "title": "PUBG [🎮🔫]",
        "rowId": `${prefix}pubg`
        },
        {
        "title": "FREE FIRE [🎮🔫]",
        "rowId": `${prefix}ff`
        },
        {
        "title": "SOSIS [🌭]",
        "rowId": `${prefix}sausage`
        }, 
        {
        "title": "LOL [🎮🔫]",
        "rowId": `${prefix}lol`
        },
        {
        "title": "SEWABOT [💸]",
        "rowId": `${prefix}sewabot`
        },
        ]
        }],
        listType: 1
        }
        Ryuu.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})
        break
    case 'allpayment':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        imgpay = fs.readFileSync('./shop/imgshop/allpayment.jpg')
        but = [
        { buttonId: `otw`, buttonText: { displayText: 'OTW MIN️' }, type: 1 },
        ]
        sendButLocation(from, allpayment(), fake, tamnel, but)
        break
    case 'aov':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})  
        imgaov = fs.readFileSync('./shop/imgshop/aov.jpeg')
        but = [
        { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋🏽‍♂️' }, type: 1 }
        ]
        sendButLocation(from, aov(), fake, imgaov, but)
        break
    case 'valorant': case 'valo':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})   
        imgvalo = fs.readFileSync('./shop/imgshop/valo.jpeg')
        but = [
        { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋🏼‍♂️' }, type: 1 },
        ]
        sendButLocation(from, valo(), fake, imgvalo, but)
        break
    case 'cod':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        imgcod = fs.readFileSync('./shop/imgshop/cod.jpeg')
        but = [
        { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋‍♂️' }, type: 1 },
        ]
        sendButLocation(from, cod(), fake, imgcod, but)
        break
    case 'freefire': case 'ff':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        imgff = fs.readFileSync('./shop/imgshop/freefire.jpeg')
        but = [
        { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋‍♂️' }, type: 1 },
        ]
        sendButLocation(from, ff(), fake, imgff, but)
        break
    case 'sausage':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        imgsosis = fs.readFileSync('./shop/imgshop/sausage.jpeg')
        but = [
        { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋‍♂️' }, type: 1 },
        ]
        sendButLocation(from, sausage(), fake, imgsosis, but)
        break
    case 'lol':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        imglol = fs.readFileSync('./shop/imgshop/lol.jpeg')
        but = [
        { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋‍♂️' }, type: 1 },
        ]
        sendButLocation(from, lol(), fake, imglol, but)
        break
    case 'ml': case 'mobilelegend':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        imgml = fs.readFileSync('./shop/imgshop/mobilelegend.jpeg')
        but = [
        { buttonId: `${prefix}formatorder`, buttonText: { displayText: 'ORDER BANG 🙋‍♂️' }, type: 1 },
        ]
        sendButLocation(from, mobilelegend(), fake, imgml, but)
        break
    case 'formatorder': case 'format': case 'donetf':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        Ryuu.sendMessage(from, format(), MessageType.text, {quoted: mek})
    case 'doneformat':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        reply('jika sudah ketik !proses dan salinan yang kamu isi tadi')
        break
    case 'proses':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})      
		const prosess = body.slice(8)
	    if (args.length > 300) return Ryuu.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
		stod = `${sender}`
		const proses = `ADA PESAN TOD\n\nNomor : @${stod.split('@')[0]}\n${prosess}`
		var options = {
		text: proses,
        contextInfo: {mentionedJid: [stod]},
         }
		Ryuu.sendMessage(`${owner}@s.whatsapp.net`, options, text, {quoted: mek})
		reply('Done Kak Orderan Telah Di Terima')
		break
    
    //List Fun Menu
    case 'funmenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+funmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    
    //Informasi Menu
    case 'informasimenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+informasimenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    
    //List Nekopoi Menu
    case 'nekopoimenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+nekopoimenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    
    //List Audio Menu
    case 'audiomenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+audiomenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    
    //List Sound Menu
    case 'soundmenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝗶𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+soundmenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    case 'rules':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${rules()}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    
    //List Anime Menu
    case 'animemenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+animemenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    
    //List Potooxy Menu
    case 'potooxymenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+potooxymenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    
    //List Ephoto Menu
    case 'ephotomenu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =
`*Hai @${sender.split('@')[0]}*

𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐞𝐧𝐲𝐞𝐫𝐚𝐡 𝐃𝐚𝐥𝐚𝐦 𝐇𝐚𝐥 𝐀𝐩𝐚𝐩𝐮𝐧☕

╭─ ✾「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」✾
│➸ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
│➸ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
│➸ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
│➸ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
│➸ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨
╰─ ✾\n\n`
        teks =
`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳
𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`+ephotomenu(prefix), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    case 'tqto':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`*SPECIAL THANKS TO :*\n\n*😇 Allah Swt*\n*😇 Nabi Muhammad SAW*\n\n*BIG THANKS TO :*\n\n*🌱 Adiwajshing Baileys :*\nhttps://github.com/Adiwajshing\n*🌱 Bot Dhani ? (Base Ori) :*\nhttps://youtube.com/channel/UCcnWMxH0nUbArCCkqubUeHA\n*🌱 Zeeone Ofc (Contributors) :*\nhttps://github.com/Zeeoneofc\n*🌱 Ryuuka Botz (Author) :*\nhttps://youtube.com/channel/UCjxavxEQa1Wd9A4J9tOmATA\n🌱 *FBOTZ YT (Team) :*\nhttps://youtube.com/channel/UCnuzOOUf9dgDaM2m0xtYWtg\n*🌱 Siegrin* :\nhttps://youtube.com/channel/UCrZhYLblOWitPnKBZYFQPPw\n*🌱 Lol-Human* :\nhttp://api.lolhuman.xyz\n🌱 *BearKey* :\nhttps://apikey-bear3.herokuapp.com\n🌱 Dipakai : *${ownername}*`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳\n𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/tabun.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    //Tes Speed
    case 'ping':
    case 'speed':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        timestampe = speed();
        latensie = speed() - timestampe
        fakestatus(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
        break

    //Mengirim Pesan Ke Owner Saat Terjadi Bug Pada Bot
    case 'report':
    case 'lapor': 
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
		const laporan = body.slice(7)
		if (args.length > 300) return Ryuu.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
		stod = `${sender}`
		const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
		var options = {
	    text: lapor,
        contextInfo: {mentionedJid: [stod]},
    	}
		Ryuu.sendMessage(`${owner}@s.whatsapp.net`, options, text, {quoted: mek})
		reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
		break
    
    //List Harga Sewa Bot
    case 'sewabot':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Haii ${pushname}`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳\n𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: menu+sewa(), footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        break

    //Sumber Script
    case 'sc':
    case 'script':
    case 'infosc':
    case 'info':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu = `◈───〖 *Info Script* 〗───◈\n📚 Script Made By Ryuuka Botz\n🌱 Version : 4.0.0\n📈 Last Update : 31/01/2022\n📩 Link Sc : https://youtube.com/channel/UCjxavxEQa1Wd9A4J9tOmATA\n♨️ Sumber Script : Ryuuka Botz\n\n🍁 Subscribe For More Update`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳\n𝐑𝐞𝐜𝐨𝐝𝐞 𝐁𝐲 : ${ownername}`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝐎𝐖𝐍𝐄𝐑 👤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        break

    //Nekopoi Menu
    case 'nekopoi1':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        qute = fs.readFileSync('./media/Ryuu.jpg') 
        Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
        break
    case 'nekopoi2':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        qute = fs.readFileSync('./media/Ryuu.jpg') 
        Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
        break
    case 'nekopoi3':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        qute = fs.readFileSync('./media/Ryuu.jpg') 
        Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
        break
    case 'nekopoi4':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        qute = fs.readFileSync('./media/Ryuu.jpg') 
        Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
        break
    case 'nekopoi5':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        qute = fs.readFileSync('./media/Ryuu.jpg') 
        Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
        break
    case 'nekopoi6':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        qute = fs.readFileSync('./media/Ryuu.jpg') 
        Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
        break
    case 'nekopoi7':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        qute = fs.readFileSync('./media/Ryuu.jpg') 
        Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
        break
    case 'nekopoi8':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        qute = fs.readFileSync('./media/Ryuu.jpg') 
        Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
        break
    case 'nekopoi9':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        qute = fs.readFileSync('./media/Ryuu.jpg') 
        Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
        break

    //Islami Fitur
    case 'listsurah':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
				replysticker(waitstc) 
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
       get_result = get_result.result
       ini_txt = 'List Surah:\n'
       for (var x in get_result) {
           ini_txt += `${x}. ${get_result[x]}\n`
       }
       reply(ini_txt)
       break
   case 'alquran':
   if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
				replysticker(waitstc) 
       if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
       urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
       quran = await fetchJson(urls)
       result = quran.result
       ayat = result.ayat
       ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
       for (var x of ayat) {
           arab = x.arab
           nomor = x.ayat
           latin = x.latin
           indo = x.indonesia
           ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
       }
       ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
       ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
       ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
       reply(ini_txt)
       break
   case 'alquranaudio':
   if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
				replysticker(waitstc) 
       if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
       surah = args[0]
       ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
       Ryuu.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
       break
   case 'asmaulhusna':
   if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
				replysticker(waitstc) 
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
       get_result = get_result.result
       ini_txt = `No : ${get_result.index}\n`
       ini_txt += `Latin: ${get_result.latin}\n`
       ini_txt += `Arab : ${get_result.ar}\n`
       ini_txt += `Indonesia : ${get_result.id}\n`
       ini_txt += `English : ${get_result.en}`
       reply(ini_txt)
       break
   case 'kisahnabi':
   if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
				replysticker(waitstc) 
       if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
       query = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
       get_result = get_result.result
       ini_txt = `Name : ${get_result.name}\n`
       ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
       ini_txt += `Umur : ${get_result.age}\n`
       ini_txt += `Tempat : ${get_result.place}\n`
       ini_txt += `Story : \n${get_result.story}`
       reply(ini_txt)
       break

case 'jadwalsholat':	
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
				replysticker(waitstc) 
      try {
        if (args.length == 0) return reply(`Example: ${prefix + command} Pasuruan`)
       daerah = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
       get_result = get_result.result
       ini_txt = `Wilayah : ${get_result.wilayah}\n`
       ini_txt += `Tanggal : ${get_result.tanggal}\n\n`
       ini_txt += `Sahur : ${get_result.sahur}\n`
       ini_txt += `Imsak : ${get_result.imsak}\n`
       ini_txt += `Subuh : ${get_result.subuh}\n`
       ini_txt += `Terbit : ${get_result.terbit}\n`
       ini_txt += `Dhuha : ${get_result.dhuha}\n`
       ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
       ini_txt += `Ashar : ${get_result.ashar}\n`
       ini_txt += `Maghrib : ${get_result.maghrib}\n`
       ini_txt += `Isya : ${get_result.isya}`
       reply(ini_txt)
        } catch (e) {			
					reply(`「 ❗ 」\n\n*MAAF, TERJADI KESALAHAN ATAU WILAYAH TIDAK DI TEMUKAN*`)
					}  
       break       
    //Stalk Menu
    case 'stalkgithub':
        if (args.length == 0) return reply(`Example: ${prefix + command} LoL-Human`)
        username = args[0]
        ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
        ini_result = ini_result.result
        ini_buffer = await getBuffer(ini_result.avatar)
        let ini_tesgithub = `Name : ${ini_result.name}\n`
        ini_tesgithub += `Link : ${ini_result.url}\n`
        ini_tesgithub += `Public Repo : ${ini_result.public_repos}\n`
        ini_tesgithub += `Public Gists : ${ini_result.public_gists}\n`
        ini_tesgithub += `Followers : ${ini_result.followers}\n`
        ini_tesgithub += `Following : ${ini_result.following}\n`
        ini_tesgithub += `Bio : ${ini_result.bio}`
        Ryuu.sendMessage(from, ini_buffer, image, { caption: ini_tesgithub })
        break
    case 'stalktwitter':
        if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
        username = args[0]
        ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${lolkey}`)
        ini_result = ini_result.result
        ini_buffer = await getBuffer(ini_result.profile_picture)
        let ini_testwt = `Username : ${ini_result.screen_name}\n`
        ini_testwt += `Name : ${ini_result.name}\n`
        ini_testwt += `Tweet : ${ini_result.tweet}\n`
        ini_testwt += `Joined : ${ini_result.joined}\n`
        ini_testwt += `Followers : ${ini_result.followers}\n`
        ini_testwt += `Following : ${ini_result.following}\n`
        ini_testwt += `Like : ${ini_result.like}\n`
        ini_testwt += `Description : ${ini_result.description}`
        Ryuu.sendMessage(from, ini_buffer, image, { caption: ini_testwt })
        break
    case 'stalktiktok':
        if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
        stalk_toktok = args[0]
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=9e9c857c1b182df61e56d0b8`)
        get_result = get_result.result
        let ini_testt = `Username : ${get_result.username}\n`
        ini_testt += `Nickname : ${get_result.nickname}\n`
        ini_testt += `Followers : ${get_result.followers}\n`
        ini_testt += `Followings : ${get_result.followings}\n`
        ini_testt += `Likes : ${get_result.likes}\n`
        ini_testt += `Video : ${get_result.video}\n`
        ini_tes += `Bio : ${get_result.bio}\n`
        pp_tt = await getBuffer(get_result.user_picture)
        Ryuu.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_testt })
        break
    case 'ytstalk':
		ytk = `${body.slice(11)}`
		anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`, {method: 'get'})
		cari = '•••••••••••••••••\n'
		for (let search of anu.result) {
		cari += `*Chanel* : ${search.channel_name}\n*Tentang* : ${search.channel_about}\n*Created* : ${search.channel_created}\n*Link* : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
		}
		reply(cari.trim())
		break

    //Game Fitur
    case 'family100':
        if (isGame(sender, isPrem, gcount, glimit)) return reply(`Limit game kamu sudah habis hubungi owner untuk reset limit game`)
        if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
        anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`)
        titid =  `*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\nTotal Jawaban :* ${anu.data.result.answer.length}\n\nWaktu : ${gamewaktu}s `
        sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
        {
        buttonId: `${prefix}family100`,
        buttonText: {
        displayText: `𝐍𝐄𝐗𝐓 ⏩`,
        },
        type: 1,
        },]);
        let anoh = anu.data.result.aswer
        let rgfds = []
        for (let i of anoh){
        let fefs = i.split('/') ? i.split('/')[0] : i
        let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
        let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
        rgfds.push(axsf.toLowerCase())
        }
        game.addfam(from, rgfds, gamewaktu, family100)
        gameAdd(sender, glimit)
        break
    case 'tebakanime':
        if (isGame(sender, isPrem, gcount, glimit)) return reply(`Limit game kamu sudah habis hubungi owner untuk reset limit game`)
        if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakchara?apikey=${lolkey}`)
        get_result = get_result.result
        ini_image = get_result.image
        jawaban = get_result.name
        kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
        ini_buffer = await getBuffer(ini_image)
        Ryuu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
        tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
        fs.writeFileSync("./database/game/tebakanime.json", JSON.stringify(tebakanime))
        })
        await sleep(30000)
        if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
        console.log(color("Jawaban: " + jawaban))
        titid = "*Jawaban*: " + jawaban
        sendButMessage(from, titid, `Klik Untuk Ke Game`, [
        {
        buttonId: `${prefix}tebakanime`,
        buttonText: {
        displayText: `𝐍𝐄𝐗𝐓 ⏩`,
        },
        type: 1,
        },]);
       delete tebakanime[sender.split('@')[0]]
       fs.writeFileSync("./database/game/tebakanime.json", JSON.stringify(tebakanime))
       }
       gameAdd(sender, glimit)
       break
   case 'tebakgambar':
       if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
       get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
       get_result = get_result.result
       ini_image = get_result.image
       jawaban = get_result.answer
       ini_buffer = await getBuffer(ini_image)
       kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
       buff = await getBuffer(ini_image)
       Ryuu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
       tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
       fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
       })
       await sleep(30000)
       if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
       console.log(color("Jawaban: " + jawaban))
       titid = "*Jawaban*: " + jawaban
       sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
       {
       buttonId: `${prefix}tebakgambar`,
       buttonText: {
       displayText: `𝐍𝐄𝐗𝐓 ⏩`,
       },
       type: 1,
       },]);
       delete tebakgambar[sender.split('@')[0]]
       fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
       }
       gameAdd(sender, glimit)
       break
    case 'siapaaku':
        if (isGame(sender, isPrem, gcount, glimit)) return reply(`Limit game kamu sudah habis hubungi owner untuk reset limit game`)
        if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}`)
        get_result = get_result.result
        jawaban = get_result.answer
        kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
        pertanyaan = get_result.question
        Ryuu.sendMessage(from, '```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
        tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
        fs.writeFileSync("./database/game/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
        })
        await sleep(30000)
        if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
        console.log(color("Jawaban: " + jawaban))
        reply("Jawaban: " + jawaban)
        delete tebaksiapaaku[sender.split('@')[0]]
        fs.writeFileSync("./database/game/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
        }
        gameAdd(sender, glimit)
        break
    case 'tebakkata':
        if (isGame(sender, isPrem, gcount, glimit)) return reply(`Limit game kamu sudah habis hubungi owner untuk reset limit game`)
        if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/kata?apikey=${lolkey}`)
        get_result = get_result.result
        jawaban = get_result.jawaban
        pertanyaan = get_result.pertanyaan
        Ryuu.sendMessage(from, '```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
        tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
        fs.writeFileSync("./database/game/tebakata.json", JSON.stringify(tebakata))
        })
        await sleep(30000)
        if (tebakata.hasOwnProperty(sender.split('@')[0])) {
        console.log(color("Jawaban: " + jawaban))
        reply("Jawaban: " + jawaban)
        delete tebakata[sender.split('@')[0]]
        fs.writeFileSync("./database/game/tebakata.json", JSON.stringify(tebakata))
        }
        gameAdd(sender, glimit)
        break
    case 'tebaklirik':
        if (isGame(sender, isPrem, gcount, glimit)) return reply(`Limit game kamu sudah habis hubungi owner untuk reset limit game`)
        if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolkey}`)
        get_result = get_result.result
        jawaban = get_result.answer
        kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
        pertanyaan = get_result.question
        Ryuu.sendMessage(from, '```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
        tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
        fs.writeFileSync("./database/game/tebaklirik.json", JSON.stringify(tebaklirik))
        })
        await sleep(30000)
        if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
        console.log(color("Jawaban: " + jawaban))
        reply("Jawaban: " + jawaban)
        delete tebaklirik[sender.split('@')[0]]
        fs.writeFileSync("./database/game/tebaklirik.json", JSON.stringify(tebaklirik))
        }
        gameAdd(sender, glimit)
        break
    case 'tebakjenaka':
        if (isGame(sender, isPrem, gcount, glimit)) return reply(`Limit game kamu sudah habis hubungi owner untuk reset limit game`)
        if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${lolkey}`)
        get_result = get_result.result
        jawaban = get_result.answer
        kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
        pertanyaan = get_result.question
        Ryuu.sendMessage(from, '```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
        tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
        fs.writeFileSync("./database/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
        })
        await sleep(30000)
        if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
        console.log(color("Jawaban: " + jawaban))
        reply("Jawaban: " + jawaban)
        delete tebakjenaka[sender.split('@')[0]]
        fs.writeFileSync("./database/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
        }
        gameAdd(sender, glimit)
        break
    case 'kimiakuis':
        if (isGame(sender, isPrem, gcount, glimit)) return reply(`Limit game kamu sudah habis hubungi owner untuk reset limit game`)
        if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${lolkey}`)
        get_result = get_result.result
        jawaban = get_result.lambang
        pertanyaan = get_result.nama
        Ryuu.sendMessage(from, '```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
        tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
        fs.writeFileSync("./database/game/tebakimia.json", JSON.stringify(tebakimia))
        })
        await sleep(30000)
        if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
        console.log(color("Jawaban: " + jawaban))
        reply("Jawaban: " + jawaban)
        delete tebakimia[sender.split('@')[0]]
        fs.writeFileSync("./database/game/tebakimia.json", JSON.stringify(tebakimia))
        }
        gameAdd(sender, glimit)
        break
    case 'tebakbendera':
        if (isGame(sender, isPrem, gcount, glimit)) return reply(`Limit game kamu sudah habis hubungi owner untuk reset limit game`)
        if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lolkey}`)
        get_result = get_result.result
        jawaban = get_result.name
        kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
        pertanyaan = get_result.flag
        Ryuu.sendMessage(from, '```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
        tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
        fs.writeFileSync("./database/game/tebakbendera.json", JSON.stringify(tebakbendera))
        })
        await sleep(30000)
        if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
        console.log(color("Jawaban: " + jawaban))
        reply("Jawaban: " + jawaban)
        delete tebakbendera[sender.split('@')[0]]
        fs.writeFileSync("./database/game/tebakbendera.json", JSON.stringify(tebakbendera))
        }
        gameAdd(sender, glimit)
        break
    case 'susunkata':
        if (isGame(sender, isPrem, gcount, glimit)) return reply(`Limit game kamu sudah habis hubungi owner untuk reset limit game`)
        if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolkey}`)
        get_result = get_result.result
        jawaban = get_result.jawaban
        pertanyaan = get_result.pertanyaan
        Ryuu.sendMessage(from, '```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
        susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
        fs.writeFileSync("./database/game/susunkata.json", JSON.stringify(susunkata))
        })
        await sleep(30000)
        if (susunkata.hasOwnProperty(sender.split('@')[0])) {
        console.log(color("Jawaban: " + jawaban))
        reply("Jawaban: " + jawaban)
        delete susunkata[sender.split('@')[0]]
        fs.writeFileSync("./database/game/susunkata.json", JSON.stringify(susunkata))
        }
        gameAdd(sender, glimit)
        break
    case 'asahotak':
        if (isGame(sender, isPrem, gcount, glimit)) return reply(`Limit game kamu sudah habis hubungi owner untuk reset limit game`)
        if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${lolkey}`)
        get_result = get_result.result
        jawaban = get_result.jawaban
        kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
        pertanyaan = get_result.pertanyaan
        Ryuu.sendMessage(from, '```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
        asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
        fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
        })
        await sleep(30000)
        if (asahotak.hasOwnProperty(sender.split('@')[0])) {
        console.log(color("Jawaban: " + jawaban))
        reply("Jawaban: " + jawaban)
        delete asahotak[sender.split('@')[0]]
        fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
        }
        gameAdd(sender, glimit)
        break
    case 'caklontong':
        if (isGame(sender, isPrem, gcount, glimit)) return reply(`Limit game kamu sudah habis hubungi owner untuk reset limit game`)
        if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${lolkey}`)
        get_result = get_result.result
        jawaban = get_result.answer
        kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
        pertanyaan = get_result.question
        Ryuu.sendMessage(from, ' ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
        caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
        fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
        })
        await sleep(30000)
        if (caklontong.hasOwnProperty(sender.split('@')[0])) {
        console.log(color("Jawaban: " + jawaban))
        reply("Jawaban: " + jawaban)
        delete caklontong[sender.split('@')[0]]
        fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
        }
        gameAdd(sender, glimit)
        break

//Fitur Text Pro
    case 'blackpink':
    case 'neon':
    case 'greenneon':
    case 'advanceglow':
    case 'futureneon':
    case 'sandwriting':
    case 'sandsummer':
    case 'sandengraved':
    case 'metaldark':
    case 'neonlight':
    case 'text1917':
    case 'minion':
    case 'deluxesilver':
    case 'newyearcard':
    case 'bloodfrosted':
    case 'halloween':
    case 'jokerlogo':
    case 'fireworksparkle':
    case 'natureleaves':
    case 'bokeh':
    case 'strawberry':
    case 'box3d':
    case 'roadwarning':
    case 'breakwall':
    case 'icecold':
    case 'luxury':
    case 'cloud':
    case 'summersand':
    case 'horrorblood':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (args.length == 0) return reply(`Example: ${prefix + command} Ryuuka Botz`)
        ini_tes = args.join(" ")
        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_tes}`)
        Ryuu.sendMessage(from, ini_buffer, image, { quoted: troli})
        break
    case 'wetglass':
    case 'multicolor3d':
    case 'watercolor':
    case 'luxurygold':
    case 'galaxywallpaper':
    case 'lighttext':
    case 'beautifulflower':
    case 'puppycute':
    case 'royaltext':
    case 'heartshaped':
    case 'birthdaycake':
    case 'galaxystyle':
    case 'hologram3d':
    case 'greenneon':
    case 'glossychrome':
    case 'greenbush':
    case 'metallogo':
    case 'noeltext':
    case 'glittergold':
    case 'textcake':
    case 'starsnight':
    case 'wooden3d':
    case 'textbyname':
    case 'writegalacy':
    case 'galaxybat':
    case 'snow3d':
    case 'birthdayday':
    case 'goldplaybutton':
    case 'silverplaybutton':
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
          ini_tes = args.join(" ")
          getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_tes}`).then((gambar) => {
          Ryuu.sendMessage(from, gambar, image, { quoted: mek })
          })
          break
    case 'shadow':
    case 'cup':
    case 'cup1':
    case 'romance':
    case 'smoke':
    case 'burnpaper':
    case 'lovemessage':
    case 'undergrass':
    case 'love':
    case 'coffe':
    case 'woodheart':
    case 'woodenboard':
    case 'summer3d':
    case 'wolfmetal':
    case 'nature3d':
    case 'underwater':
    case 'golderrose':
    case 'summernature':
    case 'letterleaves':
    case 'glowingneon':
    case 'fallleaves':
    case 'flamming':
    case 'harrypotter':
    case 'carvedwood':
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
          ini_tes = args.join(" ")
          getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_tes}`).then((gambar) => {
          Ryuu.sendMessage(from, gambar, image, { quoted: mek })
          })
          break
      case 'character':
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
          query = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
          get_result = get_result.result
          ini_tes = `Id : ${get_result.id}\n`
          ini_tes += `Name : ${get_result.name.full}\n`
          ini_tes += `Native : ${get_result.name.native}\n`
          ini_tes += `Favorites : ${get_result.favourites}\n`
          ini_tes += `Media : \n`
          bini_media = get_result.media.nodes
          for (var x of ini_media) {
          ini_tes += `- ${x.title.romaji} (${x.title.native})\n`
          }
          ini_tes += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
          thumbnail = await getBuffer(get_result.image.large)
          await Ryuu.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_tes })
          break
      case 'manga':
      if (!isPrem) return reply('Fitur Ini Hanya Bisa Di Gunakan Premium') 
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
          query = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
          get_result = get_result.result
          ini_tes = `Id : ${get_result.id}\n`
          ini_tes += `Id MAL : ${get_result.idMal}\n`
          ini_tes += `Title : ${get_result.title.romaji}\n`
          ini_tes += `English : ${get_result.title.english}\n`
          ini_tes += `Native : ${get_result.title.native}\n`
          ini_tes += `Format : ${get_result.format}\n`
          ini_tes += `Chapters : ${get_result.chapters}\n`
          ini_tes += `Volume : ${get_result.volumes}\n`
          ini_tes += `Status : ${get_result.status}\n`
          ini_tes += `Source : ${get_result.source}\n`
          ini_tes += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
          ini_tes += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
          ini_tes += `Genre : ${get_result.genres.join(", ")}\n`
          ini_tes += `Synonyms : ${get_result.synonyms.join(", ")}\n`
          ini_tes += `Score : ${get_result.averageScore}%\n`
          ini_tes += `Characters : \n`
          ini_character = get_result.characters.nodes
          for (var x of ini_character) {
          ini_tes += `- ${x.name.full} (${x.name.native})\n`
          }
          ini_tes += `\nDescription : ${get_result.description}`
          thumbnail = await getBuffer(get_result.coverImage.large)
          await Ryuu.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_tes })
          break
      case 'anime':
      if (!isPrem) return reply('Fitur Ini Hanya Bisa Di Gunakan Premium') 
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
          query = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
          get_result = get_result.result
          ini_tes = `Id : ${get_result.id}\n`
          ini_tes += `Id MAL : ${get_result.idMal}\n`
          ini_tes += `Title : ${get_result.title.romaji}\n`
          ini_tes += `English : ${get_result.title.english}\n`
          ini_tes += `Native : ${get_result.title.native}\n`
          ini_tes += `Format : ${get_result.format}\n`
          ini_tes += `Episodes : ${get_result.episodes}\n`
          ini_tes += `Duration : ${get_result.duration} mins.\n`
          ini_tes += `Status : ${get_result.status}\n`
          ini_tes += `Season : ${get_result.season}\n`
          ini_tes += `Season Year : ${get_result.seasonYear}\n`
          ini_tes += `Source : ${get_result.source}\n`
          ini_tes += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
          ini_tes += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
          ini_tes += `Genre : ${get_result.genres.join(", ")}\n`
          ini_tes += `Synonyms : ${get_result.synonyms.join(", ")}\n`
          ini_tes += `Score : ${get_result.averageScore}%\n`
          ini_tes += `Characters : \n`
          ini_character = get_result.characters.nodes
          for (var x of ini_character) {
          ini_tes += `- ${x.name.full} (${x.name.native})\n`
          }
          ini_tes += `\nDescription : ${get_result.description}`
          thumbnail = await getBuffer(get_result.coverImage.large)
          await Ryuu.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_tes })
          break
      case 'kusonime':
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
          ini_url = args[0]
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${ini_url}`)
          get_result = get_result.result
          ini_tes = `Title : ${get_result.title}\n`
          ini_tes += `Japanese : ${get_result.japanese}\n`
          ini_tes += `Genre : ${get_result.genre}\n`
          ini_tes += `Seasons : ${get_result.seasons}\n`
          ini_tes += `Producers : ${get_result.producers}\n`
          ini_tes += `Type : ${get_result.type}\n`
          ini_tes += `Status : ${get_result.status}\n`
          ini_tes += `Total Episode : ${get_result.total_episode}\n`
          ini_tes += `Score : ${get_result.score}\n`
          ini_tes += `Duration : ${get_result.duration}\n`
          ini_tes += `Released On : ${get_result.released_on}\n`
          ini_tes += `Desc : ${get_result.desc}\n`
          link_dl = get_result.link_dl
          for (var x in link_dl) {
          ini_tes += `\n${x}\n`
          for (var y in link_dl[x]) {
          ini_tes += `${y} - ${link_dl[x][y]}\n`
          }
          }
          ini_buffer = await getBuffer(get_result.thumbnail)
          await Ryuu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_tes })
          break
      case 'kusonimesearch':
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
         query = args.join(" ")
         get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
         get_result = get_result.result
         ini_tes = `Title : ${get_result.title}\n`
         ini_tes += `Japanese : ${get_result.japanese}\n`
         ini_tes += `Genre : ${get_result.genre}\n`
         ini_tes += `Seasons : ${get_result.seasons}\n`
         ini_tes += `Producers : ${get_result.producers}\n`
         ini_tes += `Type : ${get_result.type}\n`
         ini_tes += `Status : ${get_result.status}\n`
         ini_tes += `Total Episode : ${get_result.total_episode}\n`
         ini_tes += `Score : ${get_result.score}\n`
         ini_tes += `Duration : ${get_result.duration}\n`
         ini_tes += `Released On : ${get_result.released_on}\n`
         ini_tes += `Desc : ${get_result.desc}\n`
         link_dl = get_result.link_dl
         for (var x in link_dl) {
         ini_tes += `\n${x}\n`
         for (var y in link_dl[x]) {
         ini_tes += `${y} - ${link_dl[x][y]}\n`
         }
         }
         ini_buffer = await getBuffer(get_result.thumbnail)
         await Ryuu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_tes })
         break
     case 'otakudesu':
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
          ini_url = args[0]
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${lolkey}&url=${ini_url}`)
          get_result = get_result.result
          ini_tes = `Title : ${get_result.title}\n`
          ini_tes += `Japanese : ${get_result.japanese}\n`
          ini_tes += `Judul : ${get_result.judul}\n`
          ini_tes += `Type : ${get_result.type}\n`
          ini_tes += `Episode : ${get_result.episodes}\n`
          ini_tes += `Aired : ${get_result.aired}\n`
          ini_tes += `Producers : ${get_result.producers}\n`
          ini_tes += `Genre : ${get_result.genres}\n`
          ini_tes += `Duration : ${get_result.duration}\n`
          ini_tes += `Studios : ${get_result.status}\n`
          ini_tes += `Rating : ${get_result.rating}\n`
          ini_tes += `Credit : ${get_result.credit}\n`
          get_link = get_result.link_dl
          for (var x in get_link) {
          ini_tes += `\n\n*${get_link[x].title}*\n`
          for (var y in get_link[x].link_dl) {
          ini_info = get_link[x].link_dl[y]
          ini_tes += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
          ini_tes += `\`\`\`Size : \`\`\`${ini_info.size}\n`
          ini_tes += `\`\`\`Link : \`\`\`\n`
          down_link = ini_info.link_dl
          for (var z in down_link) {
          ini_tes += `${z} - ${down_link[z]}\n`
          }
          }
          }
          reply(ini_tes)
          break
      case 'otakudesusearch':
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
          query = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
          get_result = get_result.result
          ini_tes = `Title : ${get_result.title}\n`
          ini_tes += `Japanese : ${get_result.japanese}\n`
          ini_tes += `Judul : ${get_result.judul}\n`
          ini_tes += `Type : ${get_result.type}\n`
          ini_tes += `Episode : ${get_result.episodes}\n`
          ini_tes += `Aired : ${get_result.aired}\n`
          ini_tes += `Producers : ${get_result.producers}\n`
          ini_tes += `Genre : ${get_result.genres}\n`
          ini_tes += `Duration : ${get_result.duration}\n`
          ini_tes += `Studios : ${get_result.status}\n`
          ini_tes += `Rating : ${get_result.rating}\n`
          ini_tes += `Credit : ${get_result.credit}\n`
          get_link = get_result.link_dl
          for (var x in get_link) {
          ini_tes += `\n\n*${get_link[x].title}*\n`
          for (var y in get_link[x].link_dl) {
          ini_info = get_link[x].link_dl[y]
          ini_tes += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
          ini_tes += `\`\`\`Size : \`\`\`${ini_info.size}\n`
          ini_tes += `\`\`\`Link : \`\`\`\n`
          down_link = ini_info.link_dl
          for (var z in down_link) {
          ini_tes += `${z} - ${down_link[z]}\n`
          }
          }
          }
          reply(ini_tes)
          break                
      case 'nhentaipdf':
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
          henid = args[0]
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
          get_result = get_result.result
          ini_buffer = await getBuffer(get_result)
          await Ryuu.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
          break
      case 'nhentaisearch':
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
          query = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
          get_result = get_result.result
          ini_tes = "Result : \n"
          for (var x of get_result) {
          ini_tes += `Id : ${x.id}\n`
          ini_tes += `Title English : ${x.title_english}\n`
          ini_tes += `Title Japanese : ${x.title_japanese}\n`
          ini_tes += `Native : ${x.title_native}\n`
          ini_tes += `Upload : ${x.date_upload}\n`
          ini_tes += `Page : ${x.page}\n`
          ini_tes += `Favourite : ${x.favourite}\n\n`
          }
          reply(ini_tes)
          break
      case 'nekopoi':
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
          ini_url = args[0]
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
          get_result = get_result.result
          ini_tes = `Title : ${get_result.anime}\n`
          ini_tes += `Porducers : ${get_result.producers}\n`
          ini_tes += `Duration : ${get_result.duration}\n`
          ini_tes += `Size : ${get_result.size}\n`
          ini_tes += `Sinopsis : ${get_result.sinopsis}\n`
          link = get_result.link
          for (var x in link) {
          ini_tes += `\n${link[x].name}\n`
          link_dl = link[x].link
          for (var y in link_dl) {
          ini_tes += `${y} - ${link_dl[y]}\n`
          }
          }
          ini_buffer = await getBuffer(get_result.thumb)
          await Ryuu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_tes })
          break
      case 'nekopoisearch':
          if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
          if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
          query = args.join(" ")
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
          get_result = get_result.result
          ini_tes = ""
          for (var x of get_result) {
          ini_tes += `Title : ${x.title}\n`
          ini_tes += `Link : ${x.link}\n`
          ini_tes += `Thumbnail : ${x.thumbnail}\n\n`
          }
          reply(ini_tes)
          break                                   
    case 'lk21':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
        query = args.join(" ")
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
        get_result = get_result.result
        ini_tes = `Title : ${get_result.title}\n`
        ini_tes += `Link : ${get_result.link}\n`
        ini_tes += `Genre : ${get_result.genre}\n`
        ini_tes += `Views : ${get_result.views}\n`
        ini_tes += `Duration : ${get_result.duration}\n`
        ini_tes += `Tahun : ${get_result.tahun}\n`
        ini_tes += `Rating : ${get_result.rating}\n`
        ini_tes += `Desc : ${get_result.desc}\n`
        ini_tes += `Actors : ${get_result.actors.join(", ")}\n`
        ini_tes += `Location : ${get_result.location}\n`
        ini_tes += `Date Release : ${get_result.date_release}\n`
        ini_tes += `Language : ${get_result.language}\n`
        ini_tes += `Link Download : ${get_result.link_dl}`
        thumbnail = await getBuffer(get_result.thumbnail)
        Ryuu.sendMessage(from, thumbnail, image, { quoter: mek, caption: ini_tes })
        break
    case 'drakorongoing':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = "Ongoing Drakor\n\n"
        for (var x of get_result) {
        ini_tes += `Title : ${x.title}\n`
        ini_tes += `Link : ${x.link}\n`
        ini_tes += `Thumbnail : ${x.thumbnail}\n`
        ini_tes += `Year : ${x.category}\n`
        ini_tes += `Total Episode : ${x.total_episode}\n`
        ini_tes += `Genre : ${x.genre.join(", ")}\n\n`
        }
        reply(ini_tes)
        break
    case 'wattpad':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
        ini_url = args[0]
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=${lolkey}&url=${ini_url}`)
        get_result = get_result.result
        ini_tes = `Title : ${get_result.title}\n`
        ini_tes += `Rating : ${get_result.rating}\n`
        ini_tes += `Motify date : ${get_result.modifyDate}\n`
        ini_tes += `Create date: ${get_result.createDate}\n`
        ini_tes += `Word : ${get_result.word}\n`
        ini_tes += `Comment : ${get_result.comment}\n`
        ini_tes += `Vote : ${get_result.vote}\n`
        ini_tes += `Reader : ${get_result.reader}\n`
        ini_tes += `Pages : ${get_result.pages}\n`
        ini_tes += `Description : ${get_result.desc}\n\n`
        ini_tes += `Story : \n${get_result.story}`
        thumbnail = await getBuffer(get_result.photo)
        Ryuu.sendMessage(from, thumbnail, image, { quoter: mek, caption: ini_tes })
        break
    case 'wattpadsearch':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
        query = args.join(" ")
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${query}`)
        get_result = get_result.result
        ini_tes = "Wattpad Seach : \n"
        for (var x of get_result) {
        ini_tes += `Title : ${x.title}\n`
        ini_tes += `Url : ${x.url}\n`
        ini_tes += `Part : ${x.parts}\n`
        ini_tes += `Motify date : ${x.modifyDate}\n`
        ini_tes += `Create date: ${x.createDate}\n`
        ini_tes += `Coment count: ${x.commentCount}\n\n`
        }
        reply(ini_tes)
        break
    case 'cerpen':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = `Title : ${get_result.title}\n`
        ini_tes += `Creator : ${get_result.creator}\n`
        ini_tes += `Story :\n${get_result.cerpen}`
        reply(ini_tes)
        break
    case 'ceritahoror':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = `Title : ${get_result.title}\n`
        ini_tes += `Desc : ${get_result.desc}\n`
        ini_tes += `Story :\n${get_result.story}\n`
        thumbnail = await getBuffer(get_result.thumbnail)
        Ryuu.sendMessage(from, thumbnail, image, { quoter: mek, caption: ini_tes })
        break
                    
    //Info Menu
    case 'heroml':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
        hero = args[0]
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = `Name : ${get_result.hero_name}\n`
        ini_tes += `Entrance Quotes : ${get_result.ent_quotes}\n`
        ini_tes += `Role : ${get_result.detail.role}\n`
        ini_tes += `Specialty : ${get_result.detail.specialty}\n`
        ini_tes += `Laning : ${get_result.detail.laning_recommendation}\n`
        ini_tes += `Release : ${get_result.detail.release_date}\n`
        ini_tes += `Movement speed : ${get_result.attr.movement_speed}\n`
        ini_tes += `Physical attack : ${get_result.attr.physical_attack}\n`
        ini_tes += `Magic power : ${get_result.attr.magic_power}\n`
        ini_tes += `Physical defense : ${get_result.attr.physical_defense}\n`
        ini_tes += `Magic defense : ${get_result.attr.magic_defense}\n`
        ini_tes += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
        ini_tes += `Hp : ${get_result.attr.hp}\n`
        ini_tes += `Mana : ${get_result.attr.mana}\n`
        ini_tes += `Mana regen : ${get_result.attr.mana_regen}\n`
        ini_icon = await getBuffer(get_result.icon)
        Ryuu.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_tes })
        break
    case 'jadwaltv':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
        channel = args[0]
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = `Jadwal TV ${channel.toUpperCase()}\n`
        for (var x in get_result) {
        ini_tes += `${x} - ${get_result[x]}\n`
        }
        reply(ini_tes)
        break
    case 'jadwaltvnow':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = `Jadwal TV Now :\n`
        for (var x in get_result) {
        ini_tes += `${x.toUpperCase()}${get_result[x]}\n\n`
        }
        reply(ini_tes)
        break
    case 'newsinfo':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = "Result :\n"
        for (var x of get_result) {
        ini_tes += `Title : ${x.title}\n`
        ini_tes += `Author : ${x.author}\n`
        ini_tes += `Source : ${x.source.name}\n`
        ini_tes += `Url : ${x.url}\n`
        ini_tes += `Published : ${x.publishedAt}\n`
        ini_tes += `Description : ${x.description}\n\n`
        }
        reply(ini_tes)
        break
    case 'cnnindonesia':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = "Result :\n"
        for (var x of get_result) {
        ini_tes += `Judul : ${x.judul}\n`
        ini_tes += `Link : ${x.link}\n`
        ini_tes += `Tipe : ${x.tipe}\n`
        ini_tes += `Published : ${x.waktu}\n\n`
        }
        reply(ini_tes)
        break
    case 'cnnnasional':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = "Result :\n"
        for (var x of get_result) {
        ini_tes += `Judul : ${x.judul}\n`
        ini_tes += `Link : ${x.link}\n`
        ini_tes += `Tipe : ${x.tipe}\n`
        ini_tes += `Published : ${x.waktu}\n\n`
        }
        reply(ini_tes)
        break
    case 'cnninternasional':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = "Result :\n"
        for (var x of get_result) {
        ini_tes += `Judul : ${x.judul}\n`
        ini_tes += `Link : ${x.link}\n`
        ini_tes += `Tipe : ${x.tipe}\n`
        ini_tes += `Published : ${x.waktu}\n\n`
        }
        reply(ini_tes)
        break
    case 'infogempa':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
		if (!isPrem) return reply('KAMU BUKAN USER PREMIUM,JIKA INGIN UPGRADE KETIK XOWNER')
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = `Lokasi : ${get_result.lokasi}\n`
        ini_tes += `Waktu : ${get_result.waktu}\n`
        ini_tes += `Potensi : ${get_result.potensi}\n`
        ini_tes += `Magnitude : ${get_result.magnitude}\n`
        ini_tes += `Kedalaman : ${get_result.kedalaman}\n`
        ini_tes += `Koordinat : ${get_result.koordinat}`
        get_buffer = await getBuffer(get_result.map)
        Ryuu.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_tes })
        break
    case 'cuaca':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
        daerah = args[0]
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = `Tempat : ${get_result.tempat}\n`
        ini_tes += `Cuaca : ${get_result.cuaca}\n`
        ini_tes += `Angin : ${get_result.angin}\n`
        ini_tes += `Description : ${get_result.description}\n`
        ini_tes += `Kelembapan : ${get_result.kelembapan}\n`
        ini_tes += `Suhu : ${get_result.suhu}\n`
        ini_tes += `Udara : ${get_result.udara}\n`
        ini_tes += `Permukaan laut : ${get_result.permukaan_laut}\n`
        Ryuu.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek})
        reply(ini_tes)
        break
    case 'covidindo':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = `Positif : ${get_result.positif}\n`
        ini_tes += `Sembuh : ${get_result.sembuh}\n`
        ini_tes += `Dirawat : ${get_result.dirawat}\n`
        ini_tes += `Meninggal : ${get_result.meninggal}`
        reply(ini_tes)
        break
    case 'covidglobal':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = `Positif : ${get_result.positif}\n`
        ini_tes += `Sembuh : ${get_result.sembuh}\n`
        ini_tes += `Dirawat : ${get_result.dirawat}\n`
        ini_tes += `Meninggal : ${get_result.meninggal}`
        reply(ini_tes)
        break
    case 'kodepos':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
        daerah = args.join(" ")
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/kodepos?apikey=${lolkey}&query=${daerah}`)
        get_result = get_result.result[0]
        ini_tes = `Provinsi : ${get_result.province}\n`
        ini_tes += `Kabupaten : ${get_result.city}\n`
        ini_tes += `Kecamatan : ${get_result.subdistrict}\n`
        ini_tes += `Kelurahan : ${get_result.urban}\n`
        ini_tes += `Kode Pos : ${get_result.postalcode}`
        reply(ini_tes)
        break
    case 'jadwalbola':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = "Jadwal Bola :\n"
        for (var x of get_result) {
        ini_tes += `Hari : ${x.hari}\n`
        ini_tes += `Jam : ${x.jam}\n`
        ini_tes += `Event : ${x.event}\n`
        ini_tes += `Match : ${x.match}\n`
        ini_tes += `TV : ${x.tv}\n\n`
        }
        reply(ini_tes)
        break
    case 'indbeasiswa':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = 'Info Beasiswa :\n'
        for (var x of get_result) {
        ini_tes += `Title : ${x.title}\n`
        ini_tes += `Link : ${x.link}\n\n`
        }
        reply(ini_tes)
        break
    case 'hoax':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        get_result = await fetchJson(`http://api.lolhuman.xyz/api/turnbackhoax?apikey=${lolkey}`)
        get_result = get_result.result
        ini_tes = 'Info Hoax :\n'
        for (var x of get_result) {
        ini_tes += `Title : ${x.title}\n`
        ini_tes += `Link : ${x.link}\n`
        ini_tes += `Posted : ${x.posted}\n`
        ini_tes += `Description : ${x.desc}\n\n`
        }
        reply(ini_tes)
        break                
    
    //Fitur Asupan
    case 'cecanvietnam':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`)
        replysticker(waitstc)
        goo = await getBuffer(huft.result.url)
        Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'cecanmalaysia':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=ZeroYT7`)
        replysticker(waitstc)
        goo = await getBuffer(huft.result.url)
        Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'cecankorea':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=ZeroYT7`)
        replysticker(waitstc)
        goo = await getBuffer(huft.result.url)
        Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'cecanindonesia':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=ZeroYT7`)
        replysticker(waitstc)
        goo = await getBuffer(huft.result.url)
        Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'cecanjapan':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=ZeroYT7`)
        replysticker(waitstc)
        goo = await getBuffer(huft.result.url)
        Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'cecanthailand':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=ZeroYT7`)
        replysticker(waitstc)
        goo = await getBuffer(huft.result.url)
        Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'cecanchina':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/china?apikey=ZeroYT7`)
        replysticker(waitstc)
        goo = await getBuffer(huft.result.url)
        Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'asupancecan':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
        replysticker(waitstc)
        goo = await getBuffer(huft.result.url)
        Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'asupanhijaber':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`)
        replysticker(waitstc)
        goo = await getBuffer(huft.result.url)
        Ryuu.sendMessage(from, goo, image, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'asupansantuy':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)
        replysticker(waitstc)
        buffer = await getBuffer(ini.result.url)
        Ryuu.sendMessage(from, buffer, video, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'asupanukhti':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`)
        replysticker(waitstc)
        buffer = await getBuffer(ini.result.url)
        Ryuu.sendMessage(from, buffer, video, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'asupanbocil':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)
        replysticker(waitstc)
        buffer = await getBuffer(ini.result.url)
        Ryuu.sendMessage(from, buffer, video, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'asupanghea':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)
        replysticker(waitstc)
        buffer = await getBuffer(ini.result.url)
        Ryuu.sendMessage(from, buffer, video, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break
    case 'asupanrika':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`)
        replysticker(waitstc)
        buffer = await getBuffer(ini.result.url)
        Ryuu.sendMessage(from, buffer, video, {quoted: troli, caption: 'Nih Jangan Lupa Subscribe YT : Ryuuka Botz'})
        break

    //NSFW MENU
    case 'awoo': case 'megumin': case 'shinobu': case 'waifu':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        replysticker(waitstc)
        anu = await fetchJson(`https://waifu.pics/api/sfw/${command}`)
        kon = await getBuffer(anu.url)
        pll = `Nih Jangan Lupa Subscribe YT : Ryuuka Botz`
        sendButImage(from, pll, `*_Next to continue..!!_*`, kon, [                      
        {
        buttonId: `${prefix}${command}`,
        buttonText: {
        displayText: `𝐍𝐄𝐗𝐓 ⏩`,
        },
        type: 1,
        },
        ]);                 
        break    
    case 'blowjob':
    case 'yuri':
    case 'holo':
    case 'pussy':
    case 'baka':
    case 'anal':
    case 'kiss':
    case 'boobs':
    case 'ero':
    case 'wallpaper':
    case 'hug':
    case 'solo':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        replysticker(waitstc)
        anu = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
        kon = await getBuffer(anu.url)
        pll = `Nih Jangan Lupa Subscribe YT : Ryuuka Botz`
        sendButImage(from, pll, `*_Next to continue..!!_*`, kon, [                      
        {
        buttonId: `${prefix}${command}`,
        buttonText: {
        displayText: `𝐍𝐄𝐗𝐓 ⏩`,
        },
        type: 1,
        },
        ]);                 
        break
    case 'trapnime':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        replysticker(waitstc)
        anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
        kon = await getBuffer(anu.url)
        pll = `Nih Jangan Lupa Subscribe YT : Ryuuka Botz`
        sendButImage(from, pll, `*_Next to continue..!!_*`, kon, [                      
        {
        buttonId: `${prefix}${command}`,
        buttonText: {
        displayText: `𝐍𝐄𝐗𝐓 ⏩`,
        },
        type: 1,
        },
        ]);                 
        break  
    case 'hentai2':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        replysticker(waitstc)
        anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
        kon = await getBuffer(anu.url)
        pll = `Nih Jangan Lupa Subscribe YT : Ryuuka Botz`
        sendButImage(from, pll, `*_Next to continue..!!_*`, kon, [                      
        {
        buttonId: `${prefix}hentai2`,
        buttonText: {
        displayText: `𝐍𝐄𝐗𝐓 ⏩`,
        },
        type: 1,
        },
        ]);                 
        break      
    case 'hentai':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        replysticker(waitstc)
        anu = await fetchJson(`https://waifu.pics/api/nsfw/waifu`)
        kon = await getBuffer(anu.url)
        pll = `Nih Jangan Lupa Subscribe YT : Ryuuka Botz`
        sendButImage(from, pll, `*_Next to continue..!!_*`, kon, [                      
        {
        buttonId: `${prefix}hentai`,
        buttonText: {
        displayText: `𝐍𝐄𝐗𝐓 ⏩`,
        },
        type: 1,
        },
        ]);                 
        break
    case 'nsfw':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
	    if (!isGroup) return replysticker(groupstc)
		if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
		if (Number(args[0]) === 1) {
		if (isNsfw) return reply('Sudah Aktif Kak')
		nsfww.push(from)
		fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
		reply('Sukses mengaktifkan fitur nsfw')
		Ryuu.sendMessage(from, `Bebas Nyari Hentai :v`, text)
		} else if (Number(args[0]) === 0) {
		if (!isNsfw) return reply('Sudah Mati Kak')
		var ini = nsfww.indexOf(from)
		nsfww.splice(ini, 1)
	    fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
		reply('Sukses menonaktifkan fitur nsfw')
	    } else {
        reply('1 untuk mengaktifkan, 0 untuk mematikan')
	    }
		break

    //MAKER MENU
    case 'gifstiker': case 's': case 'stickergif': case 'sticker': case 'stiker':         if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
        const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
        ran = '666.webp'
        await ffmpeg(`./${media}`)
        .input(media)
        .on('start', function (cmd) {
        console.log(`Started : ${cmd}`)
        })
        .on('error', function (err) {
        console.log(`Error : ${err}`)
        fs.unlinkSync(media)
        fakestatus('error')
        })
        .on('end', function () {
        console.log('Finish')
        Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
        fs.unlinkSync(media)
        fs.unlinkSync(ran)
        })
        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        .toFormat('webp')
        .save(ran)
        } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
        const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
        ran = '999.webp'
        fakestatus(mess.wait)
        await ffmpeg(`./${media}`)
        .inputFormat(media.split('.')[1])
        .on('start', function (cmd) {
        console.log(`Started : ${cmd}`)
        })
        .on('error', function (err) {
        console.log(`Error : ${err}`)
        fs.unlinkSync(media)
        tipe = media.endsWith('.mp4') ? 'video' : 'gif'
        fakestatus(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
        })
        .on('end', function () {
        console.log('Finish')
        Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
        fs.unlinkSync(media)
        fs.unlinkSync(ran)
        })
        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        .toFormat('webp')
        .save(ran)
        } else {
        fakestatus(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
        }
        break
    case 'toimg':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isQuotedSticker) return fakestatus('reply stickernya')
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
        media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media)
        if (err) return fakestatus('Gagal, pada saat mengkonversi sticker ke gambar')
        buffer = fs.readFileSync(ran)
        Ryuu.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
        fs.unlinkSync(ran)
        })
        break
    case 'ttp':  
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp Ryuuka Botz`)
        anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
        Ryuu.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
        break
    case 'attp':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
        buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
        Ryuu.sendMessage(from, buffer, sticker, { quoted: mek })
        break
    
    //Fitur Fun
    case 'suit':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (args.length < 1) return reply('Pilih gunting/batu/kertas')
        if (args[0] === 'gunting' ) {
        gunting = ["Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔","Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂","Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"]
        gun = gunting[Math.floor(Math.random() * gunting.length)]
        reply(gun)
        } else if (args[0] === 'kertas') {
        ker = ["Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔","Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂","Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"]
        kertas = ker[Math.floor(Math.random() * ker.length)]
        reply(kertas)
        } else if (args[0] === 'batu') {
        bat = ["Kamu *Batu*\nAku *Gunting*\nKamu Menang 😁","Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂","Kamu *Batu*\nAku *Batu*\nKita Seri 😏"]
        batu = bat[Math.floor(Math.random() * bat.length)]
        reply(batu)
        } else {
        reply('Pilih gunting/batu/kertas')
        }
        break
    case 'apakah':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        apakah = body.slice(1)
        const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
        const kah = apa[Math.floor(Math.random() * apa.length)]
        Ryuu.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
        break
    case 'rate': case 'nilai':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        rate = body.slice(1)
        const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
        const te = ra[Math.floor(Math.random() * ra.length)]
        Ryuu.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
        break
    case 'gantengcek': case 'cekganteng':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        ganteng = body.slice(1)
        const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
        const teng = gan[Math.floor(Math.random() * gan.length)]
        Ryuu.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
        break
    case 'cantikcek': case 'cekcantik':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        cantik = body.slice(1)
        const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
        const tik = can[Math.floor(Math.random() * can.length)]
        Ryuu.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
        break
    case 'cekwatak':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        var namao = pushname
        var prfx = await Ryuu. getProfilePicture(sender)
        const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
        const wtk = watak[Math.floor(Math.random() * (watak.length))]
        const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
        const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
        const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
        const sft = sifat[Math.floor(Math.random() * (sifat.length))]
        const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
        const hby = hobby[Math.floor(Math.random() * (hobby.length))]
        const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
        const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
        const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
        const typo = tipe[Math.floor(Math.random() * (tipe.length))]
        await fakestatus(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
        break
    case 'bisakah':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        bisakah = body.slice(1)
        const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
        const keh = bisa[Math.floor(Math.random() * bisa.length)]
        Ryuu.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
        break
    case 'kapankah':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        kapankah = body.slice(1)
        const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
        const koh = kapan[Math.floor(Math.random() * kapan.length)]
        Ryuu.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
        break
    case 'jadian':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        jds = []
        jdii = groupMembers
        koss = groupMembers
        akuu = jdii[Math.floor(Math.random() * jdii.length)]
        diaa = koss[Math.floor(Math.random() * koss.length)]
        teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
        jds.push(akuu.jid)
        jds.push(diaa.jid)
        mentions(teks, jds, true)
        break
   case 'cantik':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        membr = []
        const mes = groupMembers
        const msk = groupMembers
        const siaps = mes[Math.floor(Math.random() * mes.length)]
        const sips = pushname[Math.floor(Math.random() * msk.length)]
        teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
        membr.push(siaps.jid)
        mentions(teks, membr, true)
        break
    case 'ganteng':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        membr = []
        const nus = groupMembers
        const msl = groupMembers
        const siapss = nus[Math.floor(Math.random() * nus.length)]
        const sipss = pushname[Math.floor(Math.random() * msl.length)]
        teks = `*Yang Paling Ganteng Adalah :* @${siapss.jid.split('@')[0]}`
        membr.push(siapss.jid)
        mentions(teks, membr, true)
        break
   case 'babi':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        membr = []
        const meg = groupMembers
        const mge = groupMembers
        const ba = meg[Math.floor(Math.random() * meg.length)]
        const bi = pushname[Math.floor(Math.random() * mge.length)]
        teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
        membr.push(ba.jid)
        mentions(teks, membr, true)
        break
    case 'beban':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        membr = []
        const nge = groupMembers
        const tod = groupMembers
        const beb = nge[Math.floor(Math.random() * nge.length)]
        const an = pushname[Math.floor(Math.random() * tod.length)]
        teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
        membr.push(beb.jid)
        mentions(teks, membr, true)
        break            
	case 'slot':
	    if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
		const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','?? : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
		somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
	    somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
		somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
		if (somtoyy== '🍌 : 🍌 : 🍌') {
		bp = await sendButMessage(from, `─「 🎰 *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
		{
		buttonId: `${prefix}slot`,
		buttonText: {
		displayText: `NEXT ➡️`,
		},
		type: 1,
		}]);
		} else if (somtoyy == '🍒 : 🍒 : 🍒') {
		bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
		{
		buttonId: `${prefix}slot`,
		buttonText: {
		displayText: `NEXT ➡️`,
		},
	    type: 1,
		}]);
		} else if (somtoyy == '🔔 : 🔔 : 🔔') {
		bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
		{
		buttonId: `${prefix}slot`,
		buttonText: {
		displayText: `NEXT ➡️`,
		},
		type: 1,
		}]);
		} else if (somtoyy == '🍐 : 🍐 : 🍐') {
		bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
	   {
	   buttonId: `${prefix}slot`,
	   buttonText: {
	   displayText: `NEXT ➡️`,
	   },
	   type: 1,
	   }]);
	   } else if (somtoyy == '🍇 : 🍇 : 🍇') {
	   bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
	   {
		buttonId: `${prefix}slot`,
		buttonText: {
		displayText: `NEXT ➡️`,
		},
	    type: 1,
		}]);
	    } else {
	    ok = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nKAMU BAU!`, `Main Lagi? Klik Di Bawah `, [
		{
		buttonId: `${prefix}slot`,
		buttonText: {
		displayText: `NEXT ➡️`,
		},
		type: 1,
		}]);
	    }
		break
    case 'truth':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
        const ttrth = trut[Math.floor(Math.random() * trut.length)]
        truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
        Ryuu.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
        break
    case 'dare':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
        const der = dare[Math.floor(Math.random() * dare.length)]
        buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
        Ryuu.sendMessage(from, buff, image, { caption: '*Dare*\n\n'+ der, quoted: mek })
        break
    case 'darkjokes':  
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        let data = fs.readFileSync('./lib/darkjokes.js');
	    jsonData = JSON.parse(data);
        randIndex = Math.floor(Math.random() * jsonData.length);
	    randKey = jsonData[randIndex];
	    hasil = await getBuffer(randKey.result)
	    gbutsan = [{buttonId: `${prefix}darkjokes`, buttonText: {displayText: '𝐍𝐄𝐗𝐓 ⏩'}, type: 1}]
        pto =await Ryuu.prepareMessage(from, hasil, image)    
        gbuttonan = {
        imageMessage: pto.message.imageMessage,
        contentText: `Gelap Yh`,
        footerText: 'Klik Next Untuk Gambar Selanjutnya☕',
        buttons: gbutsan,
        headerType: 4
        }
        await Ryuu.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
		break		
    case 'faktaunik':	
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
		const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
		const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
		sendButMessage(from, `${ran_faktau}`, `${jams}`, [
		{
		buttonId: `${prefix}faktaunik`,
		buttonText: {
	    displayText: `𝐍𝐄𝐗𝐓 ➡️`,
	    },
	    type: 1,
		}]);
		break
	case 'pantun':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
		const pantun = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
		const ran_pantun = pantun[Math.floor(Math.random() * pantun.length)]
		sendButMessage(from, `${ran_pantun}`, `${jams}`, [
		{
		buttonId: `${prefix}pantun`,
		buttonText: {
		displayText: `𝐍𝐄𝐗𝐓 ➡️`,
		},
		type: 1,
		}]);
		break
    case 'bagaimanakah':   
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        bagaimanakah = body.slice(1)
		const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
		const mana = bagai[Math.floor(Math.random() * bagai.length)]
		Ryuu.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
		break

     //SOUND MENU
    case 'sound1':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound1.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound2':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound2.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound3':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound3.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound4':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound4.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound5':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound5.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound6':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound6.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound7':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound7.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound8':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound8.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound9':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound9.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound10':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound10.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound11':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound11.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound12':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound12.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound13':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound13.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound14':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound14.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound15':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound15.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound16':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound16.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound17':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound17.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break
    case 'sound18':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        menu =`Tunggu Beberapa Detik Ya Kak..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝐌𝐄𝐍𝐔 💌' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
        man = fs.readFileSync('./assets/sound18.mp3');
        Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        break

    //Downloader Menu
    case 'spotify':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
        url = args[0]
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
        get_result = get_result.result
        ini_tes = `Title : ${get_result.title}\n`
        ini_tes += `Artists : ${get_result.artists}\n`
        ini_tes += `Duration : ${get_result.duration}\n`
        ini_tes += `Popularity : ${get_result.popularity}\n`
        ini_tes += `Preview : ${get_result.preview_url}\n`
        thumbnail = await getBuffer(get_result.thumbnail)
        await Ryuu.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_tes })
        get_audio = await getBuffer(get_result.link)
        await Ryuu.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
        break
    case 'spotifysearch':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
        get_result = get_result.result
        ini_tes = ""
        for (var x of get_result) {
        ini_tes += `Title : ${x.title}\n`
        ini_tes += `Artists : ${x.artists}\n`
        ini_tes += `Duration : ${x.duration}\n`
        ini_tes += `Link : ${x.link}\n`
        ini_tes += `Preview : ${x.preview_url}\n\n\n`
        }
        reply(ini_tes)
     break
     case 'jooxplay':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
        query = args.join(" ")
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${query}`)
        get_result = get_result.result
        ini_tes = `Title : ${get_result.info.song}\n`
        ini_tes += `Artists : ${get_result.info.singer}\n`
        ini_tes += `Duration : ${get_result.info.duration}\n`
        ini_tes += `Album : ${get_result.info.album}\n`
        ini_tes += `Uploaded : ${get_result.info.date}\n`
        ini_tes += `Lirik :\n ${get_result.lirik}\n`
        thumbnail = await getBuffer(get_result.image)
        await Ryuu.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_tes })
        get_audio = await getBuffer(get_result.audio[0].link)
        await Ryuu.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
    break
    case 'lirik':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (args.length < 1) return reply('Judulnya?')
        replysticker(waitstc)
        teks = body.slice(7)
        lirikLagu(teks).then((res) => {
        let lirik = `${res[0].result}`
        reply(lirik)
        })
        break       
    case 'playstore':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if(!c) return reply('*Mau Cari Aplikasi Apa?!?!? Bangsat kau..!!🤬*')
        let play = await hx.playstore(c)
        let store = '\n❉─────────────────────❉\n'
        for (let i of play){
        store += `\n*「 _PLAY STORE_ 」*\n`
        store += `- *Nama* : ${i.name}\n`
        store += `- *Link* : ${i.link}\n`
        store += `- *Dev* : ${i.developer}\n`
        store += `- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉\n\n`
        }
        reply(store)
        break
    case 'pinterest':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (!c) return reply('yg mau di cari apa?')
        replysticker(waitstc)
        pinterest(`${c}`).then( data => {
        const amsulah = data.result
        const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
        sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
        })
        break
    case 'play':
if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply('Sedang mencari...')
ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=KingOfBear`)
thmb = await getBuffer(ini.thumb)
ply1 =`*Judul:* ${ini.title}\n*Channel:* ${ini.channel}\n*View:* ${ini.views}\n*Waktu Publish:* ${ini.published}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
reply('Sedang mendownload...')
bo = args.join(" ")
ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp4?query=${bo}&apikey=KingOfBear`)
mp4 = await getBuffer(ini.url)
Ryuu.sendMessage(from, mp4, video, { quoted: ftrol, caption: `Done kk` })
break
case 'mp3':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
reply('Sedang mendownload...')
bo = args.join(" ")
ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=KingOfBear`)
mp3 = await getBuffer(ini.url)
Ryuu.sendMessage(from, mp3, audio)
break
    case 'ytsearch': case 'yts':
    if (!isPrem) return reply('Fitur Ini Hanya Bisa Di Gunakan Premium') 
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
		if (args.length < 1) return reply('Tolong masukan query!')
		var srch = args.join(' ');
		try {
		var aramas = await yts(srch);
		} catch {
		return await Ryuu.sendMessage(from, 'Error!', MessageType.text, dload)
		}
		aramat = aramas.all 
		var tbuff = await getBuffer(aramat[0].image)
		var ytresult = '';
		ytresult += '「 *YOUTUBE SEARCH* 」'
    	ytresult += '\n________________________\n\n'
		aramas.all.map((video) => {
		ytresult += '• Title: ' + video.title + '\n'
	    ytresult += '• Link: ' + video.url + '\n'
	    ytresult += '• Durasi: ' + video.timestamp + '\n'
		ytresult += '• Views: ' + video.views + '\n'
		ytresult += '• Upload: ' + video.ago + '\n________________________\n\n'
		});
		ytresult += '*WHATSAPP-BOT*'
		await Ryuu.sendMessage(from, tbuff, image, {quoted : mek, caption: ytresult})
		break					
   case 'ytmp3':
       if (args.length < 1) return reply("Masukkan url youtube")
       url = args.join(' ')
       anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=NisaaCantik`)
       ytmp3 = await getBuffer(anu.result.url)
       reply(`_audio sedang diproses, silahkan tunggu beberapa saat lagi_`)
       Ryuu.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
    break
    case 'ytmp4':
        if (args.length < 1) return reply("Masukkan url youtube")
        url = args.join(' ')
        anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=${dhakey}`)
        ytmp4 = await getBuffer(anu.result.url)
        reply(`_video sedang diproses, silahkan tunggu beberapa saat lagi_`)
        Ryuu.sendMessage(from, ytmp4, video, {caption:`Done kak`, thumbnail:Buffer.alloc(0), quoted:mek})
    break
	case 'mediafire':
	if (!isPrem) return reply('Fitur Ini Hanya Bisa Di Gunakan Premium') 
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
	    if (args.length < 1) return reply('Masukkan link mediafire')
		if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
		replysticker(waitstc)
		teks = args.join(' ')
		res = await mediafireDl(teks)
		result = ` MEDIAFIRE DOWNLOAD\n\n`
        result += `Data Berhasil Didapatkan!\n\n`
        result += `📌 Nama : ${res[0].nama}\n`
        result += `✉️ Ukuran : ${res[0].size}\n`
        result += `✉️ Link : ${res[0].link}\n\n`
        result += `_Tunggu Proses Upload Media_`
		reply(result)
	    sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: troli})
		break
    case 'google': case 'googlesearch': case 'ggs':
    if (!isPrem) return reply('Fitur Ini Hanya Bisa Di Gunakan Premium') 
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (args.length < 1) return reply('Yang mau di cari apaan?')
        teks = args.join(' ')
        replysticker(waitstc)
        res = await ggs({'query' : `${teks}`})
        kant = ``
        for (let i of res) {
        kant += `*Judul* : ${i.title}\n*Link* : ${i.link}\n*Keterangan* : ${i.snippet}`
        }
        var akhir = kant.trim()
        reply(akhir)
        break
    case 'wiki':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
        teks = args.join(' ')
        res = await wikiSearch(teks).catch(e => {
        return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
        }) 
        result = `*Judul :* ${res[0].judul}\n*Wiki :* ${res[0].wiki}`
        sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
        reply(result)
        })
        break
    case 'bass': 
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
	    fs.unlinkSync(media)
		if (err) return reply('Error!')
		hah = fs.readFileSync(ran)
		Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		fs.unlinkSync(ran)
		})
	    break
	case 'slowmo': case 'slow':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
		try {
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
	    ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
		fs.unlinkSync(media)
		if (err) return reply('Error!')
		uhh = fs.readFileSync(ran)
		Ryuu.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
	    fs.unlinkSync(ran)
		})
		} catch (e) {
		reply(mess.error)
		}
		break
	case 'fast':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
	    try {
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
		fs.unlinkSync(media)
		if (err) return reply('Error!')
	    hah = fs.readFileSync(ran)
		Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		fs.unlinkSync(ran)
		})
		} catch (e) {
		reply(mess.error)
		}  
		break
	case 'robot':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
		fs.unlinkSync(media)
		if (err) return reply('Error!')
		hah = fs.readFileSync(ran)
		Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
		fs.unlinkSync(ran)
		})
		break
	case 'tiktok':
if (args.length == 0) return reply(`Link Nya Mana ?\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
replysticker(waitstc)
url = args[0]  
url = `https://api.dapuhy.xyz/api/socialmedia/ttdownloader?url=${url}&apikey=BayuUn`
get_result = await fetchJson(url)
buffer = await getBuffer(get_result.result.nowm)
Ryuu.sendMessage(from, buffer, video, {quoted: ftrol})
break
	case 'reverse':
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isQuotedVideo) return fakegroup('Reply videonya!')
        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
        ran = getRandom('.mp4')
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
        fs.unlinkSync(media)
        if (err) return fakegroup(`Err: ${err}`)
        buffer453 = fs.readFileSync(ran)
        Ryuu.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
        fs.unlinkSync(ran)
        })
        break
        
        //Send Contact Owner & Creator
        case 'owner':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        members_ids = []
        for (let mem of groupMembers) {
        members_ids.push(mem.jid)
        }
        vcard2 = 'BEGIN:VCARD\n'
        + 'VERSION:3.0\n'
        + `FN:${ownername}\n`
        + `ORG: ${ownername} ;\n`
        + `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
        + 'END:VCARD'.trim()
        Ryuu.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
        { quoted: troli, 
        })
    case 'owner2':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        members_ids = []
        for (let mem of groupMembers) {
        members_ids.push(mem.jid)
        }
        vcard2 = 'BEGIN:VCARD\n'
        + 'VERSION:3.0\n'
        + `FN:${ownernamee}\n`
        + `ORG: ${ownernamee} ;\n`
        + `TEL;type=CELL;type=VOICE;waid=${owner2}:${owner2}\n`
        + 'END:VCARD'.trim()
        Ryuu.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
        { quoted: troli, 
        })
        menu = `Itu Owner ku kak mau nanya soal apa yaa..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        but = [{buttonId: `${prefix}script`,buttonText: {displayText: `SCRIPT ️💻`,},type: 1}, {buttonId: `${prefix}listmenu`,buttonText: {displayText: `LIST MENU 💌`,},type: 1,},]
        sendButton(from, menu, teks, but, {quoted: ftrol})
        break
    case 'creator':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        members_ids = []
        for (let mem of groupMembers) {
        members_ids.push(mem.jid)
        }
        vcard2 = 'BEGIN:VCARD\n'
        + 'VERSION:3.0\n'
        + `FN: Ryuukaaa\n`
        + `ORG: RYUUKABOTZ ;\n`
        + `TEL;type=CELL;type=VOICE;waid=6283891921787:6283891921787\n`
        + 'END:VCARD'.trim()
        Ryuu.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
        { quoted: troli, 
        })
    case 'creator2':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        members_ids = []
        for (let mem of groupMembers) {
        members_ids.push(mem.jid)
        }
        vcard2 = 'BEGIN:VCARD\n'
        + 'VERSION:3.0\n'
        + `FN:Fandyy\n`
        + `ORG: Fandyyy ;\n`
        + `TEL;type=CELL;type=VOICE;waid=6285609233482:6285609233482\n`
        + 'END:VCARD'.trim()
        Ryuu.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
        { quoted: troli, 
        })
        menu = `Itu Creator ku kak mau nanya soal apa yaa..`
        teks =`𝐑𝐲𝐮𝐁𝐨𝐭𝐳 | 𝐂𝐫𝐞𝐚𝐭𝐞 𝐁𝐲 𝐑𝐲𝐮𝐮𝐤𝐚 𝐁𝐨𝐭𝐳`
        but = [{buttonId: `${prefix}script`,buttonText: {displayText: `SCRIPT ️💻`,},type: 1}, {buttonId: `${prefix}listmenu`,buttonText: {displayText: `LIST MENU 💌`,},type: 1,},]
        sendButton(from, menu, teks, but, {quoted: ftrol})
        break
    
    //Fitur Owner
    case 'bc':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isOwner && !mek.key.fromMe) return  replysticker(ownerstc)
        if (args.length < 1) return reply('teks?')
        anu100 = await Ryuu.chats.all()
        if (isMedia && !Ryuu.message.videoMessage || isQuotedImage) {
        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ryuu).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ryuu
        bc100 = await Ryuu.downloadMediaMessage(encmedia)
        for (let _ of anu100) {
        Ryuu.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
        }
        fakestatus('Suksess broadcast')
        } else {
        for (let _ of anu100) {
        Ryuu.sendMessage(_.jid, 
		{"contentText": `*「 𝐏𝐄𝐒𝐀𝐍 𝐒𝐈𝐀𝐑𝐀𝐍 𝐁𝐎𝐓 」*\n\n${body.slice(4)}`,
		"footerText": `${tampilTanggal}`, 
		"buttons": [
		{"buttonId": `${prefix}menu`,
		"buttonText": {"displayText": "𝐌𝐄𝐍𝐔 💌"
		},"type": "RESPONSE"}
		], "headerType": 'LOCATION',
		locationMessage: { degreesLatitude: '',
		degreesLongitude: '',
		jpegThumbnail: fakeimage,
	    }}, MessageType.buttonsMessage )
        }
        fakestatus('Suksess broadcast')
        }
        break
    case 'delete': case 'del': case 'd':
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (!isOwner && !mek.key.fromMe) return  replysticker(ownerstc)
        if (!isQuotedReply) return reply(`Reply pesan dari bot!!`)
        Ryuu.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: mek })
        break
    case 'setnamabot':{
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
		if (!isOwner && !mek.key.fromMe) return replysticker(ownerstc)
		if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} RyuuSih`)
		Ryuu.updateProfileName(q)
		.then((res) => reply('Sukses Lord'))
		.catch((err) => reply('Eror Lord'))
	    }
		break
	case 'setbiobot':{
		if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
		if (!isOwner && !mek.key.fromMe) return replysticker(ownerstc)
		if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} RyuuSih`)
		Ryuu.setStatus(q)
		.then((res) => reply('Sukses Lord'))
		.catch((err) => reply('Eror Lord'))
		}
		break

    //Group Menu
    case 'welcome':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (args.length < 1) return fakestatus(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
        if ((args[0]) === 'on') {
        if (isWelkom) return fakestatus('*welcome sudah aktif !!*')
        _welkom.push(from)
        fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
        fakestatus(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
        } else if ((args[0]) === 'off') {
        if (!isWelkom) return fakestatus('*welcome sudah off sebelumnya !!*')
        _welkom.splice(from, 1)
        fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
        fakestatus(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
        } else {
        fakestatus('*on untuk mengaktifkan, off untuk menonaktifkan*')
        }
        break
    case 'antilink':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return replysticker(adminstc) 
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (!q) return fakestatus(`Pilih on atau off`)
        if (args[0].toLowerCase() === 'on'){
        if (isAntiLink) return fakestatus(`Udah aktif`)
        _antilink.push(from)
        fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
        fakestatus(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
        } else if (args[0].toLowerCase() === 'off'){
        let anu = _antilink.indexOf(from)
        _antilink.splice(anu, 1)
        fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
        fakestatus(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
        } else {
        fakestatus(`_Pilih on atau off_`)
        }
        break
    case 'antivirtex':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (!q) return fakestatus(`Pilih on atau off`)
        if (args[0].toLowerCase() === 'on'){
        if (isAntiVirtex) return fakestatus(`Udah aktif`)
        _antivirtex.push(from)
        fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
        fakestatus(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
        } else if (args[0].toLowerCase() === 'off'){
        let anu = _antivirtex.indexOf(from)
        _antivirtex.splice(anu, 1)
        fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
        fakestatus(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
        } else {
        fakestatus(`_Pilih on atau off_`)
        }
        break
    case 'group': case 'grup':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (args[0] === 'buka') {
        fakestatus(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
        Ryuu.groupSettingChange(from, GroupSettingChange.messageSend, false)
        } else if (args[0] === 'tutup') {
        fakestatus(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
        Ryuu.groupSettingChange(from, GroupSettingChange.messageSend, true)
        }
        break
    case 'linkgroup': case 'linkgrup': case 'linkgc':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        linkgc = await Ryuu.groupInviteCode(from)
        yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
        Ryuu.sendMessage(from, yeh, text, { quoted: ftrol })
        break
    case 'promote' :
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakestatus('Tag target yang ingin di jadi admin!')
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
        if (mentioned.length > 1) {
        teks = 'Perintah di terima, anda menjdi admin :\n'
        for (let _ of mentioned) {
        teks += `@${_.split('@')[0]}\n`
        }
        mentions(teks, mentioned, true)
        Ryuu.groupMakeAdmin(from, mentioned)
        } else {
        mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
        Ryuu.groupMakeAdmin(from, mentioned)
        }
        break
    case 'demote' :
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakestatus('Tag target yang ingin di tidak jadi admin!')
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
        if (mentioned.length > 1) {
        teks = 'Perintah di terima, anda tidak menjadi admin :\n'
        for (let _ of mentioned) {
        teks += `@${_.split('@')[0]}\n`
        }
        mentions(teks, mentioned, true)
        Ryuu.groupDemoteAdmin(from, mentioned)
        } else {
        mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
        Ryuu.groupDemoteAdmin(from, mentioned)
        }
        break
    case 'add':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (args.length < 1) return reply('Yang mau di add jin ya?')
        if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
        try {
        num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
        Ryuu.groupAdd(from, [num])
        } catch (e) {
        console.log('Error :', e)
        reply('Gagal menambahkan target, mungkin karena di private')
        }
        break
    case 'kick':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
		if (!isGroup) return reply(`Khusus Grup Ngab 😏`)
		if (!isGroupAdmins && !mek.key.fromMe) return reply(`Lu Admin? 🤨`)
		if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
		if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
		var kickya = q.split('@')[1] + '@s.whatsapp.net'
		await Ryuu.groupRemove(from, [kickya])
		reply(`Succses`)
	    break
    case 'tagall':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins) return fakestatus(mess.only.admin)
        members_id = []
        teks = (args.length > 1) ? args.join(' ').trim() : ''
        teks += '\n\n'
        for (let mem of groupMembers) {
        teks += `• @${mem.jid.split('@')[0]}\n`
        members_id.push(mem.jid)
        }
        mentions(teks, members_id, true)
        break
    case 'setname':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        Ryuu.groupUpdateSubject(from, `${body.slice(9)}`)
        Ryuu.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
        break
    case 'setdesc':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        Ryuu.groupUpdateDescription(from, `${body.slice(9)}`)
        Ryuu.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
        break
    case 'setppgrup': case 'setpp':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (isQuotedImage) {
        let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
        let media = await Ryuu.downloadMediaMessage(encmedia)
        Ryuu.updateProfilePicture(from, media)
        .then((res) => fakestatus(jsonformat(res)))
        .catch((err) => fakestatus(jsonformat(err)))
        } else {
        fakestatus(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
        }
        break
    case 'hidetag':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return fakestatus(mess.only.admin)
        try {
        quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
        hideTag(from, `${quotedText}`)
        } catch {
        hideTag(from, `${q}`)
        }
        break
    case 'infogc': case 'infogrup': case 'infogrouup': case 'grupinfo': case 'groupinfo':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        try {
        var pic = await Ryuu.getProfilePicture(from)
        } catch {
        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }
        let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
        Ryuu.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
        break
    case 'resetlinkgc': case 'resetlinkgroup': case 'resetlinkgrup': case 'revoke': case 'resetlink':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        json = ['action', 'inviteReset', from]
       Ryuu.query({json, expect200: true})
       fakestatus('Sukses Mereset Link Group')
       break
    case 'online': case 'listonline': case 'here':  
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})
        if (!isGroup) return replysticker(groupstc)
        try {
        let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
        let online = [...Object.keys(Ryuu.chats.get(ido).presences), Ryuu.user.jid]
        Ryuu.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
        } catch (e) {
        fakestatus(`${e}`)
        }
        break
    
    //War Menu
    case 'virtex1':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (!mek.key.fromMe && !isOwner) return replysticker(ownerstc)
        katalog(`${virtex2(prefix)}`)
        break
    case 'virtex2':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (!mek.key.fromMe && !isOwner) return replysticker(ownerstc)
        katalog(`${virtex3(prefix)}`)
        break
    case 'virtes3':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli})          
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (!mek.key.fromMe && !isOwner) return replysticker(ownerstc)
        katalog(`${virtex4(prefix)}`)
        break
    case 'virtex4':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (!mek.key.fromMe && !isOwner) return replysticker(ownerstc)
        katalog(`${virtex5(prefix)}`)
        break
    case 'virtex5':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (!mek.key.fromMe && !isOwner) return replysticker(ownerstc)
        katalog(`${virtex6(prefix)}`)
        break
    case 'virtex6':
         if (isBanned) return reply('Kamu Sudah Di banned!')
         if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
         if (!isGroup) return replysticker(groupstc)
         if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
         if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
         if (!mek.key.fromMe && !isOwner) return replysticker(ownerstc)
         katalog(`${virtex7(prefix)}`)
         break
    case 'virtex7':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (!mek.key.fromMe && !isOwner) return replysticker(ownerstc)
        katalog(`${virtex8(prefix)}`)
        break
    case 'virtex8':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (!mek.key.fromMe && !isOwner) return replysticker(ownerstc)
        katalog(`${virtex9(prefix)}`)
        break
    case 'virtag':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (!mek.key.fromMe && !isOwner) return replysticker(ownerstc)
        katalog(`${virtag(prefix)}`)
        break
    case 'emoji':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (!mek.key.fromMe && !isOwner) return replysticker(ownerstc)
        katalog(`${emoji2(prefix)}`)
        break
    case 'ngazab':
        if (isBanned) return reply('Kamu Sudah Di banned!')
        if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: troli}) 
        if (!isGroup) return replysticker(groupstc)
        if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
        if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
        if (!mek.key.fromMe && !isOwner) return replysticker(ownerstc)
        katalog(`${ngazap(prefix)}`)
        break

//Jangan Dihapus
default:
    // Verify
    if (body.startsWith(`${prefix}${command}`)) {
    fakestatus(`Hai Kak ${pushname},  Command ${prefix}${command} Tidak Ada Di Dalam ${prefix}menu ${botname}`)
    }
    if(budy.includes("@verif", "@verify","daftar")){
    if (isUser) return reply('Kamu sudah terdaftar di dalam database')
    addRegisterUser(sender, pushname, bio_user)
    fs.writeFileSync('./database/user.json', JSON.stringify(_user))
    teks = `*Success Verification 🎉*\n\n${a}📛 Nama  : ${pushname}\n#️⃣ Nomor : @${sender.split('@')[0]}\n💌 Bio   : ${bio_user}${a}\n\n*Verification Di Database ${botname}*`
    footeregis = `Terima Kasih Telah Mendaftar 🤗\n© ${botname} By ${ownername}`
    butregis = [
    { buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 💌' }, type: 1 }
     ]
    sendButLocation(from, teks, footeregis, fakeRyuu, butregis, {contextInfo: { mentionedJid: [sender]
    }
    })
    }
    
    //TTT
    if (isTTT && isPlayer2){
    if (budy.startsWith('Y')){
    tto = ky_ttt.filter(ghg => ghg.id.includes(from))
    tty = tto[0]
    angka = tto[0].angka
    ucapan = 
`🎳 𝐆𝐀𝐌𝐄 𝐓𝐈𝐂𝐓𝐀𝐂𝐓𝐎𝐄 🎲

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}`
Ryuu.sendMessage(from, ucapan, text, {quoted: ftrol, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (budy.startsWith('N')){
 tto = ky_ttt.filter(ghg => ghg.id.includes(from))
 tty = tto[0]
 naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
 ky_ttt = naa
 Ryuu.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
  }
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
  s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`🎳𝐑𝐄𝐒𝐔𝐋𝐓 𝐆𝐀𝐌𝐄 𝐓𝐈𝐂𝐓𝐀𝐂𝐓𝐎𝐄🎲

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `🎳𝐑𝐄𝐒𝐔𝐋𝐓 ??𝐀𝐌𝐄 𝐓𝐈𝐂𝐓𝐀𝐂𝐓𝐎𝐄🎲

*Hasil Akhir:*

${ttt}`
Ryuu.sendMessage(from, ucapan1, text, {quoted: ftrol, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

 if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `🎳 𝐑𝐄𝐒𝐔𝐋𝐓 𝐆𝐀𝐌𝐄 𝐓𝐈𝐂𝐓𝐀𝐂𝐓𝐎𝐄🎲

*_Permainan Seri 😁👌_*`
ucapan2 = `🎳 𝐑𝐄𝐒𝐔𝐋𝐓 𝐆𝐀𝐌𝐄 𝐓𝐈𝐂𝐓𝐀𝐂𝐓𝐎𝐄🎲

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
  }
ucapan = `🎳 𝐆𝐀𝐌𝐄 𝐓𝐈𝐂𝐓𝐀𝐂𝐓𝐎𝐄 🎲

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
Ryuu.sendMessage(from, ucapan, text, {quoted: ftrol, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `🎳 𝐑𝐄𝐒𝐔𝐋𝐓 𝐆𝐀𝐌𝐄 𝐓𝐈𝐂𝐓𝐀𝐂𝐓𝐎𝐄🎲

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `🎳 𝐆𝐀𝐌𝐄 𝐓𝐈𝐂𝐓𝐀𝐂𝐓𝐎𝐄 🎲

*Hasil Akhir:*

${ttt}`
Ryuu.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `🎳 𝐑𝐄𝐒𝐔𝐋𝐓 𝐆𝐀𝐌𝐄 𝐓𝐈𝐂𝐓𝐀𝐂𝐓𝐎𝐄🎲

 *_Permainan Seri🗿👌*`
 ucapan2 = `🎳 𝐑𝐄𝐒𝐔𝐋𝐓 𝐆𝐀𝐌𝐄 𝐓𝐈𝐂𝐓𝐀𝐂𝐓𝐎𝐄🎲

 *Hasil Akhir:*

 ${ttt}`
 reply(ucapan1)
 naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
 return ky_ttt = naa
  }
ucapan = `🎳 𝐆𝐀𝐌𝐄 𝐓𝐈𝐂𝐓𝐀𝐂𝐓𝐎𝐄 🎲

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎

Giliran = @${tty.player1.split('@')[0]}

${ttt}`
Ryuu.sendMessage(from, ucapan, text, {quoted: ftrol, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
    
    //Eval
    if (budy.startsWith('>')){
    try {
    if (!isOwner) return reply(`${a}Mau Ngapain Banh? Mau Eval Ya? Khusus Owner${a} *${BotName}*`)
    return Ryuu.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
    } catch(err) {
    e = String(err)
    reply(e)
    }
    }  
    if (budy.startsWith('$')){
    if (!isOwner) return reply(`${a}Mau Ngapain Banh? Mau Eval Ya? Khusus Owner${a} *${BotName}*`)
    qur = budy.slice(2)
    exec(qur, (err, stdout) => {
    if (err) return reply(`Ryuuka :~ ${err}`)
    if (stdout) {
    reply(stdout)
    }
    })
    }
    if (budy.startsWith('=>')){
    if (!isOwner) return reply(`${a}Mau Ngapain Banh? Mau Eval Ya? Khusus Owner${a} *${BotName}*`)
    var konsol = budy.slice(3)
    Return = (sul) => {
    var sat = JSON.stringify(sul, null, 2)
    bang = util.format(sat)
    if (sat == undefined){
    bang = util.format(sul)
    }
    return reply(bang)
    }
    try {
    reply(util.format(eval(`;(async () => { ${konsol} })()`)))
    console.log('\x1b[1;31m~\x1b[1;37m>', '[', '\x1b[1;32m EXC \x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
    } catch(e){
    reply(String(e))
    }
    }
    }
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
    }
	}
    }


	
    
