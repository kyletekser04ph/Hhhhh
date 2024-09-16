const Prefixes = [
  '.help',
];

module.exports = {
	config: {
			name: "help",
			version: "1.0",
			author: "kylepogi",
			countDown: 5,
			role: 0,
			shortDescription: "view commands",
			longDescription: "view command list of the bot",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "help") return message.reply("┏━━━━━━━━━━━━━━━━┓\n𓃵 𝗭𝗲𝗽𝗵𝘆𝗿𝘂𝘀 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗟𝗶𝘀𝘁\n┗━━━━━━━━━━━━━━━━┛\n╔╾⧽⧽ 𝗞𝗬𝗟𝗘'𝗦 𝗕𝗢𝗧 ⧼⧼\n╠❃➤ 𝗮𝗹𝗹 𝗰𝗺𝗱𝘀 𝗽𝗿𝗲𝗳𝗶𝘅 𝗶𝘀『 . 』\n║\n╚╾➤『1.』 ai \n╚╾➤『2.』 remini\n╚╾➤『3.』 uid\n╚╾➤『4.』 checkgc(admin only)\n╚╾➤『5.』 alldl\n╚╾➤『6.』 antiout\n╚╾➤『7.』 acp(accept friend req)\n╚╾➤『8.』 config(admin only) \n╚╾➤『9.』 confess\n╚╾➤『10.』 guessnumber\n╚╾➤『11.』 coinflip\n╚╾➤『12.』 ttt\n╚╾➤『13.』 pair\n╚╾➤『14.』 ngl(spamming message)\n╚╾➤『15.』 superadmin(admin only) \n╚╾➤『16.』 sing\n╚╾➤『17.』 sim(talking bot)\n╚╾➤『18.』 claire(AI version) \n╚╾➤『19.』 gmage\n╚╾➤『20.』 rizz\n╚╾➤『21.』 emojimix\n╚╾➤『22.』 poli(generate image from ai)\n║\n╠ℹ️use prefix to execute the command ex: .confess\n║\n╠◈➤ 𝘤𝘰𝘱𝘺𝘳𝘪𝘨𝘩𝘵 © 𝘣𝘺 𝗞𝘆𝗹𝗲𝗽𝗼𝗴𝗶 20204-2025 𝘈𝘭𝘭 𝘳𝘪𝘨𝘩𝘵𝘴 𝘳𝘦𝘴𝘦𝘳𝘷𝘦𝘥\n╠𝘰𝘳𝘪𝘨 𝘴𝘳𝘤 (𝙉𝙏𝙆𝙃𝘼𝙉𝙂𝟬𝟯)\n╚════════❃");
}
};
