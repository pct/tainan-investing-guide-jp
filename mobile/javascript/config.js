	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingBackground="#323232";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.logoHeight="40";
bookConfig.logoPadding="0";
bookConfig.logoTop="0";
bookConfig.toolbarColor="#444444";
bookConfig.iconColor="#CCCCCC";
bookConfig.pageNumColor="#333333";
bookConfig.iconFontColor="#FFFFFF";
bookConfig.toolbarAlwaysShow="No";
bookConfig.formFontColor="#27181A";
bookConfig.formBackgroundColor="#27181A";
bookConfig.InstructionsButtonVisible="Show";
bookConfig.showInstructionOnStart="No";
bookConfig.showGotoButtonsAtFirst="No";
bookConfig.QRCode="Hide";
bookConfig.HomeButtonVisible="Hide";
bookConfig.HomeURL="%first page%";
bookConfig.aboutButtonVisible="Hide";
bookConfig.enablePageBack="Hide";
bookConfig.ShareButtonVisible="Show";
bookConfig.isInsertFrameLinkEnable="Show";
bookConfig.addCurrentPage="No";
bookConfig.EmailButtonVisible="Show";
bookConfig.btnShareWithEmailBody="\{link\}";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.BookMarkButtonVisible="Hide";
bookConfig.TableOfContentButtonVisible="Show";
bookConfig.isHideTabelOfContentNodes="yes";
bookConfig.SearchButtonVisible="Show";
bookConfig.leastSearchChar="3";
bookConfig.searchFontColor="#FFFFFF";
bookConfig.searchKeywordFontColor="#FFB000";
bookConfig.searchHightlightColor="#FDC606";
bookConfig.SelectTextButtonVisible="Hide";
bookConfig.PrintButtonVisible="Hide";
bookConfig.BackgroundSoundButtonVisible="Show";
bookConfig.FlipSound="No";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="Show";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="3";
bookConfig.autoPlayLoopCount="1";
bookConfig.ZoomButtonVisible="Show";
bookConfig.maxZoomWidth="0";
bookConfig.defaultZoomWidth="0";
bookConfig.mouseWheelFlip="yes";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.PhoneButtonVisible="Hide";
bookConfig.AnnotationButtonVisible="Hide";
bookConfig.FullscreenButtonVisible="Show";
bookConfig.WeChatShareButtonVisible="Hide";
bookConfig.bgBeginColor="#FFFFFF";
bookConfig.bgEndColor="#FFFFFF";
bookConfig.bgMRotation="90";
bookConfig.backgroundPosition="stretch";
bookConfig.backgroundOpacity="100";
bookConfig.backgroundScene="None";
bookConfig.LeftShadowWidth="100";
bookConfig.LeftShadowAlpha="1";
bookConfig.RightShadowWidth="40";
bookConfig.RightShadowAlpha="1";
bookConfig.ShowTopLeftShadow="Yes";
bookConfig.HardPageEnable="No";
bookConfig.hardCoverBorderWidth="8";
bookConfig.borderColor="#572F0D";
bookConfig.outerCoverBorder="Yes";
bookConfig.cornerRound="8";
bookConfig.leftMarginOnMobile="0";
bookConfig.topMarginOnMobile="0";
bookConfig.rightMarginOnMobile="0";
bookConfig.bottomMarginOnMobile="0";
bookConfig.pageBackgroundColor="#FFFFFF";
bookConfig.flipshortcutbutton="Show";
bookConfig.BindingType="side";
bookConfig.RightToLeft="No";
bookConfig.FlipDirection="0";
bookConfig.flippingTime="0.3";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.autoDoublePage="Yes";
bookConfig.isTheBookOpen="No";
bookConfig.thicknessWidthType="Thick";
bookConfig.thicknessColor="#FFFFFF";
bookConfig.SingleModeBanFlipToLastPage="No";
bookConfig.showThicknessOnMobile="No";
bookConfig.isSingleBookFullWindowOnMobile="no";
bookConfig.isStopMouseMenu="yes";
bookConfig.restorePageVisible="no";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="10";
bookConfig.rightMargin="10";
bookConfig.hideMiniFullscreen="no";
bookConfig.maxWidthToSmallMode="400";
bookConfig.maxHeightToSmallMode="350";
bookConfig.leftRightPnlShowOption="None";
bookConfig.highDefinitionConversion="yes";
bookConfig.LargeLogoPosition="top-left";
bookConfig.LargeLogoTarget="Blank";
bookConfig.isFixLogoSize="No";
bookConfig.logoFixWidth="0";
bookConfig.logoFixHeight="0";
bookConfig.updateURLForPage="No";
bookConfig.LinkDownColor="#0000FF";
bookConfig.LinkAlpha="0.4";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";

