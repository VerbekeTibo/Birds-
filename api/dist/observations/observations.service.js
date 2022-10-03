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
exports.ObservationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mongodb_1 = require("mongodb");
const typeorm_2 = require("typeorm");
const observation_entity_1 = require("./entities/observation.entity");
let ObservationsService = class ObservationsService {
    constructor(observationRepository) {
        this.observationRepository = observationRepository;
    }
    create(createObservationInput) {
        const o = new observation_entity_1.Observation();
        o.name = createObservationInput.name;
        o.description = createObservationInput.description;
        o.weather = createObservationInput.weather;
        o.birdId = createObservationInput.birdId;
        o.locationId = createObservationInput.locationId;
        o.active = createObservationInput.active;
        return this.observationRepository.save(o);
    }
    findAll() {
        return this.observationRepository.find();
    }
    findOne(id) {
        return this.observationRepository.findOne(new mongodb_1.ObjectId(id));
    }
    update(updateObservationInput) {
        const update = new observation_entity_1.Observation();
        update.id = updateObservationInput.id;
        update.name = updateObservationInput.name;
        update.description = updateObservationInput.description;
        update.weather = updateObservationInput.weather;
        update.birdId = updateObservationInput.birdId;
        update.locationId = updateObservationInput.locationId;
        update.active = updateObservationInput.active;
        return this.observationRepository.save(update);
    }
    remove(id) {
        return this.observationRepository.delete(new mongodb_1.ObjectId(id));
    }
};
ObservationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(observation_entity_1.Observation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ObservationsService);
exports.ObservationsService = ObservationsService;
//# sourceMappingURL=observations.service.js.map