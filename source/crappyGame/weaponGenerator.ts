import { Weapon } from "./weaponClass.js";
import { rarities } from "./weaponRarity.js";
import { ammoRegeneration } from "./ammoRegeneration.js";

// Define types for HTML elements
const weaponForm = document.getElementById("weaponForm") as HTMLFormElement;
const weaponNameInput = document.getElementById("weaponName") as HTMLInputElement;
const weaponRaritySelect = document.getElementById("weaponRarity") as HTMLSelectElement;
const baseAmmoRegenInput = document.getElementById("baseAmmoRegen") as HTMLInputElement;
const weaponOutput = document.getElementById("weaponOutput") as HTMLElement;

weaponForm.addEventListener("submit", function (event: Event): void {
    event.preventDefault();

    // Get user input
    const weaponName: string = weaponNameInput.value;
    const weaponRarity: string = weaponRaritySelect.value;
    const baseAmmoRegen: number = parseInt(baseAmmoRegenInput.value || "0", 10);
    console.log(`Generating weapon: ${weaponName}, Rarity: ${weaponRarity}, Base Ammo Regen: ${baseAmmoRegen}`);

    // Map rarity string to rarities enum
    const rarityEnum = rarities[weaponRarity as keyof typeof rarities];

    // Generate a new weapon
    const newWeapon = new Weapon(Date.now(), weaponName, rarityEnum, baseAmmoRegen);

    // Calculate ammo regeneration
    const ammoRegen = ammoRegeneration(newWeapon);

    // Display the generated weapon
    const output = `ID: ${newWeapon.getID()}\nWeapon Name: ${newWeapon.getName()}\nRarity: ${weaponRarity}\nAmmo Regeneration: ${ammoRegen}`;
    weaponOutput.textContent = output;
});