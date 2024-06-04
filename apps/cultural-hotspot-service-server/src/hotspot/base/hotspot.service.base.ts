/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Hotspot as PrismaHotspot } from "@prisma/client";

export class HotspotServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.HotspotCountArgs, "select">): Promise<number> {
    return this.prisma.hotspot.count(args);
  }

  async hotspots<T extends Prisma.HotspotFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HotspotFindManyArgs>
  ): Promise<PrismaHotspot[]> {
    return this.prisma.hotspot.findMany<Prisma.HotspotFindManyArgs>(args);
  }
  async hotspot<T extends Prisma.HotspotFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HotspotFindUniqueArgs>
  ): Promise<PrismaHotspot | null> {
    return this.prisma.hotspot.findUnique(args);
  }
  async createHotspot<T extends Prisma.HotspotCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HotspotCreateArgs>
  ): Promise<PrismaHotspot> {
    return this.prisma.hotspot.create<T>(args);
  }
  async updateHotspot<T extends Prisma.HotspotUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HotspotUpdateArgs>
  ): Promise<PrismaHotspot> {
    return this.prisma.hotspot.update<T>(args);
  }
  async deleteHotspot<T extends Prisma.HotspotDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HotspotDeleteArgs>
  ): Promise<PrismaHotspot> {
    return this.prisma.hotspot.delete(args);
  }
}