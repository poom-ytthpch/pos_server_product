-- CreateTable
CREATE TABLE `Category` (
    `cate_id` VARCHAR(191) NOT NULL,
    `cate_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cate_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Unit` (
    `unit_id` VARCHAR(191) NOT NULL,
    `unit_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`unit_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `p_id` VARCHAR(191) NOT NULL,
    `p_name` VARCHAR(191) NOT NULL,
    `p_image` VARCHAR(191) NOT NULL,
    `cate_id` VARCHAR(191) NOT NULL,
    `p_status` BOOLEAN NOT NULL,
    `unit_id` VARCHAR(191) NOT NULL,
    `unit_in_stock` DOUBLE NOT NULL,
    `unit_price` DOUBLE NOT NULL,
    `cost_price` DOUBLE NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`p_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `pay_id` VARCHAR(191) NOT NULL,
    `pay_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`pay_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invoice` (
    `inv_id` VARCHAR(191) NOT NULL,
    `pay_type` VARCHAR(191) NOT NULL,
    `total_amount` DOUBLE NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`inv_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SalesType` (
    `sale_type_id` VARCHAR(191) NOT NULL,
    `sale_type_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`sale_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sales` (
    `sales_id` VARCHAR(191) NOT NULL,
    `sales_type_id` VARCHAR(191) NOT NULL,
    `inv_id` VARCHAR(191) NOT NULL,
    `p_id` VARCHAR(191) NOT NULL,
    `qty` DOUBLE NOT NULL,
    `unit_price` DOUBLE NOT NULL,

    PRIMARY KEY (`sales_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_cate_id_fkey` FOREIGN KEY (`cate_id`) REFERENCES `Category`(`cate_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `Unit`(`unit_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_pay_type_fkey` FOREIGN KEY (`pay_type`) REFERENCES `Payment`(`pay_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_sales_type_id_fkey` FOREIGN KEY (`sales_type_id`) REFERENCES `SalesType`(`sale_type_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_inv_id_fkey` FOREIGN KEY (`inv_id`) REFERENCES `Invoice`(`inv_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_p_id_fkey` FOREIGN KEY (`p_id`) REFERENCES `Product`(`p_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
