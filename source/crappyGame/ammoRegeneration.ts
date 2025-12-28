import { Weapon } from "./weaponClass.js";

export function ammoRegeneration(weapon: Weapon) : number {
    return weapon.getBaseAmmoRegeneration() * weapon.getRarity().getAmmoRegenBonus();
}