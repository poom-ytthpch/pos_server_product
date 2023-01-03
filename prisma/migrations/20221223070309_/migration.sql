/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `cate_id` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `cate_id` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_cate_id_fkey`;

-- AlterTable
ALTER TABLE `Category` DROP PRIMARY KEY,
    MODIFY `cate_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`cate_id`);

-- AlterTable
ALTER TABLE `Product` MODIFY `cate_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_cate_id_fkey` FOREIGN KEY (`cate_id`) REFERENCES `Category`(`cate_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
