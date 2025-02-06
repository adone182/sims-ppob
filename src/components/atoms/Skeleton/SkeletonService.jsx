export const SkeletonService = () => {
  return (
    <div className="flex flex-col items-center justify-start space-y-2 bg-gray-100 p-2 rounded-md shadow-sm">
      <div className="w-12 h-12 bg-gray-500 animate-pulse rounded-full"></div>
      <div className="w-16 h-4 bg-gray-500 animate-pulse"></div>
    </div>
  );
};
