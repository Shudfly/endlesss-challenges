const Discord = require("discord.js");

const client = new Discord.Client();

const PORT = process.env.PORT || 18306;

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
    default:
      send(
        "**That isn't a command.**\nCurrently, I can only run `^challenge`.\n\n*While I've got you here though, maybe you can make a few suggestions?*\nDM me here: <@657424536740036608>"
      );
  }
});

client.login(process.env.DJS_TOKEN);
