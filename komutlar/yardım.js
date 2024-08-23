const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const config = require('../config');
const prefix = config.prefix;
exports.run = async (client, message, args) => {
  
  const yt = new MessageButton().setLabel('Sunucu Kurallarımız').setStyle('LINK').setURL('https://discord.com/channels/1276477231572713513');
  const dc = new MessageButton().setLabel('Frozan Discord').setStyle('LINK').setURL('https://discord.gg/czXgaRZNmB');
  const destek = new MessageButton().setLabel('Destek').setStyle('LINK').setURL('https://discord.gg/czXgaRZNmB');
  const row = new MessageActionRow().addComponents(dc, yt, destek)
  const embed = new MessageEmbed()
  .setTitle(`Frozan Kayıt Botu`)
  .addField(`${prefix}kayıt`,`Kullanıcıları kayıt eder.`,false)
  .addField(`${prefix}yetkili-rol ayarla/sıfırla`,`kayıt yetkili rolü ayarlar/sıfırlar.`,false)
  .addField(`${prefix}kayıt-rol ayarla/sıfırla`,`kayıt edilince verilecek rolü ayarlar/sıfırlar.`,false)
  .addField(`${prefix}kayıtsız-rol ayarla/sıfırla`,`kayıtsız rolünü ayarlar/sıfırlar.`,false)
  .addField(`${prefix}kayıt-kanal ayarla/sıfırla`,`kaydın yapılacağı kanalı ayarlar/sıfırlar.`,false)
  .addField(`${prefix}kayıt-log ayarla/sıfırla`,`logların gideceği kanalı ayarlar/sıfırlar.`,false)
  .addField(`${prefix}jail-rol ayarla/sıfırla`,`jail rolünü ayarlar/sıfırlar.`,false)
  .addField(`${prefix}jail al`,`jail rolünü alır.`,false)
  .addField(`${prefix}ping`,`Botun pingini gösterir.`,false)
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setImage("https://media.discordapp.net/attachments/1262019500975460362/1262020076551540747/1673446067652-1.gif?ex=66c9cf49&is=66c87dc9&hm=7df501ed65b87a49b98840a530c08778f51890e56bd7a9a4d3b65535f1f6d7dd&=")
  .setColor('BLUE')
  .setThumbnail(client.user.avatarURL())
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "yardım";
