import e from "express";
const app = e()
const port = process.env.PORT || 4000

app.get("/", (req,res) => {
    console.log("Success");
    res.send("Success")
})

app.listen(port, () => {
    console.log(`Server Listen on Port ${port}`);
})