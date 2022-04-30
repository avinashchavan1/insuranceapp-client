import { useParams } from "react-router-dom";

const PolicyUpdate = () => {
  const { id } = useParams();

  return <h1> The Policy Id is {id}</h1>;
};

export default PolicyUpdate;
