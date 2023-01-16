# PP.GG

🔗 https://ppgg.vercel.app/

pp.gg는 LoL 전적검색 사이트 <a href="https://www.op.gg/" target="_blank">OP.GG</a>를 벤치마킹 하였으며,
친구들과 탁구 전적을 기록하기 위해 만든 사이트 입니다.

pp는 Ping Pong, gg는 Good Game이라는 의미를 가집니다.

### 📆 프로젝트 기간

<ul>
    <li>개발 기간 : 2022.12.10 ~ 2023.01.17</li>
    <li>유저 피드백 : 2023.12.13 ~ 진행중</li>
    <li>추가 업데이트 : 2023.01.17 ~ 진행중</li>
</ul>
  
### 📖 컨텐츠

<div style="margin-bottom:40px;">
    <h5>HOME</h5>
    <div style="display:flex; gap:16px;">
        <img src="/public/gif/home.gif" width=40% height=40%>
        <img src="/public/gif/theme.gif" width=40% height=40%>
    </div>
    <div style="margin-top:8px;">
        <ul>
            <li>메인 홈입니다.</li>
            <li>전 페이지 모두 다크모드, 라이트모드 테마 적용을 하였습니다.</li>
            <li>검색창을 통해 플레이어를 검색할 수 있습니다.</li>
            <li>API 호출 수를 줄이기 위해 <a href="https://www.npmjs.com/package/react-query" target="_blank">react-query</a>를 사용하였습니다.</li>
            <li>mongoDB shared cluster를 사용하고 있기 때문에 모바일 환경에서 첫 로딩 속도가 오래 걸릴 수 있습니다.</li>
        </ul>
    </div>
</div>

<div style="margin-bottom:40px;">
    <h5>LOGIN</h5>
    <div style="display:flex; gap:16px;">
        <img src="/public/gif/login.gif" width=40% height=40%>
    </div>
    <div style="margin-top:8px;">
        <ul>
            <li>로그인 페이지 입니다.</li>
        </ul>
    </div>
</div>

<div style="margin-bottom:40px;">
    <h5>PLAYERS</h5>
    <div style="display:flex; gap:16px;">
        <img src="/public/gif/players.gif" width=40% height=40%>
    </div>
    <div style="margin-top:8px;">
        <ul>
            <li>플레이어의 전적 페이지입니다.</li>
            <li><a href="https://www.npmjs.com/package/chart.js?activeTab=readme" target="_blank">chart.js</a>, <a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">react-chartjs-2</a> 라이브러리를 사용하여 차트를 구현하였습니다.</li>
            <li>승률, 승패 기록, mmr변동, 데미지 등등을 확인할 수 있습니다.</li>
        </ul>
    </div>
</div>

<div style="margin-bottom:40px;">
    <h5>RANKING & TIER</h5>
    <div style="display:flex; gap:16px;">
        <img src="/public/gif/rankingAndTier.gif" width=40% height=40%>
    </div>
    <div style="margin-top:8px;">
        <ul>
            <li>플레이어들의 랭킹과 티어표 페이지입니다.</li>
        </ul>
    </div>
</div>

<div style="margin-bottom:40px;">
    <h5>RECORD</h5>
    <div style="display:flex; gap:16px;">
        <img src="/public/gif/history.gif" width=40% height=40%>
    </div>
    <div style="margin-top:8px;">
        <ul>
            <li>전적을 기록할 수 있는 페이지입니다.</li>
            <li>점수 입력 후 기록을 저장할 수 있습니다.</li>
            <li>실수로 기록을 저장했을 시, 가장 최신 기록을 삭제할 수 있는 기능도 추가하였습니다.</li>
        </ul>
    </div>
</div>

<div style="margin-bottom:40px;">
    <h5>SIGNUP</h5>
    <div style="display:flex; gap:16px;">
        <img src="/public/gif/signup1.gif" width=30% height=30%>
        <img src="/public/gif/signup2.gif" width=30% height=30%>
        <img src="/public/gif/signup3.gif" width=30% height=30%>
    </div>
    <div style="margin-top:8px;">
        <ul>
            <li>회원가입 페이지입니다.</li>
            <li>약관 데이터를 db에 저장하여 받아오고 있습니다.</li>
            <li>이메일과 비밀번호에 간단한 정규식을 적용하였습니다.</li>
            <li><a href="https://www.npmjs.com/package/lol-champions" target="_blank">lol-champions</a>라는 라이브러리를 사용하여 롤 챔피언 리스트를 받아왔습니다.</li>
        </ul>
    </div>
