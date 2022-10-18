import reply from "./reply-solid.svg";

function Discussion({ tweet }) {
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={tweet.avatarUrl}
          alt={`avatar of ${tweet.author}`}
        />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={tweet.url}>{tweet.title}</a>
        </h2>
        <div className="discussion__information">
          {tweet.author} / {new Date(tweet.createdAt).toLocaleString()}
        </div>
      </div>
      {tweet.answer ? <AnswerDiscussion answer={tweet.answer} /> : undefined}
    </li>
  );
}

function AnswerDiscussion({ answer }) {
  return (
    <div className="discussion__answered">
      <div className="discussion__answered--reply">
        <img src={reply} alt="reply icon" />
      </div>
      <div className="discussion__answered--content">
        <p className="discussion__answered--title">
          <a href={answer.url}>
            {`${answer.bodyHTML.replace(/(<([^>]+)>)/gi, "").slice(0, 120)}...`}
          </a>
        </p>
        <div className="discussion__answered--information">
          {answer.author} / {new Date(answer.createdAt).toLocaleString()}
        </div>
      </div>
      <div className="discussion__answared--avatar--wrapper">
        <img
          className="discussion__answared--avatar--image"
          src={answer.avatarUrl}
          alt={`avatar of ${answer.author}`}
        />
      </div>
    </div>
  );
}

export default Discussion;
