import { Bedroom, RoomBuilder } from "@domain/room/Room.ts";
import { Room as PrismaRoom } from "@prisma/client";
import { UUID } from "node:crypto";
import { Mapper } from "../mapper.ts";

export const BedroomMapper: Mapper<Bedroom, PrismaRoom> = {

    toDb: (room: Bedroom): PrismaRoom => {
        return {
            id: room.id.toString(),
            roomType: "BEDROOM",
            bath: null,
            shower: null,
            toilet: null,
            sink: null,
            singleBed: room.singleBeds,
            doubleBed: room.doubleBeds,
            queenBed: room.queenBeds,
            kingBed: room.kingBeds,
            accommodationId: ""
        }
    },

    toDomain: (room: PrismaRoom): Bedroom => {
        return new RoomBuilder<Bedroom>()
            .setRoomType(Bedroom)
            .setId(room.id as UUID)
            .setSingleBeds(room.singleBed!)  
            .setDoubleBeds(room.doubleBed!)
            .setQueenBeds(room.queenBed!)
            .setKingBeds(room.kingBed!)
            .build();
    }
}