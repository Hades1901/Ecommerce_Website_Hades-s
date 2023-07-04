import express from "express"
const main = async () => {
  try {
    const app = express()

    const port = process.env.PORT || 5050

    app.listen(port, () => {
      console.log("Server is running on port", port);

    })

    app.use(express.json())
  } catch (err) {
    console.log(err);

  }
}

main()
