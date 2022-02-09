import NavBar from './components/Navbar';
import Profile from './components/Profile';
import Card from './components/Card';
import Footer from './components/Footer';

function App () {
    return (
        <>
        <NavBar />
        <Profile />
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <Card img="/img/portfolio-img-1.jpg" title="Portfolio Website" description="Personal Portfolio Website using HTML CSS or Javascript." demoLink="https://project.ishreyash.com/portfolio/index.html" />
        <Card img="/img/textutils-1.jpg" title="TextUtils" description="TextUtils - Utility for Manipulate Text -React WebApp" demoLink="https://iamshre-yash.github.io/TextUtils-ShreYash/" />
        <Card img="/img/toDo-1.jpg" title="Tasks To Do" description="Add,Update,Delete Tasks - Track Your Tasks." demoLink="https://iamshreyash.pythonanywhere.com/" />
        </div>
        <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Projects</h1>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <Card title="Tasks To Do" description="Add,Update,Delete Tasks - Track Your Tasks." demoLink="https://iamshreyash.pythonanywhere.com/" />
        </div>
        <Footer />
      </>
  );
}

export default App;