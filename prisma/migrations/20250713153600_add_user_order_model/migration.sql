-- CreateTable
CREATE TABLE `UserOrder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderID` VARCHAR(191) NULL,
    `userID` VARCHAR(191) NOT NULL,
    `productID` VARCHAR(191) NOT NULL,
    `productName` VARCHAR(191) NOT NULL,
    `productPrice` INTEGER NOT NULL,
    `productColor` VARCHAR(191) NOT NULL,
    `productSize` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `primaryImageSize` VARCHAR(191) NULL,
    `secondaryImageSize` VARCHAR(191) NULL,
    `productFrontPath` VARCHAR(191) NOT NULL,
    `productBackPath` VARCHAR(191) NOT NULL,
    `uploadedImagePrimary` VARCHAR(191) NULL,
    `uploadedImageSecondary` VARCHAR(191) NULL,
    `status` ENUM('Placed', 'Confirmed', 'Delivered', 'Cancelled', 'Returned', 'Processing') NOT NULL DEFAULT 'Placed',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserOrder` ADD CONSTRAINT `UserOrder_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
