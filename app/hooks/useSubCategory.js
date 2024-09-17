import { useEffect, useState } from "react";
import {
  getSingleSubCategory,
  getSubCategories,
  getSubCategoriesByCategoryId,
} from "../utils/GetSubCategories";

export function useSubCategorys(CategoryId, id) {
  const [subCategory, setSubCategory] = useState([]);
  const [loadingSubCat, setLoadingSubCat] = useState(false);
  const [CategoryService, setCategoryService] = useState([]);
  const [loadingCatService, setLoadingCatService] = useState(false);
  const [singleSubCategory, setSingleSubCategory] = useState([]);
  const [loadingSingleCategory, setLoadingSingleCategory] = useState(false);

  // if error
  const [error, setError] = useState([]);

  async function fetchSubCategory() {
    try {
      const response = await getSubCategories();
      setSubCategory(response.data);
      setLoadingSubCat(false);
    } catch (error) {
      console.log("Error in fetching subcategory", error);
    }
  }

  async function fetchSingleSubCategory() {
    if (!id) return; // Ensure the id is defined before making the request
    setLoadingSingleCategory(true); // Start loading
    try {
      const response = await getSingleSubCategory(id);
      setSingleSubCategory(response.data);
      setLoadingSingleCategory(false); // End loading
    } catch (error) {
      console.log("Error in fetching single category", error);
      setLoadingSingleCategory(false); // End loading on error
    }
  }

  async function fetchCategoryServices() {
    if (!CategoryId) return; // Ensure the CategoryId is defined before making the request
    setLoadingCatService(true); // Start loading
    try {
      const response = await getSubCategoriesByCategoryId(CategoryId);
      setCategoryService(response.data);
      setLoadingCatService(false); // End loading
    } catch (error) {
      console.log("Error in fetching category services", error.response.data);
      setLoadingCatService(false); // End loading on error
      setError(error.response.data);
    }
  }

  useEffect(() => {
    fetchSubCategory(); // Fetch all subcategories
    if (CategoryId) {
      fetchCategoryServices(); // Fetch category services only if CategoryId is present
    }
    if (id !== "" || id !== undefined) {
      fetchSingleSubCategory(); // Fetch single subcategory only if id is present
    }
  }, [id, CategoryId]); // Dependencies: re-run when id or CategoryId changes

  return {
    subCategory,
    loadingSubCat,
    CategoryService,
    loadingCatService,
    singleSubCategory,
    loadingSingleCategory,
    error,
  };
}
