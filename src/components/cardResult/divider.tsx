export const Divider = () => {
  return (
    <div className="relative w-full h-16 flex items-center before:absolute before:w-16 before:h-16 before:bg-appPrimary-strong before:rounded-full before:-left-12 after:absolute after:w-16 after:h-16 after:bg-appPrimary-strong after:rounded-full after:-right-12">
      <hr className="border-appText-500 border-dashed border-[1.5px] w-full" />
    </div>
  );
};
