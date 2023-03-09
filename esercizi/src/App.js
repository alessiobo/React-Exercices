import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <Counter value={5} interval={2000} amount={5} />
    </div>
  );
}
