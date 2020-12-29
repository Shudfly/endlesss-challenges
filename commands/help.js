module.exports = {
  name: "help",
  description: "This command displays a help embed",
  execute(message, args) {
    const Discord = require("discord.js");

    message.delete();

    function send(text) {
      message.channel.send(text);
    }

    function sendEmbed(embed) {
      message.author.send(embed);
    }

    const helpEmbed = new Discord.MessageEmbed()
      .setTitle("PB & J")
      .setDescription(
        "*Notice:  I am currently adding all sorts of functionality to this bot, so there may be times when it is offline.*"
      )
      .setColor("#9900ff")
      .addFields(
        { name: "\u200b", value: "^about" },
        { name: "\u200b", value: "^challenge" },
        { name: "\u200b", value: "^channel" },
        {
          name:
            "To get more information about a command, use `^help <command>` (Now Semi-Functional)",
          value: "*Example: `^help about`*\n*Command **must** be lowercase*",
        },
        { name: "\u200b", value: "\u200b" },
        {
          name:
            "I also respond to some words or phrases. (still working on this)",
          value: "\u200b",
        }
      )
      .setFooter(
        "Suggestions?  DM me at @spoopy turtle#5286\nIf that doesn't work, DM Firephly, ig"
      );

    const aboutEmbed = new Discord.MessageEmbed()
      .setTitle("PB & J")
      .setDescription(
        "*Notice:  I am currently adding all sorts of functionality to this bot, so there may be times when it is offline.*"
      )
      .setColor("#99ff00")
      .addFields(
        { name: "Command:", value: "^about" },
        {
          name: "Anyone can use this command.",
          value: "\u200b",
        },
        { name: "^about", value: "The command itself", inline: true },
        {
          name: "<none>",
          value: "There are no other arguments required.",
          inline: true,
        }
      )
      .setFooter(
        "Suggestions?  DM me at @spoopy turtle#5286\nIf that doesn't work, DM Firephly, ig"
      );

    if (args.length > 1) {
      send("**Please specify one command only.**");
      return;
    } else if (args.length == 1) {
      send(`Sent you info about ^${args[0]}, <@!${message.author.id}>!`);
      switch (args[0]) {
        case "about":
          send(aboutEmbed);
          break;
        default:
          send(`**\`^${args[0]}\` is not a command!**`);
          break;
      }
    } else if (args.length == 0) {
      send(`Sent you a little list of commands, <@!${message.author.id}>!`);
      sendEmbed(helpEmbed);
    }
  },
};
