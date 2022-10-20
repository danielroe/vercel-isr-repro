export default (req, res) => {
  res.end(req.url + ' ' + Date.now())
}
