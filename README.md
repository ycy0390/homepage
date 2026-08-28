# 한국도키멕 홈페이지 프로토타입

한국도키멕 홈페이지 개편을 검토하기 위한 **Next.js + JavaScript + Tailwind CSS** 프로젝트입니다. 3가지 React 시안(v1, v2, v3)과 각 시안의 순수 HTML 버전을 함께 제공합니다.

## 사용 기술

- Next.js 16 App Router
- React 19
- JavaScript (ES Modules)
- Tailwind CSS 4

React 화면의 스타일은 각 `.js` 파일의 Tailwind `className`으로 작성되어 있습니다. [`src/app/tailwind.css`](./src/app/tailwind.css)는 Tailwind를 불러오는 `@import "tailwindcss";` 한 줄만 포함합니다.

> 순수 HTML 문서는 `public/html`, 전용 CSS는 `public/static/css`, JavaScript는 `public/static/js`로 분리되어 있습니다. 이 CSS와 JS는 Next.js/Tailwind 화면에는 적용되지 않습니다.

## 빠른 실행

### 1. 준비물

- Node.js 22.13.0 이상
- npm

설치 여부는 PowerShell에서 다음과 같이 확인합니다.

```powershell
node --version
npm --version
```

### 2. 프로젝트 설치

이 README가 있는 폴더에서 실행합니다.

```powershell
npm install
```

### 3. 개발 서버 실행

```powershell
npm run dev
```

브라우저에서 다음 주소를 엽니다.

```text
http://localhost:3000
```

터미널을 닫거나 `Ctrl+C`를 누르면 서버가 종료됩니다. 서버를 계속 사용할 때는 해당 터미널을 그대로 열어 두십시오.

3000번 포트를 다른 프로그램이 사용 중이면 다른 포트로 실행할 수 있습니다.

```powershell
npm run dev -- --port 3001
```

이때 주소는 `http://localhost:3001`입니다.

## Next.js 시안별 주소

### v1 — 제품 목록과 공통 상세 시안

| 화면 | 주소 |
|---|---|
| 제품 목록 | `http://localhost:3000/v1` |
| P**V 제품 상세 | `http://localhost:3000/v1/products/hydraulics/pumps/piston-pumps/pv-series` |
| PH 제품 상세 | `http://localhost:3000/v1/products/hydraulics/pumps/piston-pumps/ph-series` |
| 베인 펌프 제품 상세 예시 | `http://localhost:3000/v1/products/hydraulics/pumps/vane-pumps/sqp-sqps-single` |

### v2 — 산업용 제품 카탈로그 시안

| 화면 | 주소 |
|---|---|
| 홈 | `http://localhost:3000/v2` |
| 제품 목록 | `http://localhost:3000/v2/products` |
| P**V 제품 상세 | `http://localhost:3000/v2/products/pv-series` |
| PH 제품 상세 | `http://localhost:3000/v2/products/ph-series` |

### v3 — 기존 한국도키멕 홈페이지 기반 시안

| 화면 | 주소 |
|---|---|
| 홈 | `http://localhost:3000/v3` |
| 사업&제품정보 목록 | `http://localhost:3000/v3/business-products` |
| P**V 제품 상세 | `http://localhost:3000/v3/business-products/pv-series` |
| PH 제품 상세 | `http://localhost:3000/v3/business-products/ph-series` |
| 고객지원 | `http://localhost:3000/v3/customer-support` |
| 인재채용 | `http://localhost:3000/v3/recruit` |
| 회사소개 | `http://localhost:3000/v3/company` |

Next.js 버전 선택 화면은 `http://localhost:3000/`입니다. 기존 `/products`, `/products/[제품-slug]`, `/ph-series` 및 기존 v1의 단축 상세 주소는 각각 새 v1 주소로 자동 이동합니다.

## 순수 HTML 버전 실행

HTML 버전은 Next.js를 사용하지 않는 별도 결과물입니다. 두 가지 방법으로 볼 수 있습니다.

### 방법 A — Next.js 개발 서버에서 보기

`npm run dev`가 실행 중이면 다음 주소를 사용합니다.

| 버전 | 시작 주소 |
|---|---|
| HTML v1 | `http://localhost:3000/html/v1/index.html` |
| HTML v2 | `http://localhost:3000/html/v2/index.html` |
| HTML v3 | `http://localhost:3000/html/v3/index.html` |

### 방법 B — HTML 파일만 별도 서버로 보기

프로젝트 폴더에서 다음 명령을 실행합니다.

```powershell
npx serve public -l 8080
```

그다음 아래 주소로 접속합니다.

```text
http://localhost:8080/html/v1/index.html
http://localhost:8080/html/v2/index.html
http://localhost:8080/html/v3/index.html
```

HTML 파일은 이미지·CSS·JavaScript·PDF를 상대경로로 연결하므로 탐색기에서 `public/html/v1/index.html`, `v2/index.html`, `v3/index.html`을 더블클릭해도 표시됩니다. 다만 브라우저의 보안 정책에 따라 PDF iframe이 제한될 수 있으며, 그 경우 PDF 다운로드 링크를 사용하거나 위와 같이 로컬 서버로 여십시오.

### 방법 C - HHTML 파일 직접 실행

프로젝트 폴더 기준 public/

## 배포용 빌드와 실행

개발 서버가 아니라 실제 배포와 가까운 상태로 확인하려면 다음 순서로 실행합니다.

```powershell
npm run build
npm start
```

다른 포트로 프로덕션 서버를 열려면 다음 명령을 사용합니다.

```powershell
npm start -- --port 3001
```

## 카탈로그 PDF 관리

제품용 PDF는 `public/catalogs`에 있습니다.

