import { useRouter } from "next/router";
import { server } from "../../config";

function Post(props: any) {
  const router = useRouter();
  const query = router.query;

  return (
    <div>
      Post {props.posts.name}
      <div>query {query.id}</div>
    </div>
  );
}

export async function getServerSideProps() {
  // 调用外部 API 获取博文列表
  const res = await fetch(`${server}/api/hello/abc`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Post;
