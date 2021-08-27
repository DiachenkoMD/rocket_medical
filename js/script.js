
document.addEventListener("DOMContentLoaded", function () {
    const VueApp = {
        data() {
            return {
                selected_lang: 0,
                langs:[
                    {
                        name: "RU",
                        translation: {
                            nav: {
                                about_us: "О нас",
                                stats: "Статистика",
                                about_services: "О сервисах",
                                services: "Сервисы",
                                feedback: "Отзывы",
                                contacts: "Контакты"
                            },
                            intro: {
                                title: '<higher>Европейский</higher><br> инновационный <br> агрегатор медицинских <br> услуг по всему миру',
                                description: 'Мы предоставляем высококачественные медицинские услуги на выезде вне зависимости где вы находитесь. Обращаясь к нам - вы получаете лучший сервис и лучшие цены в любой стране мира.',
                                action: 'Заказать услуги'
                            },
                            stats:{
                                title: "Наша статистика",
                                subtitle: "Цифры говорят сами за себя",
                                first: "Подписано контрактов с медицинскими учреждениями",
                                second: "Подписано контрактов с медицинскими учреждениями",
                                third: "Сдано тестов и анализов через нашу систему",
                                fourth: "Стран в которых мы <br> работаем",
                                fifth: "Сотрудников <br> в компании"
                            },
                            about:{
                                title: "О нас",
                                description: "<span class=\"highlight\">Rocket Medical</span> - это компания единомышленников с разных стран, которая поставила себе амбициозную цель воплотить в жизнь агрегатор медицинских услуг, которым можно будет пользоваться где бы вы не находились. Мы лидирующая HealthTech компания с штатом больше 300 человек, главным офисом в Цюрихе и более 40 представительствам в других странах. Наша основная задача стоит в том, что бы наши клиенты имели возможность получить качественный сервис в любой точке мире и в любое время дня и ночи. Наша компания сотрудничает только с клиниками лидирующеми на своем рынке, ведущими специалистами в здравоохранении, а так же высокотехнологичными лабораториями. Мы всегда открыты к сотрудничеству и будем рады взаимовыгодной работе."
                            },
                            how_we_work:{
                                title: "Как мы работаем",
                                step_1: "Заполняете бланк",
                                step_2: "Связываетесь с персональным менеджером",
                                step_3: "Получаете предложения",
                                step_4: "Пользуетесь услугами"
                            },
                            features:{
                                title: "Виды услуг",
                                first: "Feature 1",
                                second: "Feature 2",
                                third: "Feature 3",
                                fourth: "Feature 4",
                                fifth: "Feature 5",
                                sixth: "Feature 6",
                                seventh: "Feature 7",
                                eighth: "Feature 8",
                            },
                            feedback:{
                                title: "Отзывы наших клиентов",
                                first: {
                                    title: "Невероятный опыт",
                                    description: "Я уже не первый раз в этом обращался и мне очень подобаеться.Вона поступила, она очень корректно, она компетентна. В своем индивидуальном пидходи.Дуже уважается. В клинике все чисто и опрятно. Круглосуточно работает. У меня нет никаких претензий.",
                                    author: {
                                        avatar: "assets/avatar.png",
                                        username: "Диана Лумани",
                                        company: "CEO, ABC Corporation"
                                    }
                                },
                                second: {
                                    title: "Рекомендую",
                                    description: "Я уже не первый раз в этом обращался и мне очень подобаеться.Вона поступила, она очень корректно, она компетентна. В своем индивидуальном пидходи.Дуже уважается. В клинике все чисто и опрятно. Круглосуточно работает. У меня нет никаких претензий.",
                                    author: {
                                        avatar: "assets/avatar.png",
                                        username: "Анастасия Товали",
                                        company: "CEO, ABC Corporation"
                                    }
                                }
                            },
                            contacts: {
                                title: "Контакти",
                                details: "<h4>Есть направление от врача?</h4>" +
                                    "<p>" +
                                    "  Мы позаботимся о вашем комфорте. Сфотографируйте направления, загрузите и оставьте ваши контактные данные." +
                                    "</p>" +
                                    "<p>" +
                                    "  Мы сформируем для вас заказ на нужные анализы, вам останется только прийти и сдать то, что надо." +
                                    "</p>",
                                download_directions: "Загрузите направления",
                                placeholders:{
                                    first: "*Имя",
                                    second: "*Фамилия",
                                    third: "*Телефон",
                                    fourth: "*Електронный адрес"
                                },
                                agreement: 'Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных',
                                action: 'Отправить'
                            },
                            footer:{
                                company_title: "Компания",
                                help_title: "Помощь",
                                news_title: "Будь в курсе новостей",
                                news_placeholder: "Введите ваш email адрес",
                                action: "Заказать услуги"
                            }
                        }
                    },
                    {
                        name: "UA",
                        translation: {

                        }
                    },
                    {
                        name: "EN",
                        translation: {

                        }
                    },
                    {
                        name: "FR",
                        translation: {

                        }
                    }
                ]
            }
        },
        computed: {
          translation: function() { return this.langs[this.selected_lang]["translation"]}
        },
        methods: {
            selectLanguage(language_id){
                this.selected_lang = language_id;
            },
            openLanguageSelector(event){
                let dropdownParentEl = event.target.parentElement;

                var dropdownEl = null;
                for (var i = 0; i < dropdownParentEl.childNodes.length; i++) {
                    if (dropdownParentEl.childNodes[i].className == "language_selector-dropdown") {
                        dropdownEl = dropdownParentEl.childNodes[i];
                        break;
                    }
                };
                if(!dropdownParentEl.classList.contains("opened")){
                    dropdownParentEl.classList.add("opened");
                }else{
                    dropdownParentEl.classList.remove("opened");
                }
            },
            openNav(){
                let nav = document.getElementsByClassName("floating-nav")[0];
                let closeNav = document.getElementsByClassName("close-nav")[0];
                nav.style.top = "0";
                closeNav.style.top = "35px";
                disableScroll();
            },
            closeNav(){
                let nav = document.getElementsByClassName("floating-nav")[0];
                let closeNav = document.getElementsByClassName("close-nav")[0];
                nav.style.top = "-100%";
                closeNav.style.top = "-100%";
                enableScroll();
            },

            scrollTop(){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        }
    };

    Vue.createApp(VueApp).mount('#app');


    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () { supportsPassive = true; }
        }));
    } catch(e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    let scrollTopButton = document.getElementsByClassName("to-top")[0];

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > window.outerHeight || document.documentElement.scrollTop > window.outerHeight) {
            scrollTopButton.style.opacity = "1";
        } else {
            scrollTopButton.style.opacity = "0";
        }
    }

});