module.exports = {
  name: "about",
  description: "This command displays an embed displaying general bot info.",
  execute(message, args) {
    const Discord = require("discord.js");

    message.delete();

    function send(text) {
      message.channel.send(text);
    }

    function sendEmbed(embed) {
      message.author.send(embed);
    }

    const aboutEmbed = new Discord.MessageEmbed()
      .setTitle("PB & J")
      .setDescription(
        "*Notice:  I am currently adding all sorts of functionality to this bot, so there may be times when it is offline.*"
      )
      .setColor("#9900ff")
      .addFields(
        { name: "Name:", value: "PB & J", inline: true },
        {
          name: "Creator:",
          value: "Shudfly (aka spoopy turtle)",
          inline: true,
        },
        { name: "Version:", value: "1.3", inline: true },
        { name: "Awesomeness Level:", value: "Moderate", inline: true }
      )
      .setFooter("Suggestions?  DM me at @spoopy turtle#5286\nIf that doesn't work, DM Firephly, ig");

    send(`Sent you a little info page, <@!${message.author.id}>!`);
    sendEmbed(aboutEmbed);
    return;
  },
};
