import { type CharacterDataStructure } from "../../types/types";
import { Fighter } from "../../characterClasses/Fighter/Fighter";
import { Advisor } from "../../characterClasses/Advisor/Advisor";
import { Squire } from "../../characterClasses/Squire/Squire";
import { King } from "../../characterClasses/King/King";

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "../img/joffrey.jpg",
};

const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "../img/jaime.jpg",
};

const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "../img/daenerys.jpg",
};

const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "../img/tyrion.jpg",
};

const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "../img/bronn.jpg",
};

export const joffrey: King = new King(joffreyData, 2);
export const jaime = new Fighter(jaimeData, "sword", 7);
export const daenerys = new Fighter(daeneryseData, "Dragons", 10);
export const tyrion = new Advisor(tyrionData, daenerys);
export const bronn = new Squire(bronnData, 0, jaime);
