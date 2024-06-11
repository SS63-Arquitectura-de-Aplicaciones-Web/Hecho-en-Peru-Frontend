import { LocalCraftsman } from "../../local-craftsmen/models/local-craftsman";
import { Category } from "./category";

export interface Product {
  id: string;
  name: string;
  category: Category;
  localCraftsman: LocalCraftsman;
  price: number;
  image: string;
  availability: boolean;
  stock: number;
  averageRating: number;
  history: string;
  details: string;
  enabled: boolean;
}
