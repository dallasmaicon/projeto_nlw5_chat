import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingCreate {
    chat: boolean;
    username: string;
}

class SettingService {
    private settingsRepository: Repository<Setting>;

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({ chat, username }: ISettingCreate) {
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        });

        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const settings = this.settingsRepository.create({
            chat,
            username
        });

        await this.settingsRepository.save(settings);
        return settings;
    }

    async findByUserName(username: string) {
        return this.settingsRepository.findOne({
            username
        })
    }

    async update(username: string, chat: boolean) {
        return await this.settingsRepository.createQueryBuilder()
            .update(Setting)
            .set({ chat })
            .where("username = :username", {
                username
            })
            .execute();
    }
}

export { SettingService }