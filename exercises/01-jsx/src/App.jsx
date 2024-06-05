import Cats from "./components/Cats/Cats";
import SingleParentElement from "./components/SingleParentElement/SingleParentElement";
import Person from "./components/Person/Person";

function App() {
  return (
    <div className="text-center">
      <div className="bg-secondary text-white pt-3 pb-1">
        <Cats />
      </div>
      <div className="bg-info pt-3 pb-1">
        <SingleParentElement />
      </div>
      <div className="pt-3 pb-3">
        <Person />
      </div>
    </div>
  );
}

export default App;
