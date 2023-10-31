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
    </>
    )
}

export default About;