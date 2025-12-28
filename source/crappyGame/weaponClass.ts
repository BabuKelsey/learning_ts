import { weaponRarity } from "./weaponRarity.js";

export class Weapon {
    constructor(
        private ID: number,
        private name: string,
        private rarity: Readonly<weaponRarity>, // Accept Readonly<weaponRarity>
        private baseAmmoRegeneration: number
        // add a ammotype later as another class-object "primary", "special", "heavy"
    ) {}

    // getters and setters
    getName(): string {
        return this.name;
    }
    
    getRarity(): Readonly<weaponRarity> { // Return Readonly<weaponRarity>
        return this.rarity;
    }

    getBaseAmmoRegeneration(): number {
        return this.baseAmmoRegeneration;
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