</div>

<div style="margin-bottom:40px;">
    <h5>API Docs</h5>
    <div style="display:flex; gap:16px;">
        <img src="/public/gif/apiDocs.gif" width=40% height=40%>
    </div>
    <div style="margin-top:8px;">
        <ul>
            <li>API 문서 페이지입니다.</li>
            <li>서버에 영향을 줄 수있는 POST, DELETE API를 제외하고 자주 사용하는 API를 문서화 하였습니다.</li>
        </ul>
    </div>
</div>

### ⚙️ 서비스 아키텍쳐

 <img src="/public/images/architecture.png">

##### Next.js

<ul>
    <li>Next.js는 SSR, Static page generation, bundling, route pre-fetching 등등 여러가지 기능을 제공하는 웹 개발 프레임워크입니다.</li>
    <li>SSR을 통해 SEO 부분에서 이점을 가져갈 수 있으며, file system routing, hot reloading, image optimization와 같은 좋은 기능들이 많아 프레임워크를 도입하였습니다.</li>
    <li>또한 vercel로 무료 호스팅이 가능하며, main branch에 git push시 자동 배포가 가능합니다.</li>
</ul>

##### MongoDB

<ul>
    <li>서버 비용 ZERO를 위해 NoSQL 무료 DB서버를 알아봤습니다. firebase의 firestore와 비교해봤을 때 MongoDB가 성능상으로 약간 우위에 있었으며, 저에게 MongoDB가 좀 더 익숙했기 때문에 MongoDB shared cluster로 DB를 구성하였습니다.</li>
    <li>MongoDB와 node.js를 연결해주는 ODM(Object Document Mapping)인 <a href="https://www.npmjs.com/package/mongoose" target="_blank">mongoose</a> 라이브러리를 통해 DB를 조회하고, Next.js API routing을 통해 클라이언트에 데이터를 제공합니다.</li>
</ul>

##### React-Query

```js
// index.js
const userListQueryKey = "/api/v1/userList";
const historyQueryKey = "/api/v1/history";
const bannerQueryKey = "/api/v1/banner";

const userList = useQuery({
  placeholderData: [],
  queryKey: userListQueryKey,
  queryFn: () => AxiosUtils.get(userListQueryKey).then((res) => res.data),
}).data;

const history = useQuery({
  placeholderData: [],
  queryKey: historyQueryKey,
  queryFn: () => AxiosUtils.get(historyQueryKey).then((res) => res.data),
}).data;

const banner = useQuery({
  placeholderData: [],
  queryKey: bannerQueryKey,
  queryFn: () => AxiosUtils.get(bannerQueryKey).then((res) => res.data),
}).data;
```

<ul>
    <li>localhost에서 프로젝트 실행 시 홈에서 50ms ~ 100ms 내로 API 응답이 오지만, 웹 서버 배포 후 모바일 환경에서 접속 시 API 응답 시간이 최대 10초~15초 정도 걸립니다.</li>
    <li>따라서 페이지 이동마다 API 호출 시 웹 반응성이 늦어져 UX적으로 좋지 않다고 판단되었고, API 호출 수를 줄이기 위하여 <a href="https://www.npmjs.com/package/react-query" target="_blank">react-query</a>를 도입하여 API 캐싱 전략을 세웠습니다.</li>
</ul>

##### Recoil

<ul>
    <li><a href="https://www.npmjs.com/package/recoil" target="_blank">recoil</a>은 리액트 전역 상태관리 라이브러리입니다.</li>
    <li>비슷한 전역 상태관리 라이브러리인 redux와 비교해봤을때, 보일러플레이트 코드가 적고, 사용이 간편하며, 작은 프로젝트에 적합하다고 생각되서 전역 상태관리 라이브러리로 recoil을 도입하였습니다.</li>
    <li>components나 pages depth가 깊지 않아 member, signup, theme와 같은 state들만 전역으로 관리하고 있습니다.</li>
</ul>

##### Styling

<ul>
    <li>CSS-in-JS 방식을 선호하기 때문에 styled-components 방식으로 스타일링을 하였고 라이브러리는 <a href="https://emotion.sh/docs/introduction" target="_blank">emotion</a>을 사용하였습니다.</li>
    <li>css를 편리하게 사용할수 있게 해주는 scss문법으로 style code를 작성하였습니다.</li>
</ul>

### 📚 기술 스택

[![My Skills](https://skillicons.dev/icons?i=html,css,js,react,nextjs,emotion,sass,mongodb,vercel&perline=5)](https://skillicons.dev)
