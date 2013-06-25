# 모바일 웹 사이트 구축을 위해 고려해야 할 사항


## 일반 웹사이트와 뭐가 다른가

- 가변폭 최우선

지원해야할 디바이스가 단지 데스크탑 웹 브라우저 뿐 아니라 모바일 또는 태블릿 디바이스까지 확대가 되면 가장 먼저 고려해야할 것은 페이지의 가로 폭이다.

보통 480px (디바이스 Width: 물리적 해상도가 아닌 내부 해상도) 기준으로 폰/태블릿으로 구분한다.

	아이폰 3GS : 3.5", 320px (320px) x1.0
	아이폰 4(4S) : 3.5", 640px (320px) x2.0
	아이폰 5 : 4.0", 640px (320px) x2.0
	갤럭시 S : 4.0", 480px (480px) x1.0
	갤럭시 S2 : 4.3", 480px (320px) x1.5
	갤럭시 S3 : 4.8", 720px (360px) x2.0
	갤럭시 S4 : 5.0", 1080px (360px) x3.0
	갤럭시 노트 : 5.3", 800px (400px) x2.0
	갤럭시 노트 2 : 5.5", 720px (360px) x2.0
	갤럭시 넥서스 : 4.6", 720px (360px) x2.0
	넥서스 4 : 4.7", 768px (384px) x2.0

참고 : http://screensiz.es/

대표적인 모델의 해상도를 보더라도 다양한 사이즈와 해상도가 존재한다. 이에 대한 적절한 대응 방법이 있어야한다.



- 터치 영역 고려

터치 디바이스의 유효 터치 영역은 테스트를 통해 적절한 터치 영역을 염두하여 설계한다.

애플의 휴먼디자인 가이드에 따르면 44픽셀을 최소 영역으로 안내하고 있다.

아이폰을 기준으로 6.87mm 정도, 아이패드는 8.42mm 의 크기를 가진다. 그 외 운영체제에서도 비슷한 가이드를 제공하리라 예상한다.

참고 : http://blog.daum.net/miriya/15601185



- 마우스 오버

아직까지 모바일 웹은 마우스오버 특성을 지원하지 않는다. 인터페이스/인터렉션 설계시 반드시 고려해야 한다.

최근 갤럭시 S4 에서 비슷한 기능을 구현하고 있는 것으로 알고 있으나 특정 모델에 종속적이며 표준 기능이 아니다. 추후 표준 기능이 될 수 있지만 아직은 시기상조인 상태.



- 뷰포트 제한

뷰포트 메타태그를 통해 확대 가능 여부와 그 수치를 조절할 수 있다.

메타태그 : HTML 문서 자체를 설명하는 태그. empty 태그로 열고 닫는 역할을 하지 않는다. 따라서 `</meta>` 이런식으로 닫지 않는다. `<head>~</head>` 사이에 위치해야한다.
    
참고 : http://support.google.com/webmasters/bin/answer.py?hl=ko&answer=79812

뷰포트 메타태그 : 모바일 사파리에서 처음으로 추가하여 사용하기 시작했으나 대부분의 모바일 브라우저에서 채택하여 사용하고 있는 속성으로 사실상 표준이 되어버린 기능이다.
    
참고 : http://m.mkexdev.net/34


코드샘플 : 뷰포트의 폭을 디바이스 Width 로 지정한다는 의미
 
    <meta name="viewport" content="width=device-width" />


최초 폭 지정, 폭, 높이 지정, 최대 확대 제한, 최소 축소 제한, 사용자 확대/축소 제한이 가능하다.


국내 포털의 뷰포트를 살펴보자.

-네이버 

    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">

-다음

    <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width">

-네이트

    <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">

참고로 최근 다음쪽의 모바일 대응이 가장 나아보인다. 세 업체 중 네이버가 가장 못난 모바일 화면 구성을 보여준다.



- 스크롤 방향 제한 

당연하게 일관성 있는 스크롤을 제공해야 한다. 무조건 세로 스크롤이 아니라 사용자 경험(UX)을 깨뜨리지 않는 인터페이스를 제공해야한다.



- 고밀도 디스플레이

최근 모바일 단말기의 성능향상에 따라 고밀도/레티나 디스플레이가 대세가 되어가고 있다. 최근 애플은 레티나 디스플레이를 탑재한 맥북을 출시하고 있기도 하다. 

