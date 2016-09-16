import _ from 'lodash';

/* eslint-disable */

export const MASKS = [
  {
    id: 'average',
    name: 'Average Face',
    texture: 'media/average.bmp',
    map: [[121.92799191984679,184.19216240419755],[118.74113263254269,253.7017373484083],[128.07732840700828,314.0651648786312],[145.50341586402052,377.3404382903117],[175.0470179047746,428.3720278198884],[216.26268310246033,469.2344402538887],[267.42588166495466,502.128073946532],[323.6864139765614,512.5053811316307],[381.1889691089136,499.48530971536445],[429.71357990120225,463.4214900408549],[467.1292936657478,421.537754329594],[493.2308725208873,370.6466670145585],[507.3945907183312,305.3965374123],[514.1098885852615,238.51000761747102],[507.2009944162471,174.7364492942625],[465.59705810723074,136.75665747531139],[432.10874975324265,125],[384.15174446143584,125],[351.54488594535763,135.22963355336668],[162.16177451030518,144.72103952617107],[194.70376235949394,126],[241,130],[277.5198647210173,137.82992220884094],[192.5627380181407,182.35373455399292],[225.1658086004223,166.85817167285668],[262.9021389237093,184.72604899079232],[224.82421319031323,193.62679469584918],[224.9386274222809,179.73191446260716],[443.75218061508883,177.1556294105885],[407.36102478935464,162.1785032964798],[367.3426762945685,181.37362678808685],[405.2498567443763,188.75927101523848],[404.863153412407,173.65270066194788],[314, 170],[277.2539320006613,252.0592473714927],[258.790607031229,284.0832945003201],[276.64778558874696,304.54255347445314],[317.4772090972725,307.7859653833357],[364.4959193923387,299.6561959465791],[377.27275089177823,279.043842539653],[357.1140334647449,250.14961061471956],[324,222],[296.770695143374,295.6331974142146],[350.24114846328195,290.942330984987],[248.8532880314441,372.38004806995957],[272.1557077756945,356.35352520595814],[302.9902196911147,350.59821534914704],[323.11457426149127,353.0358352022737],[338.3055779254553,347.5427982113969],[366.49269601972713,353.1538257295358],[392.63652105652415,368.4911974180641],[375.0778975047938,391.4413420753004],[352.32935954043757,405.19247889714825],[320.19499419206926,411.930992226806],[288.9192573286629,407.35752671668797],[267.61253113280924,394.527019223827],[286.6817714614754,382.82667526139215],[320.16223074694074,385.86502934549657],[359.1212544588326,380.7487964985724],[361.7270998810554,365.15603335898066],[322.91210334135167,367.2901736762333],[280.7920218316411,368.2798825278876],[320.66814785515174,277.11007275979364],[206.36606604411398,171.6086547538323],[247.5375468161923,170.29657636660522],[246.36866333618227,191.67729410789994],[205.19888043799355,189.99033691329964],[429.0603263358775,166.1691180598579],[386.8504393293843,166.2774220754911],[384.7938981921405,186.5701136634426],[426.9983448269614,184.45786533091854]]
  },
  {
    id: 'monalisa',
    name: 'Mona Lisa',
    texture: 'media/joconde.jpg',
    map: [[266.539778613571,254.84378898872825],[266.3039097561577,285.302233189556],[271.19357329466345,316.3538789507933],[278.7139543521674,345.15573844972926],[293.15712497356776,368.9809024015706],[312.64193974141324,389.09850232246515],[322.13343587641253,398.3663601209212],[336.9858985066435,401.49456958745145],[356.87519225850986,398.5376499254816],[382.97232156668036,391.79752653535775],[421.61286401088506,373.50434543677886],[448.74322775690695,344.0259953810623],[464.77440099078314,310.71915538180275],[468.2775933241595,272.2241198406615],[466.74514645738424,247.20492682906303],[415.26964981149064,225.8370550250565],[390.13712322351404,222],[361.92175039938184,220.2582273389706],[342.2734356138508,232.04834635926073],[267.7624903928149,236.00873885152805],[280.88607721372824,229],[303.9033677258633,228],[316.6965360192193,234.20369314639848],[281.57998031880885,254.77971856631495],[298.953459306752,246.21641370334032],[315.75345517431316,254.4516165242651],[296.6631361379687,258.36486568494297],[301.63327656416925,252.0239926097512],[398.27491865673994,249.8954346966754],[380.22403819342355,243.83584281695727],[357.98660716766716,253.53119540181672],[378.25469629277825,255.99515336941278],[382.6139465907322,249.6433274231842],[328,253],[314.73794539936216,301.757722929817],[309.85213116736014,314.6797549304112],[313.1507370768973,321.4994076914073],[325.20473159190635,327.87953636258146],[350.1231795924951,324.5425216268138],[358.3783946629097,316.6717252774034],[352.7986254362873,299.5519517987678],[326,282],[314.75674487301336,318.32005216616164],[343.0322275619273,319.2819917007706],[307.87514392633693,346.0346979532304],[316.68926117981914,342.91320569661593],[321.7320399187087,341.45780089974846],[327.8558316510405,343.56649844038935],[336.18423231506125,341.74737597014604],[351.00603891713007,342.2560527375472],[367.88222498993025,344.3660717427479],[357.305053617142,354.4583428810625],[343.5761668856892,358.8848818975423],[328.82001419900075,359.1051832365163],[320.36190636746045,358.71759346010083],[312.61714975606304,353.5625007817836],[318.4988566294063,348.1744254793423],[328.6406599928464,349.73460503451736],[350.2480353796336,349.6831133201238],[349.5754234743516,349.5362145583936],[329.32557946752445,349.67345155068153],[318.2253756678819,347.9222277142419],[324.4964277572599,315.63122813643895],[288.26630901657126,248.99890899333045],[309.3536455351319,248.83485523505226],[307.7075352919804,256.40978560947974],[288.62032608071166,258.5736833679789],[390.2498028902113,244.8663932568382],[368.1047796233772,247.18427292360775],[368.62079313091925,255.76448975973483],[390.7655312307384,254.4464699123733]]
  },
  {
    id: 'ironman',
    name: 'Ironman',
    texture: 'media/ironman.jpg',
    map: [[54.132994582809886,330.2447406482356],[53.94983737338171,411.6786947731232],[59.50117090734213,485.54290769879117],[69.05631570910228,577.6685769791815],[80.73400747239302,669.2047081882876],[156.52267192878207,721.5706883991684],[224.03761978834723,739.1269072358452],[301.4803537679236,738.2366874355024],[373.4196207112528,736.6185556997145],[445.4373067968218,720.1452812831552],[517.3056114476371,670.5474614197833],[531.7799053755264,574.1779931382804],[540.681172219442,487.967223266098],[542.4032150608897,399.64595333584305],[541.5099369565868,318.2177239885218],[484.00763535360403,311.3318445452918],[436.57616449858205,326.12885038303966],[386.214847801106,333.2043197182652],[344.39911403378784,336.7706741289662],[115.84864343665006,313.35525243241443],[152.60840318917894,322.7145050535586],[201.39783835228144,332.29526724516336],[249.58724826191298,336.53976562323317],[116.48023640991207,348.8633768136441],[167.9642886955806,350.9962302246727],[231.6749647028165,359.48349174177827],[168.11831577303042,375.4865728177492],[170.07462103025938,361.76575290725043],[480.7831200700384,348.57719399476593],[423.78106882269736,353.08381522791285],[369.5853199174605,360.3348770905004],[429.2517105029677,374.978498189726],[428.4672557696136,361.0310278167258],[298,363],[253.70821429640165,456.1515630753871],[232.81854206254127,493.52915431030885],[250.27449264190767,519.2760705851281],[294.9905749783811,522.6580485667231],[340.00710866420684,520.8077271147647],[357.28424845402884,493.1349774295837],[336.03221275387335,457.7253897416814],[296,407],[270.69780042635847,507.2277260957476],[320.8265507066314,506.90809731554305],[219.49207600124322,603.6108989555861],[236.4148918469843,589.8509195222699],[267.0123175575189,590.2653879517876],[302.37639394449644,589.4456339021824],[337.18338067155105,591.0755705685021],[366.9537080661368,591.1696362146871],[383.17030058050824,601.5027761622135],[366.07822563380967,614.8268645173376],[336.20759244137867,615.427540755917],[304.12597029775543,615.4777558918809],[270.01910167830954,615.9331065732697],[240.4271869365151,614.9063722445486],[255.5183417994636,603.9175341052295],[302.81892822034536,605.4895650711086],[350.74058301633727,604.2225054756758],[350.6655959742464,603.528118265738],[303.78446463916174,604.3090513544694],[256.409865954666,603.8790201634539],[298.25175247557996,482.7822436696597],[141.22182216936852,346.4270057321846],[206.31948949078424,356.7387529836485],[202.39427275621864,368.9872676086593],[136.2964448024117,368.67555898584044],[454.78000220898934,348.3276075895992],[398.6821272555564,355.2080431875895],[398.9194910642594,369.6579535284187],[466.01878775359233,368.7792910743897]]
  },
  {
    id: 'skull',
    name: 'Skull mask',
    texture: 'media/skullmask.jpg',
    map: [[94.36614797199479,301.0803014941178],[103.3112341317163,370.94425891220794],[120.32682383634102,423.44019820073913],[136.47515990999432,479.5313526801685],[144.0368892689739,530.2345465095229],[172.36671158523987,580.3629853084399],[217.01976787749376,619.1929480747351],[269.34754914721543,625.5185645282593],[326.48254316405735,621.3861472887296],[367.5697682338512,588.2815093455445],[396.3225813396373,544.5241298700507],[423.17220298223486,485.34023789625417],[433.9843247454375,424.6310467376783],[459.5753658677024,376.88741971189734],[465.6871064619868,309.4410229689395],[439.2202424949693,261.17900856324786],[404.95656878888406,237.16839138607617],[349.4475953084992,224.72336816106127],[307.5262703136751,246.56374069983377],[111.59908955786085,255.73818792771897],[140.77843006651088,236.25905776423554],[198.25614310392174,221.75964368670276],[238.0607640650076,244.705502740957],[147.51722669161887,322.2920755920064],[179.96374258674177,303.20283557208495],[219.89652431504095,321.63741406437117],[181.93382178127874,336.62855114616417],[181.67029281471235,321.84674383355735],[409.08887297158253,319.49332724817634],[372.08555159755235,302.6637205310945],[332.21673690859785,314.25212117506817],[371.9034386455536,336.7928247239386],[370.73203771018734,318.2549362647991],[275,262],[241.49292248091808,382.6509156918952],[228.65540058230079,403.67602315679153],[246.4207645046435,428.633436281585],[281.6262637981823,429.7101230850766],[320.3090052424696,429.4111504923561],[337.71957018298144,408.9834145077307],[324.9443408840292,383.11655691739367],[277,336],[262.6247652804272,418.02062856158705],[305.62131595904475,419.9849042391749],[192.0888434079335,501.27870633434],[227.89330220055228,491.767986224554],[254.82152484033276,488.28172522414377],[274.58325738122585,496.93117201682657],[298.6427918040954,490.9689564164321],[325.48328507490595,499.3328015524256],[350.42668910649365,508.3776245292422],[327.3034449428819,532.1604992353581],[302.413708672554,539.1078344701017],[266.7645104587291,540.3023216343349],[237.0072802317868,530.3260142620247],[215.71258213035736,519.4068856743318],[222.47713501183063,502.96356939871526],[278.19882029298384,511.73001012850216],[321.89078331130554,511.2982898921548],[318.4792941712966,518.8634093151715],[277.74782145336667,522.9574136207773],[230.31017878122015,512.4917843225409],[281.2762389085891,407.8752450214805],[163.2415047021451,306.7465365446632],[202.42996875366381,307.91977418268493],[204.91393138279884,330.1328065429834],[161.72396129164846,332.9605656535211],[394.08708850976745,308.0776176192674],[354.1514690637372,305.45718896085043],[349.5616880820385,328.5223891568975],[391.4980892099413,331.1427807886423]]
  },
  {
    id: 'sean',
    name: 'Sean Connery',
    texture: 'media/SeanConnery.jpg',
    map: [[109.36614797199479,146.0803014941178],[113.3112341317163,166.94425891220794],[119.32682383634102,192.44019820073913],[124.47515990999432,218.53135268016848],[135.0368892689739,237.23454650952294],[153.36671158523987,258.3629853084399],[168.01976787749376,267.1929480747351],[187.34754914721543,269.51856452825933],[208.48254316405732,266.3861472887296],[230.56976823385122,254.28150934554446],[252.32258133963728,228.52412987005079],[257.17220298223486,206.3402378962542],[258.9843247454375,180.63104673767828],[258.5753658677024,155.88741971189734],[257.6871064619868,133.44102296893945],[239.22024249496928,123.17900856324786],[224,120],[202,129],[189.52627031367516,133.56374069983377],[117.59908955786086,139.73818792771897],[127.77843006651088,132],[146,132],[165.0607640650076,134.705502740957],[134.51722669161887,148.29207559200646],[147.96374258674177,143.20283557208495],[159.89652431504095,147.63741406437117],[147.93382178127874,150.62855114616417],[147.67029281471235,145.84674383355735],[225.08887297158256,140.49332724817637],[212.08555159755232,136.6637205310945],[200.21673690859785,143.2521211750682],[213.9034386455536,144.79282472393862],[212.73203771018734,139.25493626479908],[176,143],[165.49292248091808,175.6509156918952],[160.65540058230079,186.6760231567915],[167.4207645046435,192.63343628158498],[183.62626379818232,194.71012308507662],[202.3090052424696,190.41115049235611],[205.7195701829814,183.98341450773069],[198.9443408840292,173.11655691739367],[179,161],[168.6247652804272,189.02062856158705],[197.62131595904475,185.9849042391749],[161.0888434079335,217.27870633433994],[167.89330220055228,211.76798622455402],[176.82152484033276,209.28172522414377],[183.58325738122588,209.93117201682657],[188.6427918040954,207.96895641643206],[201.48328507490595,210.3328015524256],[211.42668910649365,215.3776245292422],[203.30344494288195,220.16049923535812],[195.41370867255398,222.10783447010172],[184.76451045872906,223.302321634335],[174.00728023178684,223.32601426202467],[167.71258213035736,222.40688567433176],[169.47713501183063,215.96356939871526],[182.19882029298384,215.73001012850216],[195.89078331130557,214.2982898921548],[195.47929417129663,213.86340931517145],[181.74782145336667,214.95741362077732],[170.31017878122015,216.49178432254084],[182.2762389085891,184.8752450214805],[140.2415047021451,145.7465365446632],[154.42996875366381,143.9197741826849],[154.91393138279884,149.13280654298345],[141.72396129164846,149.9605656535211],[220.08708850976743,138.07761761926741],[205.15146906373715,139.45718896085043],[206.5616880820385,144.52238915689745],[219.4980892099413,143.1427807886423]]
  },
  {
    id: 'audrey',
    name: 'Audrey',
    texture: 'media/audrey.jpg',
    map: [[153.74201740403646,257.58838131299683],[153.1357402459916,291.61358072852295],[163.92648670097353,336.6674185987861],[169.05137634628016,385.1975110609068],[187.6238859708483,421.2108262322121],[216.686071409745,444.7519516586696],[252.3126606898006,465.32269819176895],[283.0811558461883,470.8182094669599],[310.01372611356055,468.19451253588267],[343.73964850426626,447.233158556066],[371.3765378504441,422.9947341112305],[387.5627292608278,382.0293105452122],[398.46785237450297,339.09243674243754],[410.7142207166049,294.2191807024135],[411.7724614993711,261.09373588344585],[397.08419909909355,252.94944754715868],[376,241],[347.88483875688155,246],[320.92763554902524,254.63591882122572],[174.20709387641796,237.53266499674754],[201,234],[231,239],[259.80324104447095,248.8385932134204],[203.20895380044172,279.4867045991428],[228.2843062554636,263.77563604011084],[254.37335751351947,287.3518288920658],[225.37155395907916,290.26869393942275],[227.77768051230873,272.55424007173355],[373.6963908872387,283.83985580081185],[349.2543124861655,273.37102031128484],[324.214351960891,292.0051557657032],[352.73999275494873,296.13681628226215],[350.0652800779458,278.7378813418683],[292,283],[262.7314015757042,344.55089637183414],[256.09382016348263,360.28137163294355],[265.43437220076765,373.7185311578347],[292.84018353954804,379.51893631975383],[319.5702417532398,374.9644468251393],[324.6370116978122,365.5029178767047],[318.03834636609736,339.5592633568763],[293,322],[275.91223102812063,365.3241223928343],[310.9988910215482,365.94139857304066],[241.36179100195926,404.57248720067804],[256.244097414399,399.79192498435566],[275.9545526341606,397.2506401446753],[289.6156500062133,402.18658812822247],[305.7363366162922,398.11786374216797],[318.71091994807995,402.09809058994574],[332.1507895390563,406.57790820835453],[317.07898694502654,420.6784334029229],[303.5975014688257,430.191159222479],[287.22005286691325,432.45845823523985],[269.1473100017029,428.92524246489165],[256.3562958006237,421.3232920714367],[269.4689541559383,409.5609803328374],[288.9859238876932,410.32998112652183],[306.1403256243275,411.3077976017484],[307.73772138569666,411.00947047307966],[288.5537974824452,410.51396287362655],[269.7179313684785,409.79854206584145],[293.13908085531165,360.2044576609231],[210.24669344926002,268.1362929595334],[244.33001418358253,272.06529726630106],[237.37014577148472,289.8158253810601],[212.28729137033707,286.8846525992707],[364.4764146636024,276.60992312858446],[332.73309300337735,280.1921291112648],[336.47694784065465,295.57941207015807],[365.2216557008562,291.9943008746264]]
  },
  {
    id: 'cage2',
    name: 'Cage',
    texture: 'media/cage.jpg',
    map: [[96.81941282528646,268.6563333055432],[106.75675954633661,329.1587405365555],[119.76815459937384,379.4896985493418],[136.07940076941458,425.9492772057105],[161.2808692110661,457.61169473264835],[186.04894852923297,485.6759001579113],[218.4426767235838,511.0714335097357],[260.06499742347034,523.1545996578884],[300.06377090251993,510.61216792938615],[337.5694959005854,468.82896175985],[358.97922192378047,441.54181864835476],[379.42084177310676,403.390743126405],[388.7955321567646,351.3090658772298],[390.4262385647278,299.3698133324318],[384.11810900892965,242.91856536650718],[348.70738406950056,224.9829932049514],[321,222],[284,222],[248.86954256992664,228.19206802513366],[119.91233030390185,255.38702736145385],[138,245],[175,236],[211.38447558444696,237.17956241438634],[144.4884094882825,271.0334533280929],[166.20253053976617,258.5182260687953],[190.76818628874074,264.72493789715475],[166.3651367856651,273.4746395006701],[167.80450182394694,265.0556706110155],[324.5406048528901,251.04296112395667],[299.7419762994943,241.35048431345442],[272.0486344446429,254.37413342811146],[300.2779904213152,258.21350699061486],[299.7261402367746,247.52288292547877],[230,247],[202.82098590251388,333.63541920962166],[197.36529740216793,360.6074799565433],[211.93043020653712,374.7216105521087],[243.91457342932796,376.61574931741393],[273.7931176105319,368.54185553932047],[283.1924422789671,346.10700000116907],[273.21255878744284,326.3419941919277],[235,309],[216.08956463539755,366.1198047818831],[262.38157625268843,360.4765024368325],[200.65672420260339,425.7113072142362],[210.59591704137958,418.8310789950973],[226.72952280292276,414.1586736027959],[245.26202591934208,416.9013315273323],[261.6743086310934,412.2506112472961],[283.3509308337543,410.8975165060922],[302.2287007716769,414.3759049856237],[288.05687218005096,428.64611508851056],[272.9046262998521,439.81519003757444],[251.37714128101143,448.0168626101829],[229.03794885867393,446.9574815880215],[217.27491143676224,438.10808744290716],[225.27828463087235,425.86527765147576],[246.089531122415,426.43509210786846],[272.14938117327404,421.7534010147635],[271.81608729443224,421.5900960094701],[246.87299073434986,427.22889777615507],[225.65210985383266,426.21786917122313],[239.24882409629814,356.7923548552414],[152.34433274214945,262.7826049480205],[179.48599280195447,258.6243674505216],[180.06624281569137,269.6029915273643],[153.926296458539,274.75536491866694],[312.6407607999811,242.7049854510107],[282.89141140599133,245.36953091106633],[285.6577700037131,257.30455480892334],[314.4040909797777,256.634302341433]]
  }
];

export const getMask = (id) => {
  return _.find(MASKS, { id });
};
