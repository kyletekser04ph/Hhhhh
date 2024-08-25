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
	if (event.body && event.body.toLowerCase() == "help") return message.reply("🦩𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁 𝗼𝗳 𝘁𝗵𝗶𝘀 𝗯𝗼𝘁:\n\n🎀1. ai \n🎀2. remini\n🎀3. uid\n🎀4. checkgc(admin only)\n🎀5. alldl\n🎀6. antiout\n🎀7. acp(accept friend req)\n🎀8. config(admin only) \n🎀9. confess\n🎀10. guessnumber\n🎀11. coinflip\n🎀12. ttt\n🎀13. pair\n🎀14. ngl(spamming message)\n🎀15. superadmin(admin only) \n🎀16. sing\n🎀17. sim(talking bot)\n🎀18. claire(AI version) \n🎀19. gmage\n🎀20. rizz\n🎀21. emojimix\n🎀22. poli(generate image from ai)\n\nuse prefix to execute the command ex: *confess\n╰┈➤ This bot made by:  https://www.facebook.com/kyledev03");
}
};
