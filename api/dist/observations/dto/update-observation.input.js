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
exports.UpdateObservationInput = void 0;
const create_observation_input_1 = require("./create-observation.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateObservationInput = class UpdateObservationInput extends (0, graphql_1.PartialType)(create_observation_input_1.CreateObservationInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateObservationInput.prototype, "id", void 0);
UpdateObservationInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateObservationInput);
exports.UpdateObservationInput = UpdateObservationInput;
//# sourceMappingURL=update-observation.input.js.map