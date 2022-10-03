"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservationsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const observations_service_1 = require("./observations.service");
const observations_resolver_1 = require("./observations.resolver");
const bird_entity_1 = require("../birds/entities/bird.entity");
const birds_service_1 = require("../birds/birds.service");
const location_entity_1 = require("../locations/entities/location.entity");
const observation_entity_1 = require("./entities/observation.entity");
const locations_service_1 = require("../locations/locations.service");
let ObservationsModule = class ObservationsModule {
};
ObservationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bird_entity_1.Bird, location_entity_1.Location, observation_entity_1.Observation])],
        providers: [
            birds_service_1.BirdsService,
            locations_service_1.LocationsService,
            observations_resolver_1.ObservationsResolver,
            observations_service_1.ObservationsService,
        ],
    })
], ObservationsModule);
exports.ObservationsModule = ObservationsModule;
//# sourceMappingURL=observations.module.js.map