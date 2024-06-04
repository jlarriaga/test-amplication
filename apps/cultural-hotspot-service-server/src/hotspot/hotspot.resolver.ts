import * as graphql from "@nestjs/graphql";
import { HotspotResolverBase } from "./base/hotspot.resolver.base";
import { Hotspot } from "./base/Hotspot";
import { HotspotService } from "./hotspot.service";

@graphql.Resolver(() => Hotspot)
export class HotspotResolver extends HotspotResolverBase {
  constructor(protected readonly service: HotspotService) {
    super(service);
  }
}
