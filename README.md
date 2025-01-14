# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an incorrect dependency array, leading to an infinite loop of re-renders.

## Bug Description
The `MyComponent` component fetches data from an API using `useEffect`. However, the dependency array is empty (`[]`), causing the effect to run on every render.  Since the effect triggers a state update (implicitly, by fetching data), this creates a cycle of continuous re-rendering.

## Bug Solution
The solution involves adding `count` to the dependency array.  This ensures that the effect only runs when the `count` value changes, breaking the infinite loop.

## How to Reproduce
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite loop in the browser's console.
