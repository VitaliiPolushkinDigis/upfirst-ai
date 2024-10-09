import { Page } from "../../components/Page/Page";
import { usePosts } from "../../utils/hooks/usePosts";
import { Accordion } from "../../components/Accordion/Accordion";
import { Pagination } from "../../components/Pagination/Pagination";
import { POST_PER_PAGE, TOTAL_POSTS } from "../../utils/constants/constants";

export const Home = () => {
  const { posts, loading, error, removePost, paginate, currentPage } =
    usePosts();

  if (error)
    return (
      <Page>
        <p>Error: {error}</p>
      </Page>
    );
  return (
    <Page>
      <h1 className="text-4xl text-center mb-6">Home page with cards</h1>
      {loading ? (
        <div className="flex items-center justify-center material-icons p-2 rounded-full hover:bg-blue-200 hover:p-2 text-blue-500 text-9xl">
          loop
        </div>
      ) : (
        <div className="px-72">
          {posts.map((post) => (
            <Accordion
              key={post.id}
              post={post}
              onPostRemove={() => removePost(post.id)}
            />
          ))}
          <div>
            <Pagination
              postsPerPage={POST_PER_PAGE}
              totalPosts={TOTAL_POSTS}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      )}
    </Page>
  );
};
