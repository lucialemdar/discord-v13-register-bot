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
  .setImage("412a31fad9d10f0fc51ad4e6a33f487e.jpg")
  .setColor('BLUE')
  .setThumbnail(client.user.avatarURL())
  message.channel.send({embeds: [embed], components:[row]})

};

exports.name = "yardım";
