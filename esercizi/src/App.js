import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <Counter value={2} interval={2000} amount={3} />
    </div>
  );
}
