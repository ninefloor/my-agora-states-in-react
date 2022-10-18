function Form (){
  return (
    <section className="form__container">
      <form action="" method="get" className="form">
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label for="name">이름 </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="form__input--title">
            <label for="name">제목 </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="form__textbox">
            <label for="story">내용 </label>
            <textarea id="story" name="story" placeholder="질문을 작성하세요" required></textarea>
          </div>
        </div>
        <div className="form__submit">
          <input type="submit" value="등록하기" />
        </div>
      </form>
    </section>
  )
}

export default Form;