// components/DetailPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const { posts } = useSelector((state) => state.posts);

  const post = posts.find((post) => post.id === Number(id));

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>Detail Page</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
    </div>
  );
}

export default DetailPage;
