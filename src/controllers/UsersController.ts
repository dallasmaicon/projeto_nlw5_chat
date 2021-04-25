import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";


class UserController {
    async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;

        const userService = new UsersService();

        try {
            const user = await userService.create(email);

            return response.json(user);
        } catch (err) {
            return response.status(400).json({
                message: err.messge,
            })
        }
    }
}

export { UserController };