const content = {
    title: "안녕하세요, 프로젝트 관리자입니다",
    body: `
    이 프로젝트에 기여해주시는 분들 정말 감사합니다. 코딩을 잘 못해도 쉽게 참여할 수 있을 오픈소스를 어떻게 만들지 고민했으니 여러모로 부족해도 잘 부탁드립니다.
    
    이 프로젝트에 참여하는 방법은 아래와 같습니다.
    1. data/ 디렉토리에 'template.js'을 복사하여 '자신의ID.js' 파일을 만든다.
    2. 1번에서 만든 '자신의ID.js'파일에 쓰고 싶은 글의 제목과 본문을 작성한다.
    3. data/index.js 에 
       - import 자신의ID from '자신의ID';
       - export { ..., 자신의ID, ... };
       을 추가한다.
    4. jintak0401/hanyang_open_source의 add-data branch에 PR(Pull Request)을 보낸다.
    5. 기다린다.
    
    만약 디자인을 잘 하시거나 css를 잘 다루시는 분이 계시다면 꾸미셔도 좋습니다.
    `
};

export default content;