function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        <p className="mt-4 text-xl font-semibold text-white">Loading...</p>
        <p className="mt-2 text-sm text-white">
          Please wait while we verify your session.
        </p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
