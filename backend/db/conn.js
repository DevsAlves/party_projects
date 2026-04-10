require("dotenv").config()
const mongoose = require("mongoose")

async function main() {
    mongoose.set("strictQuery", true)
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main