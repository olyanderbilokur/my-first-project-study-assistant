import { Routes, Route } from "react-router-dom";
import Home from "./Home";

// Pages
import Tasks from "./pages/Tasks";
import Converter from "./pages/Converter";
import Theory from "./pages/Theory";
import NMT from "./pages/NMT";
import Preparation from "./pages/Preparation";

import MechanicsTasks from "./pages/tasks/MechanicsTasks";

// Theory main sections
import Mechanics from "./pages/theory/mechanics/Mechanics";
import Thermo from "./pages/theory/thermo/Thermo";
import Em from "./pages/theory/em/Em";
import Optics from "./pages/theory/optics/Optics";
import Quant from "./pages/theory/quant/Quant";
import NMTformulas from "./pages/theory/nmt-formulas/NMTformulas";
// Mechanics subsections
import Kinematics from "./pages/theory/mechanics/Kinematics";
import Dynamics from "./pages/theory/mechanics/Dynamics";
import Conservation from "./pages/theory/mechanics/Conservation";
import Oscillations from "./pages/theory/mechanics/Oscillations";
import Waves from "./pages/theory/mechanics/Waves";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preparation" element={<Preparation />} />
      <Route path="/tasks" element={<Tasks />} />

      <Route path="/tasks/mechanics" element={<MechanicsTasks />} />

      <Route path="/converter" element={<Converter />} />

      <Route path="/theory" element={<Theory />} />

      <Route path="/theory/mechanics" element={<Mechanics />} />
      <Route path="/theory/mechanics/kinematics" element={<Kinematics />} />
      <Route path="/theory/mechanics/dynamics" element={<Dynamics />} />
      <Route path="/theory/mechanics/conservation" element={<Conservation />} />
      <Route path="/theory/mechanics/oscillations" element={<Oscillations />} />
      <Route path="/theory/mechanics/waves" element={<Waves />} />

      <Route path="/theory/thermo" element={<Thermo />} />
      <Route path="/theory/em" element={<Em />} />
      <Route path="/theory/optics" element={<Optics />} />
      <Route path="/theory/quant" element={<Quant />} />
      <Route path="/theory/nmt-formulas" element={<NMTformulas />} />

      <Route path="/nmt" element={<NMT />} />
    </Routes>
  );
}
