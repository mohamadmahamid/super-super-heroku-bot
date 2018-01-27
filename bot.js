const Discord = require('discord.js');
const client = new Discord.Client();




                                      /*كود الريدي*/
/*----------------------------------------------------------------------------------------*/

client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by ; demon');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

/*--------------------------------------------------------------*/

 client.on('ready', () => {
  
});


                                      /*كود البنق*/
/*----------------------------------------------------------------------------------------*/
client.on("message", message => {
      if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});


                                      /*كود الستريمنق*/
/*----------------------------------------------------------------------------------------*/

/*client.on('ready', function(){
    var ms = 5000 ;
    var setGame = [`Real Bros Server !`,'By Demon','prefix " - "',`${client.user.username}`,`${client.guilds.size} Servers`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/Demon`);
    }, ms);

});*/


      client.on('ready', () => {
        client.user.setGame(`Real Bros Server ! `,'https://www.twitch.tv/RealBros');

        });
        
                                      /*كود الافاتار*/
/*----------------------------------------------------------------------------------------*/



    client.on('message', message => {
    if(message.content.startsWith(prefix + 'avatar')) {
         var men = message.mentions.users.first();
      var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
  var avatar = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(heg.username)
.setImage(heg.avatarURL)

message.channel.sendEmbed(avatar)
    }
});




                                      /*كود تغيير معلومات البوت*/
/*----------------------------------------------------------------------------------------*/

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (!message.author.id === '401606288296902667') return;

if (message.content.startsWith(prefix + 'playing')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير البلاينق بنجاح`)
} else

if (message.content.startsWith(prefix + 'streaming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Demon");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الستريمنج بنجاح`)
} else

if (message.content.startsWith(prefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغيير الاسم بنجاح ✒`)
} else
if (message.content.startsWith(prefix + 'image')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير صورة البوت بنجاح ✔`);

}
});



                                      /*كود انشاء روم صوتي */
/*----------------------------------------------------------------------------------------*/



client.on("message", (message) => {
if (message.content.startsWith("-cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
	message.react("👍")
    
}
});

                                      /*كود انشاء شات كتابي*/
/*----------------------------------------------------------------------------------------*/


client.on("message", (message) => {
if (message.content.startsWith("-ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')
message.react("👍")

}
});



                                      /*كود مسح روم كتابي او صوتي */
/*----------------------------------------------------------------------------------------*/







client.on("message", (message) => {
    if (message.content.startsWith('-delete')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});









                                      /*كود الميوت*/
/*----------------------------------------------------------------------------------------*/




client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "اسكت") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي المحدد**").catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي المحدد**").catch(console.error);
});
  }

};

});





                                      /*كود فك الميوت*/
/*----------------------------------------------------------------------------------------*/



client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "تكلم") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص المحدد **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص المحدد **").catch(console.error);
});
  }

};

});


                                      /*كود ميوت شات */
/*----------------------------------------------------------------------------------------*/




client.on('message', message => {
       if(message.content === prefix + "mutechat") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم قفل الشات__:white_check_mark:**")
});
                }


                                      /*كود فك ميوت شات*/
/*----------------------------------------------------------------------------------------*/
    if(message.content === prefix + "unmutechat") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
                }
                
         
       
});


                                      /*كود الايدي*/
/*----------------------------------------------------------------------------------------*/

