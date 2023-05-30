# Cookie-export-js
These modules help you speed up the process of writing a cookie and modifying a request for use in many projects


## how to use

download Cookie Editor extensions

![image](https://github.com/moomle0000/Cookie-export-js/assets/68758566/eb68ce23-4ffb-43ae-bfa2-ae417639a1df)

Export as JSON 

create new json file 


```js

const exportcookie = require("../index")

const jsondata = require("./data.json")


const data =  exportcookie(jsondata)

console.log(data)


```

