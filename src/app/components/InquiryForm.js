'use client';

export default function InquiryForm({ seriesName }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `${seriesName} 기술 문의`,
      '',
      `회사명: ${data.get('company')}`,
      `담당자: ${data.get('name')}`,
      `연락처: ${data.get('phone')}`,
      `이메일: ${data.get('email')}`,
      '',
      '문의 내용:',
      String(data.get('message') || ''),
    ].join('\n');
    window.location.href = `mailto:tokimec@tokimec.co.kr?subject=${encodeURIComponent(`[${seriesName}] 기술 문의`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="mx-auto grid w-[min(780px,100%)] grid-cols-2 gap-[18px] bg-white p-[31px] text-left shadow-[0_18px_45px_rgba(30,91,119,.13)] max-[760px]:grid-cols-1 max-[760px]:gap-4 max-[760px]:px-[18px] max-[760px]:py-[23px]" onSubmit={handleSubmit}>
      <FormField label="회사명"><input name="company" autoComplete="organization" placeholder="회사명을 입력해 주세요" required /></FormField>
      <FormField label="담당자명"><input name="name" autoComplete="name" placeholder="성함을 입력해 주세요" required /></FormField>
      <FormField label="연락처"><input name="phone" autoComplete="tel" inputMode="tel" placeholder="예: 02-0000-0000" required /></FormField>
      <FormField label="이메일"><input name="email" type="email" autoComplete="email" placeholder="답변받을 이메일" required /></FormField>
      <label className="col-span-full grid gap-2 max-[760px]:col-auto"><span className="text-[13px] font-extrabold text-[#405969]">적용 조건 및 문의 내용</span><textarea className="min-h-[120px] w-full resize-y rounded-none border border-[#c9d9e0] bg-[#fbfdfe] px-[14px] py-[13px] text-sm leading-[1.55] text-[#1e3545] outline-none focus:border-[#1686b7] focus:shadow-[0_0_0_3px_rgba(22,134,183,.12)]" name="message" placeholder="필요 유량, 압력, 사용 장비, 설치 환경 등을 입력해 주세요." required /></label>
      <button className="col-span-full min-h-[54px] cursor-pointer border-0 bg-[#15253a] text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#075a9a] max-[760px]:col-auto" type="submit">이메일로 문의 작성하기 <span className="ml-[9px]" aria-hidden="true">↗</span></button>
      <p className="col-span-full mt-[-4px] text-xs leading-[1.55] text-[#6d7e88] max-[760px]:col-auto">작성 후 사용 중인 이메일 프로그램이 열리며, 내용을 확인한 뒤 직접 발송할 수 있습니다.</p>
    </form>
  );
}

function FormField({ label, children }) {
  return <label className="grid gap-2"><span className="text-[13px] font-extrabold text-[#405969]">{label}</span><span className="[&>input]:w-full [&>input]:rounded-none [&>input]:border [&>input]:border-[#c9d9e0] [&>input]:bg-[#fbfdfe] [&>input]:px-[14px] [&>input]:py-[13px] [&>input]:text-sm [&>input]:text-[#1e3545] [&>input]:outline-none [&>input:focus]:border-[#1686b7] [&>input:focus]:shadow-[0_0_0_3px_rgba(22,134,183,.12)]">{children}</span></label>;
}
