/*
  Warnings:

  - Added the required column `forgotPasswordToken` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `forgotPasswordTokenExpiry` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verifyToken` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verifyTokenExpiry` to the `UserDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `userdetails` ADD COLUMN `forgotPasswordToken` VARCHAR(255) NOT NULL,
    ADD COLUMN `forgotPasswordTokenExpiry` DATETIME NOT NULL,
    ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isVerfied` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `userName` VARCHAR(255) NOT NULL,
    ADD COLUMN `verifyToken` VARCHAR(255) NOT NULL,
    ADD COLUMN `verifyTokenExpiry` DATETIME NOT NULL;
