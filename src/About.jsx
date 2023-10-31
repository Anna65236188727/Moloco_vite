import Group36 from './assets/Group36.png';
import image9 from './assets/image9.png';


function About() {
    return (
        <>
            <div className="ish">
                <img src={Group36} alt="" />
                <div className="dezt">
                    <div className="text3">ИСХОДНЫЙ ПРОДУКТ</div>
                    <div className="text4">Деятельность нашего молочного комбината началась с производства молока и являетсяо
                        является
                        основной исходной сырьевой продукцией. Наше молоко производится из отборного сырья, что гарантирует его
                        страхую свежесть и богатый состав полезных веществ. Оно является идеальным источником кальция, белка и
                        витаминов, необходимых для роста и развития организма.</div>
                </div>
            </div>
            <div className="about">
                <div className="about_img">
                    <img className='about_img1' src={image9} alt="" />
                </div>
                <div className="about_text">
                    <div className="text_about">
                        <img className="img" src={Group36} alt="" />
                        <div className="text4">Наш молочный комбинат является современным предприятием, оснащенным передовым оборудованием и технологиями.</div>
                    </div>
                    <div className="text_about">
                        <img className="img" src={Group36} alt="" />
                        <div className="text4">У нас имеются современные оборудованные цеха, специальные холодильные камеры для хранения сырья и готовой продукции, а также лаборатории для контроля качества на всех этапах производства.</div>
                    </div>
                    <div className="text_about">
                        <img className="img" src={Group36} alt="" />
                        <div className="text4">Мы гордимся нашей командой опытных и высококвалифицированных сотрудников, настоящих профессионалов на своем поле.</div>
                    </div>
                </div>
            </div>
            <div className="number">
                <div className="text3">МОЛОЧНЫЙ КОМБИНАТ В ЦИФРАХ</div>
                <div className="numbers">
                    <div className="group">
                        <div className="one">
                            <div className="text_bold_sin">60</div>
                            <div className="text3">лет</div>
                        </div>
                        <div className="text4">работает комбинат</div>
                    </div>
                    <div className="group">
                        <div className="one">
                            <div className="text_bold_sin">580</div>
                            <div className="text3">тысяч</div>
                        </div>
                        <div className="text4">упаковок молока было изготовлено</div>
                    </div>
                    <div className="group">
                        <div className="one">
                            <div className="text_bold_sin">250</div>
                            <div className="text3">человек</div>
                        </div>
                        <div className="text4">трудилось над созданием идеального вкуса молока</div>
                    </div>
                    <div className="group">
                        <div className="one">
                            <div className="text_bold_sin">3</div>
                            <div className="text3">млн человек</div>
                        </div>
                        <div className="text4">восхищаются вкусом нашего молока</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;