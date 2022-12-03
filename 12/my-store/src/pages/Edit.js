import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getPosts, getUser, updateNickname } from '../mocks/api';

export default function Edit() {
  const [inputValue, setInputValue] = useState('');
  const queryClient = useQueryClient();

  const { data: user } = useQuery('@getUser', getUser);

  const { data: posts } = useQuery('@getPosts', getPosts);

  const mutation = useMutation(updateNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries('@getUser');
    },
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(inputValue);
  };

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {user.nickName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>

      <ul>{posts}</ul>
    </>
  );
}
