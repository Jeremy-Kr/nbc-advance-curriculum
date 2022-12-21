import { GlobalStyle, Layout } from "./components/Common";
import { TodoListContainer } from "./components/Todo";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <TodoListContainer></TodoListContainer>
      </Layout>
    </>
  );
}

export default App;
