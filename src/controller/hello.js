class HelloController {
    sendHello = async (req, res) => {
        try {
            res.send("Hello")
        } catch {
            res.status(500).send("Server Error")
        }
    }
}

module.exports = HelloController;