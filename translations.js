// Base de données des traductions
const traductions = {
    fr: {
        // Page title
        "titre-page": "Histoire Moderne - Révolution Industrielle, Guerres Mondiales et Guerre Froide",
        
        // Header
        "titre-principal": "Chroniques de l'Histoire Moderne",
        "sous-titre": "De la Révolution Industrielle à la Guerre Froide",
        
        // Navigation
        "nav-revolution": "Révolution Industrielle",
        "nav-ww1": "Première Guerre Mondiale",
        "nav-ww2": "Seconde Guerre Mondiale",
        "nav-guerre-froide": "Guerre Froide",
        
        // Révolution Industrielle
        "titre-revolution": "La Révolution Industrielle",
        "periode-revolution": "1760 - 1840",
        "sous-titre-revolution-1": "Les Origines de la Transformation",
        "texte-revolution-1": "La Révolution Industrielle, qui débuta en Grande-Bretagne dans la seconde moitié du XVIIIe siècle, marqua un tournant décisif dans l'histoire de l'humanité. Ce bouleversement sans précédent transforma radicalement les sociétés agricoles et artisanales en sociétés industrielles et urbaines. L'invention de la machine à vapeur par James Watt en 1769 catalysa cette transformation, permettant une mécanisation massive de la production.",
        "sous-titre-revolution-2": "Les Innovations Majeures",
        "texte-revolution-2": "Le secteur textile fut le premier à être révolutionné avec la spinning jenny de James Hargreaves et le métier à tisser mécanique d'Edmund Cartwright. Le développement des chemins de fer, inauguré par la ligne Stockton-Darlington en 1825, révolutionna les transports. La métallurgie progressa considérablement grâce au procédé Bessemer, permettant la production d'acier à grande échelle.",
        "sous-titre-revolution-3": "Les Conséquences Sociales",
        "texte-revolution-3": "Cette période vit l'émergence d'une nouvelle classe sociale : le prolétariat ouvrier. Les conditions de travail étaient souvent extrêmement dures, avec des journées de 14 à 16 heures. L'exode rural s'accéléra, gonflant démesurément les villes. Ces bouleversements engendrèrent les premiers mouvements sociaux et syndicaux, ainsi que des théoriciens comme Karl Marx qui analysa ces transformations dans \"Le Capital\".",
        
        // Première Guerre Mondiale
        "titre-ww1": "La Première Guerre Mondiale",
        "periode-ww1": "1914 - 1918",
        "sous-titre-ww1-1": "L'Étincelle et l'Embarras des Alliances",
        "texte-ww1-1": "L'assassinat de l'archiduc François-Ferdinand d'Autriche à Sarajevo le 28 juin 1914 déclencha un conflit qui embrasa l'Europe entière. Le système complexe d'alliances - la Triple Entente (France, Royaume-Uni, Russie) contre les Empires centraux (Allemagne, Autriche-Hongrie) - transforma un incident régional en guerre mondiale. En quelques semaines, les grandes puissances se retrouvèrent engagées dans un conflit d'une ampleur sans précédent.",
        "sous-titre-ww1-2": "La Guerre des Tranchées",
        "texte-ww1-2": "Le front occidental se figea rapidement dans une guerre de positions terrifiante. Des tranchées s'étendirent de la mer du Nord à la Suisse sur plus de 700 kilomètres. Les batailles de Verdun (1916) et de la Somme (1916) symbolisèrent l'horreur de cette guerre industrielle, avec des centaines de milliers de morts pour des gains territoriaux minimes. De nouvelles armes apparurent : gaz toxiques, chars d'assaut, aviation militaire.",
        "sous-titre-ww1-3": "Le Bilan et les Traités",
        "texte-ww1-3": "L'armistice du 11 novembre 1918 mit fin à quatre années de conflit qui firent plus de 18 millions de morts. Le Traité de Versailles, signé en 1919, imposa des conditions très dures à l'Allemagne : pertes territoriales, démilitarisation, lourdes réparations financières. L'Empire austro-hongrois et l'Empire ottoman furent démantelés. La carte de l'Europe fut entièrement redessinée, créant les germes des conflits futurs.",
        
        // Seconde Guerre Mondiale
        "titre-ww2": "La Seconde Guerre Mondiale",
        "periode-ww2": "1939 - 1945",
        "sous-titre-ww2-1": "La Montée des Totalitarismes",
        "texte-ww2-1": "L'entre-deux-guerres vit l'ascension des régimes totalitaires en Europe. En Allemagne, Adolf Hitler et le parti nazi arrivèrent au pouvoir en 1933, exploitant le ressentiment né du Traité de Versailles. L'expansionnisme allemand - remilitarisation de la Rhénanie, annexion de l'Autriche (Anschluss), crise des Sudètes - fut d'abord toléré par les démocraties occidentales dans une politique d'apaisement qui s'avéra désastreuse.",
        "sous-titre-ww2-2": "Le Conflit Mondial",
        "texte-ww2-2": "L'invasion de la Pologne le 1er septembre 1939 déclencha la Seconde Guerre Mondiale. La Blitzkrieg allemande submergea rapidement l'Europe occidentale. La bataille d'Angleterre (1940) marqua le premier échec d'Hitler. L'invasion de l'URSS en 1941 ouvrit le front de l'Est, le plus meurtrier du conflit. L'attaque japonaise sur Pearl Harbor le 7 décembre 1941 entraîna les États-Unis dans la guerre, la mondialisant définitivement.",
        "sous-titre-ww2-3": "La Victoire et l'Holocauste",
        "texte-ww2-3": "Le génocide systématique des Juifs d'Europe - la Shoah - fit 6 millions de victimes. Le débarquement de Normandie le 6 juin 1944 ouvrit un second front à l'Ouest. L'Allemagne capitula le 8 mai 1945. La guerre dans le Pacifique se termina après les bombardements atomiques d'Hiroshima (6 août) et Nagasaki (9 août), le Japon capitulant le 2 septembre 1945. Le bilan total dépassa 60 millions de morts.",
        
        // Guerre Froide
        "titre-guerre-froide": "La Guerre Froide",
        "periode-guerre-froide": "1947 - 1991",
        "sous-titre-froide-1": "La Bipolarisation du Monde",
        "texte-froide-1": "Après 1945, le monde se divisa en deux blocs antagonistes : le bloc occidental mené par les États-Unis et le bloc communiste dirigé par l'URSS. La doctrine Truman (1947) d'endiguement du communisme et le Plan Marshall de reconstruction de l'Europe répondaient à la mainmise soviétique sur l'Europe de l'Est. Le \"rideau de fer\" s'abattit sur le continent européen, symbolisé par la division de l'Allemagne et de Berlin.",
        "sous-titre-froide-2": "Les Crises Majeures",
        "texte-froide-2": "La guerre froide fut ponctuée de crises qui faillirent déclencher un conflit nucléaire. Le blocus de Berlin (1948-1949) aboutit au pont aérien allié. La guerre de Corée (1950-1953) fut le premier conflit armé de la guerre froide. La crise des missiles de Cuba en 1962 plaça le monde au bord de l'apocalypse nucléaire. La guerre du Vietnam (1964-1975) illustra l'engagement américain contre l'expansion communiste en Asie.",
        "sous-titre-froide-3": "La Détente et la Chute",
        "texte-froide-3": "Les années 1970 virent une période de détente avec les accords SALT de limitation des armements nucléaires. Mais l'invasion soviétique de l'Afghanistan en 1979 relança les tensions. L'arrivée de Mikhaïl Gorbatchev au pouvoir en 1985 et ses réformes (perestroïka et glasnost) changèrent la donne. La chute du mur de Berlin le 9 novembre 1989 symbolisa la fin de la guerre froide, suivie de la dissolution de l'URSS en décembre 1991.",
        
        // Footer
        "footer-texte": "© 2026 Chroniques de l'Histoire Moderne - Site éducatif et historique"
    },
    
    en: {
        // Page title
        "titre-page": "Modern History - Industrial Revolution, World Wars and Cold War",
        
        // Header
        "titre-principal": "Chronicles of Modern History",
        "sous-titre": "From the Industrial Revolution to the Cold War",
        
        // Navigation
        "nav-revolution": "Industrial Revolution",
        "nav-ww1": "First World War",
        "nav-ww2": "Second World War",
        "nav-guerre-froide": "Cold War",
        
        // Industrial Revolution
        "titre-revolution": "The Industrial Revolution",
        "periode-revolution": "1760 - 1840",
        "sous-titre-revolution-1": "The Origins of Transformation",
        "texte-revolution-1": "The Industrial Revolution, which began in Great Britain in the second half of the 18th century, marked a decisive turning point in human history. This unprecedented upheaval radically transformed agricultural and artisanal societies into industrial and urban societies. The invention of the steam engine by James Watt in 1769 catalyzed this transformation, enabling massive mechanization of production.",
        "sous-titre-revolution-2": "Major Innovations",
        "texte-revolution-2": "The textile sector was the first to be revolutionized with James Hargreaves' spinning jenny and Edmund Cartwright's power loom. The development of railways, inaugurated by the Stockton-Darlington line in 1825, revolutionized transportation. Metallurgy progressed considerably thanks to the Bessemer process, enabling large-scale steel production.",
        "sous-titre-revolution-3": "Social Consequences",
        "texte-revolution-3": "This period saw the emergence of a new social class: the industrial proletariat. Working conditions were often extremely harsh, with 14 to 16-hour days. Rural exodus accelerated, enormously swelling cities. These upheavals gave rise to the first social and trade union movements, as well as theorists like Karl Marx who analyzed these transformations in \"Das Kapital\".",
        
        // First World War
        "titre-ww1": "The First World War",
        "periode-ww1": "1914 - 1918",
        "sous-titre-ww1-1": "The Spark and the Entanglement of Alliances",
        "texte-ww1-1": "The assassination of Archduke Franz Ferdinand of Austria in Sarajevo on June 28, 1914, triggered a conflict that engulfed all of Europe. The complex alliance system - the Triple Entente (France, United Kingdom, Russia) against the Central Powers (Germany, Austria-Hungary) - transformed a regional incident into a world war. Within weeks, the great powers found themselves engaged in a conflict of unprecedented scale.",
        "sous-titre-ww1-2": "Trench Warfare",
        "texte-ww1-2": "The Western Front quickly froze into terrifying positional warfare. Trenches stretched from the North Sea to Switzerland over 700 kilometers. The battles of Verdun (1916) and the Somme (1916) symbolized the horror of this industrial war, with hundreds of thousands of deaths for minimal territorial gains. New weapons appeared: poison gas, tanks, military aviation.",
        "sous-titre-ww1-3": "The Toll and the Treaties",
        "texte-ww1-3": "The Armistice of November 11, 1918, ended four years of conflict that caused more than 18 million deaths. The Treaty of Versailles, signed in 1919, imposed very harsh conditions on Germany: territorial losses, demilitarization, heavy financial reparations. The Austro-Hungarian and Ottoman Empires were dismantled. The map of Europe was completely redrawn, creating the seeds of future conflicts.",
        
        // Second World War
        "titre-ww2": "The Second World War",
        "periode-ww2": "1939 - 1945",
        "sous-titre-ww2-1": "The Rise of Totalitarianism",
        "texte-ww2-1": "The interwar period saw the rise of totalitarian regimes in Europe. In Germany, Adolf Hitler and the Nazi Party came to power in 1933, exploiting resentment born from the Treaty of Versailles. German expansionism - remilitarization of the Rhineland, annexation of Austria (Anschluss), Sudetenland crisis - was initially tolerated by Western democracies in a policy of appeasement that proved disastrous.",
        "sous-titre-ww2-2": "The Global Conflict",
        "texte-ww2-2": "The invasion of Poland on September 1, 1939, triggered the Second World War. The German Blitzkrieg quickly overwhelmed Western Europe. The Battle of Britain (1940) marked Hitler's first failure. The invasion of the USSR in 1941 opened the Eastern Front, the deadliest of the conflict. The Japanese attack on Pearl Harbor on December 7, 1941, brought the United States into the war, making it truly global.",
        "sous-titre-ww2-3": "Victory and the Holocaust",
        "texte-ww2-3": "The systematic genocide of European Jews - the Holocaust - claimed 6 million victims. The Normandy landings on June 6, 1944, opened a second front in the West. Germany capitulated on May 8, 1945. The war in the Pacific ended after the atomic bombings of Hiroshima (August 6) and Nagasaki (August 9), with Japan surrendering on September 2, 1945. The total toll exceeded 60 million deaths.",
        
        // Cold War
        "titre-guerre-froide": "The Cold War",
        "periode-guerre-froide": "1947 - 1991",
        "sous-titre-froide-1": "The Bipolarization of the World",
        "texte-froide-1": "After 1945, the world divided into two antagonistic blocs: the Western bloc led by the United States and the communist bloc led by the USSR. The Truman Doctrine (1947) of containing communism and the Marshall Plan for European reconstruction responded to Soviet control over Eastern Europe. The \"Iron Curtain\" descended upon the European continent, symbolized by the division of Germany and Berlin.",
        "sous-titre-froide-2": "Major Crises",
        "texte-froide-2": "The Cold War was punctuated by crises that nearly triggered nuclear conflict. The Berlin Blockade (1948-1949) led to the Allied airlift. The Korean War (1950-1953) was the first armed conflict of the Cold War. The Cuban Missile Crisis in 1962 brought the world to the brink of nuclear apocalypse. The Vietnam War (1964-1975) illustrated American engagement against communist expansion in Asia.",
        "sous-titre-froide-3": "Détente and the Fall",
        "texte-froide-3": "The 1970s saw a period of détente with the SALT agreements limiting nuclear weapons. But the Soviet invasion of Afghanistan in 1979 reignited tensions. Mikhail Gorbachev's rise to power in 1985 and his reforms (perestroika and glasnost) changed the situation. The fall of the Berlin Wall on November 9, 1989, symbolized the end of the Cold War, followed by the dissolution of the USSR in December 1991.",
        
        // Footer
        "footer-texte": "© 2026 Chronicles of Modern History - Educational and Historical Website"
    },
    
    ru: {
        // Page title
        "titre-page": "Современная история - Промышленная революция, Мировые войны и Холодная война",
        
        // Header
        "titre-principal": "Хроники современной истории",
        "sous-titre": "От Промышленной революции до Холодной войны",
        
        // Navigation
        "nav-revolution": "Промышленная революция",
        "nav-ww1": "Первая мировая война",
        "nav-ww2": "Вторая мировая война",
        "nav-guerre-froide": "Холодная война",
        
        // Industrial Revolution
        "titre-revolution": "Промышленная Революция",
        "periode-revolution": "1760 - 1840",
        "sous-titre-revolution-1": "Истоки трансформации",
        "texte-revolution-1": "Промышленная революция, начавшаяся в Великобритании во второй половине XVIII века, стала решающим поворотным моментом в истории человечества. Это беспрецедентное потрясение радикально преобразовало аграрные и ремесленные общества в индустриальные и городские. Изобретение паровой машины Джеймсом Уаттом в 1769 году катализировало эту трансформацию, позволив провести массовую механизацию производства.",
        "sous-titre-revolution-2": "Основные инновации",
        "texte-revolution-2": "Текстильный сектор был первым, который революционизировали с помощью прядильной машины Джеймса Харгривса и механического ткацкого станка Эдмунда Картрайта. Развитие железных дорог, начатое линией Стоктон-Дарлингтон в 1825 году, произвело революцию в транспорте. Металлургия значительно продвинулась благодаря бессемеровскому процессу, позволившему производить сталь в больших масштабах.",
        "sous-titre-revolution-3": "Социальные последствия",
        "texte-revolution-3": "В этот период появился новый социальный класс: промышленный пролетариат. Условия труда часто были крайне тяжелыми, с 14-16-часовым рабочим днем. Исход из сельской местности ускорился, чрезмерно раздувая города. Эти потрясения породили первые социальные и профсоюзные движения, а также таких теоретиков, как Карл Маркс, который проанализировал эти трансформации в \"Капитале\".",
        
        // First World War
        "titre-ww1": "Первая Мировая Война",
        "periode-ww1": "1914 - 1918",
        "sous-titre-ww1-1": "Искра и путаница альянсов",
        "texte-ww1-1": "Убийство эрцгерцога Франца Фердинанда Австрийского в Сараево 28 июня 1914 года спровоцировало конфликт, охвативший всю Европу. Сложная система альянсов - Тройственная Антанта (Франция, Великобритания, Россия) против Центральных держав (Германия, Австро-Венгрия) - превратила региональный инцидент в мировую войну. В течение нескольких недель великие державы оказались вовлеченными в конфликт беспрецедентного масштаба.",
        "sous-titre-ww1-2": "Окопная война",
        "texte-ww1-2": "Западный фронт быстро застыл в ужасающей позиционной войне. Окопы протянулись от Северного моря до Швейцарии более чем на 700 километров. Битвы при Вердене (1916) и на Сомме (1916) символизировали ужас этой индустриальной войны с сотнями тысяч погибших за минимальные территориальные приобретения. Появилось новое оружие: ядовитые газы, танки, военная авиация.",
        "sous-titre-ww1-3": "Итоги и договоры",
        "texte-ww1-3": "Перемирие 11 ноября 1918 года положило конец четырем годам конфликта, унесшего более 18 миллионов жизней. Версальский договор, подписанный в 1919 году, наложил очень жесткие условия на Германию: территориальные потери, демилитаризация, тяжелые финансовые репарации. Австро-Венгерская и Османская империи были разрушены. Карта Европы была полностью перекроена, создав семена будущих конфликтов.",
        
        // Second World War
        "titre-ww2": "Вторая Мировая Война",
        "periode-ww2": "1939 - 1945",
        "sous-titre-ww2-1": "Восхождение тоталитаризма",
        "texte-ww2-1": "Межвоенный период стал свидетелем подъема тоталитарных режимов в Европе. В Германии Адольф Гитлер и нацистская партия пришли к власти в 1933 году, используя недовольство, рожденное Версальским договором. Германский экспансионизм - ремилитаризация Рейнской области, аннексия Австрии (Аншлюс), Судетский кризис - сначала допускался западными демократиями в политике умиротворения, которая оказалась катастрофической.",
        "sous-titre-ww2-2": "Глобальный конфликт",
        "texte-ww2-2": "Вторжение в Польшу 1 сентября 1939 года положило начало Второй мировой войне. Немецкий блицкриг быстро захлестнул Западную Европу. Битва за Британию (1940) стала первой неудачей Гитлера. Вторжение в СССР в 1941 году открыло Восточный фронт, самый смертоносный в конфликте. Японская атака на Перл-Харбор 7 декабря 1941 года вовлекла Соединенные Штаты в войну, сделав ее по-настоящему глобальной.",
        "sous-titre-ww2-3": "Победа и Холокост",
        "texte-ww2-3": "Систематический геноцид европейских евреев - Холокост - унес 6 миллионов жертв. Высадка в Нормандии 6 июня 1944 года открыла второй фронт на Западе. Германия капитулировала 8 мая 1945 года. Война на Тихом океане закончилась после атомных бомбардировок Хиросимы (6 августа) и Нагасаки (9 августа), Япония капитулировала 2 сентября 1945 года. Общие потери превысили 60 миллионов погибших.",
        
        // Cold War
        "titre-guerre-froide": "Холодная Война",
        "periode-guerre-froide": "1947 - 1991",
        "sous-titre-froide-1": "Биполяризация мира",
        "texte-froide-1": "После 1945 года мир разделился на два антагонистических блока: Западный блок во главе с США и коммунистический блок во главе с СССР. Доктрина Трумэна (1947) о сдерживании коммунизма и План Маршалла по восстановлению Европы были ответом на советский контроль над Восточной Европой. \"Железный занавес\" опустился на европейский континент, что символизировало разделение Германии и Берлина.",
        "sous-titre-froide-2": "Основные кризисы",
        "texte-froide-2": "Холодная война была отмечена кризисами, которые едва не спровоцировали ядерный конфликт. Берлинская блокада (1948-1949) привела к созданию союзного воздушного моста. Корейская война (1950-1953) стала первым вооруженным конфликтом холодной войны. Карибский кризис 1962 года поставил мир на грань ядерного апокалипсиса. Вьетнамская война (1964-1975) продемонстрировала американское участие в борьбе с коммунистической экспансией в Азии.",
        "sous-titre-froide-3": "Разрядка и падение",
        "texte-froide-3": "1970-е годы ознаменовались периодом разрядки с соглашениями ОСВ по ограничению ядерных вооружений. Но советское вторжение в Афганистан в 1979 году возобновило напряженность. Приход Михаила Горбачева к власти в 1985 году и его реформы (перестройка и гласность) изменили ситуацию. Падение Берлинской стены 9 ноября 1989 года символизировало конец холодной войны, за которым последовал распад СССР в декабре 1991 года.",
        
        // Footer
        "footer-texte": "© 2026 Хроники современной истории - Образовательный и исторический сайт"
    }
};