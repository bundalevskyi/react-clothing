import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../preview/preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SecondaryHeader from "../navigation/SecondaryHeader.tsx/SecondaryHeader.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.reducer";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <>
      <SecondaryHeader />
      <div className='shopContainer'>
        <Routes>
          <Route index element={<CategoriesPreview />} />
          <Route path=':category' element={<Category />} />
        </Routes>
      </div>
    </>
  );
};

export default Shop;
