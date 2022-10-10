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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSeedService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const bird_entity_1 = require("../birds/entities/bird.entity");
const jsonBirdsSeed = require("./data/scraped-birds.json");
let DatabaseSeedService = class DatabaseSeedService {
    constructor(birdsRepository) {
        this.birdsRepository = birdsRepository;
    }
    async addAllBirds() {
        const theBirds = [];
        for (const jsonb of jsonBirdsSeed) {
            const b = new bird_entity_1.Bird();
            b.name = jsonb.name;
            b.fullname = jsonb.fullname;
            b.category = jsonb.category;
            b.observations = 0;
            b.url = jsonb.url;
            b.description = jsonb.description;
            theBirds.push(b);
        }
        return this.birdsRepository.save(theBirds);
    }
    async deleteAllBirds() {
        await this.birdsRepository.delete({});
        return Promise.resolve();
    }
};
DatabaseSeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(bird_entity_1.Bird)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DatabaseSeedService);
exports.DatabaseSeedService = DatabaseSeedService;
//# sourceMappingURL=seed.service.js.map