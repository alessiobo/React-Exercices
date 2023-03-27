import useCounter from './UseCounter';

export function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
