const UserAuthModel = require("../Models/userAuthModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");



const userSignUpController = async (req, res) => {
    const hashedPaswword = bcrypt.hashSync(req.body.password, 8)
    try {
        const user = await UserAuthModel.create({
            fullname: req.body.fullname,
            email: req.body.email,
            password: hashedPaswword
        })
        res.status(200).json(user)
        return;
    } catch (error) {
        res.status(401).json(error)
        return
    }

    // res.send("User signup Route Working")
}

const userSignInController = async (req, res) => {

    const { password } = req.body
    try {
        // console.log(req.body)
        if (!req.body.email) {
            res.status(401).json("email is required")
            return
        }

        const user = await UserAuthModel.findOne({
            email: req.body.email
        })

        if (!user) {
            res.status(401).json({ message: "USer Not Found" })
            return
        }

        // if (req.body.password !== user.password) {
        //     res.status(401).json({ message: "Password Doesn't Match" })
        //     return
        // }

        const token = jwt.sign({
            email: user.email
        },
            process.env.JWT_SECRET, { expiresIn: 300 }
        )
        const validatePassword = bcrypt.compareSync(password, user.password);

        res.status(200).json({ message: "Successfully SignIn", token, validatePassword })
        return
    } catch (error) {
        res.status(401).json(error)
        return
    }


}


module.exports = {
    userSignInController, userSignUpController
}