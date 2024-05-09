import { Request, Response } from "express-serve-static-core";
import { UserService } from "../services/user-service";

export class UserController {

    public static async getUserScore(request: Request, response: Response) {

        const userId = parseInt(request.params.id);

        const user = await UserService.getUserById(userId)

        response.json(user)
    }

    public static async signIn(request: Request, response: Response) {
        const nome = request.body.nome
        const email = request.body.email
        const password = request.body.password
        const score = request.body.score

        const newUSer = await UserService.newUser(nome, email, password, score)
    }

}