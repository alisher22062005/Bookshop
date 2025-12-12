export default function SkeletonBookCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-sm rounded-t-[1rem] h-[400px] animate-pulse">
      {/* Image skeleton */}
      <div className="h-[250px] w-full bg-gray-300 rounded-t-[1rem]" />

      {/* Text skeleton */}
      <div className="card-body p-[1rem] space-y-3">
        {/* title */}
        <div className="h-5 w-3/4 bg-gray-300 rounded"></div>

        {/* author */}
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>

        {/* description lines */}
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
