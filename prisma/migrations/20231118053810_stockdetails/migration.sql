-- CreateTable
CREATE TABLE `StockDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stockName` VARCHAR(255) NOT NULL,
    `stockPrice` VARCHAR(10) NOT NULL,
    `dayHigh` VARCHAR(10) NOT NULL,
    `dayLow` VARCHAR(10) NOT NULL,
    `yearHigh` VARCHAR(10) NOT NULL,
    `yearLow` VARCHAR(10) NOT NULL,
    `peRatio` VARCHAR(10) NOT NULL,
    `earningPerShare` VARCHAR(10) NOT NULL,
    `stockStatus` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
