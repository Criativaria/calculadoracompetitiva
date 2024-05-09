
import { prisma } from "../prisma";

export class userRepository {

    public static async getUserById(id: number) {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        return user;
    }
}