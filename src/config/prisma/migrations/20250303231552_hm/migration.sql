-- CreateEnum
CREATE TYPE "AccommodationType" AS ENUM ('STANDALONE', 'DOMAIN_ACC');

-- CreateEnum
CREATE TYPE "RoomType" AS ENUM ('BATHROOM', 'BEDROOM');

-- CreateTable
CREATE TABLE "Accommodation" (
    "id" UUID NOT NULL,
    "accommodationOwner" VARCHAR(100) NOT NULL,
    "accommodationName" VARCHAR(100) NOT NULL,
    "storage" VARCHAR(100) NOT NULL,
    "accommodationType" "AccommodationType" NOT NULL,
    "country" VARCHAR(100),
    "city" VARCHAR(100),
    "street" VARCHAR(100),
    "zipcode" VARCHAR(15),
    "houseNumber" VARCHAR(15),
    "busNumber" VARCHAR(15),
    "rentalDomainId" UUID,
    "location" TEXT,

    CONSTRAINT "Accommodation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentalDomain" (
    "id" UUID NOT NULL,
    "domainOwner" VARCHAR(100) NOT NULL,
    "domainName" VARCHAR(100) NOT NULL,
    "country" VARCHAR(100),
    "city" VARCHAR(100),
    "street" VARCHAR(100),
    "zipcode" VARCHAR(15),
    "houseNumber" VARCHAR(15),
    "busNumber" VARCHAR(15),

    CONSTRAINT "RentalDomain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" UUID NOT NULL,
    "roomType" "RoomType" NOT NULL,
    "sink" INTEGER,
    "toilet" INTEGER,
    "shower" INTEGER,
    "bath" INTEGER,
    "singleBed" INTEGER,
    "doubleBed" INTEGER,
    "queenBed" INTEGER,
    "kingBed" INTEGER,
    "accommodationId" UUID NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Accommodation" ADD CONSTRAINT "Accommodation_rentalDomainId_fkey" FOREIGN KEY ("rentalDomainId") REFERENCES "RentalDomain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "Accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
