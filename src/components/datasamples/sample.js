import supermarche from "../../imgs/supermarche.jpg";
import maison from "../../imgs/meubles.jpg";
import sante from "../../imgs/sante.jpg";
import info from "../../imgs/informatique.jpg";
import mode from "../../imgs/mode.jpg";
import electro from "../../imgs/electromenager.jpg";
import sport from "../../imgs/sport.jpg";
import telephone from "../../imgs/telephonie.jpg";
import bebe from "../../imgs/bebe.jpg";
import jeux from "../../imgs/jeux.jpg";
import auto from "../../imgs/voiture.jpg";
import autres from "../../imgs/autres.jpg";

export const product = [
  {
    Categorie_name: "Supermarché",
    path: "/supermarche",
    image: supermarche,
    className: "supermarche",
    products: [
      {
        id: 1,
        title: "carottes",
        price: "2$",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Carrots_on_Display.jpg/435px-Carrots_on_Display.jpg",
        description: "legume frais",
      },
      {
        id: 2,
        title: "tomates",
        price: "1$",
        image:
          "https://mapetiteassiette.com/wp-content/uploads/2021/08/800x600-tomate-min.png",
        despcription: "tomates fraiches et juteuses",
      },
      {
        id: 3,
        title: "laitue",
        price: "2,5$",
        image:
          "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_387,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/729/laitue_flickr_4988502260_63717165ea_b.jpg",
        description: "belle salade",
      },
      {
        id: 4,
        title: "pommes de terre",
        price: "1,5$",
        image:
          "https://assets.afcdn.com/story/20190118/1328444_w944h530c1cx2735cy1823.webp",
        description: "délicieuses pommes de terre",
      },
      {
        id: 5,
        title: "oranges",
        price: "3$",
        image:
          "https://migustoimages.migros.ch/crop/v-w-800-h-800-a-center_center/fe06909d4dafb0b39169553db8887da3fadf0a8d/orange-stage.jpg",
        description: "fruit de saison",
      },
      {
        id: 6,
        title: "pastèque",
        price: "3,5$",
        image:
          "https://i-sam.unimedias.fr/2018/07/24/pasteque.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=591&w=1050",
        description: "dernier livraison de la saison",
      },
      {
        id: 7,
        title: "pommes",
        price: "2,5$",
        image:
          "https://www.jardiner-malin.fr/wp-content/uploads/2020/03/pomme-bienfaits-320x230.jpg",
        description: "fruit mure à point",
      },
      {
        id: 8,
        title: "bananes",
        price: "4$",
        image:
          "https://img.passeportsante.net/1000x526/2021-05-03/i101971-banane-nu.webp",
        description: "pour garder la forme",
      },
      {
        id: 9,
        title: "lait",
        price: "1$",
        image:
          "https://resize1.prod.docfr.doc-media.fr/rcrop/720,420,center-middle/img/var/doctissimo/storage/images/fr/www/nutrition/lait/lait-tous-les-gouts-sont-dans-la-nature/109030-3-fre-FR/lait-tous-les-gouts-sont-dans-la-nature.jpg",
        description: "lait riche en calcium et en vitamines",
      },
      {
        id: 10,
        title: "oeuf",
        price: "2,5$",
        image:
          "https://img.passeportsante.net/1000x526/2021-05-03/i102110-oeuf-nu.webp",
        description: "oeuf frais",
      },
    ],
  },
  {
    Categorie_name: "Maison & Bureau",
    path: "/maison-bureau",
    image: maison,
    className: "maison",
    products: [
      {
        title: "chaise",
        price: "30$",
        image:
          "https://cdn.connox.fr/m/100107/140048/media/stoelcker/Frankfurter-Kuechenstuhl/Frankfurter-Kuechenstuhl-Buche-frei-1200x1200.jpg",
        description: "solide et confortable",
      },
      {
        title: "Bureau",
        price: "100$",
        image: "https://www.burolia.fr/images/products/bureaux-etner-32489.jpg",
        description: "bureau de direction en cuire",
      },
      {
        title: "lit",
        price: "300$",
        image:
          "https://www.so-inside.com/11895-large_default/lit-en-velours-gris-160-x-200-cm-avec-tiroirs-de-rangement-velvet-.jpg",
        description: "160x200 lit tirroire deux places",
      },
      {
        title: "placard",
        price: "200$",
        image:
          "https://media.but.fr/images_produits/produit-xl/5713035073165_AMB1.jpg",
        description: "Armoire 2 portes",
      },
      {
        title: "meuble tv",
        price: "100$",
        image:
          "https://www.rueducommerce.fr/medias/9665bd09e7983f3996362f464c6abd48/p_640x640/meuble-tv-mural-blanc-gris-zd1-z.jpg",
        description: "meuble tv murale blanc et beton",
      },
      {
        title: "lustre",
        price: "60$",
        image:
          "https://cdn.manomano.com/images/images_products/15993636/L/27440447_1.jpg",
        description: "lustre moderne",
      },
      {
        title: "réfrigirateur",
        price: "250$",
        image:
          "https://image.darty.com/encastrable/grand_refrigerateur/refrigerateur_americain/lg_gsx960mcaz_t2003134815343A_163838189.jpg",
        description: "Réfrigirateur americain double porte 625 litres",
      },
      {
        title: "micro-onde",
        price: "80$",
        image:
          "https://images.samsung.com/is/image/samsung/n_africa-microwave-oven-grill-mg23k3575as-mg23k3575as-al-001-front-silver?$720_576_PNG$",
        description:
          "four à micro ondes avec grill et cavité en céramique émaillé",
      },
      {
        title: "machine à laver",
        price: "150$",
        image:
          "https://thomson-dz.com/wp-content/uploads/2020/02/TWM-850SKS--1430x2023.jpg",
        description: "Machine à laver frontale 8kg 1200tr/mn",
      },
      {
        title: "fauteuil",
        price: "120$",
        image:
          "https://www.miliboo.com/fauteuil-scandinave-gris-et-chene-yumi-41379-5852a43c5f8d8_1010_427_0.jpg",
        description: "Fauteuil Scandinave fris et chêne Yumi",
      },
    ],
  },
  {
    Categorie_name: "Santé & Beauté",
    path: "/sante-beaute",
    image: sante,
    className: "sante",
    products: [
      {
        title: "parfum",
        price: "40*",
        image:
          "https://www.yslbeauty.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dw47f3b0b8/Fragrance/For%20Her/Mon%20Paris/3614270561658_50_mon-paris-eau-de-parfum_Alt1.jpg?sw=350&sfrm=png&q=70",
        description: "Famille olfactive : Chypre Blanc",
      },
      {
        title: "savon",
        price: "3$",
        image:
          "https://www.absolution-cosmetics.com/img/resp/prod-1663-le-savon-blanc-345x345-fs.jpg",
        description: "Savon blanc",
      },
      {
        title: "shampoing",
        price: "4$",
        image:
          "https://cdn.webshopapp.com/shops/50959/files/257368025/image.jpg",
        description: "Shampoing SYOSS colorist 500ml",
      },
      {
        title: "masque de beauté",
        price: "12$",
        image:
          "https://www.cdiscount.com/pdt2/7/5/7/1/550x550/bra3701107114757/rw/masque-visage-extracteur-de-point-noir-groomarang.jpg",
        description: "masque extracteur de points noir, gommage visage",
      },
      {
        title: "crème anti-rides",
        price: "6$",
        image:
          "https://resize2.prod.docfr.doc-media.fr/r/492,328,center-middle,ffffff,smartcrop/img/var/doctissimo/storage/images/fr/www/beaute/diaporamas/produits-creme-anti-rides/soin-de-jour-anti-rides-unifiant-lift-plus-blur-express-diadermine/2515544-1-fre-FR/Effet-blur.jpg",
        description: "la solution pour atténuer les signes de l'âge",
      },
      {
        title: "Coffret maquillage",
        price: "16$",
        image: "https://m.media-amazon.com/images/I/61GPoRRegUL._AC_SY355_.jpg",
        description: "Coffret de maquillage complet",
      },
      {
        title: "serviette",
        price: "2$",
        image: "https://m.media-amazon.com/images/I/A1k+efsjd2L._AC_SY450_.jpg",
        description: "Lot de 10 serviettes 100% coton turquoise et gris",
      },
      {
        title: "dentifrice",
        price: "1,5$",
        image:
          "https://centredentairestonge.com/wp-content/uploads/2018/11/dentifrice-Centre-dentaire-St-Onge.jpg",
        description: "blanchissant antibactérien anticaries et dents sensibles",
      },
      {
        title: "pèse personne",
        price: "9$",
        image:
          "https://cdn1.batolis.com/16886-large_default/pese-personne-jata-acier-lcd-150-kg.jpg",
        description: "pèse personne en acier inoxidable avec lcd --150kg",
      },
      {
        title: "pince à épiler",
        price: "0,5$",
        image:
          "https://www.peggysage.com/media/catalog/product/cache/4/image/771c492cb820b17399364c0ef2e6e9db/3/0/300004.png",
        description: "pince à épiler",
      },
    ],
  },
  {
    Categorie_name: "Informatique",
    path: "/informatique",
    image: info,
    className: "info",
    products: [
      {
        title: "ordinateur portable",
        price: "200$",
        image:
          "https://images.macrumors.com/article-new/2020/11/macbook-air-m1-unboxing.jpg",
        description: "macbook air",
      },
      {
        title: "imprimante",
        price: "30$",
        image:
          "https://dyw7ncnq1en5l.cloudfront.net/optim/product/53/53465/e39dc93f-pixma-ts5320__1200_630__overflow.jpeg",
        description: "imprimante 3en1",
      },
      {
        title: "clé usb",
        price: "8$",
        image:
          "https://www.cdiscount.com/pdt2/7/3/6/1/700x700/tem6427643888736/rw/256go-cle-usb-3-0-stick-rotatif-pendrive-memoire-f.jpg",
        description: "16go",
      },
      {
        title: "souris",
        price: "10$",
        image:
          "https://gooconnect.com/1156-large_default/souris-informatique-ergo-care-sans-fil-auto-decontaminante-et-biocide.jpg",
        description: "souris sans fil bluetooth",
      },
      {
        title: "casque audio",
        price: "60$",
        image:
          "https://www.cdiscount.com/pdt2/3/2/2/1/700x700/les7786629983322/rw/gaming-casque-g2000-gamer-casque-filaire-ecouteurs.jpg",
        description: "casque audio avec micro pour pc",
      },
      {
        title: "écran pc",
        price: "70$",
        image:
          "https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/optim/i/edit/ne/2019/06/ecranpcPrD_620__w630.jpg",
        description: "écran 22pouces",
      },
      {
        title: "anti-virus",
        price: "10$",
        image:
          "https://static.fnac-static.com/multimedia/Images/FR/MDM/51/f1/bb/12317009/1505-1/tsp20201123130737/Logiciel-Kaspersky-Internet-Security-2021-3-Postes-pour-1-An.jpg",
        description: "validité 1an",
      },
      {
        title: "adaptateur",
        price: "4$",
        image:
          "https://image.darty.com/darty?type=image&source=/market/2019/06/07/mkp_DIgthd3tagOoxg.jpeg&width=400&height=300&quality=90",
        description: "adaptateur vga-hdmi",
      },
      {
        title: "routeur wifi",
        price: "80$",
        image:
          "https://static.fnac-static.com/multimedia/Images/FR/NR/58/6a/81/8481368/1540-1/tsp20161205134640/Routeur-WiFi-TP-Link-N-300-Mbps-avec-2-antennes.jpg",
        description: "tp link avec deux antennes",
      },
      {
        title: "Processeur",
        price: "250$",
        image:
          "https://www.cdiscount.com/pdt2/8/0/7/1/700x700/auc6993019398807/rw/intel-core-i7-9700kf-processeur-3-6-ghz-boite-12.jpg",
        description: "i7 9ème génération",
      },
    ],
  },
  {
    Categorie_name: "Mode",
    path: "/mode",
    image: mode,
    className: "mode",
    products: [
      {
        title: "Robe",
        price: "40$",
        image:
          "https://img.ltwebstatic.com/images3_pi/2021/05/06/162027247545c9ef45bb26d9a2f35bedc98b971c2c_thumbnail_900x.webp",
        description: "robe d'été",
      },
      {
        title: "veste",
        price: "30$",
        image:
          "https://ae01.alicdn.com/kf/Hf15c1dfb92484f84abd26c47fc3e66b3Y/Veste-de-printemps-4XL-pour-Homme-Streetwear-d-contract-e-solide-fermeture-clair-coupe-vent-mode.jpg_Q90.jpg_.webp",
        description: "vest légeère d'été pour homme",
      },
      {
        title: "chaussure",
        price: "50$",
        image:
          "https://www.cdiscount.com/pdt2/3/0/1/1/700x700/mp41432301/rw/sandales-pour-femmes-chaussures-de-soiree-sandales.jpg",
        description: "sandales de soirée",
      },
      {
        title: "montre",
        price: "90$",
        image:
          "https://www.cdiscount.com/pdt2/1/6/8/1/700x700/sha6699387553168/rw/sharphy-les-montre-homme-de-marque-de-luxe-bracele.jpg",
        description: "montre homme cadran simple et classique",
      },
      {
        title: "lunettes",
        price: "30$",
        image:
          "https://media.camaieu.fr/productmedia/rc/532034_2857/default.jpg",
        description: "lunettes de soleil rondes pour femme",
      },
      {
        title: "bijou",
        price: "20$",
        image:
          "https://media.cdnws.com/_i/119178/5267/587/69/dotifi-pour-les-femmes-amour-8-caract-res-colliers-acier-inoxydable-sans-fin-pendentif-amiti-collier.jpeg",
        description: "collier femme coeur d'Ange",
      },
      {
        title: "pull",
        price: "30$",
        image:
          "https://www.lahalle.com/on/demandware.static/-/Sites-lahalle_master/default/dwf749e5c8/pull-manches-longues-ajoure-orange-femme-c-36165600521920008.jpg",
        description: "pull manches longues ajouré femme",
      },
      {
        title: "echarpe",
        price: "10$",
        image:
          "https://media.cdnws.com/_i/8656/14924/2687/28/echarpe-femme-ou-homme-pure-laine-chocolat.jpeg",
        description: "écharpe en laine couleur chocolat",
      },
      {
        title: "chapeau",
        price: "20$",
        image:
          "https://img.ltwebstatic.com/images3_pi/2021/06/28/1624859971665c083f022670ec103f7d37de0f42f3_thumbnail_900x.webp",
        description: "chapeau de paille large noire",
      },
      {
        title: "sac",
        price: "40$",
        image:
          "https://saint-laurent.dam.kering.com/m/3831dfc77885d4a9/Large-600281CSV0J1000_A.jpg?v=1",
        description: "Sac de shopping en cuire",
      },
    ],
  },
  {
    Categorie_name: "Éléctromenager",
    path: "/electromenager",
    image: electro,
    className: "electro",
    products: [
      {
        title: "tv",
        price: "200$",
        image:
          "https://www.lg.com/uk/images/tvs/MD05942377/gallery/medium01.jpg",
        description: "HD led TV 43pouces",
      },
      {
        title: "haut-parleur",
        price: "40$",
        image:
          "https://ae01.alicdn.com/kf/H78b02f71a59f471a8b3271c314ee1f8b9/JBL-haut-parleur-Bluetooth-Flip-5-Mini-haut-parleur-Portable-tanche-sans-fil-BT-basse-musique.jpg_Q90.jpg_.webp",
        description: "remplacement haut parleurs TV 5W",
      },
      {
        title: "appareil photo",
        price: "600$",
        image: "https://m.media-amazon.com/images/I/71yf785aBmL._AC_SX450_.jpg",
        description: "Appareil photo réflex 16,2Mpix",
      },
      {
        title: "box tv",
        price: "150$",
        image:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-hd-hero-select-202104_FMT_WHH?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1618010696000",
        description:
          "apporte les séries films et jeux populaire du moment sur votre TV",
      },
      {
        title: "projecteur",
        price: "90$",
        image: "https://m.media-amazon.com/images/I/61g2BVko0WS._AC_SX425_.jpg",
        despcription: "retroprojecteur 6500 lumens 1080p",
      },
      {
        title: "adaptateur",
        price: "5$",
        image:
          "https://static.fnac-static.com/multimedia/Images/FR/MC/0b/85/cc/30180619/1540-1/tsp20170117170358/CABLING-Mini-DisplayPort-3-en-1-Thunderbolt-vers-HDMI-DVI-VGA-Cable-adaptateur-pour-Apple-Mac-Book-MacBook-Pro-MacBook-Air-Mac-mini-l-adaptateur-3-en-1-Mini-DP-vers-DVI-HDMI-VGA-Converter-pour-Mac.jpg#683a9ba0-5820-4b77-b632-1e3f48938589",
        description: "mini display port 3en1 thunderbolt vers hdmi/dvi/vga",
      },
      {
        title: "home cinema",
        price: "80$",
        image:
          "https://www.sony.co.uk/image/3d3a90045fd945574b42b191f60f34e6?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        description: "home cinema avec haut parleur arrière sans fil",
      },
      {
        title: "instrument de musique",
        price: "60$",
        image:
          "https://www.pmtonline.co.uk/media/catalog/product/cache/a1b28cf8fc4652b664c189b33cb20963/6/4/64950-Eastcoast-GS100-Electric-Guitar-in-Race-Red.jpg",
        description: "guitar éléctrique rouge",
      },
      {
        title: "application",
        price: "10$",
        image:
          "https://electronicloisirs.com/1568417-large_default/ref-CUBASE-PRO-11-EDU.jpg",
        description: "logiciel professionnel de mixage audio",
      },
      {
        title: "radio",
        price: "15$",
        image: "radio analogique/digitale portative",
      },
    ],
  },
  {
    Categorie_name: "Articles de Sport",
    path: "/sport",
    image: sport,
    className: "sport",
    products: [
      {
        title: "ballon de basket",
        price: "25$",
        image:
          "https://www.ballonbasket.fr/images/produits/zoom/wtb13xbsc-0-7-nba-team-tribute-sac-kings-official-bl-pu-gy.jpg",
        description: "balle de basket purple & black",
      },
      {
        title: "batte de baseball",
        price: "50$",
        image:
          "https://m.media-amazon.com/images/I/61Ge6AR1GJL._AC_SL1500_.jpg",
        description: "batte de baseballe en aluminium 28pouces",
      },
      {
        title: "trampoline",
        price: "70$",
        image:
          "https://www.garden-camping.com/images/airwave-8ft-10ft-and-12ft-trampoline-with-enclosure-blue-p1611-17556_image.jpg",
        description: "trampoline avec barrières bleu",
      },
      {
        title: "maillot",
        price: "20$",
        image:
          "https://www.tyr.eu/19425-large_default/women-solids-diamondfit-swimsuit.jpg",
        description: "maillot de natation pour femme",
      },
      {
        title: "palmes",
        price: "20$",
        image:
          "https://www.atlantys-homopalmus.com/12722-large_default/mares-palmes-avanti-quattro-.jpg",
        description: "palmes de plongée souples avec hi-FLEX (matériaux)",
      },
      {
        title: "altères",
        price: "30$",
        image:
          "https://www.cdiscount.com/pdt2/2/9/7/1/700x700/auc0191557637297/rw/kit-halteres-reglables-halteres-musculation-ex.jpg",
        description: "haltère modulables 30kg",
      },
      {
        title: "chausseur de soccer",
        price: "60$",
        image:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60acbbac-0534-43c3-851f-01c207d22e8c/chaussure-de-football-a-crampons-pour-terrain-sec-mercurial-superfly-8-pro-fg-hLHMhc.png",
        description: "soulier avec crampon",
      },
      {
        title: "complément alimentaire",
        price: "20$",
        image:
          "https://www.dplantes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/i/vit_min_1.jpg",
        description: "vitamine et minéraux à base de plantes",
      },
      {
        title: "ballon de Yoga",
        price: "20$",
        image: "https://m.media-amazon.com/images/I/61J+EBMbnIL._AC_SX466_.jpg",
        description: "ballon de yoga fitness suisse",
      },
      {
        title: "tatami",
        price: "40$",
        image:
          "http://www.fisaude.eu/imagemagic.php?img=images/Tatami-Puzzle-Reversible-Kinefis-2-mm-azul-rojo.jpg&w=303&h=303&page=prod_info",
        description: "tatami puzzle reversible bleu et rouge",
      },
    ],
  },
  {
    Categorie_name: "Téléphonie et Accessoires",
    path: "/telephonie-accessoires",
    image: telephone,
    className: "telephone",
    products: [
      {
        title: "smartphone",
        price: "350$",
        image:
          "https://asset1.ee.co.uk/medias/iphone-12-5g-64gb-purple-desktop-detail-2-Format-976?context=bWFzdGVyfHJvb3R8MzcyODkxfGltYWdlL3BuZ3xzeXMtbWFzdGVyL3Jvb3QvaDRmL2g5ZC85NjQ2MDQ1MTM0ODc4L2lwaG9uZS0xMi01Zy02NGdiLXB1cnBsZS1kZXNrdG9wLWRldGFpbC0yX0Zvcm1hdC05NzZ8MjFiMjI2ZDMzMzNlZjQ3ODBjZmY2NjI5NzU4MDc3YmFmMGM5MzE0NWRjNmU0NTc1MzA5OTg2NGU2NTBmYjA1YQ",
        description: "smartphone sans bord oled",
      },
      {
        title: "smartwatch",
        price: "90$",
        image:
          "https://i.pcmag.com/imagery/roundups/063BUF2XoLMtmoynofL3fKy-30.fit_lim.size_1200x630.v1634585399.jpg",
        description: "smartwatch pour homme 1,8pouces touchscreen",
      },
      {
        title: "tablette",
        price: "400$",
        image:
          "https://www.rueducommerce.fr/medias/444cc9d1cbee3266b901648adc0a4498/p_1000x1000/sm-p615-008-dynamic-gray.jpg",
        description: "Tablette wifi/cellulaire",
      },
      {
        title: "chargeur smartphone",
        price: "20$",
        image:
          "https://www.cdiscount.com/pdt2/5/3/5/1/700x700/auc2009273101535/rw/chargeur-compatible-iphone-5-5s-5c-6-6plus-7-8-x-b.jpg",
        description: "chargeur smartphone cable et boitier de charge",
      },
      {
        title: "écouteur sans fil",
        price: "100$",
        image:
          "https://dam.which.co.uk/f939fc01-1d6f-4450-8c2c-6cddb664676a.jpg",
        description: "boitier et écouteurs sans fil",
      },
      {
        title: "protection smartphone",
        price: "10$",
        image:
          "https://www.cdiscount.com/pdt2/4/9/5/1/700x700/efc3665329727495/rw/coque-iphone-12-mini-verre-trempe-protection-ec.jpg",
        description:
          "film en verre trempé pour la protection de l'écran et du verre arrière et contour en silicone ",
      },
      {
        title: "support smartphone",
        price: "10$",
        image:
          "https://www.cdiscount.com/pdt2/4/1/2/1/700x700/auc7902758669412/rw/support-telephone-reglage-portable-support-pour-i.jpg",
        description: "support telephone et smartphone réglable de bureau",
      },
      {
        title: "téléphone",
        price: "30$",
        image: "https://www.sodishop.com/media/2019/03/TELEPHONE-ITEL-2171.jpg",
        description: "téléphone célullaire avec appareil photo",
      },
      {
        title: "téléphone fixe",
        price: "20$",
        image:
          "https://www.audilo.com/10399-large_default/visiofixe-telephone-fixe-senior-avec-whatsapp.jpg",
        description: "téléphone fixe avec appel vidéo whatsapp",
      },
      {
        title: "adaptateur smartphone",
        price: "7$",
        image:
          "https://static.fnac-static.com/multimedia/Images/69/69/28/7A/8005737-1505-1540-1/tsp20190125131259/Adaptateur-samsung-type-c-vers-micro-usb-gh98-40218a-pour-tout-smartphone-usb-type-c.jpg",
        description: "adaptateur type-c vers micro-usb",
      },
    ],
  },
  {
    Categorie_name: "Bébés et puériculture",
    path: "/bebe-puericulture",
    image: bebe,
    className: "bebe",
    products: [
      {
        title: "vêtements",
        price: "30$",
        image:
          "https://i.pinimg.com/originals/eb/4e/42/eb4e42123e7786056f153f4179434edd.jpg",
        describe: "salopette, t-shirt, veste et bonnet pour bébé",
      },
      {
        title: "couches",
        price: "10$",
        image: "https://kevajo.com/wp-content/uploads/2020/09/KEVAJO958_1.jpg",
        description: "Couches taille 4 ultra absorbantes 10 couches",
      },
      {
        title: "biberon",
        price: "7$",
        image:
          "https://www.nanny-care.fr/1947-large_default/biberon-verre-silicone-b-thermo-reactif-240-ml-bleu.jpg",
        description: "biberon en verre et silicone termo-réactif 240ml bleu ",
      },
      {
        title: "jouet",
        price: "20$",
        image:
          "https://assets.smallable.com/default/0001/52/thumb_51065_default_cms_home_small_full.jpeg",
        description: "ours en peluche habillé en salopettes",
      },
      {
        title: "siège auto",
        price: "40$",
        image:
          "https://www.baby-lux.com/media/catalog/product/cache/45f4f755edda6da9b7e5efa8a966a136/s/i/siege-auto-titan-bebe-confort-maxi-cosi-basic-black_BMC00727_0_1.jpg",
        description: "siège auto pour bébé confort de 9 mois à 12 ans",
      },
      {
        title: "shampoing",
        price: "4$",
        image:
          "https://fr.johnsonsbaby.ca/sites/jbaby_ca_3/files/product-images/062600250292_main.png",
        description: "shampoing pour bébé",
      },
      {
        title: "Sucette",
        price: "2$",
        image:
          "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fenfant.2Fbebe.2Fsoins.2Ftetine-bebe-avantages-inconvenients-28998.2F14016630-1-fre-FR.2Ftetine-pour-bebe-avantages-et-inconvenients.2Ejpg/1200x1200/quality/80/crop-from/center/tetine-pour-bebe-avantages-et-inconvenients.jpeg",
        description: "tétine pour bébé",
      },
      {
        title: "termometre",
        price: "5$",
        image:
          "https://www.pharmacodel.com/8108-thickbox_default/predictor-thermometre-digital-flex.jpg",
        description:
          "termomètre digitale embout flexible mesure corporel en 10secondes",
      },
      {
        title: "barrière de sécurité",
        price: "40$",
        image:
          "https://image.darty.com/darty?type=image&source=/market/2018/08/05/mkp_s0m8_Mcz5Dkv4w.jpeg&width=400&height=300&quality=90",
        description: "barrière de sécurité modulaire 5 panneaux grix",
      },
      {
        title: "Poussette",
        price: "30$",
        image:
          "https://media.vertbaudet.be/Pictures/vertbaudet/157873/combine-poussette-landau-bebe-confort-smoby.jpg?width=457",
        description: "combiné poussette et landau bébé confort",
      },
    ],
  },
  {
    Categorie_name: "Jeux vidéos et jouets",
    path: "/jeu-jouets",
    image: jeux,
    className: "jeux",
    products: [
      {
        title: "console",
        price: "300$",
        image:
          "https://www.ivoirshop.ci/2383-medium_default/sony-console-ps4-slim-500-go-noir.jpg",
        description: "console ultra performante 1To 4K",
      },
      {
        title: "manette",
        price: "40$",
        image:
          "https://images.frandroid.com/wp-content/uploads/2020/11/manette-series-x-et-s-scaled.jpg",
        description: "manette sans fil",
      },
      {
        title: "chaise gaming",
        price: "150$",
        image: "https://m.media-amazon.com/images/I/71wHpcb3HdL._AC_SX425_.jpg",
        description: "chaise de bureau gamer rouge et noir",
      },
      {
        title: "abonnement gamepass",
        price: "5$",
        image:
          "https://www.cdiscount.com/pdt2/0/8/7/1/1200x1200/epy4251604177087/rw/abonnement-xbox-game-pass-ultimate-3-mois-xbox.jpg",
        description: "pass gold 3mois",
      },
      {
        title: "peluche",
        price: "6$",
        image:
          "https://static.fnac-static.com/multimedia/Images/B9/B9/5E/F1/15818425-3-1520-1/tsp20201110113844/Peluche-poulpe-reversible-double-face-20-cm-violet-bleu.jpg",
        description: "peluche poulpe reversible double face violet et bleu",
      },
      {
        title: "puzzle",
        price: "9$",
        image: "http://www.hobbycraft.co.uk/supplyimages/644088_1000_1_800.jpg",
        description: "puzzle 1000pieces ",
      },
      {
        title: "CD de jeu",
        price: "20$",
        image: "https://i.ebayimg.com/images/g/CfMAAOSwJPVdVvDr/s-l300.jpg",
        description: "jeu de role immersif",
      },
      {
        title: "casque audio",
        price: "30$",
        image:
          "https://media.ldlc.com/r1600/ld/products/00/03/24/49/LD0003244905_2.jpg",
        description: "casque wirless stéréo pour console",
      },
      {
        title: "jeu de société",
        price: "10$",
        image: "https://shop.asmodee.com/product/image/large/cn3071-5.jpg",
        description: "jeu de société de stratégie pour adultes et enfants",
      },
      {
        title: "déguisement",
        price: "60$",
        image:
          "https://static.fnac-static.com/multimedia/Images/FR/MDM/f4/7e/f0/15761140/1540-1/tsp20211208172312/Deguisement-Bebe-Yoda-Star-Wars-The-Mandalorian.jpg",
        description: "déguisement et accessoires",
      },
    ],
  },
  {
    Categorie_name: "Autos et motos",
    path: "/autos-motos",
    image: auto,
    className: "auto",
    products: [
      {
        title: "Voiture",
        price: "15000$",
        image:
          "https://i.gaw.to/content/photos/44/99/449970-le-guide-de-l-auto-annonce-ses-meilleurs-achats-2021.jpeg",
        description: "double moteur éléctrique de 204 chevaux",
      },
      {
        title: "moto",
        price: "8000$",
        image:
          "https://autocdn.co.uk/images_vehicles/2021/07/13/medium/60ed6c914eeebsportster-s-vehicle.jpg",
        description: "1200cc 125Nm ",
      },
      {
        title: "outils",
        price: "25$",
        image:
          "https://www.cdiscount.com/pdt2/5/5/2/1/700x700/imp009552/rw/michelin-cric-losange-capacite-de-levage-1-5t.jpg",
        description: "cric losange, capacité de levage 1,5T",
      },
      {
        title: "pièce détaché",
        price: "400$",
        image:
          "https://www.piecesautonantes.com/48075-thickbox_default/amortisseur-avant-droit-gauche-saab-93-trw-jgm1101t-2-amortisseurs-av.jpg",
        description: "amortisseur avant droit et gauche pour peugeot 308",
      },
      {
        title: "aspirateur voiture",
        price: "40$",
        image:
          "https://www.cdiscount.com/pdt2/6/6/1/1/700x700/auc6090814076661/rw/aspirateur-voiture-dc-12v-110w-5500pa-haute-puissa.jpg",
        description: "aspirateur voiture DC 12V 110W",
      },
      {
        title: "peiture et fourniture",
        price: "30$",
        image:
          "https://www.peinturevoiture-pro.fr/4188-thickbox_default/bombe-peinture-hydro.jpg",
        description: "bombe à peinture hydro pour carrosserie de voiture",
      },
      {
        title: "GPS",
        price: "50$",
        image:
          "https://www.cdiscount.com/pdt2/0/4/2/1/700x700/auc5061181536042/rw/gps-voiture-7-pouces-navigation-pour-auto-camion.jpg",
        description: "GPS 7 pouces pour voitures et camions ",
      },
      {
        title: "Support smartphone",
        price: "15$",
        image:
          "https://cdn.shopify.com/s/files/1/0361/5701/products/Rock-Phone-Holder-6.jpg?v=1481301577",
        description: "",
      },
      {
        title: "feux, ampoules et clignotants",
        price: "20$",
        image: "",
      },
      {
        title: "Accessoires camping-car",
        price: "100$",
        image:
          "support smartphone position horizontale/verticale avec ventouse",
      },
    ],
  },
  {
    Categorie_name: "Autres catégories",
    path: "/autres",
    image: autres,
    className: "autres",
    products: [
      {
        title: "produit animalerie",
        price: "15$",
        image:
          "https://cdn.pharmaciedesdrakkars.com/media/images/products/milprazikan-vermifuge-chat-1-1599572906.PNG",
        description: "traitement vermifuge pour chat",
      },
      {
        title: "Service",
        price: "50$",
        image:
          "https://images.ctfassets.net/4cd45et68cgf/5y7i4snzpqkr2oHRCRAkN4/c144749aa0df745e43367744af149f66/Android_Collage_1920x1080__UCAN_En.jpg",
        description: "abonnement service de streaming",
      },
      {
        title: "Microscope",
        price: "1140$",
        image: "https://m.media-amazon.com/images/I/71SgItCPlcL._SL1500_.jpg",
        description: "microscope scientifique pour étudiants et enfants",
      },
      {
        title: "Livre",
        price: "5$",
        image:
          "https://media.cultura.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/b/o/boite-livre-carton-6x18x22-5cm-paper-book-box-6x18x22-5cm-3700408386405_0.jpg?t=1577984547",
        description: "roman satirique comique ",
      },
      {
        title: "Barbecue",
        price: "40$",
        image:
          "https://media.alfresia.co.uk/catalog/product/cache/c6bde778c6ade139878d72b5dba4b74c/i/m/img_3543.jpg",
        description: "barbecue à gaz avec plateau lateraux",
      },
      {
        title: "Menuserie",
        price: "30$",
        image:
          "https://ciolli.fr/wp-content/uploads/2020/05/avives-1024x768.jpg",
        description: "dimensions 16x20pouces",
      },
      {
        title: "Ferronerie",
        price: "100$",
        image:
          "https://apprendre-a-dessiner.org/wp-content/uploads/2015/10/illustration-ferronnier-dart-2.png",
        description: "rampe d'escalier en fer forgé",
      },
      {
        title: "Imprimante 3D",
        price: "2000$",
        image:
          "https://www.lizemed.com/19-large_default/imprimante-3d-filaire-stream-30-ultra.jpg",
        description: "imprimante 3D filaire matériel médicale",
      },
      {
        title: "Valise",
        price: "90$",
        image: "https://m.media-amazon.com/images/I/61AE9QZ3FiL._AC_SY450_.jpg",
        description: "set de 4valises rigides rose-or",
      },
      {
        title: "Art",
        price: "100$",
        image:
          "https://cdn.radiofrance.fr/s3/cruiser-production/2019/09/80284809-a1be-47f6-893e-bce490ed1878/1136_maxnewsspecial348457.jpg",
        description: "tableau originale signé ",
      },
    ],
  },
];
