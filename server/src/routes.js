module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hellow ${req.body.email}! your user was registered! Have fun!`
    })
  })
}
