export interface OrderItem {
  id: string;
  name: string;
  type: string;
  price: number;
  quantity: number;
  image: string;
}

export interface DeliveryAddress {
  street: string;
  detail: string;
}

export interface PaymentSummary {
  price: number;
  deliveryFee: number;
  discount: number;
  total: number;
}
