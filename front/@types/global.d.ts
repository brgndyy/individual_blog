declare module "domain" {}

// 타입스크립트 내에서 global.d.ts 부터 읽어버럼

// 인터페이스는 오버라이딩 된다

class HttpClient {
  private baseUrl: string;
}

export const request = async (
  url: string,
  mehtod: typeof HTTP_METHp,
  headers: OptionsInit
) => {};
// fetch 할때 순서지키기 싫으면 객체형식으로 만들어서 주입시켜주기

// 이런식으로 매개변수가 많이 들어가ㅡㄴ 경우에는 함수 자체를 타입으로 정의해주어서 사용하면 더 코드가 깔끔해진다
// type PutArticleFunction =  (params : {
//     slug : string;
//     payload : PutArtcilePayload,
//     headers ?: HeadersInit;
//     options ?: RequeastInit
// }) =>Promise<ArticleResponse> {

// }

// AbortSignal 알아보기

// async await 사용할때 무조건 try catch 로 감싸주기
