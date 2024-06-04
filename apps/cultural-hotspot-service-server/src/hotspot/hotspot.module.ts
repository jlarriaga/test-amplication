import { Module } from "@nestjs/common";
import { HotspotModuleBase } from "./base/hotspot.module.base";
import { HotspotService } from "./hotspot.service";
import { HotspotController } from "./hotspot.controller";
import { HotspotResolver } from "./hotspot.resolver";

@Module({
  imports: [HotspotModuleBase],
  controllers: [HotspotController],
  providers: [HotspotService, HotspotResolver],
  exports: [HotspotService],
})
export class HotspotModule {}
