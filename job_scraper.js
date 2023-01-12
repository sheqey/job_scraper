var axios = require('axios');
const cheerio = require('cheerio')
const nodemailer = require('nodemailer');


async function name(post,email) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'pythonm302@gmail.com',
          pass: 'sqbetxfvekskpksv'
        }
      });
      
      const mailOptions = {
        from: 'pythonm302@gmail.com',
        to: email,
        subject: 'Scraped Data',
        text: ''
      };
      
    var config = {
        method: 'get',
      //  url: 'https://www.myjobmag.co.ke/search/jobs?q=information+technology',
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',"Accept-Encoding": "gzip,deflate,compress" 
        }
      };
  await axios.get(`https://www.myjobmag.co.ke/search/jobs?q=${post}`,config).then(response=>{
  
  //console.log(response.data)
   
  let html = response.data;
  const $ = cheerio.load(html);
  let liElements = $("ul.job-list > li.job-list-li");
  const scrapedData = [];
for (let i = 0; i < 5; i++) {
    const title = $(liElements[i]).find("li.mag-b h2 a").text();
    const description = $(liElements[i]).find("li.job-desc").text();
    const date = $(liElements[i]).find("li#job-date").text();
    const href = $(liElements[i]).find('a').attr('href');
   // let href = $element.find('a').attr('href');
   scrapedData.push({ title, description, date,href});
   // console.log(title, description, date,href);
}
mailOptions.text = JSON.stringify(scrapedData, null, 2);
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
  })
}

name("information+technology","pkkaranja002@gmail.com")

 
