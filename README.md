# Error Boundary & Error Handling
# `componentDidCatch(error, info)`
- If you define `componentDidCatch`, React will call it when some child component (including distant children) throws an error during rendering. This lets you log that     error to an error reporting service in production.

- Typically, it is used together with static `getDerivedStateFromError` which lets you update state in response to an error and display an error message to the user. A  component with these methods is called an error boundary.

# `static getDerivedStateFromError(error)` 
If you define static `getDerivedStateFromError`, React will call it when a child component (including distant children) throws an error during rendering. This lets you display an error message instead of clearing the UI.

Typically, it is used together with `componentDidCatch` which lets you send the error report to some analytics service. A component with these methods is called an error boundary.

# React Docs
- https://beta.reactjs.org/reference/react/Component#static-getderivedstatefromerror
- https://beta.reactjs.org/reference/react/Component#componentDidCatch

### Error Boundary
- https://reactjs.org/docs/error-boundaries.html

### Error Handling
- https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
