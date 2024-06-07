export function formatCurrency(priceCents) {
  // this isno longer needed to me in case of rupee
  return (priceCents / 100).toFixed(2);
}
