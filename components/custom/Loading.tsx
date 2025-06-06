import Loader from "react-spinners/PuffLoader";

function Loading() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Loader
        color="hsl(0 0% 20%)"
        loading={true}
        size={30}
      />
    </div>
  );
}

export default Loading
