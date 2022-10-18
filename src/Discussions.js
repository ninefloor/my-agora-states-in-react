import Discussion from "./Discussion";
import { useState } from "react";

function Discussions({ data }) {
  const limit = 10; // 한 페이지에 보여줄 디스커션 갯수
  const [page, setPage] = useState(1); // 현재 페이지를 표시 할 상태
  const offset = (page - 1) * limit; // 현재 페이지의 첫 디스커션 인덱스
  // const setCurrentPage = (num) => setPage(num);

  return (
    <section className="discussion__wrapper">
      <ul className="discussions__container">
        {data.slice(offset, offset + limit).map((tweet) => {
          return <Discussion tweet={tweet} key={tweet.id} />;
        })}
      </ul>
      <Pagination
        total={data.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </section>
  );
}

function Pagination({ total, limit, page, setPage }) {
  let totalPage = Math.ceil(total / limit); // 총 페이지 갯수 구하기
  return (
    <ul className="page__wrapper">
      {Array(totalPage) // 페이지 수 만큼 배열 생성
        .fill() // 요소 값 채우기 (undefined)
        .map((list, index) => { // li 내의 button 매핑
          return (
            <li className="page__wrapper--list" key={index}>
              <button href="#" onClick={() => setPage(index + 1)}>{index + 1}</button>
            </li>
          );
        })}
    </ul>
  );
}

export default Discussions;
