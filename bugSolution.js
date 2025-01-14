```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct dependency array: includes 'count'
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        //Do something with the data
      });
  }, [count]); // count is added as dependency

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```