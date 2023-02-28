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
        </tr>
        {contacts.map((contact) => (
          <tr>
            <td>
              <img
                src={contact.pictureUrl}
                alt={`a picture of ${contact.name}`}
              />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
