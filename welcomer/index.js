const botconfig = require(`./botconfig.json`);
const colors = require(`./colors.json`);
const discord = require('discord.js');
const client = new discord.Client();

client.once('ready', () => {
    console.log(`${client.user.tag} is ready`);
});
client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("846085417764651048")
    let targetchannel = '820928408636096532'
    if(welcomeChannel){

        let welcomeEmbed = new discord.MessageEmbed()
        if(member.user.bot){

        if(member.user.client){

            welcomeEmbed.setColor(colors.yellow)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`سلام <@${member.user.id}> به سرور ما خوش اومدی حتما یه سر بزن به ${member.guild.channels.cache.get(targetchannel).toString()} امیدوارم از سرورمون خوشت بیاد`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username} (=`)
            welcomeChannel.send(welcomeEmbed)
        }}else{
            welcomeEmbed.setColor(colors.aqua)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`slam <@${member.user.id}> welcome to friend server`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username}  create by sina  `)
            welcomeChannel.send(welcomeEmbed)
        }
    }else{
        console.log("Welcome Channel Yaft Nashod")
    }
})
client.on("ready", () => {
    function YousamPower() {
      let hungry = ["🧨" , "🎃", "🎈" ]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "PLAYING"});
    }; setInterval(YousamPower, 2000)
  });
client.login(botconfig.token);

