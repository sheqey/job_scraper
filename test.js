// var  x = "!a href='www.facebook.com' # link here ! /a # ";
// var h = x.replace(/!/g,"<").replace(/#/g,">")

// console.log(h)

// var str = '[T] and [Z] but not [T] and [Z]';
// var result = str.replace('T',' ').replace('Z','');
// console.log(resulc
var axios = require('axios');

async function name(movie) {
  await axios.get(`https://widemintmouse37.conveyor.cloud/movie?name=${movie}`).then(response=>{
  
  //console.log(response.data)
     const obj = JSON.parse(response.data);
     console.log(obj.name)
    console.log(obj.Actor)
    console.log(obj)
  })
}
name("m3gan")
 name("black panther wakanda forever")
 name("black adam")
 name("avengers endgame")
 name("a man called otto")
 name("puss in boots the last wish")
 
 name("black panther wakanda forever")
 name("black adam")
 name("avengers endgame")
 name("a man called otto")
 name("puss in boots the last wish")
