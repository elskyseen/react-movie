const Loading = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="w-10 h-10 border-4 rounded-full border-t-primary animate-spin"></div>
      <p className="text-primary font-semibold capitalize">please wait...</p>
    </div>
  );
};

export default Loading;
