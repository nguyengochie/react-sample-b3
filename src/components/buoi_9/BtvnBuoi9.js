import React, { useState } from 'react';
import { INVITE_OPTIONS, PRO_LAN, ROLES } from './const';

const FAKE_DATA = {
  name: "",
  email: "",
  age: 0,
  currentJob: "",
  isInvite: "",
  programLanguage: [],
  question: ""
}
const BtvnBuoi9 = () => {
  const [form, setForm] = useState(FAKE_DATA);
  console.log("form", form);


  const onCheckedLanguage = (value) => {
    // lấy ra list ngôn ngữ lập trình hiện tại
    const currLanguages = form.programLanguage;
    // nếu mảng hiện tại chứa value truyền vào
    const newLanguages = !currLanguages.includes(value)
      ? [...currLanguages, value]
      : currLanguages.filter((i) => i !== value);

    setForm((prevForm) => ({ ...prevForm, programLanguage: newLanguages }))
  }


  const onInput = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  const renderOption = () => {
    return ROLES.map((item, index) => {
      return <option key={index} value={item}>{item}</option>
    })
  }

  const renderInviteOptions = () => {
    return INVITE_OPTIONS.map((item, index) => {
      return <div key={index}>
        <input
          onClick={(e) => onInput("isInvite", item)}
          name="invite"
          type='radio' />{item}
      </div>
    })
  }

  const renderLanguages = () => {
    return PRO_LAN.map((item, index) => {
      return <div key={index}>
        <input onClick={(e) => onCheckedLanguage(item)}
          value={item} type='checkbox' /> {item}
      </div>
    })
  }

  return (
    <div>
      <h1>Biễu mẫu khảo sát ITViec</h1>

      <div>
        <div>
          <p>Họ Tên</p>
          <input onChange={(e) => onInput("name", e.target.value)} />
        </div>
        <div>
          <p>Email</p>
          <input onChange={(e) => onInput("email", e.target.value)} />
        </div>
        <div>
          <p>Tuổi</p>
          <input onChange={(e) => onInput("age", e.target.value)} type='number' />
        </div>
        <div>
          <p>Hiện tại bạn đang là</p>
          <select onChange={(e) => onInput("currentJob", e.target.value)} >
            {renderOption()}
          </select>
        </div>
        <div>
          <p>Bạn sẽ giới thiệu ITViec với bạn bè chứ?</p>
          {renderInviteOptions()}
        </div>
        <div>
          <p>{`Ngôn ngữ lậo trình và Framework bạn đã biết? (Có thể chọn nhiều đáp án)`}</p>
          {renderLanguages()}
        </div>
        <div>
          <p>Bạn có câu hỏi nào cho ITViec không?</p>
          <textarea onChange={(e) => onInput("question", e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default BtvnBuoi9