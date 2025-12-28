import { ammoRegeneration } from "./ammoRegeneration.js";
import { Weapon } from "./weaponClass.js";
import { rarities } from "./weaponRarity.js";

let recluse = new Weapon(0, "recluse", rarities.legendary, 50);
let soltice = new Weapon(1, "solstice", rarities.exotic, 80);

let recluseAmmoRegen = ammoRegeneration(recluse);
let solsticeAmmoRegen = ammoRegeneration(soltice);

console.log(`Recluse Ammo Regeneration Rate: ${recluseAmmoRegen}`);
console.log(`Solstice Ammo Regeneration Rate: ${solsticeAmmoRegen}`);