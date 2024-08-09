// src/utils/utils.ts

import { Pokemon } from "../interfaces/global.interfaces";

export function isNotNullOrUndefined(obj: Pokemon | null): boolean {
  return obj !== null && obj !== undefined;
}