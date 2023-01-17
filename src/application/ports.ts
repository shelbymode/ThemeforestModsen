// export interface UserStorageService {
//   user?: User;
//   updateUser(user: User): void;
// }

/* export interface CartStorageService {
  cart: Cart
  updateCart(cart: Cart): void
  emptyCart(): void
} */

// export interface OrdersStorageService {
//   orders: Order[];
//   updateOrders(orders: Order[]): void;
// }

// export interface AuthenticationService {
//   auth(name: UserName, email: Email): Promise<User>;
// }

// export interface NotificationService {
//   notify(message: string): void;
// }

export type TPaymentData = {
  currencyCode: TCurrencyCode
  totalPrice: string
  items: {
    name: string
    description: string
    price: string
    quantity: string
  }[]
}

export interface IPaymentService {
  generatePaymentUI(paymentData: TPaymentData, idAttachDOM: string): Promise<void>
}
