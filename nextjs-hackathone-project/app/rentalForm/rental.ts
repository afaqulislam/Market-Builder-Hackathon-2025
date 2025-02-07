export interface CarDetails {
    id: string;
    name: string;
    image: string;
    price: number;
    rating: number;
    reviews: number;
}

export interface BillingInfo {
    name: string;
    phone: string;
    address: string;
    city: string;
}

export interface RentalInfo {
    pickupLocation: string;
    pickupDate: string;
    pickupTime: string;
    dropoffLocation: string;
    dropoffDate: string;
    dropoffTime: string;
}

export interface PaymentInfo {
    method: 'credit-card' | 'paypal' | 'bitcoin';
    cardNumber?: string;
    expirationDate?: string;
    cardHolder?: string;
    cvc?: string;
}

export interface RentalFormData {
    billingInfo: BillingInfo;
    rentalInfo: RentalInfo;
    paymentInfo: PaymentInfo;
    marketingConsent: boolean;
    termsConsent: boolean;
}

