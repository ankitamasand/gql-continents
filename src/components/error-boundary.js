import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    this.setState({ hasError: true });
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error: ", error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h2>Something went wrong!</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
