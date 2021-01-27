import { useRouter } from "next/router";
import Header from "components/header";
import { GetStaticPaths, GetStaticProps } from "next";

const Post: React.FC<{ data: any }> = ({ data }) => {
	const router = useRouter();
	const { id } = router.query;
	console.log(data);
	return (
		<>
			<Header />
			<h1>The change for the post is {id}</h1>
		</>
	);
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	).then((data) => data.json());
	return {
		props: {
			data: res,
		},
	};
};
export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { id: "1" } }],
		fallback: false,
	};
};
