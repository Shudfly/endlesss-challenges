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
          "*Notice:  I am currently adding all sorts of functionality to this bot, so there may be times when it is offline.*"
        )
        .setColor("#9900ff")
        .addFields(
          { name: "\u200b", value: "^about" },
          { name: "\u200b", value: "^challenge" },
          { name: "\u200b", value: "^channel" },
          {
            name:
              "To get more information about a command, use `^help <command>` (Not Yet Available)",
            value: "*Example: \`^help about\`*\n*Command **must** be lowercase*",
          },
          { name: "\u200b", value: "\u200b" },
          {
            name: "I also respond to some words or phrases. (still working on this)",
            value: "\u200b",
          }
        )
        .setFooter("Suggestions?  DM me at @spoopy turtle#5286");
  
      const spamEmbed = new Discord.MessageEmbed()
        .setTitle("Pickle")
        .setDescription(
          "*Notice:  I am currently cleaning up the code of this bot, so there may be times when Pickle is offline.*"
        )
        .setColor("#99ff00")
        .addFields(
          { name: "Command:", value: "^spam" },
          {
            name: "You must have special permissions to use this command.",
            value: "\u200b",
          },
          { name: "^spam", value: "The command itself", inline: true },
          {
            name: "<text here>",
            value:
              "The message to be spammed.\n*All numbers must be spelled out*",
            inline: true,
          },
          {
            name: "<number here>",
            value:
              "The amount of messages to be sent.\n*ANYTHING AFTER THIS NUMBER WILL BE IGNORED*",
          }
        )
        .setFooter("Suggestions?  DM me at @spoopy turtle#5286");
  
      if (args.length > 1) {
        send("**Please specify one command only.**");
        return;
      } else if (args.length == 0) {
        send(`Sent you a little list of commands, <@!${message.author.id}>!`)
        sendEmbed(helpEmbed);
        return;
      }
      switch (args[0]) {
        default:
          send(`**'${args[0]}' is not a command!**`);
      }
    },
  };