| 파일 | 용도 |
|---|---|
| `pv-series-piston-pumps.pdf` | P**V 시리즈 1~20페이지 |
| `ph-series-piston-pumps.pdf` | PH 시리즈 21페이지 이후를 분리한 문서 |
| `variable-displacement-piston-pumps.pdf` | 분리 전 원본 보관본 |

`public` 폴더의 파일은 웹 주소에서 `public`을 제외하고 접근합니다. 예를 들어:

```text
public/catalogs/pv-series-piston-pumps.pdf
→ http://localhost:3000/catalogs/pv-series-piston-pumps.pdf
```

PDF 파일을 같은 이름으로 교체하면 기존 링크를 수정하지 않아도 새 카탈로그가 표시됩니다. 파일명을 변경하면 `src/app` 아래 제품 데이터의 `catalog` 값과 정적 HTML의 링크도 함께 수정해야 합니다.

## 주요 폴더 구조

```text
piston-pump-demo/
├─ src/
│  ├─ app/                     # Next.js 페이지와 공통 UI
│  │  ├─ page.js               # 흰 배경의 V1 · V2 · V3 선택 화면
│  │  ├─ v1/
│  │  │  ├─ page.js           # /v1 제품소개 목록 진입점
│  │  │  ├─ components/       # 제품 목록·공통 제품 상세 UI
│  │  │  └─ products/[system]/[group]/[category]/[slug]/page.js
│  │  │                         # 모든 v1 제품 상세의 단일 동적 진입점
│     ├─ v2/                   # v2 홈, 목록, 상세
│     ├─ v3/                   # v3 홈, 제품, 고객지원, 채용, 회사소개
│     ├─ layout.js             # 공통 HTML 구조 및 body Tailwind 스타일
│     └─ tailwind.css          # Tailwind 불러오기 한 줄
│  └─ data/products/           # 제품군별 데이터와 전체 제품 색인
│     ├─ piston-series.js      # P**V · PH 데이터
│     ├─ catalog-products.js   # 카탈로그 기반 제품 데이터
│     └─ index.js              # URL 생성·제품 조회의 단일 진입점
├─ public/
│  ├─ catalogs/                # PDF 카탈로그
│  ├─ html/                    # 순수 HTML 문서
│  │  ├─ v1/
│  │  ├─ v2/
│  │  └─ v3/
│  ├─ static/
│  │  ├─ css/                  # HTML v1·v2·v3 전용 CSS
│  │  └─ js/                   # HTML v1·v2·v3 전용 JavaScript
│  └─ ...                      # 로고와 제품/회사 이미지
├─ next.config.js
├─ postcss.config.mjs
└─ package.json
```

## 화면 수정 방법

- 루트 버전 선택 화면: `src/app/page.js`
- v1 제품소개 목록 UI: `src/app/v1/components/ProductListPage.js`
- v1 공통 제품 상세 레이아웃: `src/app/v1/components/ProductPage.js`
- P**V·PH 제품 데이터: `src/data/products/piston-series.js`
- 카탈로그 제품 데이터: `src/data/products/catalog-products.js`
- 모든 v1 제품 URL·검색: `src/data/products/index.js`
- 모든 v1 제품 상세의 공통 진입점: `src/app/v1/products/[system]/[group]/[category]/[slug]/page.js`
- v2 공통 헤더·카드·상세: `src/app/v2/components.js`
- v3 공통 헤더·하단: `src/app/v3/components.js`
- v3 제품 데이터: `src/app/v3/business-products/data.js`
- v3 제품 상세 레이아웃: `src/app/v3/business-products/ProductDetail.js`
- 기술 문의 폼: `src/app/v1/components/InquiryForm.js`

Tailwind 스타일은 JSX 요소의 `className`에서 수정합니다.

```tsx
<a className="bg-[#075a9a] px-5 py-3 font-bold text-white hover:bg-[#064d83]">
  PDF 다운로드
</a>
```

화면 폭에 따른 스타일은 `max-[760px]:` 접두사를 사용합니다.

```tsx
<div className="grid grid-cols-2 max-[760px]:grid-cols-1">
```

## 기술 문의 기능

현재 별도 서버나 데이터베이스가 없어 문의 폼은 입력 내용을 이메일 본문으로 만들어 사용자의 기본 이메일 프로그램을 엽니다. 문의가 자동 접수되거나 서버에 저장되는 방식은 아닙니다.

실제 홈페이지에서 자동 접수를 구현하려면 이후 아래 중 하나가 필요합니다.

- 회사 메일 발송 API
- 폼 처리 서비스
- 별도 백엔드와 데이터베이스

## 자주 발생하는 문제

### `localhost:3000`에 접속되지 않음

1. `npm run dev`를 실행한 터미널이 열려 있는지 확인합니다.
2. 터미널에 오류가 없는지 확인합니다.
3. 3000번이 사용 중이면 `npm run dev -- --port 3001`로 실행합니다.
4. 휴대폰에서 접속하려면 PC와 휴대폰이 같은 내부 네트워크에 있어야 하며 Windows 방화벽 허용도 필요합니다. 회사 유선망과 Wi-Fi가 서로 분리된 환경에서는 같은 사무실이어도 접속되지 않을 수 있습니다.

### 수정 후 스타일이 바로 반영되지 않음

개발 서버가 켜진 상태에서 저장하면 보통 자동 반영됩니다. 반영되지 않으면 브라우저에서 강력 새로고침(`Ctrl+F5`)을 실행하십시오.

## 확인된 빌드 상태

아래 명령으로 Next.js 프로덕션 빌드와 모든 App Router 경로의 정적 생성을 확인했습니다.

```powershell
npm run build
```
