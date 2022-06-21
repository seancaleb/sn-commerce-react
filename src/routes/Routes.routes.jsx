import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from "../components";
import { Cart, Favorites, Home, Product, Register, Shop } from "../pages";
import NavbarAuth from "../components/Navbar/NavbarAuth.component";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {/* With nav  */}
          <Route element={<WithNav />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/shop/:productLink" element={<Product />} />
            <Route exact path="/favorites" element={<Favorites />} />
            <Route exact path="/cart" element={<Cart />} />
          </Route>

          {/* Without nav  */}
          <Route element={<WithoutNav />}>
            <Route exact path="/register" element={<Register />} />
          </Route>

          {/* 404 routes redirect to Homepage  */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default MyRoutes;

function WithNav() {
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.isAuthenticated ? <NavbarAuth /> : <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
}

function WithoutNav() {
  return <Outlet />;
}

// function RequireAuth({ children }) {
//   const location = useLocation();
//   const user = useSelector((state) => state.user);

//   if (!user.user && !user.isAuthenticated) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   } else {
//     return children;
//   }
// }
