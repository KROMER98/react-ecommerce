export function totalPrice(data: any) {
  return data.reduce((a: number, b: any) => (a = a + b.qte * b.price), 0);
}
