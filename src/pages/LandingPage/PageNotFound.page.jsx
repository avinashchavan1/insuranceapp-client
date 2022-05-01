import { Result, Button } from "antd";
import UserLayoutLayout from "../../layouts/UserLayout.layout";

const PageNotFound = () => (
  <UserLayoutLayout>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" href="/">
          Back Home
        </Button>
      }
    />
  </UserLayoutLayout>
);
export default PageNotFound;
