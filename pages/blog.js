import Layout from '../components/Layout';
import { posts } from '../profile';
import Link from 'next/link';

const PostCard = ({ post }) => (

  
    
      
    
      
        
        
       
      
  <div className="col-md-4 p-2">
    <div className="card h-100">
      <div className="overflow">

        <img src={post.url} alt="" className="card-img-top" />
        <div className="capa">{post.title}</div>
      </div>
    
      <div className="card-body ">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
          <button className="btn btn-light">Leer</button>
        </Link>
      </div>
    </div>
  </div>

  
  
 
 


  

  

 
);

const blog = () => {
  return (
    <Layout title="Mi Blog" footer={false} dark>
      <div className="row">
        {posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </Layout>
  );
};

export default blog;