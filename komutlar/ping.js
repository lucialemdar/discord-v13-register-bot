const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const prefix = process.env.PREFIX;
exports.run = async (client, message, args) => {
  
  const yt = new MessageButton().setLabel('Lucia Youtube').setStyle('LINK').setURL('http://youtube.com/@lucialemdar');
  const dc = new MessageButton().setLabel('Lucia Discord').setStyle('LINK').setURL('https://discord.gg/czXgaRZNmB');
  const row = new MessageActionRow().addComponents(dc, yt)
  const embed = new MessageEmbed()
  .setTitle(`Frozan | Kayıt Botu`)
  .addField(`> Pingim`,`${client.ws.ping}ms`,false)
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setColor('BLUE')
  .setThumbnail(client.user.avatarURL())
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "ping";
