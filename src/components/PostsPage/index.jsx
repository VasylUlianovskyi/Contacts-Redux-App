import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getPostsThunk } from '../../store/slices/postsSlice';
import { getUsersThunk } from '../../store/slices/userSlice';
import styles from './PostPage.module.css';
export const PostsPage = ({
  postsList: { posts, isFetching, error },
  usersList: { users },
  getPosts,
  getUsers,
}) => {
  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  const mapPosts = p => (
    <li className={styles.postItem} key={p.id}>
      <article>
        <h2>{p.title}</h2>
        <p>{p.body}</p>
        <p>Author:{users.find(u => u.id === p.userId)?.name || 'Unknown'}</p>
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

const mapStateToProps = ({ postsList, usersList }) => ({
  postsList,
  usersList,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsThunk()),
  getUsers: () => dispatch(getUsersThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
