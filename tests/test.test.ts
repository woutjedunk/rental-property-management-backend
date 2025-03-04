import { assertEquals, assertInstanceOf, assertThrows } from "@std/assert";  // Update with your actual path
import { randomUUID } from "node:crypto";
import { RoomBuilder, Bathroom, Bedroom, IRoom } from "@domain/room/Room.ts";  // Update with your actual path
import { getRoomMapper } from "../src/infra/mappers/room/roomMapper.registry.ts";
import { BedroomMapper } from "../src/infra/mappers/room/bedroom.mapper.ts";
import { RentalDomainAccomodationRepository } from "@persistence/accommodations/RentalDomainAccommodation.repository.ts";

Deno.test("RoomBuilder - should build a bathroom with all properties set", () => {
  // Arrange
  const id = randomUUID();
  
  // Act
  const bathroom = new RoomBuilder<Bathroom>()
    .setRoomType(Bathroom)
    .setId(id)
    .setBaths(2)
    .setShowers(1)
    .setToilets(1)
    .setSink(2)
    .build();

  // Assert
  assertInstanceOf(bathroom, Bathroom);
  assertEquals(bathroom.id, id);
  assertEquals(bathroom.baths, 2);
  assertEquals(bathroom.showers, 1);
  assertEquals(bathroom.toilets, 1);
  assertEquals(bathroom.sink, 2);
});

Deno.test("RoomBuilder - should build a bedroom with all properties set", () => {
  // Arrange
  const id = randomUUID();
  
  // Act
  const bedroom = new RoomBuilder<Bedroom>()
    .setRoomType(Bedroom)
    .setId(id)
    .setSingleBeds(1)
    .setDoubleBeds(1)
    .setQueenBeds(0)
    .setKingBeds(1)
    .build();

  // Assert
  assertInstanceOf(bedroom, Bedroom);
  assertEquals(bedroom.id, id);
  assertEquals(bedroom.singleBeds, 1);
  assertEquals(bedroom.doubleBeds, 1);
  assertEquals(bedroom.queenBeds, 0);
  assertEquals(bedroom.kingBeds, 1);
});

Deno.test("RoomBuilder - should use default values for unspecified properties", () => {
  // Arrange
  const id = randomUUID();
  
  // Act
  const bathroom = new RoomBuilder<Bathroom>()
    .setRoomType(Bathroom)
    .setId(id)
    .setBaths(1)
    // Not setting other properties
    .build();

  // Assert
  assertEquals(bathroom.baths, 1);
  assertEquals(bathroom.showers, 0); // Default
  assertEquals(bathroom.toilets, 0); // Default
  assertEquals(bathroom.sink, 0);    // Default
});

Deno.test("RoomBuilder - should throw error when ID is not provided", () => {
  // Arrange
  const builder = new RoomBuilder<Bathroom>()
    .setRoomType(Bathroom)
    .setBaths(1);


  // Act & Assert
  assertThrows(
    () => builder.build(),
    Error,
    "ID is required"
  );
});

Deno.test("RoomBuilder - should throw error when room type is not provided", () => {
  // Arrange
  const builder = new RoomBuilder<Bathroom>()
    .setId(randomUUID());

  // Act & Assert
  assertThrows(
    () => builder.build(),
    Error,
    "Room type is required"
  );
});

Deno.test("getRoomMapper should return BedroomMapper for type 'BEDROOM'", () => {
    const mapper = getRoomMapper("BEDROOM");
    assertEquals(mapper, BedroomMapper);
  });
  
  Deno.test("getRoomMapper should return BathroomMapper for type 'BATHROOM'", () => {
    const mapper = getRoomMapper("BATHROOM");
    assertEquals(mapper, BedroomMapper);
  });
  
  Deno.test("getRoomMapper should throw an error for unknown type", () => {
    assertThrows(() => {
      getRoomMapper("UNKNOWN_TYPE");
    }, Error, "Mapper for type UNKNOWN_TYPE not found");
  });

  Deno.test('testing', async () => {
    const repo = new RentalDomainAccomodationRepository();

    const iets = await repo.getAll()

    console.log(iets[0])
  })
