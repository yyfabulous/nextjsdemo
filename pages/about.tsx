import Image from 'next/image';
import Link from 'next/link';
import { server } from '../config';

function About(props: any) {
  return (
    <div className="text">
      About
      <div>{props.data.name}</div>
      <Image src={'/images/sakura.jpg'} width={100} height={100} alt="sakura"></Image>
      <div>
        <Link href={'/posts/1'}>Link</Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  const res = await fetch(`${server}/api/user`);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

export default About;
