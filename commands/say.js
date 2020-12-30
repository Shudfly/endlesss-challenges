module.exports = {
  name: "say",
  description: "This command repeats the given input.",
  execute(message, args) {
    var text = "";

    function send(text) {
      message.channel.send(text);
    }

    if (args.length == 0) {
      send(`I can't just say nothing, <@!${message.author.id}>!`);
    } else {
      for (i = 0; i < args.length; i++) {
        text = `${text} ${args[i]}`;
      }
    }

    send(text);
  },
};
