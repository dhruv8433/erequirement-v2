import { Divider, Grid, Rating, Skeleton } from "@mui/material";

// Provider Skeletons
export const ProviderSkeletons = () => {
  return (
    <div className="m-2 rounded-2xl border border-gray-300 overflow-hidden">
      <Skeleton variant="rectangular" width="100%" height={200} />
      <div className="flex justify-center relative -top-10">
        <Skeleton variant="circular" width={100} height={100} />
      </div>
      <div className="my-1 text-center flex flex-col justify-center w-full items-center relative bottom-8">
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="text" width="30%" />
      </div>
      <Divider />
      <Skeleton variant="rectangular" width="100%" height={50} />
    </div>
  );
};

// Category Skeleton
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

// Service Images Skeleton
export const ServiceImagesSkeleton = () => {
  return (
    <div>
      <div className="flex space-x-2">
        <div className="flex flex-col space-y-2">
          <Skeleton
            variant="rectangular"
            className="rounded-2xl"
            width={80}
            height={80}
          />
          <Skeleton
            variant="rectangular"
            className="rounded-2xl"
            width={80}
            height={80}
          />
        </div>
        <div className="w-full h-[400px] mb-4">
          <Skeleton
            variant="rectangular"
            height={400}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="buttons space-y-2">
        <Skeleton variant="rectangular" className="rounded-2xl" height={50} />
        <Skeleton variant="rectangular" className="rounded-2xl" height={50} />
      </div>
    </div>
  );
};

// Service Info Skeleton
export const ServiceInfoSkeleton = () => {
  return (
    <div>
      <div className="mb-4 border border-gray-400 p-4 rounded-2xl">
        <Skeleton variant="text" height={60} width="60%" className="mb-4" />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="90%" />
        <Skeleton variant="text" height={20} width="90%" />
      </div>
      <div className="border border-gray-400 p-4 rounded-2xl space-y-2">
        <Skeleton
          variant="rectangular"
          height={20}
          width={"60%"}
          className="rounded-md"
        />
        <Skeleton
          variant="rectangular"
          height={20}
          width={"60%"}
          className="rounded-md"
        />
        <Skeleton
          variant="rectangular"
          height={20}
          width={"60%"}
          className="rounded-md"
        />
        <Skeleton
          variant="rectangular"
          height={20}
          width={"60%"}
          className="rounded-md"
        />
      </div>
      <div className=" my-4 border border-gray-400 p-4 rounded-2xl">
        <Skeleton variant="text" height={30} width="50%" />
        <Skeleton variant="text" height={20} width="70%" />
        <Rating readOnly />
      </div>
    </div>
  );
};

// Service Faqs Skeleton
export const ServiceFaqsSkeleton = () => {
  return (
    <div>
      <div className="border border-gray-400 p-4 rounded-2xl mb-4">
        <Skeleton variant="text" height={30} width="50%" />
        <Skeleton variant="rectangular" height={150} />
      </div>
      <div className="border border-gray-400 p-4 rounded-2xl mb-4">
        <Skeleton variant="text" height={30} width="50%" />
        <Skeleton variant="rectangular" height={150} />
      </div>
    </div>
  );
};

// Service Detailed Skeleton
export const ServiceDetailedSkeleton = () => {
  return (
    <Grid container spacing={4} className="rounded-2xl overflow-hidden">
      <Grid item xs={12} md={6} className="">
        <ServiceImagesSkeleton />
      </Grid>
      <Grid item xs={12} md={6} className="">
        <ServiceInfoSkeleton />
      </Grid>
      <Grid item xs={12} className="">
        <ServiceFaqsSkeleton />
      </Grid>
    </Grid>
  );
};
