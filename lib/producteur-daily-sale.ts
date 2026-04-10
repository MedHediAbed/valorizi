/** Dernière vente du jour (clé YYYY-MM-DD). Persiste pendant la session d’app. */
let lastSaleDay: string | null = null;

export function canSellToday(): boolean {
  const t = new Date().toISOString().slice(0, 10);
  return lastSaleDay !== t;
}

export function recordSaleToday(): void {
  lastSaleDay = new Date().toISOString().slice(0, 10);
}

export function getLastSaleDayForDebug(): string | null {
  return lastSaleDay;
}
