```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect dependency array: missing 'count'
    fetch('/api/data') //This will cause infinite loop
      .then(res => res.json())
      .then(data => {
        //Do something with the data
      });
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```