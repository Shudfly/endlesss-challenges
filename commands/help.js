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
      .setTitle("Endlesss Challenges")
      .setDescription(
        "*Notice:  I am currently adding all sorts of functionality to this bot,\nso there may be times when it is offline.*"
      )
      .setColor("#9900ff")
      .addFields(
        { name: "\u200b", value: "^about" },
        { name: "\u200b", value: "^challenge" },
        { name: "\u200b", value: "^channel" },
        { name: "\u200b", value: "^say" },
        {
          name:
            "To get more information about a command, use `^help <command>` (Now Functional!)",
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
      .setTitle("Endlesss Challenges")
      .setDescription(
        "*Notice:  I am currently adding all sorts of functionality to this bot,\nso there may be times when it is offline.*"
      )
      .setColor("#9900ff")
      .addFields(
        { name: "Command:", value: "^about", inline: true },
        {
          name: "Purpose:",
          value: "Provides info about the bot",
          inline: true,
        },
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

    const challengeEmbed = new Discord.MessageEmbed()
      .setTitle("Endlesss Challenges")
      .setDescription(
        "*Notice:  I am currently adding all sorts of functionality to this bot,\nso there may be times when it is offline.*"
      )
      .setColor("#9900ff")
      .addFields(
        { name: "Command:", value: "^challenge", inline: true },
        {
          name: "Purpose:",
          value: "Provides a challenge for the user to complete in a jam.",
          inline: true,
        },
        {
          name: "Anyone can use this command.",
          value: "\u200b",
        },
        { name: "^challenge", value: "The command itself", inline: true },
        {
          name: "<none>",
          value: "There are no other arguments required.",
          inline: true,
        }
      )
      .setFooter(
        "Suggestions?  DM me at @spoopy turtle#5286\nIf that doesn't work, DM Firephly, ig"
      );

    const channelEmbed = new Discord.MessageEmbed()
      .setTitle("Endlesss Challenges")
      .setDescription(
        "*Notice:  I am currently adding all sorts of functionality to this bot,\nso there may be times when it is offline.*"
      )
      .setColor("#9900ff")
      .addFields(
        { name: "Command:", value: "^channel", inline: true },
        { name: "Purpose:", value: "Uh...", inline: true },
        {
          name: "Anyone can use this command.",
          value: "\u200b",
        },
        { name: "^channel", value: "The command itself", inline: true },
        {
          name: "<none>",
          value: "There are no other arguments required.",
          inline: true,
        }
      )
      .setFooter(
        "Suggestions?  DM me at @spoopy turtle#5286\nIf that doesn't work, DM Firephly, ig"
      );

    const sayEmbed = new Discord.MessageEmbed()
      .setTitle("Endlesss Challenges")
      .setDescription(
        "*Notice:  I am currently adding all sorts of functionality to this bot,\nso there may be times when it is offline.*"
      )
      .setColor("#9900ff")
      .addFields(
        { name: "Command:", value: "^say", inline: true },
        { name: "Purpose:", value: "Repeats the given input.", inline: true },
        {
          name: "Anyone can use this command.",
          value: "\u200b",
        },
        { name: "^say", value: "The command itself", inline: true },
        {
          name: "<anything>",
          value: "The bot will repeat this.",
          inline: true,
        }
      )
      .setFooter(
        "Suggestions?  DM me at @spoopy turtle#5286\nIf that doesn't work, DM Firephly, ig"
      );

    const prefixEmbed = new Discord.MessageEmbed()
      .setTitle("Endlesss Challenges")
      .setDescription(
        "*Notice:  I am currently adding all sorts of functionality to this bot,\nso there may be times when it is offline.*"
      )
      .setColor("#9900ff")
      .addFields(
        { name: "Command:", value: "^prefix", inline: true },
        {
          name: "Purpose:",
          value: "Sets the prefix to the given input.",
          inline: true,
        },
        {
          name:
            "Only members with the Manage Server permission can use this command.",
          value: "\u200b",
        },
        { name: "^prefix", value: "The command itself", inline: true },
        {
          name: "<prefix>",
          value: "The bot's prefix will be set to this.",
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
      send(`Sent you info about \`^${args[0]}\`, <@!${message.author.id}>!`);
      switch (args[0]) {
        case "about":
          sendEmbed(aboutEmbed);
          break;
        case "challenge":
          sendEmbed(challengeEmbed);
          break;
        case "channel":
          sendEmbed(channelEmbed);
          break;
        case "say":
          sendEmbed(sayEmbed);
          break;
        case "prefix":
          sendEmbed(prefixEmbed);
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
