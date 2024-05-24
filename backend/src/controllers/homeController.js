const getHomepage = (req, res) => { 
    res.send('helo long dep trai')
}
const getABC = (req, res) => {
    res.send('check abd')
}
module.exports = {
    getHomepage,
    getABC
}