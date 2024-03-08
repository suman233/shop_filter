export interface CategoryRoot {
  code: string;
  status: boolean;
  message: string;
  all_category_dtls: AllCategoryDtl[];
}

export interface AllCategoryDtl {
  cat_id: number;
  slug: string;
  title: string;
  cat_thumbnail: string;
}
