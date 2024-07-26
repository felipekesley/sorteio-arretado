export const Quota = ({ quota }: { quota: string }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <span>Cota premiada</span>

      <p className="border rounded-md border-appText-200 p-2 max-w-max font-semibold mx-auto">
        {quota}
      </p>
    </div>
  );
};