const moment = require('moment');
  client.on('message', message => {
           if (message.content.startsWith("-id")) {
        var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
       var h = message.mentions.users.first();
          var h;
            if(h){
                var h = h;
            } else {
                var h = message.author;
               
            }
              var z = message.mentions.members.first();
          var z;
            if(z){
                var z = z;
            } else {
                var z = message.member;
            }
             moment.locale('ar-ly');
            let heroo = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(h.avatarURL)
            .setAuthor(h.username,h.avatarURL)
            .addField(': تاريخ دخولك الدسكورد',`${moment(h.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(h.createdAt).fromNow()}\``,true)
            .addField(': تاريخ دخولك السيرفر',`${moment(z.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(z.joinedAt).startOf(' ').fromNow()}\`\``, true)            
            .addField(' :الاسم', `[ ${message.author.username}#${message.author.discriminator} ]`, true)           
            .addField(' :  الايدي', `[ ${message.author.id} ]`, true)
            .addField('  :يلعب', `[ ${message.author.presence.game === null ? "No Game" : message.author.presence.game.name} ]`, true)
            .addField('الرتب :', `[ ${message.member.roles.filter(r => r.name).size} ]`, true)
            .addField('الحالة :', `[ ${message.author.presence.status.toUpperCase()} ]`, true)
            .addField('تاق الحساب الخاص :', `[ #${message.author.discriminator} ]`,true)
            .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
            if(message.author.bot) return message.channel.send("**# Bots cannot excute commands!**");
            if(h.bot) return message.channel.send("**# Bots have no profiles!**");
         message.channel.send({embed:heroo})
           }
         });


                              /*كود منع النشر*/
/*----------------------------------------------------------------------------------------*/

	
client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('**:thinking:**');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع نشر اللينكات ي عيني :heart:️!.**`)
    }
}
});
/*---------------------------------*/
client.on('message', message => {
    if(message.content.includes('youtube.com')){
                                            if(!message.channel.guild) return message.reply('**:thinking:**');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع النشر حبيبي :blush:  ! **`)
    }
}
});



                                      /*كود مسح الشات*/
/*----------------------------------------------------------------------------------------*/

		
client.on('message', message => {
      let command = message.content.split(" ")[0];
  if (command == "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
    message.delete()
    if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);

  const messagecount = parseInt(args.join(' '));

  message.channel.fetchMessages({
  
    limit: messagecount
  
}).then(messages => message.channel.bulkDelete(messages));
};

});


/*--------------------------------------------------*/


client.on('message', message => {
    let command = message.content.split(" ")[0];

  if (command == "امسح") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
    message.delete()
    if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);

  const messagecount = parseInt(args.join(' '));

  message.channel.fetchMessages({
  
    limit: messagecount
  
}).then(messages => message.channel.bulkDelete(messages));
};

});






                                      /*كود الكيك*/
/*----------------------------------------------------------------------------------------*/



client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "كيك") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجى اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**شخص الذي تم طرده:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**بواسطة:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

                                      /*كود الباند*/
/*----------------------------------------------------------------------------------------*/


client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "باند") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجى اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**الشخص الذي تم تبنيده:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**بواسطة:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


                                      /*كود رسائل البوت عالخاص*/
/*----------------------------------------------------------------------------------------*/




    client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("401650870942695425").send({embed:iiMo});
    }
});



                                      /*كود ترحيب صورة دائرية*/
/*----------------------------------------------------------------------------------------*/



/*const fs = require('fs');
client.on('guildMemberAdd', member => {

      if (!member.guild.channels.find('name', 'chat')) return;
   
    
    
var Canvas = require('canvas')
var jimp = require('jimp')

const w = ['./img/w1.png'];

        let Image = Canvas.Image,
            canvas = new Canvas(802, 404),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 730, 300);

})
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
        
        
             //wl
                        ctx.font = '30px Arial Bold';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#000000";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 530, 160);
                        
                      //ur name
                        ctx.font = '25px Arial';
                        ctx.fontSize = '50px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText("", 530, 210);
                        
 //Avatar
                                let Avatar = Canvas.Image;
                                let ava = new Avatar;
                                ava.src = buf;
                                ctx.beginPath();
                                ctx.arc(150, 152, 109, 0, Math.PI*2, true); 
                                ctx.closePath();
                                ctx.clip();
                                
                                ctx.drawImage(ava, 30, 30, 229, 229);
                                
                                ctx.closePath();

                        
                                          
member.guild.channels.find('name','chat').sendFile(canvas.toBuffer())




})
})


});*/


                                      /*كود رتبة تلفائية*/
/*----------------------------------------------------------------------------------------*/


