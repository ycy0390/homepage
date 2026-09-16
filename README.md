# 한국도키멕 제품별 상세페이지

V1 디자인형으로 확정된 디자인을 사용하는 제품 상세페이지와 목록을 관리하는 정적 HTML 프로젝트입니다.
현재 제품은 P**V와 PH 두 개이며, 제품이 추가되면 목록에 카드를 추가합니다.

## 현재 파일 구조

```text
homepage-main/
├─ public/                              GitHub Pages 배포 대상
│  ├─ index.html                        제품별 상세페이지 리스트
│  ├─ pv-v1.html                        P**V 제품 상세페이지
│  ├─ ph.html                           PH 제품 상세페이지
│  ├─ ph-pump-detail/
│  │  ├─ assets/                        PH 제품 사진
│  │  └─ catalogs/                      PH 원본 PDF와 16페이지 미리보기
│  └─ pv-pump-detail/
│     ├─ v1-design.css                  P**V·PH 공통 상세페이지 디자인
│     ├─ navigation.css                 공통 제품 목록 보기 버튼
│     ├─ assets/                        로고와 제품 사진
│     └─ catalogs/
│        ├─ pv-series-piston-pumps.pdf   원본 카탈로그
│        └─ pv-preview/                 22페이지 미리보기 이미지
├─ scripts/
│  └─ render-pv-catalog-preview.py       PDF 미리보기 갱신 도구
├─ archive/                             기존 시안·백업 보관함, 배포 제외
│  ├─ legacy-homepage/                  이전 Node.js/HTML V1~V3와 기본형
│  ├─ backups/                          이전에 요청한 백업
│  ├─ manifest-sha256.json              보관 파일 검증 기록
│  └─ README.md                         이전 시안 실행·복원 안내
└─ .github/workflows/deploy-pages.yml   GitHub Pages 배포 설정
```

`pv-v1.html`과 `v1-design.css`라는 파일명은 기존 상세페이지 URL과 연결을 유지하기 위해 그대로 사용합니다. PH도 동일한 CSS와 로고를 사용하며, 제품 이미지와 카탈로그만 `ph-pump-detail/`에 분리했습니다. 목록에는 `제품 01 / P**V`, `제품 02 / PH` 카드를 표시합니다.

## 로컬 확인

이 README가 있는 프로젝트 루트에서 실행합니다.

```powershell
python -m http.server 4180 --bind 127.0.0.1 --directory public
```

- 제품 목록: `http://127.0.0.1:4180/`
- P**V 상세페이지: `http://127.0.0.1:4180/pv-v1.html`
- PH 상세페이지: `http://127.0.0.1:4180/ph.html`

현재 페이지는 HTML/CSS와 이미지로 구성되어 Node.js 설치나 빌드가 필요하지 않습니다.

## 화면과 카탈로그 수정

- 목록의 문구와 제품 카드: `public/index.html`
- 제품 설명·사양표·카탈로그 버튼: `public/pv-v1.html`, `public/ph.html`
- 상세페이지 디자인과 모바일 레이아웃: `public/pv-pump-detail/v1-design.css`
- 헤더의 `← 제품 목록 보기` 버튼: `public/pv-pump-detail/navigation.css`

카탈로그는 PC와 모바일에서 이미지 미리보기로 표시하고, ‘자료 바로보기’ 버튼으로 원본 PDF를 새 탭에 엽니다. 미리보기는 800px/1600px WebP를 화면에 맞춰 지연 로딩합니다.

PDF를 교체했다면 Pillow와 Poppler가 설치된 환경에서 다음 명령으로 이미지와 HTML 페이지 목록을 갱신합니다.

```powershell
python scripts/render-pv-catalog-preview.py
python scripts/render-pv-catalog-preview.py --product ph
```

첫 명령은 P**V, 두 번째 명령은 PH만 갱신합니다. 이 도구는 원본 PDF를 수정하지 않습니다. PH 제품 사진과 PDF는 아카이브 자료를 그대로 복사했으며, 기본 사양과 주의사항은 PH 카탈로그 A-21(파일 6페이지)에 맞춰 작성했습니다.

## 배포

GitHub Pages는 `.github/workflows/deploy-pages.yml`을 통해 `main` 브랜치의 **`public/`만** 배포합니다. 이 폴더나 워크플로 변경을 push하면 배포가 실행됩니다. Next.js 빌드는 실행하지 않습니다.

이미지·CSS·PDF와 페이지 링크는 모두 상대경로를 사용하므로 GitHub Pages의 프로젝트 경로에서도 연결됩니다. `archive/`와 `scripts/`는 배포되지 않습니다.

## 이전 시안과 백업

이전 Node.js 및 HTML V1~V3, 시안 01 기본형, 실행 설정, 이미지·PDF, 기존 문서와 백업을 `archive/`에 모았습니다. 파일 내용과 의존 경로를 보존했으며 자세한 위치와 실행 방법은 [보관함 안내](archive/README.md)를 참고하세요.
