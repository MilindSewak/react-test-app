import React, { useEffect, useState } from 'react';
import AddPost from './AddPost';
import EditPost from './EditPost';
function AllPost() {
  const [user, setUser] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [userId, setUserId] = useState();
  let back = (
    <button
      onClick={() => {
        setActiveTab(0);
      }}
    >
      Back to Dashboard
    </button>
  );

  const fetchData = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {activeTab === 0 ? (
        <>
          <button
            onClick={() => {
              setActiveTab(1);
            }}
          >
            Add Post
          </button>
          <ul>
            {user &&
              user.length > 0 &&
              user.map((userObj, index) => (
                <div
                  onClick={() => {
                    setUserId(userObj.userId);
                    setActiveTab(2);
                  }}
                >
                  <b>Title</b> {userObj.title}
                  <br />
                  <b>Body</b> {userObj.body}
                  <br />
                  <br />
                </div>
              ))}
          </ul>
        </>
      ) : (
        ''
      )}
      {activeTab === 1 ? (
        <>
          {back}
          <AddPost />
        </>
      ) : (
        ''
      )}
      {activeTab === 2 ? (
        <>
          {back}
          <EditPost userId={userId} />
        </>
      ) : (
        ''
      )}
    </main>
  );
}

export default AllPost;
