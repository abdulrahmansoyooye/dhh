import { Module } from "@nestjs/common";
import { HealthContoller } from "./health.controller.js";

@Module({
    controllers:[HealthContoller]
})

export class HealthModule{}