import svgPaths from "./svg-f0kqj1s2ab";
import clsx from "clsx";
import { useState, lazy, Suspense } from "react";
import PassoAPassoCompra from "../components/PassoAPassoCompra";

// Lazy load mobile components for better performance
const SobreGeracaoMil = lazy(() => import("../components/SobreGeracaoMil"));
const HistoriaSection = lazy(() => import("../components/HistoriaSection"));
const ResultadosSection = lazy(() => import("../components/ResultadosSection"));
const ContatoMobile = lazy(() => import("../components/ContatoMobile"));
const ProfessoresSection = lazy(() => import("../components/ProfessoresSection"));
const ResultadosInspiramSection = lazy(() => import("../components/ResultadosInspiramSection"));
const PlataformaMultiplataformaSection = lazy(() => import("../components/PlataformaMultiplataformaSection"));
const AuloesPresenciaisSection = lazy(() => import("../components/AuloesPresenciaisSection"));
const RedesSociaisSection = lazy(() => import("../components/RedesSociaisSection"));
const MateriaisDidaticosSection = lazy(() => import("../components/MateriaisDidaticosSection"));
const AcessoConteudoCTASection = lazy(() => import("../components/AcessoConteudoCTASection"));
const NossoInstagramSection = lazy(() => import("../components/NossoInstagramSection"));
const PlanosMobile = lazy(() => import("../components/PlanosMobile"));
const FAQMobile = lazy(() => import("../components/FAQMobile"));
const FooterMobile = lazy(() => import("../components/FooterMobile"));
const HeroSectionMobile = lazy(() => import("../components/HeroSectionMobile"));
import SEOHead from "../components/SEOHead";
import PerformanceOptimizer from "../components/PerformanceOptimizer";
import imgLogoGM from "figma:asset/33c9dc2c2bc6e55ff3118c010ec4eb5ef9214584.png";
import imgLogoGMCircle from "figma:asset/3e7c0272f627242dfee1957a778a14ba510182a9.png";
import imgLogoGMCirculoAmarelo from "figma:asset/f06bca7207cccce23014b3b9d9f7c8e104aaf95f.png";
import imgLogoGMNovo from "figma:asset/7e66070eb25e0b43b53e33be783a9836430cfbae.png";
import imgMascoteCaneta from "figma:asset/ad71d278b383f999d9de0075bc0c3797d6439b0d.png";
import imgMascoteFormado from "figma:asset/a2680e5e5754e95cb1de24f7740c9d033e106b78.png";
import imgMascoteLivros from "figma:asset/a9870f93922455ba5b6172e2449a5d1335ba0bc9.png";
import imgHistorySection from "figma:asset/b14e2281547eeb737af4aa9f7781d4465f5fc354.png";
import imgVictorCirilo1 from "figma:asset/3d58d1fe192f4fba3cdc226a83469bf405aba2d2.png";
import imgImageXelao from "figma:asset/9262e152d467782746339a95c23a273e3f96cfbc.png";
import imgBiaGeracaoMilCopiarPng1 from "figma:asset/3580b8f20b1b0b616f842627ddae926d8d35fc84.png";
import imgPablitoGeracaoMil1 from "figma:asset/83b1739e3111fc716995c3a489999a5b57ab194a.png";
import imgImageEdnaldo from "figma:asset/c39ff5aa7f9ce08037c30889485b9ab404aedae6.png";
import imgCalhauGeracaoMilCopiar1 from "figma:asset/f316e4808aa652478fb0bbb9367e5e7287831517.png";
import imgWevertonCamisaGmil1 from "figma:asset/a0e95cde4db06842ffa4bb1c27c192034429ce39.png";
import imgImageCleslei from "figma:asset/bcc7812a29472fca7e2be878974a0110ce0ab1c6.png";
import imgImageWaguinho from "figma:asset/4ce791322b5a93bfebfac4a3548ebac276040909.png";
import imgImageLuisAlberto from "figma:asset/bb033ad343aaa1c9221221de2ccc336cc495dfc9.png";
import imgImageMatheusLordelo from "figma:asset/69e8ec2fcda126af43419ac296f5ec959b0c67c3.png";
import imgImageVitao from "figma:asset/bcc531d486e489abeb7898ed73f3104cd77223e7.png";
import imgImageAnderson from "figma:asset/c443b77cc2914fa0cefa6170877380bf302d0d87.png";
import imgImagePlataformaGeracaoMilEmMultiplosDispositivos from "figma:asset/596bda4ab7e203ac89ffffa301793f02c0eb935b.png";
import imgImage13 from "figma:asset/bdc0eca7b87c5b1e7286be565548f0f3151117e1.png";
import imgImage14 from "figma:asset/e81957cd73a9e3246a1b187a5fd906479af41530.png";
import imgImage16 from "figma:asset/26e48fc145b926f86350dcf8f6bf30ff87334d29.png";
import imgImage15 from "figma:asset/ab2c3f30820c4c76ad6bb3397f7db8c4ba837f7e.png";
import imgImage2 from "figma:asset/f4c10635f71c472edb5d225ec6678b87624e7df5.png";
import imgImage7 from "figma:asset/be88deb5954ad65cc1305ee21c61d0d9f0b6706b.png";
import imgImage11 from "figma:asset/3ea84ca3b0f8cf51bd691720b23aca69cfafd621.png";
import imgImage12 from "figma:asset/12a681055ec06f8094f71d8580d925e33e41ad19.png";
import imgImage6 from "figma:asset/2e9fd477ea8fe91b5fc719f89d3ec2e9518cc30a.png";
import imgImage4 from "figma:asset/c83709c76ee3ba5618c05f3e2d2635a41b553e2c.png";
import imgImage5 from "figma:asset/56d301afe25790a07bfe8ee4f94d94e9ed8a9f34.png";
import imgImage8 from "figma:asset/60153e5af74bc9cca3c3e4778114f5248679ef84.png";
import imgImage10 from "figma:asset/468b357d39097b89e7b51a3ddd78b007e0dc4dde.png";
import imgContainer from "figma:asset/58d4fb26607072f882a4afc93c5632a4520374a8.png";
import imgImageMascoteGeracaoMil from "figma:asset/c9fc7f56f185bfa26d203fa01f05a936678d7a8e.png";
import imgJeaneVitoria from "figma:asset/09f350ca1379106148369e110a83d841ef0f2aa7.png";
import imgAnaClara from "figma:asset/a7a278de5c5ff614522c4e7abc7c71ded449559e.png";
import imgHernandes from "figma:asset/27df5141547b0a43b8197ad1c078592512fc2131.png";
import imgJulianaAzevedo from "figma:asset/768f69dc56d7a41dfd9d86f3c7cc9ab35d811968.png";
import imgMeilinePoliane from "figma:asset/f84637d6809fbc3be49b0943d6161b499362a0c5.png";
import imgHeitorAbdala from "figma:asset/045c0e3d0671e2ed66ee6740dcb5bb0d9b44444d.png";
import imgGuilhermeBarbosa from "figma:asset/1d9c4a7844eaac02427425d6dfb8ea25e91ccc0e.png";
import imgGustavo from "figma:asset/2fb7631ed1158a48071e3fa1adf465b28342a046.png";
import imgGiseleAlice from "figma:asset/86d3e4a3c384d448ac5295f7ca609370aaad512a.png";
type ContainerBackgroundImage7Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage7({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage7Props>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(134.363deg, rgb(253, 199, 0) 0%, rgb(255, 223, 32) 100%)" }} className={clsx("place-self-stretch relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}
type ContainerBackgroundImage6Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage6({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage6Props>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(166.038deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 100%)" }} className={clsx("absolute content-stretch flex flex-col gap-[8px] h-[120px] items-start pb-0 pt-[24px] px-[24px] rounded-[14px] top-0 w-[482.656px]", additionalClassNames)}>
      {children}
    </div>
  );
}

function BackgroundImage14({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(135deg, rgba(173, 70, 255, 0.8) 0%, rgba(246, 51, 154, 0.8) 100%)" }} className="absolute content-stretch flex items-center justify-center left-0 opacity-0 pl-0 pr-[0.016px] py-0 size-[236px] top-0">
      {children}
    </div>
  );
}

function BackgroundImage13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="size-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[4px] pt-[28px] px-[28px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage5Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage5Props>) {
  return (
    <div className={clsx("h-[48px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage4Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage4Props>) {
  return (
    <div className={clsx("h-[56px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage12Props = {
  additionalClassNames?: string;
};

function BackgroundImage12({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage12Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage11Props = {
  additionalClassNames?: string;
};

function BackgroundImage11({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage11Props>) {
  return <BackgroundImage12 additionalClassNames={clsx("basis-0 grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0 w-[64px]", additionalClassNames)}>{children}</BackgroundImage12>;
}
type BackgroundImage10Props = {
  additionalClassNames?: string;
};

function BackgroundImage10({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage10Props>) {
  return <BackgroundImage12 additionalClassNames={clsx("bg-[#fdc700] relative rounded-[3.35544e+07px] shrink-0", additionalClassNames)}>{children}</BackgroundImage12>;
}
type BackgroundImage9Props = {
  additionalClassNames?: string;
};

function BackgroundImage9({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage9Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage8Props = {
  additionalClassNames?: string;
};

function BackgroundImage8({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage8Props>) {
  return <BackgroundImage9 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage9>;
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">{children}</p>
    </div>
  );
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage6Props>) {
  return (
    <div className={clsx("size-[20px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage5Props>) {
  return (
    <div className={clsx("size-[18px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}
type IconBackgroundImage6Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage6({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage6Props>) {
  return (
    <BackgroundImage5 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage5>
  );
}

function ButtonBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[72px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function IconBackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[64px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type ContainerBackgroundImage3Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage3Props>) {
  return (
    <div className={clsx("h-[80px] relative rounded-[10px] shrink-0 w-full", additionalClassNames)}>
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[16px] px-[16px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function IconBackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type ContainerBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage2Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[32px] pt-[24px] px-[24px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start px-[16px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function IconBackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return <BackgroundImage4 additionalClassNames={clsx("size-[24px]", additionalClassNames)}>{children}</BackgroundImage4>;
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <BackgroundImage6 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage6>
  );
}
type TextBackgroundImageAndText7Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText7({ text, additionalClassNames = "" }: TextBackgroundImageAndText7Props) {
  return (
    <div className={clsx("h-[25.2px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1c398e] text-[16px] text-nowrap top-0">{text}</p>
      </div>
    </div>
  );
}
type TextBackgroundImageAndText6Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText6({ text, additionalClassNames = "" }: TextBackgroundImageAndText6Props) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1c398e] text-[16px] text-nowrap top-0">{text}</p>
      </div>
    </div>
  );
}

function IconBackgroundImage2() {
  return (
    <div className="relative shrink-0 size-[21px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Icon">
          <path d={svgPaths.p21363280} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}
type TextBackgroundImageAndText5Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText5({ text, additionalClassNames = "" }: TextBackgroundImageAndText5Props) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-nowrap top-0">{text}</p>
      </div>
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage2 additionalClassNames="relative shrink-0">
      <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </BackgroundImage2>
  );
}
type ParagraphBackgroundImageAndText9Props = {
  text: string;
};

function ParagraphBackgroundImageAndText9({ text }: ParagraphBackgroundImageAndText9Props) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#dbeafe] text-[14px]">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText5Props = {
  text: string;
};

function HeadingBackgroundImageAndText5({ text }: HeadingBackgroundImageAndText5Props) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#fdc700] text-[16px] text-nowrap top-0">{text}</p>
    </div>
  );
}
type OptionBackgroundImageAndTextProps = {
  text: string;
};

function OptionBackgroundImageAndText({ text }: OptionBackgroundImageAndTextProps) {
  return (
    <div className="absolute left-[-812px] size-0 top-[-574px]">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#0a0a0a] text-[16px] top-0 w-0">{text}</p>
    </div>
  );
}
type BackgroundImageAndText8Props = {
  text: string;
};

function BackgroundImageAndText8({ text }: BackgroundImageAndText8Props) {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap">{text}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

// Interactive Input Component
type InteractiveInputFieldProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

function InteractiveInputField({ placeholder, value, onChange, type = "text" }: InteractiveInputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={clsx(
              "font-['Arimo:Regular',sans-serif] font-normal leading-[normal] w-full bg-transparent outline-none text-[16px]",
              value ? "text-[#0a0a0a]" : "text-[rgba(10,10,10,0.5)]"
            )}
          />
        </div>
      </div>
      <div 
        aria-hidden="true" 
        className={clsx(
          "absolute border border-solid inset-0 pointer-events-none rounded-[10px] transition-colors",
          isFocused ? "border-[#1c398e] border-2" : "border-[#d1d5dc]"
        )} 
      />
    </div>
  );
}

// Interactive Dropdown Component
type InteractiveDropdownProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

function InteractiveDropdown({ options, value, onChange, placeholder }: InteractiveDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="h-[49px] relative rounded-[10px] shrink-0 w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setTimeout(() => setIsOpen(false), 200);
        }}
        className="w-full h-full flex items-center px-[16px] text-left bg-transparent outline-none"
      >
        <span className={clsx(
          "font-['Arimo:Regular',sans-serif] font-normal leading-[normal] text-[16px]",
          value ? "text-[#0a0a0a]" : "text-[rgba(10,10,10,0.5)]"
        )}>
          {value || placeholder}
        </span>
        <svg 
          className={clsx("ml-auto size-[20px] transition-transform", isOpen && "rotate-180")} 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <path 
            d="M6 9L12 15L18 9" 
            stroke="#1c398e" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
          />
        </svg>
      </button>
      <div 
        aria-hidden="true" 
        className={clsx(
          "absolute border border-solid inset-0 pointer-events-none rounded-[10px] transition-colors",
          isFocused ? "border-[#1c398e] border-2" : "border-[#d1d5dc]"
        )} 
      />
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[#d1d5dc] rounded-[10px] shadow-lg z-10 max-h-[200px] overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full px-[16px] py-[12px] text-left font-['Arimo:Regular',sans-serif] font-normal text-[16px] text-[#0a0a0a] hover:bg-[#f3f4f6] transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

type BackgroundImageAndText7Props = {
  text: string;
};

function BackgroundImageAndText7({ text }: BackgroundImageAndText7Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#bedbff] text-[14px] text-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText6Props = {
  text: string;
};

function BackgroundImageAndText6({ text }: BackgroundImageAndText6Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#bedbff] text-[16px] text-nowrap top-0">{text}</p>
    </div>
  );
}
type LinkBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinkBackgroundImageAndText({ text, additionalClassNames = "" }: LinkBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[21px] items-start left-0 top-px", additionalClassNames)}>
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#bedbff] text-[16px] text-nowrap">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText4Props = {
  text: string;
};

function HeadingBackgroundImageAndText4({ text }: HeadingBackgroundImageAndText4Props) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-nowrap text-white top-0">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText8Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphBackgroundImageAndText8({ text, additionalClassNames = "" }: ParagraphBackgroundImageAndText8Props) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-justify top-0 w-[710px]">{text}</p>
    </div>
  );
}
type IconBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconBackgroundImage({ additionalClassNames = "" }: IconBackgroundImageProps) {
  return (
    <BackgroundImage4 additionalClassNames={clsx("relative size-[24px]", additionalClassNames)}>
      <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </BackgroundImage4>
  );
}
type BackgroundImageAndText5Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText5({ text, additionalClassNames = "" }: BackgroundImageAndText5Props) {
  return (
    <div className={clsx("absolute h-[24px] left-[32px] top-0", additionalClassNames)}>
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1c398e] text-[16px] text-nowrap top-0">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndText4Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText4({ text, additionalClassNames = "" }: TextBackgroundImageAndText4Props) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1c398e] text-[16px] text-nowrap top-0">{text}</p>
      </div>
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="absolute bg-[#f9fafb] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHistorySection} />
    </div>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ additionalClassNames = "" }: ContainerBackgroundImageProps) {
  return (
    <div style={{ backgroundImage: "linear-gradient(135deg, rgba(173, 70, 255, 0.8) 0%, rgba(246, 51, 154, 0.8) 100%)" }} className={clsx("absolute content-stretch flex items-center justify-center opacity-0 pl-0 pr-[0.016px] py-0 size-[236px] top-0", additionalClassNames)}>
      <TextBackgroundImageAndText3 text="❤️" />
    </div>
  );
}
type TextBackgroundImageAndText3Props = {
  text: string;
};

function TextBackgroundImageAndText3({ text }: TextBackgroundImageAndText3Props) {
  return (
    <div className="h-[36px] relative shrink-0 w-[41.203px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[30px] text-nowrap text-white top-0">{text}</p>
      </div>
    </div>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return (
    <div className="absolute bg-[#1c398e] content-stretch flex h-[36px] items-start left-[24px] px-[16px] py-[8px] rounded-[10px] top-[304px] w-[308px]">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#fdc700] text-[14px] text-center">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText7Props = {
  text: string;
};

function ParagraphBackgroundImageAndText7({ text }: ParagraphBackgroundImageAndText7Props) {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24px] top-[268px] w-[308px]">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#193cb8] text-[14px] text-center">{text}</p>
    </div>
  );
}
type BackgroundImageAndText4Props = {
  text: string;
};

function BackgroundImageAndText4({ text }: BackgroundImageAndText4Props) {
  return <BackgroundImage7>{text}</BackgroundImage7>;
}
type HeadingBackgroundImageAndText3Props = {
  text: string;
};

function HeadingBackgroundImageAndText3({ text }: HeadingBackgroundImageAndText3Props) {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#101828] text-[20px] text-nowrap">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText6Props = {
  text: string;
};

function ParagraphBackgroundImageAndText6({ text }: ParagraphBackgroundImageAndText6Props) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#dbeafe] text-[14px] text-nowrap">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText2Props = {
  text: string;
};

function HeadingBackgroundImageAndText2({ text }: HeadingBackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[20px] text-white">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className="h-[40px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[40px] left-[116.89px] text-[#fdc700] text-[36px] text-center text-nowrap top-0 translate-x-[-50%]">{text}</p>
    </div>
  );
}
type ImageBackgroundImageProps = {
  additionalClassNames?: string;
};

function ImageBackgroundImage({ additionalClassNames = "" }: ImageBackgroundImageProps) {
  return (
    <div className={clsx("absolute left-0", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage16} />
    </div>
  );
}
type HeadingBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function HeadingBackgroundImageAndText1({ text, additionalClassNames = "" }: HeadingBackgroundImageAndText1Props) {
  return (
    <BackgroundImage9 additionalClassNames={clsx("h-[32px] relative shrink-0", additionalClassNames)}>
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-nowrap text-white">{text}</p>
    </BackgroundImage9>
  );
}
type ParagraphBackgroundImageAndText5Props = {
  text: string;
};

function ParagraphBackgroundImageAndText5({ text }: ParagraphBackgroundImageAndText5Props) {
  return (
    <div className="absolute h-[28px] left-[24px] top-[304px] w-[512px]">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#364153] text-[18px] text-nowrap top-0">{text}</p>
    </div>
  );
}

type LegendaFotoCardProps = {
  text: string;
};

function LegendaFotoCard({ text }: LegendaFotoCardProps) {
  return (
    <div className="absolute bottom-[16px] left-[16px] right-[16px] px-[12px] py-[8px] bg-[rgba(0,0,0,0.7)] rounded-[8px]">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-white text-[14px]">{text}</p>
    </div>
  );
}

type ParagraphBackgroundImageAndText4Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphBackgroundImageAndText4({ text, additionalClassNames = "" }: ParagraphBackgroundImageAndText4Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[20px] items-start left-[24px] top-[136px]", additionalClassNames)}>
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#dbeafe] text-[14px] text-center text-nowrap">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText3Props = {
  text: string;
};

function ParagraphBackgroundImageAndText3({ text }: ParagraphBackgroundImageAndText3Props) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[50%] text-[#d08700] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText2Props = {
  text: string;
};

function ParagraphBackgroundImageAndText2({ text }: ParagraphBackgroundImageAndText2Props) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[50%] text-[#d08700] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphBackgroundImageAndText1({ text, additionalClassNames = "" }: ParagraphBackgroundImageAndText1Props) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center relative shrink-0 w-full", additionalClassNames)}>
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px] text-center">{text}</p>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText3({ text, additionalClassNames = "" }: BackgroundImageAndText3Props) {
  return (
    <div className={additionalClassNames}>
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#1c398e] text-[20px] text-center">{text}</p>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText2({ text, additionalClassNames = "" }: BackgroundImageAndText2Props) {
  return <BackgroundImageAndText3 text={text} additionalClassNames={clsx("content-stretch flex items-start relative shrink-0 w-full", additionalClassNames)} />;
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return <BackgroundImageAndText3 text={text} additionalClassNames={clsx("absolute content-stretch flex h-[28px] items-start", additionalClassNames)} />;
}

function BackgroundImage() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none hidden md:block">
      <div className="absolute bg-white inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHistorySection} />
    </div>
  );
}
type TextBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText2({ text, additionalClassNames = "" }: TextBackgroundImageAndText2Props) {
  return (
    <BackgroundImage9 additionalClassNames={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap">{text}</p>
    </BackgroundImage9>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex items-start left-0 top-0", additionalClassNames)}>
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#1c398e] text-[24px] text-center">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#1c398e] text-[24px] text-center">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphBackgroundImageAndText({ text, additionalClassNames = "" }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-2px]">{text}</p>
      </div>
    </div>
  );
}
type TextBackgroundImageAndText1Props = {
  text: string;
};

function TextBackgroundImageAndText1({ text }: TextBackgroundImageAndText1Props) {
  return (
    <BackgroundImage8 additionalClassNames="h-[32px] w-[32.953px]">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">{text}</p>
    </BackgroundImage8>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText({ text, additionalClassNames = "" }: TextBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[64px] items-start", additionalClassNames)}>
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[#fdc700] text-[48px] text-center text-nowrap">{text}</p>
    </div>
  );
}

// Componente de FAQ interativo
type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-hidden relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <ButtonBackgroundImage>
          <TextBackgroundImageAndText4 text={question} additionalClassNames="flex-1" />
          <div className="flex items-center justify-center relative shrink-0">
            <div className={`flex-none transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
              <IconBackgroundImage />
            </div>
          </div>
        </ButtonBackgroundImage>
      </button>
      <div 
        className="w-full transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: isOpen ? '200px' : '0px',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="p-6">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] text-[#4a5565] text-[16px] text-justify">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white relative w-full min-h-screen" data-name="App">
      {/* SEO & Performance Optimization */}
      <SEOHead />
      <PerformanceOptimizer />
      
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 h-[64px] md:h-[80px]" data-name="Header">
        <div className="max-w-[1528px] mx-auto px-[16px] md:px-[32px] lg:px-[48px] h-full flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <img 
              src={imgLogoGMNovo} 
              alt="Geração MIL - Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              loading="eager"
              fetchpriority="high"
            />
            <div className="flex flex-col gap-[2px] md:gap-[4px]">
              <h1 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] md:text-[24px] lg:text-[28px] text-[#1c398e] leading-tight">Geração MIL</h1>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] md:text-[12px] lg:text-[14px] text-[#4a5565] leading-tight">Curso Pré-Vestibular</p>
            </div>
          </div>
          
          {/* Navigation Menu - Desktop Only */}
          <nav className="hidden lg:flex items-center gap-[24px] xl:gap-[40px]">
            <a 
              href="#nossa-historia" 
              className="font-['Arimo:Regular',sans-serif] text-[14px] xl:text-[16px] text-[#4a5565] hover:text-[#1c398e] transition-colors cursor-pointer"
            >
              Nossa História
            </a>
            <a 
              href="#plataforma" 
              className="font-['Arimo:Regular',sans-serif] text-[14px] xl:text-[16px] text-[#4a5565] hover:text-[#1c398e] transition-colors cursor-pointer"
            >
              Plataforma
            </a>
            <a 
              href="#faq" 
              className="font-['Arimo:Regular',sans-serif] text-[14px] xl:text-[16px] text-[#4a5565] hover:text-[#1c398e] transition-colors cursor-pointer"
            >
              FAQ
            </a>
            <a 
              href="#planos" 
              className="font-['Arimo:Regular',sans-serif] text-[14px] xl:text-[16px] text-[#4a5565] hover:text-[#1c398e] transition-colors cursor-pointer"
            >
              Planos
            </a>
            <a 
              href="#passo-a-passo"
              id="btn-inscrevase-header"
              data-track="click-navigation"
              data-section="header"
              data-destination="passo-a-passo"
              className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] xl:text-[16px] text-white bg-[#1c398e] hover:bg-[#193cb8] px-[16px] xl:px-[24px] py-[10px] xl:py-[12px] rounded-[8px] transition-colors cursor-pointer active:scale-95 will-change-transform"
              aria-label="Inscreva-se no curso"
            >
              Inscreva-se
            </a>
          </nav>

          {/* Mobile CTA Button */}
          <a 
            href="#passo-a-passo"
            className="lg:hidden font-['Arimo:Bold',sans-serif] font-bold text-[12px] md:text-[14px] text-white bg-[#1c398e] hover:bg-[#193cb8] px-[12px] md:px-[16px] py-[8px] md:py-[10px] rounded-[6px] md:rounded-[8px] transition-colors cursor-pointer active:scale-95"
            aria-label="Inscreva-se no curso"
          >
            Inscreva-se
          </a>
        </div>
      </header>

      <div className="hidden md:flex absolute content-stretch flex-col h-[1000px] items-start left-0 pb-0 pt-[96px] px-0 top-[980px] w-[1528px]" data-name="VideoSection" style={{ backgroundImage: "linear-gradient(146.797deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 100%)" }}>
        <div className="h-[808px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute h-[92px] left-[16px] top-0 w-[1496px]" data-name="Container">
            <div className="absolute h-[48px] left-0 top-0 w-[1496px]" data-name="Heading 2">
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[48px] left-[595px] text-[48px] text-center text-nowrap text-white top-0 translate-x-[-50%]">Conheça o</p>
              <TextBackgroundImageAndText text="Geração MIL" additionalClassNames="left-[730.86px] top-0 w-[282.172px]" />
            </div>
            <div className="absolute h-[28px] left-[364px] top-[64px] w-[768px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[383.86px] text-[#dbeafe] text-[18px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Assista ao vídeo e descubra como transformamos sonhos em aprovações</p>
            </div>
          </div>
          <div className="absolute h-[668px] left-[252px] top-[140px] w-[1024px]" data-name="Container">
            <button
              onClick={() => {
                const element = document.getElementById('planos');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="absolute bg-[#fdc700] h-[60px] left-[388.64px] rounded-[3.35544e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[608px] w-[246.719px] transition-transform hover:scale-105 cursor-pointer" 
              data-name="Link"
              data-conversion-id="btn-video-inscreva-se"
            >
              <BackgroundImage3 additionalClassNames="absolute left-[32px] top-[18px]">
                <path d="M6 3L20 12L6 21V3Z" id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </BackgroundImage3>
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-[139px] text-[#1c398e] text-[18px] text-center text-nowrap top-[15px] translate-x-[-50%]">Inscreva-se Agora</p>
            </button>
            <div className="absolute bg-black content-stretch flex flex-col h-[576px] items-start left-0 overflow-clip rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[1024px]" data-name="Container">
              <iframe 
                className="size-full"
                src="https://www.youtube.com/embed/mT09LZXloMw" 
                title="Geração MIL - Transformando sonhos em aprovações"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      <div id="nossa-historia" className="hidden md:flex absolute content-stretch flex-col h-[1884px] items-start left-[29px] pb-0 pt-[96px] px-0 top-[1989px] w-[1528px]" data-name="HistorySection">
        <BackgroundImage />
        <ContainerBackgroundImage1 additionalClassNames="h-[1692px]">
          <div className="h-[148px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute h-[48px] left-[-18px] top-0 w-[1496px]" data-name="Heading 2">
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[48px] left-[663.06px] text-[#1c398e] text-[48px] text-center text-nowrap top-0 translate-x-[-50%]">Entenda a nossa</p>
              <TextBackgroundImageAndText text="história" additionalClassNames="left-[864px] top-0 w-[170.234px]" />
            </div>
            <div className="absolute h-[84px] left-[282px] top-[43px] w-[901px]" data-name="Paragraph">
              <div className="absolute h-[24px] left-[10.58px] top-[2px] w-[101.141px]" data-name="Bold Text" />
              <div className="absolute h-[84px] left-[5.59px] top-[-1px] w-[885px]" data-name="é mais do que um curso preparatório — é um movimen">
                <p className="absolute font-['Arimo:Regular',sans-serif] font-normal inset-[26.19%_-3.66%_-26.19%_2.08%] leading-[28px] text-[#4a5565] text-[18px] text-justify">
                  <span className="font-['Arimo:Bold',sans-serif] font-bold">Geração Mil </span>é mais do que um curso preparatório — é um movimento educacional que transforma trajetórias por meio do conhecimento. Desde 2022, o projeto vem ampliando o acesso ao ensino superior e aos concursos públicos, conectando estudantes a uma educação de qualidade, acessível e focada em resultados reais.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#f9fafb] h-[992px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start pb-0 pt-[48px] px-[300px] relative size-full">
                <div className="h-[896px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute h-[112px] left-0 top-0 w-[896px]" data-name="Paragraph">
                    <div className="absolute h-[24px] left-[230.05px] top-[2px] w-[159px]" data-name="Bold Text" />
                    <p className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[112px] leading-[28px] left-0 text-[#364153] text-[18px] text-justify top-[14px] w-[870px]">
                      <span>{`Tudo começou na cidade de `}</span>
                      <span className="font-['Arimo:Bold',sans-serif] font-bold">Madre de Deus-BA</span>, em um cenário desafiador, marcado por desigualdades educacionais e limitações estruturais. Diante disso, o Geração Mil apostou no ensino a distância como ferramenta de alcance e inclusão, permitindo que alunos de diferentes realidades pudessem estudar com professores experientes, metodologia eficiente e acompanhamento próximo.
                    </p>
                  </div>
                  <div className="absolute h-[112px] left-0 top-[136px] w-[896px]" data-name="Paragraph">
                    <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#364153] text-[18px] text-justify top-[-1px] w-[861px]">
                      <span>{`O crescimento foi rápido e consistente. As primeiras turmas, voltadas para redação, logo se expandiram para grandes aulões e cursos completos, alcançando diversas cidades e estados, como `}</span>
                      <span className="font-['Arimo:Bold',sans-serif] font-bold">{`Piauí, São Sebastião do Passé, Candeias, Aracaju e São Francisco do Conde. `}</span>Hoje, o Geração Mil possui atuação nacional e atende estudantes em todo o Brasil, tanto de forma presencial quanto online.
                    </p>
                    <div className="absolute h-[52px] left-0 top-[30px] w-[845.172px]" data-name="Bold Text" />
                  </div>
                  <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[5px] text-[#364153] text-[18px] top-[211px] w-[859px]">{`. `}</p>
                  <div className="absolute h-[112px] left-0 top-[272px] w-[896px]" data-name="Paragraph">
                    <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#364153] text-[18px] text-justify top-[-1px] w-[895px]">Atualmente, o Geração Mil oferece preparação completa para os principais vestibulares do país — com destaque para o ENEM — além de cursos para concursos públicos. O corpo docente é formado por professores de reconhecimento nacional, que unem didática, experiência e metodologias modernas, tornando o aprendizado dinâmico, estratégico e altamente eficiente.</p>
                  </div>
                  <div className="absolute bg-[#1c398e] content-stretch flex flex-col gap-[24px] h-[263px] items-start left-0 pb-0 pt-[32px] px-[32px] rounded-[14px] top-[416px] w-[896px]" data-name="Container">
                    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 3">
                      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#fdc700] text-[24px]">Resultados que falam por si</p>
                    </div>
                    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[minmax(0px,_32fr)_minmax(0px,_1fr)] h-[96px] relative shrink-0 w-full" data-name="Container">
                      <div className="[grid-area:1_/_1] content-stretch flex gap-[12px] items-start place-self-stretch relative shrink-0" data-name="Container">
                        <TextBackgroundImageAndText1 text="✔️" />
                        <ParagraphBackgroundImageAndText text="Mais de 1.000 alunos aprovados" additionalClassNames="w-[226.625px]" />
                      </div>
                      <div className="[grid-area:1_/_2] content-stretch flex gap-[12px] items-start place-self-stretch relative shrink-0" data-name="Container">
                        <TextBackgroundImageAndText1 text="✔️" />
                        <ParagraphBackgroundImageAndText text="Estudantes de alto padrão acadêmico" additionalClassNames="w-[264.625px]" />
                      </div>
                      <div className="[grid-area:2_/_1] content-stretch flex gap-[12px] items-start place-self-stretch relative shrink-0" data-name="Container">
                        <TextBackgroundImageAndText1 text="✔️" />
                        <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-justify text-white top-[-2px] w-[363px]">Aprovações em universidades e concursos em todo o país</p>
                          </div>
                        </div>
                      </div>
                      <div className="[grid-area:2_/_2] content-stretch flex gap-[12px] items-start place-self-stretch relative shrink-0" data-name="Container">
                        <TextBackgroundImageAndText1 text="✔️" />
                        <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-justify text-white top-[-2px] w-[304px]">Histórias reais de superação, crescimento e conquista</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#fefce8] border-[#fdc700] border-[0px_0px_0px_4px] border-solid h-[132px] left-0 rounded-[10px] top-[656px] w-[896px]" data-name="Paragraph">
                    <p className="absolute font-['Arimo:Italic',sans-serif] font-normal italic leading-[28px] left-[446.27px] text-[#364153] text-[18px] text-justify top-[23px] translate-x-[-50%] w-[785px]">{`"Cada aprovação representa mais do que um número: é a prova de que o método funciona, de que o acompanhamento faz diferença e de que o estudo, quando bem direcionado, abre portas reais para o futuro."`}</p>
                  </div>
                  <div className="absolute h-[84px] left-0 top-[812px] w-[896px]" data-name="Paragraph">
                    <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#364153] text-[18px] text-justify top-[-1px] w-[840px]">
                      <span>{`O Geração Mil nasce de uma vivência profunda e com os desafios enfrentados por jovens que veem na educação a principal oportunidade de mudança de vida. Essa realidade fortalece o compromisso social do projeto e reafirma sua missão: `}</span>
                      <span className="font-['Arimo:Bold',sans-serif] font-bold">oferecer ensino de excelência, gerar oportunidades e formar vencedores.</span>
                    </p>
                    <div className="absolute h-[24px] left-[280px] top-[51px] w-[615.563px]" data-name="Bold Text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
            <ContainerBackgroundImage6 additionalClassNames="left-0">
              <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[40px] left-[217.3px] text-[36px] text-center text-nowrap text-white top-0 translate-x-[-50%]">+1.000</p>
              </div>
              <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[217.45px] text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Alunos aprovados</p>
              </div>
            </ContainerBackgroundImage6>
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[120px] items-start left-[506.66px] pb-0 pt-[24px] px-[24px] rounded-[14px] top-0 w-[482.672px]" data-name="Container" style={{ backgroundImage: "linear-gradient(166.038deg, rgb(253, 199, 0) 0%, rgb(255, 223, 32) 100%)" }}>
              <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[40px] left-[217.47px] text-[#1c398e] text-[36px] text-center text-nowrap top-0 translate-x-[-50%]">Nacional</p>
              </div>
              <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[217.25px] text-[#193cb8] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Atuação em todo Brasil</p>
              </div>
            </div>
            <ContainerBackgroundImage6 additionalClassNames="left-[1013.33px]">
              <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[40px] left-[218.05px] text-[36px] text-center text-nowrap text-white top-0 translate-x-[-50%]">Excelência</p>
              </div>
              <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[217.69px] text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Educação de qualidade</p>
              </div>
            </ContainerBackgroundImage6>
          </div>
          <div className="bg-[#f9fafb] h-[288px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[48px] px-[48px] relative size-full">
                <HeadingBackgroundImageAndText text="Fale conosco através dos nossos canais" />
                <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
                  <a href="https://www.instagram.com/geracaomil?igsh=eGR3b29uNWp3YnVk" target="_blank" rel="noopener noreferrer" id="social-instagram-oficial" data-track="click-social" data-social="instagram" data-account="geracaomil" data-section="contato" className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[128px] items-center left-0 px-0 py-[16px] rounded-[14px] top-0 w-[213.328px] transition-transform hover:scale-105 cursor-pointer" data-name="Link">
                    <div className="basis-0 grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0 w-[64px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }}>
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <IconBackgroundImage3>
                          <path d={svgPaths.p1eb47e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                          <path d={svgPaths.p3d99bc00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                          <path d="M23.3333 8.66667H23.3467" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        </IconBackgroundImage3>
                      </div>
                    </div>
                    <TextBackgroundImageAndText2 text="Instagram Oficial" additionalClassNames="w-[112.688px]" />
                  </a>
                  <a href="https://www.instagram.com/podcastgeracaomil?igsh=eHNuYzhvZ3BuNDM1" target="_blank" rel="noopener noreferrer" id="social-instagram-podcast" data-track="click-social" data-social="instagram" data-account="podcastgeracaomil" data-section="contato" className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[128px] items-center left-[237.33px] px-0 py-[16px] rounded-[14px] top-0 w-[213.328px] transition-transform hover:scale-105 cursor-pointer" data-name="Link">
                    <BackgroundImage11 additionalClassNames="bg-[#ff6900]">
                      <IconBackgroundImage3>
                        <path d={svgPaths.pe0c4480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d={svgPaths.p1cb9e180} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d={svgPaths.p35c2c300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d={svgPaths.p77fcb00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </IconBackgroundImage3>
                    </BackgroundImage11>
                    <TextBackgroundImageAndText2 text="Podcast" additionalClassNames="w-[51.281px]" />
                  </a>
                  <a href="https://www.youtube.com/live/Rxj6QHEXTE4?si=JngzEb439W_1b5pG" target="_blank" rel="noopener noreferrer" id="social-youtube-canal" data-track="click-social" data-social="youtube" data-content="live-redacao" data-section="contato" className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[128px] items-center left-[474.66px] px-0 py-[16px] rounded-[14px] top-0 w-[213.328px] transition-transform hover:scale-105 cursor-pointer" data-name="Link">
                    <BackgroundImage11 additionalClassNames="bg-[#e7000b]">
                      <IconBackgroundImage3>
                        <path d={svgPaths.p201af580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d={svgPaths.p156c6800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </IconBackgroundImage3>
                    </BackgroundImage11>
                    <TextBackgroundImageAndText2 text="YouTube" additionalClassNames="w-[56.234px]" />
                  </a>
                  <a href="https://open.spotify.com/album/6tDPZRszIb4GI4uWKGFOhk?si=bjU40VktTymZKrTPBH0ucA" target="_blank" rel="noopener noreferrer" className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[128px] items-center left-[711.98px] px-0 py-[16px] rounded-[14px] top-0 w-[213.344px] transition-transform hover:scale-105 cursor-pointer" data-name="Link">
                    <BackgroundImage11 additionalClassNames="bg-[#00a63e]">
                      <IconBackgroundImage3>
                        <path d={svgPaths.p2ffb3f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d="M16 24V2.66667L25.3333 8" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </IconBackgroundImage3>
                    </BackgroundImage11>
                    <TextBackgroundImageAndText2 text="Spotify" additionalClassNames="w-[47.703px]" />
                  </a>
                  <a 
                    href="https://wa.me/message/F2DEX6QPKWSAB1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    id="social-whatsapp-contato"
                    data-track="click-social"
                    data-social="whatsapp"
                    data-action="mensagem"
                    data-section="contato"
                    className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[128px] items-center left-[949.33px] px-0 py-[16px] rounded-[14px] top-0 w-[213.328px] transition-transform hover:scale-105 cursor-pointer" 
                    data-name="Link"
                  >
                    <BackgroundImage11 additionalClassNames="bg-[#00c950]">
                      <IconBackgroundImage3>
                        <path d={svgPaths.p1e119030} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </IconBackgroundImage3>
                    </BackgroundImage11>
                    <TextBackgroundImageAndText2 text="WhatsApp" additionalClassNames="w-[68.859px]" />
                  </a>
                  <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[128px] items-center left-[1186.66px] px-0 py-[16px] rounded-[14px] top-0 w-[213.328px]" data-name="Link">
                    <BackgroundImage11 additionalClassNames="bg-[#fb2c36]">
                      <IconBackgroundImage3>
                        <path d={svgPaths.p3cc2c7f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d={svgPaths.p4344e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </IconBackgroundImage3>
                    </BackgroundImage11>
                    <TextBackgroundImageAndText2 text="Email" additionalClassNames="w-[35.766px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerBackgroundImage1>
      </div>
      <div className="hidden md:flex absolute content-stretch flex-col h-[2944px] items-start left-0 pb-0 pt-[96px] px-0 top-[3864px] w-[1528px]" data-name="TeachersSection" style={{ backgroundImage: "linear-gradient(112.471deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 100%)" }}>
        <div className="h-[2848px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute h-[120px] left-[16px] top-0 w-[1496px]" data-name="Container">
            <div className="absolute h-[48px] left-0 top-0 w-[1496px]" data-name="Heading 2">
              <div className="flex items-center justify-center w-full h-full gap-[12px]">
                <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[48px] text-[48px] text-center text-nowrap text-white">Conheça nosso</p>
                <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[48px] text-[48px] text-center text-nowrap text-[#fdc700]">time de professores</p>
              </div>
            </div>
            <div className="absolute h-[56px] left-0 top-[64px] w-full" data-name="Paragraph">
              <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[28px] text-[#dbeafe] text-[18px] text-center w-full px-[100px]">Professores de reconhecimento nacional, com didática moderna e metodologia eficiente para sua aprovação</p>
            </div>
          </div>
          <div className="absolute h-[500px] left-[16px] top-[168px] w-[1496px]" data-name="Container">
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[212px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] overflow-clip relative shrink-0 w-full" data-name="Image (Victor Cirilo)">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgVictorCirilo1} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Victor Cirilo" additionalClassNames="h-[24px]" />
                <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[50%] text-[#d08700] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Redação</p>
                </div>
                <ParagraphBackgroundImageAndText1 text="Especialista em redação nota 1000" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[588px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] relative shrink-0 w-full" data-name="Image (Xelão)">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgImageXelao} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Xelão" additionalClassNames="h-[24px]" />
                <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[50%] text-[#d08700] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Geografia</p>
                </div>
                <ParagraphBackgroundImageAndText1 text="Didática dinâmica e contextualizada" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[964px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] overflow-clip relative shrink-0 w-full" data-name="Image (Pablo)">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgPablitoGeracaoMil1} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Pablo" additionalClassNames="h-[24px]" />
                <ParagraphBackgroundImageAndText2 text="Filosofia e Sociologia" />
                <ParagraphBackgroundImageAndText1 text="Pensamento crítico e reflexivo" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
          </div>
          <div className="absolute h-[500px] left-[16px] top-[700px] w-[1496px]" data-name="Container">
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[212px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] relative shrink-0 w-full" data-name="Image (Waguinho)">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgImageWaguinho} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Waguinho" additionalClassNames="h-[24px]" />
                <ParagraphBackgroundImageAndText3 text="Matemática" />
                <ParagraphBackgroundImageAndText1 text="Matemática com foco em aprovação" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[588px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] relative shrink-0 w-full" data-name="Image (Vitão)">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgImageVitao} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Vitão" additionalClassNames="h-[24px]" />
                <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[50%] text-[#d08700] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Literatura</p>
                </div>
                <ParagraphBackgroundImageAndText1 text="Literatura de forma envolvente" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[964px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] relative shrink-0 w-full" data-name="Image (Matheus Lordelo)">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgImageMatheusLordelo} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Matheus Lordelo" additionalClassNames="h-[24px]" />
                <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[50%] text-[#d08700] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Física</p>
                </div>
                <ParagraphBackgroundImageAndText1 text="Física com aplicação prática" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
          </div>
          <div className="absolute h-[500px] left-[16px] top-[1232px] w-[1496px]" data-name="Container">
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[212px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] relative shrink-0 w-full" data-name="Image (Luis Alberto)">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgImageLuisAlberto} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Luis Alberto" additionalClassNames="h-[24px]" />
                <ParagraphBackgroundImageAndText2 text="Gramática" />
                <ParagraphBackgroundImageAndText1 text="Domínio completo da língua portuguesa" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[588px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] relative shrink-0 w-full" data-name="Image (Cleslei)">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgImageCleslei} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Cleslei" additionalClassNames="h-[24px]" />
                <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[50%] text-[#d08700] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Biologia</p>
                </div>
                <ParagraphBackgroundImageAndText1 text="Biologia clara e objetiva" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[964px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] relative shrink-0 w-full" data-name="Image (Ednaldo)">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgImageEdnaldo} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Ednaldo" additionalClassNames="h-[24px]" />
                <ParagraphBackgroundImageAndText3 text="Matemática" />
                <ParagraphBackgroundImageAndText1 text="Resolução estratégica de problemas" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
          </div>
          <div className="absolute h-[500px] left-[16px] top-[1764px] w-[1496px]" data-name="Container">
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[212px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] relative shrink-0 w-full" data-name="CALHAU GERAÇÃO MIL copiar 1">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgCalhauGeracaoMilCopiar1} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Calhau" additionalClassNames="h-[24px]" />
                <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[50%] text-[#d08700] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">História</p>
                </div>
                <ParagraphBackgroundImageAndText1 text="Conexões históricas relevantes" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[588px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] relative shrink-0 w-full" data-name="BIA GERAÇÃO MIL copiar.png 1">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgBiaGeracaoMilCopiarPng1} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Beatriz" additionalClassNames="h-[24px]" />
                <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[50%] text-[#d08700] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Inglês</p>
                </div>
                <ParagraphBackgroundImageAndText1 text="Método eficiente e prático" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[964px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] relative shrink-0 w-full" data-name="WEVERTON CAMISA GMIL 1">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgWevertonCamisaGmil1} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Weverton" additionalClassNames="h-[24px]" />
                <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[50%] text-[#d08700] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Química</p>
                </div>
                <ParagraphBackgroundImageAndText1 text="Química descomplicada e aplicada" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
          </div>
          <div className="absolute h-[500px] left-[16px] top-[2296px] w-[1496px]" data-name="Container">
            <div className="absolute bg-white content-stretch flex flex-col h-[460px] items-start left-[964px] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[320px]" data-name="TeacherCard">
              <div className="bg-[#f3f4f6] content-stretch flex flex-col h-[360px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                <div className="h-[360px] relative shrink-0 w-full" data-name="Image (Anderson)">
                  <img alt="" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgImageAnderson} />
                </div>
              </div>
              <ContainerBackgroundImage2 additionalClassNames="h-[100px]">
                <BackgroundImageAndText2 text="Anderson" additionalClassNames="h-[24px]" />
                <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[50%] text-[#d08700] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Química</p>
                </div>
                <ParagraphBackgroundImageAndText1 text="Química com método inovador" additionalClassNames="h-[16px]" />
              </ContainerBackgroundImage2>
            </div>
          </div>
          <div className="absolute h-[400px] left-[16px] top-[2336px] w-[912px]" data-name="Container">
            {/* Card superior do triângulo - Metodologia Moderna */}
            <div className="absolute bg-[rgba(255,255,255,0.1)] h-[180px] left-[467px] rounded-[14px] top-0 w-[282.656px]" data-name="Container">
              <div className="absolute bg-[#fdc700] content-stretch flex items-center justify-center left-[109.33px] rounded-[3.35544e+07px] size-[64px] top-[24px]" data-name="Container">
                <IconBackgroundImage3>
                  <path d="M16 9.33333V28" id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d={svgPaths.p22ccae80} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </IconBackgroundImage3>
              </div>
              <div className="absolute h-[24px] left-[24px] top-[104px] w-[234.656px]" data-name="Heading 4">
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[117.44px] text-[16px] text-center text-nowrap text-white top-[-2px] translate-x-[-50%]">Metodologia Moderna</p>
              </div>
              <div className="absolute content-stretch flex h-[20px] items-start left-[24px] top-[136px] w-[234.656px]" data-name="Paragraph">
                <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#dbeafe] text-[14px] text-center">Ensino dinâmico e estratégico</p>
              </div>
            </div>
            {/* Card inferior esquerdo - Experiência Comprovada */}
            <div className="absolute bg-[rgba(255,255,255,0.1)] h-[180px] left-[314px] rounded-[14px] top-[210px] w-[282.656px]" data-name="Container">
              <div className="absolute bg-[#fdc700] content-stretch flex items-center justify-center left-[109.33px] rounded-[3.35544e+07px] size-[64px] top-[24px]" data-name="Container">
                <IconBackgroundImage3>
                  <path d={svgPaths.p14076f00} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d="M29.3333 13.3333V21.3333" id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d={svgPaths.p3858b240} id="Vector_3" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </IconBackgroundImage3>
              </div>
              <div className="absolute h-[24px] left-[24px] top-[104px] w-[234.656px]" data-name="Heading 4">
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[117.58px] text-[16px] text-center text-nowrap text-white top-[-2px] translate-x-[-50%]">Experiência Comprovada</p>
              </div>
              <ParagraphBackgroundImageAndText4 text="Anos de aprovações em vestibulares" additionalClassNames="w-[234.656px]" />
            </div>
            {/* Card inferior direito - Reconhecimento Nacional */}
            <div className="absolute bg-[rgba(255,255,255,0.1)] h-[180px] left-[620px] rounded-[14px] top-[210px] w-[282.672px]" data-name="Container">
              <div className="absolute bg-[#fdc700] content-stretch flex items-center justify-center left-[109.33px] rounded-[3.35544e+07px] size-[64px] top-[24px]" data-name="Container">
                <IconBackgroundImage3>
                  <path d={svgPaths.p3ceb9d80} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d={svgPaths.p3fb33600} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </IconBackgroundImage3>
              </div>
              <div className="absolute h-[24px] left-[24px] top-[104px] w-[234.672px]" data-name="Heading 4">
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[117.92px] text-[16px] text-center text-nowrap text-white top-[-2px] translate-x-[-50%]">Reconhecimento Nacional</p>
              </div>
              <ParagraphBackgroundImageAndText4 text="Professores premiados e referências" additionalClassNames="w-[234.672px]" />
            </div>
          </div>
        </div>
      </div>
      <div id="plataforma" className="hidden md:block absolute bg-white h-[1008.328px] left-0 top-[7559px] w-[1528px]" data-name="Platform3DSection">
        <div className="absolute h-[137px] left-[16px] top-[95.78px] w-[1496px]" data-name="Container">
          <div className="absolute h-[48px] left-0 top-0 w-[1496px]" data-name="Heading 2">
            <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[48px] left-[517.81px] text-[#1c398e] text-[48px] text-center text-nowrap top-0 translate-x-[-50%]">Estude em</p>
            <TextBackgroundImageAndText text="qualquer dispositivo" additionalClassNames="left-[640.81px] top-0 w-[460.859px]" />
          </div>
          <div className="absolute h-[56px] left-[364px] top-[64px] w-[768px]" data-name="Paragraph">
            <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[384.42px] text-[#4a5565] text-[18px] text-center top-[-1px] translate-x-[-50%] w-[733px]">Nossa plataforma funciona perfeitamente em computadores, tablets, celulares e até relógios digitais. Tenha seu curso sempre com você!</p>
          </div>
        </div>
        <div className="absolute h-[421px] left-[261px] top-[280px] w-[1005px]" data-name="Image (Plataforma Geração MIL em múltiplos dispositivos)">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagePlataformaGeracaoMilEmMultiplosDispositivos} />
        </div>
        <div className="absolute h-[180px] left-[316px] top-[749.78px] w-[896px]" data-name="Container">
          <div className="absolute h-[180px] left-0 top-0 w-[277.328px]" data-name="Container">
            <div className="absolute bg-[#fdc700] content-stretch flex items-center justify-center left-[98.66px] rounded-[16px] size-[80px] top-0" data-name="Container">
              <IconBackgroundImage4>
                <path d={svgPaths.p1941aa80} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
              </IconBackgroundImage4>
            </div>
            <BackgroundImageAndText1 text="Acesso Instantâneo" additionalClassNames="left-0 top-[96px] w-[277.328px]" />
            <div className="absolute h-[48px] left-0 top-[132px] w-[277.328px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[139.16px] text-[#4a5565] text-[16px] text-justify text-center top-[-2px] translate-x-[-50%] w-[267px]">Sincronização automática entre todos os seus dispositivos</p>
            </div>
          </div>
          <div className="absolute h-[180px] left-[309.33px] top-0 w-[277.328px]" data-name="Container">
            <div className="absolute bg-[#fdc700] content-stretch flex items-center justify-center left-[98.66px] rounded-[16px] size-[80px] top-0" data-name="Container">
              <IconBackgroundImage4>
                <path d={svgPaths.pfcdd580} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                <path d={svgPaths.p1517b200} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                <path d={svgPaths.p2a06b680} id="Vector_3" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                <path d={svgPaths.p2e47c70} id="Vector_4" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
              </IconBackgroundImage4>
            </div>
            <BackgroundImageAndText1 text="Interface Intuitiva" additionalClassNames="left-0 top-[96px] w-[277.328px]" />
            <div className="absolute h-[48px] left-0 top-[132px] w-[277.328px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[139.11px] text-[#4a5565] text-[16px] text-center top-[-2px] translate-x-[-50%] w-[247px]">Design moderno e fácil de usar em qualquer tela</p>
            </div>
          </div>
          <div className="absolute h-[180px] left-[618.66px] top-0 w-[277.344px]" data-name="Container">
            <div className="absolute bg-[#fdc700] content-stretch flex items-center justify-center left-[98.67px] rounded-[16px] size-[80px] top-0" data-name="Container">
              <IconBackgroundImage4>
                <path d={svgPaths.p17aff600} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                <path d={svgPaths.p9d4580} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
              </IconBackgroundImage4>
            </div>
            <BackgroundImageAndText1 text="Alta Performance" additionalClassNames="left-0 top-[96px] w-[277.344px]" />
            <div className="absolute h-[48px] left-0 top-[132px] w-[277.344px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[139.05px] text-[#4a5565] text-[16px] text-center top-[-2px] translate-x-[-50%] w-[273px]">Carregamento rápido e reprodução de vídeos em HD</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute content-stretch flex-col h-[1496px] items-start left-0 pb-0 pt-[96px] px-0 top-[9788px] w-[1528px]" data-name="SocialProofSection" style={{ backgroundImage: "linear-gradient(139.696deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 100%)" }}>
        <div className="h-[1304px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute h-[176px] left-[16px] top-0 w-[1496px]" data-name="Container">
            <div className="absolute bg-[#fdc700] h-[40px] left-[606.97px] rounded-[3.35544e+07px] top-0 w-[282.063px]" data-name="Container">
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[141.5px] text-[#1c398e] text-[16px] text-center text-nowrap top-[6px] translate-x-[-50%]">RECONHECIMENTO NACIONAL</p>
            </div>
            <div className="absolute h-[48px] left-0 top-[56px] w-[1496px]" data-name="Heading 2">
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[48px] left-[614px] text-[48px] text-center text-nowrap text-white top-0 translate-x-[-50%]">Presença e</p>
              <TextBackgroundImageAndText text="autoridade" additionalClassNames="left-[750.47px] top-0 w-[246.875px]" />
            </div>
            <div className="absolute h-[56px] left-[364px] top-[120px] w-[768px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[384.45px] text-[#dbeafe] text-[18px] text-center top-[-1px] translate-x-[-50%] w-[757px]">Nossa trajetória é marcada por eventos, participações em mídias e um relacionamento próximo com milhares de alunos</p>
            </div>
          </div>
          <div className="absolute gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[552px] left-[188px] top-[724px] w-[1152px]" data-name="Container">
            <div className="[grid-area:1_/_1] bg-white overflow-clip place-self-stretch relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
              <div className="absolute h-[200px] left-0 overflow-clip top-0 w-[560px]" data-name="Container">
                <div className="absolute h-[200px] left-0 top-0 w-[560px]" data-name="Image (Aulões Presenciais)" />
                <div className="absolute h-[405px] left-[-19px] top-[-87.55px] w-[631px]" data-name="image 13">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
                </div>
                <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-[16px] top-[136px] w-[528px]" data-name="Container">
                  <BackgroundImage10 additionalClassNames="size-[48px]">
                    <BackgroundImage3 additionalClassNames="relative shrink-0">
                      <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p161d4800} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p13e20900} id="Vector_4" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </BackgroundImage3>
                  </BackgroundImage10>
                  <HeadingBackgroundImageAndText1 text="Aulões Presenciais" additionalClassNames="w-[206.922px]" />
                </div>
              </div>
              <div className="absolute left-[24px] top-[220px] w-[512px]">
                <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] text-[#364153] text-[14px]">Eventos presenciais com centenas de alunos engajados</p>
              </div>
            </div>
            <div className="[grid-area:1_/_2] bg-white overflow-clip place-self-stretch relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
              <div className="absolute h-[200px] left-0 overflow-clip top-0 w-[560px]" data-name="Container">
                <div className="absolute h-[200px] left-0 top-0 w-[560px]" data-name="Image (Podcasts e Entrevistas)" />
                <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[200px] left-0 to-[rgba(0,0,0,0)] top-0 w-[560px]" data-name="Container">
                  <div className="absolute h-[707px] left-[-8px] top-[-179.55px] w-[575px]" data-name="image 14">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-[16px] top-[136px] w-[528px]" data-name="Container">
                  <BackgroundImage10 additionalClassNames="size-[48px]">
                    <BackgroundImage3 additionalClassNames="relative shrink-0">
                      <path d={svgPaths.p19bf6000} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p1dca7280} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p140fd200} id="Vector_3" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </BackgroundImage3>
                  </BackgroundImage10>
                  <HeadingBackgroundImageAndText1 text="Podcasts e Entrevistas" additionalClassNames="w-[246.953px]" />
                </div>
              </div>
              <div className="absolute left-[24px] top-[220px] w-[512px]">
                <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] text-[#364153] text-[14px]">Participações em diversos programas e plataformas</p>
              </div>
            </div>
            <div className="[grid-area:2_/_1] bg-white overflow-clip place-self-stretch relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
              <div className="absolute h-[200px] left-0 overflow-clip top-0 w-[560px]" data-name="Container">
                <div className="absolute h-[200px] left-0 top-0 w-[560px]" data-name="Image (Momentos em Sala)" />
                <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[200px] left-0 to-[rgba(0,0,0,0)] top-0 w-[560px]" data-name="Container">
                  <ImageBackgroundImage additionalClassNames="h-[730px] top-[-412.55px] w-[560px]" />
                </div>
                <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-[16px] top-[136px] w-[528px]" data-name="Container">
                  <BackgroundImage10 additionalClassNames="size-[48px]">
                    <BackgroundImage3 additionalClassNames="relative shrink-0">
                      <path d={svgPaths.p14f08dd1} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M20 3V7" id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M22 5H18" id="Vector_3" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M4 17V19" id="Vector_4" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M5 18H3" id="Vector_5" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </BackgroundImage3>
                  </BackgroundImage10>
                  <HeadingBackgroundImageAndText1 text="Momentos em Sala" additionalClassNames="w-[215.922px]" />
                </div>
              </div>
              <div className="absolute left-[24px] top-[220px] w-[512px]">
                <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] text-[#364153] text-[14px]">Interação real com nossos alunos no dia a dia</p>
              </div>
            </div>
            <div className="[grid-area:2_/_2] bg-white overflow-clip place-self-stretch relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
              <div className="absolute h-[200px] left-0 overflow-clip top-0 w-[560px]" data-name="Container">
                <div className="absolute h-[200px] left-0 top-0 w-[560px]" data-name="Image (Eventos e Conquistas)" />
                <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[200px] left-0 to-[rgba(0,0,0,0)] top-0 w-[560px]" data-name="Container">
                  <div className="absolute flex h-[325.416px] items-center justify-center left-[-15.14px] top-[-67.52px] w-[586.064px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                    <div className="flex-none rotate-[359.813deg]">
                      <div className="h-[323.505px] relative w-[585.009px]" data-name="image 15">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage15} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-[16px] top-[136px] w-[528px]" data-name="Container">
                  <BackgroundImage10 additionalClassNames="size-[48px]">
                    <BackgroundImage3 additionalClassNames="relative shrink-0">
                      <path d={svgPaths.p3f521e00} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p203c5100} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M4 22H20" id="Vector_3" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p20590f00} id="Vector_4" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p74ec0e0} id="Vector_5" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p374bec80} id="Vector_6" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </BackgroundImage3>
                  </BackgroundImage10>
                  <HeadingBackgroundImageAndText1 text="Eventos e Conquistas" additionalClassNames="w-[237.5px]" />
                </div>
              </div>
              <div className="absolute left-[24px] top-[220px] w-[512px]">
                <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] text-[#364153] text-[14px]">Celebrando aprovações e marcos importantes</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[80px] left-[316px] top-[1300px] w-[896px]" data-name="Container">
            <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[4px] h-[80px] items-start left-0 pb-0 pt-[12px] px-[16px] rounded-[14px] top-0 w-[282.656px]" data-name="Container">
              <ContainerBackgroundImageAndText text="50+" />
              <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[117.36px] text-[#dbeafe] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Eventos realizados</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[4px] h-[80px] items-start left-[306.66px] pb-0 pt-[12px] px-[16px] rounded-[14px] top-0 w-[282.672px]" data-name="Container">
              <ContainerBackgroundImageAndText text="15+" />
              <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[117.44px] text-[#dbeafe] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Participações em podcasts</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[4px] h-[80px] items-start left-[613.33px] pb-0 pt-[12px] px-[16px] rounded-[14px] top-0 w-[282.656px]" data-name="Container">
              <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[40px] left-[117.17px] text-[#fdc700] text-[36px] text-center text-nowrap top-0 translate-x-[-50%]">10mil+</p>
              </div>
              <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[117.03px] text-[#dbeafe] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Alunos impactados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Seção Notas dos Alunos */}
      <div className="hidden md:flex absolute bg-white content-stretch flex-col items-start left-0 pb-[96px] pt-[96px] px-[16px] top-[6808px] w-[1528px]" data-name="StudentResultsSection">
        <div className="content-stretch flex flex-col gap-[64px] items-center w-full relative">
          {/* Mascote Formado - Decorativo */}
          <div className="absolute right-[40px] top-[-30px] z-10 pointer-events-none animate-bounce" style={{ animationDuration: '3s' }}>
            <img 
              src={imgMascoteFormado} 
              alt="Mascote Geração MIL" 
              className="w-[220px] h-auto object-contain drop-shadow-2xl bg-transparent"
              style={{ backgroundColor: 'transparent', mixBlendMode: 'normal' }}
            />
          </div>

          {/* Título da Seção */}
          <div className="content-stretch flex flex-col gap-[16px] items-center w-full">
            <h2 className="font-['Arimo:Bold',sans-serif] font-bold leading-[48px] text-[48px] text-center text-[#1c398e]">
              Resultados que <span className="text-[#fdc700]">Inspiram</span>
            </h2>
            <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[28px] text-[#4a5565] text-[18px] text-center max-w-[768px]">
              Conheça alguns dos nossos alunos que alcançaram excelentes notas e realizaram seus sonhos com o Geração MIL
            </p>
          </div>

          {/* Grid de Cards de Alunos - Responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[24px] w-full max-w-[1200px] px-[16px] md:px-[24px] lg:px-0">
            {/* Card Jeane Vitória */}
            <div className="bg-white rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden transition-transform hover:scale-105 cursor-pointer">
              <img 
                src={imgJeaneVitoria} 
                alt="Jeane Vitória - Nota 940 em Redação" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Card Ana Clara */}
            <div className="bg-white rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden transition-transform hover:scale-105 cursor-pointer">
              <img 
                src={imgAnaClara} 
                alt="Ana Clara - Nota 960 em Redação" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Card Hernandes */}
            <div className="bg-white rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden transition-transform hover:scale-105 cursor-pointer">
              <img 
                src={imgHernandes} 
                alt="Hernandes - Nota 940 em Redação" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Card Juliana Azevedo */}
            <div className="bg-white rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden transition-transform hover:scale-105 cursor-pointer">
              <img 
                src={imgJulianaAzevedo} 
                alt="Juliana Azevedo - Nota 920 em Redação" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Card Meiline Poliane */}
            <div className="bg-white rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden transition-transform hover:scale-105 cursor-pointer">
              <img 
                src={imgMeilinePoliane} 
                alt="Meiline Poliane - Nota 920 em Redação" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Card Heitor Abdala */}
            <div className="bg-white rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden transition-transform hover:scale-105 cursor-pointer">
              <img 
                src={imgHeitorAbdala} 
                alt="Heitor Abdala - Nota 920 em Redação" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Card Gisele Alice */}
            <div className="bg-white rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden transition-transform hover:scale-105 cursor-pointer">
              <img 
                src={imgGiseleAlice} 
                alt="Gisele Alice - Nota 900 em Redação" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Card Guilherme Barbosa */}
            <div className="bg-white rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden transition-transform hover:scale-105 cursor-pointer">
              <img 
                src={imgGuilhermeBarbosa} 
                alt="Guilherme Barbosa - Nota 920 em Redação" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Card Gustavo */}
            <div className="bg-white rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden transition-transform hover:scale-105 cursor-pointer">
              <img 
                src={imgGustavo} 
                alt="Gustavo - Nota 900 em Redação" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="content-stretch flex flex-col gap-[24px] items-center w-full">
            <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] text-[24px] text-center text-[#1c398e]">
              Você também pode ser o próximo!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('passo-a-passo');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#fdc700] h-[56px] px-[48px] rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#e6b600] hover:scale-105 transition-all flex items-center justify-center"
              data-conversion-id="btn-quero-fazer-parte"
            >
              <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[24px] text-[#1c398e] text-[16px] text-center text-nowrap">
                QUERO FAZER PARTE DESSA HISTÓRIA
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bg-[#f9fafb] h-[560px] left-0 top-[11284px] w-[1528px]" data-name="SocialMediaSection">
        <div className="absolute content-stretch flex flex-col gap-[16px] h-[92px] items-start left-[16px] top-[40px] w-[1496px]" data-name="Container">
          <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
            <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[48px] left-[596.5px] text-[#1c398e] text-[48px] text-center text-nowrap top-[-7.55px] translate-x-[-50%]">Siga nossas</p>
            <TextBackgroundImageAndText text="redes sociais" additionalClassNames="left-[748px] top-[-7.55px] w-[282.656px]" />
          </div>
          <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[748.63px] text-[#4a5565] text-[18px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Fique por dentro das novidades, dicas de estudo e motivação diária</p>
          </div>
        </div>
        <div className="absolute gap-[24px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[400px] left-[100px] top-[180px] w-[1328px]" data-name="Container">
          <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[14px] shrink-0" data-name="Container">
            <div aria-hidden="true" className="absolute border-4 border-[#fb2c36] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
            <BackgroundImage13>
              <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#fb2c36] relative rounded-[3.35544e+07px] shrink-0 size-[64px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
                    <TextBackgroundImageAndText1 text="▶" />
                  </div>
                </div>
                <ContainerBackgroundImage5 additionalClassNames="w-[81.563px]">
                  <HeadingBackgroundImageAndText3 text="YouTube" />
                  <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
                    <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] text-nowrap">@geracaomil</p>
                  </div>
                </ContainerBackgroundImage5>
              </div>
              <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-justify top-[-2px] w-[375px]">Aulas gratuitas, dicas de estudo e lives semanais com nossos professores</p>
              </div>
              <ContainerBackgroundImage3 additionalClassNames="bg-[#fef2f2]">
                <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
                  <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#c10007] text-[14px]">📹 Último vídeo:</p>
                </div>
                <BackgroundImage7>{`"Como fazer uma redação nota 1000 no ENEM"`}</BackgroundImage7>
              </ContainerBackgroundImage3>
              <a href="https://www.youtube.com/live/Rxj6QHEXTE4?si=JngzEb439W_1b5pG" target="_blank" rel="noopener noreferrer" className="bg-[#fb2c36] h-[48px] relative rounded-[10px] shrink-0 w-full transition-transform hover:scale-105 cursor-pointer" data-name="Link">
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[189.89px] text-[16px] text-center text-nowrap text-white top-[10px] translate-x-[-50%]">INSCREVER-SE NO CANAL</p>
              </a>
            </BackgroundImage13>
          </div>
          <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[14px] shrink-0" data-name="Container">
            <div aria-hidden="true" className="absolute border-4 border-[#f6339a] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
            <BackgroundImage13>
              <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="relative rounded-[3.35544e+07px] shrink-0 size-[64px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }}>
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
                    <TextBackgroundImageAndText1 text="📷" />
                  </div>
                </div>
                <ContainerBackgroundImage5 additionalClassNames="w-[95.219px]">
                  <HeadingBackgroundImageAndText3 text="Instagram" />
                  <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
                    <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">@geracaomil</p>
                  </div>
                </ContainerBackgroundImage5>
              </div>
              <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-justify top-[-2px] w-[374px]">Dicas diárias, histórias de aprovação e bastidores das aulas</p>
              </div>
              <ContainerBackgroundImage3 additionalClassNames="bg-[#fdf2f8]">
                <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
                  <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#c6005c] text-[14px]">✨ Novidade:</p>
                </div>
                <BackgroundImageAndText4 text="Stories diários com resumos de conteúdo" />
              </ContainerBackgroundImage3>
              <a href="https://www.instagram.com/geracaomil?igsh=eGR3b29uNWp3YnVk" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#ad46ff] h-[48px] relative rounded-[10px] shrink-0 to-[#f6339a] w-full transition-transform hover:scale-105 cursor-pointer" data-name="Link">
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[190.52px] text-[16px] text-center text-nowrap text-white top-[10px] translate-x-[-50%]">SEGUIR NO INSTAGRAM</p>
              </a>
            </BackgroundImage13>
          </div>
          <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[14px] shrink-0" data-name="Container">
            <div aria-hidden="true" className="absolute border-4 border-[#ff6900] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
            <BackgroundImage13>
              <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#ff6900] relative rounded-[3.35544e+07px] shrink-0 size-[64px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
                    <TextBackgroundImageAndText1 text="🎙️" />
                  </div>
                </div>
                <ContainerBackgroundImage5 additionalClassNames="w-[85px]">
                  <HeadingBackgroundImageAndText3 text="Podcast" />
                  <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
                    <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] text-nowrap">@podcastgeracaomil</p>
                  </div>
                </ContainerBackgroundImage5>
              </div>
              <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-justify top-[-2px] w-[375px]">Conversas inspiradoras com aprovados e especialistas em educação</p>
              </div>
              <ContainerBackgroundImage3 additionalClassNames="bg-[#fff7ed]">
                <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
                  <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#c2410c] text-[14px]">🎧 Destaque:</p>
                </div>
                <BackgroundImage7>{"Episódios semanais sobre vestibulares"}</BackgroundImage7>
              </ContainerBackgroundImage3>
              <a href="https://www.instagram.com/podcastgeracaomil?igsh=eHNuYzhvZ3BuNDM1" target="_blank" rel="noopener noreferrer" className="bg-[#ff6900] h-[48px] relative rounded-[10px] shrink-0 w-full transition-transform hover:scale-105 cursor-pointer" data-name="Link">
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[190.52px] text-[16px] text-center text-nowrap text-white top-[10px] translate-x-[-50%]">OUVIR O PODCAST</p>
              </a>
            </BackgroundImage13>
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute content-stretch flex-col h-[1008px] items-start left-0 pb-0 pt-[96px] px-0 top-[11844px] w-[1528px]" data-name="MaterialsSection">
        <BackgroundImage />
        <ContainerBackgroundImage1 additionalClassNames="h-[816px]">
          <div className="h-[92px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute h-[48px] left-0 top-0 w-[1496px]" data-name="Heading 2">
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[48px] left-[645.64px] text-[#1c398e] text-[48px] text-center text-nowrap top-0 translate-x-[-50%]">Materiais</p>
              <TextBackgroundImageAndText text="didáticos" additionalClassNames="left-[757.13px] top-0 w-[204.734px]" />
            </div>
            <div className="absolute h-[28px] left-[364px] top-[64px] w-[768px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[384.38px] text-[#4a5565] text-[18px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Conteúdo completo e atualizado para o ENEM e principais vestibulares do Brasil</p>
            </div>
          </div>
          <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[364px] relative shrink-0 w-full" data-name="Container">
            <ContainerBackgroundImage7 additionalClassNames="[grid-area:1_/_1]">
              <div className="absolute bg-[#1c398e] content-stretch flex h-[192px] items-center justify-center left-[24px] rounded-[10px] top-[24px] w-[308px]" data-name="Container">
                <IconBackgroundImage5>
                  <path d="M32 18.667V56.0003" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                  <path d={svgPaths.p26e14300} id="Vector_2" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                </IconBackgroundImage5>
              </div>
              <BackgroundImageAndText1 text="Apostilas" additionalClassNames="left-[24px] top-[232px] w-[308px]" />
              <ParagraphBackgroundImageAndText7 text="Material completo com teoria e exercícios" />
              <ContainerBackgroundImageAndText1 text="12 VOLUMES" />
            </ContainerBackgroundImage7>
            <ContainerBackgroundImage7 additionalClassNames="[grid-area:1_/_2]">
              <div className="absolute bg-[#1c398e] content-stretch flex h-[192px] items-center justify-center left-[24px] rounded-[10px] top-[24px] w-[308px]" data-name="Container">
                <IconBackgroundImage5>
                  <path d={svgPaths.p20c372c0} id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                  <path d={svgPaths.p3b915500} id="Vector_2" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                </IconBackgroundImage5>
              </div>
              <BackgroundImageAndText1 text="Videoaulas Gravadas" additionalClassNames="left-[24px] top-[232px] w-[308px]" />
              <ParagraphBackgroundImageAndText7 text="Mais de 250 aulas em alta definição (5 a 10 por disciplina)" />
              <ContainerBackgroundImageAndText1 text="+250 AULAS" />
            </ContainerBackgroundImage7>
            <ContainerBackgroundImage7 additionalClassNames="[grid-area:1_/_3]">
              <div className="absolute bg-[#1c398e] content-stretch flex h-[192px] items-center justify-center left-[24px] rounded-[10px] top-[24px] w-[308px]" data-name="Container">
                <IconBackgroundImage5>
                  <path d={svgPaths.p1a6fb2f0} id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                  <path d={svgPaths.p230ed600} id="Vector_2" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                  <path d="M26.6667 24H21.3333" id="Vector_3" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                  <path d="M42.6666 34.667H21.3333" id="Vector_4" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                  <path d="M42.6666 45.333H21.3333" id="Vector_5" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                </IconBackgroundImage5>
              </div>
              <BackgroundImageAndText1 text="Simulados" additionalClassNames="left-[24px] top-[232px] w-[308px]" />
              <ParagraphBackgroundImageAndText7 text="Provas completas estilo ENEM" />
              <ContainerBackgroundImageAndText1 text="SEMANAIS" />
            </ContainerBackgroundImage7>
            <ContainerBackgroundImage7 additionalClassNames="[grid-area:1_/_4]">
              <div className="absolute bg-[#1c398e] content-stretch flex h-[192px] items-center justify-center left-[24px] rounded-[10px] top-[24px] w-[308px]" data-name="Container">
                <IconBackgroundImage5>
                  <path d={svgPaths.p8652380} id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                  <path d={svgPaths.p1ed21fc0} id="Vector_2" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                </IconBackgroundImage5>
              </div>
              <BackgroundImageAndText1 text="Exercícios" additionalClassNames="left-[24px] top-[232px] w-[308px]" />
              <ParagraphBackgroundImageAndText7 text="Listas com gabarito • Liberadas gradualmente" />
              <ContainerBackgroundImageAndText1 text="+400 QUESTÕES" />
            </ContainerBackgroundImage7>
          </div>
          <div className="bg-gradient-to-r from-[#1c398e] h-[264px] relative rounded-[16px] shrink-0 to-[#193cb8] w-full" data-name="Container">
            <div className="absolute h-[40px] left-[48px] top-[48px] w-[1400px]" data-name="Heading 3">
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[40px] left-[700.34px] text-[36px] text-center text-nowrap text-white top-0 translate-x-[-50%]">Tenha acesso a todo esse conteúdo</p>
            </div>
            <div className="absolute h-[28px] left-[412px] top-[104px] w-[672px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[336.28px] text-[#dbeafe] text-[18px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Escolha o plano ideal para você e comece a estudar hoje mesmo</p>
            </div>
            <a 
              href="#planos"
              id="btn-ver-planos-hero"
              data-track="click-navigation"
              data-destination="planos"
              data-section="hero"
              className="absolute bg-[#fdc700] h-[60px] left-[617.97px] rounded-[3.35544e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[156px] w-[260.063px] cursor-pointer hover:bg-[#ffdf20] transition-colors flex items-center justify-center" 
              data-name="Button"
            >
              <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[28px] text-[#1c398e] text-[18px] text-center text-nowrap">VER PLANOS E PREÇOS</p>
            </a>
          </div>
        </ContainerBackgroundImage1>
      </div>
      <div className="absolute content-stretch flex flex-col h-[916px] items-start left-0 pb-0 pt-[64px] px-0 top-[12852px] w-[1528px]" data-name="InstagramGallery">
        <BackgroundImage1 />
        <div className="h-[788px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute h-[164px] left-[16px] top-0 w-[1496px]" data-name="Container">
            <div className="absolute bg-gradient-to-r from-[#ad46ff] h-[56px] left-[654.2px] rounded-[3.35544e+07px] to-[#f6339a] top-0 w-[187.578px]" data-name="Container">
              <div className="absolute content-stretch flex h-[32px] items-start left-[24px] top-[12px] w-[32.953px]" data-name="Text">
                <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-center text-white">📷</p>
              </div>
              <div className="absolute h-[24px] left-[64.95px] top-[16px] w-[98.625px]" data-name="Text">
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[49.5px] text-[16px] text-center text-nowrap text-white top-[-2px] translate-x-[-50%]">@geracaomil</p>
              </div>
            </div>
            <div className="absolute h-[48px] left-0 top-[72px] w-[1496px]" data-name="Heading 2">
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[48px] left-[634.2px] text-[#1c398e] text-[48px] text-center text-nowrap top-0 translate-x-[-50%]">Nosso</p>
              <TextBackgroundImageAndText text="Instagram" additionalClassNames="left-[709.8px] top-0 w-[228.5px]" />
            </div>
            <div className="absolute h-[28px] left-0 top-[136px] w-[1496px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[748.03px] text-[#4a5565] text-[18px] text-center text-nowrap top-[-1px] translate-x-[-50%]">📸 Aulões presenciais • 🎙️ Participações em podcasts • 👨‍🎓 Momentos em sala • 🎉 Eventos e conquistas</p>
            </div>
          </div>
          <div className="absolute gap-[16px] grid grid-cols-[repeat(6,_minmax(0px,_1fr))] grid-rows-[repeat(3,_236px)] left-[16px] top-[192.45px] w-[1496px]" data-name="Container">
            <div className="[grid-area:1_/_2] overflow-hidden relative rounded-[10px]" data-name="Container">
              <img alt="" className="size-full object-cover" src={imgImage2} />
            </div>
            <div className="[grid-area:1_/_5] overflow-hidden relative rounded-[10px]" data-name="Container">
              <img alt="" className="size-full object-cover" src={imgImage7} />
            </div>
            <div className="[grid-area:2_/_4] overflow-hidden relative rounded-[10px]" data-name="Container">
              <img alt="" className="size-full object-cover" src={imgImage11} />
            </div>
            <div className="[grid-area:2_/_5] overflow-hidden relative rounded-[10px]" data-name="Container">
              <img alt="" className="size-full object-cover" src={imgImage12} />
            </div>
            <div className="[grid-area:2_/_6] overflow-hidden relative rounded-[10px]" data-name="Container">
              <BackgroundImage14>
                <TextBackgroundImageAndText3 text="❤️" />
                <div className="h-[41px] shrink-0 w-[4px]" />
              </BackgroundImage14>
              <ImageBackgroundImage additionalClassNames="size-full object-cover" />
            </div>
            <div className="[grid-area:3_/_1] overflow-hidden relative rounded-[10px]" data-name="Container">
              <ContainerBackgroundImage additionalClassNames="size-full" />
            </div>
            <div className="[grid-area:3_/_2] overflow-hidden relative rounded-[10px]" data-name="Container">
              <ContainerBackgroundImage additionalClassNames="size-full" />
            </div>
            <div className="[grid-area:3_/_3] overflow-hidden relative rounded-[10px]" data-name="Container">
              <ContainerBackgroundImage additionalClassNames="size-full" />
            </div>
            <div className="[grid-area:3_/_4] overflow-hidden relative rounded-[10px]" data-name="Container">
              <ContainerBackgroundImage additionalClassNames="size-full" />
            </div>
            <div className="[grid-area:1_/_3] overflow-hidden relative rounded-[10px]" data-name="image 1">
              <img alt="" className="size-full object-cover" src={imgImage14} />
            </div>
            <div className="[grid-area:1_/_1] overflow-hidden relative rounded-[10px]" data-name="Container">
              <img alt="" className="size-full object-cover" src={imgImage13} />
            </div>
            <div className="[grid-area:1_/_6] overflow-hidden relative rounded-[10px]" data-name="image 5">
              <img alt="" className="size-full object-cover" src={imgImage5} />
            </div>
            <div className="[grid-area:1_/_4] overflow-hidden relative rounded-[10px]" data-name="Container">
              <img alt="" className="size-full object-cover" src={imgImage6} />
            </div>
            <div className="[grid-area:2_/_2] overflow-hidden relative rounded-[10px]" data-name="image 8">
              <img alt="" className="size-full object-cover" src={imgImage8} />
            </div>
            <div className="[grid-area:2_/_3] overflow-hidden relative rounded-[10px]" data-name="image 10">
              <img alt="" className="size-full object-cover" src={imgImage10} />
            </div>
            <button className="[grid-area:2_/_1] block cursor-pointer overflow-hidden relative rounded-[10px]" data-name="Container">
              <BackgroundImage14>
                <div className="h-[36px] relative shrink-0 w-[41.203px] z-20" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[30px] text-left text-nowrap text-white top-0">❤️</p>
                  </div>
                </div>
              </BackgroundImage14>
              <img alt="" className="absolute inset-0 size-full object-cover" src={imgImage4} />
            </button>
          </div>
          <a href="https://www.instagram.com/geracaomil?igsh=eGR3b29uNWp3YnVk" target="_blank" rel="noopener noreferrer" className="absolute bg-gradient-to-r from-[#ad46ff] h-[56px] left-[640.02px] rounded-[3.35544e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#f6339a] top-[732px] w-[247.969px] transition-transform hover:scale-105 cursor-pointer" data-name="Link">
            <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[124.5px] text-[16px] text-center text-nowrap text-white top-[14px] translate-x-[-50%]">SEGUIR NO INSTAGRAM</p>
          </a>
        </div>
      </div>
      <div id="faq-desktop" className="hidden md:flex absolute content-stretch flex-col h-[1136px] items-start left-0 pb-0 pt-[96px] px-[380px] top-[17554px] w-[1528px] overflow-hidden" data-name="FAQSection">
        <BackgroundImage />
        <div className="content-stretch flex flex-col gap-[48px] h-[944px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="h-[144px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute bg-[#fdc700] content-stretch flex h-[36px] items-start left-[354.5px] px-[16px] py-[8px] rounded-[3.35544e+07px] top-0 w-[58.984px]" data-name="Container">
              <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1c398e] text-[14px] text-center text-nowrap">FAQ</p>
            </div>
            <div className="absolute h-[48px] left-0 top-[52px] w-[768px]" data-name="Heading 2">
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[48px] left-[263.38px] text-[#1c398e] text-[48px] text-center text-nowrap top-0 translate-x-[-50%]">Perguntas</p>
              <TextBackgroundImageAndText text="frequentes" additionalClassNames="left-[382.48px] top-0 w-[242.625px]" />
            </div>
            <div className="absolute h-[28px] left-0 top-[116px] w-[768px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[383.53px] text-[#4a5565] text-[18px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Tire suas dúvidas sobre o curso e nossa metodologia</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
            <FAQItem 
              question="Como funciona a plataforma de estudos?"
              answer="Nossa plataforma é 100% online e você tem acesso a todas as aulas ao vivo e gravadas, materiais didáticos, exercícios e simulados. Você pode estudar no seu ritmo, quando e onde quiser, com acesso ilimitado 24/7."
              defaultOpen={true}
            />
            <FAQItem 
              question="Qual a diferença entre os planos oferecidos?"
              answer="Oferecemos planos com diferentes durações e benefícios. O plano básico inclui acesso às videoaulas e materiais. Os planos premium incluem correção de redação ilimitada, monitorias ao vivo, simulados personalizados e acompanhamento individual."
            />
            <FAQItem 
              question="Os professores são qualificados?"
              answer="Sim! Nosso time é formado por mestres, doutores e professores com vasta experiência em preparação para vestibulares. Todos são especialistas em suas áreas e focados em aprovação."
            />
            <FAQItem 
              question="Como funciona a correção de redação?"
              answer="Nos planos que incluem correção de redação, você pode enviar suas redações pela plataforma e recebe feedback detalhado em até 5 dias, seguindo os critérios do ENEM e principais vestibulares."
            />
            <FAQItem 
              question="Posso tirar dúvidas com os professores?"
              answer="Sim! Oferecemos plantão de dúvidas online, fórum de discussão e, nos planos premium, monitorias ao vivo semanais onde você pode interagir diretamente com os professores."
            />
            <FAQItem 
              question="Tem garantia de aprovação?"
              answer="Garantimos dedicação total da nossa equipe no seu preparo. Nossa taxa de aprovação é de 95%, mas o resultado depende também do seu empenho e dedicação aos estudos."
            />
            <FAQItem 
              question="Quando terei acesso ao conteúdo após a compra?"
              answer="Após concluir sua compra, você terá acesso imediato à plataforma para criar seu cadastro. Dentro de até 48 horas após a confirmação do pagamento e realização da matrícula, você terá acesso aos slides, apostilas em PDF, simulados e cronogramas. As videoaulas gravadas (mais de 250 aulas, sendo 5 a 10 por disciplina) são disponibilizadas progressivamente: primeiras aulas imediatamente, depois 5 a 10 aulas/mês a partir de fevereiro. As aulas ao vivo começam em fevereiro de 2025."
            />
          </div>
          <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute h-[24px] left-0 top-0 w-[768px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[383.81px] text-[#4a5565] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Não encontrou a resposta que procurava?</p>
            </div>
            <a 
              href="https://wa.me/message/F2DEX6QPKWSAB1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bg-[#1c398e] h-[56px] left-[287.27px] rounded-[10px] top-[40px] w-[193.453px] transition-transform hover:scale-105 cursor-pointer" 
              data-name="Button"
            >
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[97.5px] text-[16px] text-center text-nowrap text-white top-[14px] translate-x-[-50%]">Entre em contato</p>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute bg-[#1c398e] content-stretch flex-col gap-[48px] h-[277px] items-start left-0 px-[16px] py-0 top-[18831px] w-[1528px]" data-name="Footer">
        <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[176px] relative shrink-0 w-full" data-name="Container">
          <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
            <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 3">
              <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-white">GERAÇÃO MIL</p>
            </div>
            <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#bedbff] text-[16px] text-justify top-[-2px] w-[335px]">Curso pré-vestibular. Preparando você para conquistar sua aprovação no ENEM e principais vestibulares.</p>
            </div>
            <div className="content-stretch flex gap-[12px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
              <BackgroundImage10 additionalClassNames="size-[40px]">
                <BackgroundImage2 additionalClassNames="relative shrink-0">
                  <path d={svgPaths.paabacf0} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </BackgroundImage2>
              </BackgroundImage10>
              <BackgroundImage10 additionalClassNames="size-[40px]">
                <BackgroundImage6 additionalClassNames="relative shrink-0">
                  <g clipPath="url(#clip0_1_1150)" id="Icon">
                    <path d={svgPaths.p2c0e0e80} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p330915b8} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M14.5833 5.41602H14.5917" id="Vector_3" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1150">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </BackgroundImage6>
              </BackgroundImage10>
              <BackgroundImage10 additionalClassNames="size-[40px]">
                <BackgroundImage2 additionalClassNames="relative shrink-0">
                  <path d={svgPaths.p3a470400} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p212a8900} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </BackgroundImage2>
              </BackgroundImage10>
            </div>
          </div>
          <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
            <HeadingBackgroundImageAndText4 text="Links Rápidos" />
            <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="List">
              <a 
                href="https://geracaomil.com.br/login/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[24px] relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity block" 
                data-name="List Item"
              >
                <LinkBackgroundImageAndText text="Plataforma" additionalClassNames="w-[76.406px]" />
              </a>
              <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
                <LinkBackgroundImageAndText text="Sobre nós" additionalClassNames="w-[70.813px]" />
              </div>
              <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
                <LinkBackgroundImageAndText text="Depoimentos" additionalClassNames="w-[95.031px]" />
              </div>
              <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
                <LinkBackgroundImageAndText text="FAQ" additionalClassNames="w-[29.266px]" />
              </div>
            </div>
          </div>
          <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
            <HeadingBackgroundImageAndText4 text="Cursos" />
            <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="List">
              <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
                <LinkBackgroundImageAndText text="Extensivo Anual" additionalClassNames="w-[110.813px]" />
              </div>
              <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
                <LinkBackgroundImageAndText text="Semi-intensivo" additionalClassNames="w-[104.406px]" />
              </div>
              <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
                <LinkBackgroundImageAndText text="Intensivo ENEM" additionalClassNames="w-[110.766px]" />
              </div>
              <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
                <LinkBackgroundImageAndText text="Medicina Específico" additionalClassNames="w-[138.453px]" />
              </div>
            </div>
          </div>
          <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
            <HeadingBackgroundImageAndText4 text="Contato" />
            <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="List">
              <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
                <IconBackgroundImage6 additionalClassNames="absolute left-0 top-[4px]">
                  <path d={svgPaths.p625a980} id="Vector" stroke="var(--stroke-0, #BEDBFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p18c84c80} id="Vector_2" stroke="var(--stroke-0, #BEDBFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </IconBackgroundImage6>
                <div className="absolute h-[24px] left-[26px] top-0 w-[300.609px]" data-name="Text">
                  <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#bedbff] text-[16px] text-nowrap top-[-2px]">Salvador, BA</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="List Item">
                <BackgroundImage5 additionalClassNames="relative shrink-0">
                  <g clipPath="url(#clip0_1_1143)" id="Icon">
                    <path d={svgPaths.p32db8200} id="Vector" stroke="var(--stroke-0, #BEDBFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1143">
                      <rect fill="white" height="18" width="18" />
                    </clipPath>
                  </defs>
                </BackgroundImage5>
                <div className="h-[24px] relative shrink-0 w-[115.313px]" data-name="Text">
                  <BackgroundImageAndText6 text="(71) 98713-5175" />
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="List Item">
                <IconBackgroundImage6 additionalClassNames="relative shrink-0">
                  <path d={svgPaths.p1b122e80} id="Vector" stroke="var(--stroke-0, #BEDBFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p17a68100} id="Vector_2" stroke="var(--stroke-0, #BEDBFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </IconBackgroundImage6>
                <div className="h-[24px] relative shrink-0 w-[205.375px]" data-name="Text">
                  <BackgroundImageAndText6 text="contato@geracaomil.com.br" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[53px] items-center justify-between pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#193cb8] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="h-[20px] relative shrink-0 w-[312.5px]" data-name="Paragraph">
            <BackgroundImageAndText7 text="© 2025 Geração MIL. Todos os direitos reservados." />
          </div>
          <div className="h-[20px] relative shrink-0 w-[253.344px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
              <div className="h-[20px] relative shrink-0 w-[91.359px]" data-name="Link">
                <BackgroundImageAndText7 text="Termos de Uso" />
              </div>
              <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Link">
                <BackgroundImageAndText7 text="Política de Privacidade" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="inscreva-se" className="absolute min-h-[900px] left-0 overflow-clip top-[64px] md:top-[80px] w-full md:w-[1528px]" data-name="HeroSection" style={{ backgroundImage: "linear-gradient(153.585deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 50%, rgb(28, 57, 142) 100%)" }}>
        <div className="absolute h-full left-0 opacity-20 top-0 w-full" data-name="Container">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer} />
        </div>
        <div className="hidden md:block absolute bg-[#fdc700] blur-3xl filter left-[-128px] opacity-20 rounded-[3.35544e+07px] size-[256px] top-[-128px]" data-name="Container" />
        <div className="hidden md:block absolute bg-[#155dfc] blur-3xl filter left-[1336px] opacity-20 rounded-[3.35544e+07px] size-[384px] top-[567px]" data-name="Container" />
        
        {/* Mascote com Caneta - Hero Decorativo - Desktop Only */}
        <div className="hidden md:block absolute left-[60px] bottom-[40px] z-10 pointer-events-none" style={{ animation: 'float 4s ease-in-out infinite' }}>
          <img 
            src={imgMascoteCaneta} 
            alt="Mascote Geração MIL" 
            className="w-[180px] h-auto object-contain drop-shadow-2xl bg-transparent"
            style={{ backgroundColor: 'transparent', mixBlendMode: 'normal' }}
          />
        </div>
        
        {/* VERSÃO MOBILE - Hero Section */}
        <Suspense fallback={<div className="block md:hidden w-full h-screen bg-gradient-to-br from-[#1c398e] to-[#193cb8]" />}>
          <HeroSectionMobile />
        </Suspense>
        
        {/* VERSÃO DESKTOP - Hero Section */}
        <div className="hidden md:block absolute h-[740px] left-[16px] top-[80px] w-[1496px]" data-name="Container">
          <div className="absolute h-[290px] left-0 top-[225px] w-[732px]" data-name="Container">
            <div className="absolute bg-[#fdc700] content-stretch flex h-[28px] items-center justify-center left-0 px-[10px] py-[5px] rounded-[3.35544e+07px] top-0 w-[150px] z-10" data-name="Container">
              <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#1c398e] text-[8px] text-nowrap">O MELHOR DO BRASIL</p>
            </div>
            <div className="absolute h-[150px] left-0 top-[60px] w-[732px]" data-name="Heading 2">
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[75px] left-0 text-[60px] text-nowrap text-white top-0">O curso pré-vestibular</p>
              <div className="absolute content-stretch flex h-[75px] items-center left-0 top-[75px] w-[732px]" data-name="Text">
                <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[75px] relative shrink-0 text-[#fdc700] text-[60px] text-nowrap">mais completo</p>
                <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[75px] relative shrink-0 text-[60px] text-white ml-[12px]">do Brasil</p>
              </div>
            </div>
            <div className="absolute h-[56px] left-0 top-[234px] w-[732px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#dbeafe] text-[20px] text-justify top-0 w-[731px]">Prepare-se para o ENEM e principais vestibulares com o melhor método de ensino, professores especializados e plataforma completa de estudos.</p>
            </div>
          </div>
          
          {/* FORMULÁRIO DESKTOP */}
          <div id="formulario" className="hidden md:flex absolute bg-[rgba(255,255,255,0.95)] content-stretch flex-col gap-[24px] h-[740px] items-center justify-center left-[764px] pb-[40px] pt-[40px] px-[48px] rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[732px]" data-name="Container">
            {/* Logo GM Oficial com Círculo Amarelo */}
            <div className="relative flex items-center justify-center w-[160px] h-[160px]">
              {/* Círculo amarelo como botão */}
              <div className="absolute w-[140px] h-[140px] bg-[#fdc700] rounded-full shadow-[0px_10px_20px_-5px_rgba(0,0,0,0.3)]"></div>
              {/* Logo GM */}
              <img 
                src={imgLogoGMNovo}
                alt="Geração MIL - Logo GM" 
                className="relative z-10 w-[110px] h-[110px] object-contain"
              />
            </div>

            {/* Título */}
            <div className="content-stretch flex flex-col gap-[12px] items-center w-full">
              <HeadingBackgroundImageAndText text="Inscreva-se agora!" />
              <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[28px] text-[#4a5565] text-[18px] text-center w-full">
                Comece sua jornada rumo à aprovação
              </p>
            </div>

            {/* Lista de Benefícios */}
            <div className="content-stretch flex flex-col gap-[16px] w-full">
              <div className="flex items-center gap-[12px]">
                <div className="w-[24px] h-[24px] bg-[#1c398e] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#fdc700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] text-[#4a5565] text-[16px]">
                  Acesso completo à plataforma de estudos
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[24px] h-[24px] bg-[#1c398e] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#fdc700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] text-[#4a5565] text-[16px]">
                  Professores especializados e experientes
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[24px] h-[24px] bg-[#1c398e] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#fdc700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] text-[#4a5565] text-[16px]">
                  Material didático completo e atualizado
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[24px] h-[24px] bg-[#1c398e] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#fdc700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] text-[#4a5565] text-[16px]">
                  Suporte e acompanhamento personalizado
                </p>
              </div>
            </div>

            {/* Informações sobre Acesso aos Conteúdos */}
            <div className="w-full bg-gradient-to-r from-[#1c398e]/5 to-[#fdc700]/5 rounded-[12px] p-[20px] border-l-[4px] border-[#fdc700]" data-name="AccessInfo">
              <div className="content-stretch flex flex-col gap-[12px] w-full">
                <div className="flex items-start gap-[8px]">
                  <span className="text-[20px] flex-shrink-0">📅</span>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[22px] text-[#1c398e] text-[15px]">
                    Aulas ao vivo começam em fevereiro
                  </p>
                </div>
                <div className="flex items-start gap-[8px]">
                  <span className="text-[20px] flex-shrink-0">⚡</span>
                  <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[22px] text-[#4a5565] text-[14px]">
                    <strong className="font-['Arimo:Bold',sans-serif] text-[#1c398e]">+250 videoaulas gravadas</strong> (5 a 10 por disciplina) disponibilizadas progressivamente. Slides e apostilas têm acesso em até 48h
                  </p>
                </div>
                <div className="flex items-start gap-[8px]">
                  <span className="text-[20px] flex-shrink-0">📚</span>
                  <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[22px] text-[#4a5565] text-[14px]">
                    <strong className="font-['Arimo:Bold',sans-serif] text-[#1c398e]">Acesso completo a todos os cronogramas</strong> desde a confirmação do pagamento e inscrição em curso, após 48h
                  </p>
                </div>
              </div>
            </div>

            {/* Botão de CTA */}
            <a 
              href="#planos"
              id="btn-inscricao-formulario"
              data-track="click-navigation"
              data-section="formulario-inscricao"
              data-action="garantir-vaga"
              data-destination="planos"
              className="bg-[#fdc700] h-[52px] w-full rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#e6b600] hover:scale-105 transition-all flex items-center justify-center mt-[16px]" 
              data-name="Button"
            >
              <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] text-[#1c398e] text-[16px] text-center text-nowrap">
                🎓 GARANTIR MINHA VAGA AGORA
              </p>
            </a>

            {/* Texto Legal */}
            <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] text-[#6a7282] text-[12px] text-center w-full">
              Conheça nossa promoção especial
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute content-stretch flex-col h-[1272px] items-start left-0 pb-0 pt-[96px] px-0 top-[9266.55px] w-[1528px]" data-name="PlatformSection">
        <BackgroundImage1 />
        <div className="h-[1032px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute h-[120px] left-[16px] top-0 w-[1496px]" data-name="Container">
            <div className="absolute h-[48px] left-0 top-0 w-[1496px]" data-name="Heading 2">
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[48px] left-[554.5px] text-[#1c398e] text-[48px] text-center text-nowrap top-0 translate-x-[-50%]">Plataforma</p>
              <TextBackgroundImageAndText text="multiplataforma" additionalClassNames="left-[694.98px] top-0 w-[369.5px]" />
            </div>
            <div className="absolute h-[56px] left-[364px] top-[64px] w-[768px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[384.05px] text-[#4a5565] text-[18px] text-center top-[-1px] translate-x-[-50%] w-[730px]">Estude para o ENEM e vestibulares onde, quando e como quiser. Nossa plataforma funciona perfeitamente em todos os dispositivos.</p>
            </div>
          </div>
          <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#fdc700] h-[244px] items-start left-[316px] pb-0 pt-[32px] px-[32px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] to-[#ffdf20] top-[168px] w-[896px]" data-name="Container">
            <div className="content-stretch flex gap-[16px] h-[180px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="relative shrink-0 size-[96px]" data-name="Image (Mascote Geração MIL)">
                <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageMascoteGeracaoMil} />
              </div>
              <div className="basis-0 grow h-[180px] min-h-px min-w-px relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                  <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 3">
                    <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#1c398e] text-[24px]">📢 Informações Importantes da Plataforma</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
                      <BackgroundImage2 additionalClassNames="absolute left-0 top-[4px]">
                        <path d="M6.66666 1.66699V5.00033" id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M13.3333 1.66699V5.00033" id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p1f6ff800} id="Vector_3" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M2.5 8.33301H17.5" id="Vector_4" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </BackgroundImage2>
                      <BackgroundImageAndText5 text="⚡ Acesso aos cronogramas após confirmação do pagamento e inscrição em curso (48h)" additionalClassNames="w-[465.531px]" />
                    </div>
                    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
                      <BackgroundImage2 additionalClassNames="absolute left-0 top-[4px]">
                        <path d={svgPaths.p24bc3d00} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p3e238c80} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </BackgroundImage2>
                      <BackgroundImageAndText5 text="📹 +250 videoaulas gravadas (5 a 10 por disciplina) disponibilizadas progressivamente. Acesso em até 48h" additionalClassNames="w-[477.922px]" />
                    </div>
                    <div className="bg-[#1c398e] h-[60px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
                      <BackgroundImage3 additionalClassNames="absolute left-[16px] top-[20px]">
                        <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M12 6V12L16 14" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </BackgroundImage3>
                      <div className="absolute h-[28px] left-[52px] top-[16px] w-[473.938px]" data-name="Paragraph">
                        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[18px] text-nowrap text-white top-[-1px]">🎓 AULAS AO VIVO COMEÇAM EM FEVEREIRO DE 2025!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white content-stretch flex flex-col gap-[48px] h-[572px] items-start left-[16px] pb-0 pt-[48px] px-[48px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[460px] w-[1496px]" data-name="Container">
            <div className="h-[180px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute h-[180px] left-0 top-0 w-[445.328px]" data-name="Container">
                <div className="absolute bg-[#1c398e] content-stretch flex items-center justify-center left-[182.66px] rounded-[16px] size-[80px] top-0" data-name="Container">
                  <IconBackgroundImage4>
                    <path d={svgPaths.p392b4600} id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                    <path d="M13.3333 35H26.6667" id="Vector_2" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                    <path d="M20 28.333V34.9997" id="Vector_3" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                  </IconBackgroundImage4>
                </div>
                <BackgroundImageAndText1 text="Desktop" additionalClassNames="left-0 top-[96px] w-[445.328px]" />
                <div className="absolute h-[48px] left-0 top-[132px] w-[445.328px]" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[222.84px] text-[#4a5565] text-[16px] text-justify text-center top-[-2px] translate-x-[-50%] w-[408px]">Aproveite a tela grande do computador para estudar com conforto</p>
                </div>
              </div>
              <div className="absolute h-[180px] left-[477.33px] top-0 w-[445.328px]" data-name="Container">
                <div className="absolute bg-[#1c398e] content-stretch flex items-center justify-center left-[182.66px] rounded-[16px] size-[80px] top-0" data-name="Container">
                  <IconBackgroundImage4>
                    <path d={svgPaths.p1c30a200} id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                    <path d="M20 30H20.0167" id="Vector_2" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                  </IconBackgroundImage4>
                </div>
                <BackgroundImageAndText1 text="Tablet" additionalClassNames="left-0 top-[96px] w-[445.328px]" />
                <div className="absolute h-[24px] left-0 top-[132px] w-[445.328px]" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[222.38px] text-[#4a5565] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Ideal para fazer anotações e revisar conteúdos</p>
                </div>
              </div>
              <div className="absolute h-[180px] left-[954.66px] top-0 w-[445.344px]" data-name="Container">
                <div className="absolute bg-[#1c398e] content-stretch flex items-center justify-center left-[182.67px] rounded-[16px] size-[80px] top-0" data-name="Container">
                  <IconBackgroundImage4>
                    <path d={svgPaths.p32126000} id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                    <path d="M20 30H20.0167" id="Vector_2" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                  </IconBackgroundImage4>
                </div>
                <BackgroundImageAndText1 text="Smartphone" additionalClassNames="left-0 top-[96px] w-[445.344px]" />
                <div className="absolute h-[24px] left-0 top-[132px] w-[445.344px]" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[222.81px] text-[#4a5565] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Estude em qualquer lugar, direto do seu celular</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#1c398e] h-[248px] relative rounded-[14px] shrink-0 to-[#193cb8] w-full" data-name="Container">
              <div className="size-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[32px] px-[32px] relative size-full">
                  <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 3">
                    <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-center text-white">Recursos da plataforma</p>
                  </div>
                  <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute content-stretch flex flex-col gap-[8px] h-[52px] items-start left-0 top-0 w-[429.328px]" data-name="Container">
                      <HeadingBackgroundImageAndText5 text="📹 Videoaulas HD" />
                      <ParagraphBackgroundImageAndText9 text="Aulas gravadas com altíssima qualidade de imagem e som" />
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[8px] h-[52px] items-start left-[453.33px] top-0 w-[429.328px]" data-name="Container">
                      <HeadingBackgroundImageAndText5 text="📚 Material completo" />
                      <ParagraphBackgroundImageAndText9 text="PDFs, resumos, exercícios e simulados para download" />
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[8px] h-[52px] items-start left-[906.66px] top-0 w-[429.344px]" data-name="Container">
                      <HeadingBackgroundImageAndText5 text="⏰ Acesso ilimitado" />
                      <ParagraphBackgroundImageAndText9 text="Estude 24/7 no seu ritmo, sem restrições de horário" />
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[8px] h-[52px] items-start left-0 top-[76px] w-[429.328px]" data-name="Container">
                      <HeadingBackgroundImageAndText5 text="✍️ Correção de redação" />
                      <ParagraphBackgroundImageAndText9 text="Envie suas redações e receba feedback detalhado" />
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[8px] h-[52px] items-start left-[453.33px] top-[76px] w-[429.328px]" data-name="Container">
                      <HeadingBackgroundImageAndText5 text="📊 Relatórios" />
                      <ParagraphBackgroundImageAndText9 text="Acompanhe seu progresso com estatísticas detalhadas" />
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[8px] h-[52px] items-start left-[906.66px] top-[76px] w-[429.344px]" data-name="Container">
                      <HeadingBackgroundImageAndText5 text="🎯 Simulados" />
                      <ParagraphBackgroundImageAndText9 text="Teste seus conhecimentos com provas estilo ENEM" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Sections - Lazy Loaded for Performance */}
      <Suspense fallback={null}>
        {/* Nova Seção Sobre Geração Mil - Mobile Only */}
        <SobreGeracaoMil />
        
        {/* Nova Seção História - Mobile Only */}
        <HistoriaSection />
        
        {/* Nova Seção Resultados - Mobile Only */}
        <ResultadosSection />
        
        {/* Nova Seção Contato Mobile - Mobile Only */}
        <ContatoMobile />
        
        {/* Nova Seção Professores - Mobile Only */}
        <ProfessoresSection />
        
        {/* Nova Seção Resultados que Inspiram - Mobile Only */}
        <ResultadosInspiramSection />
        
        {/* Nova Seção Plataforma Multiplataforma - Mobile Only */}
        <PlataformaMultiplataformaSection />
        
        {/* Nova Seção Aulões Presenciais - Mobile Only */}
        <AuloesPresenciaisSection />
        
        {/* Nova Seção Redes Sociais - Mobile Only */}
        <RedesSociaisSection />
        
        {/* Nova Seção Nosso Instagram - Mobile Only */}
        <NossoInstagramSection />
        
        {/* Nova Seção Materiais Didáticos - Mobile Only */}
        <MateriaisDidaticosSection />
        
        {/* Nova Seção CTA Acesso ao Conteúdo - Mobile Only */}
        <AcessoConteudoCTASection />
        
        {/* Nova Seção Planos - Mobile Only */}
        <PlanosMobile />
        
        {/* Seção Passo a Passo da Compra - MOBILE ONLY */}
        <div id="passo-a-passo" className="block md:hidden">
          <PassoAPassoCompra />
        </div>
        
        {/* Nova Seção FAQ - Mobile Only */}
        <FAQMobile />
        
        {/* Novo Footer - Mobile Only */}
        <FooterMobile />
      </Suspense>
      
      {/* Seção Passo a Passo da Compra - DESKTOP ONLY */}
      <div id="passo-a-passo-desktop" className="hidden md:block absolute left-0 top-[13768px] w-[1528px] overflow-hidden" data-name="StepByStepSection">
        <PassoAPassoCompra />
      </div>

      <div id="planos-desktop" className="hidden md:flex absolute content-stretch flex-col h-[1746px] items-start left-[8px] pb-0 pt-[96px] px-0 top-[15468px] w-[1528px] overflow-hidden" data-name="PlansSection">
        <BackgroundImage />
        <div className="h-[1554px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute h-[92px] left-[16px] top-0 w-[1496px]" data-name="Container">
            <div className="absolute h-[48px] left-0 top-0 w-[1496px]" data-name="Heading 2">
              <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[48px] left-[641.8px] text-[#1c398e] text-[48px] text-center text-nowrap top-0 translate-x-[-50%]">Planos de</p>
              <TextBackgroundImageAndText text="matrícula" additionalClassNames="left-[756.92px] top-0 w-[212.766px]" />
            </div>
            <div className="absolute h-[28px] left-[364px] top-[64px] w-[768px]" data-name="Paragraph">
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[384.73px] text-[#4a5565] text-[18px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Escolha o plano ideal para você e comece sua preparação para o vestibular</p>
            </div>
          </div>
          <div className="absolute h-[602px] left-[316px] top-[140px] w-[896px]" data-name="Container">
            <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[602px] items-start left-0 pb-[2px] pt-[34px] px-[34px] rounded-[16px] top-0 w-[432px]" data-name="Container">
              <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="h-[150px] relative shrink-0 w-full" data-name="Container">
                <BackgroundImageAndText text="Plano Básico" additionalClassNames="h-[32px] w-[364px]" />
                <div className="absolute h-[24px] left-0 top-[40px] w-[364px]" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[181.64px] text-[#4a5565] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%]">Redação + Matemática</p>
                </div>
                <div className="absolute h-[42px] left-0 top-[80px] w-[364px]" data-name="Container">
                  <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[40px] left-[161.06px] text-[#1c398e] text-[36px] text-center text-nowrap top-0 translate-x-[-50%]">R$ 29,90</p>
                  <div className="absolute content-stretch flex h-[24px] items-start left-[234.3px] top-[16px] w-[42.141px]" data-name="Text">
                    <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#4a5565] text-[18px] text-center text-nowrap">/mês</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[130px] w-[364px]" data-name="Paragraph">
                  <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[14px] text-center">A partir de fevereiro/2026</p>
                </div>
              </div>
              <div className="h-[240px] relative shrink-0 w-full" data-name="List">
                <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[364px]" data-name="List Item">
                  <IconBackgroundImage1 />
                  <TextBackgroundImageAndText5 text="Acesso às disciplinas:" additionalClassNames="w-[153.031px]" />
                </div>
                <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[36px] w-[340px]" data-name="List Item">
                  <IconBackgroundImage1 />
                  <TextBackgroundImageAndText5 text="✍️ Redação completa" additionalClassNames="w-[156.438px]" />
                </div>
                <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[72px] w-[340px]" data-name="List Item">
                  <IconBackgroundImage1 />
                  <TextBackgroundImageAndText5 text="🔢 Matemática completa" additionalClassNames="w-[179.547px]" />
                </div>
                <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-[108px] w-[364px]" data-name="List Item">
                  <IconBackgroundImage1 />
                  <TextBackgroundImageAndText5 text="🎥 Aulas ao vivo todos os dias" additionalClassNames="w-[217.313px]" />
                </div>
                <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-[144px] w-[364px]" data-name="List Item">
                  <IconBackgroundImage1 />
                  <TextBackgroundImageAndText5 text="Videoaulas gravadas" additionalClassNames="w-[144.641px]" />
                </div>
                <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-[180px] w-[364px]" data-name="List Item">
                  <IconBackgroundImage1 />
                  <TextBackgroundImageAndText5 text="Material em PDF" additionalClassNames="w-[116.656px]" />
                </div>
                <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-[216px] w-[364px]" data-name="List Item">
                  <IconBackgroundImage1 />
                  <TextBackgroundImageAndText5 text="Exercícios com gabarito" additionalClassNames="w-[166.719px]" />
                </div>
              </div>
              <a 
                href="https://pay.hotmart.com/T103705923C" 
                target="_blank" 
                rel="noopener noreferrer"
                id="btn-plano-basico-regular"
                data-track="click-plano"
                data-plan="basico"
                data-price="29.90"
                data-section="planos-regulares"
                data-promotion="false"
                className="bg-[#1c398e] h-[56px] relative rounded-[10px] shrink-0 w-full transition-transform hover:scale-105 cursor-pointer block" 
                data-name="Button"
              >
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[182.19px] text-[16px] text-center text-nowrap text-white top-[14px] translate-x-[-50%]">ESCOLHER PLANO</p>
              </a>
            </div>
            <div className="absolute h-[632.1px] left-[453.2px] rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[-15.05px] w-[453.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(125.664deg, rgb(253, 199, 0) 0%, rgb(255, 223, 32) 100%)" }}>
              <div className="absolute h-[157.5px] left-[33.6px] top-[33.6px] w-[386.4px]" data-name="Container">
                <BackgroundImageAndText text="Plano Completo" additionalClassNames="h-[33.601px] w-[386.4px]" />
                <div className="absolute h-[25.2px] left-0 top-[42px] w-[386.4px]" data-name="Paragraph">
                  <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[193.91px] text-[#193cb8] text-[16px] text-center text-nowrap top-[-1.95px] translate-x-[-50%]">Todas as disciplinas</p>
                </div>
                <div className="absolute h-[44.101px] left-0 top-[84px] w-[386.4px]" data-name="Container">
                  <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[40px] left-[171.66px] text-[#1c398e] text-[36px] text-center text-nowrap top-[-3.2px] translate-x-[-50%]">R$ 59,90</p>
                  <div className="absolute content-stretch flex h-[25.2px] items-start left-[258.97px] top-[16.8px] w-[44.248px]" data-name="Text">
                    <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#193cb8] text-[18px] text-center">/mês</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[136.5px] w-[386.4px]" data-name="Paragraph">
                  <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#193cb8] text-[14px] text-center">A partir de fevereiro/2026</p>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[12.6px] h-[289.8px] items-start left-[33.6px] top-[216.3px] w-[386.4px]" data-name="List">
                <div className="content-stretch flex gap-[8.4px] h-[25.2px] items-center relative shrink-0 w-full" data-name="List Item">
                  <IconBackgroundImage2 />
                  <TextBackgroundImageAndText6 text="📚 Acesso a TODAS as disciplinas" additionalClassNames="h-[25.2px] w-[263.025px]" />
                </div>
                <div className="content-stretch flex gap-[8.4px] h-[25.2px] items-center relative shrink-0 w-full" data-name="List Item">
                  <IconBackgroundImage2 />
                  <TextBackgroundImageAndText6 text="🎥 Aulas ao vivo TODOS OS DIAS" additionalClassNames="h-[25.2px] w-[264.059px]" />
                </div>
                <div className="content-stretch flex gap-[8.4px] h-[25.2px] items-center relative shrink-0 w-full" data-name="List Item">
                  <IconBackgroundImage2 />
                  <TextBackgroundImageAndText6 text="📹 Videoaulas semanais" additionalClassNames="h-[25.2px] w-[190.608px]" />
                </div>
                <div className="content-stretch flex gap-[8.4px] h-[25.199px] items-center relative shrink-0 w-full" data-name="List Item">
                  <IconBackgroundImage2 />
                  <TextBackgroundImageAndText6 text="💻 Conteúdo completo da plataforma" additionalClassNames="h-[25.199px] w-[300.792px]" />
                </div>
                <div className="content-stretch flex gap-[8.4px] h-[25.2px] items-center relative shrink-0 w-full" data-name="List Item">
                  <IconBackgroundImage2 />
                  <TextBackgroundImageAndText7 text="Exercícios ilimitados" additionalClassNames="w-[153.054px]" />
                </div>
                <div className="content-stretch flex gap-[8.4px] h-[25.2px] items-center relative shrink-0 w-full" data-name="List Item">
                  <IconBackgroundImage2 />
                  <TextBackgroundImageAndText7 text="Material completo em PDF" additionalClassNames="w-[203.191px]" />
                </div>
                <div className="content-stretch flex gap-[8.4px] h-[25.2px] items-center relative shrink-0 w-full" data-name="List Item">
                  <IconBackgroundImage2 />
                  <TextBackgroundImageAndText7 text="Simulados e provas" additionalClassNames="w-[147.427px]" />
                </div>
                <div className="content-stretch flex gap-[8.4px] h-[25.2px] items-center relative shrink-0 w-full" data-name="List Item">
                  <IconBackgroundImage2 />
                  <TextBackgroundImageAndText7 text="Cronograma de estudos" additionalClassNames="w-[182.864px]" />
                </div>
              </div>
              <a 
                href="https://pay.hotmart.com/L103735493W"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-plano-completo-regular"
                data-track="click-plano"
                data-plan="completo"
                data-price="59.90"
                data-section="planos-regulares"
                data-promotion="false"
                data-badge="mais-popular"
                className="absolute bg-[#1c398e] h-[58.8px] left-[33.6px] rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[539.7px] w-[386.4px] transition-transform hover:scale-105 cursor-pointer block" 
                data-name="Button"
              >
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[192.95px] text-[#fdc700] text-[16px] text-center text-nowrap top-[14.85px] translate-x-[-50%]">ESCOLHER PLANO</p>
              </a>
              <div className="absolute bg-[#1c398e] h-[37.8px] left-[147.11px] rounded-[3.35544e+07px] top-[-16.8px] w-[159.37px]" data-name="Container">
                <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[25.2px] text-[#fdc700] text-[14px] text-nowrap top-[6.4px]">MAIS POPULAR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}