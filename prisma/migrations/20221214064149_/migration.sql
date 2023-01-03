/*
  Warnings:

  - You are about to alter the column `unit_id` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `Unit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `unit_id` on the `Unit` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_unit_id_fkey`;

-- AlterTable
ALTER TABLE `Product` MODIFY `unit_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Unit` DROP PRIMARY KEY,
    MODIFY `unit_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`unit_id`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `Unit`(`unit_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
