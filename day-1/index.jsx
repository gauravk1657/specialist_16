//                                         REACT - USEEFFECT - I - GET TODO
//                                         problem statement:


//                                         create a simple todo app
// Use mock server to retrieve todo list when the component mounts
// there should be loading and error states managed and shown to the UI( mandatory )
// build a pagination component that will change the page and fetch data for you



//                           code    



      import React from "react";

const getData = (page) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  ).then((res) => res.json());
};
const Post = () => {
  const [loading, setLoading] = React.useState(false);
  const [post, setPost] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const fetchAndUpdate = async () => {
    setLoading(true);
    try {
      let res = await getData(page);
      setPost(res);
      setLoading(false);
      //  console.log("data",res)
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchAndUpdate(page);
  }, [page]);
  const handlePage = (changeBy) => {
    setPage(page + changeBy);
    fetchAndUpdate(page + changeBy);
  };

  return loading ? (
    <h1>Loading....</h1>
  ) : (
    <div>
      <h1>Posts</h1>
      {/* <button onClick={fetchAndUpdate}>Posts</button> */}
      <ul>
        {post.map((el) => (
          // console.log(el);
          <li>
            {el.id}
            {"----->"}
            {el.title}
          </li>
        ))}
      </ul>
      <button disabled={page == 1} onClick={() => handlePage(-1)}>
        Prev
      </button>
      <button disabled>{page}</button>
      <button onClick={() => handlePage(1)}>Next</button>
    </div>
  );
};

export default Post;
