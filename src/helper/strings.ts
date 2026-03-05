// string.ts
import En from '../assets/lang/En'
import Mr from '../assets/lang/Mr'

const STORAGE_KEY = "app_lang";

export type LangType = "en" | "mr";

// Load selected language from storage (default: English)
export function getCurrentLang(): LangType {
  //return (localStorage.getItem(STORAGE_KEY) as LangType) || "en";
  return "en"; // default to English for now, as we are not using the toggle button
}

// Save new language choice
export function setLang(lang: LangType) {
  localStorage.setItem(STORAGE_KEY, lang);
  window.location.reload(); // reload to apply strings everywhere
}

// Return correct language strings object
export const strings = getCurrentLang() === "mr" ? Mr : En;