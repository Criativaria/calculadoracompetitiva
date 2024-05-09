import { userRepository } from "../repositories/user-repository"

export class UserService {


    public static async getUserById(userId: number) {

        if (isNaN(userId) || userId <= 0) {
            console.log("o id do usuário não é valido")
        }
        const user = await userRepository.getUserById(userId)

        if (user == null) {
            console.log("esse usuário nao existe")
        }
    }

    public static async newUser(nome: string, email: string, password: string, score: number,) {
        if (nome == null || email == null || password == null || score == null) {
            console.log("informações invalidas");
        }
    }
}