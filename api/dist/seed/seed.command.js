"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSeedCommand = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const seed_service_1 = require("./seed.service");
let DatabaseSeedCommand = class DatabaseSeedCommand {
    constructor(seedService) {
        this.seedService = seedService;
    }
    async seed() {
        console.log('🌱 Start seeding');
        const r = await this.seedService.addAllBirds();
        console.log(r);
        console.log('🌱 Seeding done 🏁');
    }
    async delete() {
        console.log('🌱 Start deleting');
        await this.seedService.deleteAllBirds();
        console.log('🌱 Deleting done 🏁');
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'seed:database',
        describe: 'seed the database',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DatabaseSeedCommand.prototype, "seed", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'seed:reset',
        describe: 'delete all data from the database',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DatabaseSeedCommand.prototype, "delete", null);
DatabaseSeedCommand = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [seed_service_1.DatabaseSeedService])
], DatabaseSeedCommand);
exports.DatabaseSeedCommand = DatabaseSeedCommand;
//# sourceMappingURL=seed.command.js.map