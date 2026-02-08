import type { Request, Response } from "express";
import { sign } from "jsonwebtoken";

const user = {
  id_user: "1",
  name: "Admin",
  email: "admin@email.com",
  password: "password",
};

export class LoginController {
  login = async (_: Request, response: Response) => {
    const tokenData = {
      name: user.name,
      email: user.email,
    };

    const tokenKey = "123456789";

    const tokenOptions = {
      subject: user.id_user,
    };

    const token = sign(tokenData, tokenKey, tokenOptions);

    return response.status(200).json({ token });
  };
}
