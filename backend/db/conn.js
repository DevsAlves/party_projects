const moongose = require("mongoose")

async function main() {
    moongose.set("strictQuery", true)
    try {
        await moongose.connect("mongodb://Guilherme:19781984@ac-tmudapv-shard-00-00.hybvoxh.mongodb.net:27017,ac-tmudapv-shard-00-01.hybvoxh.mongodb.net:27017,ac-tmudapv-shard-00-02.hybvoxh.mongodb.net:27017/?ssl=true&replicaSet=atlas-wmdo0e-shard-0&authSource=admin&appName=Cluster0")
        console.log("Conexão com o mongo feita")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main