import "./App.css";
import Card from "./Card";
import contacts from "./contacts";

const createCard = ({ id, title, email, imgURL, phone }) => {
  return <Card key={id} name={title} img={imgURL} tel={phone} email={email} />;
};

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
