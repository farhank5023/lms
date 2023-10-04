// export const formatPrice = (price: number) => {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "INR"
//   }).format(price)
// }
export const formatPrice = (price: number | null) => {
  if (price === null || price === 0) {
    return "Free";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR"
  }).format(price);
};

