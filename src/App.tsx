import { Enrolled } from "./pages/Enrolled";
import ReferAndEarn from "./pages/ReferAndEarn"
import { Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<ReferAndEarn/>} />
          <Route path="/enrolled-friends" element={<Enrolled/>} />
      </Routes>
    </>
  )
}

export default App
