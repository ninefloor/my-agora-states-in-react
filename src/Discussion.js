function Discussion() {
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src="https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4"
          alt="avatar of kimploo"
        />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href="https://github.com/codestates-seb/agora-states-fe/discussions/6">
            [notice] 좋은 질문하는 법
          </a>
        </h2>
        <div className="discussion__information">
          kimploo / 2022. 4. 22. 오후 02:08:33
        </div>
      </div>
    </li>
  );
}

export default Discussion;
