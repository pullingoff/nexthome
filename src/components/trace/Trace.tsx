const Trace = () => {
  /**
   * 1. 머그컵 돌아가면서 비디오
   * 2. 문단 일반 스크롤
   * 3. 아래에서 싹 올라오는 비디오, 디테일 설명
   * 4. 이미지가 올라오며 블렌딩되고 스크롤
   * 푸터
   */

  return (
    <>
      <section className="scroll-section" id="scroll-section-0">
        <h1>Airmug Pro</h1>
        <div className="sticky-elem main-message">
          <p>
            온전히 빠져들게 하는 <br />
            건너뛰기
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            두번째 <br />
            문단
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            세번째 <br />
            글글
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            네번째
            <br />
            룰루
          </p>
        </div>
      </section>
      <section className="scroll-section" id="scroll-section-1">
        <p className="description">
          <strong>보통 스크롤 영역</strong>A animi at commodi corporis dicta
          dolor dolorem eos esse eum excepturi facere fugiat fugit illo impedit
          inventore ipsum iusto, magnam maiores minima mollitia nemo nihil
          nostrum nulla numquam omnis perferendis praesentium quidem rem
          reprehenderit saepe sit, soluta sunt tempore totam unde voluptas
          voluptatum. Alias, consequuntur cumque doloribus est fuga hic
          laudantium maxime non, numquam obcaecati odit possimus, quidem
          tempore. Adipisci aliquam aspernatur cum deleniti distinctio ea
          eveniet expedita, facere facilis id ipsum iusto magnam molestiae
          molestias nemo numquam optio quaerat quam quo ratione rem repellat
          sapiente tempora temporibus veritatis vero vitae voluptatum! Adipisci
          alias aliquam autem cumque cupiditate deleniti deserunt dicta
          distinctio dolor dolorum eligendi eos eum exercitationem fugit harum
          hic, id ipsam ipsum itaque laborum magnam nesciunt officia officiis
          omnis optio quam quia rem reprehenderit sed soluta tempora tempore
          temporibus tenetur totam unde velit voluptatum? Aliquam, modi,
          provident.
        </p>
      </section>
      <section className="scroll-section" id="scroll-section-2">
        <div className="sticky-elem main-message">
          <p>
            <small>편안한 촉감</small>입과 하나 되다
          </p>
        </div>
        <div className="sticky-elem desc-message">
          <p>
            편안한 목넘김을 완성하는 디테일한 여러 구성요소로, 우리는 이름
            하나하나 어쩌구가 저쩌궁
          </p>
          <div className="pin"></div>
        </div>
        <div className="sticky-elem desc-message">
          <p>디자인 앤 퀄리티 오브 스웨던</p>
          <div className="pin"></div>
        </div>
      </section>
      <section className="scroll-section" id="scroll-section-3">
        <p className="mid-message">
          <strong>Retina 머그</strong>
          <br />
          아이디어를 광활하게 펼칠
          <br />
          아름답고 부드러운 음료 공간
        </p>
        <p className="canvas-caption">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iste
          neque non numquam odit, possimus suscipit vel! Amet beatae consectetur
          cum debitis excepturi, ipsam itaque odit quos recusandae repellendus
          sit soluta tempora vero. Alias aut, cumque earum eius hic, labore
          nobis officiis quia quibusdam sapiente sunt, totam unde voluptates.
          Aliquid aspernatur dicta esse magnam vero. Aliquam architecto commodi
          corporis dicta doloremque dolorum exercitationem facere iure iusto
          laudantium molestiae nesciunt nostrum pariatur repudiandae suscipit
          veniam, voluptas, voluptatibus. Aperiam culpa distinctio eius eveniet
          nam velit! Cum facere impedit laudantium magni nisi ullam, veritatis!
          Autem ducimus eum facere fugiat illum impedit nulla repudiandae!
        </p>
      </section>
      <footer className="footer">2023, haeun</footer>
    </>
  );
};

export default Trace;
