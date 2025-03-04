import { Bathroom, RoomBuilder } from "@domain/room/Room.ts";
import { Room as PrismaRoom } from "@prisma/client";
import { Mapper } from "../mapper.ts";
import { UUID } from "node:crypto";

export const BathroomMapper: Mapper<Bathroom, PrismaRoom> = {
    toDb: (room: Bathroom): PrismaRoom => {
        return {
            id: room.id.toString(),
            roomType: "BATHROOM",
            bath: room.baths,
            shower: room.showers,
            toilet: room.toilets,
            sink: room.sink,
            singleBed: null,
            doubleBed: null,
            queenBed: null,
            kingBed: null,
            accommodationId: ""
        }
    },

    toDomain: (room: PrismaRoom): Bathroom => {
        return new RoomBuilder<Bathroom>()
            .setRoomType(Bathroom)
            .setId(room.id as UUID)
            .setBaths(room.bath!)  
            .setShowers(room.shower!)
            .setToilets(room.toilet!)
            .setSink(room.sink!)
            .build();
    }
}