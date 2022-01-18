require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_ROUNDS);
const password = "my_sup3r_s4f3_p4ssw0rd";
const password2 = "sdasdsadsadsadsafdfgfgdgfd";

const main = async() => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    console.log(await bcrypt.compare(password2, hash));
}

main();