import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { posts, url, content } from '../profile';



const Post = () => {

const router = useRouter();

const currentPost = posts.filter(
	(post) => post.title === router.query.title
)[0];

return (
		<Layout title={router.query.title} footer={false}>
	 	<div className="text-center">
	 		<img 
	 		src={currentPost.url}
	 		alt="" 
	 		className="img-fluid" 
	 		style={{width: '50%'}}
	 		/>
	 		<p className="py-2">{currentPost.content}</p>
	 	</div>
		</Layout>
	)
}

export default Post;