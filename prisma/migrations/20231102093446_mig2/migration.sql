/*
  Warnings:

  - You are about to drop the column `forgotPasswordToken` on the `userdetails` table. All the data in the column will be lost.
  - You are about to drop the column `forgotPasswordTokenExpiry` on the `userdetails` table. All the data in the column will be lost.
  - You are about to drop the column `verifyToken` on the `userdetails` table. All the data in the column will be lost.
  - You are about to drop the column `verifyTokenExpiry` on the `userdetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `userdetails` DROP COLUMN `forgotPasswordToken`,
    DROP COLUMN `forgotPasswordTokenExpiry`,
    DROP COLUMN `verifyToken`,
    DROP COLUMN `verifyTokenExpiry`;
