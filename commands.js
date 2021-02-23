
module.exports = async function (msg) {
    const Discord = require('discord.js');
    const replies = [
        'hello world',
        'hello mortal',
        'hello dude'
    ];

    let tokens = msg.content.split(' ');
    const fetch = require('node-fetch');
    console.log(msg.content);

        if(msg.content === '!info') {
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('What do i do?')
	.setURL('https://rudolf.netlify.app/')
    .setThumbnail('https://miro.medium.com/max/1033/1*MAsNORFL89roPfIFMBnA4A.jpeg')
	.setAuthor('Frede Rudolf', 'https://static.wikia.nocookie.net/disneyprincess/images/5/50/Tarzan.jpg/revision/latest?cb=20180526223057', 'https://rudolf.netlify.app/')
	.setDescription('im a bot, but developer is kinda dumb so i cant do much.')
	.addFields(
		{ name: 'Commands', value: 'All commands start with an "!" ' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '!hello bot', value: 'then he will say hello back', inline: true },
		{ name: '!gif ________', value: '!gif then the topic of gif you want', inline: true },
        { name: '!info', value: 'spawns an embed in the chat with help with the commands', inline: true },
	)
	.setTimestamp()
	.setFooter('Some footer text here', 'https://static.wikia.nocookie.net/disneyprincess/images/5/50/Tarzan.jpg/revision/latest?cb=20180526223057');

    msg.channel.send(exampleEmbed);
    console.log(exampleEmbed);
}
        
    
    if (msg.content === '!hello bot') {
       // const index = Math.floor(Math.random() * replies.length);
       // msg.reply(replies[index]);
       msg.channel.send(replies[Math.floor(Math.random() * replies.length)])
       let url = `https://g.tenor.com/v1/search?q=hellod&key=V7QWOVDXTQJL&ContentFilter=off`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json.results[0].url);
        msg.channel.send(json.results[index].url);

    } else if (tokens[0] === '!gif') {
        msg.channel.send('gif!');
        let keywords = 'cute kitten';
        if (tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join(' ');
        }
        let url = `https://g.tenor.com/v1/search?q=${keywords}d&key=V7QWOVDXTQJL&ContentFilter=off`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json.results[0].url);
        msg.channel.send(json.results[index].url);

    }

}
