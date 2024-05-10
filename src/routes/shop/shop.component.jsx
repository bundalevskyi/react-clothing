import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../preview/preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import SecondaryHeader from "../navigation/SecondaryHeader.tsx/SecondaryHeader.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectIsLoading } from "../../store/categories/category.selector";

const Shop = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <>
      <SecondaryHeader />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='shopContainer'>
          <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default Shop;
