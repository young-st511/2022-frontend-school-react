import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getPosts, getUser } from '../mocks/api';

export default function Home() {
  const navigate = useNavigate();

  const { data: user } = useQuery('@getUser', getUser);

  const { data: posts } = useQuery('@getPosts', getPosts);

  // if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Home, {user?.nickName}</h1>
      <button onClick={() => navigate('/edit')}>Go Edit Page</button>
      <ul>
        {posts.map(({ title }) => (
          <li>{title}</li>
        ))}
      </ul>
    </div>
  );
}
