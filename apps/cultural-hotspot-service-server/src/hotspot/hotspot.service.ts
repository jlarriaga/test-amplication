import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HotspotServiceBase } from "./base/hotspot.service.base";

@Injectable()
export class HotspotService extends HotspotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
