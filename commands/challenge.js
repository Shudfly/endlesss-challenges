module.exports = {
  name: "challenge",
  description:
    "This command provides a challenge for someone in Track Club to complete.",
  execute(message, args) {
    const challenges = [
      "Reduce next Riff to 1 layer",
      "Reduce next Riff to 4 layers",
      "Mute 2 layers or more",
      "Mute 4 layers or more",
      "Mute all Layers that contain Drum Sounds",
      "Mute all blue layers",
      "Mute all yellow layers",
      "Mute all pink 'mic' layers",
      "Mute all White layers",
      "Mute all green layers",
      "Create 1 or more Drum layers with the Pitch dialled all the way up.",
      "Create 1 or more Drum Layers with the Pitch dialled all the way down.",
      "Create 1 or more Synth Layers (Yellow) using only sounds from the default bank",
      "Create 1 or more Bass layers using only sounds from the default bank",
      "Change the sound of at least 1 layer using only the High Pass Filter Effect.",
      "Change the sound of at least 1 layer using only the Low Pass Filter Effect.",
      "Change the sound of at least 1 layer using only the Reverb Effect.",
      "Create next Layer using only 'Doo'",
      "Double the tempo OR drop it by half",
      "Create a Yellow or Blue layer Using only E notes",
      "Change Root note: Keep the current Scale + Freestyle 2 Rifffs",
      "Change Root note and Scale + Freestyle 2 Rifffs",
      "Keep the current root note but change the scale",
      "Double the tempo OR drop it by half",
      "Record a mic layer and record yourself making an animal noise & add FX as you like",
      "Record a mic layer and record yourself singing a lyric from any song & add FX as you like",
      "Record a mic layer and record yourself rapping any lyrics & add FX as you like",
      "Record a mic layer and record yourself making a noise with your body & add FX as you like",
      "Add 2 or more layers using the Sampler instrument",
      "Add a layer of drum sounds using only Blue bass instruments",
      "Add layer of bass sounds using only Yellow synth instruments",
      "Add a layer of synth sounds using only Orange drum instruments",
      "Record at least 1 layer using 15/4 tempo",
      "Record at least 1 layer using 3/4 tempo",
      "Record at least 1 layer using 7/4 tempo",
      "Make 3 new Rifffs using only the Keymasher",
      "Use Smudge to significantly alter at least 1 layer",
      "Reverse at least 1 layer",
      "Smoosh time!  Combine all layers into one with an FX of your choice",
      "Record anything around you using the mic input, then create a melody from that using the sampler in the next layer",
    ];
    message.channel.send("Aight, here you go:");
    message.channel.send(
      `\`\`\`${challenges[Math.floor(Math.random() * challenges.length)]}\`\`\``
    );
  },
};
