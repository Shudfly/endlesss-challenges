module.exports = {
  name: "prefix",
  description: "This command changes the bot prefix.",
  execute(message, args, client) {
    function send(text) {
      message.channel.send(text);
    }

    var newPrefix = "";

    if (args.length == 0) {
      send(`The current prefix is **${prefix}**`);
    } else {
      if (!message.member.hasPermission("MANAGE_SERVER")) {
        send(
          `**You need the __Manage Server__ permission to perform this command, <@!${message.author.id}>.**`
        );
        return;
      }
      newPrefix = args[0];
      export { prefix };
      client.user
        .setActivity(`for ${newPrefix}help`, { type: "WATCHING" })
        .then((presence) =>
          console.log(`Activity set to ${presence.activities[0].name}`)
        )
        .catch(console.error);
      send(`Prefix set to **${args[0]}**`);
    }
  },
};