레티나 디스플레이 또는 그에 동등한 기기로 웹페이지의 이미지를 볼 때 뿌옇게 보인다면 바로 고해상도 이미지 대응이 되지 않아서 그런 것이다.

이미 앞서가는 테크기업들을 통해 웹사이트가 고해상도에 대응하기 위한 방법 역시 개발/제안되고 있다. 

이에 대응하는 방법 중 가장 유력하게 추천되는 것이 CSS3 의 미디어쿼리를 사용하는 것이다.

참고 : http://uxd.so/h/retina-web-raster/

    body:before {content: 'standards display'}
    /* 고 해상도 디스플레이 감지 */
    @media only screen and (min-device-pixel-ratio: 1.5),
    only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min-moz-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 1.5) {
      body:before {
        content: 'retina display';
      }
    }
    
실제 샘플 : 화면의 픽셀 비율이 1.5 배 이상일 경우를 처리하기 위한 CSS 코드이다.

    <div class="image-container"></div>
    
    .image-container {
      width: 204px;
      height: 209px;
      background: url('일반이미지.png') no-repeat;
      background-size: contain;
    }
    /* 고 해상도 디스플레이 감지 */
    @media only screen and (min-device-pixel-ratio: 1.5),
      only screen and (-webkit-min-device-pixel-ratio: 1.5),
      only screen and (min--moz-device-pixel-ratio: 1.5),
      only screen and (-o-min-device-pixel-ratio: 1.5){
      .image-container {
        background-image: url('고해상도이미지.png');  
      }
    }

아쉽게도 배경으로 사용하는 이미지를 전경에 사용하는 방법으로 정상적인 절차가 아님에 주의해야 한다.

최신 브라우저 대상으로 CSS3 image-set() 속성과 HTML5 의 srcset 속성을 활용할 수도 있다. 이 내용과 관련하여 테스트 시간이 필요하여 논의하지 않겠음.

픽셀 비율은 위에서 이야기한 가변폭 자료 중 아래의 내용 가장 마지막 항목이 이에 해당한다. 

> 아이폰 4(4S) : 3.5", 640px (320px) **x2.0**


또한 디바이스의 종류에 따라 자체적으로 물리적 픽셀과 논리적 픽셀을 대응하고 있을지라도 상대적 크기을 표현하는 속성을 사용하는 것이 유지보수에 유리하다.

예 : 폰트 크기 지정시 px/pt 보다 em 등을 위주로 사용한다.



- 트래픽

모바일 네트워크 환경이라도 보통 사용자의 인내심을 기준으로 페이지 로딩이 3초 이상 걸리면 안된다.

그에 맞는 UI 설계가 필요하다. 즉, 너무 많은 기능과 레이아웃을 생성하지 말라는 것이다. 사용자에게 꼭 필요한 정보와 기능을 제공하는 것에 초점을 맞추자.

추가로 HTML5 캐쉬 기능을 적극 사용해보자.

참고 : http://blog.saltfactory.net/202



- 최신 웹 기술 지원

최신 브라우저와 마찬가지로 HTML5, CSS3 등이 지원된다. 하지만 컴퓨팅 파워가 약한 관계로 적절한 클라이언트 프로세싱(자바스크립트 최소화)을 고려한다.

애니메이션은 가능하면 CSS 를 사용한 애니메이션을 제공한다. 자바스크립트 애니메이션 보다 빠른 속도와 반응성을 가진다.

참고 : http://rayuela.kr/htmlcss/post947/



- 클라이언트 프로세싱

디바이스 API, 터치 액션, 드래그&드롭, 싱글페이지 웹 애플리케이션 등은 더 이상 웹사이트가 서버 프로그램으로 해결되지 못한다는 것을 알려준다.

이를 구현하기 위해서는 고급 자바스크립트 프로그래밍이 전제 되어야 한다.




----------


## 네이티브 앱/ 하이브리드 앱/ 모바일 웹


- 구분

네이티브 코드로 컴파일 되어 단말기에서 실행되는 것을 앱

단말기의 브라우저 만으로 접속하는 것을 웹

네이티브 코드로 컴파일 되어 실행되다 단말기의 브라우저 `모듈` 을 통해 접속하는 것을 하이브리드 앱 이라고 구분한다.


