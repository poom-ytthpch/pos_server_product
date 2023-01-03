/*
  Warnings:

  - You are about to drop the column `pay_type` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `pay_id` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Invoice` DROP FOREIGN KEY `Invoice_pay_type_fkey`;

-- AlterTable
ALTER TABLE `Invoice` DROP COLUMN `pay_type`,
    ADD COLUMN `pay_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_pay_id_fkey` FOREIGN KEY (`pay_id`) REFERENCES `Payment`(`pay_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
