import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

function Detail(props) {
  let { id } = useParams();
  const pngNum = Number(id) + 1;
  console.log("id", id, pngNum);

  // let 찾은상품 = props.shoes.find(function (x) {
  //   return x.id == id;
  // });

  let 찾은상품 = props.shoes.find((x) => x.id.toString() === id);

  useEffect(() => {
    // detail 컴포넌트가 처음장창될때, 업데이트 될떄 실행됨
    // 실행시점이 다르다 => 렌더링 후에 실행된다.
    // 어려운 연산
    //  서버에서 데이터가져오는 작업
    // 타이머 장착하는거

    for (var i = 0; i < 10000; i++) {
      console.log(i);
    }

    // effect 란 단어를 사용하는가?
    // 사이트 이펙트에서 따옴
    console.log("컴포넌트 로드 업데이트마다 실행");
  });

  // for (var i = 0; i < 10000; i++) {
  //   console.log(i);
  // }

  let [count, setCount] = useState(0);

  return (
    <div className="container">
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes" + pngNum + ".jpg"}
            width="100%"
            alt="shoes"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
