import { useQuery } from "@apollo/client";
import { gql } from "apollo-boost";

const WORK_QUERY = gql`
	{
		getInfo(field: "EDUCATION") {
			field
		}
	}
`;

const work = () => {
	const { data, loading } = useQuery(WORK_QUERY);
	console.log(data);
	return <>work</>;
};

export default work;
