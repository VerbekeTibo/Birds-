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
exports.LocationsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const locations_service_1 = require("./locations.service");
const location_entity_1 = require("./entities/location.entity");
const create_location_input_1 = require("./dto/create-location.input");
const update_location_input_1 = require("./dto/update-location.input");
const observations_service_1 = require("../observations/observations.service");
const ClientMessage_1 = require("../bootstrap/entities/ClientMessage");
let LocationsResolver = class LocationsResolver {
    constructor(locationsService, observationsService) {
        this.locationsService = locationsService;
        this.observationsService = observationsService;
    }
    observations(l) {
        return this.observationsService.findOne(l.observationsId);
    }
    createLocation(createLocationInput) {
        return this.locationsService.create(createLocationInput);
    }
    findAll() {
        return this.locationsService.findAll();
    }
    findOne(id) {
        return this.locationsService.findOne(id);
    }
    updateLocation(updateLocationInput) {
        return this.locationsService.update(updateLocationInput);
    }
    async removeLocation(id) {
        const deleted = await this.locationsService.remove(id);
        if (deleted.affected <= 1)
            return {
                type: ClientMessage_1.MessageTypes.success,
                message: 'Location deleted',
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
    __metadata("design:paramtypes", [location_entity_1.Location]),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "observations", null);
__decorate([
    (0, graphql_1.Mutation)(() => location_entity_1.Location),
    __param(0, (0, graphql_1.Args)('createLocationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_location_input_1.CreateLocationInput]),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "createLocation", null);
__decorate([
    (0, graphql_1.Query)(() => [location_entity_1.Location], { name: 'locations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => location_entity_1.Location, { name: 'location' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => location_entity_1.Location),
    __param(0, (0, graphql_1.Args)('updateLocationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_location_input_1.UpdateLocationInput]),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "updateLocation", null);
__decorate([
    (0, graphql_1.Mutation)(() => location_entity_1.Location),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "removeLocation", null);
LocationsResolver = __decorate([
    (0, graphql_1.Resolver)(() => location_entity_1.Location),
    __metadata("design:paramtypes", [locations_service_1.LocationsService,
        observations_service_1.ObservationsService])
], LocationsResolver);
exports.LocationsResolver = LocationsResolver;
//# sourceMappingURL=locations.resolver.js.map