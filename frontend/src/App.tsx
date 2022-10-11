import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";

import MainContainer from "./components/desktop/mainContainer";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Loader from "./shared/loader";
import { setActiveCategory, setActiveProduct, setActiveShop } from "./store/actions/actions";
import { useAppDispatch } from "./store/store";
import { getBasket, getShopList } from "./store/thunks/thunks";
import { GlobalStyle } from "./styles/global";
const ShopList = React.lazy(() => import("./pages/shopList/ShopList"));
const Catalog = React.lazy(() => import("./pages/catalog/Catalog"));
const ProductDetail = React.lazy(() => import("./pages/productDetail/ProductDetail"));

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const shopList = useSelector(({ shops }) => shops.shopList);
    const token = localStorage.getItem("token");
    const components = {
        auth: (
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/registration"
                    element={<Registration />}
                />
                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/login"
                            replace
                        />
                    }
                />
            </Routes>
        ),
        shop: (
            <Routes>
                <Route
                    path="/shop-list"
                    element={<ShopList />}
                />
                <Route
                    path="/shop-list/:shop/:category"
                    element={<Catalog />}
                />
                <Route
                    path="/shop-list/:shop/:category/:product"
                    element={<ProductDetail />}
                />
                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/shop-list"
                            replace
                        />
                    }
                />
            </Routes>
        )
    };
    
    useEffect(() => {
        if (shopList.length === 0) {
            dispatch(getShopList());
        }
        
        dispatch(getBasket());
    }, []);
    
    console.log(token);
    
    return (
        <>
            <GlobalStyle />
            <MainContainer>
                <BrowserRouter>
                    <Suspense fallback={<Loader />}>
                        {token ? components.shop : components.auth}
                    </Suspense>
                </BrowserRouter>
            </MainContainer>
        </>
    );
};

export default App;