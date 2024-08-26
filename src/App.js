import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import { LoginPage } from "./login/login.js";
import { HodDashboardPage } from "./dashboard/hod-dashboard.js"

function App() {
  return (
    <div class="">
      <BrowserRouter basename={`/`}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Navigate to={'/login'} />} />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route path="/dashboard" element={<HodDashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
