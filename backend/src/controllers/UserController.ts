import type { Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";

const dbPath = path.resolve(__dirname, "../database/dados.json");

export class UserController {
  private readDatabase() {
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data);
  }

  private writeDatabase(data: any) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  }

  createUser = (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Dados incompletos" });
    }

    const db = this.readDatabase();

    const userExists = db.users.find((u: any) => u.email === email);

    if (userExists) {
      return res.status(409).json({ error: "Usuário já existe" });
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    db.users.push(newUser);
    this.writeDatabase(db);

    return res.status(201).json(newUser);
  };

  getUser = (_: Request, res: Response) => {
    const db = this.readDatabase();
    return res.json(db.users);
  };

  deleteUser = (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email é obrigatório" });
    }

    const db = this.readDatabase();

    const filteredUsers = db.users.filter((u: any) => u.email !== email);

    if (filteredUsers.length === db.users.length) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    db.users = filteredUsers;
    this.writeDatabase(db);

    return res.json({ message: "Usuário removido com sucesso" });
  };
}
