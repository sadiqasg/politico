import db from '../models/db'
import bcrypt from 'bcryptjs';
import passwordHash from 'password-hash'
import jwt from 'jsonwebtoken'

class UserController {
    static userSignup(req, res) {
    console.log('signing up..');
      // const { firstname, lastname, othername, email, phoneNumber, passportUrl, password } = req.body;
      // let hashPassword= passwordHash.generate(password);
        const sql = `INSERT INTO Users(firstname, lastname , othername, email, phoneNumber, passportUrl, password) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`
        const values = [firstname, lastname, othername, email, phoneNumber, passportUrl, password];
        db.query(sql, values).then((user)=>{
            return res.status(201).send({
                success: true,
                data: [{
                    token : jwt.sign(user.rows[0].id, 'politico'),
                    user: {
                            firstname: user.rows[0].firstname,
                            email: user.rows[0].email,
                            phoneNumber: user.rows[0].phoneNumber,
                            passportUrl: user.rows[0].passportUrl
                        }
                }],
            })
        }).catch((err)=>{
            return res.status(400).send({
                success: false,
                message: err
            })
        });
    }
}

export default UserController;