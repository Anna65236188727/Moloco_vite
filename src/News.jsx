import image15 from "./assets/image15.png";
import image16 from "./assets/image16.png";
import image17 from "./assets/image17.png";

function News() {
    return <>
        <div className="news">
            <div className="text3">НОВОСТИ</div>
            <div className="news_block3">
                <div className="news_block">
                    <img src={image15} alt="" />
                    <div className="text_mini">26 сентября 2023</div>
                    <div className="text4_bold">На МК работают лучшие кадры</div>
                    <div className="text4">Руководитель службы охраны труда Олеся Сергеевна Скрягина, заняла 1 место «Лучший специалист» в номинации «Лучший специалист производственной сферы»!</div>
                </div>
                <div className="news_block">
                    <img src={image16} alt="" />
                    <div className="text_mini">26 сентября 2023</div>
                    <div className="text4_bold">Праздник для первоклассников</div>
                    <div className="text4">Уже доброй традицией на нашем предприятии стал детский праздник, который мы устраиваем каждый год для первоклассников и их родителей. И этот год не стал исключением.</div>
                </div>
                <div className="news_block">
                    <img src={image17} alt="" />
                    <div className="text_mini">26 сентября 2023</div>
                    <div className="text4_bold">Все начинается с семьи</div>
                    <div className="text4">8 июля на базе отдыха «Славное место» прошло масштабное мероприятие для семей сотрудников «Все начинается с семьи», приуроченное к празднику «День любви, семьи и верности».</div>
                </div>
            </div>
        </div>
    </>
}

export default News;
