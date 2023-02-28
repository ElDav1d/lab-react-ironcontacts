import "./App.css";
import data from "./contacts.json";
import { useState } from "react";

function App() {
  const initialContacts = data.slice(0, 5);
  const [contacts, setContacts] = useState(initialContacts);
  const [isContactsLeft, setIsContactsLeft] = useState(true);

  const getRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * data.length);

    return data[randomIndex];
  };

  const handleAddMore = () => {
    if (contacts.length === data.length) {
      setIsContactsLeft(false);
      return;
    }

    const newContact = getRandomContact();

    const isRepeatedContact = contacts.some(
      (contact) => newContact.id === contact.id
    );

    if (isRepeatedContact) {
      console.log("recursion");
      handleAddMore();
      return;
    }

    setContacts([newContact, ...contacts]);
  };

  const handleSortName = () => {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setContacts(sortedContacts);
  };

  const handleSortPopular = () => {
    const sortedContacts = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );

    setContacts(sortedContacts);
  };

  return (
    <div className="App">
      <h1>MY CONTACTS</h1>
      <button onClick={handleAddMore} disabled={!isContactsLeft}>
        ADD MORE
      </button>
      <div>
        <button onClick={handleSortName}>SORT BY NAME</button>
        <button onClick={handleSortPopular}>SORT BY POPULARITY</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Emmy</th>
            <th>Won Oscar</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={`a picture of ${contact.name}`}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonEmmy && "🏆"}</td>
              <td>{contact.wonOscar && "🏆"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
