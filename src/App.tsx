import { Suspense } from "react";
import "./App.css";
import EmbedScreen from "./components/EmbedScreen/EmbedScreen";

function App() {
  return (
    <main className="viewer">
      <header className="viewer__header"></header>

      <div className="viewer__body">
        <section className="stage">
          <Suspense
            fallback={<div className="viewer viewer__fallback">Loading</div>}
          >
            <EmbedScreen />
          </Suspense>
        </section>
      </div>
    </main>
  );
}

export default App;
