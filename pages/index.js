import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import { getSortedExternalPostsData } from "../lib/externalPosts";

//getStaticProps
export async function getStaticProps() {
  const allPostsData = getSortedPostsData(); //post data return
  const allExternalPostsData = getSortedExternalPostsData(); //post data return
  return {
    props: {
      allPostsData,
      // allExternalPostsData,
    },
  };
}

//getStaticProps로 가져온 allPostsData를 프롭으로 전달
export default function Home({ allPostsData, allExternalPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>저는 방인아입니다~~~ 반갑습니다~~</p>
      </section>
      {/* Posts section */}

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      {/* <section>
        {allExternalPostsData.toString()}
        {allExternalPostsData.map((post) => (
          <li className={utilStyles.listItem} key={post.id}>
            {post.title}
            <br />
            {post.id}
            <br />
            {post.body}
          </li>
        ))}
      </section> */}
    </Layout>
  );
}
