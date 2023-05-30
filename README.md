# Cookie-export-js
These modules help you speed up the process of writing a cookie and modifying a request for use in many projects


## how to use

download Cookie Editor extensions

![image](https://github.com/moomle0000/Cookie-export-js/assets/68758566/eb68ce23-4ffb-43ae-bfa2-ae417639a1df)

Export as JSON 

create new json file 


```js

const cookies = require("../index")

const jsondata = require("./data.json")


const cookie =  cookies(jsondata)

const options = {
        url: "https://example/search",
        method: "POST",
        timeout: 0,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // "Authorization": "Bearer " + apiKey,
            'user-agent': 'Mozilla/5.0',
            'Cookie':cookie
        },
        data:{
            anydata: "ww",
        }
      
    };


    const response = await axios.request(options);

```

