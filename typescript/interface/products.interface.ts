export type CatWiseRoot = Root2[]

export interface Root2 {
  cat_id: number
  slug: string
  cat_thumbnail: string
  title: string
  products: Product[]
}

export interface Product {
  product_id: number
  is_fav: string
  brand_name: string
  product_meta_data: ProductMetaDaum[]
  product_name: string
  product_slug: string
  product_date_created: ProductDateCreated
  product_date_modified: ProductDateModified
  product_status: string
  product_featured: boolean
  product_catalog_visibility: string
  product_description: string
  product_short_description: string
  product_sku: string
  product_menu_order: number
  product_virtual: boolean
  product_price: string
  product_regular_price: string
  product_sale_price: string
  product_date_on_sale_from: any
  product_date_on_sale_to: any
  product_total_sales: number
  product_tax_status: string
  product_tax_class: string
  product_manage_stock: boolean
  product_stock_quantity: any
  product_stock_status: string
  product_backorders: string
  product_sold_individually: boolean
  product_purchase_note: string
  product_shipping_class_id: number
  product_weight: string
  product_length: string
  product_width: string
  product_height: string
  product_dimensions: string
  product_upsell_ids: any[]
  product_cross_sell_ids: any[]
  product_parent_id: number
  product_children: any[]
  product_attributes: any
  product_default_attributes: any[]
  product_attribute: string
  product_categories: string
  product_category_ids: number[]
  product_tag_ids: number[]
  product_downloads: any[]
  product_download_expiry: number
  product_downloadable: boolean
  product_download_limit: number
  product_image_id: string
  product_image: string
  product_image_src: string
  product_gallery_image_ids: number[]
  product_reviews_allowed: boolean
  product_rating_counts: any[]
  product_average_rating: string
  product_review_count: number
  product_link: string
}

export interface ProductMetaDaum {
  id: number
  key: string
  value: any
}

export interface ProductDateCreated {
  date: string
  timezone_type: number
  timezone: string
}

export interface ProductDateModified {
  date: string
  timezone_type: number
  timezone: string
}