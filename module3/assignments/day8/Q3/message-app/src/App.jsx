import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div>
      <h2>Reusable Message Cards</h2>

      <MessageCard
        title="Welcome"
        message="Welcome to the React props example."
      />

      <MessageCard
        title="Reminder"
        message="Don't forget to submit your assignment."
      />

      <MessageCard
        title="Update"
        message="Props make components reusable."
      />

      <MessageCard
        title="Success"
        message="You have learned reusable components!"
      />
    </div>
  );
}

export default App;
