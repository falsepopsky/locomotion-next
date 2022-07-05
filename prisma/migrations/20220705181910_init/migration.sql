-- CreateTable
CREATE TABLE "Information" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "sinopsis" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Shows" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "starts" TEXT NOT NULL,
    "ends" TEXT NOT NULL,
    "showId" INTEGER NOT NULL,
    CONSTRAINT "Shows_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Information" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Day" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "day" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DayToShows" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DayToShows_A_fkey" FOREIGN KEY ("A") REFERENCES "Day" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DayToShows_B_fkey" FOREIGN KEY ("B") REFERENCES "Shows" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Information_name_key" ON "Information"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_DayToShows_AB_unique" ON "_DayToShows"("A", "B");

-- CreateIndex
CREATE INDEX "_DayToShows_B_index" ON "_DayToShows"("B");
