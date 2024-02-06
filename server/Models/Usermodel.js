import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        requried: true,
        unique: true
    },
    password: {
        required: true,
        type: String,
    },
},
    {
        timestamps: true

    },
)
const User = mongoose.model('User', userSchema)
export default User;