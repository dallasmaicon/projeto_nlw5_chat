import { Request, Response } from "express";
import { SettingService } from "../services/SettingsService";

class SettingsController {
    async create(request: Request, response: Response) {
        const { chat, username } = request.body;

        const settingService = new SettingService();

        try {
            const settings = await settingService.create({ chat, username });

            return response.json(settings);
        } catch (err) {
            return response.status(400).json({
                message: err.message,
            })
        }
    }

    async findByUserName(request: Request, response: Response) {
        const { username } = request.params;

        const settingService = new SettingService();

        const settings = await settingService.findByUserName(username);

        return response.json(settings)
    }

    async update(request: Request, response: Response) {
        const { username } = request.params;
        const { chat } = request.body;

        const settingsService = new SettingService();

        const settings = await settingsService.update(username, chat);
        return response.json(settings);
    }
}

export { SettingsController };