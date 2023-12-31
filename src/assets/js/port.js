// 필요한 모듈 가져오기
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// port 함수 정의
export function port() {
    // port 함수를 로그에 출력
    console.log(port);

    // 'port__item' 클래스를 가진 요소 선택
    const horSection = gsap.utils.toArray('.port__item');

    // ScrollTrigger를 사용하여 GSAP 애니메이션 적용
    gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '#port',
            start: 'top 56px',
            end: '+=3000',
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}
