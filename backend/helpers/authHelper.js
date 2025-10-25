import bcrypt from "bcryptjs";

const salt = 10;

export async function hashPass(password) {
    try {
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        throw new Error("Error hashing password");
    }
}
