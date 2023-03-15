-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema hackathon
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hackathon
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hackathon` DEFAULT CHARACTER SET utf8mb3 ;
USE `hackathon` ;

-- -----------------------------------------------------
-- Table `hackathon`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`category` (
  `idcategory` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `valMax` INT NULL DEFAULT NULL,
  `valMin` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idcategory`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `hackathon`.`state`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`state` (
  `idstate` INT NOT NULL AUTO_INCREMENT,
  `name` ENUM('DEEE', 'REPARABLE', 'BLOQUE', 'RECONDITIONNABLE', 'RECONDITIONNE') NOT NULL,
  `weighting` ENUM('-100%', '-50%', '-10%', '-5%', '0%', '5%', '10%') NULL,
  PRIMARY KEY (`idstate`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `hackathon`.`total`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`total` (
  `idtotal` INT NOT NULL AUTO_INCREMENT,
  `ram_value` INT NULL,
  `storage_value` INT NULL,
  `antutu_value` INT NULL,
  `total` INT NULL,
  `total_weighted` INT NULL,
  PRIMARY KEY (`idtotal`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon`.`phone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`phone` (
  `idphone` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(45) NOT NULL,
  `model` VARCHAR(255) NOT NULL,
  `category_idcategory` INT NOT NULL DEFAULT 0,
  `state_idstate` INT NOT NULL DEFAULT 0,
  `screen_size` FLOAT NOT NULL,
  `network` ENUM("2G", "3G", "4G", "5G") NOT NULL,
  `android_system` FLOAT NOT NULL,
  `antutu_indice` INT NOT NULL,
  `total_idtotal` INT NOT NULL DEFAULT 0,
  `ram` INT NOT NULL,
  `storage` INT NOT NULL,
  `antutu` INT NOT NULL,
  `url` LONGTEXT NULL,
  PRIMARY KEY (`idphone`, `category_idcategory`, `state_idstate`, `total_idtotal`),
  INDEX `fk_phone_category_idx` (`category_idcategory` ASC) VISIBLE,
  INDEX `fk_phone_state1_idx` (`state_idstate` ASC) VISIBLE,
  INDEX `fk_phone_total1_idx` (`total_idtotal` ASC) VISIBLE,
  CONSTRAINT `fk_phone_category`
    FOREIGN KEY (`category_idcategory`)
    REFERENCES `hackathon`.`category` (`idcategory`),
  CONSTRAINT `fk_phone_state1`
    FOREIGN KEY (`state_idstate`)
    REFERENCES `hackathon`.`state` (`idstate`),
  CONSTRAINT `fk_phone_total1`
    FOREIGN KEY (`total_idtotal`)
    REFERENCES `hackathon`.`total` (`idtotal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `hackathon`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(155) NOT NULL,
  `password` LONGTEXT NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
