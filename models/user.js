import { Schema, model, models} from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email is already in use.'],
        required: [true, 'Email is required.']
    },
    username: {
        type: String,
        required: [true, 'Username is required.'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'Username invalid, it should contain 8-20 alphanumeric letters and be unique!']
    },
    image: {
        type: String
    }
});

// Note:  Normally we do this when we have a 24 x 7 running Backend Server.
// const User = model("User", UserSchema);

// But for Serverless, we need to follow this
const User = models.User || model("User", UserSchema);
export default User;

// Models : Refers all the models created.

