import { Routes, Route } from "react-router-dom";

import EventsPage from "./EventsPage";
import CreatePage from "./CreatePage";

function App() {

  return (
      <div className="App">
          <Routes>
              <Route exact path="/" element={<EventsPage/>}/>
              <Route path="/create" element={<CreatePage/>}/>
          </Routes>
      </div>
  );
}

export default App;
