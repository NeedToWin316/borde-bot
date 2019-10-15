const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");
        
client.on("ready", () => {
   console.log("Me da Igual!");
});
client.on("message", (message) => {
  if (message.content.startsWith("hola")) {
    message.channel.send("Adios!");
} else
if (message.content.startsWith("likeamarcos")) {
  message.channel.send("Cuando ponga que tire el palo");
} else
if (message.content.startsWith("xd")) {
  message.channel.send("Jajajaj yo tambien me rio, pero de tu puta cara");
} else
if (message.content.startsWith("kk")) {
    message.channel.send("Marc, eres el unico que usa esa expresion de mierda, yo te lo recuerdo, el suicido es la mejor opcion.");
} else
if (message.content.startsWith("nais")) {
    message.channel.send("Pues la verdad es que si, es bastante nais, no como Luis, QUE NO RESPONDE A LOS PUTOS WASAPS Y DUERME 24/7");
} else
if (message.content.startsWith("Francis")) {
    message.channel.send("Best Alien 2019-2020, 5 estrellas en Amazon");
} else
if (message.content.startsWith("Perfection.")) {
    message.channel.send("Eso es que por fin funciono :D (Aunque os sigo odiando a todos jaja)");
} else
if (message.content.startsWith("miau")) {
    message.channel.send("Que te crees, un puto gato, genial... empezamos con los travestis y ahora esto...");
} else
if (message.content.startsWith("ja")) {
    message.channel.send("Me comere a tus hijos, nahhh es broma, a no ser...");  
} else
if (message.content.startsWith("spam")) {
    message.channel.send("Hablando de spam, Sabias que Xx_MarcosGamer777_xX ha subido nuevo video (Vaya promote mas gratuito, Marcos pagame, acepto PayPal): https://youtu.be/rw50Vgz6j64 ");  
} else
if (message.content.startsWith("masspam")) {
    message.channel.send("Este espacio de Spam estara disponible por 14,99€, si quieres tu spam diario, compra en el proximo Spam-Bot™");  

}else
if (message.content.startsWith("-frases")){
    const embed = new Discord.RichEmbed() 
    .setTitle("Lista de Frases del Borde-Bot™")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("No hace falta que pogas nada delante, tu solo pon la palabra, acomodando las cosas desde 1945.")
    .setFooter("Creado por NeedToWin 2019-2020", client.user.avatarURL)
    .setImage(message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL("https://mybot-team.github.io/documentacion/guia/usando-un-prefix.html")
    .addField("Frase 1: hola", "Basicamente Incita a que te vayas por donde has venido")
    .addField("Frase 2: xd..." , "El tambien se rie muy fuerte",  true)
    .addField("Frase 3: kk" , "Marc, esto va por ti")
    .addField("Frase 4: nais" , "Incita el odio hacia Luis")
    .addField("Frase 5: Francis" , "Referencia a Ghost-Boosters V")
    .addField("Frase 6: likeamarcos" , "Con una condicion...")
    .addField("Frase 7: Perfection." , "Casi demostrando un poco de humanidad")
    .addField("Frase 8: miau" , "Animales Homosexuales hasta el fin")
    .addField("Frase 9: ja..." , "Ufff, Eso huele a amenaza...")
    .addField("Frase 10: spam" , "Seguro que no te lo esperabas...")
    .addField("Frase 11: masspam" , "El buen Capitalismo chabales")
    
    message.channel.send({embed});
  
  }
});
client.login("NjMzMzM1OTI3NDk3OTQ5MjM3.XaXuSA.54bjjChtbiGaeh7BAWVlWpiln9U");   