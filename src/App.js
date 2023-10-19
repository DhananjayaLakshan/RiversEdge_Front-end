import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import Profilescreen from "./screens/Profilescreen";
import Adminscreen from "./screens/Adminscreen";
import Footer from "./components/Footer";
import Paymentscreen from "./screens/Paymentscreen";
import UpdateRoomScreen from "./screens/update/UpdateRoomScreen";
import PackagesScreen from "./screens/PackagesScreen";
import UpdatePackageScreen from "./screens/update/UpdatePackageScreen";
import UpdateServiceScreen from "./screens/update/UpdateServiceScreen";
import ServiceScreen from "./screens/ServiceScreen";
import Home from "./screens/Home";




function App() {

  const isFooterVisible = window.location.pathname !== '/admin';
  
  
  return (
    <div className="App">
      <Navbar />    
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/roomBooking" element={<Homescreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/profile" element={<Profilescreen />} />
          <Route path="/admin" element={<Adminscreen />} />

          


          
          <Route path="/service" element={<ServiceScreen />} />
          <Route path="/packages" element={<PackagesScreen />} />

          <Route path="/book/:roomid/:fromdate/:todate" element={<Bookingscreen />} />
          <Route path="/payment/:roomid/:fromdate/:todate/:totalamount/:userID/:userName/:totaldays/:email" element={<Paymentscreen />} />

          <Route path="/updateRoom/:roomid" element={<UpdateRoomScreen />} />
          <Route path="/updatePackages/:packagesID" element={<UpdatePackageScreen />} />
          <Route path="/updateServices/:servicesID" element={<UpdateServiceScreen />} />

        </Routes>
      </BrowserRouter>
  
      {/* <Footer /> */}
      {isFooterVisible && <Footer />}

    </div>
  );
}

export default App;
