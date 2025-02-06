# 필리(Feely)
당신의 하루 동안 발생한 감정을 기록하는 다이어리 앱
매일 변하는 감정을 기록함으로써, 캘린더를 차곡차곡 채워보세요!

![unnamed](https://github.com/ParkJongJoon7128/mood-diary/assets/51289286/4f29602a-94b0-44c9-bce2-3d60042b9390)

<br/>

# 스토어
- Android: https://play.google.com/store/apps/details?id=com.MoodDiaryApp&hl=ko
- iOS: https://apps.apple.com/kr/app/%ED%95%84%EB%A6%AC/id6478108331

<br/>

# 기술 스택
- React Native
- TypeScript
- Recoil
- Tailwind CSS
- Google Mobile Admob

<br/>

# 문제 발생 및 해결 과정
- Recoil와 AsyncStorage 연동 개선
    - **문제**: Recoil와 AsyncStorage 연동하면서 빌드는 정상적으로 되지만 렌더링이 안되는 이슈 발생
    - **원인**
        - Promise 방식인 `setSelf()` 함수는 Recoil 내부에서 비동기 처리가 끝날 때까지 상태가 업데이트되지 않음
        - 그동안 UI는 `undefined` 상태일 가능성이 높아, React Native에서 렌더링이 제대로 되지 않을 수 있음
    - **해결**
        - `loadPersisted()` 함수로 비동기 로직을 분리
        - `trigger === 'get'` 조건식을 사용하여 초기화 시점에서만 데이터를 불러오도록 최적
        - **관련 블로그**: https://velog.io/@whdwnsdk8111/React-Native-recoil%EA%B3%BC-AsyncStorage-%EA%B2%B0%ED%95%A9%ED%95%98%EC%97%AC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

<br/>

# 스크린샷

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/b9201a69-ab2b-412a-b45b-fe7e7ccaf920" width="200"/></td>
    <td><img src="https://github.com/user-attachments/assets/43dcdf0f-d794-4785-a050-5059f74c9adb" width="200"/></td>
    <td><img src="https://github.com/user-attachments/assets/47d56ad3-25d0-4418-af5d-1fba5166040f" width="200"/></td>
    <td><img src="https://github.com/user-attachments/assets/afa366d9-e3de-43f0-bbe7-412329886a4e" width="200"/></td>
  </tr>
  <tr>
    <td align="center">캘린더 스크린</td>
    <td align="center">감정선택 스크린</td>
    <td align="center">감정입력 스크린</td>
    <td align="center">감정수정 스크린</td>
  </tr>
</table>

<br/>

# 성과
- 앱 서비스 MVP 개발
- 앱(Android, iOS) 출시 및 20명 유저 확보
