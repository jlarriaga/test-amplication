/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Hotspot } from "./Hotspot";
import { HotspotCountArgs } from "./HotspotCountArgs";
import { HotspotFindManyArgs } from "./HotspotFindManyArgs";
import { HotspotFindUniqueArgs } from "./HotspotFindUniqueArgs";
import { DeleteHotspotArgs } from "./DeleteHotspotArgs";
import { HotspotService } from "../hotspot.service";
@graphql.Resolver(() => Hotspot)
export class HotspotResolverBase {
  constructor(protected readonly service: HotspotService) {}

  async _hotspotsMeta(
    @graphql.Args() args: HotspotCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Hotspot])
  async hotspots(
    @graphql.Args() args: HotspotFindManyArgs
  ): Promise<Hotspot[]> {
    return this.service.hotspots(args);
  }

  @graphql.Query(() => Hotspot, { nullable: true })
  async hotspot(
    @graphql.Args() args: HotspotFindUniqueArgs
  ): Promise<Hotspot | null> {
    const result = await this.service.hotspot(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Hotspot)
  async deleteHotspot(
    @graphql.Args() args: DeleteHotspotArgs
  ): Promise<Hotspot | null> {
    try {
      return await this.service.deleteHotspot(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
