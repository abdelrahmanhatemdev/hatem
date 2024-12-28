import { memo } from "react";
import AppLayout from "./AppLayout";

const NoInternet = () => {
  return (
    <AppLayout>
      No Internet
    </AppLayout>
  );
};
export default memo(NoInternet);
