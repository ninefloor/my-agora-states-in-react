import Discussion from "./Discussion";

function Discussions({ data }) {
  return (
    <section className="discussion__wrapper">
      <ul className="discussions__container">
        {
        data.map(tweet => {
          return <Discussion tweet={tweet} key={tweet.id}/>
        })
        }
      </ul>
    </section>
  );
}

export default Discussions;
