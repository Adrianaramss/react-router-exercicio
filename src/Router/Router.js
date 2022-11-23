import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage  from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ProfileProduto from "../pages/ProfilePage";


const Router = () => {
    return (
<BrowserRouter>
<Routes>
    <Route index element = {<HomePage/>}/>
    <Route path="./profile/name" element = {<ProfilePage/>}/>
    <Route path="./profile/dog" element = {<ProfileProduto/>}/>

</Routes>
</BrowserRouter>


    )
}
export default Router;

