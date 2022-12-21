import { GlobalStyle, Layout } from "./components/Common";
import { TodoInput, TodoListContainer } from "./components/Todo";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <TodoInput />
        <TodoListContainer />
      </Layout>
    </>
  );
}

export default App;
