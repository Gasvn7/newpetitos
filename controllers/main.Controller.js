const path = require('path');
const mainController = {
    home: function (req, res) {
        res.sendFile(path.join(__dirname, '../views/home.html'))
    },
    menu: function (req, res) {
        res.sendFile(path.join(__dirname, '../views/menu.html'))
    },
    navigationBar: function (req, res) {
        res.sendFile(path.join(__dirname, '../views/navigationBar.html'))
    },
}

module.exports = mainController;