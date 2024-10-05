export const NotFound = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center border-2 p-8 gap-2 rounded-lg bg-primary-foreground max-w-[550px] mx-2">
            <h1 className="font-poppins max-sm:text-lg text-xl md:text-2xl font-semibold"><span className="text-red-500 font-bold">404</span> - Page Not Found</h1>
            <p className="max-sm:text-2xl text-3xl md:text-4xl text-center tracking-wider font-extralight font-classic">Sorry, the page you are looking for does not exist.</p>
        </div>
    </div>
  );
};
