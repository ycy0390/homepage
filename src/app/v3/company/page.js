import { V3Footer, V3Header } from '../components';

const visual = 'block w-full object-cover';
const copy = 'mx-auto w-[min(812px,calc(100%-60px))] py-[75px] break-keep text-[15px] leading-[2] text-[#676767] max-[760px]:w-[calc(100%-40px)] max-[760px]:py-12 max-[760px]:text-[13px] max-[760px]:leading-[1.9] [&>p]:mb-6 [&>p]:mt-0 [&>p:last-child]:mb-0';

export default function V3CompanyPage() {
  return <div className="min-h-screen bg-white font-[Arial,'Noto_Sans_KR',sans-serif] tracking-[-.035em] text-[#262d32]"><V3Header active="company" /><main className="bg-white">
    <img className={`${visual} h-[min(56.25vw,712px)] max-[760px]:h-auto`} src="/v3-company-01.png" alt="Creating the New world" />
    <img className={`${visual} h-[min(56.25vw,712px)] max-[760px]:h-auto`} src="/v3-company-02.png" alt="어디서 도키멕을 만나셨나요?" />
    <section className={copy}><p>한국도키멕주식회사는 유공압 밸브 수입 유통업체로 시작해서 그동안 수입품의 국산화를 통해서 수입상품을 기술수입 및 이전하여 국산화를 빠르게 진행하고 있는 회사입니다. 그리고 수입에서 수출로 전환하여 해외 시장을 공략하고 있으며 매출 증대를 꾀하고 있습니다.</p><p>유공압 관련 국내 시장 규모는 5,000억 정도의 시장으로 대부분을 해외 글로벌 기업들이 국내시장을 잠식하고 있으며 국내 국산품의 성장 가능성은 그만큼 무한하다고 할 수 있습니다.</p><p>그동안 고성능 기술의 어려움, 가공기술의 어려움 등으로 진행이 어려웠던 다양한 고기능 밸브들도 기술지원 아래 하나씩 국산화 해 나가고 있으며, 여러 국책과제와 민관 합동개발을 통한 국산화에 더욱 박차를 가하고 있습니다. 국산화율이 높아지는 것 만큼 수입대체 효과는 증대합니다.</p></section>
    <img className="mx-auto mb-[74px] block w-[min(812px,calc(100%-60px))] max-[760px]:mb-[47px] max-[760px]:w-[calc(100%-40px)]" src="/v3-company-banner-01.jpg" alt="한국도키멕" />
    <img className={visual} src="/v3-company-04.png" alt="한국도키멕 사업 영역" /><img className={visual} src="/v3-company-05.png" alt="한국도키멕 기술력" />
    <section className={copy}><p>아울러 다양한 연구과제 수행으로 사업화가 이루어지고 있는 인덱스팩, 로봇, 제어, 승강실린더, 제어밸브, 서보유니 실린더등 신사업 ITEM의 추가로 매출 증대를 기대하고 있습니다. 각각 ITEM 시장 규모 역시 제시된 바와 같이 무한한 M/V를 가지고 있는 사업영역이며 이 역시도 대부분 수입 대체 효과를 이룰 수 있는 산업의 핵심 소재 부품입니다.</p><p>향후 가까운 미래에 사업목표를 2,500억원의 매출을 기대할 수 있는 발전 가능성이 많은 신사업으로 영역을 확대하고 있습니다.</p></section>
    <img className={`${visual} mx-auto max-w-[1280px]`} src="/v3-company-06.png" alt="한국도키멕 미래" />
  </main><V3Footer /></div>;
}
