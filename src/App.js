import "./App.css";
import { Button, InputText, Modal, Select } from "./components";
import { GrFormNext } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isOpenConfirmModal, setOpenConfirmModal] = useState(false);
  const [isOpenBasicModal, setOpenBasicModal] = useState(false);
  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handlePriceInput = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    setPrice(input);
  };

  const handleClickPriceSubmit = () => {
    alert(`name: ${name}, price: ${price}`);
  };

  const addComma = (str) => (str ? Number(str).toLocaleString("ko-KR") : "");

  return (
    <div className="App">
      <section>
        <h2>BUTTON</h2>
        <div>
          <Button variant="outlined" size="large" icon={<GrFormNext />}>
            outlined large primary 버튼
          </Button>
          <Button>medium 버튼</Button>
          <Button size="small">small 버튼</Button>
        </div>
        <div>
          <Button variant="outlined" color="secondary" icon={<FaRegBell />}>
            outlined large secondary 버튼
          </Button>
          <Button color="secondary">medium 버튼</Button>
          <Button color="secondary" size="small">
            small 버튼
          </Button>
        </div>
      </section>
      <section>
        <h2>INPUT</h2>
        <div>
          <label htmlFor="name">이름: </label>
          <InputText name="name" value={name} onChange={handleNameInput} />
        </div>
        <div>
          <label htmlFor="price">가격: </label>
          <InputText
            name="price"
            value={addComma(price)}
            onChange={handlePriceInput}
          />
        </div>
        <Button onClick={handleClickPriceSubmit}>저장</Button>
      </section>
      <section>
        <Button onClick={() => setOpenConfirmModal(true)}>medium 버튼</Button>
        <Button
          size="large"
          color="secondary"
          onClick={() => setOpenBasicModal(true)}
        >
          medium 버튼
        </Button>
        {isOpenConfirmModal && (
          <Modal
            type="confirm"
            closeFunc={() => setOpenConfirmModal(false)}
            confirmFunc={() => console.log("Confirmed")}
          >
            버튼이 2개인 모달
          </Modal>
        )}
        {isOpenBasicModal && (
          <Modal closeFunc={() => setOpenBasicModal(false)}>기본 모달</Modal>
        )}
      </section>
      <section>
        <div>
          <h2>SELECT</h2>
          <Select
            defaultValue={"리액트"}
            options={["리액트", "자바", "스프링", "노드"]}
            onChange={(value) => alert(value)}
          />
          <Select
            defaultValue={"자바"}
            options={["리액트", "자바", "스프링", "노드"]}
          />
        </div>
        <div>
          Ad est do cupidatat adipisicing dolor nulla proident labore. Et
          cupidatat eiusmod cillum in voluptate. Ipsum ad excepteur irure
          tempor. Incididunt ad ex aliquip cupidatat sunt dolore elit consequat
          est duis. Magna laboris minim ad eiusmod. Quis id aliqua magna fugiat
          nisi. Duis ut occaecat ad est eu sit ea quis. Laboris nulla sunt sit
          et id proident nulla exercitation. Consequat esse consectetur aliquip
          culpa magna est. Elit non nostrud magna exercitation incididunt ex
          magna do qui officia exercitation fugiat.
        </div>
      </section>
    </div>
  );
}

export default App;
