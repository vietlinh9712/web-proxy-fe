import {Component, HostListener, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{

    headers: any[] = [
        {
           title: 'Trang chủ',
           link: '/'
         },
        {
            title: 'Bảng giá',
            link: '/'
        },
        {
            title: 'Trợ giúp',
            link: '/'
        },
    ];

    authHeaders = [{
        title: 'Đăng kí',
        link: '/sign-up'
    },
    {
        title: 'Đăng nhập',
        link: '/sign-in'
    },
    ];

    functions: string[] = [
        'Bảo mật cao',
        'Tốc độ nhanh',
        'Giá thành phải chăng'
    ];

    howToWorks: any[] = [
        {
            icon: 'easy_download_icon.png',
            title: 'Dễ dàng sử dụng',
            desc: 'Bạn chỉ cần tạo tài khoản, chọn quốc gia mà bạn cần một địa chỉ IP hoặc Proxy.'
        },
        {
            icon: 'enjoy_wordwide_icon.png',
            title: 'Khởi tạo nhanh',
            desc: 'Khởi tạo IP Proxy nhanh chóng chỉ với 1 click chuột. Tự động quản lý và gia hạn proxy.'
        },
        {
            icon: 'instant_setup_icon.png',
            title: 'Địa chỉ IP đa dạng',
            desc: 'Với hơn 190 quốc gia và hơn 2 ngìn trung tâm dữ liệu, cung cấp cho bạn một lựa chọn IP đa dạng.'
        },
    ];

    countries: any[] = [
        {
            flag: 'img_us.png',
            name: 'United States',
            count: '762,408'
        },
        {
            flag: 'img_gb.png',
            name: 'Great Britain',
            count: '629,956'
        },
        {
            flag: 'img_ind.png',
            name: 'Indonesia',
            count: '229,328'
        },
        {
            flag: 'img_india.png',
            name: 'United States',
            count: '219,908'
        },
        {
            flag: 'img_canada.png',
            name: 'Canada',
            count: '329,348'
        },
        {
            flag: 'img_france.png',
            name: 'France',
            count: '929,412'
        },
        {
            flag: 'img_china.png',
            name: 'Hong Kong, China',
            count: '429,231'
        },
        {
            flag: 'img_sk.png',
            name: 'South Korea',
            count: '229,654'
        },
    ];

    questions = [{
        title: '',
        answer: ''
    }];

    clientReviews = [
        {
            avatar: '/assets/images/avatars/male-01.jpg',
            comment: 'Chúng tôi hài lòng với chất lượng proxy mà bên XProxy cung cấp. Proxy hoạt động ổn định và tốc độ đảm bảo.'
        },
        {
            avatar: '/assets/images/avatars/male-02.jpg',
            comment: 'Dịch vụ như cc'
        },
        {
            avatar: '/assets/images/avatars/male-03.jpg',
            comment: 'Dịch vụ như cc'
        },
        {
            avatar: '/assets/images/avatars/male-04.jpg',
            comment: 'Dịch vụ như cc'
        },
    ];

    /**
     * Constructor
     */
    constructor(
        private router: Router
    )
    {
    }

    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    goTo(link: string): void {
        this.router.navigate([link]);
    }


    @HostListener('scroll', ['$event']) onScroll(event: any): void {
        console.log(event);
    }
}
