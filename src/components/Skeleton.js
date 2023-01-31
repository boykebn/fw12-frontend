const Skeleton = () => {
  return (
    <div class="shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 justify-center items-center">
          <div class="w-full text-center bg-slate-200 rounded"></div>
          <div class="space-y-3">
              <div>Data Loading...</div>
            <div className="flex justify-center items-center flex-col gap-5">
              <div class="h-[300px] w-[200px] rounded-lg bg-slate-200"></div>
              <div class="h-2 bg-slate-200 w-[250px] rounded"></div>
              <div class="h-2 bg-slate-200 w-[250px] rounded"></div>
              <div class="h-2 bg-slate-200 w-[250px] rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
