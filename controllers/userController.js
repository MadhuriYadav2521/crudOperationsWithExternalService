import Users from "../modals/userModel.js";
import encrypt from "encryptjs";

export const register = async (req, res) => {
    try {
        const { name, email, password, pin, role } = req.body;

        var secretkey = 'ios';
        var plainPin = pin;
        var plaintext = password;
        var cipherText = encrypt.encrypt(plaintext, secretkey, 256);
        var cipherPin = encrypt.encrypt(plainPin, secretkey, 256);
        const user = new Users({ name, email, password: cipherText, pin: cipherPin, role })
        await user.save();
        return res.send("Resgistration Succesfull!")

    } catch (error) {
        return res.send(error)
    }
}











