# React Native: Handling Undefined State Properties

This repository demonstrates a common error in React Native applications: attempting to access a state property before it has been initialized. The error, typically manifesting as `TypeError: undefined is not an object (evaluating 'state.user.name')`, occurs when dealing with asynchronous data fetching or component lifecycle inconsistencies.

The `bug.js` file shows the problematic code, while `bugSolution.js` presents the corrected version.  The solution focuses on using optional chaining or conditional rendering to gracefully handle the situation where the state variable is still undefined. 