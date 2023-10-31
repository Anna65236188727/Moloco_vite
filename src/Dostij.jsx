import image18 from "./assets/image18.png";
import image19 from "./assets/image19.png";
import image20 from "./assets/image20.png";
import image21 from "./assets/image21.png";

function Dostij() {
    return <>
        <div className="dostij">
            <div className="text3 dos">ДОСТИЖЕНИЯ И НАГРАДЫ</div>
            <div className="text3 dos">Продукция с Российским знаком качества!</div>
            <div className="footer_text dos">Качество молочных продуктов, произведенных специалистами комбината, подтверждено многочисленными наградами, дипломами и грамотами. </div>
            <div className="diploms">
                <div className="dip">
                    <img src={image18} alt="" />
                </div>
                <div className="dip">
                    <img src={image19} alt="" />
                </div>
                <div className="dip">
                    <img src={image20} alt="" />
                </div>
                <div className="dip">
                    <img src={image21} alt="" />
                </div>
            </div>
        </div>
    </>
}

export default Dostij;
