import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

function EditPost(userId) {
  const [post, setPost] = useState([]);
  const { register, handleSubmit } = useForm();
  const [postData, setPostData] = useState([]);

  // const fetchPostData = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts/' + userId)
  //     .then((response) => response.json())
  //     .then((data) => setPostData(data));
  // };

  useEffect(() => {
    alert(userId.userId);
    fetch('https://jsonplaceholder.typicode.com/posts/' + userId.userId)
      .then((response) => response.json())
      .then((data) => setPostData(JSON.stringify(data)));
  }, []);

  const editPostAPI = (data) => {
    // alert(JSON.stringify(data));
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <main>
      <form onSubmit={handleSubmit(editPostAPI)}>
        <h5>
          <b> Edit Post</b>
        </h5>
        <div
          style={{
            marginLeft: '30%',
          }}
        >
          <label
            onClick={() => {
              console.log(postData['body']);
            }}
          >
            User Id
          </label>
          <input
            // value={postData.userId}
            {...register('userId')}
            placeholder="UserId"
          />
        </div>
        <div
          style={{
            marginLeft: '30%',
          }}
        >
          <label>Title</label>
          <input
            // value={postData.title}
            {...register('tittle')}
            placeholder="Title"
          />
        </div>
        <div
          style={{
            marginLeft: '30%',
          }}
        >
          <label>Body</label>
          <input
            // value={postData.body}
            {...register('body')}
            placeholder="Body"
          />
        </div>
        <div
          style={{
            marginLeft: '30%',
          }}
        >
          <input type="submit" />
        </div>
      </form>
      <p>{postData}</p>
    </main>
  );
}

export default EditPost;
