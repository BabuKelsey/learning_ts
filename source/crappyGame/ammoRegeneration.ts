import { Weapon } from "./weaponClass";

export function ammoRegeneration(weapon: Weapon) : number {
    let baseAmmoRegenRate = weapon.getBaseAmmoRegeneration();
    let rarity = weapon.getRarity(); // This is already a weaponRarity instance

    let rarityBonus = rarity.getAmmoRegenBonus(); // Directly use rarity
    let totalAmmoRegen = baseAmmoRegenRate * rarityBonus;

    return totalAmmoRegen;
}