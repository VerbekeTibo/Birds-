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
exports.ObservationsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const observations_service_1 = require("./observations.service");
const observation_entity_1 = require("./entities/observation.entity");
const create_observation_input_1 = require("./dto/create-observation.input");
const update_observation_input_1 = require("./dto/update-observation.input");
const birds_service_1 = require("../birds/birds.service");
const locations_service_1 = require("../locations/locations.service");
const ClientMessage_1 = require("../bootstrap/entities/ClientMessage");
let ObservationsResolver = class ObservationsResolver {
    constructor(observationsService, birdService, locationService) {
        this.observationsService = observationsService;
        this.birdService = birdService;
        this.locationService = locationService;
    }
    bird(o) {
        return this.birdService.findOne(o.birdId);
    }
    location(o) {
        return this.locationService.findOne(o.locationId);
    }
    createObservation(createObservationInput) {
        return this.observationsService.create(createObservationInput);
    }
    findAll() {
        return this.observationsService.findAll();
    }
    findOne(id) {
        return this.observationsService.findOne(id);
    }
    updateObservation(updateObservationInput) {
        return this.observationsService.update(updateObservationInput);
    }
    async removeObservation(id) {
        const deleted = await this.observationsService.remove(id);
        if (deleted.affected <= 1)
            return {
                type: ClientMessage_1.MessageTypes.success,
                message: 'Bird deleted',
                statusCode: 200,
            };
        return {
            type: ClientMessage_1.MessageTypes.error,
            message: 'Delete action went very wrong.',
            statusCode: 400,
        };
    }
};
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [observation_entity_1.Observation]),
    __metadata("design:returntype", Promise)
], ObservationsResolver.prototype, "bird", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [observation_entity_1.Observation]),
    __metadata("design:returntype", Promise)
], ObservationsResolver.prototype, "location", null);
__decorate([
    (0, graphql_1.Mutation)(() => observation_entity_1.Observation),
    __param(0, (0, graphql_1.Args)('createObservationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_observation_input_1.CreateObservationInput]),
    __metadata("design:returntype", void 0)
], ObservationsResolver.prototype, "createObservation", null);
__decorate([
    (0, graphql_1.Query)(() => [observation_entity_1.Observation], { name: 'observations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ObservationsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => observation_entity_1.Observation, { name: 'observation' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ObservationsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => observation_entity_1.Observation),
    __param(0, (0, graphql_1.Args)('updateObservationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_observation_input_1.UpdateObservationInput]),
    __metadata("design:returntype", void 0)
], ObservationsResolver.prototype, "updateObservation", null);
__decorate([
    (0, graphql_1.Mutation)(() => observation_entity_1.Observation),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ObservationsResolver.prototype, "removeObservation", null);
ObservationsResolver = __decorate([
    (0, graphql_1.Resolver)(() => observation_entity_1.Observation),
    __metadata("design:paramtypes", [observations_service_1.ObservationsService,
        birds_service_1.BirdsService,
        locations_service_1.LocationsService])
], ObservationsResolver);
exports.ObservationsResolver = ObservationsResolver;
//# sourceMappingURL=observations.resolver.js.map