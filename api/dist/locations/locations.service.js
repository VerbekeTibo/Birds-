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
exports.LocationsService = void 0;
const common_1 = require("@nestjs/common");
const location_entity_1 = require("./entities/location.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mongodb_1 = require("mongodb");
let LocationsService = class LocationsService {
    constructor(locationRepository) {
        this.locationRepository = locationRepository;
    }
    create(createLocationInput) {
        const l = new location_entity_1.Location();
        l.name = createLocationInput.name;
        l.observationsId = createLocationInput.observationsId;
        l.location = createLocationInput.location;
        return this.locationRepository.save(l);
    }
    findAll() {
        return this.locationRepository.find();
    }
    findOne(id) {
        return this.locationRepository.findOne(new mongodb_1.ObjectId(id));
    }
    update(updateLocationInput) {
        const update = new location_entity_1.Location();
        update.id = new mongodb_1.ObjectId(updateLocationInput.id);
        update.name = updateLocationInput.name;
        update.observationsId = updateLocationInput.observationsId;
        update.location = updateLocationInput.location;
        return this.locationRepository.save(update);
    }
    remove(id) {
        return this.locationRepository.delete(new mongodb_1.ObjectId(id));
    }
};
LocationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(location_entity_1.Location)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LocationsService);
exports.LocationsService = LocationsService;
//# sourceMappingURL=locations.service.js.map