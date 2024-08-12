import { Divider, Skeleton } from "@mui/material";

export const ProviderSkeletons = () => {
  return (
    <div className="m-2 rounded-2xl border border-gray-300 overflow-hidden">
      <Skeleton variant="rectangular" width="100%" height={200} />
      <div className="flex justify-center relative -top-10">
        <Skeleton variant="circular" width={100} height={100} />
      </div>
      <div className="my-1 text-center relative bottom-8">
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="text" width="50%" />
      </div>
      <Divider />
      <Skeleton variant="rectangular" width="100%" height={50} />
    </div>
  );
};

export const CategorySkeleton = () => {
  return (
    <div className="border-2 border-gray-700 p-3 m-3 rounded-2xl text-center">
      <Skeleton
        variant="rectangular"
        width="100%"
        height={120}
        className="rounded-2xl"
      />
      <Skeleton variant="text" width="80%" className="mt-3 mx-auto" />
    </div>
  );
};
