import { Header } from "./component/Header";
import { Sidebar } from "./component/Sidebar";
import { Footer } from "./component/Footer";
import { TaskInput } from "./component/TaskInput";
import { TaskCard } from "./component/Taskcard";

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header />

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Sarudhya" type="student" />

        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
              <TaskInput />
            {/* Card รายการ */}
            <TaskCard id={1} title="Read a book" description="Vite + React + Bootstrap + TS" isDone={true}/>
            <TaskCard id={2} title="Write code" description="Finish project for class" isDone={false} />
            <TaskCard id={3} title="Deploy app" description="Push project to GitHub Pages" isDone={false} />
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
        <Footer year="2025" fullName="Sarudhya Achavakul" studentId={670610736}/>
    </div>
  );
}

export default App;
