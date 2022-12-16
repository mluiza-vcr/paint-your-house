import { Button } from "antd";

import LayoutApp from "../../components/Layout";

function Home(): JSX.Element {
  return (
    <>
      <LayoutApp>
        <div>
          <Button type="primary">Home</Button>
        </div>
      </LayoutApp>
    </>
  );
}

export default Home;
