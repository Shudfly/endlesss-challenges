const Discord = require("discord.js");

const express = require("express");

const client = new Discord.Client();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

const prefix = "^";

const channelResponses = [
  "oh no, it appears you’re at it again",
  "***you're in the wrong fucking channel***",
  "I am ***very*** disappointed in you"
];

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("PB & J is online!");
  client.user
    .setActivity("for ^help", { type: "WATCHING" })
    .then((presence) =>
      console.log(`Activity set to ${presence.activities[0].name}`)
    )
    .catch(console.error);
  client.channels.cache
    .get("763870100700004362")
    .send(
      "Hello all!  I am back online!\n```Update Log:\n - ^channel command updated.\n - help command updated (you can now use ^help about).\n - Don't forget to try ^help!```"
    );
});

client.on("message", (message) => {
  if (message.author.bot) return;

  function send(text) {
    message.channel.send(text);
  }

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  function runCommand(command) {
    client.commands.get(command).execute(message, args);
  }

  switch (command) {
    case "challenge":
      runCommand("challenge");
      break;
    case "about":
      runCommand("about");
      break;
    case "channel":
      send(channelResponses[Math.floor(Math.random() * channelResponses.length)]);
      break;
    case "help":
      runCommand("help");
      break;
    default:
      send(
        "**That isn't a command.**\nTry \`^help\`!.\n\n*While I've got you here though, maybe you can make a few suggestions?*\n
        DM me here: <@!657424536740036608> (spoopy turtle#5286)\nIf that doesn't work, DM Firephly, ig"
      );
  }
});

client.login(process.env.DJS_TOKEN);
