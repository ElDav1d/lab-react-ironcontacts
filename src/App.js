import "./App.css";
import data from "./contacts.json";
import { useState } from "react";

function App() {
  const initialContacts = data.slice(0, 5);
  const [contacts, setContacts] = useState(initialContacts);

  console.log(contacts);

  return (
    <div className="App">
      <h1>hello world</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Emmy</th>
          <th>Won Oscar</th>
        </tr>
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
      </table>
    </div>
  );
}

export default App;