const token = "NDAxNjA2Mjg4Mjk2OTAyNjY3.DTsohA.KZUXWowy0hZi04StrSQHvuruRrk";
const role = "~ Real Bros .";


client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', role));
});



                                      /*كود معلومات الاعضاء*/
/*----------------------------------------------------------------------------------------*/

client.on('message', message => {
    if(message.content == '-members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });
  
  
                                      /*كود الأب تايم*/
/*----------------------------------------------------------------------------------------*/

  
  client.on('message', message => {
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});



                                      /*كود اللوق*/
/*----------------------------------------------------------------------------------------*/




/*client.on("messageDelete", (message) => {
       const del =  message.guild.channels.find('name', 'log');
 if (message.content) {
      message.guild.fetchAuditLogs().then(logs => {
      const user = logs.entries.first().executor;
      const embed = new Discord.RichEmbed()
       .setTitle(` - message Delete`)
        .setDescription(`Message Has Been Send By \**${message.author.username}#${message.author.discriminator}**\ \n Message : \`${message}\` \n In #${message.channel.name}`)
        .setColor("RANDOM")
del.send({embed});
    });
    
    };
    });


client.on("channelDelete",  ch => {
const channel = ch.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` - Channel`)
  .setDescription(`A channel has been deleted by  \n Name : ${ch.name}  `)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});
client.on("channelCreate",  ch => {
const channel = ch.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` + Channel`)
  .setDescription(`A channel has been Create \n Name : ${ch.name}`,'by ${message.author}')
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});
client.on("roleCreate",  rc => {
const channel = rc.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` - Role Create`)
  .setDescription(`A role Has been created \n Name : ${rc.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});

client.on("roleDelete",  rd => {
const channel = rd.guild.channels.find("name", "log")
if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(` - Role Delete`)
  .setDescription(`A role has been deleted \n Name : ${rd.name}`)
  .setColor(`RANDOM`)
channel.sendEmbed(embed)
}
});


 
 
 client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'log');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
	       .setTitle(` + Mmeber Joined`)
    .addField('**:arrow_right: **',`**[${member}]**`)
 
    channel.send({embed:embed});
}
);
 
 client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'log');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    	       .setTitle(` - Member leave`)
    .addField('**:arrow_right:**',`**[${member}]**`)
 
    channel.send({embed:embed});
}
);*/


                                      /*كود قفل منشن افري وان*/
/*----------------------------------------------------------------------------------------*/


client.on('message', message => {
 
       if(message.content === prefix + "nomention") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **No🌚**');
              message.channel.overwritePermissions(message.guild.id, {
            MENTION_EVERYONE: false
 
              }).then(() => {
              message.channel.send('__**تم اغلاق منشن افري وان 🔒**__')            
              });
                }
                                      /*كود فك منشن افري وان*/
/*----------------------------------------------------------------------------------------*/
    if(message.content === prefix + "mention") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**No🌚**');
              message.channel.overwritePermissions(message.guild.id, {
            MENTION_EVERYONE: true
 
              }).then(() => {
              message.channel.send('__**تم فك منشن افري وآن 🔓**__')
              });
                }
               
         
       
});



                                 /*كود إعطاء رتبة من الآمر مثل برو بوت*/
/*----------------------------------------------------------------------------------------*/

client.on('message', message => { 
var prefix = "-";
if (message.author.boss) return;
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
if (command == "role") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص !!**').then(msg => {msg.delete(5000)});
let MRole = message.content.split(" ").slice(2).join(" ");
if(!MRole)return message.reply("**يجب عليك وضع اسم الرتبة**").then(msg => {msg.delete(5000)});
message.guild.member(user).addRole(message.guild.roles.find("name",MRole));
message.reply('** تم آعطاء الرتبة للشخص المحدد بنجاح :white_check_mark:  **').then(msg => {msg.delete(10000)});
}
});



                                 /* البريفكس*/
/*----------------------------------------------------------------------------------------*/

var prefix = "-";

client.login(process.env.BOT_TOKEN);
