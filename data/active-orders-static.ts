/** Cas statique : 3 commandes actives (3 cafés) pour démo UI / assistant IA */

export type ActiveProducerOrder = {
  id: string;
  producerName: string;
  address: string;
  detail: string;
};

export const STATIC_ACTIVE_ORDERS: ActiveProducerOrder[] = [
  {
    id: '1',
    producerName: 'Café Lavazza',
    address: 'Rue Bab El Falla, Tunis',
    detail: 'Marc de café · 2 sacs · actif',
  },
  {
    id: '2',
    producerName: 'Café des Délices',
    address: 'Avenue Habib Bourguiba, Tunis',
    detail: 'Thé usagé · 1 sac · actif',
  },
  {
    id: '3',
    producerName: 'Brasserie Le Carlton',
    address: 'Lafayette, Tunis',
    detail: 'Marc de café · 3 sacs · actif',
  },
];

/**
 * Distances routières approximatives (km) entre les 3 points d’indice 0, 1, 2 — données statiques.
 */
export const DIST_KM: number[][] = [
  [0, 2.1, 3.4],
  [2.1, 0, 2.8],
  [3.4, 2.8, 0],
];

/** Ordre optimal (indices) pour visiter les 3 cafés avec distance totale minimale (chemin ouvert). */
export function shortestPathOrder3(): { indices: [number, number, number]; legs: [number, number]; totalKm: number } {
  const orders: [number, number, number][] = [
    [0, 1, 2],
    [0, 2, 1],
    [1, 0, 2],
    [1, 2, 0],
    [2, 0, 1],
    [2, 1, 0],
  ];
  let best = orders[0];
  let bestTotal = Infinity;
  for (const p of orders) {
    const d = DIST_KM[p[0]][p[1]] + DIST_KM[p[1]][p[2]];
    if (d < bestTotal) {
      bestTotal = d;
      best = p;
    }
  }
  return {
    indices: best,
    legs: [DIST_KM[best[0]][best[1]], DIST_KM[best[1]][best[2]]],
    totalKm: Math.round(bestTotal * 10) / 10,
  };
}
