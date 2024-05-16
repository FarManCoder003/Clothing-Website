import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Shop from "./pages/Shop";
import ProductDetails from "./components/ProductDetails";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/shop/:id" element={<ProductDetails />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
