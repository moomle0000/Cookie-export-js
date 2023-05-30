const axios = require('axios');

const _ = require("lodash");
const cheerio = require('cheerio');

const cookies = require('../index');
var cookiese = [
    {
        "domain": ".exmple.com",
        "name": "token",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "7hgBDnnxg0evtQ"
]





async function test(name){
    const options = {
        url: "https://subscene.com/subtitles/searchbytitle",
        method: "POST",
        timeout: 0,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // "Authorization": "Bearer " + apiKey,
            'user-agent': 'Mozilla/5.0',
            'Cookie':cookies(cookiese)
        },
        data:{
            query: encodeURIComponent(name),
            l: ""
        }
      
    };

    const response = await axios.request(options);

    return response.data

    
}




