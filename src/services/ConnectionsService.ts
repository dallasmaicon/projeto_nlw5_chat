import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionCreate {
    admin_id?: string;
    id?: string;
    socket_id: string;
    user_id: string;
}

class ConnectionsService {
    private conectionsRepository: Repository<Connection>;

    constructor() {
        this.conectionsRepository = getCustomRepository(ConnectionsRepository);
    }

    async create({ admin_id, id, socket_id, user_id }: IConnectionCreate) {
        const message = this.conectionsRepository.create({
            admin_id,
            id,
            socket_id,
            user_id
        });

        await this.conectionsRepository.save(message);

        return message;
    }

    async findByUserId(user_id: string) {
        return await this.conectionsRepository.findOne({
            user_id
        })
    }
}

export { ConnectionsService };