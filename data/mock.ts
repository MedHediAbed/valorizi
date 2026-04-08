export const demands = [
  { id: 1, waste_type: 'coffee', quantity: 20, date: '2026-04-10' },
  { id: 2, waste_type: 'tea', quantity: 12, date: '2026-04-11' },
];

export const offers = [
  { id: 1, label: 'Producteur #1', quantity: 15, price: 0.8, availability: "Aujourd'hui" },
  { id: 2, label: 'Producteur #2', quantity: 20, price: 0.75, availability: 'Demain matin' },
  { id: 3, label: 'Producteur #3', quantity: 10, price: 0.7, availability: 'Ce soir' },
];

export const notifications = [
  { id: 1, text: 'Nouvelle demande disponible' },
  { id: 2, text: 'Votre offre a ete acceptee' },
];

export const mission = {
  from: 'Point A - Cafe de la Ville',
  to: 'Point B - Green Valor',
  code: '4829',
  steps: ['Assigned', 'Picked up', 'Delivered'],
};