현 시점 웹과 앱의 경계를 명확히 나누는 것이 애매해진 상황이다. 이유는 기술 혼용이 심화되었기 때문이다.

구조 : 디바이스 API 래퍼를 활용하는 웹을 하이브리드 앱/웹 이라 할 수 있는데

네이티브 앱도 웹 뷰를 사용하고 웹 페이지도 디바이스 API 를 자유롭게 사용할 수 있는 수준이 되었기 때문이다.


- 장/단점

현 시점 모바일 대응하여 준비하고 시행하는 작업들을 볼 때 장단점이 명확하게 드러나서 무언가를 결정하는 시대는 아니다.

제공하는 콘텐츠와 사용자 요구 수준에 따라 구분되고 있는 것이 많다.

순전히 결정권자의 결정에 대한 문제 : 요구사항의 문제이지 기술 해결의 문제 때문에 해당 방법을 선택하는 것은 아니다.

기술 책임자 선에서 결정하여 처리하자.



**CE 기술에 필요한 것은 무엇인가요?**





----------


### 구현 방법

- 혼용 설계

리스판시브 웹 디자인

http://www.slideshare.net/YoungAhKim/ss-11348360

에이전트 구분, 미디어쿼리 사용, 클라이언트 스크립트 구현

미디어쿼리를 사용하여 배경 이미지를 구성할 경우 조건에 해당되지 않는 이미지들은 로딩되지 않는다. 

간편하게 반응형 웹디자인을 하기 위해 부트스트랩과 같은 CSS 프레임워크를 사용한다.

http://twitter.github.io/bootstrap/scaffolding.html#responsive

설계시 화면 사이즈에 따른 레이아웃이 필요하니 이에 맞는 디자인을 준비해야 한다.

문제점

반응형 웹디자인의 어려운 점은 해당 레이아웃이 너무 가변적이고 그에 맞는 디자인을 꾸미는 과정이 많은 시간이 걸리고 퍼블리쉬 하는 과정에서 추가로 경험이 있는 퍼블리셔가 필요하다는 점이다. 

추가로 이미지 크기가 가변적으로 변하는 관계로 픽셀에 정확하게 맞아 떨어지는 이미지 구현이 불가능 하다는 점이다. 특히 고밀도 디스플레이에 대응하기 위한 별도의 작업이 필요하며 이 과정이 과도기 시점에 있다는 것이 현재 반응형 웹을 구현하기 어려운 점에 속한다.

반응형 웹 디자인 샘플 코드

	샘플 코드 : HTML, CSS 샘플

	@media (max-width:499px) { ... CSS for Phone ... }  /* 이 코드는 499px 이하의 해상도에서 해석 됩니다 */
    @media (min-width:500px) { ... CSS for Tablet ... } /* 이 코드는 500px 이상의 해상도에서 해석 됩니다 */
    
위 케이스의 경우 미디어쿼리를 해석하지 못하는 브라우저를 만났을 경우 문제가 발생한다. 따라서 기본으로 해석할 CSS 를 정해야 한다.

폰에 해당되는 CSS 를 기준으로 작성할 경우의 샘플 코드
 
	{ ... CSS for All (Phone) ... }  /* 이 코드는 모른 해상도에서 해석 됩니다 */
    @media (min-width:500px) { ... CSS for Tablet ... } /* 이 코드는 500px 이상의 해상도에서 해석 됩니다 */

태블릿을 기준으로 작성할 경우의 샘플 코드

	{ ... CSS for All (Tablet) ... } /* 이 코드는 모든 해상도에서 해석 됩니다 */
    @media (max-width:499px) { ... CSS for Phone ... }  /* 이 코드는 499px 이하의 해상도에서 해석 됩니다 */
    
데스크탑에서도 모바일 사이트를 접근하는 경우가 발생한다. 광고나 트래픽의 문제로 일부러 m.site.com 을 접근해 본 적이 있을 것이다. 이런 경우 IE 9 미만의 경우 미디어쿼리를 해석하지 못한다. IE Hack 스크립트를 활용하도록 한다.

	<!--[if lt IE 9]>
	<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
	<![endif]-->
    
위 스크립트를 추가하여 미디어쿼리를 해석할 수 있도록 도와준다.

