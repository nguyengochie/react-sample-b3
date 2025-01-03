import logo from './logo.svg';
import './App.css';
import Header2, { Header1 } from './header';
import Cha from './components/ChaComponent';
import Cha2Compoent from './components/Cha2Compoent';
import Avatar from './components/Avatar';
import Con from './components/ConComponent';
import CardItem from './components/buoi_3/CardItem';
import BlogItem from './components/buoi_3/BlogItem';

const URL1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt49z02L--M-q7qodtXZsb0uiyDPdo5RWgxQ&s";
const URL2 = "https://mir-s3-cdn-cf.behance.net/projects/404/5f3fa8209214981.Y3JvcCwxNDU2LDExMzgsMCww.jpg";
const DESC = "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
// ctrl + shift + O

// title, desciption
const blog1 = {
  title: "An ninh mang",
  description: DESC
}
const blog2 = {
  title: "Chinh tri gia ",
  description: DESC
}
const blog3 = {
  title: "Phap luat va doi song",
  description: DESC
}
const blog4 = {
  title: "Xa hoi",
  description: DESC
}

function App() {
  const log = () => {
    alert("hello world");
  }

  return (
    <div style={{ border: "5px solid green" }} className="App">
      <Avatar link={URL1} alt="Anh so 1" alert={log} />
      <Avatar link={URL2} alt="Anh so 2" alert={log} />
      <Cha />
      <Cha2Compoent />
      <Header2 />
      <button onClick={log}>click me 1</button>
      <button onClick={() => log()}>click me 2</button>
      <ul>
        <CardItem title="UI/UX design"
          description={DESC}
          icon="☂" />
        <CardItem title="Branding"
          description={DESC}
          icon="☃" />
        <CardItem title="Web development"
          description={DESC}
          icon="☞" />
        <CardItem title="Photography"
          description={DESC}
          icon="♛" />
        <CardItem title="Apps development"
          description={DESC}
          icon="♞" />
        <CardItem title="Digital Marketing"
          description={DESC}
          icon="❁" />
      </ul>

      <BlogItem blog={blog1} />
      <BlogItem blog={blog2} />
      <BlogItem blog={blog3} />
      <BlogItem blog={blog4} />
    </div>

  );
}

export default App;
