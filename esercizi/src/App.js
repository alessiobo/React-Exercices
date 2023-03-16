import { Login } from "./Login";

export function App() {
  const acceptLoginHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Login onLogin={acceptLoginHandler} />
    </div>
  );
}
