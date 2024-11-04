import { User } from "../types";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import UserCard from "./UserCard";

const App = () => { //c'est une fonction (basique) arrow
  const title = "Welcome to My App";

  const users: User[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  const footerText = "© 2023 My App";

  //le return est l'équivalent du render --> c'est ce qu'on va voir à l'ecran
  return ( //on appelle ça du TSX (melange de typeScript, JavaScript, HTML)
    <div>
      <PageTitle title={title} />
      {users.map((user) => (
        <UserCard user={user} />
      ))}
      <Footer text={footerText} />
    </div>
  );
};

export default App;