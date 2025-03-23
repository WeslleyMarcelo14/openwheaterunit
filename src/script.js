async function getTemp(cidade){
    const apikey = "105972183771f39cefd44db42ada6c8e"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apikey}`;

    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("Não foi possível obter os dados")
        }
        const data = await response.json()
        // console.log(data)
        return data 
    } catch(error) {
        console.log("erro ao buscar dados", error)
        return null
    }
}

module.exports = {getTemp};

getTemp("Avaré")
