import { UncontrolledLogin } from "./UncontrolledLogin";

export function App() {
  const acceptLoginHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <UncontrolledLogin onLogin={acceptLoginHandler} />
    </div>
  );
}
