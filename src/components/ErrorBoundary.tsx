import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erreur capturée par ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="text-red-500 text-4xl mb-4">🚨</div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Oups ! Une erreur s'est produite
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                L'application a rencontré un problème. Cela peut être dû à :
              </p>
              
              <div className="text-left space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">🔒</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Adblock activé</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Désactivez temporairement votre bloqueur de publicités
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">🌐</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Problème de connexion</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Vérifiez votre connexion internet
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">🔄</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Cache du navigateur</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Essayez de vider le cache et recharger
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Recharger la page
                </button>
                
                <button
                  onClick={() => this.setState({ hasError: false })}
                  className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Réessayer
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 