CSS 파일을 여러개로 분리하여 작업하는 경우는 다음과 같은 코드를 사용한다.

	<link rel="stylesheet" href="phone-screen.css"  type="text/css" media="only screen and (max-device-width: 499px)" />
    <link rel="stylesheet" href="tablet-screen.css"  type="text/css" media="only screen and (min-device-width: 500px)" />

참고 : http://www.onextrapixel.com/2011/09/12/create-a-responsive-web-design-template/

가로/세로 모드 관련

모바일 웹에서 단말기를 회전시켰을 경우 브라우저가 함께 회전하여 레이아웃을 깨뜨리는 경우가 있다.

자바스크립트를 통해 해당 이벤트를 차단하는 기능이 제공되나 기기별 차이가 존재한다고 한다. 즉, 되는 경우도 있고 안되는 경우도 있다는 것이다. 가능하면 가로/세로 모드에 해당하는 반응형 레이아웃을 구성하여 어떤 경우라도 적절히 대응할 수 있도록 처리하는 것이 좋다.

참고 : http://htglss.tistory.com/122, http://stackoverflow.com/questions/5298467/prevent-orientation-change-in-ios-safari


- 분리 설계

서브도메인, 모바일 전용 라우팅

http://m.homepage.com/

또는 

http://homepage.com/m/

이런 식으로 구분한다.

두 사이트 사이로 이동할 수 있는 방법을 제공하여 사용자가 즉시 해당 페이지로 이동할 수 있도록 준비한다.

모바일 사이트는 모바일 전용 콘텐츠를 사용하고 데스크탑 사이트는 데스크탑 전용 콘텐츠를 사용하도록 하는 것이다. 물론 서버에서 적절히 데이터를 추출하여 사용하여 중복되는 데이터 처리를 방지하도록 해야한다.

모바일 사이트에 사용할 데이터와 데스크탑에 사용할 데이터를 구분하는 것이 불필요한 경우라면 서버에서 제공되는 데이터를 어떻게 보여줄 것인지만 결정하면된다. 그리고 모바일 페이지에 적절한 이미지와 레이아웃을 구성하여 처리한다.


- 가이드

**현업에 맞는 제안**

별도 데스크탑 사이트가 서비스 되고 있는 상황에서 추가로 모바일 사이트 대응이 필요한 관계로 별도의 도메인을 구성 또는 별도의 라우팅을 통해 모바일 전용 페이지를 서비스 하는 방법을 추천한다.

모바일 페이지 구성 가이드

1. 폰과 태블릿에 대응할 수 있는 반응형 웹 디자인
2. 페이지 출력 전 서버에서 UA 에 따라 데스크탑 / 모바일 사이트로 이동
3. 페이지 로딩 후 화면 사이즈에 따라 데스크탑으로 이동 할 수 있는 링크 제공

**방문자 흐름 요약**

사이트 주소 : site.com, site.com/m 으로 구성되어 있다고 가정한다.

1. 사용자 접속 : 모바일에서 site.com 에 접속한다.
2. 서버에서 UserAgent 를 확인하여 모바일 접속임을 확인한다.
3. site.com/m 의 인덱스 페이지로 이동(redirect) 한다.
4. 페이지 로딩을 마친 후 브라우저의 크기를 체크한다.
5. 브라우저 가로 폭에 따라 모바일이 아닐 경우 이동 할 수 있도록 안내한다.

브라우저 UserAgent 에 대하여

브라우저마다 고유한 정보를 가지고 있으나 절대적이 아니다.

참고 : http://ohgyun.com/292, http://www.javaservice.net/~java/bbs/read.cgi?m=devtip&b=servlet&c=r_p&n=1177641347, http://www.egovframe.org/wiki/doku.php?id=egovframework:mcom:%EB%AA%A8%EB%B0%94%EC%9D%BC%EA%B8%B0%EA%B8%B0%EC%8B%9D%EB%B3%84

기타 유용한 팁

뷰포트 

	width : 넓이 - device-width | N px (200~10000 px, default 980 px)
	height : 높이 - device-height | N px (223~10000 px)
	initial-scale : 초기 확대/축소 배율
	minimum-scale : 최소 축소 배율 - N (0~10, default 0.25)
	maximum-scale : 최대 확대 배율 - N (0~10, default 1.6)
	user-scalable : 확대/축소 가능 여부 - yes | no (default yes)