bookConfig.macBookVersion = "GHYWgjKIXTrhHPTfqgKMcWqqNKQamkOBYXjuPAZXkvMORbhoNBbUmvBORXgkBNdXvvIOUYhrNGUcqkOKXRnpIMQRvhHGRfvtIEWUhiIJTRmqNAZT9b9Fe821_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=42;
bookConfig.largePageWidth=598;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Demo";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF Professional";
bookConfig.MidBgColor="#db5bea";
bookConfig.bookmarkCR = "c4326e9c4c2c0e232e3dc1b62fcdc1c91c62d7b2";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var language=[{"language" : "Japanese","btnFirstPage" : "\u6700\u521d\u306e","btnNextPage" : "\u6b21","btnLastPage" : "\u6700\u5f8c","btnPrePage" : "\u524d","btnGoToHome" : "\u30db\u30fc\u30e0","btnDownload" : "\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9","btnSoundOn" : "\u30b5\u30a6\u30f3\u30c9\u30aa\u30f3","btnSoundOff" : "\u81ea\u6162\u3052\u306b\u8a00\u3046","btnPrint" : "\u5370\u5237","btnThumb" : "\u30b5\u30e0\u30cd\u30a4\u30eb\u3092","btnBookMark" : "\u30d6\u30c3\u30af\u30de\u30fc\u30af","frmBookMark" : "\u30d6\u30c3\u30af\u30de\u30fc\u30af","btnZoomIn" : "\u30ba\u30fc\u30e0\u30a4\u30f3","btnZoomOut" : "\u30ba\u30fc\u30e0\u30a2\u30a6\u30c8\u3059\u308b","btnAutoFlip" : "\u30aa\u30fc\u30c8\u30d5\u30ea\u30c3\u30d7","btnStopAutoFlip" : "\u30aa\u30fc\u30c8\u30d5\u30ea\u30c3\u30d7\u3092\u505c\u6b62","btnSocialShare" : "\u30b7\u30a7\u30a2","btnHelp" : "\u52a9\u3051","btnAbout" : "\u7d04","btnSearch" : "\u691c\u7d22","btnFullscreen" : "\u30d5\u30eb\u30b9\u30af\u30ea\u30fc\u30f3","btnExitFullscreen" : "\u5168\u753b\u9762\u8868\u793a\u3092\u7d42\u4e86","btnMore" : "\u3082\u3063\u3068","frmPrintCaption" : "\u5370\u753b","frmPrintall" : "\u3059\u3079\u3066\u306e\u30da\u30fc\u30b8\u3092\u5370\u5237\u3059\u308b","frmPrintcurrent" : "\u73fe\u5728\u306e\u30da\u30fc\u30b8\u3092\u5370\u5237","frmPrintRange" : "\u5370\u5237\u7bc4\u56f2","frmPrintexample" : "\u4f8b\uff1a2,3,5-10","frmPrintbtn" : "\u5370\u5237","frmShareCaption" : "\u30b7\u30a7\u30a2","frmShareLabel" : "\u30b7\u30a7\u30a2","frmShareInfo" : "\u822a\u7a7a\u9069\u5207\u306a\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30afnetworks.Just\u793e\u4f1a\u306b\u3053\u306e\u51fa\u7248\u7269\u3092\u5171\u6709\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059","frminsertLabel" : "\u30b5\u30a4\u30c8\u306b\u633f\u5165","frminsertInfo" : "\u3042\u306a\u305f\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306b\u3053\u306e\u51fa\u7248\u7269\u3092\u57cb\u3081\u8fbc\u3080\u305f\u3081\u306b\u3001\u6b21\u306e\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002","frmaboutcaption" : "\u9023\u7d61","frmaboutcontactinformation" : "\u304a\u554f\u3044\u5408\u308f\u305b\u5148","frmaboutADDRESS" : "\u30a2\u30c9\u30ec\u30b9","frmaboutEMAIL" : "\u30e1\u30fc\u30eb","frmaboutWEBSITE" : "\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8","frmaboutMOBILE" : "\u30e2\u30d0\u30a4\u30eb","frmaboutAUTHOR" : "\u8457\u8005","frmaboutDESCRIPTION" : "\u8aac\u660e","frmSearch" : "\u691c\u7d22","frmToc" : "\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8868","btnTableOfContent" : "\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u8868\u793a","btnNote" : "\u6ce8\u91c8","lblLast" : "\u3053\u308c\u304c\u6700\u5f8c\u306e\u30da\u30fc\u30b8\u3067\u3059\u3002","lblFirst" : "\u3053\u308c\u306f\u6700\u521d\u306e\u30da\u30fc\u30b8\u3067\u3059\u3002","lblFullscreen" : "\u30d5\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u3067\u8868\u793a\u3059\u308b\u306b\u306f\u30af\u30ea\u30c3\u30af","lblName" : "\u540d\u524d","lblPassword" : "\u30d1\u30b9\u30ef\u30fc\u30c9","lblLogin" : "\u30ed\u30b0\u30a4\u30f3","lblCancel" : "\u30ad\u30e3\u30f3\u30bb\u30eb","lblNoName" : "\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u7a7a\u306b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002","lblNoPassword" : "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u7a7a\u306b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002","lblNoCorrectLogin" : "\u6b63\u3057\u3044\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002","btnVideo" : "\u30d3\u30c7\u30aa\u30ae\u30e3\u30e9\u30ea\u30fc","btnSlideShow" : "\u30b9\u30e9\u30a4\u30c9\u30b7\u30e7\u30fc","pnlSearchInputInvalid" : "\u691c\u7d22\u30c6\u30ad\u30b9\u30c8\u304c\u77ed\u3059\u304e\u307e\u3059","btnDragToMove" : "\u30de\u30a6\u30b9\u30c9\u30e9\u30c3\u30b0\u306b\u3088\u308a\u79fb\u52d5","btnPositionToMove" : "\u30de\u30a6\u30b9\u306e\u4f4d\u7f6e\u306b\u3088\u3063\u3066\u79fb\u52d5\u3057\u307e\u3059","lblHelp1" : "\u8868\u793a\u3059\u308b\u306b\u306f\u3001\u30da\u30fc\u30b8\u306e\u9685\u3092\u30c9\u30e9\u30c3\u30b0\u3057\u307e\u3059","lblHelp2" : "\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30a2\u30a6\u30c8\u3001\u30ba\u30fc\u30e0\u30a4\u30f3\u3057\u307e\u3059","lblCopy" : "\u30b3\u30d4\u30fc","lblAddToPage" : "\u30da\u30fc\u30b8\u306b\u8ffd\u52a0","lblPage" : "\u30da\u30fc\u30b8","lblTitle" : "\u30bf\u30a4\u30c8\u30eb","lblEdit" : "\u7de8\u96c6","lblDelete" : "\u524a\u9664","lblRemoveAll" : "\u3059\u3079\u3066\u524a\u9664","tltCursor" : "\u30ab\u30fc\u30bd\u30eb","tltAddHighlight" : "\u30cf\u30a4\u30e9\u30a4\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059","tltAddTexts" : "\u30c6\u30ad\u30b9\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059","tltAddShapes" : "\u56f3\u5f62\u3092\u8ffd\u52a0","tltAddNotes" : "\u30e1\u30e2\u3092\u8ffd\u52a0","tltAddImageFile" : "\u30a4\u30e1\u30fc\u30b8\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0","tltAddSignature" : "\u7f72\u540d\u3092\u8ffd\u52a0","tltAddLine" : "\u884c\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002","tltAddArrow" : "\u77e2\u5370\u3092\u8ffd\u52a0","tltAddRect" : "RECT\u3092\u8ffd\u52a0","tltAddEllipse" : "\u6955\u5186\u3092\u8ffd\u52a0","lblDoubleClickToZoomIn" : "\u3067\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u3066\u30ba\u30fc\u30e0\u3002","lblPages" : "\u30da\u30fc\u30b8","infCopyToClipboard" : "\u304a\u4f7f\u3044\u306e\u30d6\u30e9\u30a6\u30b6\u306f\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u7528\u91cf\u3001\u305d\u308c\u3092\u81ea\u5206\u3067\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002","lblDescription" : "\u30bf\u30a4\u30c8\u30eb","frmLinkLabel" : "\u30ea\u30f3\u30af","infNotSupportHtml5" : "\u304a\u4f7f\u3044\u306e\u30d6\u30e9\u30a6\u30b6\u306fHTML5\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002","frmHowToUse" : "\u4f7f\u3044\u65b9","lblHelpPage1" : "\u6307\u3092\u52d5\u304b\u3057\u3066\u672c\u306e\u30da\u30fc\u30b8\u3092\u53cd\u8ee2\u3055\u305b\u307e\u3059\u3002","lblHelpPage2" : "\u30b8\u30a7\u30b9\u30c1\u30e3\u30fc\u3092\u4f7f\u7528\u3057\u3066\u62e1\u5927\u3059\u308b\u304b\u3001\u30da\u30fc\u30b8\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002","lblHelpPage3" : "\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u3068\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306e\u8868\u304c\u8868\u793a\u3055\u308c\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u7d4c\u7531\u3067\u66f8\u7c4d\u3092\u5171\u6709\u3067\u304d\u307e\u3059\u3002","lblHelpPage4" : "\u30d6\u30c3\u30af\u30de\u30fc\u30af\u3092\u8ffd\u52a0\u3057\u3001\u691c\u7d22\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u30d6\u30c3\u30af\u3092\u81ea\u52d5\u53cd\u8ee2\u3057\u307e\u3059\u3002","lblHelpPage5" : "\u30b5\u30e0\u30cd\u30a4\u30eb\u3092\u958b\u3044\u3066\u3001\u3059\u3079\u3066\u306e\u30d6\u30c3\u30af\u30da\u30fc\u30b8\u306e\u6982\u8981\u3092\u8868\u793a\u3057\u307e\u3059\u3002","frmQrcodeCaption" : "\u4e0b\u306e2\u6b21\u5143\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3057\u3066\u3001\u643a\u5e2f\u96fb\u8a71\u3067\u8868\u793a\u3057\u307e\u3059\u3002"}];var pageEditor =[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.260449",y:"0.278941",width:"0.215949",height:"0.014396"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.tainan.gov.tw/economic/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.243651",y:"0.299929",width:"0.229201",height:"0.014396"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:investtainan@mail.tainan.gov.tw"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.428538",y:"0.229202",width:"0.128055",height:"0.012237"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:recruit@moea.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.442817",y:"0.251373",width:"0.141047",height:"0.012237"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://investtaiwan.nat.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.428538",y:"0.385796",width:"0.112662",height:"0.012237"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:dois@moea.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.442817",y:"0.430139",width:"0.137022",height:"0.012237"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.dois.moea.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.428538",y:"0.511515",width:"0.131239",height:"0.012237"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:serve@moeaic.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.442817",y:"0.555858",width:"0.118902",height:"0.012237"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.moeaic.gov.tw"}}],[]]
var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}