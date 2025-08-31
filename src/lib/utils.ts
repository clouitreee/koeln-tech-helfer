import { type ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Une clases condicionales y resuelve colisiones de Tailwind.
 * Uso: cn("px-2", cond && "hidden")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
