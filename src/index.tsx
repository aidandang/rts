import ReactDOM from "react-dom";
// import GuestList from "./states/GuestList";
import UserSearch from "./refs/UserSearch";
// import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      <UserSearch />
      {/* <EventComponent /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
