'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "dac5c9185f3a76de18e95bd3b7ea003a",
"index.html": "5cb17ac61177554d4ebc537bf8feb5c1",
"/": "5cb17ac61177554d4ebc537bf8feb5c1",
"main.dart.js": "06ee035ec2b989d87227da09cf7ec533",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0bc9ba94d7f98688a793bb38113da13c",
"assets/images/selected.svg": "cc47d22421a49743a93c963cf75b1562",
"assets/images/home_top_pic_chinese_studies_more.png": "b12fbe69e1f81e8e54c8415253943d22",
"assets/images/ddk_login_icon_unselected@3x.png": "16f206df5970e1ab0af9fbd2d1759c0a",
"assets/images/home_top_icon_third.png": "57c1fcf037dfd5be779d2154efbf8f74",
"assets/images/ddk_login_icon_go@3x.png": "c04d993512d60f1d2029d4f622ff8242",
"assets/images/refresh_header.gif": "22a2db63154e836b1f40bcc3a29b02b3",
"assets/images/sys.png": "b57606743693345895cbab9c61b98ec7",
"assets/images/home_top_icon_first.png": "ae56409da1ae1c87578a138fb11e768e",
"assets/images/icon_right.png": "562e2f717a36cdeb36b707a1d35a72b9",
"assets/images/circle.svg": "424e83990ca47fbd502fd97af41fa339",
"assets/images/home-select.png": "eb8e4edd96e026b0fb4f50b991fd4f43",
"assets/images/nav_icon_back_green.png": "4908d8815bd8559dbf9e5993c9253a28",
"assets/images/home_icon_more_gray.png": "ffe4924aaa6de4f3d6f5e0299e45ecca",
"assets/images/refresh_footer.gif": "ec9c02e84913dfd6e5f0545ac0e262be",
"assets/images/ppo.png": "a7b0dc268dac241d7d31e433994a44e8",
"assets/images/common_tag_works_vip.png": "cc1f62bb0ba3ba42c58afdff88cdb563",
"assets/images/home_top_pic_fairy_tale.png": "afa6d4639f393595edc1d6069cd8ac90",
"assets/images/mine_selected.png": "f2cc6f3ee15009f93f5c387c5d8d857a",
"assets/images/pyq.png": "2f9f3c005c0b5c12cba7d790c22f2c3e",
"assets/images/plan/jihua.png": "6dd532919ecfda61c408b850fa68b5a1",
"assets/images/plan/book-left.svg": "64583135657bd031553fcca5238d9ca5",
"assets/images/plan/zhishi.svg": "10e97388da11d4b72d1f01c993d5e21d",
"assets/images/plan/empty.png": "bd17dde2c678d02cf26dea3756060573",
"assets/images/plan/lock.svg": "6e49105a464e294d7313af90d1177748",
"assets/images/plan/book-bg.svg": "3d09b2eb0d3050a32a0327c5bc2ee22c",
"assets/images/plan/close.svg": "daf55d359ec9dff06e702362e8e67e3b",
"assets/images/plan/sanjiao.svg": "71ad214622712d6397f9e2b527a29d2e",
"assets/images/plan/right.svg": "a556ffef7fdf530a0dd3837f102a1bb6",
"assets/images/plan/book-bg-1.svg": "be1814b535ebdbe02b7568876b763f0e",
"assets/images/plan/mask1.png": "f2236f43d10a9bd7f0b2ffde9b4365e0",
"assets/images/plan/switch.png": "b84b296b88123f4182ab67c9af25be94",
"assets/images/plan/book-bg-2.svg": "d17510b47252cfaed77377ecfe842382",
"assets/images/plan/sandian.svg": "852e812414c6b4cf9e5fc8d181c59841",
"assets/images/plan/right1.svg": "82eca48dc2b6c75887ac63ac070fa0bf",
"assets/images/plan/shadow.png": "04c8e6416da32865abf664bb680e5840",
"assets/images/plan/line.png": "cba2f7ab8811a455658f2450403f9ba8",
"assets/images/plan/xiahuaxian.svg": "bcd5d12bad49eba2ea10a8052581add5",
"assets/images/plan/modal-bg.svg": "7fe441e54b48b5f14fb54bf7bb0c3a3a",
"assets/images/plan/check1.svg": "880a3410b944d9748e199d77f76f326b",
"assets/images/home_top_pic_poems.png": "d8fc81534a7fd25f317cbd510b6ff79e",
"assets/images/ddk_login_bg@3x.png": "8f462ae79697db8933df070a965a3452",
"assets/images/home.png": "fa62fc130adca40e5768c0c0fcb2ca5e",
"assets/images/shop.png": "5c12f7500602aab3e742ac40fce64abd",
"assets/images/person.png": "32be21e7821d79ed422b197519e7df63",
"assets/images/home_top_icon_second.png": "a0d364ce402d9fbe48e4d7784a2a7637",
"assets/images/list_icon_time.png": "4a82b95e283a855e7032fe5cf8529fc5",
"assets/images/mine_unselected.png": "2840c2c0a90f08c40b9f07dfb3b16a7a",
"assets/images/refresh_header.png": "6dca679f4de227e665ad089e5c30b56b",
"assets/images/back.svg": "769d91987d9c390837a479035679d0d3",
"assets/images/home_unselected.png": "ad87552410c91391ed65a667ca40e3a8",
"assets/images/home_top_pic_poems_more.png": "87a41762c9f73b21e13bc66c5b19f0e4",
"assets/images/record_selected.png": "88fc3cdf5d3206cdfca7ec87a5ec635c",
"assets/images/mine/boy1.png": "1937889e3fdbebb22bfc3e2f899283ec",
"assets/images/mine/girl.svg": "a1329d201d9bd52aba2ac12c2a2a2372",
"assets/images/mine/order.png": "0b0df73ce82544352e85783ce577f074",
"assets/images/mine/kefu.svg": "f548bb4d04660a8f3b61f182446fa653",
"assets/images/mine/arrow-right.svg": "5943411a45be4183be1bb64733e372d7",
"assets/images/mine/arrow-right-1.svg": "b63580d6003cb668254ae80c580938e7",
"assets/images/mine/setting.svg": "a7dd3fbaf6ef831a581c79e9b47c1e33",
"assets/images/mine/boy.svg": "82bbc325e8360af640d4002676e0e7b3",
"assets/images/mine/logo.png": "cf451ef88d17033a9a04533143af75d2",
"assets/images/mine/girl1-select.png": "b7588d08c1c8bdf45dd8a8aa31f138dc",
"assets/images/mine/edit.svg": "01cbb346b7315e08279381b14210a18d",
"assets/images/mine/girl1.png": "2232db50c484819535185fc47509ff6c",
"assets/images/mine/delete.svg": "8d16c3bf38c4d031cb1e5605c3369c89",
"assets/images/mine/agreement.png": "e2bb7fb58976ef6aa3dd0fc8e3301d4c",
"assets/images/mine/qualification.svg": "c343b4335758c1866d4183ed9d277bab",
"assets/images/mine/play.png": "636a459b60d0f1725ecb961b3d09ed91",
"assets/images/mine/boy1-select.png": "5e8d72f61f4c20d3c938ece7a5f0dcb1",
"assets/images/mine/network-check.svg": "7334e584d46dd1da23c2d9dc7fb828a8",
"assets/images/dialogue_selected.png": "e461a8bf4a7b16c47b7d2d3dfb496725",
"assets/images/home_top_pic_fairy_tale_more.png": "5964d411b79767944e2858fdd1331dd1",
"assets/images/delete.svg": "daf55d359ec9dff06e702362e8e67e3b",
"assets/images/list_icon_play_volume.png": "6816f252eaa293c3522096ee2ba8c177",
"assets/images/dialogue_unselected.png": "73396e664b5a139a5fd21bf26c8755fa",
"assets/images/person-select.png": "cd77ce7953aa33c3566db964b49a28fe",
"assets/images/gsj_pic_peizhiwifi.png": "d6dd29da9d096d000993219921925bad",
"assets/images/record_unselected.png": "c51a7277cdb628b3916823268dddfb8d",
"assets/images/ddk_login_icon_selected@3x.png": "47a65e6282f0e612d762c8c5b0865c68",
"assets/images/ddk_login_icon_back_black@3x.png": "c6ff3ca8ab807185bfc247260fef4112",
"assets/images/icon_game.png": "d06f0ba6b0a8362b4f1759d52544998f",
"assets/images/icon_refresh_no_more.png": "3dfbd4f8dc62273bf5d9146c7f07ae33",
"assets/images/home_top_pic_chinese_studies.png": "1aaf22fa6f73430fa02177ee6b005c28",
"assets/AssetManifest.json": "789f5771ce0dab24d158e04d6a352fed",
"assets/NOTICES": "c228b78a7185cca77a8692a2d1188ff4",
"assets/FontManifest.json": "22bc50984d5f5e8fd64458f9bbdee8c9",
"assets/AssetManifest.bin.json": "caf685d0f0b651d7c0adbdacad21fc84",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6284b833aee65a8f601935955df9f72d",
"assets/packages/ks_image_loader/assets/images/base_pic_default.png": "bc99d70d9aabe9dd0096794d2d9f3fa5",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "92d8d4c3ad37c352b5dda2f86a5cf44d",
"assets/fonts/MaterialIcons-Regular.otf": "8f72f9c7a650beffebeba5b29fcd79bc",
"assets/assets/pem/enc_kaishustory.com_2023.pem": "a215d527082a2c7bef6c5e625c9aabad",
"assets/assets/images/middle_choice_text_correct.png": "daaf96a827fd7d543609578ed9df9b2d",
"assets/assets/images/global_status_failure.png": "597cc4ae3c784cf4c2e6b4573978beb2",
"assets/assets/images/interactive_icon_return.png": "11ec41805feac9eab63f7c6e9ac5b3e8",
"assets/assets/images/icon.png": "8c11cd45b8fb367d209f7ff3b0f4ac05",
"assets/assets/images/middle_status_noNetwork.png": "ee22571d0a41a309eec0dde575a7aa99",
"assets/assets/images/player_icon_tigan%2520play@3x.png": "ab8e69a308fdb351cd86b93a4c78351e",
"assets/assets/images/home_icon_video_big.png": "801b2e27edef41183bdab27d84c34ffc",
"assets/assets/images/middle_next_button.png": "3d566cdaffb3fdd454cd9de5cfe160f7",
"assets/assets/images/middle_status_download.png": "63f8f81951c0610d81f19e5c217e3afb",
"assets/assets/images/middle_status_continue.png": "f0b583cac6096a65a08a879386a16bd3",
"assets/assets/images/middle_book_open.png": "58371871ca0abae6ba932ff2c7eb086b",
"assets/assets/images/player_icon_prompt@3x.png": "5564b73e20272be4eeed2f7697a6d676",
"assets/assets/images/open_voice_play.svg": "68fb297fbe682d6996ba866612a59106",
"assets/assets/images/progress%2520bar@3x.png": "e3cfb92109adcf31a8fa124322ef7cbb",
"assets/assets/images/icon_launch_logo.png": "5ab26ca80f5b2c2274744fd8701d3453",
"assets/assets/images/player_icon_unlock@3x.png": "dc2f5ed9c2680ac2164f11ba46c8ad39",
"assets/assets/images/middle_card_line.png": "045dc7d2f92cd512fa13c6801ad817b2",
"assets/assets/images/middle_status_failure.png": "ecc6eae7ded9d05b3d789ebc3f342bce",
"assets/assets/images/login_start.png": "e793d563376c087403fc224b55e3264f",
"assets/assets/images/mine_pic_card_bg_1@3x.png": "bda8023d39fb02526a5aaaf925d328d9",
"assets/assets/images/login_small.png": "23e04330534fc8fb48df38d1614e1662",
"assets/assets/images/player_icon_back_white@3x.png": "fb2442b26160bf9628670d7ede388c13",
"assets/assets/images/player_icon_play1@3x.png": "63f6a183214f26c80878dd5d225786eb",
"assets/assets/images/login_close.png": "af7cf9835290ffa7900d31156765554d",
"assets/assets/images/player_hint2_text_picture@3x.png": "e1fe5a57edfbdd949a1c51f8550d379b",
"assets/assets/images/middle_previous_button.png": "8b86e6d97957eabe0b78a1b49d8ebfbb",
"assets/assets/images/middle_status_loading.png": "f96813014a210f6dafa9fed575135162",
"assets/assets/images/head_defalut.png": "c9c724e150d20b096e23b93faab8c496",
"assets/assets/images/player_hint1_wenzi@3x.png": "e579faf4fba337c217e06c0763a219af",
"assets/assets/images/player_icon_pause@3x.png": "96b1ad54da10c87ff0aa1d57f066853f",
"assets/assets/images/plan_level_completed.png": "10c19ce6c3911c600c959e75cb1b8add",
"assets/assets/images/read_curriculum_icon_completed.png": "99a07fde8de3ba1fe6f9973616e2561a",
"assets/assets/images/middle_card_book.png": "0372e00a40e93b62027e2358a310eeb0",
"assets/assets/images/login_pad_small.png": "4df29498f236e650efd5d259a790635d",
"assets/assets/images/login_pad_start.png": "4df29498f236e650efd5d259a790635d",
"assets/assets/images/player_hint_close@3x.png": "4fce55605dda62233107635124887c0c",
"assets/assets/images/player_icon_back.png": "52ae8bfd5beb36efbfbb4e1be85b4550",
"assets/assets/images/logo.png": "c68008e00963ff79a335ec4e1ad88033",
"assets/assets/images/open_voice_record.svg": "1f40164363b683aad17bb2d9e98bcf80",
"assets/assets/images/player_hint2_text@3x.png": "949033bb0e5ecb418810cfea4b8a8bb6",
"assets/assets/images/login_pic_ipbg@2x.png": "d113b44f9a3508e9170d84b8aab6f2c0",
"assets/assets/images/player_icon_back@3x.png": "85d9ebb62e304910884a11a64bade29f",
"assets/assets/images/mine_header.png": "1c5d0c0ba802f92ee3290d6f286511ec",
"assets/assets/images/player_hint1_IP@3x.png": "222b30675783b183dca742f04cad216e",
"assets/assets/images/login_pic_ipbg_w@2x.png": "2d35c36421a52e66d9f1d35d27c8274e",
"assets/assets/images/middle_single_choice_correct.png": "b86d7805013c34b4efc1649167d821f0",
"assets/assets/images/player_icon_lock@3x.png": "832e87fa97996870528dbbb5d147099f",
"assets/assets/images/ddk_login_icon_logo.png": "e12f0d477f358d22067a247f9669d772",
"assets/assets/images/uk_select_head_bottom_bg.png": "7f9c6982621293625a986d40af47a59b",
"assets/assets/images/player_icon_play2@3x.png": "028fb8b43796d02ef0220197ce98e442",
"assets/assets/images/middle_choice_text_normal.png": "9cbf15d12d49fe26aacc2e28bf162b04",
"assets/assets/images/middle_single_choice_error.png": "466ba963ed1f138dce3283ccc8f26200",
"assets/assets/images/login_pic_ipbg_w@3x.png": "8135cd5d9a43890b3dbeee4f907b6e3a",
"assets/assets/images/middle_book_shadow.png": "b97ee116534c089a4dd4f0d9b41a0b85",
"assets/assets/images/middle_book_close.png": "9644bee794d115a906a798c50e27d789",
"assets/assets/images/head_top_right_icon.png": "85e6825abd81176bdae042d2db540b52",
"assets/assets/images/login_pic_ipbg@3x.png": "ca0a5361c6a115d6b0b16ef34d946391",
"assets/assets/images/global_status_empty.png": "fa967bf7572a62a284cecaf29d2672d0",
"assets/assets/ks_refresh/footer_pull_up_loading_1.png": "05c7168ae2aca71a1d8b142344094a92",
"assets/assets/ks_refresh/footer_pull_up_loading_2.png": "cabe45ef0e4165ee79c251c39a815992",
"assets/assets/ks_refresh/footer_pull_up_loading_3.png": "9957c8cd8483245e01dd057dca97ffe6",
"assets/assets/ks_refresh/footer_pull_up_loading_7.png": "b5863ddda8585e60e198171894315697",
"assets/assets/ks_refresh/footer_pull_up_loading_6.png": "9a17eb5fbd3abe8b6e25cbb179bf6861",
"assets/assets/ks_refresh/footer_pull_up_loading_4.png": "9f9b3a1bb2db290cccaa0eea4f6ff68d",
"assets/assets/ks_refresh/footer_pull_up_loading_5.png": "d3c6df8235d1e9185f3ed1c2fece8a15",
"assets/assets/ks_refresh/comp_00039.png": "bd171c044e4ebd16b815a597a2d68a19",
"assets/assets/ks_refresh/comp_00005.png": "aeff8fd5b3a48e5fa066e4a36c51a94a",
"assets/assets/ks_refresh/comp_00011.png": "df6dc2734d595dd26909a563bdd1af57",
"assets/assets/ks_refresh/comp_00010.png": "494a1db18a85cd36aaf1baa738616947",
"assets/assets/ks_refresh/comp_00004.png": "24e46edf1419ba6ebeec1ba9a29056ba",
"assets/assets/ks_refresh/comp_00038.png": "18ea976df59310bf635744d703376288",
"assets/assets/ks_refresh/comp_00012.png": "9f5f1ee8fe515585135d9feed9cc1efb",
"assets/assets/ks_refresh/comp_00006.png": "b5926d898148190eb468395d49dc6217",
"assets/assets/ks_refresh/comp_00007.png": "1d3bbff4824d2922c567e6c99290be72",
"assets/assets/ks_refresh/comp_00013.png": "50c9e2ead103b21a8ec1ffe0974dd44c",
"assets/assets/ks_refresh/comp_00017.png": "2264b06a7ed9468e7a4d39055f483ce6",
"assets/assets/ks_refresh/comp_00003.png": "ee29942f559d53fcb3692e2121299b6c",
"assets/assets/ks_refresh/comp_00002.png": "f4b42806214afffe020240980cc456be",
"assets/assets/ks_refresh/comp_00016.png": "83f06d9f2dba46981ce9bb56db876461",
"assets/assets/ks_refresh/comp_00000.png": "c54ec55f1b4c520f8f7aa8ba8ded4110",
"assets/assets/ks_refresh/comp_00014.png": "ebde9c688e9bfad5bcbd5a51ab3fe3bd",
"assets/assets/ks_refresh/comp_00028.png": "b8ff066e2a7062ec91469e0e364c4c8d",
"assets/assets/ks_refresh/comp_00029.png": "0a0c3d8bb1c625ff19054f167fdc71b3",
"assets/assets/ks_refresh/comp_00015.png": "83f06d9f2dba46981ce9bb56db876461",
"assets/assets/ks_refresh/comp_00001.png": "3bb5b24ebb2ad5fa667ab86e33bc9e98",
"assets/assets/ks_refresh/comp_00018.png": "e980a7026859b702b190a27717359e60",
"assets/assets/ks_refresh/comp_00024.png": "d95d2d05985db7a5b33f2a50a8a06570",
"assets/assets/ks_refresh/comp_00030.png": "99db9cc76270a195214f1e49274970ee",
"assets/assets/ks_refresh/comp_00031.png": "8582f54d4d61c9c8e828d79a82bf80b1",
"assets/assets/ks_refresh/comp_00025.png": "820d12e121d0c5bbf5ce7c1cfd3c05c0",
"assets/assets/ks_refresh/comp_00019.png": "510785627d583fd0f520bb9945c0288e",
"assets/assets/ks_refresh/comp_00033.png": "b9d053a23a1f6c3a0894ccca7380db2f",
"assets/assets/ks_refresh/comp_00027.png": "ef31f376fbabfd62f09f14974e5982a6",
"assets/assets/ks_refresh/comp_00026.png": "d7af6d5c464af60da56e38e1386eb535",
"assets/assets/ks_refresh/comp_00032.png": "eb89693a55f1bb5149a2c73a26f5d076",
"assets/assets/ks_refresh/comp_00036.png": "05743fa3135caf7610752371cdd2b01e",
"assets/assets/ks_refresh/comp_00022.png": "b12cf34e6cf5af9d7d567188200db292",
"assets/assets/ks_refresh/comp_00023.png": "617562d56df4f6bf1c6a36b0c837918d",
"assets/assets/ks_refresh/comp_00037.png": "d555653412a733805a1707a4bde760cf",
"assets/assets/ks_refresh/comp_00021.png": "99c22f4171254e154f7ea91763373071",
"assets/assets/ks_refresh/comp_00035.png": "3826f7c22f7129a32563de149be0c38d",
"assets/assets/ks_refresh/comp_00009.png": "224cb7c50f83534021b1df6a4f0d48ec",
"assets/assets/ks_refresh/comp_00008.png": "d78e88eb4ccb7108d5956cad7078638a",
"assets/assets/ks_refresh/comp_00034.png": "bddca07b8f0ece7a6be18b9155765e00",
"assets/assets/ks_refresh/comp_00020.png": "68c48a5d7b4ff78dbaf8f9e24fe55690",
"assets/assets/ks_refresh/footer_pull_up_loading_8.png": "0dc67048975e09d200151be8e24b9dc7",
"assets/assets/ks_refresh/footer_pull_up_loading_9.png": "6df5d71acd38dec3e3182ad0de754bb5",
"assets/assets/ks_refresh/footer_pull_up_load_no_more.png": "d6c2dbc6abfba3c1df5e79af9ad937f5",
"assets/assets/ks_refresh/comp_00040.png": "b9d540663b78e57b44172407e1da501e",
"assets/assets/net_environment/environment.json": "f41a0d27aa732ceb199af5bb55326ade",
"assets/assets/svga/player_icon_prompt_1.svga": "d03fe249db3a2b3b6fa466dcb1de6ae6",
"assets/assets/svga/clap3.svga": "1e0ec1347f11d8aaf3b96dc04f1fa765",
"assets/assets/svga/middle_status_loading.svga": "fa4270a9f4a07d2bc6f96d6f83f4d977",
"assets/assets/svga/clap2.svga": "d232116f82d472909b10b9e444aeb713",
"assets/assets/svga/middle_book_trumpt_black.svga": "90721f49c15ae3c3d161ce384c30c5da",
"assets/assets/svga/open_voice_loading.svga": "029d1dc285f54132a53316a3857c6029",
"assets/assets/svga/middle_card_openBook.svga": "26066e509c005be34d4f8bee28a25d33",
"assets/assets/svga/middle_single_choice_trumpet.svga": "b3c8251e5c158dbdb872ce18e7131c07",
"assets/assets/svga/middle_card_boxShake.svga": "5aacaa533b12a4b229f1347737c1f0d5",
"assets/assets/svga/open_voice_recording.svga": "918eb233d14021b0a84c9fe5c215bfd2",
"assets/assets/svga/middle_card_line.svga": "0ecc66baf9891d4c8552fb7badf6e446",
"assets/assets/svga/open_voice_img_audio_playing.svga": "f261936bdc152cc25ce0c13fb95fe175",
"assets/assets/svga/middle_card_fly.svga": "04be9b15b31d78547a0f18c7af28bc67",
"assets/assets/svga/middle_book_trumpt.svga": "f261936bdc152cc25ce0c13fb95fe175",
"assets/assets/svga/middle_single_choice_correct.svga": "7210e3206c86a36c107c21b421f19967",
"assets/assets/svga/clap1.svga": "82504cf8402701453d70db5e9247d8cb",
"assets/assets/svga/head_scanning.svga": "b8acfa3eab890ce3c772553f02b648ce",
"assets/assets/svga/open_voice_record_playing.svga": "688e05acf0b173c90fb5b20005523c51",
"assets/assets/svga/drag_drop_question_voice_play_icon.svga": "14838901a00e1ab8d4b12b58bdb2dccc",
"assets/assets/aud/aud008.mp3": "fbce71fc1c72cceefd781ddb1f56400d",
"assets/assets/aud/aud009.mp3": "30b9f617290e85279058005555e74cf4",
"assets/assets/aud/aud007.mp3": "dcda8a494e94e23c407ef07e4e4ba1e8",
"assets/assets/aud/aud006.mp3": "64b3b1805099cad6f326ed1db08a45f2",
"assets/assets/aud/aud004.mp3": "92878e432e4678d999859b96f03b6096",
"assets/assets/aud/aud010.mp3": "13317974946cd7fa197fd3af21828863",
"assets/assets/aud/aud011.mp3": "92bc7a95e4745f14e544e5f273e0a10c",
"assets/assets/aud/aud005.mp3": "63640c338a034c228265ba1914bff3ff",
"assets/assets/aud/aud001.mp3": "8706fd057b02694e33f1b8942f76df69",
"assets/assets/aud/aud002.mp3": "5f77f78cbb15b5147ba2f9a8788f18d2",
"assets/assets/aud/aud003.mp3": "5dfb1b0ea7f4aba5bb9329159250e782",
"assets/assets/fonts/HYZhengYuan-75W.ttf": "820bcda609a69b4222e1a26f4dfdc661",
"assets/assets/sound/sound018.mp3": "6b39d4cef79ad19cefac7067be1d3097",
"assets/assets/sound/sound008.mp3": "b0dd5214d983e9c6000f4a9242bf5cc5",
"assets/assets/sound/sound010.mp3": "d2cfaa0c2bccee4b7bc8982cb8d973ea",
"assets/assets/sound/sound004.mp3": "ec12742f802fb4bc23f8b46425de4daa",
"assets/assets/sound/sound011.mp3": "257358392a4c3e18b668c00d2b9a627c",
"assets/assets/sound/sound007.mp3": "b440c578283d0df36f56edafed8cd4ee",
"assets/assets/sound/sound013.mp3": "92ddbc65e9af775f7a8450a5bef1a732",
"assets/assets/sound/sound012.mp3": "0d536976e03a1259ccab6a524e6201d2",
"assets/assets/sound/sound006.mp3": "7e6dddafa2b67bfb96e0739e4a0479f3",
"assets/assets/sound/sound002.mp3": "8248adcd2e970070fd3bf53136b03020",
"assets/assets/sound/sound016.mp3": "6b39d4cef79ad19cefac7067be1d3097",
"assets/assets/sound/sound017.mp3": "6b39d4cef79ad19cefac7067be1d3097",
"assets/assets/sound/sound003.mp3": "db139f081a193ddf4647a5f0d1c987f9",
"assets/assets/sound/sound015.mp3": "7ed951be5b9b9a08d240e771105187b4",
"assets/assets/sound/sound001.mp3": "06ed058f23c981784768b1f705bec496",
"assets/assets/sound/sound014.mp3": "c05ba95b3eb8ecb27cca0621e476bf43",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
