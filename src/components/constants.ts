export interface MaterialsProps {
    id: number;
    descriptionType: string;
    title: string;
    img: string;
    price: string;
    fraction?: string;
    slug: string
}
export interface ServicesProps {
    id: number; 
    title: string;
    img: string;
    cost: string;
    description: string;
    descriptionWithPrice?: boolean | false;
    slug: string
}
export interface TehnixProps { 
    id: number; 
    name: string;
    descriptionType: string; 
    descriptionName?: string; 
    img: string; 
    loadcapacity: string; 
    cost: string;
    description: string;
    slug: string 
}
export const materials: MaterialsProps[] = [
    { id: 1, descriptionType:'щебеня', title: 'Щебень М800', img: '/materials/m800-5-20.webp', price: '2200 ₽/м<sup>3</sup>', fraction: '5/20', slug: 'shcheben-m800-5-20' },
    { id: 2, descriptionType:'щебеня', title: 'Щебень М800', img: '/materials/m800-20-40.webp', price: '2000 ₽/м<sup>3</sup>', fraction: '20/40', slug: 'shcheben-m800-20-40' },
    { id: 3, descriptionType:'щебеня', title: 'Щебень М800', img: '/materials/m800-40-70.webp', price: '2000 ₽/м<sup>3</sup>', fraction: '40/70', slug: 'shcheben-m800-40-70' },
    { id: 4, descriptionType:'щебеня', title: 'Щебень М600', img: '/materials/m800-5-20.webp', price: '2200 ₽/м<sup>3</sup>', fraction: '5/20', slug: 'shcheben-m600-5-20' },
    { id: 5, descriptionType:'щебеня', title: 'Щебень М600', img: '/materials/m800-20-40.webp', price: '2000 ₽/м<sup>3</sup>', fraction: '20/40', slug: 'shcheben-m600-20-40' },
    { id: 6, descriptionType:'щебеня', title: 'Щебень М600', img: '/materials/m800-40-70.webp', price: '2000 ₽/м<sup>3</sup>', fraction: '40/70', slug: 'shcheben-m600-40-70' },
    { id: 7, descriptionType:'речного песка', title: 'Песок речной', img: '/materials/pesok-rechnoy.webp', price: '320 ₽/м<sup>3</sup>', slug: 'pesok-rechnoy' },
    { id: 8, descriptionType:'горного песка', title: 'Песок горный', img: '/materials/pesok-gorniy.webp', price: '100 ₽/м<sup>3</sup>', slug: 'pesok-gornyy' },
    { id: 9, descriptionType:'кирпича', title: 'Кирпич', img: '/materials/kirpich.webp', price: 'Договорная', slug: 'kirpich' },
    { id: 10, descriptionType:'чернозема', title: 'Чернозем', img: '/materials/chernozem.webp', price: 'Договорная', slug: 'chernozem' },
    { id: 11, descriptionType:'асфальта', title: 'Асфальт', img: '/materials/asfalt.webp', price: '3200 ₽/м<sup>3</sup>', slug: 'asfalt' },
    { id: 12, descriptionType:'асфальтной крошки', title: 'Асфальтная крошка', img: '/materials/asfalt-kroshka.webp', price: '800 ₽/м<sup>3</sup>', slug: 'asfaltnaya-kroshka' },
    { id: 13, descriptionType:'керамзита', title: 'Керамзит', img: '/materials/keramzit.webp', price: 'Договорная', slug: 'keramzit' },
    { id: 14, descriptionType:'грунта', title: 'Грунт', img: '/materials/grunt.webp', price: 'Договорная', slug: 'grunt' },
    { id: 15, descriptionType:'леса', title: 'Лес', img: '/materials/les.webp', price: 'Договорная', slug: 'les' },
    { id: 16, descriptionType:'жбк-конструкций', title: 'ЖБК-конструкции', img: '/materials/jbk.webp', price: 'Договорная', slug: 'zhbk-konstruktsii' }
]
export const services: ServicesProps[] = [
    {
      id: 1,
      title: 'Уборка и вывоз снега',
      img: '/uslugi/sneg.webp',
      cost: 'от 600 ₽/м<sup>3</sup>',
      description: 'Зимой своевременная уборка снега — не просто вопрос комфорта, но и безопасности. Мы предлагаем профессиональные услуги по уборке и вывозу снега с придомовых территорий, дорог, парковок, крыш и других объектов. Работы выполняются с использованием специализированной техники и ручного труда — в зависимости от объема и специфики объекта.',
      slug: 'uborka-snega'
    },
    {
      id: 2,
      title: 'Дорожно-строительные работы',
      img: '/uslugi/rem.webp',
      cost: 'от 700 ₽/м<sup>3</sup>',
      descriptionWithPrice: true,
      description: 'Предлагаем комплексные услуги по устройству, ремонту и обслуживанию дорог различного назначения. Мы выполняем дорожные работы "под ключ" — от подготовки основания до укладки асфальта и благоустройства прилегающей территории.',
      slug: 'dorozhno-stroitelnye-raboty'
    },
    {
      id: 3,
      title: 'Земляные работы',
      img: '/uslugi/zem.webp',
      cost: 'от 100 ₽/м<sup>3</sup>',
      descriptionWithPrice: true,
      description: 'Выполняем полный спектр земляных работ для строительства, ландшафтного благоустройства и инженерных коммуникаций. Используем современную спецтехнику и обеспечиваем точность, безопасность и соблюдение всех технологических норм на каждом этапе.',
      slug: 'zemlyanye-raboty'
    },
    {
      id: 4,
      title: 'Планировка и благоустройство прудов',
      img: '/uslugi/prudi.webp',
      cost: 'Договорная',
      description: 'Создание декоративных и функциональных водоемов — это сочетание инженерной точности и эстетики. Мы выполняем полный комплекс работ по планировке, устройству и благоустройству прудов на частных, коммерческих и общественных территориях.',
      slug: 'blagoustroystvo-prudov'
    },
    {
      id: 5,
      title: 'Прокладка коммуникаций',
      img: '/uslugi/kom.webp',
      cost: 'Договорная',
      description: 'Профессионально выполняем работы по прокладке наружных и внутренних инженерных коммуникаций для частных, коммерческих и муниципальных объектов. <ul class="dash-list"><li>Прокладка трубопроводов для водоснабжения, водотведения, электрических кабелей, слаботочных сетей, канализаций</li><li>Монтаж трубопроводов, электрических кабелей, труб канализации</li><li>Cварка полиэтиленовых труб</li><li>Установка колодцев (на любой глубине)</li></ul>',
      slug: 'prokladka-kommunikatsiy'
    },
    {
      id: 6,
      title: 'Демонтажные работы',
      img: '/uslugi/demontaz.webp',
      cost: 'Договорная',
      description: 'Проводим демонтажные работы любой сложности — от разборки малых архитектурных форм до сноса капитальных зданий и сооружений. Обеспечиваем безопасность, точность и строгое соблюдение нормативных требований.',
      slug: 'demontazhnye-raboty'
    },
    {
      id: 7,
      title: 'Уборка и вывоз строительного мусора',
      img: '/uslugi/musor.webp',
      cost: 'от 600 ₽/м<sup>3</sup>',
      description: 'После строительства, ремонта или демонтажных работ остается значительное количество отходов, которые требуют правильной и своевременной утилизации. Мы предоставляем комплексную услугу по уборке и вывозу строительного мусора с любых объектов — от частных участков до крупных строительных площадок.',
      slug: 'uborka-stroitelnogo-musora'
    }
  ];
  export const tehnix: TehnixProps[] = [
    {
      id: 1,
      name: 'КАМАЗ',
      descriptionType: 'самосвала',
      descriptionName: 'КАМАЗ-55111',
      img: '/kamaz.webp',
      loadcapacity: '10 тонн',
      cost: 'Договорная',
      description: 'КАМАЗ отлично подходит для транспортировки сыпучих материалов на строительных и дорожных объектах. Простота в обслуживании, высокая манёвренность и надёжная конструкция делают его востребованным в самых разных условиях. Благодаря оптимальной грузоподъёмности и доступной стоимости аренды.',
      slug: 'kamaz'
    },
    {
      id: 2,
      name: 'Shacman',
      descriptionType: 'самосвала',
      descriptionName: 'Shacman (25 т)',
      img: '/shacman-25.webp',
      loadcapacity: '25 тонн',
      cost: 'Договорная',
      description: 'Shacman — современный тяжеловоз, сочетающий в себе мощность, экономичность и комфортабельную кабину для водителя. Идеален для перевозки щебня, песка, грунта и других материалов на средние и дальние расстояния. Надёжная трансмиссия и усиленное шасси обеспечивают стабильную работу даже при интенсивной эксплуатации.',
      slug: 'shacman-25t'
    },
    {
      id: 3,
      name: 'Shacman',
      descriptionType: 'самосвала',
      descriptionName: 'Shacman (50 т)',
      img: '/shacman-40.webp',
      loadcapacity: '40 тонн',
      cost: 'Договорная',
      description: 'Shacman — мощный самосвал повышенной грузоподъёмности, разработанный для транспортировки крупных объёмов груза в сложных условиях. Обеспечивает максимальную эффективность при работе на карьерах, крупных стройках и в промышленной логистике. Лучший вариант для выполнения б масштабных строительных проектов.',
      slug: 'shacman-50t'
    },
    {
      id: 4,
      name: 'Фронтальный погрузчик PowerCat PC.41',
      descriptionType: 'фронтального погрузчика',
      img: '/front-loader.webp',
      loadcapacity: '4 тонны',
      cost: 'от 3800 ₽/час',
      description: 'POWER CAT PC 41 — надёжный фронтальный погрузчик для работы с сыпучими материалами, грунтом и строительными отходами. Обладает высокой производительностью, простым управлением и прочной конструкцией. Устойчив в тяжёлых условиях и подходит для длительной и интенсивной эксплуатации.',
      slug: 'front-loader'
    },
    {
      id: 5,
      name: 'Мини-погрузчик Bobcat S175',
      descriptionType: 'мини-погрузчика',
      img: '/bobcat.webp',
      loadcapacity: '1 тонна',
      cost: 'от 2600 ₽/час',
      description: 'Компактный и манёвренный мини-погрузчик BOBCAT S175 идеально подходит для работы в ограниченном пространстве. Он легко справляется с погрузкой, перемещением и планировкой различных материалов. Удобное управление, надёжность и быстрая смена навесного оборудования делают его универсальной машиной для строительных, дорожных и ландшафтных работ.',
      slug: 'mini-pogruzchik'
    },
    {
      id: 6,
      name: 'Гидромолот Bobcat S175',
      descriptionType: 'гидромолота',
      img: '/hydro.webp',
      loadcapacity: '-',
      cost: 'от 3000 ₽/час',
      description: 'Гидромолот, установленный на мини-погрузчик BOBCAT S175, позволяет эффективно демонтировать бетон, асфальт и другие твердые покрытия. Отличается высокой ударной мощностью и точностью работы даже в ограниченном пространстве. Простота подключения и эксплуатации делают его удобным инструментом при ремонте дорог, демонтаже конструкций и подготовке строительных площадок.',
      slug: 'gidromolot'
    },
    {
      id: 7,
      name: 'Экскаватор Bobcat S175',
      descriptionType: 'эскаватора',
      img: '/bobcat-escavator.webp',
      loadcapacity: '0.6 тонн',
      cost: 'от 3000 ₽/час',
      description: 'Экскаватор BOBCAT S175 — это универсальная и компактная машина, обладающая высокой производительностью, манёвренностью и точностью при выполнении земляных, демонтажных и строительных работ. Является надёжным помощником при благоустройстве территорий, ремонте дорог и подготовке строительных площадок.',
      slug: 'ekskavator'
    },
    {
      id: 8,
      name: 'Виброкаток Ammann ARX 40K',
      descriptionType: 'виброкатка',
      img: '/katok.webp',
      loadcapacity: '-',
      cost: 'от 20000 ₽/смена',
      description: 'Виброкаток AMMANN ARX 40K — универсальная и высокоэффективная техника для уплотнения асфальта и грунта. Обладает высокой производительностью, манёвренностью и простотой в управлении, идеально подходит для работы в стеснённых условиях при ремонте дорог и благоустройстве территорий.',
      slug: 'vibrokatok'
    },
    {
      id: 9,
      name: 'Ямобур ISUZU elf',
      descriptionType: 'ямобура',
      img: '/yamobur.webp',
      loadcapacity: '3 тонны',
      cost: 'от 3000 ₽/час',
      description: 'Компактный и надёжный агрегат для бурения скважин и установки опор. Обладает отличной манёвренностью и точностью, что позволяет эффективно работать в городских условиях и на ограниченных территориях. Идеален для установки столбов и других конструкций.',
      slug: 'yamobur'
    },
    {
      id: 10,
      name: 'Экскаватор-погрузчик Caterpillar',
      descriptionType: 'экскаватора-погрузчика',
      img: '/backhoe-loader.webp',
      loadcapacity: '5 тонн',
      cost: 'от 3000 ₽/час',
      description: 'Многофункциональная техника для земляных и строительных работ, с высокой манёвренностью и проходимостью. Отличается устойчивостью и лёгкостью в управлении, что делает её идеальной для работы на ограниченных площадках.',
      slug: 'ekskavator-pogruzchik'
    },
    {
      id: 11,
      name: 'Автокран Ивановец',
      descriptionType: 'автокрана',
      img: '/crane.webp',
      loadcapacity: '16 тонн',
      cost: 'от 2700 ₽/час',
      description: 'Мощный и надёжный кран с высокой грузоподъёмностью, предназначенный для подъёма и перемещения тяжёлых грузов. Его манёвренность и стабильность обеспечивают эффективность при работе в ограниченных пространствах и на сложных строительных объектах.',
      slug: 'avtokran'
    }
  ]
  