import { Header } from "./component/Header";
import { Sidebar } from "./component/Sidebar";
import { Footer } from "./component/Footer";
import { TaskInput } from "./component/TaskInput";

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
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <h5 className="card-title">Read a book</h5>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <p className="card-text"> Vite + React + Bootstrap + TS </p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-success me-2">Done</button>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <h5 className="card-title">Write code</h5>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <p className="card-text">Finish project for class</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-success me-2">Done</button>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <h5 className="card-title">Deploy app</h5>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <p className="card-text">Push project to GitHub Pages</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-success me-2">Done</button>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
        <Footer year="2025" fullName="Sarudhya Achavakul" studentId={670610736}/>
    </div>
  );
}

export default App;
