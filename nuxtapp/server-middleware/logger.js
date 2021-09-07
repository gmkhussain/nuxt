export default function (req, res, next) {
    console.log("Running Middleware")
    console.log(req.url)
    next()
  }
  