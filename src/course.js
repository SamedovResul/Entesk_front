import uuid from 'react-uuid'
export  const allData = {
	Course :	[
	{
	  id: uuid(),
	  name: 'Elm',
		Category: '/CourseEnviroment',
		Description_1: 'Nə əldə  edəcəksiniz? ',
		learn: [
			{
			tic:	'Müxtəlif elm sahələrini əhatə edən təməl biliklər'
			},
			{
			tic:	'İngilis dilinin inkişafı'
			},
			{
			tic:	'Kommunikasiya bacarıqların inkişafı '
			},
			{
			tic:	'Təqdimat bacarıqlar '
			},
			{
			tic:	'Liderlik bacarıqları'
			},
			{
			tic:	'Komanda işi bacarıqları'
			},
			{
			tic:	'Araşdırma qabiliyyəti'
			},
			{
			tic:	'Kreativ bacarıqların inkişafı'
			},
			{
			tic:	'Problem həll etmə bacarıqları'
			},
			{
			tic:	' Tənqidi düşüncə bacarıqları'
			},
			{
			tic:	' Vaxtın idarə olunması bacarıqları'
			},
			{
			tic:	' Qərar vermə bacarıqları '
			},
			{
			tic:	' Müzakirə və münaqişələrin həlli bacarıqları '
			},
		],
		requireds: [
			{
				required:'Orta səviyyədə İngilis dili biliyi'
			}
		],
		module:[
			{
				mod:'70 dərs',
				note:"30 nəzəri, 30  təcrübi və 10 ödənişsiz qrup təqdimat işi"
			},
			{
				mod:'Dərs materialı',
				note:""
			},
			{
				mod:'Sertifikat',
				note:""
			},
		],
		module_mun: [
			{
				li: "Kosmos və Yer Kürəsi"
			},
			{
				li: "Təbiət Hadisələri"
			},
			{
				li: "Canlılar və Təkamül"
			},
			{
				li: "Ekosistemlər və İqlim Dəyişikliyi"
			},
			{
				li: "İnsan və Mikro Həyat"
			},
			{
				li: "Ölçü və Zaman"
			},
			{
				li: "Əyləncəli Fizika"
			},
			{
				li: "Sadə Fiziki Qanunlar"
			},
			{
				li: "Texnologiya və İnternet"
			},
		], 
		module_for: [
			{
				li: '5 yaş və yuxarı uşaqlar'
			},
			{
				li: 'Ümumi dünya görüşü, yumşaq bacarıqlar (soft skills) və İngilis dili biliklərini inkişaf etdirmək istəyən hər kəs'
			},
		],

		Description_2: 'Elm tarixi',
	  Video: '/video/video1.mp4',
	  image:'/images/science.jpg',
	  text_1:"Bu dərs elm və onun nece istifadə olunmasından bəhs edir. Elm bizi əhatə edən mühiti, yəni, dünyanı və kainatı, buradakı bütün canlı və varlıqları - atomlardan tutmuş nəhəng dağları, kiçik bakteriyalardan tutmuş böyük balniları anlamağa kömək edir. Daha çox öyrəndikcə, daha mürəkkəb biliklərə yol açırıq. Kainatdan kənarda nə yerləşir və biz teleskopla görə bilərikmi? Beyin necə düşünür və hiss edir? Texnologiya və ixtiralarıımızdan səmərəli istifadə etmək üçün elmi biliklər çox vacibdir. Elm hər kəsin xeyrinə istifadə oluna bilər, lakin yanlış istifadə olunan elmi biliklər zərərli ola bilər. Düzgün istifadə edildikdə, elmin gətirdiyi biliklər daha sağlam olmağımıza və daha yaxşı yaşamağımıza kömək edir.",
		text_2:"obyektiv, sistemli və əsaslandırılmış biliklərin əldə edilməsinə, dəqiqləşdirilməsinə və yayılmasına yönəlmiş insan fəaliyyəti növüdür. Bu fəaliyyətin əsasını elmi faktların toplanması, onların daima yenilənməsi və sistemləşdirilməsi, tənqidi analizi və bu əsasda elmi biliklərin toplanması təşkil edir. Elm təkcə müşahidə edilən təbiət və ictimai halları təsvir etmir, həm də onların əlaqələrini tapır və nəticəni müəyyən edə bilir.",
		slide_text:"Elm"
	},
	
	{
	  id: uuid(),
	  name: 'Proqramlaşdırma',
		Category: '/CourseTecnology',
		Description_1: 'Beləliklə, uşaqlar kod yazmağı öyrənməlidirlər, çünki:',
		learn:[
			{
				tic: ' Müasir iş imkanlarına yönəlmiş bilik və bacarıqlar'
			},
			{
				tic: ' Kodlaşdırma/Proqramlaşdırma bacarıqlarının  inkişafı '
			},
			{
				tic: ' Riyazi və məntiqi təfəkkürün inkişafı'
			},
			{
				tic: ' Alqoritmlərin qurulması və iş prosesində tətbiq edilməsi bacarıqları'
			},
			{
				tic: ' Öyrənərək əylənmək imkanı'
			},
			{
				tic: ' Problem həll etmə bacarıqları'
			},
			{
				tic: ' Qoyulmuş məqsədə nail olmaq üçün əzmkarlıq bacarıqlarının inkişafı'
			},
			{
				tic: ' Kreativ bacarıqların inkişafı'
			},
			{
				tic: ' Tənqidi düşüncə bacarıqları'
			},
		],
		requireds: [
			{
				required:'Oxuma və yazma bacarıqları'
			},{
				required:'Başlanğıc səviyyədə İngilis dili bilikləri'
			}
		],
		module:[
			{
				mod:'70 dərs',
				note:""
			},
			{
				mod:'Dərs materialları',
				note:""
			},
			{
				mod:'Sertifikat',
				note:""
			},
		],
		levels: [
			{
				name: 'İlk modul',
					list: [
						{
							li:	"İlk anlayışlar"
						},
						{
							li:	"Kompüter elmi nədir"
						},
						{
							li:	"Müasir texnoloji cihazlar"
						},
						{
							li:	"Kompüter kimi düşünmək "
						},
						{
							li:	"Verilənlər / Data"
						},
						{
							li:	"Programlaşdırma texnologiyaları"
						},
						{
							li:	"Programlaşdırma dilləri"
						},
						{
							li:	"Şəbəkələr"
						},
						{
							li:	"Vebsayt və programların hazırlanması"
						},
						{
							li:	"Rəqəmsal davranış"
						},
						{
							li:	"Sosial Media"
						},
						{
							li:	"Rəqəmsal mövzular"
						},
						{
							li:	"Texnoloji gələcək"
						},
					]	
			},
			{
				name: 'Orta modul',
					list: [
						{
							li:	"Kodlaşdırma nədir ?"
						},
						{
							li:	"Blok proqramlaşdırmadan başlayaq"
						},
						{
							li:	"Macəra 1 - Əjdahadan Qaçış"
						},
						{
							li:	"Macəra 2 - Zəri fırlat"
						},
						{
							li:	"Macəra 3 - Rəqəmsal Meymunu"
						},
					]	
			},
			{
				name: 'Yuxarı modul',
					list: [
						{
							li:	"Kompüter Oyunları"
						},
						{
							li:	"Rəqəmsal Səyahətə Başlayaq"
						},
						{
							li:	"Macəra 1 - Ulduz Ovçusu "
						},
						{
							li:	"Macəra 2 - Pendir izinə çıxmaq"
						},
						{
							li:	"Macəra 3 - Çevrə Müharibəsi "
						},
						{
							li:	"Macəra 4 - Hoplayan Meymun"
						},
						{
							li:	"Macəra 5 - Uçan Süpürgə "
						},
						{
							li:	"Macəra 6 - İtin Yeməyi"
						},
						{
							li:	"Macəra 7 - Buzlaq Yarışı "
						},
						{
							li:	"Macəra 8 - Tropik Səslər"
						},
						{
							li:	"Macəra 9 - Növbədə Nədir ?"
						},
					]	
			},
		],
		

		module_for: [
			{
				li: '5 yaş və yuxarı uşaqlar'
			},
			{
				li: 'Proqramlaşdırma biliklərini inkişaf etdirmək istəyən hər kəs'
			},
		],

		Description_2: 'Elm tarixi',
	  Video: '/video/video1.mp4',
	  image:'/images/coding.jpg',
	  text_1:"Ümumiyyətlə dil öyrənmək uşaqlara ünsiyyət qurmağı və məntiqi təfəkkürü öyrədir. Dil həm şifahi, həm də yazılı bacarıqları gücləndirir. Uşaqlar erkən yaşlarında fərqli dilləri öyrənmələri tövsiyyə olunur, çünki bu uşaqlara ətraf dünyanı daha yaxşı anlamalarına kömək edir. Kodlaşdırmanın isə özünəməxsus bir dili var. Əlifbadakı A, B və digər hərflər kimi kodlaşdırmanın da əlifbasını təmsil edən xüsusi 0 və 1 hərfləri var. Bu 0 və 1 -lər ətrafımızdakı texnologiyadan necə istifadə etməli olduğumuza dair göstərişlər verir. Uşaqların ətrafdakı texnologiyanın niyə və necə işləməsini başa düşməsi üçün kodlaşdırma öyrənməkdən və ətrafdakı texnologiya ilə danışmaqdan daha yaxşı yolu nədir?",
		text_2:"obyektiv, sistemli və əsaslandırılmış biliklərin əldə edilməsinə, dəqiqləşdirilməsinə və yayılmasına yönəlmiş insan fəaliyyəti növüdür. Bu fəaliyyətin əsasını elmi faktların toplanması, onların daima yenilənməsi və sistemləşdirilməsi, tənqidi analizi və bu əsasda elmi biliklərin toplanması təşkil edir. Elm təkcə müşahidə edilən təbiət və ictimai halları təsvir etmir, həm də onların əlaqələrini tapır və nəticəni müəyyən edə bilir.",
		slide_text:"Proqramlaşdırma"
	},
	
	{
	  id: uuid(),
	  name: 'Rəqəmsal İncəsənət',
		Category: '/CourseSkill',
		Description_1: 'Beləliklə, uşaqlar kod yazmağı öyrənməlidirlər, çünki:',
		learn:[
			{
				tic: ' Müasir iş imkanlarına yönəlmiş bilik və bacarıqlar'
			},
			{
				tic: ' Kodlaşdırma/Proqramlaşdırma bacarıqlarının  inkişafı '
			},
			{
				tic: ' Riyazi və məntiqi təfəkkürün inkişafı'
			},
			{
				tic: ' Alqoritmlərin qurulması və iş prosesində tətbiq edilməsi bacarıqları'
			},
			{
				tic: ' Öyrənərək əylənmək imkanı'
			},
			{
				tic: ' Problem həll etmə bacarıqları'
			},
			{
				tic: ' Qoyulmuş məqsədə nail olmaq üçün əzmkarlıq bacarıqlarının inkişafı'
			},
			{
				tic: ' Kreativ bacarıqların inkişafı'
			},
			{
				tic: ' Tənqidi düşüncə bacarıqları'
			},
		],
		requireds: [
			{
				required:'Oxuma və yazma bacarıqları'
			},{
				required:'Başlanğıc səviyyədə İngilis dili bilikləri'
			}
		],
		module:[
			{
				mod:'70 dərs',
				note:""
			},
			{
				mod:'Dərs materialları',
				note:""
			},
			{
				mod:'Sertifikat',
				note:""
			},
		],
		levels: [                              
			{
				name: 'İlk modul',
					list: [
						{
							li:	"İlk anlayışlar"
						},
						{
							li:	"Kompüter elmi nədir"
						},
						{
							li:	"Müasir texnoloji cihazlar"
						},
						{
							li:	"Kompüter kimi düşünmək "
						},
						{
							li:	"Verilənlər / Data"
						},
						{
							li:	"Programlaşdırma texnologiyaları"
						},
						{
							li:	"Programlaşdırma dilləri"
						},
						{
							li:	"Şəbəkələr"
						},
						{
							li:	"Vebsayt və programların hazırlanması"
						},
						{
							li:	"Rəqəmsal davranış"
						},
						{
							li:	"Sosial Media"
						},
						{
							li:	"Rəqəmsal mövzular"
						},
						{
							li:	"Texnoloji gələcək"
						},
					]	
			},
			{
				name: 'Orta modul',
					list: [
						{
							li:	"Kodlaşdırma nədir ?"
						},
						{
							li:	"Blok proqramlaşdırmadan başlayaq"
						},
						{
							li:	"Macəra 1 - Əjdahadan Qaçış"
						},
						{
							li:	"Macəra 2 - Zəri fırlat"
						},
						{
							li:	"Macəra 3 - Rəqəmsal Meymunu"
						},
					]	
			},
			{
				name: 'Yuxarı modul',
					list: [
						{
							li:	"Kompüter Oyunları"
						},
						{
							li:	"Rəqəmsal Səyahətə Başlayaq"
						},
						{
							li:	"Macəra 1 - Ulduz Ovçusu "
						},
						{
							li:	"Macəra 2 - Pendir izinə çıxmaq"
						},
						{
							li:	"Macəra 3 - Çevrə Müharibəsi "
						},
						{
							li:	"Macəra 4 - Hoplayan Meymun"
						},
						{
							li:	"Macəra 5 - Uçan Süpürgə "
						},
						{
							li:	"Macəra 6 - İtin Yeməyi"
						},
						{
							li:	"Macəra 7 - Buzlaq Yarışı "
						},
						{
							li:	"Macəra 8 - Tropik Səslər"
						},
						{
							li:	"Macəra 9 - Növbədə Nədir ?"
						},
					]	
			},
		],
		

		module_for: [
			{
				li: '5 yaş və yuxarı uşaqlar'
			},
			{
				li: 'Proqramlaşdırma biliklərini inkişaf etdirmək istəyən hər kəs'
			},
		],

		Description_2: 'Rəqəmsal İncəsənət',
	  Video: '/video/video1.mp4',
	  image:'/images/digital.jpg',
	  text_1:"Ümumiyyətlə dil öyrənmək uşaqlara ünsiyyət qurmağı və məntiqi təfəkkürü öyrədir. Dil həm şifahi, həm də yazılı bacarıqları gücləndirir. Uşaqlar erkən yaşlarında fərqli dilləri öyrənmələri tövsiyyə olunur, çünki bu uşaqlara ətraf dünyanı daha yaxşı anlamalarına kömək edir. Kodlaşdırmanın isə özünəməxsus bir dili var. Əlifbadakı A, B və digər hərflər kimi kodlaşdırmanın da əlifbasını təmsil edən xüsusi 0 və 1 hərfləri var. Bu 0 və 1 -lər ətrafımızdakı texnologiyadan necə istifadə etməli olduğumuza dair göstərişlər verir. Uşaqların ətrafdakı texnologiyanın niyə və necə işləməsini başa düşməsi üçün kodlaşdırma öyrənməkdən və ətrafdakı texnologiya ilə danışmaqdan daha yaxşı yolu nədir?",
		text_2:"obyektiv, sistemli və əsaslandırılmış biliklərin əldə edilməsinə, dəqiqləşdirilməsinə və yayılmasına yönəlmiş insan fəaliyyəti növüdür. Bu fəaliyyətin əsasını elmi faktların toplanması, onların daima yenilənməsi və sistemləşdirilməsi, tənqidi analizi və bu əsasda elmi biliklərin toplanması təşkil edir. Elm təkcə müşahidə edilən təbiət və ictimai halları təsvir etmir, həm də onların əlaqələrini tapır və nəticəni müəyyən edə bilir.",
		slide_text:"Rəqəmsal İncəsənət"
	},


	{
	  id: uuid(),
	  name: 'Robotika',
		Category: '/CourseTecnology',
		Description_1: 'Beləliklə, uşaqlar kod yazmağı öyrənməlidirlər, çünki:',
		learn:[
			{
				tic: ' Robotexnika Elmin, Texnologiyanın, Mühəndisliyin, və Rİyaziyyatın öyrənilməsini asanlaşdırır.'
			},
			{
				tic: ' Robotexnika yaradıcılığı və Problem həll etmə bacarıqlarını artırır. '
			},
			{
				tic: 'Robototexnika gələcək karyera üçün önəmlidir.'
			},
			{
				tic: 'Robototexnika öyrənmək uşaqlarda komanda işini və əməkdaşlığı inkişaf etdirir'
			},
			{
				tic: ' Robotexnika Proqramlaşdırmaya Yol Açır.'
			},
			{
				tic: ' Robototexnika özünə inamı artırır.'
			},
			{
				tic: ' Robotexnika Komanda İşini və İşbirliyini öyrədir.'
			},
			{
				tic: 'Robotexnika əyləncəlidir.'
			},
		],
		requireds: [
			{
				required:'İngilis dili orta sviyyədə'
			},{
				required:'Öyrənməyə və əyləncəyə hazır olmalı'
			}
		],
		module:[
			{
				mod:'70 dərs',
				note:""
			},
			{
				mod:'90 saat nəzəri, 30 saat təcrübi və 10 saat qrup təqdimat dərsləri',
				note:""
			},
			{
				mod:'Dərs materialları',
				note:""
			},
			{
				mod:'Sertifikat',
				note:""
			},
		],
		levels: [
			{
				name: 'İlk modul',
					list: [
						{
							li:	"Bərpa olunan enerji"
						},
						{
							li:	"Heyvanlar aləmi"
						},
						{
							li:	"Masınların Transmisiyyasi"
						},
						{
							li:	"Kosmonavtika"
						},
						{
							li:	"Robot Mühəndisliyi"
						},
						{
							li:	" Hərəkət maşınları"
						},
						{
							li:	" Elektrik mühəndisliyi"
						},
						{
							li:	"Final Real Robot Dizaynı və Modelləşdirilməsi"
						},
					]	
			},
			{
				name: 'Orta modul',
					list: [
						{
							li:	"Xüsusi Robotlamaya giriş"
						},
						{
							li:	"Mars Rover - Səth Əməliyyatları"
						},
						{
							li:	"Mars Rover - Eniş Çağırışı"
						},
						{
							li:	"Sadə Maşınlar"
						},
						{
							li:	"Hissələr"
						},
						{
							li:	"Pendulum oyunu"
						},
						{
							li:	"Əyləncəli Qurbağalar"
						},
						{
							li:	"Ada ekspedisiyası"
						},
						{
							li:	"Kod bazası"
						},
						{
							li:	"Döyüş qayıqları"
						},
						{
							li:	"Planet HEXBUG"
						},
						{
							li:	"Oxşar Görünənlər"
						},
						{
							li:	"Super Bowler"
						},
						{
							li:	"Robot İşləri"
						},
						{
							li:	"Super Maşın"
						},
						{
							li:	"Köməkçi Əl Maqniti Avtomobil"
						},
					]	
				},
			{
				name: 'Orta çətin modul',
					list: [
						{
							li:	"Fizika elmi"
						},
						{
							li:	"Mars Rover - Mars Geologiyasını Kəşf etmək"
						},
						{
							li:	"Spiroqraf sənət nümayişi"
						},
						{
							li:	"Yellənən Parad"
						},
						{
							li:	"Özünü idarə edən kod bazası"
						},
						{
							li:	"Okeanda Fövqəladə Hal"
						},
						{
							li:	"Pantoqraf"
						},
						{
							li:	"Robot Qol"
						},
					]	
			},
			{
				name: 'Yuxarı modul',
					list: [
						{
							li:	"VIQC Virtual Bacarıqları"
						},
						{
							li:	"Qaytarıcı"
						},
						{
							li:	"Komanda Donma Toxunuşu"
						},
						{
							li:	"Xəzinə Ovu"
						},
						{
							li:	"Yuxarı və Üstü"
						},
						{
							li:	"Robot Futbol"
						},
						{
							li:	"IQ (2-ci nəsil) Test yatağı"
						},
						{
							li:	"Ən hündür qüllə"
						},
						{
							li:	"İrəli və geri sürmə"
						},
						{
							li:	"Dönmə"
						},
						{
							li:	"Nəzarətçi ilə Clawbot"
						},
						{
							li:	"Dəyişən Sürət"
						},
						{
							li:	"Hərəkət Çağırışı"
						},
						{
							li:	"Dövr etmək, budur!"
						},
						{
							li:	"Görmə Sensoru"
						},
						{
							li:	"Sürətli Çatdırılma"
						},
						{
							li:	"Etmək və ya etməmək"
						},
						{
							li:	"Test yatağı - Sensorlar"
						},
						{
							li:	"M.A.D qutusu"
						},
						{
							li:	"Ələ keçirən"
						},
					]	
			},
		],
		module_for: [
			{
				li: '5 yaş və yuxarı uşaqlar'
			},
			{
				li: 'Proqramlaşdırma biliklərini inkişaf etdirmək istəyən hər kəs'
			},
		],

		Description_2: 'Elm tarixi',
	  Video: '/video/video1.mp4',
	  image:'/images/robot.jpg',
	  text_1:"Dünyadakı şirkətlər yaxın gələcəkdə biznes infrastrukturlarına robotlama və avtomatlaşdırmanı tətbiq etməyi planlaşdırırlar. Təhsil qurumları və təşkilatları bunu yaxından izləyir və robototexnikanı bütün dünyada məktəb proqramının ayrılmaz bir hissəsi halına gətirməkdə artıq böyük uğurlar əldə ediblər. Övladlarımızı gələcək işçi qüvvəsinin çətinliklərinə hazırlamalı onlara inkişaf etməyə və geniş bir sıra bacarıqları daha asan inkişaf etdirə biləcək bir mühit yaratmalıyıq. ",
		text_2:"obyektiv, sistemli və əsaslandırılmış biliklərin əldə edilməsinə, dəqiqləşdirilməsinə və yayılmasına yönəlmiş insan fəaliyyəti növüdür. Bu fəaliyyətin əsasını elmi faktların toplanması, onların daima yenilənməsi və sistemləşdirilməsi, tənqidi analizi və bu əsasda elmi biliklərin toplanması təşkil edir. Elm təkcə müşahidə edilən təbiət və ictimai halları təsvir etmir, həm də onların əlaqələrini tapır və nəticəni müəyyən edə bilir.",
		slide_text:"Robotika"
	},


  ],
	Home : [
		{
		id: uuid(2),
	  name: 'Biz kimik ?',
		Description_2: 'Həftəlik ödənişsiz elm dərsləri hədiyyə',
	  Video: '/video/video1.mp4',
	  text_1:"Mərkəzimizdə uşaqlara STEAM tədris metodundan istifadə edərək müasir bilik və bacarıqlar asan, eləcə də əyləncəli üsulla öyrədilir. Bu dərslər uşaqlarda təhsil və gələcəkdə iş həyatı üçün vacib olan araşdırma (research), yaradıcılıq (creativity), məntiqi təfəkkür və  tənqidi düşüncə (critical thinking) bacarıqlarına yiyələnməyə kömək edir. ",
		text_2:" Uşaqların əl işlərini sevməsi heç kimə sirr deyil. Hər hansısa bir ixtiranı etmək və ya müxtəlif konsepsiyaları kəşf etmək şansı onların elmlə məşğul olmağına təkan verən əsas amillərdəndir. Burada uşaqlar biologiya, Yer elmi, fizika, mühəndislik kimi sahələrə oyun və əyləncə dolu maraqlı üsullarla dərslər keçirilir. Bu tipli dərslər hər həftə ödənişsiz bütün tələbələrə tədris olunur.",
		}
	],

	Sectionone: [
		{
			Description: 'Mərkəzimizdə müasir bilik və bacarıqların qazanılmasına yönəlmiş Azərbaycan, İngilis və Rus bölmələri üzrə aşağıdakı istiqamətlərdə tədris aparılır:',
			areas: [
				{
					area: 'ROBOTOTEXNİKA'
				},
				{
					area: 'PROQRAMLAŞDIRMA'
				},
				{
					area: 'ELM'
				},
				{
					area: 'RƏQƏMSAL İNCƏSƏNƏT'
				},
				{
					area: 'İNGİLİS DİLİ'
				},
				{
					area: 'RUS DİLİ'
				},
			]
		}
	],

	Sectionthree : [
		{
			description:'STEAM nədir',
			text: 'Bu gün rəqəmsal çevrilmənin iş modelləri və müştəri davranışı üzərindəki təsirlərinin qaçılmaz nəticələri iş dünyasına dərindən təsir edir. Məlumat dünyasına asanlıqla sürət qazanan iş dünyasındakı bu dönüş rəqabəti də artırdı. Azərbaycanın böyük və rəqəmsal çevrilməyə davam edən ixtisaslı iş gücünə ehtiyacı var. İş dünyasının texnologiya, yenilik və rəqəmsallaşmanın idarə etdiyi qlobal iqtisadiyyatda rəqabətdə qalmaq üçün STEAM bacarıqlarına, yəni elm, texnologiya, mühəndislik, sənəd və riyaziyyat bacarıqlarına sahib işçi qüvvəsinə ehtiyacı var.',
			img: '/images/steam.jpg',
		}
	],

	images :[
		{
			id:uuid(),
			image:'/images/gallery-img1.JPG'
		},
		{
			id:uuid(),
			image:'/images/gallery-img2.JPG'
		},
		{
			id:uuid(),
			image:'/images/gallery-img3.JPG'
		},
		{
			id:uuid(),
			image:'/images/gallery-img4.JPG'
		},
		{
			id:uuid(),
			image:'/images/gallery-img5.JPG'
		},
		{
			id:uuid(),
			image:'/images/gallery-img6.JPG'
		}
	],
	Client :[
		{
			id:uuid(),
			img: '/images/Gunay.png',
			name: 'Rəsul Səmədov',
			text: 'the industry s standard dummy text ever since the 1500s,',
		},
		{
			id:uuid(),
			img: '/images/Gunay.png',
			name: 'Günay İmanzadə',
			text: 'the industry s standard dummy text ever since the 1500s,',
		},
		{
			id:uuid(),
			img: '/images/Gunay.png',
			name: 'Şahin Xalilov',
			text: 'the industry s standard dummy text ever since the 1500s,',
		},
		{
			id:uuid(),
			img: '/images/Gunay.png',
			name: 'Püstəxanim Abbasova',
			text: 'the industry s standard dummy text ever since the 1500s,',
		},
		{
			id:uuid(),
			img: '/images/Gunay.png',
			name: 'Fərid İmanzadə',
			text: 'the industry s standard dummy text ever since the 1500s,',
		}
	],


	Environment : [
		{
		id: uuid(2),
	  name: 'Environment',
		Description_1: 'Ətraf mühit',
		Description_2: '"İnsan-ətraf mühit" sistemi',
	  Video: '/video/video1.mp4',
	  image:'/images/image-3.jpg',
	  text_1:" insanları əhatə edən, onlarla qarşılıqlı əlaqədə olan günəş şüaları, su, torpaq, hava və canlılar, antropogen maddələr, əşyalar və qurğular nəzərdə tutulur. İnsan özü də ətraf mühitin ayrılmaz və çox güclü təsirə malik olan hissəsidir.",
		text_2:" Əsrlər ötdükcə yaşayış məskəni kimi evlərin yaradılması, oddan və digər müdafiə vasitələrdən geniş istifadə olunması, qida hazırlanmasında üsul və vasitələrin təkmilləşdirilməsi insanı təbii neqativ təsirlərdən qorumaqla yanaşı ətraf mühitə də təsir edirdi.",
		}
	],
	Technology : [
		{
		id: uuid(2),
	  name: 'Technology',
		Description_1: 'Texnologiya',
		Description_2: 'Texnoloji determinism',
	  Video: '/video/video1.mp4',
	  image:'/images/image-3.jpg',
	  text_1:" yunan sözü olub, 'techne' (bacarıq) və 'logos' (öyrənmə) sözlərindən yaranmışdır. Məhsulun hazırlanması bacarığı, istehsal proseslərinin yerinə yetirilməsi üçün üsul və vasitələr haqqında biliklər toplusu. Bu nöqteyi-nəzərdən kompüter texnologiyası baxılan sahədə kompüter texnikasının aparat və proqram vasitələrindən istifadə texnologiyası deməkdir.",
		text_2:" Dünya tarixində bu günə kimi bir çox dönüş nöqtələri olub, və bu dönüş nöqtələrindən biri plan Sənaye İnqilabı məhz texnoloji innovasiyaların sahəsində gerçəkləşib. 18-ci əsrdə baş verən Sənaye İnqilabı ilk öncə qərbi Avropa, daha sonra isə Amerika və bütün dünyanın mənzərəsini köklü şəkildə dəyişdi. ",
		}
	],
	Skill : [
		{
		id: uuid(2),
	  name: 'Rəqəmsal İncəsənət',
		Description_1: 'Hard skills',
		Description_2: 'Life skills',
	  Video: '/video/video1.mp4',
	  image:'/images/image-3.jpg',
	  text_1:" Hard skills, also called technical skills, are any skills relating to a specific task or situation. It involves both understanding and proficiency in such specific activity that involves methods, processes, procedures, or techniques. These skills are easily quantifiable unlike soft skills, which are related to one's personality.",
		text_2:"An ability and capacity acquired through deliberate, systematic, and sustained effort to smoothly and adaptively carryout complex activities or job functions involving ideas (cognitive skills), things (technical skills), and/or people (interpersonal skills).",
		}
	],
	Ksm :{
			title: 'Korporativ sosial məsuliyyət',
			Description: 'KSM',
			image:'/images/ksm.jpg',
			text: 'Entesk MMC təhsil və ekologiya istiqamətləri üzrə innovativ qurum olaraq hər zaman yenilik və fərqlilik axtarışındadır. Entesk MMC üçüncü tərəf qurum olaraq şirkətlər üçün Korporativ Sosial Məsuliyyət çərçivəsində təhsil və ekologiya xidmətləri təklif edir. Təhsil xidmətləri çərçivəsində müasir texnoloji təhsilin əlçatmaz olduğu uşaq evlərində, sığınacaqlarda, məktəblərdə və ucqar ərazilərdə robotlama, proqramlaşdırma, mühəndislik və animasiya dərsləri tədris olunur. Lakin ekologiya xidmətləri çərçivəsində sözü gedən yerlərdə ətraf mühit haqqında qısa metrajlı animasiya filmləri və eko-texnoloji tədris proqramları hazırlanaraq tələbələrə öyrədilir.',
			example_1 : [
				{
					id: uuid(),
					img:'/images/robotlama.jpg',
					title: 'Robotlama',
					text: 'Problem həll etmə bacarığını və yaradıcılığı inkişaf etdirir.'
				},
				{
					id: uuid(),
					img:'/images/programlama.jpg',
					title: 'Proqramlaşdırma',
					text: 'Kodlaşdırma yeni və fərqli bir dildir və uşaqların problem həll etmə bacarıqlarını inkişaf etdirir.'
				},
				{
					id: uuid(),
					img:'/images/muhendislik.jpg',
					title: 'Mühəndislik',
					text: 'Mühəndislik komanda ilə və fərdi iş bacarıqlarını artırır. İstənilən problemə fərqli baxış bucağı yaradır.'
				},
				{
					id: uuid(),
					img:'/images/reqemsal.jpg',
					title: 'Rəqəmsal Sənət',
					text: 'Daha çox kəşflər. Limitsiz eksperimental imkanlar. Müasir texnoloji avadanlıqlarla işləmə imkanı.'
				}
			],
			example_2:{
				Video :'	https://adobeprod-a.akamaihd.net/IC_RxEcHii2/image…d4c70e1f8b96800ec47dcc5d89e60af9869111b510581151e',
				description: 'KSM',
				text:'Entesk MMC üçüncü tərəf qurum olaraq şirkətlər üçün Korporativ Sosial Məsuliyyət çərçivəsində təhsil və ekologiya xidmətləri təklif edir. Təhsil xidmətləri çərçivəsində müasir texnoloji təhsilin əlçatmaz olduğu uşaq evlərində, sığınacaqlarda, məktəblərdə və ucqar ərazilərdə robotlama, proqramlaşdırma, mühəndislik və animasiya dərsləri tədris olunur.'
			}
		},
	blog: [
		{
			id: uuid(),
			name: 'Steam nədir',
			description:'STEAM nədir',
			text: 'STEAM - Elm, Texnologiya, Mühəndislik, İncəsənət və Riyaziyyatın birləşməsi nəticəsində  yeni ideyaların reallaşdırılması, cəmiyyətdə müxtəlif problemlərin həllinə  kömək edə biləcək  təhsil yanaşmasıdır. STEAM təhsilalanlarda tənqidi yanaşma, yaradıcı düşünmə, qazanılan biliklərin  müqayisəli şəkildə anlaşılması, yaradıcı formada yeni layihələr əsasında biliyin möhkəmlənməsi, əməkdaşlıqetmə və s. kimi XXI əsr bacarıqlarını formalaşdırır. STEAM fənləri ayrılıqda öyrətmək əvəzinə, onları real dünyadakı tətbiqlərə əsaslanan vahid öyrənmə modelində birləşdirir.',
			blogContent: [
				{
					description:'STEAM TƏHSİLİNİN MƏQSƏDLƏRİ:',
					list:[
						{
							li:'Təhsil Nazirliyi universitetlər, sənaye təşkilatları, qeyri-hökumət təşkilatları və məktəblər arasında STEAM ilə əlaqəli milli çərçivə yaratmaq.'
						},
						{
							li:'Tədqiqat, inkişaf və layihə tədqiqatları aparmaq və əldə edilmiş məlumatları qiymətləndirərək STEAM əsaslı yeni təhsil modellərini aşkar etmək və bu modellərə uyğun proqramlar yaratmaq, yaradılan proqramların milli proqrama inteqrasiya olunmasını təmin etmək.'
						},{
							li:'Dünyada STEAM sahələrində aparılan işləri izləmək, araşdırmaq və qiymətləndirmək. Nəticələri ictimaiyyət və səlahiyyətli orqanlarla bölüşmək.'
						},{
							li:'STEAM sahələrində regional, milli və beynəlxalq proqramlar hazırlamaq; mühazirələr oxumaq, seminarlar, simpoziumlar və konfranslar təşkil etmək'
						}
					]
				},
				{
					description: 'STEAM təhsilinin əsası:',
					text:`STEAM, Elm, Texnologiya, Mühəndislik, Art və Riyaziyyatın qısaltmasıdır. İbtidai və orta təhsildə fənn tədrisi sahələrinin bütövlükdə deyil, ayrı-ayrılıqda tədris olunmasında yaranan narahatlıqlardan çəkinmək fikrinə əsaslanır və dünyada getdikcə daha çox əhəmiyyət kəsb edir. Prezident Obama 2012-ci ildən bəri ABŞ-da STEAM təhsilinin əhəmiyyətinə diqqət çəkir; dövlətlərə STEAM-da müəllim yetişdirmək üçün vəsait ayrılır.

					Bəzi Məktəblərimizdə STEAM təhsili tətbiq olunur və şagirdlərin akademik nailiyyətləri, həyata keçirdikləri layihələr, STEAM təhsilinin milli və beynəlxalq yarışlarda qazandığı düzgün tətbiq edildikdə nə qədər uğurlu olduğunu göstərir.


					STEAM təhsilinin əsası müxtəlif fənlərdən birlikdə istifadə etmək, layihələr hazırlamaq və bu layihələri istehsalata çevirərək həyata keçirməkdir. Riyazi təfəkkür bacarıqlarını inkişaf etdirən şagirdlər həm də elmdəki iş qabiliyyətlərini artırırlar. İbtidai və orta təhsildə qazanılan riyazi düşüncə bacarıqlarının elm təhsili infrastrukturunun gücləndirilməsi və layihə əsaslı təhsilə istehsal proseslərinin əlavə edilməsi STEAM təhsilinə şagirdin düşüncələrini həyatı boyu istehsalata çevirmə qabiliyyəti verir. Əslində bu, bu layihənin ilhamverici məqamlarından biridir.`
				},
				{
					description: 'STEAM məktəbi olmaq niyə bu qədər vacibdir?',
					text: 'Bu gün kiçik şagirdlərimiz böyüyəcək və sabah öz peşələri ilə işə başlayacaq və ölkə iqtisadiyyatına töhfə verəcəklər. Bir çiçəyin kökü kimi, şagirdlər gənc olduqda inkişaf etdirilə biləcək qabiliyyət və bacarıqlarına uyğun olaraq böyüyərlərsə, o bitki böyüyəcək və öz genlərindən gələn çiçəyi əmələ gətirəcəkdir',
					list:[
						{
							li: '- STEAM təhsilinin məqsədi, düşündüklərini reallaşdıra bilən, təməl elmlər tərəfindən ortaya qoyulan nəzəri bilikləri alaraq texnologiya və mühəndislik təhsili ilə qarışdıraraq həyata dəyər qatacaq məhsullar istehsal edən XXI əsr bacarıqlarına sahib gənclər yetişdirməkdir.'
						},{
							li: '- STEAM məktəbi olmaqla Azərbaycanda STEAM təhsilinə rəhbərlik etmək və bu təhsili genişləndirməyi hədəfləyir.'
						},{
							li: '- Bu gün, XXI əsr bacarıqlarına sahib fərdləri yetişdirməyin yolu- STEAM təhsildir.'
						},{
							li: '- STEAM təhsili dünyanın hər yerində təhsil islahatının mərkəzindədir və getdikcə daha çox əhəmiyyət kəsb edir.'
						},{
							li: '- STEAM təhsili inkişaf etmiş ölkələrdə, xüsusən ABŞ-da dövlət siyasəti olaraq tətbiq olunur.'
						},
						{
							li: 'Bu sistemə keçmiş inkişafda olan ölkələrdə orta faiz hesabı ilə təqribən STEAM iş artımı, 2010-2020-ci illər arasında Riyaziyyatçılar 16%, Kompüter Sistemləri Analitikləri 22%, Sistem Proqramı Hazırlayanlar 32%, Tibb alimləri 36%, Biotibbi Mühəndislər 62%, Bütün peşələr 14% kimi  müəyyənləşdirilmişdir.'
						}
					],
				},
				{
					description:'Alqoritm nədir?',
					text: `Alqoritm sözünün mənşəyinə baxsaq, əl-xorazminin "alqoritm" sözündən gəlir. anlamı: "rəqəmlərdən istifadə edərək problemləri həll etmək" deməkdir.

					Alqoritmi sadə bir şəkildə izah etmək üçün bir hadisənin addımlarını ardıcıllıqla birinin altına yazmaqdır. Real həyatda əməliyyatları bir qaydada etdiyimiz kimi hadisələri də ardıcıllıqla yazmalıyıq. Alqoritmlər kompüter proqramları yazmaq üçün faydalıdır. Yemək qrafiki. Bənzətmə ilə alqoritmə o yeməyin resepti deyə bilərik. Kodlaşdırma reseptdir, Kompüterin anlaya biləcəyi bir proqramlaşdırma dili ilə hazırlanmağa uyğundur. Düzgün kodlaya bilmək üçün alqoritm məntiqini öyrənmək lazımdır.

					Alqoritmi öyrənmək tələbənin analitik düşünmə qabiliyyətini artırır. Düşüncələrini daha yaxşı ifadə etməyə imkan verir. Proqramlaşdırma öyrənmək üçün zəmin yaradır.`
				},
				{
					description: '3D animasiya',
					text: '3D animasiya, sektorda 3 ölçülü mənasını verən “3 Ölçü” qısaltması kimi yer tutmuşdur. 2D animasiyalarda yalnız X və Y oxları ilə işləyərkən 3D animasiyalar isə X, Y və Z oxunda daha çətin və inkişaf etmiş bir animasiya metodudur, yəni həm üfüqi, həm də şaquli və dərinliyə malikdir və 2D-dən daha çətin və inkişaflıdır.'
				},
				{
					description: 'Kodlaşdırma nədir?',
					text: `Proqramlaşdırma olaraq da bilinən kodlaşdırma, müəyyən şərtlərə və qaydalara uyğun olaraq həyata keçirilməsi proqnozlaşdırılan əməliyyatların hamısı.

					Bu o deməkdir. Proqramlaşdırma bir kompüter və ya elektron sxemlərdən və mexaniki sistemlərdən ibarət aparat üçün bir prosesdir.

					Bunu həyata keçirmək üçün yazılmış əmrlər ardıcıllığının bütöv və ya bir hissəsi kimi təyin olunur.`
				},
				{
					description: 'Niyə uşaqlara proqramlaşdırma öyrətməliyik?',
					text: `Kompüter sahəsindəki bütün çox vacib adların ortaq xüsusiyyəti, gənc yaşlarında proqramlaşdırma öyrənmələridir. Texnologiyalardakı irəliləyişlər sistematik və alternativ düşüncə bacarıqlarını artırır, hadisələr arasındakı əlaqəni görməyə imkan verir.

					Artıq uşaqlara proqramlaşdırmanı həm əyləncəli, həm də ibrətamiz kimi öyrətmək mümkün olmuşdur. Xülasə olaraq, proqramlaşdırma öyrənmək insanlar üçündür; sistematik düşüncə, problem həll etmə, hadisələr arasındakı əlaqələri görmək və yaradıcı düşüncə.

					Mobil tətbiqetmələr istifadə ediləcək cihaza uyğun olaraq dizayn edilir və kodlaşdırılır. Məsələn, tətbiqin iphone, ipad kimi cihazlarda işləməsini istəyirsinizsə, tətbiqiniz IOS-a, Samsung, HTC kimi android əməliyyat sistemlərindən istifadə edilən tablet və ya smartfonlarda işləməsini istəyirsinizsə, tətbiqetməniz Android bazasında inkişaf etdirilməlidir.`
				},
				{
					description: 'Mobil tətbiqetmə',
					text: `Mobil Tətbiq, bu gün çoxumuzun istifadə etdiyi smartfon və planşet kimi mobil cihazlar üçün müəyyən bir məqsəd üçün dizayn edilmiş və kodlanmış proqramlara verilən addır. Bu gün ən çox istifadə olunan mobil əsaslı tətbiqetmələr Android üçün IOS və Linux əsaslı Apple məhsulları üçün kodlaşdırılır.`
				},
				{
					description: '3D modelləşdirmə',
					text: `3D kompüter qrafikasında 3D modelləşdirmə və ya birbaşa modelləşdirmə bir cismin bütün səthləri ilə 3D-də riyazi ifadəsidir. Hər hansı bir canlı və ya cansız varlığın görüntüsünü üç ölçüdə modelləşdirmək üçün müxtəlif kompüter proqramlarından istifadə olunur. Yaranan məhsula 3D model deyilir. Azərbaycan dilində 3 ölçülü model də adlandırmaq olar. 3D modellər kobudluq alaraq kompüterdə 2 ölçülü bir görüntü olaraq görünə bilər. Layihələndirilmiş 3D model, həmçinin 3D printerlərdə 3D çap texnologiyalarından birini istifadə edərək həqiqi fiziki obyektə çevrilə bilər.`
				},
				{
					description: 'Oyun Dizayn və Proqramlaşdırma',
					text: `Kompüter oyunları, xüsusən də mobil platformaların və internet texnologiyalarının inkişafı ilə bütün dünyada olduğu kimi, ölkəmizdə də geniş yayılmış və cinsi və yaşından asılı olmayaraq, geniş kütlələrin istehlak etdiyi populyar bir vasitə olmuşdur.

					Müasir mənada oyun dizayneri oyunun, atmosferin, qaydaların və əsas quruluşun dizaynını verən insandır. Başqa sözlə, oyun dizayneri oyunda istifadəçidə nəyi oyatmalı, oyunçu oynayarkən nə etməli, oyunun verməyə çalışdığı mesajı, hansı atmosferi keçəcəyini, nə qədər çətin olması lazım olduğunu və bir çox məqamları həll edən şəxsdir.`
				},
				{
					description: 'Robot Təhsilinin Məqsədləri',
					text: `Məqsədimiz gələcəyi formalaşdıracaq və bir Azərbaycan istehsalına doğru addımlar atacaq yaradıcı zehinləri yetişdirməkdir. Gənc öyrənənlərə hər kəsin sadə bir interfeyslə bir robot qura biləcəyini göstərmək və öyrətmək.`
				},
				{
					description: 'Əsas İnformasiya Texnologiyaları',
					text: `İnformasiya texnologiyaları anlayışı, telekommunikasiya və kompüter texnologiyalarının insan həyatına daxil edilməsi ilə ortaya çıxan bir anlayışdır. Sözügedən texnologiyalardakı inkişaflar və insanların gündəlik həyatında ön plana çıxması ilə onların əhəmiyyəti artır. XXI əsr baxımından, informasiya texnologiyaları insanlara və ya şəxslər tərəfindən məlumatların verilməsi, işlənməsi, ötürülməsi və hesabatı baxımından insanlara kömək edən texnologiyalar kimi qəbul edilə bilər.

					Əsas informasiya texnologiyalarını öyrəndikdən sonra gündəlik həyatda istifadə olunan texnologiyalar daha yaxşı başa düşüləcəkdir. Bundan əlavə əvvəllər istifadə olunmamış texnologiyalar haqqında məlumatların verilməsi təmin ediləcək və istifadəsi üçün bir yol açılacaqdır. Əsas informasiya texnologiyaları aşağıdakı mövzuları əhatə edir:

					Əsas kompüter bilikləri, Windows XP, Microsoft Word, Microsoft Excel, Microsoft Powerpoint, İnternet istifadəsi.`
				},
				{
					description: 'Web dizaynı',
					text: `Dizayn fikirlərinin estetik xətdə bir məqsəd üçün müəyyən prinsiplər əsasında rəhbər tutulması və təşkil edilməsi və praktikaya çevrilməsi (dizayn proqrama çevrilməsi) prosesidir. Bu proseslər bitdikdən sonra aktiv bir veb sayt yaranır. Veb dizaynı (aktiv veb sayt) tətbiqindən sonra son istifadəçilər veb brauzer köməyi ilə internet üzərindən veb saytlara daxil ola bilərlər. Bu veb dizayn nədir sualına verə biləcəyimiz ən qısa cavab ola bilər.

					Hər hansı bir qurumun korporativ şəxsiyyətini əks etdirmək və tanıtım fəaliyyətlərini həyata keçirmək üçün milli və beynəlxalq şəbəkə mühitində yayımlanan onlayn sistemlərə veb dizayn deyilir.

					Mətn, video, səsyazma və ya fotoşəkil kimi bütün səsli və vizual vasitələrdən istifadə edərək yaradılan hissələr veb saytları və bütün veb səhifələrin eyni sistem altında birləşməsindən yaranan veb saytları təşkil edir.`
				},
			],
			img: '/images/steam.jpg',
			
		},
		{
			id: uuid(),
			name: 'Uşaq Evinə Səyahət',
			title: 'Uşaq Evinə Səyahət',
			text: 'Entesk komandası xeyriyyə məqsədi ilə uşaq evində maraqlı və əyləncəli robotlaşdırma təlimləri keçirmişdir. Burada tələbələr robotun fiziki hissələrini və onların yığılmasını öyrənərək daha sonra kod hissəsini araşdırdılar. Proqramlaşdırmanın əsaslarını öyrənərək və lazımı alqoritmləri test edərək real mühitdə işləyən kod yazmışdılar. Kod robota yükləndikdən sonra düzgün işləmiş və gənc uşaqları çox sevindirmişdir.',
			img: '/images/blog-2.JPG',
		},
		{
			id: uuid(),
			name: 'Minecraft Proqramlaşdırma Müsabiqəsi',
			title: 'Minecraft Proqramlaşdırma Müsabiqəsi',
			text: 'Uşaqların dilində daim səslənən və hər zaman böyük maraq yaradan Minecraft oyunu yarışmanın əsas istiqaməti olaraq seçildi. Daxili yarışma zamanı 20 tələbə aktiv şəkildə bir saatlıq və 11 missiyadan ibarət tapşırığı yerinə yetirməli idilər. Birinci bitirən və bütün missiyaları düzgün həll edən tələbə qalib adını qazandı. Missiyalar əsasən proqramlaşdırma ilə əsas oyun qəhrəmanının çətinlikləri aşaraq irəliləməsindən ibarət idi. Burada fundamental biliklər, dövrlər, sadə alqoritmalar, funksiyalar çox önəmli idi. Birinci yerin sahibi Kəbirə adlı gənc tələbimiz oldu. Onu təbrik edir, gələcək təhsilində uğurlar diləyirik.',
			img: '/images/blog-3.jpg',
		},
		{
			id: uuid(),
			name: 'Entesk - də Halloween Partisi',
			title: 'Entesk - də Halloween Partisi',
			text: 'Tələbələr müasir dünyaya hazır olmaq üçün daim yeni məlumatlar və müxtəlif elm sahələrini öyrənməlidirlər. Lakin bəzən dünyanı daha yaxından tanımaq üçün orada mövcud olan müxtəlif ölkələrin adətlərini, dillərini, yeməklərini, bayramlarını öyrənmək də çox kömək olur. Məhz balaca tələbələrimizi həm sevindirmək, həm də onlara dünyanı yaxından tanımaq üçün Entesk məktəbində kökünü İrlandiyadan götürən və bütün dünyaya yayılan Halloween bayramı keçirilmişdir. Burada ilk olaraq bayramın önəmi, yaranma tarixi, fərqli personajları və daha çox məlumat verilmiş daha sonra oyunlarla, mahnılarla əyləncəli proqram keçirilmişdir. Tələbələr isə Harry Potter, Pirat, Cadügər kimi maraqlı personajlara bəzənərək şənliyi daha maraqlı etmişdilər.',
			img: '/images/blog-4.jpeg',
		},
	],
	about:[{
			description_1:'Entesk MMC robotlama, mühəndislik,  proqramlaşdırma və animasiyaya fokuslanan innovativ və yaradıcı dərslər hazırlayan və uşaqların/gənclərin dünyagörüşünün/zəkasının köklü çevrilməsi ilə məşğul olan bir EduTech startapdır.',
			description_2:' "Entesk" in əsas məqsədi məktəbli uşaqlara, rayon/kənd yerlərindəki uşaqlara, kimsəsiz uşaqlara, bağçalardakı uşaqlara və sığınacaqdakı uşaqlara əlçatmaz və günün təlabatı olan innovativ təhsili əlçatan etməkdir.',
			description_3:'Entesk MMC komandası təhsilin və mühəndisliyin qarışığı olan fərqli təcrübəyə malik mütəxəssislərdən ibarətdir. Rəhbərlər Avropa və Asiyada top universitetləri bitirmiş və dünyanın fərqli şirkətlərində mütəxəssis kimi çalışmış, həmçinin çalışaraq illərlə gənc tələbələrə dərs demiş üzvlərdən ibarətdir. Komandaya ancaq ən yaxşı namizədlər seçilir,  təlimatlandırılır və yönləndirilir.',
			img: '/images/about.png',
			team:[
				{
					team_img: '/images/Shahin.png',
					team_name: 'Şahin Xəlilov',
					teacher:'Riyaziyyat',
					id:uuid()
				},
				{
					team_img: '/images/Gunayimg.png',
					team_name: 'Günay Xəlilova',
					teacher:'İngilis dili',
					id:uuid()
				},
				{
					team_img: '/images/Puste.png',
					team_name: 'Xanım Abasova',
					teacher:'Robotlaşdırma',
					id:uuid()
				},
				{
					team_img: '/images/Resul.png',
					team_name: 'Rəsul Səmədov',
					teacher:'Robotlaşdırma',
					id:uuid()
				},
				{
					team_img: '/images/Agababa.png',
					team_name: 'Ağababa Bağırov',
					teacher:'İncəsənət',
					id:uuid()
				},
				{
					team_img: '/images/İdrak.png',
					team_name: 'İdrak Əsədbəyli',
					teacher:'Elm',
					id:uuid()
				},
			]
		}]
	
}
  
  export default allData;
