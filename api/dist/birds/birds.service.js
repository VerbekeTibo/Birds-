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
exports.BirdsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mongodb_1 = require("mongodb");
const bird_entity_1 = require("./entities/bird.entity");
let BirdsService = class BirdsService {
    constructor(birdRepository) {
        this.birdRepository = birdRepository;
    }
    create(createBirdInput) {
        const b = new bird_entity_1.Bird();
        b.name = createBirdInput.name;
        b.fullname = createBirdInput.fullname;
        b.category = createBirdInput.category;
        b.url = createBirdInput.url;
        b.observations = createBirdInput.observations;
        b.description = createBirdInput.description;
        return this.birdRepository.save(b);
    }
    findAll() {
        return this.birdRepository.find();
    }
    findOne(id) {
        return this.birdRepository.findOne(new mongodb_1.ObjectId(id));
    }
    update(updateBirdInput) {
        const update = new bird_entity_1.Bird();
        update.id = new mongodb_1.ObjectId(updateBirdInput.id);
        update.name = updateBirdInput.name;
        update.fullname = updateBirdInput.fullname;
        update.category = updateBirdInput.category;
        update.url = updateBirdInput.url;
        update.observations = updateBirdInput.observations;
        update.description = updateBirdInput.description;
        return this.birdRepository.save(update);
    }
    remove(id) {
        return this.birdRepository.delete(new mongodb_1.ObjectId(id));
    }
};
BirdsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bird_entity_1.Bird)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BirdsService);
exports.BirdsService = BirdsService;
//# sourceMappingURL=birds.service.js.map