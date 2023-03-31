import { useEffect } from "react";
import NProgress from "nprogress";
import { Space, Spin } from "antd";

function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Space direction={"horizontal"} align={"center"}>
      <Spin size={"large"} />
    </Space>
  );
}

export default SuspenseLoader;
