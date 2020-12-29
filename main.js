const Discord = require("discord.js");

const express = require("express");

const client = new Discord.Client();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

const prefix = "^";

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
  console.log("EC is online!");
  client.user
    .setActivity("for ^challenge", { type: "WATCHING" })
    .then((presence) =>
      console.log(`Activity set to ${presence.activities[0].name}`)
    )
    .catch(console.error);
  client.channels.cache
    .get("763870100700004362")
    .send(
      "Hello all!  I am back online!\n**Plus, I now have a `^help` command! (sort of)**"
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
      send("still working on this... sorry!");
      break;
    case "help":
      runCommand("help");
      break;
    default:
      send(
        "**That isn't a command.**\nCurrently, I can only run `^challenge`.\n\n*While I've got you here though, maybe you can make a few suggestions?*\nDM me here: <@!657424536740036608> (spoopy turtle#5286)"
      );
  }
});

client.login(process.env.DJS_TOKEN);
