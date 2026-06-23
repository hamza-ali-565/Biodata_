"use client";

import { Component } from "react";

export class TemplateErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Template render error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center w-[450px] min-h-[600px] bg-white text-slate-700 rounded-xl border border-slate-200 p-10 text-center gap-4">
          <p className="text-lg font-semibold">Unable to preview this template.</p>
          <p className="text-sm text-slate-500">Try selecting a different template or refreshing the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
