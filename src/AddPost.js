import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

function AddPost() {
  const [post, setPost] = useState([]);
  const { register, handleSubmit } = useForm();

  const addPostAPI = (data) => {
    alert(JSON.stringify(data));
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setPost(json));
  };

  return (
    <main>
      <form onSubmit={handleSubmit(addPostAPI)}>
        <h5>
          <b> Add Post</b>
        </h5>
        <div
          style={{
            marginLeft: '30%',
          }}
        >
          <label>User Id</label>
          <input {...register('userId')} placeholder="UserId" />
        </div>
        <div
          style={{
            marginLeft: '30%',
          }}
        >
          <label>Title</label>
          <input {...register('tittle')} placeholder="Title" />
        </div>
        <div
          style={{
            marginLeft: '30%',
          }}
        >
          <label>Body</label>
          <input {...register('body')} placeholder="Body" />
        </div>
        <div
          style={{
            marginLeft: '30%',
          }}
        >
          <input type="submit" />
        </div>
      </form>
      <p>{post}</p>
    </main>
  );
}

export default AddPost;
