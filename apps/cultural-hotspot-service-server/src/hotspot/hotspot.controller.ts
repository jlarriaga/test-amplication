import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HotspotService } from "./hotspot.service";
import { HotspotControllerBase } from "./base/hotspot.controller.base";

@swagger.ApiTags("hotspots")
@common.Controller("hotspots")
export class HotspotController extends HotspotControllerBase {
  constructor(protected readonly service: HotspotService) {
    super(service);
  }
}
