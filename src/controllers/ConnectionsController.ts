import { Request, Response } from "express";
import { ConnectionsService } from "../services/ConnectionsService";

class ConnectionsController {
    async create(request: Request, response: Response) {
        const { admin_id, socket_id, id, user_id } = request.body;
        const connectionsService = new ConnectionsService();

        try {
            const message = await connectionsService.create({
                admin_id,
                user_id,
                socket_id,
                id
            });

            return response.json(message);
        } catch (err) {
            return response.status(400).json({
                message: err.messge,
            })
        }
    }
}

export { ConnectionsController };