자동 전화 연결 제한

	<meta name="format-detection" content="telephone=no" />
    
바로가기 아이콘 

	<link rel="apple-touch-icon" href="../images/icon.png" />
	<link rel="apple-touch-icon-precomposed" href="../images/icon.png" />

apple-touch-icon.png / apple-touch-icon-precomposed.png 의 파일명으로 도메인의 최상위 경로에 올려두면 위의 link 태그를 적용하지 않아도 홈 화면에 추가시 아이콘이 적용됩니다.

기기별 홈 아이콘 이미지 사이즈

	아이폰3G, 아이폰3GS [ 사이즈: 57*57 ]
	아이패드 [ 사이즈: 72*72 ]
	아이폰 4 [ 사이즈: 114*114 ]

안드로이드 기기는 웹 사이트의 기존 파비콘을 그대로 사용하는 경우가 많다.

	<link href="/favicon.ico" rel="shortcut icon">

참고 : http://harpy2.blogspot.kr/2012/12/blog-post_6.html



----------


### 업무 정의

1. PM

모바일 웹 프로젝트라고 별거 있나? 매니저는 다른 웹 프로젝트와 동일하게 자신의 일을 하면 된다.

2. 기획자

보통 사이트 구축시 기획자가 화면 설계까지 한다면 기획자는 그 전보다 머리가 더 복잡해질 것이다. 반응형 웹을 구상해야 하기 때문이다.

가변 폭에 대한 대응, 디바이스 별 대응을 위해 대 많은 상상이 필요하다. 하지만 동일한 콘텐츠를 어떻게 구축하고 배열할지 결정하는 것이기에 크게 고민할 것은 없다. 단지 더 많은 시간과 많은 작업이 필요할 뿐이다.

3. 디자이너

기획자가 구현한 가이드를 통일성 있게 디자인 하면 된다. 기획자와 긴밀한 의사소통을 통해 구현 의도를 충분히 파악하고 이해하여 멋진 모바일 페이지를 디자인하자.

4. 퍼블리셔

개인적으로 현대 웹 프로젝트의 퀄리티는 퍼블리셔의 손에 달렸다고 본다. 구조적으로 구성된 시맨틱 HTML, 최적화된 CSS, 최신 CSS 3 스킬들이 필요하다. 

5. 개발자 / 프론트엔드 개발자

프로그래머의 영역은 이제 서버 뿐 아니라 웹 브라우저도 신경써야 한다. 이에 따라 프론트엔드 개발자라 불리는 직군이 생겨나고 있다. 세상은 웹브라우저로 연결되어 있고 그 기반은 웹 브라우저가 되었다. 그 동안 하드웨어에 따라 다양한 언어로 소프트웨어를 개발했지만 이제 브라우저 위에서 돌아가는 소프트웨어를 위해 자바스크립트를 사용해야 한다. 자바스크립트는 새로운 시대의 어셈블리 언어가 되었다.


** 공동적인 사항 **

- 클라이언트 한계

제한된 폰트, 팝업창, 중복 테이블 레이아웃, 프레임, 이미지맵

- UI 설계와 구현

설명이 필요없을 정도의 직관적인 인터페이스, 모바일에 적합한 인터페이스, 

- UX 설계와 구현

사용자의 액션에 따른 적절한 피드백, 사이트의 기능(메뉴)들에 대한 우선 순위 고려, 예외 상황 대처 설계

- 서버 API

웹 앱을 구현하고 Restful 서비스 서버 지원이 최신 트랜드

자바스크립트, 웹 앱에 대해서는 별도의 시간이 필요



### 모바일 관련 오픈소스 소개


- BoilerPlate 

http://html5boilerplate.com/mobile/

- Swipe

http://www.idangero.us/sliders/swiper/

- Gallery

http://www.photoswipe.com/

- Theme

http://justspamjustin.github.io/junior/

- Side Menu

http://jakiestfu.github.io/Snap.js/demo/apps/default.html

- Calendar

http://amsul.ca/pickadate.js/

- Parallax scroll

http://prinzhorn.github.io/skrollr/

- Map 

http://leafletjs.com/

- img src polyfill for Hires

https://github.com/borismus/srcset-polyfill/ 



아래 건 모바일 뿐 아니라 서버 프로그래밍

- URL 단축
- SNS 연동
