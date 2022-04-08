export function totalProductCart(data: any) {
  return data.reduce((a: number, b: any) => (a = a + b.qte), 0);
}
