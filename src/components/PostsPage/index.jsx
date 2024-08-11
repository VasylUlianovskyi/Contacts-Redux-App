import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getPostsThunk } from '../../store/slices/postsSlice';
import styles from './PostPage.module.css';

export const PostsPage = ({ posts, isFetching, error, get }) => {
  useEffect(() => {
    get();
  }, []);

  const mapPosts = p => (
    <li className={styles.postItem} key={p.id}>
      <article>
        <h2>{p.title}</h2>
        <p>{p.body}</p>
        <p>Author:{p.userId}</p>
      </article>
    </li>
  );

  return (
    <div>
      <h1>Posts</h1>
      {error && <div>Error!!!</div>}
      {isFetching && <div>Loading...</div>}
      {!error && !isFetching && <ul>{posts.map(mapPosts)}</ul>}
    </div>
  );
};

const mapStateToProps = ({ postsList }) => postsList;

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(getPostsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
