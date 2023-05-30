



function exportcookie(json){
    let strigcookies = []
    for (const key in json){
        //console.log(key, json[key].name,json[key].value)
        var name = json[key].name
        var value = json[key].value
        const cookis = `${name}=${value};`
        strigcookies.push(cookis)
    }
    return strigcookies.join(' ')

}


module.exports = exportcookie