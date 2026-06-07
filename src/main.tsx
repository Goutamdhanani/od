import { Component, StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

type ErrorBoundaryState = { hasError: boolean }

class AppErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  public constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return <div className="grid min-h-screen place-items-center bg-slate-950 text-slate-200">Something went wrong.</div>
    }

    return this.props.children
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </StrictMode>,
)
