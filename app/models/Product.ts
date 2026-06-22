export interface Product {
  id: string // Unique identifier for the product can be a string or number depending on your data source
  title: string
  description: string
  category: string
  price: string // Price as a string to include currency symbols, e.g., "$19.99"
  discountPercentage?: number
  rating?: number
  stock?: number
  tags?: string[]
  brand: string
  sku?: string
  weight?: number
  dimensions?: Dimensions
  warrantyInformation?: string
  shippingInformation?: string
  availabilityStatus?: string
  reviews?: Review[]
  returnPolicy?: string
  minimumOrderQuantity?: number
  meta?: Meta
  images?: string[]
  thumbnail: string
  isNew?: boolean
}

export interface Dimensions {
  width: number
  height: number
  depth: number
}

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface Meta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}


