import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout.tsx";
import PostList from "@/components/Post/PostList.tsx";
import PostDetails from "@/components/Post/PostDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFoundPage />,

    children: [
      {
        path: "post",
        element: <PostList />,
      },
      {
        path: "post/:postId",
        element: <PostDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
