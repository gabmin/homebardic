import * as React from "react";

const Cocktails = () => {
  const data = {
    name: "스크루드라이버",
    base: "보드카 45ml",
    ingredient: ["오렌지주스 fill up"],
    method: "빌드",
    glass: "롱드링크 잔",
    description: "도수 약 13도 정도의 가볍게 먹기 좋은 술이다.",
  };

  return (
    <div>
      <div>{data.name}</div>
      <div>
        {data.base}
        {data.ingredient}
      </div>
      <div>
        {data.method}
        {data.glass}
        {data.description}
      </div>
    </div>
  );
};

export default Cocktails;
