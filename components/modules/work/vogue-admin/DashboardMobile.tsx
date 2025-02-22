import { memo } from "react";

const DashboardMobile = () => {
  return <section>
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="font-satoshi text-3xl">Manage with Ease, Anytime, Anywhere</h2>
      </div>

    </div>
  </section>;
};
export default memo(DashboardMobile);
