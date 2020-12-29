const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "nJnxasN213nAsdnNxjaWiaMxnjDnasdCNajirAqnejqncjasdNcjasdDaS2349z90zkmsadkmasdKAsd",
    description: "To show the music which is currently playing in this server",
    usage: "",
    aliases: ["nJnxasN213nAsdnNxjaWiaMxnjDnasdCNajirAqnejqncjasdNcjasdDaS2349z90zkmsadkmasdKAsdasdmasdnjasfiasDAansjdAScaksxa"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("Now Playing", "https://media.discordapp.net/attachments/788426369880293381/791925104559783966/-1_1_____.gif")
      .setThumbnail()
      .setColor("RANDOM")
      .addField("Name", song.title, true)
      .setFooter(`Views: ${song.views} | ${song.ago}`)
    return message.channel.send(thing)
  },
};
