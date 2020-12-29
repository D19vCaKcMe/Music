const { MessageEmbed } = require("discord.js")

module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(text)
    .setFooter("")
    await channel.send(embed)
}
