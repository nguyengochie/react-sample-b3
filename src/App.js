import logo from './logo.svg';
import './App.css';
import Header2, { Header1 } from './header';
import Cha from './components/ChaComponent';
import Cha2Compoent from './components/Cha2Compoent';
import Avatar from './components/Avatar';
import Con from './components/ConComponent';
import CardItem from './components/buoi_3/CardItem';
import BlogItem from './components/buoi_3/BlogItem';
import ProductItem from './components/buoi_4/ProductItem';
import DemoChildren from './components/buoi_4/DemoChildren';
import DemoFunctionChild from './components/buoi_4/DemoFunctionChild';
import BtvnBuoi5 from './components/buoi_5/BtvnBuoi5';

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
const URL = "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png";
const products = [
  {
    img: "",
    title: "Iphone 14 Pro max",
    description: "Giảm ngay 1,400,000đ áp dụng đến 06/01",
    price: "26,000,000đ",
  },
  {
    img: URL,
    title: "Iphone 15 Pro max",
    description: "Giảm ngay 1,400,000đ áp dụng đến 06/01",
    price: "26,000,000đ"
  },
]

function App() {
  const log = () => {
    alert("hello world");
  }

  const renderProducts = () => (products.map((item) => {
    return <ProductItem product={item} />
  }))

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

      <button style={{ width: "100px", height: "50px" }} disabled>click me</button>

      <BlogItem blog={blog1} isReading />
      <BlogItem blog={blog2} isReading />
      <BlogItem blog={blog3} isReading />
      <BlogItem blog={blog4} isReading />
      <img src="" alt hello="123" />
      <div style={{ display: "flex", gap: "10px" }}>
        {renderProducts()}
      </div>
      <DemoChildren>
        <h1>Hello world</h1>
        <h1>green Academy</h1>
      </DemoChildren>
      <DemoFunctionChild item={{ a: 1, b2: 0 }}>
        {() => <h1>hello world function</h1>}
      </DemoFunctionChild>
      <div className='product-item'>
        <h1>Hello Green Academy</h1>
        <h1>Hello Green Academy</h1>
        <h1>Hello Green Academy</h1>
        <h1>Hello Green Academy</h1>
      </div>
      <BtvnBuoi5 />
    </div>
  );
}

export default App;
