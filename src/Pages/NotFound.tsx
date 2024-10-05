export const NotFound = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center border-2 p-8 gap-2 rounded-lg text-xl bg-primary-foreground max-w-[550px]">
            <h1 className="font-poppins font-semibold"><span className="text-red-500 font-bold">404</span> - Page Not Found</h1>
            <p className="text-3xl text-center tracking-wider font-extralight font-classic">Sorry, the page you are looking for does not exist.</p>
        </div>
    </div>
  );
};
