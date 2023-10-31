import image22 from './assets/image22.png';
import image23 from './assets/image23.png';
import group35 from './assets/group35.png';
import logo from './assets/logo.png';

function Footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="title_footer">Компания</div>
                    <div className="footer_text">О нас<br />
                        Достижения<br />
                        История<br />
                        Новости и акции<br />
                    </div>
                </div>
                <div className="footer">
                    <div className="title_footer">Информация</div>
                    <div className="footer_text">Документы<br />
                        Вакансии
                    </div>
                </div>
                <div className="footer">
                    <div className="title_footer">Контакты</div>
                    <div className="footer_text">Телефон: 89005055555<br/>
                        Почта: moikom@gmail.com
                        <div className="icon">
                            <img src={image22} alt="" />
                            <img src={image23} alt="" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="icon2">
                        <img src={group35} alt="" />
                        <img src={logo} alt="" />
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;