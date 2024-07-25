function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-xl font-semibold text-gray-700">Loading...</p>
        <p className="mt-2 text-sm text-gray-500">
          Please wait while we verify your session.
        </p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
