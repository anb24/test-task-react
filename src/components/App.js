import { Routes, Route, } from "react-router-dom";

import EventsPage from "./EventsPage";
import CreatePage from "./CreatePage";
import NotfoundPage from "./NotfoundPage";

function App() {

  return (
      <div className="App">
          <Routes>
              <Route exact path="/" element={<EventsPage/>}/>
              <Route path="/create" element={<CreatePage/>}/>
              <Route path="*" element={<NotfoundPage/>}/>
          </Routes>
      </div>
  );
}

export default App;
