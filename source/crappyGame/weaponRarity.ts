export class weaponRarity {
    constructor(
        private ID: number,
        private name: string,
        private ammoRegenBonus: number
    ) {}

    getID(): number {
        return this.ID;
    }

    getName(): string {
        return this.name;
    }

    getAmmoRegenBonus(): number {
        return this.ammoRegenBonus;
    }
}

/**
 * weapon rarity
 * 
 * white - common
 * green - uncommon
 * blue - rare
 * purple - legendary
 * gold - exotic
 */

export const common = Object.freeze(new weaponRarity(0, "common", 10));
export const uncommon = Object.freeze(new weaponRarity(1, "uncommon", 20));
export const rare = Object.freeze(new weaponRarity(2, "rare", 30));
export const legendary = Object.freeze(new weaponRarity(3, "legendary", 40));
export const exotic = Object.freeze(new weaponRarity(4, "exotic", 50));

export const rarities: Readonly<{ [key: string]: Readonly<weaponRarity> }> = Object.freeze({
    common,
    uncommon,
    rare,
    legendary,
    exotic
});