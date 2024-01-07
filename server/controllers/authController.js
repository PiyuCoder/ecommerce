import { comparePassword, hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
import JWT from 'jsonwebtoken'

//REGISTER
export const registerController = async (req, res) => {

    try {

        const {name, email, password, phone, address} = req.body

    if(!name || !phone || !email || !password || !address){
        return res.send({
            message: 'All fields required.',
        success:false})
    }

    //check existing user
    const existingUser = await userModel.findOne({email})

    if(existingUser){
       return res.send({message: 'Already registered, please login', success:false})
    }

    const hashedPassword = await hashPassword(password)

    const user = await new userModel({
        name, email, phone, address, password:hashedPassword
    }).save()


    res.status(201).send({
        message: 'User registered successfully',
        success:true,
        user
    })
        
    } catch (error) {
        res.status(500).send({message: error})
    }
    

}


//LOGIN

export const loginController = async(req,res) => {
    try {
        const {email, password} = req.body

        if(!email || !password){
            return res.send({message: "Incorrect email or password."})
        }

        const user = await userModel.findOne({email})

        if(!user){
            return res.send({message:"Not Registered"})
        }

        const passMatch = await comparePassword(password, user.password)

        if(!passMatch){
            return res.send({message: "incorrect password"})
        }

        const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})

        res.status(200).send({
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
            },
            success:true,
            message: "Login successful!!",
            token
            
        })
        
    } catch (error) {
        console.log(error)
    }
}

//TEST
export const testController = (req,res) => {
    res.send({message: 'protected route'})
}